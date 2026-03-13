import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Listings | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description:
    "Find the best hotels and accommodations with our comprehensive hotel search",
  keywords: [
    "hotels",
    "accommodation",
    "hotel booking",
    "cheap hotels",
    "luxury hotels",
    "hotel deals",
  ],
};

export default function HotelListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
