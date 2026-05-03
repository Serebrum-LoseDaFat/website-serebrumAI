import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTM",
  description:
    "Internal: top 3 go-to-market actions per venture across the SerebrumAI portfolio.",
  robots: { index: false, follow: false },
};

type Accent = "cyan" | "amber" | "violet" | "emerald";

const accents: Record<
  Accent,
  {
    text: string;
    rankBg: string;
    rankText: string;
    softBorder: string;
    softBg: string;
  }
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

type GTMItem = {
  rank: number;
  title: string;
  target: string;
  mechanics: string;
  why: string;
};

type VentureDetail = {
  key: VentureKey;
  sectionLabel: string;
  name: string;
  framing: string;
  accent: Accent;
  context: string;
  items: GTMItem[];
};

const ventureDetails: VentureDetail[] = [
  {
    key: "ts",
    sectionLabel: "/ 02 · TokenSource",
    name: "TokenSource",
    framing: "Bottom-up SaaS distribution",
    accent: "cyan",
    context:
      "TokenSource sells AI-native execution tooling — structured briefs, tickets, alignment, adaptive plans — to product and engineering leaders at SaaS companies. Buyers already use Linear, Notion, and Productboard; the wedge is AI-native lifecycle. The first 12 months are about proving the workflow shift on real teams, not chasing scale.",
    items: [
      {
        rank: 1,
        title: "Design partner program",
        target:
          "5 anchor customers in 6 months. Series-B+ SaaS with 30–100 product/eng staff. Filter for VPs of Engineering or CPOs publicly writing about AI in workflows on LinkedIn or podcasts.",
        mechanics:
          "Free or near-free 6-month engagement. Daily product feedback. Joint case study and public quote in exchange for hands-on access. Embed founder-time with their team weekly.",
        why: "AI-native product workflows aren't yet defined. Anchor logos prove the workflow change is real, not theoretical, and unlock the next 50 conversations. Without 3–5 reference customers, every pitch becomes hypothetical.",
      },
      {
        rank: 2,
        title: "Founder-led 1:1 outreach",
        target:
          "50 product/engineering leaders reachable via 2nd-degree LinkedIn connections, podcast circuit, or warm intros. Bias toward post–Series-A SaaS where AI tooling decisions get made fast.",
        mechanics:
          "Personalized DMs and warm intros. Pitch: 20 minutes to react to where AI-native execution is heading. Expect ~30% reply rate; 10–20% of conversations convert to design-partner LOI.",
        why: "Sub-$3M ARR, no SDR team is affordable, and SDRs can't sell the AI workflow story. Founder energy is the fastest viable channel and the highest signal-density.",
      },
      {
        rank: 3,
        title: "PLG / freemium self-serve",
        target:
          "Small product teams (2–15 people) at startups and scale-ups. Bottom-up adoption that can later expand into mid-market accounts.",
        mechanics:
          "Free tier ≤ 5 seats. Paid above. SEO-driven landing → instant trial → in-app expansion prompts → ARR. Targeted content for PMs and engineering managers.",
        why: "PLG is an 18–24 month flywheel. The first year you need anchor logos to justify why someone tries the free tier. Linear and Notion are the model — free → team → enterprise.",
      },
    ],
  },
  {
    key: "fs",
    sectionLabel: "/ 03 · FedStat",
    name: "FedStat",
    framing: "Enterprise IT + federal · long-cycle, RFP-driven",
    accent: "amber",
    context:
      "FedStat sells AI-native technology investment management — budgeting, portfolio rationalization, TBM, capex, goal tracking — to CIOs, CFOs, and IT financial leaders at Fortune 1000 enterprises and federal agencies. Comp: Apptio (acquired by IBM for $4.6B in 2023). Sales cycles run 9–18 months. The market is large but procurement-heavy and trust-gated.",
    items: [
      {
        rank: 1,
        title: "Founder-led 1:1 outreach",
        target:
          "10 anchor enterprise accounts via the founder's direct CIO/CFO network — banks, insurers, retailers, federal civilian agencies under IT-modernization mandates. Filter for orgs publicly investing in TBM or app rationalization.",
        mechanics:
          "6–12 month paid pilots with a CIO-level champion. Expansion clauses pre-negotiated. Quarterly executive briefings with measured spend optimization data.",
        why: "Apptio's first 50 customers were sold by the CEO directly. Enterprise IT financial management is too strategic to delegate to AEs early. CIO peer-to-peer trust is the only thing that converts cold accounts at this scale.",
      },
      {
        rank: 2,
        title: "Direct enterprise AE sales",
        target:
          "50 named Fortune 1000 accounts. 3–5 senior AEs each owning 10–15 accounts. Targets include large banks (JPM, BofA), retailers (Walmart, Target), insurers (UnitedHealth, Anthem), industrial (GE, Lockheed).",
        mechanics:
          "9-month enterprise sales cycle. Multi-stakeholder (CIO + CFO + IT-FM lead). Procurement-heavy. Co-sell motion with Big Four advisory (Deloitte, EY, PwC) for category validation.",
        why: "After the first 5–10 founder-led wins, founder time is exhausted. Pattern-trained AEs scale the motion through enterprise procurement. The transition from founder-led to AE-led at ~$5–10M ARR is what makes or breaks the trajectory.",
      },
      {
        rank: 3,
        title: "Federal contracting",
        target:
          "Federal civilian agencies (HHS, DHS, VA, USDA), DoD components, and federally-funded research centers. Specific entry points: TMF (Technology Modernization Fund), agency CIO offices.",
        mechanics:
          "GSA Schedule 70 listing. FedRAMP Moderate (or High for sensitive workloads). CMMC compliance for DoD adjacency. ~12–18 months of paperwork before first federal sale closes.",
        why: "Federal IT spend is ~$110B/year — a meaningful share of the TBM TAM. The door requires GSA and FedRAMP investment up front. Won't pay off until year 2–3. Skipping now closes the federal market for years.",
      },
    ],
  },
  {
    key: "as",
    sectionLabel: "/ 04 · AlphaSigma",
    name: "AlphaSigma",
    framing: "Fund management · track-record economy",
    accent: "violet",
    context:
      "AlphaSigma is an AI-native fund management company running an absolute return strategy. Buyers are LP allocators — investment banks via cap-intro desks, family offices, FoFs, and eventually pensions and endowments. Fund I likely $25–50M. Track record and transparency are the moats. Economics — AUM × management fee + performance carry — compound past anything venture pricing supports.",
    items: [
      {
        rank: 1,
        title: "Founder-led LP outreach",
        target:
          "100 LP decision-makers in the GP's network — former colleagues, alumni, banking relationships, prior co-investors, family-office principals, fund-of-fund managers.",
        mechanics:
          "1:1 intro coffees, allocator dinners, warm intros via existing LPs. Track conversation pipeline like a CRM. Expect ~5–15% of LP meetings convert to soft commitments; 30–50% of soft → hard.",
        why: "Fund I always closes on personal network. No allocator commits to a first-time fund manager from a cold pitch. The GP's network IS the fund's first close — there is no substitute.",
      },
      {
        rank: 2,
        title: "Capital introduction via prime brokers",
        target:
          "Tier-1 cap-intro desks: Goldman Sachs, Morgan Stanley, J.P. Morgan. Mid-market: Citi, BofA, UBS, Jefferies. Goal: get included in their cap-intro events.",
        mechanics:
          "Stand up the fund. Demonstrate 3–6 months of live track record. Pitch prime brokers for inclusion in cap-intro events. Each event introduces 10–30 funds to 100–200 allocators over 1–2 days.",
        why: "Cap-intro multiplies founder reach. 1:1 outreach hits 100 LPs over a year. Cap-intro reaches 200–500 in concentrated bursts. Required to scale Fund II beyond personal network.",
      },
      {
        rank: 3,
        title: "Allocator events + transparency reporting",
        target:
          "SuperReturn (regional editions), Milken Conference, iConnections Global Alts, eVestment summits. LP audiences: pensions, endowments, sovereign wealth, family offices.",
        mechanics:
          "Monthly investor letter. Quarterly performance attribution. Factor decomposition. Real-time risk dashboards visible to LPs. Selective panel appearances at allocator-heavy events.",
        why: "Builds reputation over 2+ years. Events surface new LPs; reporting reduces churn and makes Fund II oversubscribed. Doesn't close Fund I — that's network — but compounds reach for Funds II, III, and beyond.",
      },
    ],
  },
  {
    key: "vg",
    sectionLabel: "/ 05 · Vygor AI",
    name: "Vygor AI",
    framing: "Health plans + employers · evidence-driven",
    accent: "emerald",
    context:
      "Vygor sells AI-native chronic care for weight, obesity, and diabetes. Buyers are health plans (UnitedHealth, Aetna, Cigna, regional Blues) and self-insured employers (Fortune 500 + mid-market). Comps: Livongo (Teladoc $18.5B acquisition), Omada, Calibrate, Noom. Average sales cycle: 12–24 months. Clinical outcomes data is mandatory; without it, no buyer signs.",
    items: [
      {
        rank: 1,
        title: "Health-plan pilot programs",
        target:
          "2–3 anchor health plans. Start with smaller regional Blues — HealthPartners, BCBS Massachusetts, BCBS Michigan, Geisinger, Highmark. Easier first proof than UnitedHealth or Cigna.",
        mechanics:
          "6–12 month pilots with 500–2,000 enrolled members. Pre-negotiated outcome metrics (HbA1c reduction, weight loss, engagement, total cost of care, medical-loss-ratio impact). Actuarial-grade end-of-pilot report.",
        why: "Health plans buy on outcomes data from pilots they ran themselves, not slides. The outcomes data IS the moat — it's what justifies a multi-year commercial contract and creates barriers for the next entrant.",
      },
      {
        rank: 2,
        title: "Clinical evidence publishing",
        target:
          "Top journals: NEJM (highest bar), JAMA, JAMA Internal Medicine, Diabetes Care, Obesity, Annals of Internal Medicine. Conferences: ADA Scientific Sessions, ObesityWeek, AcademyHealth, AMCP.",
        mechanics:
          "1–2 papers per year early; quarterly by year 3. Mix of randomized controlled trials, real-world evidence studies, and cost-effectiveness analyses. Always co-author with a recognized clinical PI.",
        why: "Pilots produce data; publishing turns it into peer-reviewed validation. Medical directors quote published papers in benefits committees. Peer review neutralizes the 'prove this isn't snake oil' objection that kills most digital-health pitches.",
      },
      {
        rank: 3,
        title: "Benefits broker channel",
        target:
          "Mercer Marsh Benefits, Aon, Willis Towers Watson, Lockton, Alliant, NFP, USI. These collectively place ~70% of US employer health benefits.",
        mechanics:
          "Get on broker preferred-vendor lists. Quarterly broker briefings with outcomes data and case studies. Joint marketing to employer prospects. Train broker consultants on pitching Vygor in RFPs.",
        why: "Brokers gate the employer market. Plan-direct sales work for Vygor, but skipping brokers loses you the entire employer purchasing motion. Broker relationships take 12–18 months to build but unlock self-insured employers — the second leg of the demand.",
      },
    ],
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
              Each venture has exactly three picks. Detail per venture follows.
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

      {/* PER-VENTURE DETAIL SECTIONS */}
      {ventureDetails.map((v) => {
        const a = accents[v.accent];
        return (
          <section key={v.key} className="border-b border-white/[0.06]">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
              <div className="mb-10 max-w-3xl">
                <div
                  className={`font-mono text-[11px] uppercase tracking-[0.25em] ${a.text}`}
                >
                  {v.sectionLabel}
                </div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
                  {v.name}{" "}
                  <span className="text-neutral-500">
                    · {v.framing.split(" · ")[0]}
                  </span>
                </h2>
                <p className="mt-5 text-base leading-7 text-neutral-300 md:text-lg md:leading-8">
                  {v.context}
                </p>
              </div>

              <div className="space-y-5">
                {v.items.map((item) => (
                  <div
                    key={item.rank}
                    className={`rounded-2xl border ${a.softBorder} ${a.softBg} p-6 md:p-8`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold ${a.rankBg} ${a.rankText}`}
                      >
                        {item.rank}
                      </span>
                      <div>
                        <div
                          className={`font-mono text-[10px] uppercase tracking-[0.2em] ${a.text}`}
                        >
                          Priority {item.rank}
                        </div>
                        <h3 className="mt-1 text-xl font-medium tracking-tight text-neutral-50 md:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                          Target
                        </div>
                        <p className="mt-2 text-sm leading-6 text-neutral-300">
                          {item.target}
                        </p>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                          Mechanics
                        </div>
                        <p className="mt-2 text-sm leading-6 text-neutral-300">
                          {item.mechanics}
                        </p>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                          Why it ranks here
                        </div>
                        <p className="mt-2 text-sm leading-6 text-neutral-300">
                          {item.why}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ABSENT */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-8 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 06 · Notably absent
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
