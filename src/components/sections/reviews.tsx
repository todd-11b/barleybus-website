import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah M.",
    occasion: "Bachelorette Party",
    rating: 5,
    text: "Hands down the best day of our whole bachelorette weekend. Our guide was amazing, the breweries were a blast, and we didn't have to plan a single thing. Worth every penny.",
  },
  {
    name: "James R.",
    occasion: "Corporate Outing",
    rating: 5,
    text: "Booked this for our team of 18 and everyone had an incredible time. The whole thing was turnkey — one invoice, one contact, zero headaches. Already planning our next one.",
  },
  {
    name: "Katie L.",
    occasion: "Brewery Tour",
    rating: 5,
    text: "Such a fun way to spend a Saturday afternoon. Loved being able to try places I hadn't been to. The bus was great, the guide knew everything, and we got VIP treatment.",
  },
];

export function Reviews() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="eyebrow">What Guests Say</p>
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="rounded-[--radius-md] border border-border bg-white p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-3 flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-star text-star"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-text-secondary">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-4 border-t border-border pt-4">
                <div className="text-sm font-semibold text-text-primary">
                  {review.name}
                </div>
                <div className="text-xs text-text-muted">
                  {review.occasion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
