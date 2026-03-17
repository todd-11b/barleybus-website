"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Kansas City skyline at dusk"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-surface-dark/30 to-surface-dark/10" />

      <div className="relative z-10 container px-6 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="max-w-4xl"
        >
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-surface-dark-foreground/70 text-lg md:text-xl font-medium mb-4"
          >
            KANSAS CITY
          </motion.p>

          {/* Giant EXPLORE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 0.15, x: 0 }}
            transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
            className="pointer-events-none select-none -mb-6 md:-mb-12 lg:-mb-16"
          >
            <span className="text-[6rem] md:text-[12rem] lg:text-[16rem] font-bold text-surface-dark-foreground leading-none tracking-tighter font-display whitespace-nowrap">
              EXPLORE
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-surface-dark-foreground leading-[0.95] tracking-tighter mb-8">
            KANSAS CITY
          </h1>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Button variant="hero" size="xl">
              Find My Tour
            </Button>
          </div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="flex items-center gap-2 text-surface-dark-foreground/90"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm md:text-base font-semibold">
              4.9 Stars on Google
            </span>
            <span className="text-sm md:text-base text-surface-dark-foreground/60">
              (1,200+ Reviews)
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
