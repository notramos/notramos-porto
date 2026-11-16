"use client";

import * as React from "react";

const GITHUB_USERNAME = "notramos";
const GITHUB_PROFILE = "https://github.com/notramos";

interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: {
    action?: string;
    ref?: string | null;
    ref_type?: string;
    commits?: Array<{ message: string }>;
    pull_request?: { number: number };
    issue?: { number: number };
  };
}

interface ActivityItem {
  id: string;
  title: string;
  detail: string;
  repository: string;
  date: string;
  url: string;
}

function isValidRepository(value: string) {
  return /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(value);
}

function describeEvent(event: GitHubEvent): ActivityItem | null {
  if (!isValidRepository(event.repo?.name) || !event.created_at) return null;

  const repository = event.repo.name;
  const url = "https://github.com/" + repository;
  const date = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(event.created_at));

  if (event.type === "PushEvent") {
    const commits = event.payload.commits ?? [];
    const detail = commits[0]?.message?.split("\n")[0] || "Memperbarui kode pada repository";
    return {
      id: event.id,
      title: "Mengirim " + commits.length + " commit",
      detail,
      repository,
      date,
      url,
    };
  }

  if (event.type === "PullRequestEvent" && event.payload.pull_request) {
    return {
      id: event.id,
      title: "Pull request #" + event.payload.pull_request.number,
      detail: "Status: " + (event.payload.action || "diperbarui"),
      repository,
      date,
      url,
    };
  }

  if (event.type === "CreateEvent") {
    return {
      id: event.id,
      title: "Membuat " + (event.payload.ref_type || "referensi"),
      detail: event.payload.ref ? String(event.payload.ref) : "Repository baru",
      repository,
      date,
      url,
    };
  }

  if (event.type === "IssuesEvent" && event.payload.issue) {
    return {
      id: event.id,
      title: "Issue #" + event.payload.issue.number,
      detail: "Status: " + (event.payload.action || "diperbarui"),
      repository,
      date,
      url,
    };
  }

  return null;
}

function HistorySkeleton() {
  return (
    <div className="github-history-list" role="status" aria-label="Memuat aktivitas GitHub" aria-busy="true">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="github-history-row github-history-skeleton">
          <span />
          <div><span /><span /></div>
          <span />
        </div>
      ))}
    </div>
  );
}

export function GitHubHistory() {
  const [activities, setActivities] = React.useState<ActivityItem[]>([]);
  const [status, setStatus] = React.useState<"loading" | "ready" | "empty" | "error">("loading");

  const loadActivity = React.useCallback(async (signal?: AbortSignal) => {
    setStatus("loading");

    try {
      const response = await fetch(
        "https://api.github.com/users/" + GITHUB_USERNAME + "/events/public?per_page=30",
        {
          signal,
          headers: { Accept: "application/vnd.github+json" },
        }
      );

      if (!response.ok) throw new Error("GitHub request failed");

      const data = (await response.json()) as GitHubEvent[];
      const nextActivities = data
        .map(describeEvent)
        .filter((item): item is ActivityItem => item !== null)
        .slice(0, 6);

      setActivities(nextActivities);
      setStatus(nextActivities.length > 0 ? "ready" : "empty");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setStatus("error");
    }
  }, []);

  React.useEffect(() => {
    const controller = new AbortController();
    loadActivity(controller.signal);
    return () => controller.abort();
  }, [loadActivity]);

  return (
    <section id="github" className="github-history-section scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              02 / Aktivitas publik
            </p>
            <h2 className="max-w-lg text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              GitHub history
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
            Aktivitas terbaru diambil langsung dari event publik GitHub. Riwayat ini dapat berubah mengikuti pekerjaan yang dipublikasikan.
          </p>
        </div>

        {status === "loading" && <HistorySkeleton />}

        {status === "ready" && (
          <ol className="github-history-list">
            {activities.map((activity, index) => (
              <li key={activity.id} className="github-history-row">
                <span className="github-history-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{activity.title}</h3>
                    <time className="text-xs text-[var(--muted-foreground)]">{activity.date}</time>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{activity.detail}</p>
                  <a
                    href={activity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-[var(--accent)] underline-offset-4"
                  >
                    {activity.repository}
                    <span aria-hidden="true" className="ml-2">↗</span>
                  </a>
                </div>
                <span className="github-history-mark" aria-hidden="true" />
              </li>
            ))}
          </ol>
        )}

        {status === "empty" && (
          <div className="github-history-state">
            <h3 className="text-lg font-semibold">Belum ada aktivitas publik terbaru</h3>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Event publik GitHub hanya tersedia untuk periode terbaru.
            </p>
            <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center font-semibold underline decoration-[var(--accent)] underline-offset-4">
              Buka profil GitHub
            </a>
          </div>
        )}

        {status === "error" && (
          <div className="github-history-state" role="status">
            <h3 className="text-lg font-semibold">Aktivitas GitHub belum dapat dimuat</h3>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Batas permintaan GitHub mungkin sedang tercapai. Coba kembali atau buka profil secara langsung.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={() => loadActivity()} className="github-retry-button">
                Coba kembali
              </button>
              <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center px-3 font-semibold underline decoration-[var(--accent)] underline-offset-4">
                Buka profil
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
