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

type Category = "Strategy" | "Marketing" | "Fundraising";

const categories: {
  key: Category;
  num: string;
  blurb: string;
  accent: Accent;
}[] = [
  {
    key: "Strategy",
    num: "01",
    blurb: "How the studio decides what to build and where to focus.",
    accent: "emerald",
  },
  {
    key: "Marketing",
    num: "02",
    blurb: "How each venture earns attention, leads, and a market position.",
    accent: "cyan",
  },
  {
    key: "Fundraising",
    num: "03",
    blurb: "How capital flows through the studio and into each venture.",
    accent: "violet",
  },
];

const sections: {
  href: string;
  num: string;
  label: string;
  title: string;
  body: string;
  contents: string[];
  accent: Accent;
  category: Category;
  external?: boolean;
  locked?: boolean;
}[] = [
  // STRATEGY
  {
    href: "/playbook/blueprint",
    num: "S1",
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
    category: "Strategy",
  },
  {
    href: "/playbook/priorities",
    num: "S2",
    label: "Priorities",
    title: "Prioritization matrix",
    body: "Interactive 3×3 matrix scoring ideas on peak ARR potential vs. time to $1M ARR. Conviction is the tiebreaker. Sliders for maturity + traction reposition each idea live.",
    contents: [
      "Peak ARR × Time-to-revenue grid",
      "Cell strategy labels + capital-ratio shading",
      "Maturity + traction sliders (per-item)",
      "Sequencing — short / medium / long-term phasing",
      "Wedge structure analysis",
    ],
    accent: "emerald",
    category: "Strategy",
    locked: true,
  },

  // MARKETING
  {
    href: "/playbook/gtm",
    num: "M1",
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
    category: "Marketing",
  },
  {
    href: "/playbook/content-marketing",
    num: "M2",
    label: "Content marketing",
    title: "14-day distribution flow",
    body: "One essay, five channels, fourteen days. Substack publish, LinkedIn, Twitter, warm-intro sweep, follow-ups, review.",
    contents: [
      "Day 0 → Day 14 timeline",
      "Channel legend (5 channels)",
      "Tier-2 channels (HN, podcasts, sponsorships)",
    ],
    accent: "cyan",
    category: "Marketing",
  },
  {
    href: "/playbook/b2b-leadgen.html",
    num: "M3",
    label: "B2B LeadGen",
    title: "B2B lead-gen SOP",
    body: "Repeatable enterprise SaaS prospecting system — Apollo's contact database, LinkedIn Sales Navigator's signal layer, and Claude's strategy work in one workflow.",
    contents: [
      "ICP → account list → tiering",
      "Buying-committee mapping",
      "Messaging, cadence, multi-thread",
      "InMail + TeamLink decision tree",
      "Metrics + weekly operating rhythm",
    ],
    accent: "cyan",
    category: "Marketing",
    external: true,
  },
  {
    href: "/playbook/lead-machine",
    num: "M4",
    label: "Lead machine",
    title: "The lead machine",
    body: "Two channels, one workflow. Apollo + LinkedIn Sales Navigator producing qualified leads via a 30-minute daily routine.",
    contents: [
      "Two engines, one workflow",
      "Apollo channel (steps + template + KPIs)",
      "LinkedIn channel (steps + templates + KPIs)",
      "Combined 7-day multi-touch",
      "30-minute daily routine",
    ],
    accent: "cyan",
    category: "Marketing",
  },

  // FUNDRAISING
  {
    href: "/playbook/fundraising",
    num: "F1",
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
    category: "Fundraising",
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
            Operating-grade playbooks for the studio, grouped by function —
            Strategy decides what to build, Marketing earns attention,
            Fundraising compounds capital. Each playbook is named buyers,
            named investors, named sequence, named cadence.
          </p>
        </div>
      </section>

      {/* CARDS — grouped by category */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 space-y-16 md:space-y-20">
          {categories.map((cat) => {
            const items = sections.filter((s) => s.category === cat.key);
            if (items.length === 0) return null;
            const a = accents[cat.accent];
            return (
              <div key={cat.key}>
                {/* Category header */}
                <div className="mb-6 flex items-baseline gap-4 border-b border-white/[0.06] pb-4">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.25em] ${a.text}`}
                  >
                    / {cat.num} · {cat.key}
                  </span>
                  <span className="hidden text-sm text-neutral-500 md:inline">
                    {cat.blurb}
                  </span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    {items.length} {items.length === 1 ? "playbook" : "playbooks"}
                  </span>
                </div>
                <p className="mb-5 text-sm text-neutral-500 md:hidden">
                  {cat.blurb}
                </p>

                {/* Cards in this category */}
                <div className="grid gap-5 md:grid-cols-2">
                  {items.map((s) => {
                    const sa = accents[s.accent];
                    const cardClassName = `group rounded-2xl border ${sa.softBorder} ${sa.softBg} ${sa.hoverBorder} p-7 transition md:p-9`;
                    const inner = (
                      <>
                        <div className="flex items-baseline gap-3">
                          <span
                            className={`font-mono text-[11px] uppercase tracking-[0.25em] ${sa.text}`}
                          >
                            / {s.num} · {s.label}
                          </span>
                          {s.external && (
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                              ↗ standalone
                            </span>
                          )}
                          {s.locked && (
                            <span
                              title="Password protected"
                              className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-300"
                            >
                              🔒 private
                            </span>
                          )}
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
                                className={`h-1 w-1 shrink-0 rounded-full ${sa.text.replace(
                                  "text-",
                                  "bg-"
                                )}`}
                              />
                              {c}
                            </li>
                          ))}
                        </ul>

                        <div
                          className={`mt-7 inline-flex items-center gap-2 text-sm font-medium ${sa.text} transition`}
                        >
                          Open
                          <span className="transition group-hover:translate-x-0.5">
                            →
                          </span>
                        </div>
                      </>
                    );
                    if (s.external) {
                      return (
                        <a key={s.href} href={s.href} className={cardClassName}>
                          {inner}
                        </a>
                      );
                    }
                    return (
                      <Link key={s.href} href={s.href} className={cardClassName}>
                        {inner}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <p className="text-center text-sm text-neutral-500">
            Internal documents. Not linked from public navigation.
          </p>
        </div>
      </section>
    </>
  );
}
