"use client";

import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "dark" | "light" | "auto";
          size?: "normal" | "compact" | "invisible";
        }
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export function Turnstile({ onVerify, onError, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const scriptLoadedRef = useRef(false);

  const renderWidget = useCallback(() => {
    if (!window.turnstile || !containerRef.current) return;
    if (widgetIdRef.current) return;

    const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!sitekey) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey,
      callback: onVerify,
      "error-callback": onError,
      "expired-callback": onExpire,
      theme: "dark",
      size: "invisible",
    });
  }, [onVerify, onError, onExpire]);

  useEffect(() => {
    if (scriptLoadedRef.current) {
      renderWidget();
      return;
    }

    // Check if script already exists
    if (document.querySelector('script[src*="turnstile"]')) {
      scriptLoadedRef.current = true;
      renderWidget();
      return;
    }

    window.onTurnstileLoad = () => {
      scriptLoadedRef.current = true;
      renderWidget();
    };

    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  return <div ref={containerRef} />;
}
