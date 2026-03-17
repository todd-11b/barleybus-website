import { Hero } from "@/components/sections/hero";
import { UpcomingTrips } from "@/components/sections/upcoming-trips";
import { TourCategories } from "@/components/sections/tour-categories";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SocialProof } from "@/components/sections/social-proof";
import { FeaturedTour } from "@/components/sections/featured-tour";
import { Reviews } from "@/components/sections/reviews";
import { PrivateEventsTeaser } from "@/components/sections/private-events-teaser";
import { Guarantees } from "@/components/sections/guarantees";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

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

      <Hero />
      <UpcomingTrips />
      <TourCategories />
      <HowItWorks />
      <SocialProof />
      <FeaturedTour />
      <Reviews />
      <PrivateEventsTeaser />
      <Guarantees />
      <FAQ />
      <FinalCTA />
    </>
  );
}
