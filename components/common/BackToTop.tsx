"use client";

import * as React from "react";

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 640);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke bagian atas halaman"
      className={"fixed bottom-5 right-5 z-30 min-h-11 border border-[var(--border)] bg-[var(--primary)] px-4 text-sm font-semibold text-[var(--primary-foreground)] transition-[opacity,transform] active:translate-y-px " + (visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0")}
    >
      Ke atas
    </button>
  );
}
