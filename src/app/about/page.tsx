import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight">About Barley Bus</h1>
      <p className="mt-4 text-lg text-text-secondary">
        This page is coming soon. Learn about Kansas City&rsquo;s favorite tour company.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
