import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";

export function PortfolioMasonry({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Selected work</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">Brands we've leveled up</h2>
          </div>
          <Link to="/portfolio" className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            See all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [[column-fill:balance]]">
          {items.map((p, i) => (
            <Link
              key={p.title}
              to="/portfolio"
              className="reveal-scale group block mb-5 break-inside-avoid relative overflow-hidden rounded-2xl border border-border bg-card"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${p.h === "tall" ? "h-96" : "h-72"}`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/85 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-background bg-background/15 backdrop-blur px-3 py-1.5 rounded-full border border-background/30">
                    View case study <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
