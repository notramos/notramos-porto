"use client";

import * as React from "react";
import { personalInfo } from "@/app/config/personal";

type PosterStyle = React.CSSProperties & {
  "--poster-rx": string;
  "--poster-ry": string;
  "--poster-x": string;
  "--poster-y": string;
};

export function HeroPoster() {
  const posterRef = React.useRef<HTMLDivElement>(null);
  const animationFrame = React.useRef(0);

  const updatePoster = (x: number, y: number) => {
    const poster = posterRef.current;
    if (!poster) return;

    poster.style.setProperty("--poster-rx", String(y * -1.8) + "deg");
    poster.style.setProperty("--poster-ry", String(x * 1.8) + "deg");
    poster.style.setProperty("--poster-x", String(x * 6) + "px");
    poster.style.setProperty("--poster-y", String(y * 6) + "px");
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    if (animationFrame.current) window.cancelAnimationFrame(animationFrame.current);
    animationFrame.current = window.requestAnimationFrame(() => updatePoster(x, y));
  };

  const handlePointerLeave = () => {
    if (animationFrame.current) window.cancelAnimationFrame(animationFrame.current);
    animationFrame.current = window.requestAnimationFrame(() => updatePoster(0, 0));
  };

  React.useEffect(
    () => () => {
      if (animationFrame.current) window.cancelAnimationFrame(animationFrame.current);
    },
    []
  );

  const initialStyle: PosterStyle = {
    "--poster-rx": "0deg",
    "--poster-ry": "0deg",
    "--poster-x": "0px",
    "--poster-y": "0px",
  };

  return (
    <div
      className="hero-poster-shell relative mx-auto w-full max-w-md"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div ref={posterRef} className="hero-poster paper-grid" style={initialStyle}>
        <div aria-hidden="true" className="poster-shape poster-shape-primary" />
        <div aria-hidden="true" className="poster-shape poster-shape-accent" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <span className="border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
              GS / 01
            </span>
            <span className="text-right text-xs font-medium uppercase leading-5 tracking-[0.12em]">
              Jakarta<br />Indonesia
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              {personalInfo.title}
            </p>
            <p className="mt-2 max-w-xs text-4xl font-semibold leading-none tracking-[-0.05em] text-balance sm:text-5xl">
              {personalInfo.name}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium">
              <span className="h-px w-8 bg-[var(--accent)]" />
              Web · Backend · Integrasi
            </div>
          </div>
        </div>
        <span aria-hidden="true" className="absolute bottom-5 right-5 text-xs font-semibold tracking-[0.2em]">
          PORTOFOLIO
        </span>
      </div>
      <div aria-hidden="true" className="poster-offset-frame" />
    </div>
  );
}
