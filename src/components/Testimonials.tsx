import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";

const logos = ["Urban Threads", "Glow", "Reels Studio", "Coastal", "Studio Co", "NorthPeak", "Lumen", "Vertex"];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 px-6 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Loved by clients</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">What people say</h2>
        </div>

        <div className="reveal relative h-64 md:h-56">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`absolute inset-0 transition-all duration-700 ${idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
            >
              <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-elegant text-center h-full flex flex-col justify-center">
                <Quote className="h-8 w-8 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-lg md:text-xl leading-relaxed">"{t.quote}"</p>
                <div className="mt-6">
                  <p className="font-display font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button key={idx} aria-label={`Slide ${idx+1}`} onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-brand" : "w-2 bg-border"}`} />
          ))}
        </div>
      </div>

      {/* Logo marquee */}
      <div className="reveal mt-16 relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...logos, ...logos].map((l, idx) => (
            <span key={idx} className="font-display font-bold text-2xl text-muted-foreground/40 hover:text-foreground transition-colors">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
