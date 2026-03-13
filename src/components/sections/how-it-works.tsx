import { MessageSquare, Route, PartyPopper } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Tell us what you want",
    description: "Pick your tour type, date, and group size.",
  },
  {
    icon: Route,
    title: "We'll find the perfect fit",
    description: "Our team builds your experience.",
  },
  {
    icon: PartyPopper,
    title: "Show up and have fun",
    description: "We handle everything else.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-secondary">
            Three steps. Zero stress. We make it easy.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-coral/10">
                <step.icon className="h-7 w-7 text-coral" />
              </div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                Step {i + 1}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
