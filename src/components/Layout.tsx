import { Header } from "./Header";
import { Footer } from "./Footer";
import { useReveal } from "@/hooks/use-reveal";

export function Layout({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
