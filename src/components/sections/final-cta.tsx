import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { BOOKING_LINKS } from "@/config/booking";
import { CONTACT } from "@/config/navigation";

export function FinalCTA() {
  return (
    <section className="bg-coral py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow !text-white/60">Ready?</p>
        <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
          Ready for Your Next Kansas City Adventure?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/85">
          Brewery tours, food tours, private events — pick your experience and
          let us handle the rest.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-coral hover:bg-white/90"
          >
            <a
              href={BOOKING_LINKS.hub}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Availability
            </a>
          </Button>
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 text-base font-medium text-white hover:text-white/80"
          >
            <Phone className="h-5 w-5" />
            Or call us: {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
