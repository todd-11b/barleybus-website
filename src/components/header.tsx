"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, CONTACT } from "@/config/navigation";
import { BOOKING_LINKS } from "@/config/booking";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md animate-headerSlideDown"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo / Wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`font-display text-xl font-bold uppercase tracking-wider transition-colors duration-500 ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Barley Bus
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-navy hover:text-coral"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-navy hover:text-coral"
                : "text-white/90 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phone}
          </a>
          <Button asChild size="sm">
            <a href={BOOKING_LINKS.hub} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border py-3 text-base font-medium text-navy hover:text-coral"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 py-3 text-base font-medium text-navy"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phone}
            </a>
            <Button asChild className="mt-3">
              <a href={BOOKING_LINKS.hub} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
