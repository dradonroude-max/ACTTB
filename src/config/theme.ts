// =========================================================
// VISIONOS — THEME CONFIGURATION
// =========================================================

export type VisionTheme = "light" | "dark" | "custom";

export const theme = {
  // -------------------------------------------------------
  // ACTIVE THEME
  // -------------------------------------------------------

  active: "custom" as VisionTheme,

  // -------------------------------------------------------
  // THEME OPTIONS
  // -------------------------------------------------------

  options: {
    allowSystemPreference: false,
    allowUserToggle: true,
  },

  // -------------------------------------------------------
  // EFFECTS
  // -------------------------------------------------------

  effects: {
    glass: true,
    blur: true,
    tilt: true,
    parallax: true,
    depth: true,
  },
} as const;