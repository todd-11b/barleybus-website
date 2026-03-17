"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const tours = [
  {
    name: "Brewery Tour",
    description: "Hop on board for Kansas City's ultimate craft beer experience. Visit 3-4 top breweries with expert guides.",
    price: 75,
    rating: 4.9,
    image: "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/tour/brewery-tour",
  },
  {
    name: "BBQ Tour",
    description: "Taste the legendary KC BBQ at the city's most iconic joints. Come hungry, leave happy.",
    price: 85,
    rating: 5.0,
    image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/tour/bbq-tour",
  },
  {
    name: "Ghost & Gangsters",
    description: "Explore Kansas City's haunted history and notorious mob past on this spine-tingling tour.",
    price: 65,
    rating: 4.8,
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/tour/ghost-gangsters",
  },
  {
    name: "City Sightseeing",
    description: "See all of Kansas City's must-visit landmarks, hidden gems, and photo-worthy spots.",
    price: 55,
    rating: 4.9,
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/tour/sightseeing",
  },
  {
    name: "Holiday Lights",
    description: "Experience the magic of Kansas City's spectacular holiday light displays in festive comfort.",
    price: 60,
    rating: 5.0,
    image: "https://images.pexels.com/photos/1708801/pexels-photo-1708801.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/tour/holiday-lights",
  },
  {
    name: "Party Bus",
    description: "Your private party on wheels. Perfect for birthdays, bachelorettes, and unforgettable celebrations.",
    price: 95,
    rating: 4.9,
    image: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/tour/party-bus",
  },
];

const TourGrid = () => {
  return (
    <section id="tours" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-muted-foreground text-lg max-w-[55ch] mx-auto">
            From craft beer to BBQ, ghosts to holiday lights — we&apos;ve got the perfect tour for every occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
              className="bg-background rounded-2xl overflow-hidden shadow-soft card-hover group"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tour.image}
                  alt={`${tour.name} - Barley Bus Kansas City`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105"
                  loading="lazy"
                />
                {/* Rating badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" strokeWidth={0} />
                  <span className="text-sm font-bold text-foreground">{tour.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-foreground mb-2">{tour.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">From</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-foreground font-display">${tour.price}</span>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                  </div>
                  <Button variant="default" size="sm" asChild>
                    <a href={tour.href}>Book Now</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGrid;
