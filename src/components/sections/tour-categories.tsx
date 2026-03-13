import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    title: "Drink Tours",
    description: "Breweries, wineries, distilleries — samples at every stop.",
    price: "From $90/person",
    href: "/tours",
    image: "/tours-drink-placeholder.jpg",
  },
  {
    title: "Food Tours",
    description: "KC BBQ, tacos, margaritas — taste the city's best.",
    price: "From $90/person",
    href: "/tours/bbq",
    image: "/tours-food-placeholder.jpg",
  },
  {
    title: "Private Events",
    description: "Bachelorette, corporate, birthday — your group, your way.",
    price: "From $60/person",
    href: "/private-tours",
    image: "/tours-private-placeholder.jpg",
  },
];

export function TourCategories() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="eyebrow">Find Your Experience</p>
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Curated KC Tours & Events
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Breweries, food, sightseeing, or something custom — we&rsquo;ve got you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group overflow-hidden rounded-[--radius-md] border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] bg-surface">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{cat.title}</h3>
                <p className="mt-1.5 text-sm text-text-secondary">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-coral">
                    {cat.price}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-coral opacity-0 transition-opacity group-hover:opacity-100">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
