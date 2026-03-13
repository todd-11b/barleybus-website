import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description:
    "Comprehensive admin dashboard for managing travel bookings, users, and analytics",
  keywords: [
    "admin",
    "dashboard",
    "management",
    "travel",
    "bookings",
    "analytics",
  ],
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
