import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Listings - Find Your Perfect Visa",
  description:
    "Browse and compare visa options for different countries. Find the best visa deals with our comprehensive search and filter system.",
  keywords:
    "visa, immigration, travel documents, visa application, visa services",
};

export default function VisaListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
