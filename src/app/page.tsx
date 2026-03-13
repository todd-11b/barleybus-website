import { Hero } from "@/components/sections/hero";
import { TourCategories } from "@/components/sections/tour-categories";
import { SocialProof } from "@/components/sections/social-proof";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PrivateEventsTeaser } from "@/components/sections/private-events-teaser";
import { Guarantees } from "@/components/sections/guarantees";
import { Reviews } from "@/components/sections/reviews";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { MobileCTABar } from "@/components/mobile-cta-bar";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "TourOperator"],
            name: "Barley Bus Tours & Transportation",
            description:
              "Kansas City's favorite brewery, winery, food, and sightseeing tours. Private events, bachelorette parties, and party bus rentals.",
            telephone: "+1-816-323-3889",
            email: "info@barleybus.com",
            url: "https://barleybus.com",
            areaServed: {
              "@type": "City",
              name: "Kansas City",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1800",
              bestRating: "5",
            },
            priceRange: "$50-$200",
          }),
        }}
      />

      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Tour Category Cards */}
      <TourCategories />

      {/* Section 3 — Social Proof Strip */}
      <SocialProof />

      {/* Section 4 — How It Works */}
      <HowItWorks />

      {/* Section 5 — Private Events Teaser */}
      <PrivateEventsTeaser />

      {/* Section 6 — Guarantee Badges */}
      <Guarantees />

      {/* Section 7 — Reviews */}
      <Reviews />

      {/* Section 8 — FAQ */}
      <FAQ />

      {/* Section 9 — Final CTA */}
      <FinalCTA />

      {/* Sticky Mobile CTA Bar */}
      <MobileCTABar />

      {/* Bottom padding on mobile to account for sticky CTA bar */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
