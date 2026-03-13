"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How do I book a tour?",
    answer:
      "Use the availability bar at the top of this page or click any 'Book Now' button. You can also call or text us at 816-323-3889. Reserve now, pay later — no upfront cost.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Free cancellation up to 72 hours before your tour. Inside 72 hours, your reservation is non-refundable but can be rescheduled with at least 24 hours notice.",
  },
  {
    question: "Do you list the specific stops on each tour?",
    answer:
      "We rotate stops regularly to keep things fresh and give you the best experience. Your guide will share the full itinerary the day before your tour.",
  },
  {
    question: "Is there a minimum age requirement?",
    answer:
      "Drink tours (brewery, winery, distillery) are 21+ with valid ID. Food and sightseeing tours are open to all ages.",
  },
  {
    question: "Can I book a private tour for my group?",
    answer:
      "Yes. Private tours start at $60/person for groups of 10 or more. We handle the itinerary, transportation, tastings, and pickup. Just tell us the date and group size and we'll build it for you.",
  },
  {
    question: "Where do tours meet?",
    answer:
      "Public food and drink tours meet at Made in KC. Sightseeing tours meet at Enzo. Private tours include custom pickup from your location — no extra charge.",
  },
];

export function FAQ() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="eyebrow">Common Questions</p>
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
