const experiences = [
  {
    role: "IT Support",
    meta: "Kontrak · On-site",
    description:
      "Menangani kebutuhan perangkat, akses, jaringan, aplikasi, dan dukungan pengguna agar operasional harian tetap berjalan.",
    focus: ["Troubleshooting", "Networking", "Microsoft 365", "User support"],
  },
  {
    role: "Backend Developer",
    meta: "Internship",
    description:
      "Mengembangkan API, alur bisnis, integrasi layanan, dan pengelolaan data untuk kebutuhan aplikasi internal.",
    focus: ["TypeScript", "REST API", "PostgreSQL", "Integrasi sistem"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">02 / Pengalaman</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Cara saya bekerja</h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-[var(--muted-foreground)]">
              Pengalaman teknis yang membentuk pendekatan saya: memahami masalah operasional, lalu menerjemahkannya menjadi solusi yang dapat dipakai.
            </p>
          </div>

          <ol className="border-t border-[var(--border)]">
            {experiences.map((experience, index) => (
              <li key={experience.role} className="grid gap-5 border-b border-[var(--border)] py-7 sm:grid-cols-[3rem_0.65fr_1.35fr] sm:gap-7">
                <span className="text-sm font-semibold text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">{experience.role}</h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">{experience.meta}</p>
                </div>
                <div>
                  <p className="leading-7 text-[var(--muted-foreground)]">{experience.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={"Fokus " + experience.role}>
                    {experience.focus.map((item) => (
                      <li key={item} className="border border-[var(--border)]/30 px-2.5 py-1 text-xs">{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
