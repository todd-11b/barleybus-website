"use client";

import React, { useState } from "react";
import { Star, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TOUR_OPTIONS = [
  { value: "breweries", label: "Breweries" },
  { value: "wine", label: "Wine" },
  { value: "distilleries", label: "Distilleries" },
  { value: "food", label: "Food" },
  { value: "sightseeing", label: "Sightseeing" },
  { value: "private-event", label: "Private Event" },
  { value: "bus-rental", label: "Bus Rental" },
];

const DATE_OPTIONS = [
  { value: "this-weekend", label: "This Weekend" },
  { value: "next-weekend", label: "Next Weekend" },
  { value: "pick-a-date", label: "Pick a Date" },
];

const PRESS_LOGOS = [
  "Daily Mail",
  "New York Post",
  "Kansas City Star",
  "The Sun",
];

export function Hero() {
  const [tourType, setTourType] = useState("");
  const [dateOption, setDateOption] = useState("");
  const [guests, setGuests] = useState("");

  const handleCheckAvailability = () => {
    const params = new URLSearchParams();
    if (tourType) params.set("tour_type", tourType);
    if (dateOption) params.set("date", dateOption);
    if (guests) params.set("guests", guests);

    window.open(
      "https://barley-bus-tours-transportation.captainbook.io/en/embedded/all?wid=3",
      "_blank"
    );
  };

  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="relative min-h-[600px] lg:min-h-[700px]">
        {/* Poster image on mobile + reduced-motion fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden motion-safe:md:hidden"
          style={{ backgroundImage: "url('/hero-poster.jpg')" }}
        />
        {/* Video background — desktop only, respects prefers-reduced-motion */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:hidden md:motion-safe:block"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Refined gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/65 to-navy/50" />

        {/* Hero Content */}
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-36">
          {/* Trust Badges */}
          <div className="mb-10 flex animate-fade-in items-center gap-6 sm:gap-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <Star className="h-5 w-5 fill-star text-star" />
                <span className="text-2xl font-extrabold text-white sm:text-3xl">4.9</span>
              </div>
              <div className="mt-1 text-xs tracking-wide text-white/60">Google Rating</div>
            </div>
            <div className="h-8 w-px bg-white/15" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <Users className="h-5 w-5 text-white/70" />
                <span className="text-2xl font-extrabold text-white sm:text-3xl">3,000+</span>
              </div>
              <div className="mt-1 text-xs tracking-wide text-white/60">Happy Guests</div>
            </div>
            <div className="h-8 w-px bg-white/15" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <Award className="h-5 w-5 text-white/70" />
                <span className="text-2xl font-extrabold text-white sm:text-3xl">#1</span>
              </div>
              <div className="mt-1 text-xs tracking-wide text-white/60">in Kansas City</div>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="max-w-4xl animate-fade-in-up text-5xl font-extrabold leading-[1.0] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Explore Kansas City by Bus
          </h1>

          {/* Subheadline */}
          <p
            className="mt-5 max-w-xl animate-fade-in-up text-lg leading-relaxed text-white/75"
            style={{ animationDelay: "200ms" }}
          >
            Reserve now, pay later. Free cancellation 72+ hours out.
          </p>

          {/* Availability Bar */}
          <div
            className="mt-12 w-full max-w-3xl animate-fade-in-up rounded-[--radius-xl] bg-white p-3 shadow-xl sm:p-4"
            style={{ animationDelay: "350ms" }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-3">
              {/* Tour Type */}
              <div className="flex-1">
                <label className="mb-1.5 block text-left text-xs font-medium tracking-wide text-text-muted">
                  What are you into?
                </label>
                <Select value={tourType} onValueChange={setTourType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {TOUR_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="flex-1">
                <label className="mb-1.5 block text-left text-xs font-medium tracking-wide text-text-muted">
                  When?
                </label>
                <Select value={dateOption} onValueChange={setDateOption}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pick a date" />
                  </SelectTrigger>
                  <SelectContent>
                    {DATE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Guests */}
              <div className="w-full sm:w-36">
                <label className="mb-1.5 block text-left text-xs font-medium tracking-wide text-text-muted">
                  How many guests?
                </label>
                <div className="flex h-12 items-center rounded-[--radius-sm] border border-border px-4 transition-colors duration-[--duration-fast] focus-within:border-coral/40">
                  <Users className="mr-2 h-4 w-4 text-text-muted" />
                  <input
                    type="number"
                    min={1}
                    max={50}
                    placeholder="2"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent text-base text-text-primary outline-none placeholder:text-text-muted"
                  />
                </div>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={handleCheckAvailability}
              >
                Check Availability
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Press Bar */}
      <div className="border-b border-border bg-white py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-8 overflow-x-auto px-4 sm:gap-12">
          <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-text-muted">
            As seen in
          </span>
          {PRESS_LOGOS.map((name) => (
            <span
              key={name}
              className="shrink-0 text-sm font-semibold text-text-muted/60 transition-colors duration-[--duration-fast] hover:text-text-secondary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
