"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase, Cake, Sparkles } from "lucide-react";

const eventTypes = [
  { icon: Heart, title: "Bachelorette Parties", description: "Create unforgettable memories" },
  { icon: Briefcase, title: "Corporate Events", description: "Team building done right" },
  { icon: Cake, title: "Birthday Celebrations", description: "Party in style" },
  { icon: Sparkles, title: "Special Occasions", description: "Any reason to celebrate" },
];

const PrivateEventsTeaser = () => {
  return (
    <section id="private-events" className="py-20 md:py-28 bg-surface-dark">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-surface-dark-foreground mb-6">
              Taking Over Kansas City?{" "}
              <span className="text-primary">We&apos;ll Handle the Fun</span>
            </h2>
            <p className="text-lg text-surface-dark-foreground/70 mb-10 max-w-[50ch]">
              From corporate team building to bachelorette blowouts, our private tours and party buses
              are custom-built for your group. You bring the people, we bring the experience.
            </p>

            {/* Event types grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {eventTypes.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 rounded-xl p-4"
                >
                  <event.icon className="w-6 h-6 text-primary mb-2" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold text-surface-dark-foreground mb-1">{event.title}</h3>
                  <p className="text-xs text-surface-dark-foreground/50">{event.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-surface-dark-foreground/60 text-sm mb-1">Groups of 10 or more?</p>
              <p className="text-surface-dark-foreground/80 font-medium">
                Get custom pricing and a dedicated event coordinator to make your experience seamless.
              </p>
            </div>

            <Button variant="hero" size="xl" asChild>
              <a href="#quote">Get a Custom Quote</a>
            </Button>
          </motion.div>

          {/* Right side - Image + stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Private party bus experience"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 left-6 right-6 bg-background rounded-xl p-5 shadow-lift">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground font-display">500+</div>
                <div className="text-sm font-semibold text-foreground">Private Events Hosted</div>
                <div className="text-xs text-muted-foreground mt-1">Corporate teams, bachelorettes, birthdays & more</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEventsTeaser;
