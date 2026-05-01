import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Process } from "@/components/Process";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Marca Rise" },
      { name: "description", content: "Branding, social media, web development, content & digital marketing services from Marca Rise." },
      { property: "og:title", content: "Services — Marca Rise" },
      { property: "og:description", content: "Everything you need to grow a brand — strategy, design and technology under one roof." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft -z-10" />
        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-brand-glow/30 blur-3xl animate-float -z-10" />
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="reveal font-display text-5xl md:text-7xl font-bold">Our <span className="text-gradient-brand">services</span></h1>
          <p className="reveal mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            A full-stack creative team — branding, social, content, web and marketing.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <Process />
      <CTABanner />
    </Layout>
  );
}
