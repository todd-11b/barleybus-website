"use client";

import { Button } from "@/components/ui/button";
import { BOOKING_LINKS } from "@/config/booking";
import { CONTACT } from "@/config/navigation";
import { Phone } from "lucide-react";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="flex items-center gap-3">
        <a
          href={CONTACT.phoneHref}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[--radius-sm] border border-border text-navy"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
        <Button asChild className="flex-1" size="default">
          <a
            href={BOOKING_LINKS.hub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Availability
          </a>
        </Button>
      </div>
    </div>
  );
}
