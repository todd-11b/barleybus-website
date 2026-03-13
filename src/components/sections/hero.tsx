"use client";

import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_LINKS } from "@/config/booking";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background image — replace src with real hero photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-poster.jpg')" }}
      />

      {/* Gradient overlay — heavier at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Ghost text — large faded word behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-end"
      >
        <span className="select-none pb-[18vh] pl-4 font-display text-[20vw] font-bold uppercase leading-none tracking-tighter text-white/[0.07] sm:pl-6 lg:pl-8">
          Explore
        </span>
      </div>

      {/* Hero content — anchored bottom-left like Plexify */}
      <div className="relative flex min-h-[100svh] flex-col justify-end px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl">
          {/* Trust badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-star text-star"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-white/90">
              4.9 from 1,800+ reviews
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-5xl font-bold uppercase leading-[1.05] tracking-[--tracking-hero] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
            Explore
            <br />
            Kansas City
          </h1>

          {/* Subheadline */}
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70 sm:text-xl">
            Reserve now, pay later. Free cancellation 72+ hours out.
          </p>

          {/* CTA button */}
          <div className="mt-8">
            <Button
              size="xl"
              onClick={() => window.open(BOOKING_LINKS.hub, "_blank")}
            >
              Find Your Tour
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
