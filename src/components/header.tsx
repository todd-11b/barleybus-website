"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { NAV_LINKS } from "@/config/navigation";
import { BOOKING_LINKS } from "@/config/booking";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Plexify uses .sticky-header-wrapper.is-fixed for scroll state
  // We replicate with a data attribute + conditional classes
  const fixedCls = isFixed
    ? "fixed bg-white lg:pb-4 lg:pt-4 animate-headerSlideDown"
    : "";

  return (
    <header
      className={`site-header absolute top-0 left-0 w-full z-999 lg:pt-7.5 ${fixedCls}`}
    >
      <div
        className={`main-bar relative w-full ${
          isFixed ? "text-navy" : "lg:text-white text-navy"
        }`}
      >
        <div className="container-fluid flex items-center">
          {/* Website Logo — exact Plexify sizing */}
          <div className="flex items-center align-middle xl:w-41.25 w-33.75 sm:h-12.5 h-15.25 xl:me-7.5 me-2">
            <Link
              aria-label="Go to homepage"
              href="/"
              className="table-cell align-middle"
            >
              {/* White logo — shown when not scrolled */}
              <span
                className={`object-contain duration-500 ${
                  isFixed ? "hidden" : "block"
                }`}
              >
                <Logo variant="white" />
              </span>
              {/* Dark logo — shown when scrolled/fixed */}
              <span
                className={`object-contain duration-500 ${
                  isFixed ? "block" : "hidden"
                }`}
              >
                <Logo variant="dark" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger — exact Plexify 3-bar markup */}
          <button
            aria-label="Open menu"
            className={`lg:hidden float-right sm:mt-4.5 sm:mb-4 sm:ml-7 ml-4 my-2.5 size-11 rounded-md relative cursor-pointer max-lg:order-1 ${
              isFixed ? "bg-navy" : "bg-white"
            }`}
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block absolute left-2.5 h-0.5 rounded-px duration-300 top-3.25 w-5.5 ${
                isFixed ? "bg-white" : "bg-navy"
              }`}
            />
            <span
              className={`block absolute left-2.5 h-0.5 rounded-px duration-0 top-5.5 w-6.25 ${
                isFixed ? "bg-white" : "bg-navy"
              }`}
            />
            <span
              className={`block absolute left-2.5 h-0.5 rounded-px duration-300 top-8 w-4 ${
                isFixed ? "bg-white" : "bg-navy"
              }`}
            />
          </button>

          {/* Mobile fade overlay */}
          <div
            className={`lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-999 ${
              mobileOpen
                ? "opacity-50 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={closeMobile}
          />

          {/* Nav wrapper — exact Plexify pill nav + mobile drawer */}
          <div
            className={`flex lg:basis-auto lg:mx-auto max-lg:flex-col lg:justify-center justify-start lg:items-center max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:z-9999 max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 lg:rounded-6xl lg:bg-navy/40 bg-white p-1.5 ${
              mobileOpen ? "max-lg:left-0" : "max-lg:-left-75"
            }`}
          >
            {/* Mobile logo inside drawer */}
            <div className="flex items-center relative z-9 py-6.25 lg:hidden w-33.75 h-15.25">
              <Link
                aria-label="Go to homepage"
                href="/"
                className="table-cell align-middle"
              >
                <Logo variant="dark" />
              </Link>
            </div>

            <ul className="lg:flex flex-wrap">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.href}
                  className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group"
                >
                  <Link
                    className="lg:py-2.5 py-2 xl:px-4 lg:px-2 relative z-1 lg:inline-block block xl:text-base text-2sm !leading-none font-medium rounded-8xl lg:group-hover:text-heading"
                    href={link.href}
                    onClick={closeMobile}
                  >
                    <span className="inline-block lg:leading-5 leading-7.5">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra nav — Book Now button */}
          <div className="extra-nav flex items-center h-12.5 3xl:pl-7.5 max-lg:ms-auto">
            <div className="flex items-center w-full">
              <ul className="lg:ml-5 sm:ml-3.75 flex items-center gap-5 w-full justify-between">
                <li className="inline-block max-xl:hidden">
                  <a
                    href={BOOKING_LINKS.hub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-hover light"
                  >
                    <span>Book Now</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
