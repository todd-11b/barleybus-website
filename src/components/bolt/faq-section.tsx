"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "How do I book a tour?",
    a: "Booking is easy! Click any \"Book Now\" button, select your tour, choose your date and party size, and complete payment. You'll receive instant confirmation via email.",
  },
  {
    q: "What's included in the tour price?",
    a: "All tours include transportation on our comfortable tour bus, an expert guide, and stops at each location. For brewery and BBQ tours, the price includes samples/tastings. Full meals and additional drinks are not included but available for purchase.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We offer free cancellation up to 24 hours before your tour start time for a full refund. Cancellations within 24 hours are non-refundable, but you can reschedule for a different date.",
  },
  {
    q: "Can I bring kids on the tours?",
    a: "Our Brewery and Party Bus tours are 21+ only. The BBQ, Sightseeing, Holiday Lights, and Ghost tours are family-friendly and welcome all ages. Kids under 12 receive discounted pricing.",
  },
  {
    q: "Where do tours depart from?",
    a: "Most tours depart from our downtown Kansas City location. Private tours can arrange custom pickup locations. Full address and parking instructions are sent in your confirmation email.",
  },
  {
    q: "How many people can fit on a tour?",
    a: "Our public tours have a maximum of 14 guests for an intimate experience. For private events, we can accommodate groups of 10-40+ guests depending on the bus and package selected.",
  },
  {
    q: "What if the weather is bad?",
    a: "Tours run rain or shine! Our buses are climate-controlled and comfortable year-round. In extreme weather conditions, we'll contact you about rescheduling options.",
  },
];

const FAQItem = ({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-foreground/10">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left"
    >
      <span className="text-base md:text-lg font-medium text-foreground pr-4">{faq.q}</span>
      <div
        className={`flex-none w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center transition-transform duration-300 ${
          isOpen ? "rotate-45 bg-primary border-primary" : ""
        }`}
      >
        <Plus
          className={`w-4 h-4 transition-colors ${isOpen ? "text-primary-foreground" : "text-foreground"}`}
          strokeWidth={2}
        />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-muted-foreground leading-relaxed max-w-[65ch]">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before you book
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
