"use client";

import React, { useState } from "react";
import { Star, Users, Calendar, ChevronRight } from "lucide-react";
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
    // Future: submit to GHL as lead, then show contact capture modal.
    // Current: redirect to CaptainBook hub.
    const params = new URLSearchParams();
    if (tourType) params.set("tour_type", tourType);
    if (dateOption) params.set("date", dateOption);
    if (guests) params.set("guests", guests);

    // For now, link to booking hub
    window.open(
      "https://barley-bus-tours-transportation.captainbook.io/en/embedded/all?wid=3",
      "_blank"
    );
  };

  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="relative min-h-[600px] bg-navy/5 lg:min-h-[680px]">
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
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/60 to-navy/40" />

        {/* Hero Content */}
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          {/* Trust Signal */}
          <div className="mb-6 flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 backdrop-blur-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-star text-star"
                />
              ))}
            </div>
            <span className="ml-1 text-sm font-medium text-white">
              4.9 from 1,800+ reviews
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Explore Kansas City by Bus
          </h1>

          {/* Subheadline */}
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Reserve now, pay later. Free cancellation 72+ hours out.
          </p>

          {/* Availability Bar */}
          <div className="mt-10 w-full max-w-3xl rounded-[--radius-md] bg-white p-3 shadow-md sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-3">
              {/* Tour Type */}
              <div className="flex-1">
                <label className="mb-1.5 block text-left text-xs font-medium text-text-muted">
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
                <label className="mb-1.5 block text-left text-xs font-medium text-text-muted">
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
                <label className="mb-1.5 block text-left text-xs font-medium text-text-muted">
                  How many guests?
                </label>
                <div className="flex h-12 items-center rounded-[--radius-sm] border border-border px-4">
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
              className="shrink-0 text-sm font-semibold text-text-muted/60 transition-colors hover:text-text-secondary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
