import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="reveal-scale relative mx-auto max-w-6xl rounded-3xl bg-gradient-brand p-12 md:p-20 text-center overflow-hidden shadow-elegant">
        {/* Animated background lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 800 400">
          <path d="M0,200 Q200,100 400,200 T800,200" stroke="white" strokeWidth="1.5" fill="none">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,200 Q200,100 400,200 T800,200;M0,200 Q200,300 400,200 T800,200;M0,200 Q200,100 400,200 T800,200" />
          </path>
          <path d="M0,250 Q200,150 400,250 T800,250" stroke="white" strokeWidth="1" fill="none" opacity="0.6">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0,250 Q200,150 400,250 T800,250;M0,250 Q200,350 400,250 T800,250;M0,250 Q200,150 400,250 T800,250" />
          </path>
        </svg>

        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
            Ready to level up your brand?
          </h2>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-10">
            Let's transform your idea into a powerful, memorable digital brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background text-foreground font-medium hover:scale-105 transition-transform shadow-lg">
              Start project <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/918925535344" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground/10 backdrop-blur border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-foreground/20 transition-colors">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
