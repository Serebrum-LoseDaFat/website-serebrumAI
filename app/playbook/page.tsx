import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Playbook",
  description:
    "Internal: strategic playbooks for SerebrumAI — blueprint, GTM, fundraising, content marketing.",
  robots: { index: false, follow: false },
};

type Accent = "emerald" | "cyan" | "violet" | "amber";

const accents: Record<
  Accent,
  { text: string; softBorder: string; softBg: string; hoverBorder: string }
> = {
  emerald: {
    text: "text-emerald-300",
    softBorder: "border-emerald-400/25",
    softBg: "bg-emerald-400/[0.04]",
    hoverBorder: "hover:border-emerald-400/50",
  },
  cyan: {
    text: "text-cyan-300",
    softBorder: "border-cyan-400/25",
    softBg: "bg-cyan-400/[0.04]",
    hoverBorder: "hover:border-cyan-400/50",
  },
  violet: {
    text: "text-violet-300",
    softBorder: "border-violet-400/25",
    softBg: "bg-violet-400/[0.04]",
    hoverBorder: "hover:border-violet-400/50",
  },
  amber: {
    text: "text-amber-300",
    softBorder: "border-amber-400/25",
    softBg: "bg-amber-400/[0.04]",
    hoverBorder: "hover:border-amber-400/50",
  },
};

const sections: {
  href: string;
  num: string;
  label: string;
  title: string;
  body: string;
  contents: string[];
  accent: Accent;
}[] = [
  {
    href: "/playbook/blueprint",
    num: "01",
    label: "Blueprint",
    title: "Strategic blueprint",
    body: "Positioning decision, flagship venture scoring, the $100M raise architecture, and the AlphaSigma fund-management profile.",
    contents: [
      "Positioning decision",
      "Flagship scoring matrix",
      "$100M raise map (5 tiers)",
      "AlphaSigma profile",
    ],
    accent: "emerald",
  },
  {
    href: "/playbook/gtm",
    num: "02",
    label: "GTM",
    title: "Go-to-market actions",
    body: "Top-3 GTM motions per venture. Named buyers, named conferences, named brokers. What actually moves the needle vs. the generic playbook.",
    contents: [
      "Action × venture matrix",
      "Per-venture detail (tabbed)",
      "Charter customers · TPAs · cap-intro",
      "Tier 2 channels (Vygor)",
    ],
    accent: "cyan",
  },
  {
    href: "/playbook/fundraising",
    num: "03",
    label: "Fundraising",
    title: "Capital strategy",
    body: "Architecture, per-venture raise plans, sequencing, narratives, and process. Operating playbook for ~$120M deployed across studio + four ventures.",
    contents: [
      "Capital architecture matrix",
      "Per-venture raise plans (tabbed)",
      "8-quarter sequencing timeline",
      "Pitch narrative framework",
      "Process & operating notes",
    ],
    accent: "violet",
  },
  {
    href: "/playbook/content-marketing",
    num: "04",
    label: "Content marketing",
    title: "14-day distribution flow",
    body: "One essay, five channels, fourteen days. Substack publish, LinkedIn, Twitter, warm-intro sweep, follow-ups, review.",
    contents: [
      "Day 0 → Day 14 timeline",
      "Channel legend (5 channels)",
      "Tier-2 channels (HN, podcasts, sponsorships)",
    ],
    accent: "amber",
  },
];

export default function PlaybookPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
            / Playbook
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            The{" "}
            <span className="font-serif italic text-gradient">SerebrumAI</span>{" "}
            playbook.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Four operating-grade playbooks for the studio. Strategic
            blueprint, go-to-market, fundraising, content marketing — each
            with named buyers, named investors, named sequence, named cadence.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((s) => {
              const a = accents[s.accent];
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`group rounded-2xl border ${a.softBorder} ${a.softBg} ${a.hoverBorder} p-7 transition md:p-9`}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-[0.25em] ${a.text}`}
                    >
                      / {s.num} · {s.label}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight text-neutral-50 md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-neutral-300">
                    {s.body}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {s.contents.map((c) => (
                      <li
                        key={c}
                        className="flex items-center gap-3 text-sm text-neutral-400"
                      >
                        <span
                          className={`h-1 w-1 shrink-0 rounded-full ${a.text.replace(
                            "text-",
                            "bg-"
                          )}`}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-7 inline-flex items-center gap-2 text-sm font-medium ${a.text} transition`}
                  >
                    Open
                    <span className="transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="mt-12 text-center text-sm text-neutral-500">
            Internal documents. Not linked from public navigation.
          </p>
        </div>
      </section>
    </>
  );
}
