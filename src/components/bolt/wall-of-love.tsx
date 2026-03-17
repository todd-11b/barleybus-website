"use client";

import { motion } from "framer-motion";

const photos = [
  "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1574643/pexels-photo-1574643.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const WallOfLove = () => {
  // Duplicate for infinite scroll effect
  const allPhotos = [...photos, ...photos];

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real Guests, Real Fun
          </h2>
          <p className="text-muted-foreground text-lg">
            Tagged #BarleyBus on Instagram
          </p>
        </motion.div>
      </div>

      {/* Scrolling marquee row */}
      <div className="relative">
        <motion.div
          animate={{ x: [0, -50 * photos.length * 4] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-3"
        >
          {allPhotos.map((photo, i) => (
            <div
              key={i}
              className="flex-none w-[200px] md:w-[280px] aspect-square overflow-hidden rounded-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={`Barley Bus guest photo ${(i % photos.length) + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <a
          href="https://instagram.com/barleybus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Follow @BarleyBus on Instagram
        </a>
      </div>
    </section>
  );
};

export default WallOfLove;
