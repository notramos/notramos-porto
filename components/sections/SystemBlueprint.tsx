"use client";

import * as React from "react";

const layers = [
  {
    id: "interface",
    index: "01",
    title: "Interface",
    short: "UI",
    description: "Antarmuka menyajikan informasi dan tindakan dengan alur yang mudah dipahami pengguna.",
  },
  {
    id: "api",
    index: "02",
    title: "API",
    short: "API",
    description: "API mengatur aturan bisnis, autentikasi, validasi, dan komunikasi antar layanan.",
  },
  {
    id: "data",
    index: "03",
    title: "Data",
    short: "DB",
    description: "Lapisan data menjaga struktur, relasi, dan konsistensi transaksi aplikasi.",
  },
  {
    id: "infrastructure",
    index: "04",
    title: "Infrastructure",
    short: "OPS",
    description: "Infrastructure menangani deployment, cache, storage, dan kebutuhan operasional aplikasi.",
  },
];

const pixelCells = Array.from({ length: 40 }, (_, index) => index);

export function SystemBlueprint() {
  const [activeLayer, setActiveLayer] = React.useState(layers[1]);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const swapTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIndex = layers.findIndex((layer) => layer.id === activeLayer.id);

  React.useEffect(() => {
    return () => {
      if (swapTimer.current) clearTimeout(swapTimer.current);
      if (finishTimer.current) clearTimeout(finishTimer.current);
    };
  }, []);

  const selectLayer = React.useCallback(
    (nextLayer: (typeof layers)[number]) => {
      if (nextLayer.id === activeLayer.id || isTransitioning) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        setActiveLayer(nextLayer);
        return;
      }

      setIsTransitioning(true);
      swapTimer.current = setTimeout(() => setActiveLayer(nextLayer), 260);
      finishTimer.current = setTimeout(() => setIsTransitioning(false), 700);
    },
    [activeLayer.id, isTransitioning],
  );

  return (
    <section className="blueprint-section py-20 sm:py-24" aria-labelledby="blueprint-title">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              04 / System blueprint
            </p>
            <h2 id="blueprint-title" className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              Satu sistem, beberapa lapisan yang saling terhubung.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[var(--muted-foreground)]">
              Pilih setiap lapisan untuk melihat perannya dalam aplikasi full stack.
            </p>
          </div>

          <div className="blueprint-board">
            <div className="blueprint-track" aria-hidden="true">
              <span style={{ "--blueprint-progress": activeIndex / (layers.length - 1) } as React.CSSProperties} />
            </div>
            <div className="blueprint-nodes">
              {layers.map((layer) => {
                const isActive = activeLayer.id === layer.id;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    className="blueprint-node"
                    aria-pressed={isActive}
                    onClick={() => selectLayer(layer)}
                    onFocus={() => selectLayer(layer)}
                    onPointerEnter={() => selectLayer(layer)}
                  >
                    <span className="blueprint-node-index">{layer.index}</span>
                    <span className="blueprint-node-short" aria-hidden="true">{layer.short}</span>
                    <span className="blueprint-node-title">{layer.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="blueprint-detail-shell">
              <div
                className="blueprint-pixel-transition"
                data-active={isTransitioning}
                aria-hidden="true"
              >
                {pixelCells.map((cell) => (
                  <span
                    key={cell}
                    style={{ "--pixel-order": (cell * 7) % pixelCells.length } as React.CSSProperties}
                  />
                ))}
              </div>
              <div key={activeLayer.id} className="blueprint-detail" aria-live="polite">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  Lapisan aktif
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{activeLayer.title}</h3>
                <p className="mt-3 max-w-xl leading-7 text-[var(--muted-foreground)]">
                  {activeLayer.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
