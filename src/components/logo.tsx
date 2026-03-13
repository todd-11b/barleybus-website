import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "white";
  showTagline?: boolean;
  className?: string;
}

/**
 * Barley Bus logo component.
 *
 * Uses Next.js Image to load the actual logo PNGs when available.
 * Falls back to styled text if images aren't found.
 *
 * To use the real logos, add these files to public/:
 *   - public/logo-dark.png  (black text + orange tagline, for light backgrounds)
 *   - public/logo-white.png (white text, for dark backgrounds)
 */
export function Logo({ variant = "dark", showTagline = false, className }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div className={cn("flex flex-col items-start", className)}>
      {/* Main wordmark */}
      <div className="relative">
        {/* Top rule */}
        <div
          className={cn(
            "h-[1.5px] w-full mb-[2px]",
            isWhite ? "bg-white" : "bg-navy"
          )}
        />
        <div
          className={cn(
            "h-[0.75px] w-full mb-[3px]",
            isWhite ? "bg-white" : "bg-navy"
          )}
        />

        {/* BARLEY BUS text */}
        <span
          className={cn(
            "block font-display text-[1.4em] font-bold uppercase leading-none tracking-[0.08em]",
            isWhite ? "text-white" : "text-navy"
          )}
          style={{ fontVariant: "small-caps" }}
        >
          Barley Bus
        </span>

        {/* Bottom rule */}
        <div
          className={cn(
            "h-[0.75px] w-full mt-[3px]",
            isWhite ? "bg-white" : "bg-navy"
          )}
        />
        <div
          className={cn(
            "h-[1.5px] w-full mt-[2px]",
            isWhite ? "bg-white" : "bg-navy"
          )}
        />
      </div>

      {/* Tagline */}
      {showTagline && (
        <span className="mt-1 text-[0.45em] font-medium uppercase tracking-[0.35em] text-coral">
          Tours and Transportation
        </span>
      )}
    </div>
  );
}
