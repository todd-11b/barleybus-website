import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { FinalCTA } from "@/components/sections/final-cta";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse Barley Bus tour packages — brewery combos, ghost tours, holiday lights, and all-day KC experiences. Best value guaranteed.",
};

const packages = [
  {
    title: "Brewery & BBQ Combo",
    image: "/images/bachelorette/barrel-room-group.jpg",
    duration: "5 Hours",
    rating: 4.9,
    reviews: 312,
    price: "$109",
    oldPrice: "$139",
    tag: "Best Seller",
    desc: "The ultimate KC experience — craft beer and world-famous BBQ in one epic tour.",
    href: "/tours/kc-brewery-tour",
  },
  {
    title: "Ghost & Gangsters Night",
    image: "/images/bachelorette/steps-group-sunglasses.jpg",
    duration: "3 Hours",
    rating: 4.8,
    reviews: 187,
    price: "$49",
    oldPrice: "$65",
    tag: "Popular",
    desc: "Explore KC's dark history with haunted locations and prohibition-era stories.",
    href: "/tours",
  },
  {
    title: "Holiday Lights Express",
    image: "/images/bachelorette/spring-blooming-tree.jpg",
    duration: "2 Hours",
    rating: 4.9,
    reviews: 94,
    price: "$55",
    oldPrice: "$70",
    tag: "Seasonal",
    desc: "A magical ride through KC's best holiday light displays on our cozy bus.",
    href: "/tours",
  },
  {
    title: "All-Day KC Explorer",
    image: "/images/bachelorette/vineyard-tour-guide.jpg",
    duration: "8 Hours",
    rating: 5.0,
    reviews: 56,
    price: "$189",
    oldPrice: "$229",
    tag: "Premium",
    desc: "The full Kansas City experience — breweries, BBQ, history, and sightseeing.",
    href: "/tours",
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* Hero header */}
      <section className="bg-surface pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl uppercase">
            Popular Packages
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary">
            Curated experiences at the best value. Pick a package and let us
            handle everything.
          </p>
        </div>
      </section>

      {/* Package cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-2">
            {packages.map((pkg) => (
              <Link
                key={pkg.title}
                href={pkg.href}
                className="group relative rounded-2xl bg-white p-2.5 shadow-sm border border-border transition-shadow hover:shadow-md md:flex"
              >
                {/* Image */}
                <div className="relative h-52 w-full flex-none overflow-hidden rounded-2xl sm:h-60 md:h-auto md:w-60 lg:w-72 md:min-w-[15rem] lg:min-w-[18rem]">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 18rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-coral px-3 py-1.5 text-xs font-medium text-white">
                    {pkg.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex w-full flex-col p-5 sm:p-6">
                  <div className="mb-3 flex-1">
                    <span className="text-xs font-semibold uppercase text-text-muted">
                      {pkg.duration}
                    </span>
                    <h2 className="mt-1 mb-2 text-xl font-bold uppercase sm:text-2xl">
                      {pkg.title}
                    </h2>
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="h-3.5 w-3.5 fill-star text-star"
                            strokeWidth={0}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-text-muted">
                        {pkg.reviews} Reviews
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">{pkg.desc}</p>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                    <div>
                      <span className="text-2xl font-bold">
                        {pkg.price}
                      </span>
                      <del className="ml-2 text-sm text-text-muted/50">
                        {pkg.oldPrice}
                      </del>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </>
  );
}
