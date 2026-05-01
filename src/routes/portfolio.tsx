import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PortfolioMasonry } from "@/components/PortfolioMasonry";
import { CTABanner } from "@/components/CTABanner";
import { projects } from "@/data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Marca Rise" },
      { name: "description", content: "Selected case studies and projects: brand identity, web, social and growth campaigns." },
      { property: "og:title", content: "Portfolio — Marca Rise" },
      { property: "og:description", content: "See how we've helped brands grow with strategy, design and content." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <Layout>
      <section className="relative pt-32 pb-8 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft -z-10" />
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="reveal font-display text-5xl md:text-7xl font-bold">Selected <span className="text-gradient-brand">work</span></h1>
          <p className="reveal mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real brands. Real results. Each project is a story of strategy meeting design.
          </p>
        </div>
      </section>

      <PortfolioMasonry />

      {/* Case study deep-dive sample */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="reveal text-3xl md:text-4xl font-display font-bold mb-12">Case study highlights</h2>
          <div className="grid gap-8">
            {projects.slice(0, 3).map((p, i) => (
              <div key={p.title} className="reveal grid md:grid-cols-2 gap-8 p-6 md:p-10 rounded-3xl bg-card border border-border" style={{transitionDelay: `${i*100}ms`}}>
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-72 object-cover rounded-2xl" />
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted">{t}</span>)}
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">{p.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div><span className="font-semibold text-primary">Problem · </span><span className="text-muted-foreground">{p.problem}</span></div>
                    <div><span className="font-semibold text-primary">Solution · </span><span className="text-muted-foreground">{p.solution}</span></div>
                    <div>
                      <span className="font-semibold text-primary">Results</span>
                      <ul className="mt-2 space-y-1">
                        {p.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" /> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
