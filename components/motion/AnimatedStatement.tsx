"use client";

import * as React from "react";

const statement =
  "Kode yang baik bukan hanya berjalan. Ia membantu orang bekerja lebih jelas dan lebih cepat.";

export function AnimatedStatement() {
  const containerRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const words = Array.from(
      containerRef.current?.querySelectorAll<HTMLElement>("[data-statement-word]") ?? []
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      words.forEach((word) => word.classList.add("is-active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-active");
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -22% 0px", threshold: 0.35 }
    );

    words.forEach((word) => observer.observe(word));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="statement-section" aria-labelledby="statement-title">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="statement-title" className="sr-only">
          Pendekatan pengembangan
        </h2>
        <p ref={containerRef} className="statement-copy" aria-label={statement}>
          {statement.split(" ").map((word, index) => (
            <span
              key={word + index}
              data-statement-word
              aria-hidden="true"
              style={{ "--word-order": index } as React.CSSProperties}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
