import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: {
    default: "Barley Bus | Kansas City Tours & Party Bus Rentals",
    template: "%s | Barley Bus",
  },
  description:
    "Kansas City's favorite brewery, winery, food, and sightseeing tours. Private events, bachelorette parties, and party bus rentals. Reserve now, pay later.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Barley Bus",
    title: "Barley Bus | Kansas City Tours & Party Bus Rentals",
    description:
      "Kansas City's favorite brewery, winery, food, and sightseeing tours. Private events, bachelorette parties, and party bus rentals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
