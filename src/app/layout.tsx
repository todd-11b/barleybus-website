import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-latin.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-inter",
  fallback: [
    "Inter",
    "ui-sans-serif",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

const oswald = localFont({
  src: [
    {
      path: "./fonts/oswald-latin.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-oswald",
  fallback: [
    "Oswald",
    "Impact",
    "Haettenschweiler",
    "Arial Narrow Bold",
    "sans-serif",
  ],
});

const robotocondensed = localFont({
  src: [
    {
      path: "./fonts/roboto-condensed-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-roboto-condensed",
  fallback: [
    "Roboto Condensed",
    "Arial Narrow",
    "sans-serif",
  ],
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
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${robotocondensed.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
