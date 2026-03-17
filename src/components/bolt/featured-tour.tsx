"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users } from "lucide-react";

const FeaturedTour = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="relative rounded-[2rem] overflow-hidden min-h-[500px] md:min-h-[600px] flex items-end"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Kansas City Brewery Tour - Our most popular experience"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/40 to-transparent" />

          <div className="relative z-10 p-8 md:p-16 w-full">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-surface-dark-foreground">Most Popular Tour</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-surface-dark-foreground mb-4">
                Kansas City Brewery Tour
              </h2>
              <p className="text-lg text-surface-dark-foreground/80 mb-6 max-w-[50ch]">
                Discover why Kansas City is a craft beer destination. Visit 3-4 award-winning breweries,
                taste exclusive pours, and learn from expert guides who know the local beer scene inside out.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-1.5 text-surface-dark-foreground/70">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-sm">3.5 hours</span>
                </div>
                <div className="flex items-center gap-1.5 text-surface-dark-foreground/70">
                  <Users className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-sm">Small groups (max 14)</span>
                </div>
                <div className="flex items-center gap-1.5 text-surface-dark-foreground/70">
                  <Star className="w-4 h-4 fill-gold text-gold" strokeWidth={0} />
                  <span className="text-sm font-semibold text-surface-dark-foreground">4.9/5 rating</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <span className="text-xs text-surface-dark-foreground/50 uppercase tracking-wider">From</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-surface-dark-foreground font-display">$75</span>
                    <span className="text-sm text-surface-dark-foreground/60">per person</span>
                  </div>
                </div>
                <Button variant="hero" size="xl" asChild>
                  <a href="/tours/kc-brewery-tour">Book This Tour</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTour;
