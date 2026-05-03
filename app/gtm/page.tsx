import type { Metadata } from "next";
import VentureTabs from "./VentureTabs";

export const metadata: Metadata = {
  title: "GTM",
  description:
    "Internal: top 3 go-to-market actions per venture across the SerebrumAI portfolio.",
  robots: { index: false, follow: false },
};

type Accent = "cyan" | "amber" | "violet" | "emerald";

const accents: Record<
  Accent,
  { text: string; rankBg: string; rankText: string }
> = {
  cyan: {
    text: "text-cyan-300",
    rankBg: "bg-cyan-400",
    rankText: "text-cyan-950",
  },
  amber: {
    text: "text-amber-300",
    rankBg: "bg-amber-400",
    rankText: "text-amber-950",
  },
  violet: {
    text: "text-violet-300",
    rankBg: "bg-violet-400",
    rankText: "text-violet-950",
  },
  emerald: {
    text: "text-emerald-300",
    rankBg: "bg-emerald-400",
    rankText: "text-emerald-950",
  },
};

type VentureKey = "ts" | "fs" | "as" | "vg";

const ventures: {
  key: VentureKey;
  name: string;
  framing: string;
  accent: Accent;
}[] = [
  { key: "ts", name: "TokenSource", framing: "B2B SaaS", accent: "cyan" },
  { key: "fs", name: "FedStat", framing: "Enterprise IT", accent: "amber" },
  {
    key: "as",
    name: "AlphaSigma",
    framing: "Fund management",
    accent: "violet",
  },
  { key: "vg", name: "Vygor AI", framing: "Healthcare", accent: "emerald" },
];

type Cell = 1 | 2 | 3 | null;

const actions: {
  label: string;
  sub?: string;
  cells: Record<VentureKey, Cell>;
}[] = [
  {
    label: "Design partner program",
    sub: "anchor SaaS customers",
    cells: { ts: 1, fs: null, as: null, vg: null },
  },
  {
    label: "Health-plan pilot program",
    sub: "outcome-based, 6–12 months",
    cells: { ts: null, fs: null, as: null, vg: 1 },
  },
  {
    label: "Founder-led 1:1 outreach",
    sub: "top named accounts / LPs",
    cells: { ts: 2, fs: 1, as: 1, vg: null },
  },
  {
    label: "PLG / freemium self-serve",
    cells: { ts: 3, fs: null, as: null, vg: null },
  },
  {
    label: "Direct enterprise AE sales",
    sub: "Fortune 1000",
    cells: { ts: null, fs: 2, as: null, vg: null },
  },
  {
    label: "Federal contracting",
    sub: "GSA · sole-source · FedRAMP",
    cells: { ts: null, fs: 3, as: null, vg: null },
  },
  {
    label: "Capital introduction",
    sub: "prime brokers (GS · MS · JPM)",
    cells: { ts: null, fs: null, as: 2, vg: null },
  },
  {
    label: "Allocator events + LP outreach",
    sub: "Milken · SuperReturn",
    cells: { ts: null, fs: null, as: 3, vg: null },
  },
  {
    label: "Clinical evidence publishing",
    sub: "ADA · JAMA · peer-reviewed",
    cells: { ts: null, fs: null, as: null, vg: 2 },
  },
  {
    label: "Benefits broker channel",
    sub: "Mercer · Aon · WTW",
    cells: { ts: null, fs: null, as: null, vg: 3 },
  },
];

export default function GTMPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
            / GTM
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            Top 3 GTM actions{" "}
            <span className="font-serif italic text-gradient">per venture</span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Different ventures, different motions. Each top-3 reflects what
            actually moves the needle for that buyer, not the generic
            playbook.
          </p>
        </div>
      </section>

      {/* MATRIX */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 01 · The matrix
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Action × venture priority.
            </h2>
            <p className="mt-3 text-neutral-400">
              Numbered cells show priority for that venture (
              <span className="font-mono text-neutral-200">1</span> = first
              move,{" "}
              <span className="font-mono text-neutral-200">3</span> = third).
              Each venture has exactly three picks. Per-venture detail in the
              tabs below.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0a0a0d]">
            <table className="w-full min-w-[820px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    GTM action
                  </th>
                  {ventures.map((v) => {
                    const a = accents[v.accent];
                    return (
                      <th key={v.key} className="px-3 py-4 text-center">
                        <div className="text-sm font-medium text-neutral-50">
                          {v.name}
                        </div>
                        <div
                          className={`mt-1 font-mono text-[9px] uppercase tracking-[0.18em] ${a.text}`}
                        >
                          {v.framing}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {actions.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/[0.04] last:border-0"
                  >
                    <td className="px-5 py-4 align-top">
                      <div className="text-neutral-200">{row.label}</div>
                      {row.sub && (
                        <div className="mt-0.5 text-xs text-neutral-500">
                          {row.sub}
                        </div>
                      )}
                    </td>
                    {ventures.map((v) => {
                      const cell = row.cells[v.key];
                      const a = accents[v.accent];
                      return (
                        <td
                          key={v.key + row.label}
                          className="px-3 py-4 text-center"
                        >
                          {cell ? (
                            <span
                              className={`inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-bold ${a.rankBg} ${a.rankText}`}
                              title={`Priority ${cell} for ${v.name}`}
                            >
                              {cell}
                            </span>
                          ) : (
                            <span className="text-neutral-700">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
            <span className="font-mono uppercase tracking-[0.2em]">Legend</span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-50 font-mono text-[10px] font-bold text-neutral-900">
                1
              </span>
              First move
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-50 font-mono text-[10px] font-bold text-neutral-900">
                2
              </span>
              Second
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-50 font-mono text-[10px] font-bold text-neutral-900">
                3
              </span>
              Third
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-neutral-700">—</span>
              Not in top 3
            </span>
          </div>
        </div>
      </section>

      {/* TABBED VENTURE DETAIL */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 02 · Per-venture detail
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Why each priority ranks where it does.
            </h2>
            <p className="mt-3 text-neutral-400">
              Switch ventures with the tabs. Each priority shows target,
              mechanics, and ranking rationale. Priority 1 for TokenSource
              includes a deep dive on partner profile, archetypes,
              anti-profile, and sourcing tactics.
            </p>
          </div>

          <VentureTabs />
        </div>
      </section>

      {/* ABSENT */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-8 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 03 · Notably absent
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              What didn&rsquo;t make any top 3.
            </h2>
            <p className="mt-3 text-neutral-400">
              These actions are useful but secondary. They become top-3
              candidates after PMF, not before.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Inbound content / SEO",
                body: "Compounding asset for all four. Top 4–5, not top 3 in any near-term plan.",
              },
              {
                title: "Conference keynotes",
                body: "Big at Vygor (ADA) and FedStat (Gartner ITxpo). Pilots and analyst engagement do more first.",
              },
              {
                title: "Outbound SDR/BDR at scale",
                body: "Premature for all four. Founder-led + design partners first. SDR scale comes after PMF.",
              },
              {
                title: "Industry analyst engagement",
                body: "Adjacent to FedStat top-3. Becomes #2 once Apptio-style category placement matters.",
              },
              {
                title: "Strategic platform partnerships",
                body: "Real but slow to negotiate. Worth pursuing once you have a track record to trade on.",
              },
              {
                title: "Channel partner / SI / reseller",
                body: "Force multiplier later. Direct sales must prove the motion first.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5"
              >
                <h4 className="text-sm font-medium text-neutral-50">
                  {c.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-center text-sm text-neutral-500">
            Internal document. Not linked from public navigation.
          </p>
        </div>
      </section>
    </>
  );
}
