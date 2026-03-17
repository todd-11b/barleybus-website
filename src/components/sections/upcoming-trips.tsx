import Link from "next/link";
import Image from "next/image";

const trips = [
  {
    title: "KC Brewery Hop",
    price: 90,
    image: "/images/bachelorette/barrel-room-group.jpg",
    alt: "Guests enjoying a Barley Bus brewery hop",
    href: "/tours/kc-brewery-tour",
  },
  {
    title: "BBQ Trail Crawl",
    price: 90,
    image: "/images/bachelorette/kc-wineworks-group.jpg",
    alt: "Kansas City barbecue stops on a Barley Bus tour",
    href: "/tours",
  },
  {
    title: "Ghost & Gangsters",
    price: 50,
    image: "/images/bachelorette/steps-group-sunglasses.jpg",
    alt: "Nighttime ghost tour experience in Kansas City",
    href: "/tours",
  },
  {
    title: "City Landmarks",
    price: 50,
    image: "/images/bachelorette/vineyard-group-pink-tops.jpg",
    alt: "Kansas City sightseeing landmarks from a Barley Bus tour",
    href: "/tours",
  },
];

export function UpcomingTrips() {
  return (
    <section className="overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[24rem_1fr] xl:gap-12">
          {/* Left column */}
          <div className="xl:pt-2">
            <h2 className="max-w-[8ch] font-display text-[clamp(3rem,7vw,5.5rem)] uppercase leading-[0.88] tracking-tight">
              Upcoming Trips
            </h2>
            <p className="mt-5 max-w-sm text-lg text-text-secondary">
              Exciting upcoming trips to breweries, BBQ joints, haunted
              hideaways, and city landmarks. Adventure, culture, and
              unforgettable memories await.
            </p>
            <Link
              href="/tours"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-coral px-8 text-sm font-semibold text-white hover:bg-coral-hover transition-colors"
            >
              View All
            </Link>
          </div>

          {/* Right column — scrollable cards */}
          <div className="relative xl:pl-12">
            <div className="absolute bottom-0 left-0 top-6 hidden w-px bg-border xl:block" />
            <div className="overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex min-w-max gap-6">
                {trips.map((trip) => (
                  <Link
                    key={trip.title}
                    href={trip.href}
                    className="group block w-[21rem] overflow-hidden rounded-3xl sm:w-[22rem] lg:w-[23rem]"
                  >
                    <div className="relative aspect-[4/7] overflow-hidden rounded-3xl">
                      <Image
                        src={trip.image}
                        alt={trip.alt}
                        fill
                        sizes="23rem"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                        <h3 className="max-w-[11rem] font-display text-[2rem] uppercase leading-[0.9] tracking-tight text-white sm:text-[2.2rem]">
                          {trip.title}
                        </h3>
                        <div className="shrink-0 text-right">
                          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                            From
                          </p>
                          <p className="font-display text-4xl leading-none text-coral">
                            ${trip.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
