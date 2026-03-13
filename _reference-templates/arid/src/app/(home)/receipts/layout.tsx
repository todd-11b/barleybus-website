import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Receipts - Arid Travel & Tours",
  description:
    "View, download, and manage your receipts for all travel bookings and services.",
  keywords:
    "receipts, invoices, travel bookings, payment confirmations, PDF download",
};

export default function ReceiptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
