import { Hero } from "@/components/sections/hero";

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

      {/* Section 1 — Hero (Plexify exact copy) */}
      <Hero />
    </>
  );
}
