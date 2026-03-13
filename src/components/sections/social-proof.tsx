import { Star, Users, Award } from "lucide-react";

const STATS = [
  {
    icon: Star,
    value: "4.9 Stars",
    label: "from 1,800+ reviews",
  },
  {
    icon: Users,
    value: "3,000+",
    label: "happy guests",
  },
  {
    icon: Award,
    value: "#1",
    label: "KC tour company",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="flex items-center gap-3 text-center sm:text-left"
            >
              <stat.icon className="h-8 w-8 shrink-0 text-coral" />
              <div>
                <div className="text-xl font-bold text-text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
