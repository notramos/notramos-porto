const skills = [
  { group: "Web", items: ["React", "Next.js", "TypeScript", "Laravel", "PHP"] },
  { group: "Backend & integrasi", items: ["Node.js", "Python", "REST API", "Odoo"] },
  { group: "Data & tools", items: ["PostgreSQL", "MySQL", "Redis", "Docker", "AWS"] },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">05 / Tentang</p>
          <h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
            Dari kebutuhan pengguna sampai solusi teknis.
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
            Saya menikmati proses membangun aplikasi dari awal: memahami alur kerja, menyusun API dan data, lalu memastikan antarmuka mudah digunakan. Saya juga membawa pengalaman dukungan IT untuk melihat masalah dari sisi pengguna dan operasional.
          </p>
          <div className="mt-10 space-y-6">
            {skills.map((group) => (
              <div key={group.group} className="grid gap-3 border-t border-[var(--border)]/30 pt-4 sm:grid-cols-[12rem_1fr]">
                <h3 className="text-sm font-semibold">{group.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="border border-[var(--border)] px-3 py-1.5 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
