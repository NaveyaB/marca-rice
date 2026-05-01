import * as Icons from "lucide-react";
import { services } from "@/data/site";

export function ServicesGrid() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">What we do</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">Services that grow brands</h2>
          <p className="mt-4 text-muted-foreground">From identity to launch and beyond — every service is built to compound your brand.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
            return (
              <div
                key={s.title}
                className="reveal group relative p-6 rounded-2xl border border-border bg-card hover:border-transparent hover:shadow-elegant hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center mb-5 group-hover:bg-background/20 group-hover:backdrop-blur transition-colors">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary-foreground transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/85 transition-colors leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
