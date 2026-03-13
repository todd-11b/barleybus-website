import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/config/navigation";

const TOUR_LINKS = [
  { label: "Brewery Tour", href: "/tours/brewery" },
  { label: "Winery Tour", href: "/tours/winery" },
  { label: "BBQ Tour", href: "/tours/bbq" },
  { label: "Tacos & Margaritas", href: "/tours/tacos-margaritas" },
  { label: "Sightseeing", href: "/tours/sightseeing" },
  { label: "Ghost & Gangsters", href: "/tours/ghost-gangsters" },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold tracking-tight text-white">
              BARLEY BUS
            </span>
            <p className="mt-3 text-sm leading-relaxed text-footer-muted">
              Kansas City&rsquo;s favorite tour and transportation company.
              Brewery, winery, food tours, and private events.
            </p>
          </div>

          {/* Tours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Tours
            </h3>
            <ul className="space-y-2.5">
              {TOUR_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-footer-muted transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2 text-sm text-footer-muted transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-sm text-footer-muted transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-footer-muted">
          &copy; {new Date().getFullYear()} Barley Bus Tours & Transportation.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
