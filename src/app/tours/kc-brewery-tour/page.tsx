"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Star,
  Clock,
  Users,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Check,
  X as XIcon,
} from "lucide-react";
import { BOOKING_LINKS } from "@/config/booking";

const images = [
  "/images/bachelorette/barrel-room-group.jpg",
  "/images/bachelorette/kc-wineworks-group.jpg",
  "/images/bachelorette/vineyard-tour-guide.jpg",
];

const tabs = [
  "Overview",
  "Highlights",
  "Itinerary",
  "What's Included",
  "Cancellation",
  "FAQs",
  "Reviews",
] as const;

const highlights = [
  "Visit 3-4 award-winning breweries",
  "Sample 12+ unique craft beers",
  "Behind-the-scenes brewery tours",
  "Expert beer guide",
  "All transportation included",
  "Souvenir tasting glass",
];

const itinerary = [
  {
    time: "1:00 PM",
    title: "Departure — Kansas City Crossroads",
    description:
      "Meet at our departure point in the historic Crossroads Arts District. Board our comfortable tour bus and begin your brewery adventure.",
  },
  {
    time: "1:30 PM",
    title: "First Brewery Stop",
    description:
      "Visit our first brewery for a guided tour and tasting session. Learn about the brewing process and sample 3–4 craft beers.",
  },
  {
    time: "2:45 PM",
    title: "Second Brewery Stop",
    description:
      "Continue to an exclusive behind-the-scenes tour and tasting of seasonal offerings.",
  },
  {
    time: "4:00 PM",
    title: "Third Brewery Stop",
    description:
      "Visit a local favorite brewery in the River Market area. Sample unique craft offerings and enjoy light snacks.",
  },
  {
    time: "5:30 PM",
    title: "Return",
    description:
      "Return to the original departure point with unforgettable memories and your souvenir tasting glass.",
  },
];

const included = [
  "Professional tour guide",
  "Transportation on comfortable tour bus",
  "Brewery tours and tastings",
  "Souvenir tasting glass",
  "Light snacks",
  "Bottled water",
];

const notIncluded = [
  "Gratuities",
  "Additional food or drinks",
  "Hotel pickup/drop-off",
];

const faqs = [
  {
    question: "What should I bring?",
    answer:
      "Please bring a valid ID (21+ required), comfortable walking shoes, and a camera to capture memories!",
  },
  {
    question: "Is food included?",
    answer:
      "Light snacks are provided, but we recommend eating before the tour. You'll also have opportunities to purchase food at some brewery stops.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "Tours run rain or shine! Our bus provides comfortable covered transportation between breweries.",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    time: "2 weeks ago",
    rating: 5,
    text: "Absolutely amazing experience! Our guide was knowledgeable and the breweries were fantastic. Perfect way to explore KC's beer scene!",
  },
  {
    name: "Mike R.",
    time: "1 month ago",
    rating: 5,
    text: "Best brewery tour I've been on. Great selection of breweries and the guide made it so fun. Highly recommend!",
  },
];

export default function BreweryTourPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [guests, setGuests] = useState("1 Guest");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sectionRefs = {
    Overview: useRef<HTMLDivElement>(null),
    Highlights: useRef<HTMLDivElement>(null),
    Itinerary: useRef<HTMLDivElement>(null),
    "What's Included": useRef<HTMLDivElement>(null),
    Cancellation: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
    Reviews: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (tab: string) => {
    setActiveTab(tab);
    const ref = sectionRefs[tab as keyof typeof sectionRefs];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="pt-20 md:pt-24 pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] xl:gap-12">
          {/* ── Left content ── */}
          <div>
            {/* Image carousel */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={images[currentImage]}
                alt="Kansas City Brewery Tour"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === currentImage ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Title + meta */}
            <div className="mt-6">
              <h1 className="text-3xl font-bold md:text-4xl">
                Kansas City Brewery Tour
              </h1>

              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-star text-star" />
                  <span className="text-sm font-semibold">5</span>
                  <span className="text-sm text-text-muted">(24 reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-text-muted">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Kansas City, MO</span>
                </div>
              </div>

              {/* Quick info pills */}
              <div className="mt-6 flex flex-wrap gap-6 border-b border-border pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                    <Clock className="h-5 w-5 text-text-muted" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Duration</p>
                    <p className="text-sm font-semibold">4–5 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                    <Users className="h-5 w-5 text-text-muted" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Group Size</p>
                    <p className="text-sm font-semibold">Up to 14</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                    <MapPin className="h-5 w-5 text-text-muted" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Location</p>
                    <p className="text-sm font-semibold">Kansas City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab navigation */}
            <div className="sticky top-16 z-20 mt-6 border-b border-border bg-white md:top-20">
              <div className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => scrollToSection(tab)}
                    className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "border-coral text-coral"
                        : "border-transparent text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div ref={sectionRefs.Overview} className="pt-8">
              <p className="text-base leading-relaxed text-text-secondary">
                Experience the best of Kansas City&rsquo;s craft beer scene on
                this exciting brewery tour. Visit 3–4 award-winning breweries
                and sample a variety of unique craft beers while learning about
                the brewing process from expert guides.
              </p>
            </div>

            {/* Highlights */}
            <div ref={sectionRefs.Highlights} className="pt-10">
              <h2 className="mb-5 text-2xl font-bold">Highlights</h2>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
                    <span className="text-base text-text-secondary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div ref={sectionRefs.Itinerary} className="pt-10">
              <h2 className="mb-6 text-2xl font-bold">Itinerary</h2>
              <div className="relative">
                <div className="absolute bottom-2 left-[3.25rem] top-2 w-px bg-border" />
                <div className="space-y-8">
                  {itinerary.map((stop, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-[4.5rem] shrink-0 pt-0.5">
                        <span className="text-sm font-semibold text-coral">
                          {stop.time}
                        </span>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-coral" />
                        <h3 className="text-base font-semibold">
                          {stop.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                          {stop.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div ref={sectionRefs["What's Included"]} className="pt-10">
              <h2 className="mb-5 text-2xl font-bold">
                What&rsquo;s Included
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-base font-semibold">Included</h3>
                  <div className="space-y-2.5">
                    {included.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        <span className="text-sm text-text-secondary">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-base font-semibold">
                    Not Included
                  </h3>
                  <div className="space-y-2.5">
                    {notIncluded.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                        <span className="text-sm text-text-secondary">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation */}
            <div ref={sectionRefs.Cancellation} className="pt-10">
              <h2 className="mb-4 text-2xl font-bold">
                Cancellation Policy
              </h2>
              <p className="text-base leading-relaxed text-text-secondary">
                Free cancellation up to 72 hours before the tour starts.
                Inside 72 hours, your reservation is non-refundable but can be
                rescheduled with at least 24 hours notice.
              </p>
            </div>

            {/* FAQs */}
            <div ref={sectionRefs.FAQs} className="pt-10">
              <h2 className="mb-5 text-2xl font-bold">FAQs</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-border"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="flex w-full items-center justify-between p-4 text-left"
                    >
                      <span className="text-base font-semibold">
                        {faq.question}
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 text-text-muted transition-transform ${
                          openFaq === index ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div ref={sectionRefs.Reviews} className="pb-16 pt-10">
              <h2 className="mb-5 text-2xl font-bold">Reviews</h2>
              <div className="space-y-5">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border p-5"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                          <span className="text-sm font-semibold">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold">
                            {review.name}
                          </p>
                          <p className="text-xs text-text-muted">
                            {review.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-star text-star"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right sidebar — Booking card ── */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-md">
                <p className="text-sm text-text-muted">from</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$90</span>
                  <span className="text-base text-text-secondary">
                    /person
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Select Date
                    </label>
                    <input
                      type="date"
                      className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="h-11 w-full appearance-none rounded-lg border border-border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral"
                    >
                      {Array.from({ length: 14 }, (_, i) => (
                        <option
                          key={i + 1}
                          value={`${i + 1} Guest${i > 0 ? "s" : ""}`}
                        >
                          {i + 1} Guest{i > 0 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <a
                    href={BOOKING_LINKS.brewery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center rounded-full bg-coral text-base font-semibold text-white hover:bg-coral-hover transition-colors"
                  >
                    Check availability
                  </a>
                </div>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="mb-3 text-sm font-bold">
                    Why book with Barley Bus?
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-coral" />
                      <span className="text-sm text-text-secondary">
                        Free cancellation up to 72 hours
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-coral" />
                      <span className="text-sm text-text-secondary">
                        Reserve now, pay later
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-coral" />
                      <span className="text-sm text-text-secondary">
                        4.9 stars from 1,800+ reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white px-4 py-3 lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-text-muted">from</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">$90</span>
              <span className="text-sm text-text-secondary">/person</span>
            </div>
          </div>
          <a
            href={BOOKING_LINKS.brewery}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center rounded-full bg-coral px-8 text-sm font-semibold text-white hover:bg-coral-hover transition-colors"
          >
            Check availability
          </a>
        </div>
      </div>
    </div>
  );
}
