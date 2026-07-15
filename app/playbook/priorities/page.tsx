import type { Metadata } from "next";
import MatrixInteractive from "./MatrixInteractive";
import {
  ventures,
  ideas,
  accentColors,
  motionStyle,
  convictionLabel,
  convictionDot,
  timeToPhase,
  phaseInfo,
  type Conviction,
  type Phase,
} from "./_data";

export const metadata: Metadata = {
  title: "Priorities",
  description:
    "Internal: 3×3 prioritization matrix — peak ARR potential vs. time to $1M ARR.",
  robots: { index: false, follow: false },
};

export default function PrioritiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
            / Priorities
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            How we{" "}
            <span className="font-serif italic text-gradient">prioritize</span>{" "}
            ideas.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Two axes that decide what we build: outcome ceiling and time to
            first real revenue. Conviction is the tiebreaker inside each cell.
          </p>
        </div>
      </section>

      {/* MATRIX (interactive — sliders, popover, localStorage) */}
      <MatrixInteractive />

      {/* SEQUENCING — short / medium / long-term phasing */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / Sequencing
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Cash-flow choreography.
            </h2>
            <p className="mt-3 text-neutral-400">
              Three phases. Short-term cashflow funds medium-term wedges; both
              fund the long-arc bet. Low-conviction ideas excluded — they
              don&apos;t earn studio capital.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {(["short", "medium", "long"] as Phase[]).map((phase) => {
              const info = phaseInfo[phase];
              const ventureItems = ventures.filter(
                (v) => timeToPhase(v.time) === phase
              );
              const ideaItems = ideas.filter(
                (i) => timeToPhase(i.time) === phase && i.conviction !== "low"
              );
              return (
                <div
                  key={phase}
                  className={`flex flex-col rounded-2xl border ${info.accentBorder} ${info.accentBg} p-6`}
                >
                  <div
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] ${info.accentText}`}
                  >
                    {info.label} · {info.timeline}
                  </div>
                  <div className="mt-2 text-2xl font-medium text-neutral-50">
                    {info.role}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {info.body}
                  </p>

                  <div className="mt-6 space-y-2">
                    {ventureItems.map((v) => {
                      const c = accentColors[v.accent];
                      const m = motionStyle[v.motion];
                      return (
                        <div
                          key={v.name}
                          className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
                        >
                          <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`}
                          />
                          <span className={`text-sm ${c.text}`}>{v.name}</span>
                          <span
                            title={`${v.motion} — ${m.tip}`}
                            className={`ml-auto inline-flex items-center rounded border px-1 py-px font-mono text-[9px] ${m.bg} ${m.text} ${m.border}`}
                          >
                            {v.motion}
                          </span>
                          <ConvictionDots level={v.conviction} />
                        </div>
                      );
                    })}
                    {ideaItems.map((i) => {
                      const m = motionStyle[i.motion];
                      return (
                        <div
                          key={i.name}
                          className="flex items-center gap-2 rounded-lg border border-dashed border-white/[0.10] bg-white/[0.01] px-3 py-2"
                        >
                          <span className="text-sm italic text-neutral-300">
                            {i.name}
                          </span>
                          <span
                            title={`${i.motion} — ${m.tip}`}
                            className={`ml-auto inline-flex items-center rounded border px-1 py-px font-mono text-[9px] not-italic ${m.bg} ${m.text} ${m.border}`}
                          >
                            {i.motion}
                          </span>
                          <ConvictionDots level={i.conviction} />
                        </div>
                      );
                    })}
                    {ventureItems.length === 0 && ideaItems.length === 0 && (
                      <div className="text-sm italic text-neutral-500">
                        — no qualifying items —
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow logic — how cash moves through the portfolio */}
          <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
              / Flow logic
            </div>
            <div className="mt-4 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-base font-medium text-neutral-50">
                  The funding stack
                </h3>
                <ol className="mt-4 space-y-4 text-sm leading-6 text-neutral-300">
                  <li>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                      Y0–Y1.5 · cashflow wave
                    </span>
                    <p className="mt-1">
                      <span className="text-neutral-50">TokenSource</span>{" "}
                      (PLG-hybrid dev tool) + <span className="text-neutral-50">AlphaSigma Fund I</span>{" "}
                      (mgmt fee + early carry) +{" "}
                      <span className="text-neutral-50">MatchMD Programs</span>{" "}
                      (B2B SaaS, residency programs) collectively land first
                      $5–10M ARR. External proof + studio cash to fund the
                      next wave.
                    </p>
                  </li>
                  <li>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                      Y1–Y4 · compounding wave
                    </span>
                    <p className="mt-1">
                      <span className="text-neutral-50">FedStat</span> enters
                      enterprise sales (Apptio comp).{" "}
                      <span className="text-neutral-50">Cognomix</span>{" "}
                      launches dev-led on FedStat&apos;s CIO/CFO base.{" "}
                      <span className="text-neutral-50">ClaimSentry</span>{" "}
                      cross-sells into Vygor&apos;s health-plan relationships.{" "}
                      <span className="text-neutral-50">CreditCore</span> + the
                      three AlphaSigma-wedged ideas (Research, VentureStat VC,
                      DealLens) each leverage AlphaSigma&apos;s institutional
                      finance pipeline. Combined Y3–4 ARR: $30–80M.
                    </p>
                  </li>
                  <li>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300">
                      Y2–Y5+ · long-arc wave
                    </span>
                    <p className="mt-1">
                      <span className="text-neutral-50">Vygor AI</span> scales
                      pilots into health-plan and employer contracts. Slow
                      proof curve, &gt;$1B ceiling. Funded by Y1–4 cashflow +
                      healthtech VC tier (per Tier 4 raise map).
                    </p>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-base font-medium text-neutral-50">
                  The wedge structure
                </h3>
                <p className="mt-4 text-sm leading-6 text-neutral-300">
                  Every speculative idea on the matrix inherits an existing
                  venture&apos;s distribution.{" "}
                  <span className="text-neutral-50">AlphaSigma fund</span>{" "}
                  unlocks four finance-vertical ventures (AlphaSigma Research,
                  VentureStat VC, DealLens AI, CreditCore AI).{" "}
                  <span className="text-neutral-50">Vygor</span> unlocks
                  ClaimSentry.{" "}
                  <span className="text-neutral-50">FedStat</span> unlocks
                  Cognomix. The studio&apos;s structural advantage is{" "}
                  <span className="text-neutral-50">
                    multiplicative distribution wedges
                  </span>
                  , not capital — every new venture starts with a warm-intro
                  pipeline cold-start founders don&apos;t have.
                </p>
                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  That&apos;s why the matrix concentrates high-conviction ideas
                  in the same cells as existing ventures: the studio&apos;s
                  filter naturally selects for ideas that compound on existing
                  wedges. Standalone ideas without a wedge (RelayCall,
                  BuddhaEngine, ActionItems) consistently land in the
                  defer/skip cells.
                </p>
                <div className="mt-5 rounded-lg border border-white/[0.08] bg-white/[0.02] p-4 text-xs leading-5 text-neutral-400">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    Capital posture
                  </span>
                  <p className="mt-2">
                    Don&apos;t over-invest in long-term until short-term
                    cashflow proves out. Don&apos;t starve long-term once the
                    funding stack is loaded — Vygor&apos;s ceiling is what
                    makes the studio worth $5B+ at maturity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PER-VENTURE NOTES */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / Placements
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Why each venture lands where it does.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {ventures.map((v) => {
              const c = accentColors[v.accent];
              return (
                <div
                  key={v.name}
                  className={`rounded-2xl border ${c.border} bg-[#0a0a0d] p-6 md:p-7`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                    <span className={`font-mono text-[10px] uppercase tracking-[0.22em] ${c.text}`}>
                      {v.framing}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-medium text-neutral-50">
                    {v.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-neutral-300">
                      {v.size}
                    </span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-neutral-300">
                      {v.time} to $1M ARR
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-neutral-300">
                      <ConvictionDots level={v.conviction} />
                      {convictionLabel[v.conviction]}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-neutral-300">
                    {v.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PER-IDEA NOTES */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / Ideas
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Why each idea lands where it does.
            </h2>
            <p className="mt-3 text-neutral-400">
              Speculative bets, not in-flight ventures. Each inherits a
              distribution wedge from an existing venture — that&apos;s the
              filter that earns studio capital.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {ideas.map((idea) => {
              const m = motionStyle[idea.motion];
              return (
                <div
                  key={idea.name}
                  className="rounded-2xl border border-dashed border-white/[0.10] bg-[#0a0a0d] p-6 md:p-7"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-[9px] ${m.bg} ${m.text} ${m.border}`}
                    >
                      {idea.motion}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      AI-native idea
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-medium italic text-neutral-50">
                    {idea.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-neutral-300">
                      {idea.size}
                    </span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-neutral-300">
                      {idea.time} to $1M ARR
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-neutral-300">
                      <ConvictionDots level={idea.conviction} />
                      {convictionLabel[idea.conviction]}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-neutral-400">
                    {idea.rationale}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FRAMEWORK NOTES */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / Framework
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Why these axes.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FrameworkCard
              label="X · Time to $1M ARR"
              body="Falsifiable velocity proxy. $1M ARR is the threshold where a venture becomes real to outside capital. Faster = lower studio risk, more re-investable cycles."
            />
            <FrameworkCard
              label="Y · Peak ARR potential"
              body="Outcome ceiling at maturity, not vague 'TAM.' We bracket >$500M, $50M–$500M, <$50M. A venture studio's portfolio math only works if at least one venture is in the top bracket."
            />
            <FrameworkCard
              label="Cell · Conviction"
              body="Tiebreaker inside a cell. Two ideas at the same coordinates can have wildly different odds. We mark conviction explicitly so we don't deceive ourselves with positional optimism."
            />
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-6 text-neutral-500">
            What we deliberately leave off the matrix: capital intensity (read
            from the raise map), regulatory drag (read from the blueprint
            scoring table), and strategic fit with the AI-native thesis (every
            venture must clear that bar to be on the matrix at all).
          </p>
        </div>
      </section>
    </>
  );
}

// ============================================================
// Helpers (server-side rendering only — interactive matrix has its own copies)
// ============================================================
function ConvictionDots({ level }: { level: Conviction }) {
  const filled = convictionDot[level];
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i <= filled ? "bg-emerald-400" : "bg-white/15"
          }`}
        />
      ))}
    </span>
  );
}

function FrameworkCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
        {label}
      </div>
      <p className="mt-3 text-sm leading-6 text-neutral-300">{body}</p>
    </div>
  );
}
