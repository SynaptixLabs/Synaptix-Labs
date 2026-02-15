/**
 * Simple in-memory rate limiter.
 * Uses a Map with TTL-based cleanup — suitable for serverless/edge.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

interface RateLimitOptions {
  /** Time window in milliseconds */
  interval: number;
  /** Max requests per window */
  maxRequests: number;
}

interface RateLimitResult {
  success: boolean;
  remaining: number;
}

const stores = new Map<string, Map<string, RateLimitEntry>>();

export function rateLimit(options: RateLimitOptions) {
  const { interval, maxRequests } = options;
  const key = `${interval}-${maxRequests}`;

  if (!stores.has(key)) {
    stores.set(key, new Map());
  }
  const store = stores.get(key)!;

  return {
    check(ip: string): RateLimitResult {
      const now = Date.now();
      const entry = store.get(ip);

      // Cleanup stale entries periodically
      if (store.size > 1000) {
        for (const [k, v] of store) {
          if (now > v.resetAt) store.delete(k);
        }
      }

      if (!entry || now > entry.resetAt) {
        store.set(ip, { count: 1, resetAt: now + interval });
        return { success: true, remaining: maxRequests - 1 };
      }

      if (entry.count >= maxRequests) {
        return { success: false, remaining: 0 };
      }

      entry.count++;
      return { success: true, remaining: maxRequests - entry.count };
    },
  };
}
