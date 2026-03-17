"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Best tour experience in Kansas City! Our guide was hilarious and knowledgeable. The brewery stops were perfectly chosen, and we discovered new favorite beers. Absolutely recommend for anyone visiting KC!",
    name: "Sarah M.",
    tour: "Brewery Tour, October 2024",
    initials: "SM",
  },
  {
    text: "We used Barley Bus for my wife's bachelorette party and it was PERFECT. The party bus was clean, fun, and our driver was professional. Made planning so easy!",
    name: "James D.",
    tour: "Party Bus, September 2024",
    initials: "JD",
  },
];

const SocialProof = () => {
  const [activeTab, setActiveTab] = useState<"google" | "tripadvisor">("google");

  return (
    <section id="reviews" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          {/* Rating header */}
          <div className="text-center mb-12">
            <div className="text-5xl md:text-6xl font-bold text-foreground font-display mb-2">4.9/5</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Our Guests Say
            </h2>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground font-display">500+</div>
                <div className="text-sm text-muted-foreground">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground font-display">15K+</div>
                <div className="text-sm text-muted-foreground">Happy Guests</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="inline-flex bg-background rounded-full p-1 gap-1">
              {(["google", "tripadvisor"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "google" ? "Google Reviews" : "TripAdvisor"}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.tour}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
