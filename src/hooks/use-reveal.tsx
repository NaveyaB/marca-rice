import { useEffect } from "react";

/** Adds `.in-view` to any element with `.reveal*` class when scrolled into viewport. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
