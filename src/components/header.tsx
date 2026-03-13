"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, CONTACT } from "@/config/navigation";
import { BOOKING_LINKS } from "@/config/booking";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-navy">
            BARLEY BUS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy transition-colors hover:text-coral"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-navy hover:text-coral"
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
          className="lg:hidden p-2 text-navy"
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
