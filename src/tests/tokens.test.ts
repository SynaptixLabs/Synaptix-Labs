import { describe, it, expect } from "vitest";
import { tokens } from "@/lib/tokens";

describe("Design tokens", () => {
  it("exports a tokens object", () => {
    expect(tokens).toBeDefined();
    expect(typeof tokens).toBe("object");
  });

  it("has color tokens", () => {
    expect(tokens.colors).toBeDefined();
    expect(tokens.colors.void).toBe("#09090B");
    expect(tokens.colors.surface).toBe("#111113");
    expect(tokens.colors.accentWarm).toBe("#F97316");
    expect(tokens.colors.accentCore).toBe("#FB923C");
    expect(tokens.colors.accentCool).toBe("#38BDF8");
    expect(tokens.colors.textPrimary).toBe("#FAFAFA");
  });

  it("all color values are valid hex codes", () => {
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    for (const [key, value] of Object.entries(tokens.colors)) {
      expect(value, `tokens.colors.${key} should be a valid hex color`).toMatch(
        hexRegex
      );
    }
  });

  it("has font tokens", () => {
    expect(tokens.fonts).toBeDefined();
    expect(tokens.fonts.mono).toBeDefined();
    expect(tokens.fonts.sans).toBeDefined();
  });

  it("has gradient tokens", () => {
    expect(tokens.gradient).toBeDefined();
    expect(tokens.gradient.brand).toBeDefined();
    expect(tokens.gradient.brandCSS).toBeDefined();
  });

  it("has no undefined values at top level", () => {
    for (const [key, value] of Object.entries(tokens)) {
      expect(value, `tokens.${key} should not be undefined`).toBeDefined();
    }
  });
});
