import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight Listings | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description:
    "Find the best flight deals and book your perfect flight with our comprehensive flight search",
  keywords: [
    "flights",
    "airline tickets",
    "flight booking",
    "cheap flights",
    "flight deals",
    "air travel",
  ],
};

export default function FlightListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
