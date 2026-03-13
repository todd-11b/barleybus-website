import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Listings | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description:
    "Discover amazing travel packages and tours with our comprehensive listing page",
  keywords: [
    "travel",
    "tours",
    "packages",
    "booking",
    "vacation",
    "trip",
    "adventure",
  ],
};

export default function TravelListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
