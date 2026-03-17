import { Metadata } from "next";
import PopularPackages from "@/components/bolt/popular-packages";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse Barley Bus tour packages — brewery combos, ghost tours, holiday lights, and all-day KC experiences.",
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PopularPackages />
    </div>
  );
}
