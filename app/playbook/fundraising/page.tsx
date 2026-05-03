import type { Metadata } from "next";
import RaiseTabs from "./RaiseTabs";

export const metadata: Metadata = {
  title: "Fundraising",
  description:
    "Internal: capital architecture, per-venture raise plans, sequencing, narratives, and process for the SerebrumAI portfolio.",
  robots: { index: false, follow: false },
};

type Accent = "cyan" | "amber" | "violet" | "emerald";

const accents: Record<
  Accent,
  { text: string; rankBg: string; rankText: string; softBorder: string; softBg: string }
> = {
  cyan: {
    text: "text-cyan-300",
    rankBg: "bg-cyan-400",
    rankText: "text-cyan-950",
    softBorder: "border-cyan-400/30",
    softBg: "bg-cyan-400/[0.06]",
  },
  amber: {
    text: "text-amber-300",
    rankBg: "bg-amber-400",
    rankText: "text-amber-950",
    softBorder: "border-amber-400/30",
    softBg: "bg-amber-400/[0.06]",
  },
  violet: {
    text: "text-violet-300",
    rankBg: "bg-violet-400",
    rankText: "text-violet-950",
    softBorder: "border-violet-400/30",
    softBg: "bg-violet-400/[0.06]",
  },
  emerald: {
    text: "text-emerald-300",
    rankBg: "bg-emerald-400",
    rankText: "text-emerald-950",
    softBorder: "border-emerald-400/30",
    softBg: "bg-emerald-400/[0.06]",
  },
};

type VentureKey = "ts" | "fs" | "as" | "vg";

const ventureCols: { key: VentureKey; name: string; accent: Accent }[] = [
  { key: "ts", name: "TokenSource", accent: "cyan" },
  { key: "fs", name: "FedStat", accent: "amber" },
  { key: "as", name: "AlphaSigma", accent: "violet" },
  { key: "vg", name: "Vygor AI", accent: "emerald" },
];

// ============================================================
// Section 1 · Capital architecture matrix
// ============================================================
type Cell = string | null;

const capitalSources: {
  source: string;
  sub: string;
  cells: Record<VentureKey, Cell>;
}[] = [
  {
    source: "Studio + founder capital",
    sub: "family offices, strategic LPs, founders",
    cells: { ts: "Pre-seed", fs: "Pre-seed", as: "Mgmt-co pre-seed", vg: "Pre-seed" },
  },
  {
    source: "Generalist tier-1 VC",
    sub: "Sequoia, Index, Accel, etc.",
    cells: { ts: "Seed → A", fs: "A", as: null, vg: null },
  },
  {
    source: "Sector-specialist VC",
    sub: "enterprise SaaS · healthtech · fintech",
    cells: { ts: null, fs: "Seed → A", as: "Mgmt-co seed", vg: "Seed → A" },
  },
  {
    source: "Strategic / corporate VC",
    sub: "ServiceNow, IBM, Optum, health systems",
    cells: { ts: null, fs: "A (strategic)", as: "Strategic LP", vg: "A (strategic)" },
  },
  {
    source: "LP commitments (fund capital)",
    sub: "investment banks, allocators, family offices",
    cells: { ts: null, fs: null, as: "Fund I → II → III", vg: null },
  },
  {
    source: "Non-dilutive",
    sub: "federal contracts, NIH grants, R&D credits",
    cells: { ts: null, fs: "Federal contracts", as: null, vg: "NIH grants" },
  },
];

// ============================================================
// Section 3 · Sequencing timeline
// ============================================================
const quarters = [
  "Q3 2026",
  "Q4 2026",
  "Q1 2027",
  "Q2 2027",
  "Q3 2027",
  "Q4 2027",
  "Q1 2028",
  "Q2 2028",
];

type TimelineEvent = {
  q: number; // quarter index
  span?: number; // optional span across quarters
  label: string;
};

const timelineRows: { name: string; accent: Accent; events: TimelineEvent[] }[] = [
  {
    name: "Studio",
    accent: "emerald",
    events: [
      { q: 0, span: 1, label: "Studio close $3–5M" },
    ],
  },
  {
    name: "TokenSource",
    accent: "cyan",
    events: [
      { q: 0, span: 2, label: "Charter customers" },
      { q: 1, span: 1, label: "Seed $5–8M" },
      { q: 4, span: 1, label: "Series A $20–30M" },
    ],
  },
  {
    name: "FedStat",
    accent: "amber",
    events: [
      { q: 0, span: 3, label: "Enterprise pilots" },
      { q: 2, span: 1, label: "Seed $5–8M" },
      { q: 4, span: 2, label: "GSA + FedRAMP" },
      { q: 6, span: 1, label: "Series A $20–30M" },
    ],
  },
  {
    name: "AlphaSigma",
    accent: "violet",
    events: [
      { q: 1, span: 1, label: "Mgmt-co seed $2–3M" },
      { q: 2, span: 1, label: "Fund I 1st close" },
      { q: 3, span: 1, label: "Fund I final $25–50M" },
      { q: 6, span: 1, label: "Fund II planning" },
      { q: 7, span: 1, label: "Fund II raise" },
    ],
  },
  {
    name: "Vygor AI",
    accent: "emerald",
    events: [
      { q: 1, span: 1, label: "Seed $4–6M" },
      { q: 2, span: 2, label: "Pilot programs running" },
      { q: 3, span: 1, label: "Outcomes paper" },
      { q: 5, span: 1, label: "Series A $15–20M" },
    ],
  },
];

// ============================================================
// Section 4 · Pitch narrative framework
// ============================================================
const audienceFrames = [
  {
    audience: "Generalist tier-1 VCs",
    accent: "cyan" as Accent,
    lead: "Lead with the venture (TokenSource for SaaS, FedStat for enterprise)",
    angle:
      "Studio narrative is the *wrapper*; the venture is the proof. They want to see fundability of the company first. Studio retention becomes upside in later conversations, not the headline.",
    avoid: "Don't open with the studio. Don't pitch four ventures at once.",
  },
  {
    audience: "Sector-specialist VCs",
    accent: "amber" as Accent,
    lead:
      "Lead with the relevant venture only — TokenSource to devtools VCs, Vygor to healthtech specialists.",
    angle:
      "Anchor on a recognized comparable (Apptio for FedStat, Livongo for Vygor, Linear for TokenSource). Studio narrative becomes proof of repeatability and team strength, not a counter-argument.",
    avoid: "Don't pitch the studio thesis to a vertical specialist — they want the venture's vertical fit.",
  },
  {
    audience: "LP allocators (AlphaSigma)",
    accent: "violet" as Accent,
    lead: "Strategy, track record, risk framework — not narrative.",
    angle:
      "Different conversation entirely. GP track record + strategy logic + risk framework + transparency + GP capital alignment. Studio context becomes 'GP has operating leverage from broader org.'",
    avoid: "Don't lead with the manifesto. LPs don't buy story; they buy edge + risk-adjusted return.",
  },
  {
    audience: "Strategic / corporate",
    accent: "amber" as Accent,
    lead: "Lead with the product complementarity + acquisition potential.",
    angle:
      "ServiceNow / IBM-Apptio for FedStat. Optum / health-system funds for Vygor. The thesis is partnership economics + future M&A path. Studio narrative is proof of management quality and pipeline depth.",
    avoid: "Don't anchor on equity multiples — strategics value strategic fit + customer access.",
  },
  {
    audience: "Family offices + multi-gen",
    accent: "emerald" as Accent,
    lead: "Multi-generational horizon, co-investment across the venture pool.",
    angle:
      "Studio retention as alignment. Diversification across four ventures with shared infrastructure. Long-time-horizon capital matches studio's 7–10 year payoff curve. Mgmt-co + Fund I + venture co-invest pricing optionality.",
    avoid: "Don't promise 10x in 5 years — lean into the durability of the studio model.",
  },
  {
    audience: "Operator angels",
    accent: "cyan" as Accent,
    lead: "Lead with the venture's operational story + the moment in market.",
    angle:
      "They invest small but bring distribution and credibility. Linear/Notion eng leadership for TokenSource. Apptio alumni for FedStat. Livongo alumni for Vygor. Studio narrative is secondary; the venture's specific market timing matters most.",
    avoid: "Don't pitch process — pitch the bet they personally would make.",
  },
];

// ============================================================
// Section 5 · Process & operating notes
// ============================================================
const processCards = [
  {
    title: "Pipeline tracker fields",
    body:
      "Investor name · firm · contact source · status (not contacted / intro requested / met / diligencing / TS / passed / committed) · last touch · next action · target round · est. $ contribution · champion at firm · concerns raised. One row per firm; one tab per venture's raise.",
  },
  {
    title: "Follow-up cadence",
    body:
      "Within 24 hours of any meeting · weekly while actively in conversation · monthly for warm-but-not-yet · quarterly for passed-stay-in-touch. Always specific next step in every email; never end on 'let me know.'",
  },
  {
    title: "Diligence data room",
    body:
      "Pre-built per venture: financials, charter-customer or pilot data, team bios, market analysis, product demo, customer references, competitive landscape. Always permission-controlled — partners get full access, associates get summary deck only.",
  },
  {
    title: "Reference call protocol",
    body:
      "Maintain a list of 3–5 customer/partner references per venture willing to take calls. Brief them on key talking points before the call. Track which references have been used recently — refresh quarterly so they don't burn out. Debrief with the customer after each call.",
  },
  {
    title: "Term sheet response",
    body:
      "Standard 48-hour acknowledgment + 5-business-day full response. Pre-agreed legal counsel ready. Don't shop term sheets aggressively — investor circles are small. Negotiate inside the room, not by leverage games.",
  },
  {
    title: "Pass postmortems",
    body:
      "Every pass triggers a 15-min internal note: real reason vs stated reason, what would have closed it, whether to re-approach in the next round. Most passes are timing — track them in a 'revisit-in-Q3' bucket.",
  },
];

// ============================================================
// Helpers
// ============================================================
function CellLabel({ value, accent }: { value: Cell; accent: Accent }) {
  if (!value) return <span className="text-neutral-700">—</span>;
  const a = accents[accent];
  return (
    <span
      className={`inline-flex items-center rounded-full border ${a.softBorder} ${a.softBg} px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}
    >
      {value}
    </span>
  );
}

// ============================================================
// Page
// ============================================================
export default function FundraisingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
            / Fundraising
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            Capital strategy{" "}
            <span className="font-serif italic text-gradient">across the studio</span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Architecture, per-venture raise plans, sequencing, narratives, and
            process. Operating playbook for ~$120M deployed across studio +
            four ventures.
          </p>
        </div>
      </section>

      {/* §01 · CAPITAL ARCHITECTURE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 01 · Capital architecture
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Where each dollar comes from.
            </h2>
            <p className="mt-3 text-neutral-400">
              Six capital sources × four ventures. Each cell shows which stage
              that source funds for that venture. Empty cells mean the source
              isn&rsquo;t in scope for that venture.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0a0a0d]">
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Capital source
                  </th>
                  {ventureCols.map((v) => {
                    const a = accents[v.accent];
                    return (
                      <th key={v.key} className="px-3 py-4 text-left">
                        <div className="text-sm font-medium text-neutral-50">
                          {v.name}
                        </div>
                        <div className={`mt-1 h-px w-8 ${a.rankBg}`} />
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {capitalSources.map((row) => (
                  <tr
                    key={row.source}
                    className="border-b border-white/[0.04] last:border-0"
                  >
                    <td className="px-5 py-4 align-top">
                      <div className="text-neutral-200">{row.source}</div>
                      <div className="mt-0.5 text-xs text-neutral-500">
                        {row.sub}
                      </div>
                    </td>
                    {ventureCols.map((v) => (
                      <td key={v.key} className="px-3 py-4 align-top">
                        <CellLabel
                          value={row.cells[v.key]}
                          accent={v.accent}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-neutral-500">
            <span className="text-neutral-300">Read this row by row.</span>{" "}
            Studio capital seeds everything. Generalist VCs anchor TokenSource
            and FedStat. Sector specialists own Vygor and the AlphaSigma
            mgmt-co. LP commitments are AlphaSigma-only — distinct from the
            venture-equity rounds. Federal contracts and NIH grants are
            non-dilutive supplements that compound runway.
          </p>
        </div>
      </section>

      {/* §02 · PER-VENTURE RAISE PLAN (TABS) */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 02 · Per-venture raise plan
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Round structure, investors, narrative, milestones.
            </h2>
            <p className="mt-3 text-neutral-400">
              Tabs for each venture. Each contains: round structure, warm/cold
              reach split, investor segments with named firms, pitch
              narratives at three lengths, common objections with responses,
              and milestones triggering the next round.
            </p>
          </div>

          <RaiseTabs />
        </div>
      </section>

      {/* §03 · SEQUENCING TIMELINE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 03 · Sequencing timeline
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Eight quarters of capital deployment.
            </h2>
            <p className="mt-3 text-neutral-400">
              Q3 2026 → Q2 2028. Per-venture rows show key raise events and
              milestones. Overlapping raises avoided where founder bandwidth
              would conflict.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0a0a0d]">
            <div className="min-w-[1100px]">
              {/* Quarter header */}
              <div className="grid grid-cols-[160px_repeat(8,1fr)] border-b border-white/[0.06]">
                <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Track
                </div>
                {quarters.map((q) => (
                  <div
                    key={q}
                    className="border-l border-white/[0.04] px-2 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500"
                  >
                    {q}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {timelineRows.map((row) => {
                const a = accents[row.accent];
                return (
                  <div
                    key={row.name}
                    className="grid grid-cols-[160px_repeat(8,1fr)] border-b border-white/[0.04] last:border-0"
                  >
                    <div className="flex items-center px-4 py-5">
                      <span className="text-sm font-medium text-neutral-50">
                        {row.name}
                      </span>
                    </div>
                    {quarters.map((_, qIdx) => {
                      const events = row.events.filter((e) => e.q === qIdx);
                      return (
                        <div
                          key={qIdx}
                          className="relative border-l border-white/[0.04] px-1 py-3"
                        >
                          {events.map((e, ei) => (
                            <div
                              key={ei}
                              className={`mb-1 rounded-md border ${a.softBorder} ${a.softBg} px-2 py-1.5 text-[11px] leading-tight ${a.text}`}
                              style={{
                                width: e.span && e.span > 1 ? `calc(${e.span * 100}% + ${(e.span - 1) * 8}px)` : "100%",
                              }}
                            >
                              {e.label}
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-neutral-500">
            <span className="text-neutral-300">Critical sequencing rule.</span>{" "}
            TokenSource Series A (Q3 2027) anchors the studio&rsquo;s external
            valuation story; AlphaSigma Fund I final close (Q2 2027) is the
            asymmetric bet that compounds. FedStat federal track runs in
            parallel without competing for founder bandwidth. Vygor pilots
            through Q1–Q3 2027 produce the outcomes data that unlocks Series A
            in Q4.
          </p>
        </div>
      </section>

      {/* §04 · PITCH NARRATIVE FRAMEWORK */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 04 · Pitch narrative framework
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Same story, six different framings.
            </h2>
            <p className="mt-3 text-neutral-400">
              The studio narrative is the constant. What changes is which
              venture you lead with, which comp you anchor on, and how you
              position studio retention. Don&rsquo;t pitch all six framings to
              the same investor — pick the one that matches.
            </p>
          </div>

          {/* Studio narrative spine */}
          <div className="mb-8 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.04] p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-300">
              / Studio narrative spine
            </div>
            <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-200 md:text-lg md:leading-8">
              <span className="font-serif italic text-neutral-50">
                Industries are artifacts of scarcity.
              </span>{" "}
              AI made point solutions cheap. The new edge is replacing whole
              operating models, not improving them. SerebrumAI is building the
              next generation of AI-native companies that replace broken
              systems across industries. TokenSource (software lifecycle),
              FedStat (technology investment management), AlphaSigma (fund
              management), and Vygor AI (chronic care) are the first four.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {audienceFrames.map((af) => {
              const a = accents[af.accent];
              return (
                <div
                  key={af.audience}
                  className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6"
                >
                  <div
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] ${a.text}`}
                  >
                    {af.audience}
                  </div>
                  <h3 className="mt-3 text-base font-medium text-neutral-50">
                    {af.lead}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">
                    {af.angle}
                  </p>
                  <p className="mt-4 border-t border-white/[0.04] pt-3 text-xs text-neutral-500">
                    <span className="font-mono uppercase tracking-widest">
                      Avoid:{" "}
                    </span>
                    {af.avoid}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* §05 · PROCESS & OPERATING NOTES */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 05 · Process &amp; operating notes
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Running the raise like a sales pipeline.
            </h2>
            <p className="mt-3 text-neutral-400">
              Tactical notes for managing 100+ active investor conversations
              across the four ventures without losing the thread.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6"
              >
                <h3 className="text-sm font-medium text-neutral-50">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400">
              / The discipline
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-neutral-300 md:text-base md:leading-7">
              Fundraising fails on process discipline before it fails on
              narrative or product. The studio is running 4+ raises in
              parallel — the only way to do that without burning relationships
              is to treat every investor conversation as part of a tracked
              pipeline with clear next-step ownership.
            </p>
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
