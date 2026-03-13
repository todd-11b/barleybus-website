export const DESIGN_TOKENS = {
  // Colors — Coral + Navy palette (approved March 2026)
  colorPrimary: "#FF6B52",       // Coral — CTA buttons, links, active states
  colorPrimaryHover: "#E85A42",  // Coral hover — slightly darker
  colorPrimaryLight: "rgba(255, 107, 82, 0.10)", // Coral tint — badges, subtle highlights
  colorNavy: "#1B2A4A",          // Dark navy — logo, nav links, footer bg
  colorNavyLight: "#2E3F5E",     // Navy hover state
  colorText: "#111111",          // Near-black — headlines
  colorTextSecondary: "#777777", // Medium gray — body text
  colorTextMuted: "#AAAAAA",     // Light gray — captions, hints
  colorBackground: "#FFFFFF",    // Pure white — primary background
  colorSurface: "#F5F5F3",       // Light gray — alternating sections, card backgrounds
  colorSurfaceElevated: "#FAFAF9", // Slightly warm — elevated cards
  colorBorder: "#EBEBEB",        // Neutral border
  colorBorderLight: "#F0F0EE",   // Softer border for nested elements
  colorFooterBg: "#1B2A4A",     // Navy — footer background
  colorFooterText: "#C8D0DE",   // Muted light — footer links
  colorFooterMuted: "#8A9AB8",  // Dimmer — footer secondary text
  colorStar: "#FBBF24",         // Gold — star ratings only

  // Typography
  fontDisplay: "'Inter', sans-serif",
  fontBody: "'Inter', sans-serif",
  fontSizeHero: "72px",
  fontSizeH1: "48px",
  fontSizeH2: "40px",
  fontSizeH3: "28px",
  fontSizeH4: "20px",
  fontSizeBody: "16px",
  fontSizeSmall: "14px",
  fontSizeXs: "12px",
  lineHeightHero: "1.0",
  lineHeightTight: "1.15",
  lineHeightSnug: "1.35",
  lineHeightBody: "1.6",
  trackingHero: "-0.03em",
  trackingTight: "-0.02em",

  // Spacing & Shape
  radiusXs: "4px",
  radiusSm: "8px",
  radiusMd: "12px",
  radiusLg: "16px",
  radiusXl: "24px",
  radiusFull: "9999px",
  // Legacy aliases
  borderRadius: "12px",
  borderRadiusSm: "8px",
  buttonPaddingX: "24px",
  buttonPaddingY: "12px",

  // Shadows — multi-layer depth system
  shadowXs: "0 1px 2px rgba(0,0,0,0.04)",
  shadowSm: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
  shadowMd: "0 4px 12px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.04)",
  shadowLg: "0 12px 32px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)",
  shadowXl: "0 20px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.05)",
  shadow2xl: "0 32px 64px rgba(0,0,0,0.14), 0 12px 24px rgba(0,0,0,0.06)",
  shadowCoral: "0 4px 16px rgba(255,107,82,0.30), 0 2px 4px rgba(255,107,82,0.15)",

  // Transitions
  easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeSpring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  durationFast: "150ms",
  durationNormal: "250ms",
  durationSlow: "400ms",
  durationSlower: "600ms",
} as const;

/**
 * GHL Funnel Custom CSS — generated from design tokens.
 * Paste into GHL Funnel > Custom CSS to match Vercel site styling.
 */
export const GHL_CUSTOM_CSS = `
:root {
  --bb-primary: ${DESIGN_TOKENS.colorPrimary};
  --bb-primary-hover: ${DESIGN_TOKENS.colorPrimaryHover};
  --bb-navy: ${DESIGN_TOKENS.colorNavy};
  --bb-text: ${DESIGN_TOKENS.colorText};
  --bb-text-secondary: ${DESIGN_TOKENS.colorTextSecondary};
  --bb-bg: ${DESIGN_TOKENS.colorBackground};
  --bb-surface: ${DESIGN_TOKENS.colorSurface};
  --bb-border: ${DESIGN_TOKENS.colorBorder};
  --bb-radius: ${DESIGN_TOKENS.borderRadius};
  --bb-radius-sm: ${DESIGN_TOKENS.borderRadiusSm};
  --bb-font: ${DESIGN_TOKENS.fontDisplay};
  --bb-shadow-sm: ${DESIGN_TOKENS.shadowSm};
  --bb-shadow-md: ${DESIGN_TOKENS.shadowMd};
}
`;
