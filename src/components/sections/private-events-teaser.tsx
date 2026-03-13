import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PrivateEventsTeaser() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[--radius-md] bg-navy/5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/private-events-placeholder.jpg')",
              }}
            />
          </div>

          {/* Copy */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Planning a Group Event?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Bachelorette parties, corporate outings, birthdays, game day —
              custom itineraries, VIP access, zero planning stress.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/private-tours">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
