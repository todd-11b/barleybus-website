"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BOOKING_LINKS } from "@/config/booking";

export function Hero() {
  return (
    <section className="relative h-[520px] overflow-hidden sm:h-[600px] lg:h-[650px] xl:h-[920px] 3xl:h-[1000px]">
      {/* Background image — priority loaded */}
      <Image
        src="/images/bachelorette/barrel-room-group.jpg"
        alt="Barley Bus brewery tour group at a barrel room in Kansas City"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — bottom half only, matching Plexify */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-gradient-to-b md:from-transparent md:via-transparent md:to-black/70" />

      {/* SVG ghost text — clipPath technique from Plexify */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        preserveAspectRatio="xMinYMax meet"
      >
        <defs>
          <clipPath id="ghostTextClip" clipPathUnits="userSpaceOnUse">
            <text
              x="0"
              y="95%"
              className="text-[23vw]"
              fontFamily="var(--font-oswald), Oswald, sans-serif"
              fontWeight="700"
            >
              EXPLORE
            </text>
          </clipPath>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="white"
          opacity="0.06"
          clipPath="url(#ghostTextClip)"
        />
      </svg>

      {/* Hero content — bottom-left anchored, Plexify layout */}
      <div className="relative z-10 flex h-full items-end">
        <div className="w-full md:w-2/3">
          <div className="px-5 pb-8 sm:pe-20 md:px-10 md:pb-12 lg:p-15 xl:p-20">
            {/* Headline — Plexify responsive scale with Oswald */}
            <h1 className="font-display text-4xxl font-bold uppercase leading-none text-white sm:text-6xl md:text-8xl xl:text-10xl 3xl:text-12xl">
              Explore
              <br />
              Kansas City
            </h1>

            {/* Subheadline */}
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg md:max-w-lg md:text-xl">
              Brewery tours, food crawls, and sightseeing — all from the best seat in KC.
            </p>

            {/* CTA button — pill shape (50px radius from Plexify) */}
            <div className="mt-6 sm:mt-8">
              <Button
                size="lg"
                onClick={() => window.open(BOOKING_LINKS.hub, "_blank")}
                className="gap-3"
              >
                <span>Find Your Tour</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — right side, Plexify style */}
      <div className="absolute bottom-8 right-5 z-10 hidden flex-col items-center gap-2.5 sm:flex lg:bottom-20 lg:right-8">
        <span className="text-xs font-medium uppercase tracking-widest text-white/80 [writing-mode:vertical-lr]">
          Scroll Down
        </span>
        <button
          type="button"
          aria-label="Scroll to next section"
          onClick={() => {
            const next = document.querySelector("main > section:nth-child(2), main > div:nth-child(2)");
            if (next) {
              next.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy transition-transform hover:scale-110"
        >
          <svg width="14" height="23" viewBox="0 0 14 23" fill="none">
            <path d="M6.83 0.75V21.32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12.67 15.49L6.83 21.33L1 15.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
