export const DESIGN_TOKENS = {
  // Colors — Coral + Navy palette (approved March 2026)
  colorPrimary: "#FF6B52",       // Coral — CTA buttons, links, active states
  colorPrimaryHover: "#E85A42",  // Coral hover — slightly darker
  colorNavy: "#1B2A4A",          // Dark navy — logo, nav links, footer bg, headings (optional)
  colorNavyLight: "#2E3F5E",     // Navy hover state
  colorText: "#111111",          // Near-black — headlines
  colorTextSecondary: "#777777", // Medium gray — body text
  colorTextMuted: "#AAAAAA",     // Light gray — captions, hints
  colorBackground: "#FFFFFF",    // Pure white — primary background
  colorSurface: "#F5F5F3",       // Light gray — alternating sections, card backgrounds
  colorBorder: "#EBEBEB",        // Neutral border
  colorFooterBg: "#1B2A4A",     // Navy — footer background
  colorFooterText: "#C8D0DE",   // Muted light — footer links
  colorFooterMuted: "#8A9AB8",  // Dimmer — footer secondary text
  colorStar: "#FBBF24",         // Gold — star ratings only

  // Typography
  fontDisplay: "'Inter', sans-serif",
  fontBody: "'Inter', sans-serif",
  fontSizeHero: "48px",
  fontSizeH1: "36px",
  fontSizeH2: "28px",
  fontSizeBody: "16px",
  fontSizeSmall: "14px",

  // Spacing & Shape
  borderRadius: "12px",
  borderRadiusSm: "8px",
  buttonPaddingX: "24px",
  buttonPaddingY: "12px",

  // Shadows
  shadowSm: "0 1px 3px rgba(0,0,0,0.06)",
  shadowMd: "0 4px 12px rgba(0,0,0,0.08)",
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
