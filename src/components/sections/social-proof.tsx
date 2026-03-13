import { Star } from "lucide-react";

export function SocialProof() {
  return (
    <section className="border-y border-border bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-0 sm:divide-x sm:divide-border">
          {/* 4.9 Rating */}
          <div className="text-center sm:px-12">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl">
                4.9
              </span>
              <Star className="h-7 w-7 fill-star text-star sm:h-8 sm:w-8" />
            </div>
            <div className="mt-1 text-sm text-text-secondary">
              from 1,800+ reviews
            </div>
          </div>

          {/* 3,000+ Guests */}
          <div className="text-center sm:px-12">
            <div className="text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl">
              3,000+
            </div>
            <div className="mt-1 text-sm text-text-secondary">
              happy guests
            </div>
          </div>

          {/* #1 Ranking */}
          <div className="text-center sm:px-12">
            <div className="text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl">
              #1
            </div>
            <div className="mt-1 text-sm text-text-secondary">
              KC tour company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
