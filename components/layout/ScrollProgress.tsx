"use client";

import * as React from "react";

export function ScrollProgress() {
  const progressRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0;
      const element = progressRef.current;

      if (element) {
        element.style.transform = "scaleX(" + progress + ")";
        element.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
      }
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      role="progressbar"
      aria-label="Progres membaca halaman"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      className="reading-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[var(--accent)]"
    />
  );
}
