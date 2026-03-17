import Link from "next/link";
import { Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_LINKS } from "@/config/booking";

export function FeaturedTour() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/bachelorette/vineyard-tour-guide.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 max-w-xl">
            <span className="inline-block rounded-full bg-coral/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
              Most Popular Tour
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Kansas City Brewery Tour
            </h2>

            <div className="mt-6 flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">3.5 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">Up to 14</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-star text-star" />
                <span className="text-sm">4.9 / 5</span>
              </div>
            </div>

            <p className="mt-4 text-lg text-white/75">
              Hop on board for Kansas City&rsquo;s ultimate craft beer
              experience. Visit 3–4 award-winning breweries with expert
              guides.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a
                  href={BOOKING_LINKS.brewery}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now — From $90/person
                </a>
              </Button>
              <Button asChild variant="white" size="lg">
                <Link href="/tours/kc-brewery-tour">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
