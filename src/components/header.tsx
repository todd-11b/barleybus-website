"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV_LINKS, CONTACT } from "@/config/navigation";
import { BOOKING_LINKS } from "@/config/booking";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`top-0 left-0 w-full z-[999] lg:pt-[30px] ${
        isFixed
          ? "fixed bg-white lg:pb-4 lg:pt-4 animate-headerSlideDown"
          : "absolute"
      }`}
    >
      <div className={`relative w-full ${isFixed ? "text-navy" : "lg:text-white text-navy"}`}>
        <div className="flex items-center px-4 sm:px-6 lg:px-8">
          {/* Logo — Plexify: xl:w-41.25 w-33.75 sm:h-12.5 h-15.25 */}
          <div className="flex items-center xl:w-[165px] w-[135px] sm:h-[50px] h-[61px] xl:me-[30px] me-2">
            <Link href="/" aria-label="Go to homepage" className="block">
              <Logo variant={isFixed ? "dark" : "white"} />
            </Link>
          </div>

          {/* Mobile Menu Toggle — Plexify position */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={`lg:hidden float-right sm:mt-[18px] sm:mb-4 sm:ml-7 ml-4 my-2.5 size-11 rounded-md relative cursor-pointer max-lg:order-1 ${
              isFixed ? "bg-navy" : "bg-white"
            }`}
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className={`mx-auto h-5 w-5 ${isFixed ? "text-white" : "text-navy"}`} />
            ) : (
              <Menu className={`mx-auto h-5 w-5 ${isFixed ? "text-white" : "text-navy"}`} />
            )}
          </button>

          {/* Desktop Nav — Plexify: pill shape with semi-transparent bg */}
          <nav
            className={`hidden lg:flex lg:mx-auto lg:justify-center lg:items-center lg:rounded-[60px] p-1.5 ${
              isFixed ? "lg:bg-navy/30" : "lg:bg-black/40"
            }`}
          >
            <ul className="flex flex-wrap items-center">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="inline-block">
                  <Link
                    href={link.href}
                    className={`py-2.5 xl:px-4 px-2 relative z-[1] inline-block xl:text-base text-[15px] !leading-none font-medium rounded-[80px] duration-300 ${
                      isFixed
                        ? "text-navy hover:text-coral"
                        : "text-white hover:text-white/70"
                    }`}
                  >
                    <span className="inline-block leading-5">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Extra nav — phone + Book Now */}
          <div className="flex items-center h-[50px] max-lg:ms-auto">
            <div className="flex items-center w-full">
              <ul className="lg:ml-5 sm:ml-[15px] flex items-center gap-5 w-full justify-between">
                <li className="hidden lg:inline-block">
                  <a
                    href={CONTACT.phoneHref}
                    className={`flex items-center gap-1.5 text-sm font-medium duration-300 ${
                      isFixed
                        ? "text-navy hover:text-coral"
                        : "text-white hover:text-white/70"
                    }`}
                  >
                    <Phone className="h-4 w-4" />
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="hidden xl:inline-block">
                  <a
                    href={BOOKING_LINKS.hub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-base font-medium rounded-[50px] leading-tight py-3.5 px-[35px] items-center relative overflow-hidden whitespace-nowrap cursor-pointer border border-coral bg-coral text-white hover:bg-coral-hover hover:border-coral-hover duration-300"
                  >
                    <span>Book Now</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="bg-white lg:hidden">
          <nav className="flex flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-gray-200 py-2 text-[15px] font-medium text-navy hover:text-coral"
                onClick={() => setMobileOpen(false)}
              >
                <span className="inline-block leading-[30px]">{link.label}</span>
              </Link>
            ))}
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 py-3 text-base font-medium text-navy"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phone}
            </a>
            <a
              href={BOOKING_LINKS.hub}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex justify-center text-base font-medium rounded-[50px] leading-tight py-3.5 px-[35px] items-center border border-coral bg-coral text-white hover:bg-coral-hover duration-300"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
