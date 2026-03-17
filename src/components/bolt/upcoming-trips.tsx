"use client";

import { motion } from "framer-motion";

const trips = [
  {
    title: "KC Brewery Hop",
    price: 59,
    image: "/images/bachelorette/barrel-room-group.jpg",
    alt: "Guests enjoying a Barley Bus brewery hop",
  },
  {
    title: "BBQ Trail Crawl",
    price: 69,
    image: "/images/bachelorette/kc-wineworks-group.jpg",
    alt: "Kansas City barbecue stops on a Barley Bus tour",
  },
  {
    title: "Ghost & Gangsters",
    price: 49,
    image: "/images/bachelorette/steps-group-sunglasses.jpg",
    alt: "Nighttime ghost tour experience in Kansas City",
  },
  {
    title: "City Landmarks",
    price: 39,
    image: "/images/bachelorette/vineyard-group-pink-tops.jpg",
    alt: "Kansas City sightseeing landmarks from a Barley Bus tour",
  },
];

const UpcomingTrips = () => {
  return (
    <section id="upcoming-trips" className="overflow-hidden bg-background py-20 md:py-28">
      <div className="container">
        <div className="grid gap-10 xl:grid-cols-[24rem_1fr] xl:gap-12">
          {/* Left column */}
          <div className="xl:pt-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[8ch] font-display text-[clamp(4rem,7vw,6.75rem)] uppercase leading-[0.88] tracking-[-0.06em] text-foreground"
            >
              Upcoming Trips
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-sm text-lg text-muted-foreground"
            >
              Exciting upcoming trips to breweries, BBQ joints, haunted hideaways, and city landmarks. Adventure, culture, and unforgettable memories await you soon.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              href="/quote"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-highlight px-8 text-sm font-semibold text-highlight-foreground"
            >
              View All
            </motion.a>
          </div>

          {/* Right column with vertical line + scrollable cards */}
          <div className="relative xl:pl-12">
            <div className="absolute bottom-0 left-0 top-6 hidden w-px bg-border xl:block" />
            <div className="overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex min-w-max gap-6">
                {trips.map((trip, index) => (
                  <motion.a
                    key={trip.title}
                    href="/quote"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group block w-[21rem] overflow-hidden rounded-[1.75rem] sm:w-[22rem] lg:w-[23rem]"
                  >
                    <div className="relative aspect-[4/7] overflow-hidden rounded-[1.75rem]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={trip.image}
                        alt={trip.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/15 to-transparent opacity-90" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                        <h3 className="max-w-[11rem] font-display text-[2rem] uppercase leading-[0.9] tracking-[-0.05em] text-surface-dark-foreground sm:text-[2.2rem]">
                          {trip.title}
                        </h3>
                        <div className="shrink-0 text-right">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-surface-dark-foreground/70">
                            From
                          </p>
                          <p className="font-display text-4xl leading-none text-highlight">
                            ${trip.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrips;
