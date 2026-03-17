"use client";

import { useState, useRef } from "react";
import {
  Star,
  Clock,
  Users,
  MapPin,
  Share2,
  ChevronLeft,
  ChevronRight,
  Check,
  X as XIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "/images/bachelorette/barrel-room-group.jpg",
  "/images/bachelorette/kc-wineworks-group.jpg",
  "/images/bachelorette/vineyard-tour-guide.jpg",
];

const tabs = ["Overview", "Highlights", "Itinerary", "What's Included", "Cancellation", "FAQs", "Reviews"];

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
    title: "Departure - Kansas City Crossroads",
    description: "Meet at our departure point in the historic Crossroads Arts District. Board our comfortable tour bus and begin your brewery adventure.",
  },
  {
    time: "1:30 PM",
    title: "First Brewery Stop",
    description: "Visit our first brewery for a guided tour and tasting session. Learn about the brewing process and sample 3-4 craft beers.",
  },
  {
    time: "2:45 PM",
    title: "Second Brewery Stop",
    description: "Continue to Boulevard Brewing Company for an exclusive behind-the-scenes tour and tasting of their seasonal offerings.",
  },
  {
    time: "4:00 PM",
    title: "Third Brewery Stop",
    description: "Visit a local favorite brewery in the River Market area. Sample unique craft offerings and enjoy light snacks.",
  },
  {
    time: "5:30 PM",
    title: "Return",
    description: "Return to the original departure point with unforgettable memories and your souvenir tasting glass.",
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
    answer: "Please bring a valid ID (21+ required), comfortable walking shoes, and a camera to capture memories!",
  },
  {
    question: "Is food included?",
    answer: "Light snacks are provided, but we recommend eating before the tour. You'll also have opportunities to purchase food at some brewery stops.",
  },
  {
    question: "What happens if it rains?",
    answer: "Tours run rain or shine! Our bus provides comfortable covered transportation between breweries.",
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
  const [activeTab, setActiveTab] = useState("Overview");
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

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="pt-20 md:pt-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 xl:gap-12">
          {/* Left content */}
          <div>
            {/* Image carousel */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[currentImage]}
                alt="Kansas City Brewery Tour"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentImage ? "bg-background" : "bg-background/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Title + meta */}
            <div className="mt-6">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Kansas City Brewery Tour
                </h1>
                <button className="shrink-0 mt-1 text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-sm font-semibold text-foreground">5</span>
                  <span className="text-sm text-muted-foreground">(24 reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Kansas City, MO</span>
                </div>
              </div>

              {/* Quick info pills */}
              <div className="flex flex-wrap gap-6 mt-6 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="text-sm font-semibold text-foreground">4-5 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Group Size</p>
                    <p className="text-sm font-semibold text-foreground">Up to 14</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold text-foreground">Kansas City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab navigation */}
            <div className="sticky top-16 md:top-20 z-20 bg-background border-b border-border mt-6">
              <div className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => scrollToSection(tab)}
                    className={`whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div ref={sectionRefs.Overview} className="pt-8">
              <p className="text-base text-muted-foreground leading-relaxed">
                Experience the best of Kansas City&apos;s craft beer scene on this exciting brewery tour. Visit 3-4 award-winning breweries and sample a variety of unique craft beers while learning about the brewing process from expert guides.
              </p>
            </div>

            {/* Highlights */}
            <div ref={sectionRefs.Highlights} className="pt-10">
              <h2 className="text-2xl font-bold text-foreground mb-5">Highlights</h2>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div ref={sectionRefs.Itinerary} className="pt-10">
              <h2 className="text-2xl font-bold text-foreground mb-6">Itinerary</h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[3.25rem] top-2 bottom-2 w-px bg-border" />
                <div className="space-y-8">
                  {itinerary.map((stop, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="shrink-0 w-[4.5rem] pt-0.5">
                        <span className="text-sm font-semibold text-primary">{stop.time}</span>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[1.65rem] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                        <h3 className="text-base font-semibold text-foreground">{stop.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{stop.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div ref={sectionRefs["What's Included"]} className="pt-10">
              <h2 className="text-2xl font-bold text-foreground mb-5">What&apos;s Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-3">Included</h3>
                  <div className="space-y-2.5">
                    {included.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-3">Not Included</h3>
                  <div className="space-y-2.5">
                    {notIncluded.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <XIcon className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation */}
            <div ref={sectionRefs.Cancellation} className="pt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cancellation Policy</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Free cancellation up to 24 hours before the tour starts. Cancellations within 24 hours are non-refundable.
              </p>
            </div>

            {/* FAQs */}
            <div ref={sectionRefs.FAQs} className="pt-10">
              <h2 className="text-2xl font-bold text-foreground mb-5">FAQs</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="text-base font-semibold text-foreground">{faq.question}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          openFaq === index ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div ref={sectionRefs.Reviews} className="pt-10 pb-16">
              <h2 className="text-2xl font-bold text-foreground mb-5">Reviews</h2>
              <div className="space-y-5">
                {reviews.map((review, index) => (
                  <div key={index} className="border border-border rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          <span className="text-sm font-semibold text-foreground">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{review.time}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar - Booking card */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="border border-border rounded-2xl p-6 shadow-soft bg-background">
                <p className="text-sm text-muted-foreground">from</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-bold text-foreground">$60</span>
                  <span className="text-base text-muted-foreground">/person</span>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Select Date</label>
                    <input
                      type="date"
                      className="w-full h-11 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                    >
                      {Array.from({ length: 14 }, (_, i) => (
                        <option key={i + 1} value={`${i + 1} Guest${i > 0 ? "s" : ""}`}>
                          {i + 1} Guest{i > 0 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors">
                    Check availability
                  </button>
                </div>

                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-sm font-bold text-foreground mb-3">Why booking with Barley Bus?</p>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">Free cancellation up to 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">Trusted by 100K+ travelers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">from</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">$60</span>
              <span className="text-sm text-muted-foreground">/person</span>
            </div>
          </div>
          <button className="h-11 px-8 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
            Check availability
          </button>
        </div>
      </div>
    </div>
  );
}
