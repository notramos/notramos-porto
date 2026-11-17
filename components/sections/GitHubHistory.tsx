"use client";

import * as React from "react";

const GITHUB_USERNAME = "notramos";
const GITHUB_PROFILE = "https://github.com/notramos";
const currentYear = new Date().getFullYear();
const availableYears = Array.from({ length: 4 }, (_, index) => currentYear - index);

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionResponse {
  total: Record<string, number>;
  contributions: Contribution[];
}

interface CalendarDay extends Contribution {
  outsideRange?: boolean;
}

interface CalendarWeek {
  key: string;
  days: CalendarDay[];
}

function toUtcDate(value: string) {
  return new Date(value + "T00:00:00Z");
}

function toDateKey(value: Date) {
  return value.toISOString().slice(0, 10);
}

function buildWeeks(contributions: Contribution[]): CalendarWeek[] {
  if (contributions.length === 0) return [];

  const contributionMap = new Map(contributions.map((day) => [day.date, day]));
  const firstDate = toUtcDate(contributions[0].date);
  const lastDate = toUtcDate(contributions[contributions.length - 1].date);
  const calendarStart = new Date(firstDate);
  calendarStart.setUTCDate(calendarStart.getUTCDate() - calendarStart.getUTCDay());
  const calendarEnd = new Date(lastDate);
  calendarEnd.setUTCDate(calendarEnd.getUTCDate() + (6 - calendarEnd.getUTCDay()));

  const weeks: CalendarWeek[] = [];
  const cursor = new Date(calendarStart);

  while (cursor <= calendarEnd) {
    const weekStart = new Date(cursor);
    const days: CalendarDay[] = Array.from({ length: 7 }, (_, dayIndex) => {
      const date = new Date(weekStart);
      date.setUTCDate(date.getUTCDate() + dayIndex);
      const dateKey = toDateKey(date);
      return contributionMap.get(dateKey) ?? {
        date: dateKey,
        count: 0,
        level: 0 as const,
        outsideRange: date < firstDate || date > lastDate,
      };
    });

    weeks.push({ key: toDateKey(weekStart), days });
    cursor.setUTCDate(cursor.getUTCDate() + 7);
  }

  return weeks;
}

function monthLabels(weeks: CalendarWeek[]) {
  let previousMonth = -1;
  let previousLabelColumn = -4;

  return weeks.map((week, index) => {
    const labelDate = toUtcDate(week.days[3].date);
    const month = labelDate.getUTCMonth();
    const showLabel = month !== previousMonth && index - previousLabelColumn >= 3;

    previousMonth = month;
    if (showLabel) previousLabelColumn = index;

    return showLabel
      ? new Intl.DateTimeFormat("id-ID", { month: "short", timeZone: "UTC" }).format(labelDate)
      : "";
  });
}

function CalendarSkeleton() {
  return (
    <div className="contribution-card contribution-skeleton" role="status" aria-label="Memuat kalender kontribusi" aria-busy="true">
      <span className="contribution-skeleton-title" />
      <div className="contribution-skeleton-grid">
        {Array.from({ length: 196 }, (_, index) => <span key={index} />)}
      </div>
    </div>
  );
}

export function GitHubHistory() {
  const [selectedYear, setSelectedYear] = React.useState(currentYear);
  const [data, setData] = React.useState<ContributionResponse | null>(null);
  const [status, setStatus] = React.useState<"loading" | "ready" | "empty" | "error">("loading");

  React.useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      setStatus("loading");

      try {
        const response = await fetch(
          "https://github-contributions-api.jogruber.de/v4/" +
            GITHUB_USERNAME +
            "?y=" +
            selectedYear,
          { signal: controller.signal },
        );

        if (!response.ok) throw new Error("Contribution request failed");

        const result = (await response.json()) as ContributionResponse;
        if (!Array.isArray(result.contributions)) throw new Error("Invalid contribution response");

        setData(result);
        setStatus(result.contributions.length > 0 ? "ready" : "empty");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setData(null);
        setStatus("error");
      }
    }

    loadContributions();
    return () => controller.abort();
  }, [selectedYear]);

  const weeks = React.useMemo(
    () => buildWeeks(data?.contributions ?? []),
    [data],
  );
  const labels = React.useMemo(() => monthLabels(weeks), [weeks]);
  const total = data
    ? data.total[String(selectedYear)] ??
      data.contributions.reduce((sum, contribution) => sum + contribution.count, 0)
    : 0;

  return (
    <section id="github" className="github-history-section scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              02 / Kontribusi GitHub
            </p>
            <h2 className="max-w-lg text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              GitHub history
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
            Jejak kontribusi publik dalam format kalender. Arahkan kursor ke kotak untuk melihat jumlah kontribusi pada tanggal tersebut.
          </p>
        </div>

        <div className="contribution-layout">
          <div className="min-w-0">
            {status === "loading" && <CalendarSkeleton />}

            {status === "ready" && (
              <div className="contribution-card">
                <div className="contribution-card-header">
                  <p className="text-lg font-semibold">
                    {total.toLocaleString("id-ID")} kontribusi pada {selectedYear}
                  </p>
                  <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="contribution-profile-link">
                    Lihat profil <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="contribution-scroll" tabIndex={0} aria-label={"Kalender kontribusi GitHub tahun " + selectedYear}>
                  <div
                    className="contribution-calendar"
                    style={{ "--calendar-weeks": weeks.length } as React.CSSProperties}
                  >
                    <div className="contribution-months" aria-hidden="true">
                      {labels.map((label, index) => <span key={weeks[index].key}>{label}</span>)}
                    </div>

                    <div className="contribution-calendar-body">
                      <div className="contribution-weekdays" aria-hidden="true">
                        <span />
                        <span>Sen</span>
                        <span />
                        <span>Rab</span>
                        <span />
                        <span>Jum</span>
                        <span />
                      </div>

                      <div className="contribution-weeks">
                        {weeks.map((week) => (
                          <div key={week.key} className="contribution-week">
                            {week.days.map((day) => {
                              const dateLabel = new Intl.DateTimeFormat("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                timeZone: "UTC",
                              }).format(toUtcDate(day.date));
                              const ariaLabel = day.count + " kontribusi pada " + dateLabel;

                              return (
                                <span
                                  key={day.date}
                                  className="contribution-day"
                                  data-level={day.level}
                                  data-outside={day.outsideRange || undefined}
                                  title={ariaLabel}
                                  aria-label={ariaLabel}
                                  role="img"
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contribution-card-footer">
                  <span>Lebih sedikit</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span key={level} className="contribution-day" data-level={level} aria-hidden="true" />
                  ))}
                  <span>Lebih banyak</span>
                </div>
              </div>
            )}

            {status === "empty" && (
              <div className="github-history-state">
                <h3 className="text-lg font-semibold">Belum ada kontribusi pada {selectedYear}</h3>
                <p className="mt-2 text-[var(--muted-foreground)]">
                  Pilih tahun lain atau buka profil GitHub untuk melihat aktivitas terbaru.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="github-history-state" role="status">
                <h3 className="text-lg font-semibold">Kalender kontribusi belum dapat dimuat</h3>
                <p className="mt-2 text-[var(--muted-foreground)]">
                  Sumber data publik sedang tidak tersedia. Profil GitHub tetap dapat dibuka secara langsung.
                </p>
                <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center font-semibold underline decoration-[var(--accent)] underline-offset-4">
                  Buka profil GitHub
                </a>
              </div>
            )}
          </div>

          <nav className="contribution-years" aria-label="Pilih tahun kontribusi">
            {availableYears.map((year) => (
              <button
                key={year}
                type="button"
                aria-pressed={selectedYear === year}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
