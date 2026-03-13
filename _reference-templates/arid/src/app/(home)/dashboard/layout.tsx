import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description: "Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template",
  keywords: [
    "tour",
    "travel",
    "booking",
    "rental",
    "nextJs",
    "tailwind",
    "trip",
    "beach",
    "holidy",
    "cruise",
    "vacation",
  ],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
