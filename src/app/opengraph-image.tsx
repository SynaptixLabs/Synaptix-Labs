import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SynaptixLabs — AI-Native Products & Advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #0a0a0f 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo mark - S curve with dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {/* Orange dot */}
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f97316, #fb923c)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: "3px",
              height: "40px",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
            }}
          />
          {/* Blue dot */}
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
              display: "flex",
            }}
          />
        </div>

        {/* Company name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            letterSpacing: "-2px",
            color: "white",
            fontFamily: "monospace",
            display: "flex",
            marginBottom: "16px",
          }}
        >
          <span style={{ color: "#ffffff" }}>SYNAPTIX</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>LABS</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            display: "flex",
            marginBottom: "8px",
          }}
        >
          AI-Native Products & Advisory
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: 400,
            display: "flex",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.35)" }}>
            We create products that think & evolve
          </span>
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #f97316, #3b82f6)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
