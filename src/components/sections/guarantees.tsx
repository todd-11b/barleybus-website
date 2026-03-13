import { Star, BadgeDollarSign, ShieldCheck, CalendarCheck } from "lucide-react";

const GUARANTEES = [
  {
    icon: Star,
    title: "5-Star Guarantee",
    description: "Rated 4.9 by thousands of guests.",
  },
  {
    icon: BadgeDollarSign,
    title: "Low Price Guarantee",
    description: "Best value for KC tours, period.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-Free Reservations",
    description: "Free cancellation 72+ hours out.",
  },
  {
    icon: CalendarCheck,
    title: "Reserve Now, Pay Later",
    description: "Lock in your date with no upfront cost.",
  },
];

export function Guarantees() {
  return (
    <section className="border-y border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {GUARANTEES.map((g) => (
            <div key={g.title} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-coral/10">
                <g.icon className="h-6 w-6 text-coral" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">
                {g.title}
              </h3>
              <p className="mt-1 text-xs text-text-secondary">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
