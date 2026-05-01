import { process } from "@/data/site";

export function Process() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Our process</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">How we work</h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-4">
          {/* Connecting line */}
          <svg className="hidden md:block absolute top-12 left-0 w-full h-2 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 2">
            <line x1="5" y1="1" x2="95" y2="1" stroke="currentColor" strokeWidth="0.4"
              className="text-border" strokeDasharray="2 2" />
            <line x1="5" y1="1" x2="95" y2="1" stroke="url(#g)" strokeWidth="0.6"
              strokeDasharray="90" strokeDashoffset="90"
              style={{ animation: "draw-line 2.5s ease-out forwards", animationDelay: "0.4s" }} />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.55 0.22 265)" />
                <stop offset="100%" stopColor="oklch(0.62 0.24 295)" />
              </linearGradient>
            </defs>
          </svg>

          {process.map((p, i) => (
            <div key={p.n} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="h-12 w-12 rounded-full bg-background border-2 border-primary grid place-items-center font-display font-bold text-primary mb-5 mx-auto md:mx-0 relative z-10">
                {p.n}
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center md:text-left">
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
