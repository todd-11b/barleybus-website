import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CONTACT } from "@/config/navigation";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-4 text-lg text-text-secondary">
        Call or text: {CONTACT.phone}<br />
        Email: {CONTACT.email}
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
