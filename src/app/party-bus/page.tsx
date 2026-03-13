import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = { title: "Party Bus" };

export default function PartyBusPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Party Bus Rentals</h1>
      <p className="mt-4 text-lg text-text-secondary">
        This page is coming soon. 14 and 20 passenger party buses starting at $150/hr.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
