"use client";

import { useEffect, useRef } from "react";

// ─── Types ───
interface RGB {
  r: number;
  g: number;
  b: number;
}

interface Agent {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: RGB;
  age: number;
  maxAge: number;
  maxRadius: number;
  radius: number;
  opacity: number;
  reproTimer: number;
  canRepro: boolean;
  wanderAngle: number;
  wanderRate: number;
  generation: number;
  desire: number;
  seeking: boolean;
  excitement: number;
  gender: "male" | "female" | "unique";
  shimmerPhase: number;
}

interface BirthLight {
  x: number;
  y: number;
  age: number;
  maxAge: number;
  color: RGB;
  childColor: RGB;
  alive: boolean;
  isUnique: boolean;
}

interface ObstacleRect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export interface MouseState {
  x: number;
  y: number;
  clicking: boolean;
}

export interface LifeSimProps {
  width: number;
  height: number;
  mouseRef: React.RefObject<MouseState>;
  obstaclesRef: React.RefObject<ObstacleRect[]>;
}

// ─── Color Palettes ───
const FEMALE_COLORS: RGB[] = [
  { r: 249, g: 115, b: 22 },
  { r: 251, g: 146, b: 60 },
  { r: 245, g: 158, b: 11 },
  { r: 234, g: 88, b: 12 },
  { r: 217, g: 119, b: 57 },
  { r: 253, g: 186, b: 116 },
];
const MALE_COLORS: RGB[] = [
  { r: 56, g: 189, b: 248 },
  { r: 96, g: 165, b: 250 },
  { r: 14, g: 165, b: 233 },
  { r: 125, g: 196, b: 251 },
  { r: 59, g: 130, b: 246 },
  { r: 99, g: 205, b: 255 },
];
const UNIQUE_COLORS: RGB[] = [
  { r: 255, g: 245, b: 157 },
  { r: 255, g: 237, b: 120 },
  { r: 254, g: 252, b: 200 },
  { r: 255, g: 250, b: 180 },
  { r: 253, g: 255, b: 220 },
  { r: 255, g: 241, b: 170 },
  { r: 250, g: 255, b: 240 },
  { r: 255, g: 255, b: 235 },
];

// ─── Helpers ───
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
function dist(a: { x: number; y: number }, b: { x: number; y: number }): number {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}
function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}
function rand(lo: number, hi: number): number {
  return lo + Math.random() * (hi - lo);
}
function colorStr(c: RGB, a = 1): string {
  return `rgba(${c.r},${c.g},${c.b},${a})`;
}

function mixColor(c1: RGB, c2: RGB, bias = 0.5): RGB {
  const d = () => clamp(Math.round(rand(-15, 15)), -22, 22);
  return {
    r: clamp(Math.round(lerp(c1.r, c2.r, bias) + d()), 12, 255),
    g: clamp(Math.round(lerp(c1.g, c2.g, bias) + d()), 12, 255),
    b: clamp(Math.round(lerp(c1.b, c2.b, bias) + d()), 12, 255),
  };
}

const STAGE = {
  INFANT: 0.07,
  YOUNG: 0.22,
  MATURE: 0.58,
  ELDER: 0.84,
  DYING: 1.0,
};

// ─── Birth Light ───
function createBirthLight(
  x: number,
  y: number,
  childColor: RGB,
  pA: RGB,
  pB: RGB,
  isUnique: boolean
): BirthLight {
  return {
    x,
    y,
    age: 0,
    maxAge: isUnique ? 100 : 75,
    color: mixColor(pA, pB, 0.5),
    childColor,
    alive: true,
    isUnique,
  };
}

function updateBirthLight(bl: BirthLight): void {
  bl.age++;
  if (bl.age >= bl.maxAge) bl.alive = false;
}

function drawBirthLight(ctx: CanvasRenderingContext2D, bl: BirthLight): void {
  const t = bl.age / bl.maxAge;
  const sw = 0.28;
  let brightness: number, radius: number;
  if (t < sw) {
    const e = 1 - Math.pow(1 - t / sw, 3);
    brightness = e;
    radius = 8 + (bl.isUnique ? 100 : 72) * e;
  } else {
    const f = (t - sw) / (1 - sw);
    brightness = 1 - f * f;
    radius = (bl.isUnique ? 108 : 80) + 28 * f;
  }
  if (brightness < 0.005) return;

  const intensityMul = bl.isUnique ? 1.6 : 1;

  const hR = radius * (bl.isUnique ? 2.2 : 1.7);
  const h = ctx.createRadialGradient(bl.x, bl.y, 0, bl.x, bl.y, hR);
  h.addColorStop(0, colorStr(bl.childColor, brightness * 0.15 * intensityMul));
  h.addColorStop(0.4, colorStr(bl.color, brightness * 0.05 * intensityMul));
  h.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath();
  ctx.arc(bl.x, bl.y, hR, 0, Math.PI * 2);
  ctx.fillStyle = h;
  ctx.fill();

  const m = ctx.createRadialGradient(bl.x, bl.y, 0, bl.x, bl.y, radius);
  m.addColorStop(0, `rgba(255,255,255,${brightness * 0.9 * intensityMul})`);
  m.addColorStop(0.1, colorStr(bl.childColor, brightness * 0.7 * intensityMul));
  m.addColorStop(0.35, colorStr(bl.color, brightness * 0.25));
  m.addColorStop(1, colorStr(bl.color, 0));
  ctx.beginPath();
  ctx.arc(bl.x, bl.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = m;
  ctx.fill();

  if (brightness > 0.12) {
    const cR = (bl.isUnique ? 7 : 4.5) * brightness;
    const c = ctx.createRadialGradient(bl.x, bl.y, 0, bl.x, bl.y, cR);
    c.addColorStop(
      0,
      `rgba(255,255,${bl.isUnique ? 220 : 255},${Math.min(brightness * 1.3, 1)})`
    );
    c.addColorStop(1, "rgba(255,255,255,0)");
    ctx.beginPath();
    ctx.arc(bl.x, bl.y, cR, 0, Math.PI * 2);
    ctx.fillStyle = c;
    ctx.fill();
  }
}

// ─── Nectar Attractor ───
function drawAttractor(
  ctx: CanvasRenderingContext2D,
  mx: number,
  my: number,
  frame: number
): void {
  const t = frame * 0.03;
  const breathe = 0.8 + 0.2 * Math.sin(t * 1.2);
  const aR = (35 + Math.sin(t * 0.8) * 8) * breathe;
  const a = ctx.createRadialGradient(mx, my, 0, mx, my, aR);
  a.addColorStop(0, `rgba(253,186,116,${0.12 * breathe})`);
  a.addColorStop(0.3, `rgba(249,115,22,${0.07 * breathe})`);
  a.addColorStop(0.6, `rgba(234,88,12,${0.03 * breathe})`);
  a.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath();
  ctx.arc(mx, my, aR, 0, Math.PI * 2);
  ctx.fillStyle = a;
  ctx.fill();
  ctx.save();
  ctx.translate(mx, my);
  ctx.rotate(t * 0.15);
  for (let i = 0; i < 5; i++) {
    const ang = (i / 5) * Math.PI * 2;
    const w = Math.sin(t * 1.5 + i * 1.7) * 0.15;
    const pL = 18 + Math.sin(t * 0.9 + i * 2.1) * 5;
    const pW = 4 + Math.sin(t * 1.1 + i * 1.3) * 1.5;
    ctx.save();
    ctx.rotate(ang + w);
    const pg = ctx.createLinearGradient(0, 0, pL, 0);
    pg.addColorStop(0, `rgba(253,224,180,${0.2 * breathe})`);
    pg.addColorStop(0.5, `rgba(251,146,60,${0.1 * breathe})`);
    pg.addColorStop(1, "rgba(251,146,60,0)");
    ctx.beginPath();
    ctx.ellipse(pL * 0.5, 0, pL * 0.5, pW, 0, 0, Math.PI * 2);
    ctx.fillStyle = pg;
    ctx.fill();
    ctx.restore();
  }
  ctx.restore();
  const cR = 4 + Math.sin(t * 2) * 1;
  const c = ctx.createRadialGradient(mx, my, 0, mx, my, cR);
  c.addColorStop(0, `rgba(255,247,230,${0.5 * breathe})`);
  c.addColorStop(0.5, `rgba(253,186,116,${0.3 * breathe})`);
  c.addColorStop(1, "rgba(249,115,22,0)");
  ctx.beginPath();
  ctx.arc(mx, my, cR, 0, Math.PI * 2);
  ctx.fillStyle = c;
  ctx.fill();
  for (let i = 0; i < 3; i++) {
    const sa = t * 1.5 + i * 2.2;
    const sr = 12 + Math.sin(sa * 0.7 + i) * 8;
    const sx = mx + Math.cos(sa + i * 2.09) * sr;
    const sy = my + Math.sin(sa + i * 2.09) * sr;
    ctx.beginPath();
    ctx.arc(sx, sy, 0.8, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(253,224,180,${(0.15 + Math.sin(sa * 2 + i) * 0.1) * breathe})`;
    ctx.fill();
  }
}

// ─── Bounce: reverse direction + small random wobble ───
function bounceOffRects(
  a: Agent,
  rects: ObstacleRect[],
  pad?: number
): void {
  const p = pad || 5;
  for (const r of rects) {
    const L = r.left - p,
      T2 = r.top - p,
      R = r.right + p,
      B = r.bottom + p;
    if (a.x < L || a.x > R || a.y < T2 || a.y > B) continue;

    // Push agent to nearest edge
    const dL = a.x - L,
      dR = R - a.x,
      dT = a.y - T2,
      dB = B - a.y;
    const minD = Math.min(dL, dR, dT, dB);
    if (minD === dL) a.x = L - 1;
    else if (minD === dR) a.x = R + 1;
    else if (minD === dT) a.y = T2 - 1;
    else a.y = B + 1;

    // Reverse direction with random wobble
    const speed = Math.sqrt(a.vx * a.vx + a.vy * a.vy);
    const exitSpeed = Math.max(speed * 0.6, 0.3);
    const currentAngle = Math.atan2(a.vy, a.vx);
    const newAngle = currentAngle + Math.PI + rand(-0.3, 0.3);
    a.vx = Math.cos(newAngle) * exitSpeed;
    a.vy = Math.sin(newAngle) * exitSpeed;
    break;
  }
}

// ─── Agent Factory ───
function createAgent(
  x: number,
  y: number,
  color: RGB,
  pA: Agent | null,
  pB: Agent | null,
  gender: "male" | "female" | "unique"
): Agent {
  const maxAge = rand(800, 2200);
  return {
    x,
    y,
    vx: rand(-0.08, 0.08),
    vy: rand(-0.08, 0.08),
    color,
    age: 0,
    maxAge,
    maxRadius: gender === "unique" ? rand(4, 8.5) : rand(3.5, 7.5),
    radius: 0.4,
    opacity: 0.2,
    reproTimer: pA ? maxAge * 0.35 : rand(80, 220),
    canRepro: false,
    wanderAngle: rand(0, Math.PI * 2),
    wanderRate: rand(0.002, 0.006),
    generation: pA && pB
      ? Math.max(pA.generation || 0, pB.generation || 0) + 1
      : 0,
    desire: 0,
    seeking: false,
    excitement: 0,
    gender,
    shimmerPhase: rand(0, Math.PI * 2),
  };
}

function randomGenderedAgent(x: number, y: number): Agent {
  const r = Math.random();
  if (r < 0.025) {
    const c = UNIQUE_COLORS[Math.floor(Math.random() * UNIQUE_COLORS.length)];
    return createAgent(x, y, { ...c }, null, null, "unique");
  }
  const isMale = Math.random() < 0.5;
  const pool = isMale ? MALE_COLORS : FEMALE_COLORS;
  const c = pool[Math.floor(Math.random() * pool.length)];
  return createAgent(x, y, { ...c }, null, null, isMale ? "male" : "female");
}

function createInitialPop(w: number, h: number, n: number): Agent[] {
  const out: Agent[] = [];
  for (let i = 0; i < n; i++) {
    const a = randomGenderedAgent(
      rand(w * 0.08, w * 0.92),
      rand(h * 0.08, h * 0.92)
    );
    a.age = rand(0, a.maxAge * 0.45);
    a.reproTimer = 0;
    out.push(a);
  }
  return out;
}

// ─── Simulation Component ───
export function LifeSim({ width, height, mouseRef, obstaclesRef }: LifeSimProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    agents: [] as Agent[],
    blooms: [] as BirthLight[],
    frame: 0,
    popTarget: 0,
  });

  useEffect(() => {
    if (!width || !height) return;
    const n = clamp(Math.floor((width * height) / 13000), 18, 70);
    stateRef.current.popTarget = n;
    stateRef.current.agents = createInitialPop(width, height, n);
    stateRef.current.blooms = [];
    stateRef.current.frame = 0;
  }, [width, height]);

  useEffect(() => {
    if (!width || !height) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const S = stateRef.current;
    const LOW_T = () => S.popTarget * 0.72;
    const HIGH_T = () => S.popTarget * 1.22;

    const tick = () => {
      S.frame++;
      const agents = S.agents;
      const blooms = S.blooms;
      const mouse = mouseRef.current;
      const obstacles = obstaclesRef.current || [];
      const births: Agent[] = [];
      const deaths: number[] = [];
      const pop = agents.length;

      const lowT = LOW_T(),
        highT = HIGH_T();
      let pressure = 0;
      if (pop < lowT) pressure = -((lowT - pop) / lowT);
      else if (pop > highT) pressure = (pop - highT) / (highT * 0.5);
      pressure = clamp(pressure, -1, 1);

      for (let i = 0; i < agents.length; i++) {
        const a = agents[i];
        a.age++;
        const lf = a.age / a.maxAge;

        let targetR: number, targetO: number;
        if (lf < STAGE.INFANT) {
          const t = lf / STAGE.INFANT;
          targetR = a.maxRadius * (0.06 + 0.22 * (1 - Math.pow(1 - t, 2)));
          targetO = 0.25 + 0.35 * t;
        } else if (lf < STAGE.YOUNG) {
          const t = (lf - STAGE.INFANT) / (STAGE.YOUNG - STAGE.INFANT);
          targetR = a.maxRadius * (0.28 + 0.34 * t);
          targetO = 0.6 + 0.18 * t;
        } else if (lf < STAGE.MATURE) {
          const t = (lf - STAGE.YOUNG) / (STAGE.MATURE - STAGE.YOUNG);
          targetR =
            a.maxRadius * (0.62 + 0.38 * Math.sin(t * Math.PI * 0.5));
          targetO = 0.78 + 0.22 * Math.sin(t * Math.PI * 0.5);
        } else if (lf < STAGE.ELDER) {
          const t = (lf - STAGE.MATURE) / (STAGE.ELDER - STAGE.MATURE);
          targetR = a.maxRadius * (1.0 - 0.18 * t);
          targetO = 0.9 - 0.3 * t;
        } else {
          const t = (lf - STAGE.ELDER) / (1 - STAGE.ELDER);
          targetR = a.maxRadius * (0.82 - 0.72 * t * t);
          targetO = 0.6 * (1 - t * t);
        }

        if (a.gender === "unique") targetO = Math.min(targetO * 1.35, 1.0);

        a.radius = lerp(a.radius, targetR, 0.04);
        a.opacity = lerp(a.opacity, targetO, 0.03);

        if (a.age >= a.maxAge) {
          deaths.push(i);
          continue;
        }
        if (a.reproTimer > 0) a.reproTimer--;

        if (a.gender === "unique") {
          a.canRepro = false;
          a.seeking = false;
          a.desire = 0;
        } else {
          a.canRepro =
            a.reproTimer <= 0 && lf >= STAGE.YOUNG && lf < STAGE.ELDER;
          if (a.canRepro) {
            const base =
              Math.sin(lf * Math.PI * 3 + a.wanderAngle * 2) * 0.5 + 0.5;
            let boost = 0;
            if (pressure < 0) boost = -pressure * 0.55;
            if (pressure > 0) boost = -pressure * 0.75;
            a.desire = clamp(base + boost, 0, 1);
            a.seeking = a.desire > 0.52;
          } else {
            a.desire = 0;
            a.seeking = false;
          }
        }

        let targetEx = 0;
        if (a.seeking) {
          targetEx = 0.2;
          for (let j = 0; j < agents.length; j++) {
            if (
              i === j ||
              !agents[j].seeking ||
              agents[j].gender === a.gender
            )
              continue;
            const d = dist(a, agents[j]);
            if (d < 150)
              targetEx = Math.max(targetEx, 0.25 + 0.75 * (1 - d / 150));
          }
        }
        a.excitement = lerp(a.excitement, targetEx, 0.025);

        const calm = a.gender === "unique" ? 0.006 : 0.01;
        const excited = 0.11 * a.excitement;
        a.wanderAngle +=
          rand(-a.wanderRate, a.wanderRate) * (18 + a.excitement * 90);
        a.vx += Math.cos(a.wanderAngle) * (calm + excited);
        a.vy += Math.sin(a.wanderAngle) * (calm + excited);

        if (a.gender === "unique") {
          a.vx += Math.cos(S.frame * 0.002 + a.shimmerPhase) * 0.002;
          a.vy += Math.sin(S.frame * 0.002 + a.shimmerPhase) * 0.002;
        }

        if (a.seeking) {
          let closest: Agent | null = null,
            cD = 200;
          for (let j = 0; j < agents.length; j++) {
            if (
              i === j ||
              !agents[j].seeking ||
              agents[j].gender === a.gender
            )
              continue;
            const d = dist(a, agents[j]);
            if (d < cD) {
              cD = d;
              closest = agents[j];
            }
          }
          if (closest) {
            const dx = closest.x - a.x,
              dy = closest.y - a.y,
              d = Math.max(cD, 1);
            a.vx += (dx / d) * (0.012 + a.excitement * 0.06);
            a.vy += (dy / d) * (0.012 + a.excitement * 0.06);
          }
        }

        if (mouse.clicking && mouse.x > 0) {
          const dx = mouse.x - a.x,
            dy = mouse.y - a.y;
          const d = Math.max(dist(a, mouse), 1);
          const bp = a.gender === "unique" ? 0.18 : a.seeking ? 0.08 : 0.12;
          a.vx += dx * Math.min(3.5 / d, bp) * 0.22;
          a.vy += dy * Math.min(3.5 / d, bp) * 0.22;
        }

        const eD = Math.min(a.x, a.y, width - a.x, height - a.y);
        if (eD < 80) {
          const cx = width / 2,
            cy = height / 2;
          const dC = Math.max(
            Math.sqrt((cx - a.x) ** 2 + (cy - a.y) ** 2),
            1
          );
          a.vx += ((cx - a.x) / dC) * (0.035 + (80 - eD) * 0.002);
          a.vy += ((cy - a.y) / dC) * (0.035 + (80 - eD) * 0.002);
        }

        a.vx *= 0.925 + a.excitement * 0.042;
        a.vy *= 0.925 + a.excitement * 0.042;
        const sp = Math.sqrt(a.vx ** 2 + a.vy ** 2);
        const maxSp =
          a.gender === "unique" ? 0.3 : 0.35 + a.excitement * 2.2;
        if (sp > maxSp) {
          a.vx = (a.vx / sp) * maxSp;
          a.vy = (a.vy / sp) * maxSp;
        }

        a.x += a.vx;
        a.y += a.vy;

        bounceOffRects(a, obstacles, 5);

        if (
          a.x < -50 ||
          a.x > width + 50 ||
          a.y < -50 ||
          a.y > height + 50
        )
          deaths.push(i);
      }

      // Reproduction
      for (let i = 0; i < agents.length; i++) {
        const a = agents[i];
        if (!a.seeking || deaths.includes(i)) continue;
        for (let j = i + 1; j < agents.length; j++) {
          const b = agents[j];
          if (!b.seeking || deaths.includes(j) || a.gender === b.gender)
            continue;
          const d = dist(a, b);
          if (d < 22 && pop + births.length - deaths.length < HIGH_T() + 3) {
            const bx = (a.x + b.x) / 2,
              by = (a.y + b.y) / 2;

            const isUnique = Math.random() < 0.02;
            let childGender: "male" | "female" | "unique";
            let childColor: RGB;
            if (isUnique) {
              childGender = "unique";
              childColor = {
                ...UNIQUE_COLORS[
                  Math.floor(Math.random() * UNIQUE_COLORS.length)
                ],
              };
            } else {
              childGender = Math.random() < 0.5 ? "male" : "female";
              const blend = mixColor(a.color, b.color, rand(0.3, 0.7));
              const pool =
                childGender === "male" ? MALE_COLORS : FEMALE_COLORS;
              childColor = mixColor(
                blend,
                pool[Math.floor(Math.random() * pool.length)],
                rand(0.35, 0.65)
              );
            }

            blooms.push(
              createBirthLight(bx, by, childColor, a.color, b.color, isUnique)
            );
            births.push(
              createAgent(
                bx + rand(-2, 2),
                by + rand(-2, 2),
                childColor,
                a,
                b,
                childGender
              )
            );

            const cdMul = pressure > 0 ? 1.5 : 0.8;
            a.reproTimer = a.maxAge * 0.28 * cdMul;
            b.reproTimer = b.maxAge * 0.28 * cdMul;
            a.seeking = false;
            b.seeking = false;
            a.excitement = 0;
            b.excitement = 0;
            const dx = b.x - a.x,
              dy = b.y - a.y,
              nd = Math.max(d, 1);
            a.vx -= (dx / nd) * 0.6;
            a.vy -= (dy / nd) * 0.6;
            b.vx += (dx / nd) * 0.6;
            b.vy += (dy / nd) * 0.6;
            break;
          }
        }
      }

      const uD = [...new Set(deaths)].sort((a, b) => b - a);
      for (const idx of uD) agents.splice(idx, 1);
      for (const c of births) agents.push(c);

      if (agents.length < LOW_T() * 0.65 && S.frame % 22 === 0) {
        const edge = Math.floor(rand(0, 4));
        let sx: number, sy: number;
        if (edge === 0) {
          sx = rand(50, width - 50);
          sy = -10;
        } else if (edge === 1) {
          sx = width + 10;
          sy = rand(50, height - 50);
        } else if (edge === 2) {
          sx = rand(50, width - 50);
          sy = height + 10;
        } else {
          sx = -10;
          sy = rand(50, height - 50);
        }
        agents.push(randomGenderedAgent(sx, sy));
      }

      for (let i = blooms.length - 1; i >= 0; i--) {
        updateBirthLight(blooms[i]);
        if (!blooms[i].alive) blooms.splice(i, 1);
      }

      // ─── Render ───
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(113,113,122,0.05)";
      for (let gx = 20; gx < width; gx += 42)
        for (let gy = 20; gy < height; gy += 42) {
          ctx.beginPath();
          ctx.arc(gx, gy, 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

      // Proximity lines
      for (let i = 0; i < agents.length; i++)
        for (let j = i + 1; j < agents.length; j++) {
          const d = dist(agents[i], agents[j]);
          if (d < 95) {
            ctx.beginPath();
            ctx.moveTo(agents[i].x, agents[i].y);
            ctx.lineTo(agents[j].x, agents[j].y);
            ctx.strokeStyle = colorStr(
              mixColor(agents[i].color, agents[j].color, 0.5),
              (1 - d / 95) * 0.04
            );
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        }

      // Seeking lines (M+F only)
      for (let i = 0; i < agents.length; i++) {
        if (!agents[i].seeking) continue;
        for (let j = i + 1; j < agents.length; j++) {
          if (!agents[j].seeking || agents[i].gender === agents[j].gender)
            continue;
          const d = dist(agents[i], agents[j]);
          if (d < 160) {
            const al =
              (1 - d / 160) *
              0.18 *
              (0.7 + 0.3 * Math.sin(S.frame * 0.08));
            ctx.beginPath();
            ctx.moveTo(agents[i].x, agents[i].y);
            ctx.lineTo(agents[j].x, agents[j].y);
            ctx.strokeStyle = `rgba(200,180,240,${al})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Agents
      for (const a of agents) {
        const lf = a.age / a.maxAge;

        if (a.gender === "unique") {
          const shimmer = Math.sin(S.frame * 0.04 + a.shimmerPhase);
          const pulse =
            0.85 + 0.15 * Math.sin(S.frame * 0.025 + a.shimmerPhase * 3);

          const auraR = a.radius * 8;
          const aura = ctx.createRadialGradient(
            a.x,
            a.y,
            0,
            a.x,
            a.y,
            auraR
          );
          aura.addColorStop(
            0,
            `rgba(255,250,200,${a.opacity * 0.15 * pulse})`
          );
          aura.addColorStop(
            0.25,
            `rgba(255,240,150,${a.opacity * 0.07 * pulse})`
          );
          aura.addColorStop(0.6, `rgba(255,230,100,${a.opacity * 0.02})`);
          aura.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(a.x, a.y, auraR, 0, Math.PI * 2);
          ctx.fillStyle = aura;
          ctx.fill();

          const glowR = a.radius * 4;
          const glow = ctx.createRadialGradient(
            a.x,
            a.y,
            0,
            a.x,
            a.y,
            glowR
          );
          glow.addColorStop(0, colorStr(a.color, a.opacity * 0.5 * pulse));
          glow.addColorStop(
            0.3,
            `rgba(255,250,220,${a.opacity * 0.25 * pulse})`
          );
          glow.addColorStop(1, colorStr(a.color, 0));
          ctx.beginPath();
          ctx.arc(a.x, a.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          const ringR = a.radius * (3 + shimmer * 0.4);
          ctx.beginPath();
          ctx.arc(a.x, a.y, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255,255,230,${0.1 + shimmer * 0.05})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          const ring2R = a.radius * (5 + shimmer * 0.6);
          ctx.beginPath();
          ctx.arc(a.x, a.y, ring2R, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255,245,180,${0.04 + shimmer * 0.02})`;
          ctx.lineWidth = 0.3;
          ctx.stroke();
        } else {
          const glR = a.radius * (3 + a.excitement * 2);
          if (glR > 1) {
            const g = ctx.createRadialGradient(
              a.x,
              a.y,
              0,
              a.x,
              a.y,
              glR
            );
            g.addColorStop(
              0,
              colorStr(a.color, a.opacity * (0.18 + a.excitement * 0.14))
            );
            g.addColorStop(1, colorStr(a.color, 0));
            ctx.beginPath();
            ctx.arc(a.x, a.y, glR, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
          }
        }

        // Body
        ctx.beginPath();
        ctx.arc(a.x, a.y, Math.max(a.radius, 0.3), 0, Math.PI * 2);
        ctx.fillStyle = colorStr(a.color, a.opacity);
        ctx.fill();

        // Core
        if (a.radius > 1) {
          const coreSize = a.gender === "unique" ? 0.4 : 0.3;
          const coreBright = a.gender === "unique" ? 0.85 : 0.5;
          ctx.beginPath();
          ctx.arc(a.x, a.y, a.radius * coreSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,${a.gender === "unique" ? 240 : 255},${a.opacity * coreBright})`;
          ctx.fill();
        }

        // Elder flicker
        if (
          lf > STAGE.ELDER &&
          Math.random() <
            ((lf - STAGE.ELDER) / (1 - STAGE.ELDER)) * 0.25
        ) {
          ctx.beginPath();
          ctx.arc(a.x, a.y, a.radius * rand(1.3, 2.2), 0, Math.PI * 2);
          ctx.fillStyle = colorStr(a.color, 0.045);
          ctx.fill();
        }

        // Seeking halo
        if (a.seeking && a.excitement > 0.1) {
          const pR =
            a.radius *
            (1.8 + 0.5 * Math.sin(S.frame * 0.06 + a.wanderAngle));
          ctx.beginPath();
          ctx.arc(a.x, a.y, pR, 0, Math.PI * 2);
          ctx.strokeStyle = colorStr(
            a.color,
            0.07 + a.excitement * 0.1
          );
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      for (const bl of blooms) drawBirthLight(ctx, bl);
      if (mouse.clicking && mouse.x > 0)
        drawAttractor(ctx, mouse.x, mouse.y, S.frame);

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [width, height, mouseRef, obstaclesRef]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="block h-full w-full"
    />
  );
}
