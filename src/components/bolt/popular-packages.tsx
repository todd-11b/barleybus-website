"use client";

import { Star, ArrowRight } from "lucide-react";

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
  },
];

const PopularPackages = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-5">
          {/* Title card */}
          <div className="xl:col-span-2 mb-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase text-foreground">
              Popular Packages
            </h2>
          </div>

          {/* Package cards */}
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="relative z-[1] p-2.5 h-full bg-background rounded-2xl md:flex group transition-shadow duration-300 hover:shadow-lift"
            >
              {/* Image */}
              <div className="rounded-2xl w-full md:w-60 lg:w-72 md:min-w-60 lg:min-w-72 h-52 sm:h-60 md:h-auto relative overflow-hidden flex-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full text-xs font-medium px-3 py-1.5 bg-primary text-primary-foreground">
                  {pkg.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col w-full">
                <div className="mb-3 flex-1">
                  <span className="text-xs font-semibold uppercase text-muted-foreground">{pkg.duration}</span>
                  <h3 className="text-xl sm:text-2xl font-display font-medium uppercase mt-1 mb-2">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{pkg.reviews} Reviews</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.desc}</p>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <div className="font-display">
                    <span className="text-2xl font-semibold text-foreground">{pkg.price}</span>
                    <del className="text-sm text-muted-foreground/50 ml-2">{pkg.oldPrice}</del>
                  </div>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
