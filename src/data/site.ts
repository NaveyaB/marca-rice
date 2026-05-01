import fashion from "@/assets/project-fashion.jpg";
import skincare from "@/assets/project-skincare.jpg";
import website from "@/assets/project-website.jpg";
import social from "@/assets/project-social.jpg";
import ecom from "@/assets/project-ecom.jpg";
import branding from "@/assets/project-branding.jpg";

export const services = [
  { icon: "Palette", title: "Brand Identity Design", desc: "Logos, color systems & visual languages that make brands unforgettable." },
  { icon: "Instagram", title: "Social Media Management", desc: "Strategic content & community building that grows real audiences." },
  { icon: "TrendingUp", title: "Instagram Growth", desc: "Reel strategy & aesthetic feeds that turn followers into customers." },
  { icon: "Video", title: "Content Creation", desc: "Reels, posts & creatives crafted to stop the scroll & spark engagement." },
  { icon: "Globe", title: "Web Design & Development", desc: "Fast, responsive websites that convert visitors into clients." },
  { icon: "Code", title: "Custom Software", desc: "Tailored digital products built around your unique business needs." },
  { icon: "Megaphone", title: "Digital Marketing", desc: "Performance campaigns that scale your reach and ROI." },
  { icon: "Sparkles", title: "Visual Strategy", desc: "Cohesive branding strategy that builds long-term recognition." },
];

export const projects = [
  { title: "Urban Threads", tags: ["Branding", "Social"], img: fashion, h: "tall",
    problem: "No brand identity, inconsistent socials.",
    solution: "Full identity, palette, type system & IG templates.",
    results: ["Brand recognition up", "+60% IG engagement", "Premium look & feel"] },
  { title: "Glow Skincare", tags: ["Social", "Reels"], img: skincare, h: "short",
    problem: "Low reach & poor engagement on Instagram.",
    solution: "Reel strategy, aesthetic plan & storytelling posts.",
    results: ["3× reach growth", "100K+ viral reel", "Loyal community"] },
  { title: "Service Startup Web", tags: ["Web", "Development"], img: website, h: "short",
    problem: "No online presence or website.",
    solution: "Modern responsive site with service pages & lead forms.",
    results: ["Pro online presence", "Inbound leads", "Higher trust"] },
  { title: "Reels Studio", tags: ["Animation", "Video"], img: social, h: "tall",
    problem: "Generic content with low conversion.",
    solution: "Cinematic reels series with branded motion.",
    results: ["2× watch time", "Steady follower growth", "More DMs"] },
  { title: "Coastal Boutique", tags: ["Web", "E-commerce"], img: ecom, h: "short",
    problem: "Outdated store with poor mobile UX.",
    solution: "Refreshed store, fast checkout, brand storytelling.",
    results: ["+45% conversions", "Lower bounce", "Repeat customers"] },
  { title: "Studio Identity Kit", tags: ["Branding"], img: branding, h: "tall",
    problem: "Inconsistent visuals across touchpoints.",
    solution: "Complete identity system & guidelines.",
    results: ["Unified brand", "Faster design ops", "Trust earned"] },
];

export const testimonials = [
  { name: "Arun Kumar", role: "Startup Founder",
    quote: "Marca Rise transformed our brand identity completely. The designs were modern and strategic. Our Instagram growth improved significantly." },
  { name: "Priya S", role: "Business Owner",
    quote: "Professional, creative, and easy to work with. Highly recommended for businesses looking to grow online." },
  { name: "Karthik R", role: "E-commerce Owner",
    quote: "From strategy to execution, every detail was thoughtful. Our store finally feels like a real brand." },
];

export const process = [
  { n: "01", title: "Planning", desc: "We dig into your goals, audience and market to shape the right strategy." },
  { n: "02", title: "Design", desc: "We craft visual systems and prototypes that bring the brand to life." },
  { n: "03", title: "Development", desc: "We build, refine and launch with precision and craft." },
  { n: "04", title: "Results", desc: "We measure, iterate and grow — turning launches into momentum." },
];
