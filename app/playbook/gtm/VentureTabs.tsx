"use client";

import { useState } from "react";

type Accent = "cyan" | "amber" | "violet" | "emerald";

const accents: Record<
  Accent,
  {
    text: string;
    rankBg: string;
    rankText: string;
    softBorder: string;
    softBg: string;
    underline: string;
  }
> = {
  cyan: {
    text: "text-cyan-300",
    rankBg: "bg-cyan-400",
    rankText: "text-cyan-950",
    softBorder: "border-cyan-400/30",
    softBg: "bg-cyan-400/[0.06]",
    underline: "bg-cyan-400",
  },
  amber: {
    text: "text-amber-300",
    rankBg: "bg-amber-400",
    rankText: "text-amber-950",
    softBorder: "border-amber-400/30",
    softBg: "bg-amber-400/[0.06]",
    underline: "bg-amber-400",
  },
  violet: {
    text: "text-violet-300",
    rankBg: "bg-violet-400",
    rankText: "text-violet-950",
    softBorder: "border-violet-400/30",
    softBg: "bg-violet-400/[0.06]",
    underline: "bg-violet-400",
  },
  emerald: {
    text: "text-emerald-300",
    rankBg: "bg-emerald-400",
    rankText: "text-emerald-950",
    softBorder: "border-emerald-400/30",
    softBg: "bg-emerald-400/[0.06]",
    underline: "bg-emerald-400",
  },
};

type GTMItem = {
  rank: number;
  title: string;
  target: string;
  mechanics: string;
  why: string;
  profile?: string[];
  archetypes?: { category: string; examples: string }[];
  antiProfile?: string[];
  sourcing?: string[];
};

type VentureDetail = {
  key: string;
  name: string;
  framing: string;
  accent: Accent;
  salesCycle: string;
  context: string;
  items: GTMItem[];
  tier2?: { title: string; body: string }[];
};

const ventureDetails: VentureDetail[] = [
  {
    key: "ts",
    name: "TokenSource",
    framing: "B2B SaaS · bottom-up distribution",
    accent: "cyan",
    salesCycle: "1–6 months · small teams to mid-market SaaS",
    context:
      "TokenSource sells AI-native execution tooling — structured briefs, tickets, alignment, adaptive plans — to product and engineering leaders at SaaS companies. Buyers already use Linear, Notion, and Productboard; the wedge is AI-native lifecycle. The first 12 months are about proving the workflow shift on real teams, not chasing scale.",
    items: [
      {
        rank: 1,
        title: "Charter customers",
        target:
          "5 anchor customers in 6 months. Series-B+ SaaS with 30–100 product/eng staff. Filter for VPs of Engineering or CPOs publicly writing about AI in workflows.",
        mechanics:
          "Free or near-free 6-month engagement. Daily product feedback. Joint case study and public quote in exchange for hands-on access. Embed founder-time with their team weekly.",
        why: "AI-native product workflows aren't yet defined. Anchor logos prove the workflow change is real, not theoretical, and unlock the next 50 conversations. Without 3–5 reference customers, every pitch becomes hypothetical.",
        profile: [
          "AI-forward engineering culture — teams already using Cursor, Copilot, Anthropic Claude, OpenAI in daily development. They believe AI changes *how* product is built, not just *what* gets coded.",
          "Series B–C SaaS, 30–100 product+eng. Past PMF, before bureaucracy. Decision in weeks, not quarters.",
          "Public workflow voice — VP Eng, CPO, or Head of Product who writes on LinkedIn, posts on X, or appears on podcasts. Their reputation does your distribution.",
          "PLG / dev-tools-adjacent — value velocity over process. Already on Linear or similar; have churned through Jira.",
        ],
        archetypes: [
          {
            category: "AI-product companies (roadmap shifts weekly)",
            examples:
              "Cursor · Replit · Perplexity · Glean · Harvey · Decagon · Sierra",
          },
          {
            category: "Modern dev-tools companies (peer-tier, evangelism flywheel)",
            examples:
              "Linear · Vercel · Resend · PostHog · Sentry · Render · Modal",
          },
          {
            category: "AI-native vertical SaaS",
            examples:
              "AI customer support · AI sales-engineering · AI coding categories",
          },
          {
            category: "OSS / DevTools-led-growth",
            examples: "Supabase · Cal.com · Trigger.dev",
          },
        ],
        antiProfile: [
          "Enterprise mega-SaaS (Salesforce, Workday, Oracle) — procurement kills the velocity proposition",
          "Pre-seed / sub-$1M ARR startups — too small to feel the pain",
          "Vertical SaaS in regulated industries (healthtech, fintech, govtech) — different buying motion, slower adoption",
          "Scaled-Agile / SAFe-heavy orgs — culturally hostile to AI-native workflow change",
        ],
        sourcing: [
          "LinkedIn Sales Navigator filter: Title contains 'VP Engineering' OR 'Head of Product' OR 'CPO'; Company size 30–200; Industry 'Software Development'; Posted on LinkedIn in last 30 days.",
          "Twitter/X search: people who follow Cursor or Anthropic and have 'VP Eng' or 'CPO' in bio.",
          "Podcast comment mining: Lenny's Newsletter podcast, Pragmatic Engineer, Software Engineering Daily — guests in the last 12 months.",
          "Portfolio scrape: YC, Sequoia Arc, General Catalyst — companies in the right size and category.",
        ],
      },
      {
        rank: 2,
        title: "Founder-led 1:1 outreach",
        target:
          "50 product/engineering leaders reachable via 2nd-degree LinkedIn connections, podcast circuit, or warm intros. Bias toward post–Series-A SaaS where AI tooling decisions get made fast.",
        mechanics:
          "Personalized DMs and warm intros. Pitch: 20 minutes to react to where AI-native execution is heading. Expect ~30% reply rate; 10–20% of conversations convert to a charter-customer LOI.",
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
    name: "FedStat",
    framing: "Enterprise IT · long-cycle, RFP-driven",
    accent: "amber",
    salesCycle: "9–18 months enterprise · 18–24 months federal",
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
    name: "AlphaSigma",
    framing: "Fund management · track-record economy",
    accent: "violet",
    salesCycle: "6–12 months for Fund I LP commitments · 3–6 months once track record is established",
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
    name: "Vygor AI",
    framing: "Healthcare · evidence-driven",
    accent: "emerald",
    salesCycle: "6–12 months self-funded employer · 9–15 months TPA · 12–24 months health plan",
    context:
      "Vygor sells AI-native chronic care for weight, obesity, and diabetes. Buyers are health plans (UnitedHealth, Aetna, Cigna, regional Blues), self-funded employers (Fortune 500 + mid-market), and the TPAs that administer their benefits. Comps: Livongo (Teladoc $18.5B acquisition), Omada, Calibrate, Noom. Clinical outcomes data is mandatory; without it, no buyer signs.",
    items: [
      {
        rank: 1,
        title: "Pilot programs across three buyer types",
        target:
          "2–3 anchor pilots running in parallel across the three viable buyer types: self-funded employers (fastest decision), TPAs administering ASO contracts (gateway to dozens of plans at once), and regional health plans (slowest cycle, highest LTV).",
        mechanics:
          "6–12 month pilots with 500–2,000 enrolled members. Pre-negotiated outcome metrics (HbA1c reduction, weight loss, engagement, total cost of care, medical-loss-ratio impact). Pricing structure adapts per buyer — PEPM for employers, PMPM for plans, blended for TPAs. Actuarial-grade end-of-pilot report.",
        why: "All three buyer types buy on outcomes data from pilots they ran themselves, not slides. Running in parallel diversifies pilot risk and surfaces which channel converts fastest to commercial contracts. Outcomes data IS the moat — it's what justifies multi-year commercial contracts and creates barriers for the next entrant.",
        profile: [
          "Active chronic-care strategy with budget allocated for vendor pilots in the next benefits cycle.",
          "Population of 500–2,000 covered lives in target indications (Type 2 diabetes, obesity) — statistically significant within a year.",
          "Pre-existing data infrastructure — claims data accessible, outcome metrics measurable from day one of the pilot.",
          "Champion at C-suite or medical-director level willing to defend the pilot through internal procurement.",
        ],
        archetypes: [
          {
            category: "Self-funded employers (fastest decision · single buyer)",
            examples:
              "Walmart · Target · Salesforce · Microsoft · Boeing · Caterpillar · mid-market 5K–50K employees in manufacturing, retail, logistics, public sector",
          },
          {
            category: "TPAs (gateway to dozens of self-funded plans)",
            examples:
              "Meritain Health · HealthSCOPE · Allied Benefit Systems · BeneSys · Trustmark · WebTPA · NueHealth · BCBS ASO arrangements",
          },
          {
            category: "Regional health plans (slowest · highest LTV)",
            examples:
              "HealthPartners · BCBS Massachusetts · BCBS Michigan · Geisinger · Highmark — before pursuing UnitedHealth, Aetna, Cigna, Humana",
          },
        ],
        antiProfile: [
          "Fully-insured small-group plans — low LTV per pilot, long sales cycles, gated by underwriting committees",
          "Fortune 100 with mature in-house digital health programs (they build, not buy)",
          "Organizations with no prior digital-health pilot experience — high risk of bureaucratic stall",
          "Plans or employers without accessible claims-data infrastructure — outcome metrics become unmeasurable",
        ],
        sourcing: [
          "Self-funded employer outreach: LinkedIn Sales Navigator filter — Title 'VP Benefits' OR 'Chief HR Officer' OR 'Head of Total Rewards'; 5K+ employees; recently active on chronic-care or wellness topics.",
          "TPA pitch: SIIA (Self-Insurance Institute of America) annual conference, direct CEO outreach, broker-led introductions, regional TPA association meetings.",
          "Health plan pitch: AHIP Institute, BCBSA National Conference, medical-director peer networks, alumni from Livongo/Omada now embedded at plans.",
          "Cross-channel multiplier: Mercer / Aon / WTW broker introductions concurrently to employers, TPAs, and plans — they're already doing the work, leverage it.",
        ],
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
    tier2: [
      {
        title: "Wellhub (formerly Gympass)",
        body: "Corporate wellness marketplace, ~15K corporate clients, actively expanding into chronic-disease management. ~20–40% rev share. Activates after 2–3 pilot wins + first peer-reviewed outcomes paper.",
      },
      {
        title: "Personify Health (Virgin Pulse)",
        body: "Employer + plan benefits platform, ~70M reachable lives. Marketplace shelf for chronic-care vendors. Same activation gates as Wellhub — outcomes data first, then onboard.",
      },
      {
        title: "Coaching network OEM",
        body: "White-label Vygor as the AI/clinical platform for Catalyst Health Coaching, Wellcoaches, or similar networks. Smaller TAM than direct-to-plan, but deeper integration and recurring per-coach licensing.",
      },
    ],
  },
];

export default function VentureTabs() {
  const [active, setActive] = useState(0);
  const v = ventureDetails[active];
  const a = accents[v.accent];

  return (
    <div>
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Venture detail tabs"
        className="flex flex-wrap gap-1 border-b border-white/[0.06]"
      >
        {ventureDetails.map((d, i) => {
          const isActive = i === active;
          const da = accents[d.accent];
          return (
            <button
              key={d.key}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActive(i)}
              className={`relative px-5 py-3 text-sm transition focus:outline-none ${
                isActive
                  ? "text-neutral-50"
                  : "text-neutral-500 hover:text-neutral-200"
              }`}
            >
              <span className="font-medium">{d.name}</span>
              <span
                className={`absolute -bottom-px left-3 right-3 h-0.5 transition ${
                  isActive ? da.underline : "bg-transparent"
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {/* Active venture content */}
      <div className="mt-12">
        <div className="mb-10 max-w-3xl">
          <div
            className={`font-mono text-[11px] uppercase tracking-[0.25em] ${a.text}`}
          >
            {v.framing}
          </div>
          <h3 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
            {v.name}
          </h3>
          <p className="mt-5 text-base leading-7 text-neutral-300 md:text-lg md:leading-8">
            {v.context}
          </p>

          {/* Average sales cycle — distinct prominent line */}
          <div
            className={`mt-6 flex flex-col gap-2 rounded-2xl border ${a.softBorder} ${a.softBg} p-4 sm:flex-row sm:items-center sm:gap-4`}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Avg sales cycle
            </span>
            <span className={`text-sm font-medium ${a.text}`}>
              {v.salesCycle}
            </span>
          </div>
        </div>

        <div className="space-y-5">
          {v.items.map((item) => (
            <PriorityCard key={item.rank} item={item} accent={v.accent} />
          ))}
        </div>

        {/* Tier 2 channels (renders only if defined) */}
        {v.tier2 && (
          <div className="mt-12 border-t border-white/[0.06] pt-10">
            <div
              className={`font-mono text-[11px] uppercase tracking-[0.25em] ${a.text}`}
            >
              / Tier 2 channels
            </div>
            <h4 className="mt-3 text-2xl font-medium tracking-tight text-neutral-50 md:text-3xl">
              Activates after PMF + outcomes data.
            </h4>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
              Distribution channels that depend on the top-3 already being in
              place. Layer in once 2–3 pilots have produced peer-reviewed
              outcomes.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {v.tier2.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5 transition hover:border-white/[0.18]"
                >
                  <h5 className="text-sm font-medium text-neutral-50">
                    {t.title}
                  </h5>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PriorityCard({ item, accent }: { item: GTMItem; accent: Accent }) {
  const a = accents[accent];
  const hasDeepDive =
    item.profile || item.archetypes || item.antiProfile || item.sourcing;

  return (
    <div
      className={`rounded-2xl border ${a.softBorder} ${a.softBg} p-6 md:p-8`}
    >
      {/* Header */}
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
          <h4 className="mt-1 text-xl font-medium tracking-tight text-neutral-50 md:text-2xl">
            {item.title}
          </h4>
        </div>
      </div>

      {/* Three-column overview */}
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
          <p className="mt-2 text-sm leading-6 text-neutral-300">{item.why}</p>
        </div>
      </div>

      {/* Deep dive (only when extra fields exist) */}
      {hasDeepDive && (
        <div className="mt-8 border-t border-white/[0.08] pt-7">
          <div
            className={`font-mono text-[10px] uppercase tracking-[0.25em] ${a.text}`}
          >
            / Deep dive
          </div>

          {/* Ideal profile */}
          {item.profile && (
            <div className="mt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Ideal partner profile
              </div>
              <ul className="mt-3 space-y-3">
                {item.profile.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-sm leading-6 text-neutral-300"
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold ${a.rankBg} ${a.rankText}`}
                    >
                      {i + 1}
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Archetypes */}
          {item.archetypes && (
            <div className="mt-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Concrete archetypes to target
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {item.archetypes.map((arch, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/[0.06] bg-[#0a0a0d] p-4"
                  >
                    <div className="text-xs text-neutral-400">
                      {arch.category}
                    </div>
                    <div
                      className={`mt-2 text-sm font-medium ${a.text}`}
                    >
                      {arch.examples}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Anti-profile + Sourcing side-by-side */}
          {(item.antiProfile || item.sourcing) && (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {item.antiProfile && (
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Anti-profile · skip these
                  </div>
                  <ul className="mt-3 space-y-2">
                    {item.antiProfile.map((p, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-6 text-neutral-400"
                      >
                        <span className="font-mono text-neutral-700">×</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {item.sourcing && (
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Practical sourcing
                  </div>
                  <ol className="mt-3 space-y-2">
                    {item.sourcing.map((p, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-6 text-neutral-300"
                      >
                        <span
                          className={`font-mono text-[11px] ${a.text}`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
