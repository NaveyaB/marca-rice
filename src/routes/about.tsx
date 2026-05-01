import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/CTABanner";
import { Process } from "@/components/Process";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marca Rise" },
      { name: "description", content: "Marca Rise is a creative digital agency helping brands stand out with strategy, design and tech." },
      { property: "og:title", content: "About — Marca Rise" },
      { property: "og:description", content: "Our story, mission and the team behind Marca Rise." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Creative Lead", role: "Brand & Visual Strategy" },
  { name: "Content Lead", role: "Reels & Storytelling" },
  { name: "Web Lead", role: "Design & Development" },
  { name: "Growth Lead", role: "Marketing & Performance" },
];

const values = [
  { t: "Strategy + Creativity", d: "We blend insight with craft so every visual has a job to do." },
  { t: "Brand-first thinking", d: "We don't ship designs — we build brands people remember." },
  { t: "Instagram-native", d: "Reels, hooks and aesthetic systems built for how people actually scroll." },
  { t: "Startup-friendly", d: "Lean processes and senior craft, made for ambitious early teams." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft -z-10" />
        <div className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl animate-float -z-10" />
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="reveal font-display text-5xl md:text-7xl font-bold">
            Building brands that <span className="text-gradient-brand">rise</span>.
          </h1>
          <p className="reveal mt-6 text-lg text-muted-foreground">
            Marca Rise was started with a simple vision — helping brands stand out in the digital world.
            We combine creative design, marketing strategy and modern technology to turn ideas into
            powerful digital brands.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <div key={v.t} className="reveal p-8 rounded-2xl border border-border bg-card hover:shadow-elegant hover:-translate-y-1 transition-all" style={{transitionDelay:`${i*80}ms`}}>
              <div className="h-10 w-10 rounded-lg bg-gradient-brand mb-4" />
              <h3 className="font-display font-bold text-xl mb-2">{v.t}</h3>
              <p className="text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Process />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="reveal text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">The team</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">Small team. Big craft.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <div key={m.name} className="reveal-scale group relative aspect-square rounded-2xl overflow-hidden bg-gradient-brand" style={{transitionDelay:`${i*80}ms`}}>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-6xl font-bold text-primary-foreground/30 group-hover:scale-110 transition-transform duration-500">
                    {m.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-background p-4 text-center">
                  <p className="font-display font-bold">{m.name}</p>
                  <p className="text-sm opacity-80 mt-1">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
