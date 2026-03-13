"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BOOKING_LINKS } from "@/config/booking";

export function Hero() {

  return (
    <section className="relative z-1 overflow-hidden 2xxl:h-250 xl:h-230 lg:h-162.5 sm:h-150 h-130 after:absolute after:inset-0 md:after:bg-gradient-to-b after:bg-gradient-to-t after:from-black/70 after:to-transparent">
      <div className="relative z-1 h-full">
        <div className="h-full xl:pt-0 lg:pt-7.5 sm:pt-37.75 pt-40">
          <div className="flex flex-wrap items-end h-full">
            <div className="md:w-2/3 w-full">
              <div className="relative z-1 xl:p-20 lg:p-15 md:py-12.5 py-6 md:px-5 px-5 sm:pe-20">
                {/* Headline — exact Plexify responsive scale */}
                <h1 className="3xl:text-15xl 2xxl:text-12xl xl:text-10xl md:text-8xl sm:text-6xl text-4xxl font-bold mb-2.5 text-white !leading-none uppercase">
                  Kansas City
                </h1>

                {/* Subheadline — Barley Bus addition */}
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg md:max-w-lg md:text-xl">
                  Brewery tours, food crawls, and sightseeing — all from the best seat in KC.
                </p>

                {/* CTA button — pill shape */}
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

              {/* Ghost text — frosted glass clipped to "EXPLORE" shape, exact Plexify .clipped technique */}
              <div
                className="absolute xl:top-1/5 lg:top-0 sm:-top-1/12 -top-1/5 sm:-left-6.5 -left-1.5 bottom-0 right-0 bg-white/25"
                style={{
                  clipPath: "url(#svgTextPath)",
                  backdropFilter: "blur(17px)",
                  WebkitBackdropFilter: "blur(17px)",
                }}
              />
              <svg width="0" height="0" aria-hidden="true" className="absolute">
                <defs>
                  <clipPath id="svgTextPath" clipPathUnits="userSpaceOnUse">
                    <text
                      style={{ fontSize: "23vw" }}
                      x="0"
                      y="320"
                      fontFamily="Oswald, Roboto Condensed, sans-serif"
                      fontWeight="900"
                    >
                      EXPLORE
                    </text>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Background image */}
      <Image
        src="/images/bachelorette/barrel-room-group.jpg"
        alt="Barley Bus brewery tour group at a barrel room in Kansas City"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover max-sm:object-[70%]"
        sizes="100vw"
      />

      {/* Scroll indicator — exact Plexify position and markup */}
      <div className="absolute right-7.5 bottom-20 flex flex-col gap-2.5 items-center z-1 max-sm:hidden">
        <span className="block text-white text-2sm font-medium uppercase [writing-mode:tb]">Scroll Down</span>
        <button
          type="button"
          aria-label="Scroll to next section"
          onClick={() => {
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
          }}
          className="size-12 flex items-center justify-center rounded-full bg-white text-black cursor-pointer"
        >
          <svg width="14" height="23" viewBox="0 0 14 23" fill="none">
            <path d="M6.83 0.75V21.32" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12.67 15.49L6.83 21.33L1 15.49" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
