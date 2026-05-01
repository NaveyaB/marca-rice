import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Process } from "@/components/Process";
import { PortfolioMasonry } from "@/components/PortfolioMasonry";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marca Rise — The Mark of Excellence" },
      { name: "description", content: "Creative digital marketing & branding agency helping brands grow with strategy, design and modern technology." },
      { property: "og:title", content: "Marca Rise — The Mark of Excellence" },
      { property: "og:description", content: "Brand identity, social media, web development & digital marketing for ambitious brands." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <ServicesGrid />
      <Process />
      <PortfolioMasonry limit={6} />
      <Testimonials />
      <CTABanner />
    </Layout>
  );
}
