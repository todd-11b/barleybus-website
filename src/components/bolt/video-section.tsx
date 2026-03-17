"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            See The Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Real guests, real moments, real fun
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-[2rem] overflow-hidden aspect-video max-w-4xl mx-auto group cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Barley Bus Tour Video"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-surface-dark/30 group-hover:bg-surface-dark/40 transition-colors" />

          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-cta group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
            <p className="text-surface-dark-foreground font-semibold mt-4 text-lg">
              Watch: A Day on the Barley Bus
            </p>
            <p className="text-surface-dark-foreground/60 text-sm mt-1">2:15 minutes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
