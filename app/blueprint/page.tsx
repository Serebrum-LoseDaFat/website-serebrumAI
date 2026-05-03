import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blueprint",
  description:
    "Internal strategy: positioning, flagship selection, $100M raise path, and AlphaSigma dual track.",
  robots: { index: false, follow: false },
};

// ============================================================
// Section 2 · Flagship scoring
// ============================================================
type Score = 1 | 2 | 3 | 4 | 5;

const flagshipDimensions: { key: string; label: string; help: string }[] = [
  { key: "tam", label: "TAM", help: "Addressable market" },
  { key: "fund", label: "VC fundability", help: "Generalist VC appeal" },
  { key: "cycle", label: "Sales cycle speed", help: "Time from intro to close (faster = higher)" },
  { key: "moat", label: "Defensibility", help: "Data loop / network effect" },
  { key: "reg", label: "Reg friction", help: "Inverse — lower regulatory drag = higher" },
  { key: "ttr", label: "Time-to-revenue", help: "Speed to first dollar" },
  { key: "fit", label: "Thesis fit", help: "Strength of replacement story" },
];

type FlagshipRow = {
  name: string;
  framing: string;
  accent: "cyan" | "violet" | "emerald" | "amber";
  scores: Record<string, Score>;
};

const flagships: FlagshipRow[] = [
  {
    name: "TokenSource",
    framing: "AI-native software lifecycle",
    accent: "cyan",
    scores: { tam: 4, fund: 5, cycle: 5, moat: 4, reg: 5, ttr: 5, fit: 4 },
  },
  {
    name: "FedStat",
    framing: "AI-native technology investment mgmt",
    accent: "amber",
    scores: { tam: 4, fund: 4, cycle: 3, moat: 4, reg: 5, ttr: 3, fit: 4 },
  },
  {
    name: "AlphaSigma",
    framing: "AI-native fund management",
    accent: "violet",
    scores: { tam: 5, fund: 3, cycle: 4, moat: 4, reg: 3, ttr: 4, fit: 5 },
  },
  {
    name: "Vygor AI",
    framing: "AI-native chronic-care system",
    accent: "emerald",
    scores: { tam: 5, fund: 2, cycle: 2, moat: 4, reg: 2, ttr: 2, fit: 5 },
  },
];

const accentColors: Record<
  FlagshipRow["accent"],
  { dot: string; text: string; bar: string; bgSoft: string; border: string }
> = {
  cyan: {
    dot: "bg-cyan-400",
    text: "text-cyan-300",
    bar: "bg-cyan-400/70",
    bgSoft: "bg-cyan-400/[0.06]",
    border: "border-cyan-400/30",
  },
  violet: {
    dot: "bg-violet-400",
    text: "text-violet-300",
    bar: "bg-violet-400/70",
    bgSoft: "bg-violet-400/[0.06]",
    border: "border-violet-400/30",
  },
  emerald: {
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    bar: "bg-emerald-400/70",
    bgSoft: "bg-emerald-400/[0.06]",
    border: "border-emerald-400/30",
  },
  amber: {
    dot: "bg-amber-400",
    text: "text-amber-300",
    bar: "bg-amber-400/70",
    bgSoft: "bg-amber-400/[0.06]",
    border: "border-amber-400/30",
  },
};

// ============================================================
// Section 3 · $100M raise map
// ============================================================
const raiseMap = [
  {
    tier: "T1",
    label: "Studio capital",
    range: "$3–5M",
    when: "Now → Q3 2026",
    sources: "Family offices · strategic LPs · founder capital",
    use: "12–18 months of runway across all four ventures + studio ops.",
    accent: "emerald",
  },
  {
    tier: "T2",
    label: "TokenSource — flagship VC track",
    range: "$25–35M (seed → A)",
    when: "Q4 2026 → 2027",
    sources: "Generalist tier-1/2 VCs (productivity, dev tools)",
    use: "Seed $5–8M → Series A $20–30M. Anchor of the studio's external valuation story.",
    accent: "cyan",
  },
  {
    tier: "T3",
    label: "FedStat — enterprise VC track",
    range: "$25–35M (seed → A)",
    when: "Q1 2027 → late 2027",
    sources: "Enterprise SaaS VCs · IT-financial-management specialists · operator angels",
    use: "Seed $5–8M → Series A $20–30M. Apptio-style comp; Fortune 1000 + federal pipeline.",
    accent: "amber",
  },
  {
    tier: "T4",
    label: "Vygor AI",
    range: "$19–26M (seed → A)",
    when: "Q2 2027 → 2028",
    sources: "Healthtech specialists (General Catalyst HT, Oak HC/FT, 7wireVentures)",
    use: "Pilots → first health-plan contracts → outcomes data. Long sales cycle baked in.",
    accent: "emerald",
  },
  {
    tier: "T5",
    label: "AlphaSigma — fund management",
    range: "$25–50M Fund I",
    when: "2027–2028",
    sources: "Investment banks (cap-intro, prime brokerage) · allocators · family offices · FoFs",
    use: "Run AI-native absolute return strategy. AUM → mgmt fee + carry compounds. Distinct capital pool from venture equity.",
    accent: "violet",
  },
];

// ============================================================
// Section 4 · AlphaSigma — fund management profile
// ============================================================
const alphaSigmaProfile = {
  label: "AlphaSigma · AI-native fund management",
  accent: "violet" as const,
  rows: [
    ["Entity type", "Fund management company"],
    ["What it runs", "AI-native absolute return strategy"],
    ["LPs", "Investment banks (cap-intro · prime brokerage) · allocators · family offices · FoFs"],
    ["Capital source", "LP commitments to Fund I, II, III"],
    ["Revenue model", "Management fee + performance carry (≈2/20)"],
    ["Time to scale", "6–12 months from Fund I close to first deployment"],
    ["Capital ceiling", "High — AUM compounds with track record and persistence"],
    ["Regulatory layer", "Investment adviser registration · track-record driven"],
    ["Path to liquidity", "Management-co valuation grows with AUM; carry on every fund cycle"],
  ],
};

// ============================================================
// Helpers
// ============================================================
function ScoreDots({ value, accent }: { value: Score; accent: FlagshipRow["accent"] }) {
  const c = accentColors[accent];
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i <= value ? c.dot : "bg-white/[0.08]"}`}
        />
      ))}
    </div>
  );
}

function totalScore(row: FlagshipRow) {
  return Object.values(row.scores).reduce((s, v) => s + v, 0);
}

// ============================================================
// Page
// ============================================================
export default function BlueprintPage() {
  const sortedFlagships = [...flagships].sort(
    (a, b) => totalScore(b) - totalScore(a)
  );
  const flagshipWinner = sortedFlagships[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
            / Blueprint
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            Strategic{" "}
            <span className="font-serif italic text-gradient">blueprint</span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Internal one-pager: positioning options, flagship scoring,
            $100M raise path, and the dual track for AlphaSigma.
          </p>
        </div>
      </section>

      {/* SECTION 1 · POSITIONING */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 01 · Positioning
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              The label we lead with.
            </h2>
          </div>

          <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/[0.04] p-8 md:p-12">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-300">
                Decision
              </span>
            </div>
            <div className="mt-6 font-serif text-4xl italic leading-tight text-neutral-50 md:text-6xl">
              AI-native venture creation engine.
            </div>
            <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
              Distinctive, mechanical-feel, on-voice. Use this as the primary
              label in pitch decks, intros, and conversations. Fall back to
              <span className="text-neutral-100"> venture studio </span>
              only inside metadata and alt text — places where SEO match
              outweighs distinctiveness.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 · FLAGSHIP SCORING */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 02 · Flagship scoring
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Which venture leads the studio narrative?
            </h2>
            <p className="mt-3 text-neutral-400">
              Each dimension scored 1–5. Higher = better. Highest total is the
              flagship that anchors the external pitch and the raise sequence.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0a0a0d]">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Dimension
                  </th>
                  {flagships.map((f) => {
                    const c = accentColors[f.accent];
                    return (
                      <th key={f.name} className="px-3 py-4 text-left">
                        <div className={`text-sm font-medium text-neutral-50`}>
                          {f.name}
                        </div>
                        <div className={`mt-1 font-mono text-[9px] uppercase tracking-[0.18em] ${c.text}`}>
                          {f.framing}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {flagshipDimensions.map((d) => (
                  <tr key={d.key} className="border-b border-white/[0.04]">
                    <td className="px-5 py-3 align-top">
                      <div className="text-neutral-200">{d.label}</div>
                      <div className="mt-0.5 text-xs text-neutral-500">
                        {d.help}
                      </div>
                    </td>
                    {flagships.map((f) => (
                      <td key={f.name + d.key} className="px-3 py-3">
                        <div className="flex items-center gap-3">
                          <ScoreDots
                            value={f.scores[d.key] as Score}
                            accent={f.accent}
                          />
                          <span className="font-mono text-xs text-neutral-400">
                            {f.scores[d.key]}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white/[0.02]">
                  <td className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Total
                  </td>
                  {flagships.map((f) => {
                    const t = totalScore(f);
                    const isWinner = t === totalScore(flagshipWinner);
                    const c = accentColors[f.accent];
                    return (
                      <td key={f.name + "-total"} className="px-3 py-4">
                        <div className="flex items-baseline gap-1">
                          <span
                            className={`font-serif text-2xl ${
                              isWinner ? c.text : "text-neutral-200"
                            }`}
                          >
                            {t}
                          </span>
                          <span className="font-mono text-[10px] text-neutral-500">
                            /35
                          </span>
                          {isWinner && (
                            <span className={`ml-2 inline-flex items-center gap-1 rounded-full border ${c.border} ${c.bgSoft} px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] ${c.text}`}>
                              Flagship
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                Flagship recommendation
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                <span className="font-medium text-neutral-50">{flagshipWinner.name}</span>{" "}
                anchors the studio's near-term VC story. Fastest sales cycle,
                lowest regulatory drag, generalist VC appeal. Use it as the
                external proof point for the studio narrative.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
                Asymmetric upside
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                <span className="font-medium text-neutral-50">AlphaSigma</span>{" "}
                opens an entirely different capital pool (LP commitments vs VC
                equity). Fund-management economics scale on AUM and compound
                past what venture pricing supports — Fund II bigger than I,
                Fund III bigger again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 · $100M RAISE MAP */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 03 · $100M raise map
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Path to ~$120M across studio + four ventures.
            </h2>
            <p className="mt-3 text-neutral-400">
              Five tiers, sequenced. Each tier targets a distinct capital pool
              with distinct mechanics — AlphaSigma raises LP commitments, the
              other ventures raise venture equity.
            </p>
          </div>

          <div className="space-y-3">
            {raiseMap.map((r) => {
              const c = accentColors[r.accent as FlagshipRow["accent"]];
              return (
                <div
                  key={r.tier}
                  className="grid grid-cols-12 gap-4 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5 transition hover:border-white/[0.18] md:p-6"
                >
                  <div className="col-span-12 md:col-span-1">
                    <div
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border ${c.border} ${c.bgSoft} font-mono text-xs ${c.text}`}
                    >
                      {r.tier}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <div className="text-base font-medium text-neutral-50">
                      {r.label}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                      {r.when}
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                      Range
                    </div>
                    <div className={`mt-1 font-serif text-xl ${c.text}`}>
                      {r.range}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                      Sources
                    </div>
                    <div className="mt-1 text-sm text-neutral-300">
                      {r.sources}
                    </div>
                    <div className="mt-2 text-xs text-neutral-500">
                      {r.use}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.04] p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">
              / Aggregate
            </div>
            <div className="mt-3 flex flex-wrap items-baseline gap-4">
              <span className="font-serif text-4xl text-neutral-50">
                $97M – $151M
              </span>
              <span className="text-sm text-neutral-400">
                centerline ≈ $124M across studio + four ventures
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 · ALPHASIGMA PROFILE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 04 · AlphaSigma profile
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              The fund-management entity.
            </h2>
            <p className="mt-3 text-neutral-400">
              AlphaSigma is an AI-native fund management company. It runs an
              absolute return strategy and raises LP capital — distinct from
              the venture-equity rounds that fund TokenSource and Vygor.
            </p>
          </div>

          <div
            className={`rounded-2xl border ${accentColors[alphaSigmaProfile.accent].border} ${accentColors[alphaSigmaProfile.accent].bgSoft} p-6 md:p-8`}
          >
            <div
              className={`font-mono text-[10px] uppercase tracking-[0.2em] ${accentColors[alphaSigmaProfile.accent].text}`}
            >
              {alphaSigmaProfile.label}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alphaSigmaProfile.rows.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-12 gap-3 border-b border-white/[0.04] pb-3 last:border-0 last:pb-0 md:border-0 md:pb-0"
                >
                  <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 md:col-span-4">
                    {k}
                  </div>
                  <div className="col-span-12 text-sm text-neutral-200 md:col-span-8">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Why this is asymmetric
            </div>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              Fund-management economics scale on AUM, not ARR. Track record +
              persistence compound — Fund II is bigger than Fund I, Fund III
              bigger again. The capital ceiling is set by performance, not
              venture multiples. And the LP base — investment banks, allocators,
              family offices — is a pool the studio cannot otherwise access
              through TokenSource or Vygor.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="rounded-3xl border border-white/[0.08] bg-[#0a0a0d] p-8 md:p-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400">
              / Decision summary
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Lead label
                </div>
                <div className="mt-2 font-serif text-2xl italic text-neutral-50">
                  AI-native venture creation engine
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Flagship venture
                </div>
                <div className="mt-2 font-serif text-2xl italic text-cyan-300">
                  TokenSource
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Asymmetric bet
                </div>
                <div className="mt-2 font-serif text-2xl italic text-violet-300">
                  AlphaSigma Fund I
                </div>
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-sm text-neutral-400">
              Four motions in parallel: pitch the studio with TokenSource as
              the proof, raise venture equity for TokenSource, FedStat, and
              Vygor in 2026–2027, and stand up AlphaSigma Fund I — the
              AI-native absolute return strategy — in 2027 once thesis is
              publicly validated.
            </p>
          </div>

          <p className="mt-12 text-center text-sm text-neutral-500">
            Internal document. Not linked from public navigation.
          </p>
        </div>
      </section>
    </>
  );
}
