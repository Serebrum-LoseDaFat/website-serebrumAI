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

type Round = {
  stage: string;
  size: string;
  postMoney: string;
  use: string;
};

type InvestorTier = {
  tier: "Tier 1" | "Tier 2" | "Tier 3";
  segment: string;
  examples: string;
};

type VentureRaise = {
  key: string;
  name: string;
  framing: string;
  accent: Accent;
  context: string;
  rounds: Round[];
  warmCold: { warm: string; cold: string };
  investors: InvestorTier[];
  pitch: { oneLine: string; thirty: string; fiveMin: string };
  objections: { q: string; a: string }[];
  milestones: { round: string; gates: string[] }[];
};

const ventures: VentureRaise[] = [
  {
    key: "ts",
    name: "TokenSource",
    framing: "B2B SaaS · venture equity",
    accent: "cyan",
    context:
      "Generalist tier-1 VC track. The clearest fundable shape in the portfolio — software-lifecycle category, fast sales cycle, recognizable comps (Linear, Notion, Productboard). The studio's external valuation story leans on TokenSource closing a Series A first.",
    rounds: [
      {
        stage: "Pre-seed",
        size: "$0.5–1M",
        postMoney: "Studio-funded",
        use: "Founder + 2 engineers, first 5 charter customers, MVP.",
      },
      {
        stage: "Seed",
        size: "$5–8M",
        postMoney: "$25–40M post",
        use: "Scale eng to 10, hire head of product, expand charter customers to 25, build PLG free tier.",
      },
      {
        stage: "Series A",
        size: "$20–30M",
        postMoney: "$100–150M post",
        use: "First sales hires, expansion in mid-market, GTM team scaling.",
      },
    ],
    warmCold: {
      warm: "~30% reachable via studio + founder networks. Devtools/SaaS partner relationships at tier-1 funds; operator angels in Linear/Notion/Vercel orbit.",
      cold: "~70% requires intro work — content + Substack pieces are doing some of this lift, but most tier-1 partners need a 2nd-degree intro to take the meeting.",
    },
    investors: [
      {
        tier: "Tier 1",
        segment: "Generalist tier-1 with devtools/SaaS thesis",
        examples:
          "Sequoia · Index · Accel · Founders Fund · a16z (devtools) · Benchmark",
      },
      {
        tier: "Tier 2",
        segment: "Tier-1.5 generalist + strong product thesis",
        examples:
          "Greylock · USV · Bessemer · Lightspeed · Initialized · Bain Capital Ventures",
      },
      {
        tier: "Tier 3",
        segment: "Operator angels + emerging managers + strategic angels",
        examples:
          "Founders/eng leadership at Linear, Notion, Vercel, Anthropic · Cherry Ventures · BoxGroup · Untitled · Conviction (Sarah Guo)",
      },
    ],
    pitch: {
      oneLine:
        "AI-native execution for product teams — Linear for the AI era.",
      thirty:
        "The software lifecycle is fragmented across PM/eng/design tools, and AI just made building solutions cheap. We replace the fragmented stack with an AI-native execution layer that takes teams from raw user signal to shipped feature 30–50% faster. Charter customers are AI-product companies and modern dev-tools shops.",
      fiveMin:
        "Studio thesis (industries are artifacts of scarcity → AI-native systems replace operating models) + TokenSource as the obvious first venture (PM/eng workflows fragmented today, AI changes the substrate not just the surface) + charter-customer traction + the Apptio/Linear comparable trajectory + $30B+ category as foundation models commoditize point solutions.",
    },
    objections: [
      {
        q: "Why won't Linear / Notion / Productboard just add this?",
        a: "AI-native architecture, not retrofitted. Their data model is doc-and-issue-centric; ours is decision-centric. They'd have to rebuild the substrate to compete — at enterprise scale, that's a 3-year migration nobody does.",
      },
      {
        q: "AI tooling is saturated — every category has 50 startups.",
        a: "Tools are saturated; *lifecycle systems* aren't. We're not another writing assistant or copilot — we're the layer that connects user signal to shipped product. The category we're creating doesn't have an incumbent.",
      },
      {
        q: "How do you escape the 'feature' trap that Productboard hit?",
        a: "We don't sell roadmap visualization. We sell the decision layer underneath it — what to build, why, at what cadence. The data loop on actual product outcomes is what compounds.",
      },
    ],
    milestones: [
      {
        round: "→ Seed",
        gates: [
          "5 charter customers signed and live",
          "Public reference quotes from 3+",
          "Repeatable founder-led sales motion (10+ wins)",
          "$300K–$500K committed ARR or LOI value",
        ],
      },
      {
        round: "→ Series A",
        gates: [
          "$2M+ ARR",
          "20+ paying customers, healthy net retention",
          "Demonstrated PLG self-serve unit economics",
          "Repeat purchase data showing AI-native lifecycle thesis",
        ],
      },
    ],
  },
  {
    key: "fs",
    name: "FedStat",
    framing: "Enterprise IT + federal · venture equity + non-dilutive",
    accent: "amber",
    context:
      "Generalist enterprise SaaS + sector-specialist VC track. Clear comp (Apptio's $4.6B IBM acquisition in 2023). Federal contracting is a parallel non-dilutive revenue track. Sales cycles are longer than TokenSource, so capital efficiency matters.",
    rounds: [
      {
        stage: "Pre-seed",
        size: "$0.5–1M",
        postMoney: "Studio-funded",
        use: "Founder + 2 engineers + 1 sr enterprise SE, first 3 enterprise pilots.",
      },
      {
        stage: "Seed",
        size: "$5–8M",
        postMoney: "$25–35M post",
        use: "Scale eng + 1 enterprise AE, GSA Schedule 70 application, FedRAMP Moderate kickoff.",
      },
      {
        stage: "Series A",
        size: "$20–30M",
        postMoney: "$100–150M post",
        use: "AE team to 5, FedRAMP completion, federal sales lead, Big Four advisory partnerships.",
      },
    ],
    warmCold: {
      warm: "~25% reachable. Enterprise-SaaS-focused VCs are a small set; founder + studio CIO network gets you intros. Apptio alumni angels are a defined pool.",
      cold: "~75% needs cold work or warm intros. Sector specialists for IT-FM are particularly small in number; brand+content lifts conversion meaningfully.",
    },
    investors: [
      {
        tier: "Tier 1",
        segment: "Enterprise SaaS + IT-FM specialist VCs",
        examples:
          "Bessemer · Insight Partners · Battery Ventures · Iconiq Growth · Glynn Capital · Alkeon",
      },
      {
        tier: "Tier 2",
        segment: "Generalist tier-1/2 with enterprise thesis",
        examples:
          "Sequoia · Lightspeed · NEA · Norwest · Scale · Spark Capital",
      },
      {
        tier: "Tier 3",
        segment: "Operator angels + strategics + corporate VC",
        examples:
          "Apptio alumni · ServiceNow / IBM / Microsoft / Workday corporate VC · Deloitte / EY / PwC innovation arms",
      },
    ],
    pitch: {
      oneLine:
        "AI-native technology investment management — Apptio for the AI era.",
      thirty:
        "IBM paid $4.6B for Apptio in 2023 — proof that enterprises pay for IT financial visibility. The product was built pre-AI as dashboards on top of fragmented data. We're rebuilding the category — AI-native portfolio management, capex decisioning, app rationalization, goal tracking — for Fortune 1000 and federal. From reporting to decisioning.",
      fiveMin:
        "Studio thesis + Apptio's $4.6B exit validates the market + IBM's legacy architecture leaves the AI-native opportunity wide open + $110B/yr federal IT spend as parallel TAM + 9–18 month sales cycle is the moat (defensible once landed) + early enterprise pilots producing measurable spend optimization.",
    },
    objections: [
      {
        q: "IBM already owns Apptio — why does the world need another TBM tool?",
        a: "Legacy architecture, integration paralysis under Big Blue. Enterprise CIOs we've talked to want AI-native rebuild, not Apptio-2.0. The 15-year-old TBM category runs on dashboards; AI moves it from reporting to decisioning. That's a different product, not a feature update.",
      },
      {
        q: "Long enterprise sales cycles will burn cash before you scale.",
        a: "Federal contracting is non-dilutive revenue — GSA Schedule 70 + agency wins fund the runway gap. Plus the long cycle is the moat: once a CIO commits, switching cost is enormous.",
      },
      {
        q: "Why now — TBM has been a category for 15 years.",
        a: "Two reasons. AI now makes continuous decisioning possible (TBM 1.0 was quarterly reports). And the IBM acquisition consolidated the incumbent, creating an AI-native opening that didn't exist before.",
      },
    ],
    milestones: [
      {
        round: "→ Seed",
        gates: [
          "3 paid enterprise pilots (each Fortune 1000)",
          "1 federal-aligned design partner (preferably TMF-funded agency)",
          "GSA Schedule 70 application submitted",
          "$500K+ pilot revenue",
        ],
      },
      {
        round: "→ Series A",
        gates: [
          "$1.5M+ ARR",
          "5+ enterprise customers",
          "$5M+ qualified pipeline",
          "FedRAMP Moderate authorization in progress",
          "1 Big Four advisory partnership signed",
        ],
      },
    ],
  },
  {
    key: "as",
    name: "AlphaSigma",
    framing: "Fund management · LP commitments + mgmt-co equity",
    accent: "violet",
    context:
      "Two parallel raises: a small management-company seed (operating capital for fund formation, GP comp during deployment) and the much larger Fund I LP raise (the actual fund capital). Mgmt-co economics scale with AUM, not with venture multiples — different math, different investor pool.",
    rounds: [
      {
        stage: "Mgmt-co pre-seed",
        size: "$0.5M",
        postMoney: "Studio-funded",
        use: "GP comp, fund formation legal, audit/admin setup, initial back-test infrastructure.",
      },
      {
        stage: "Mgmt-co seed",
        size: "$2–3M",
        postMoney: "$10–15M post",
        use: "Quant team, operations, compliance, year-1 ops while Fund I deploys.",
      },
      {
        stage: "Fund I (LP capital)",
        size: "$25–50M",
        postMoney: "Fund AUM",
        use: "Deploy AI-native absolute return strategy. Mgmt fee + carry feed mgmt-co.",
      },
      {
        stage: "Mgmt-co Series A",
        size: "$5–10M",
        postMoney: "$30–60M post",
        use: "Triggered post Fund II close. Scale infrastructure, second strategy, distribution.",
      },
    ],
    warmCold: {
      warm: "~40% of LP target list reachable through GP's prior firm relationships + studio LPs + family-office co-investor circles. Mgmt-co seed is mostly warm (small group of strategic LPs).",
      cold: "~60% of LP universe requires cap-intro events or cold pitch. Prime brokers (GS/MS/JPM cap-intro) become a force multiplier 6 months in.",
    },
    investors: [
      {
        tier: "Tier 1",
        segment: "Anchor LPs (Fund I lead checks)",
        examples:
          "Family offices with absolute-return mandates ($100M–$1B AUM) · Single-family-office consortiums · 2–3 strategic LPs at $5–10M each",
      },
      {
        tier: "Tier 2",
        segment: "Cap-intro pipeline + boutique allocators",
        examples:
          "Goldman Sachs · Morgan Stanley · J.P. Morgan cap-intro · Citi · UBS · Jefferies (mid-market) · Boutique fund-of-funds with first-time slots",
      },
      {
        tier: "Tier 3",
        segment: "Mgmt-co seed equity (different from LP capital)",
        examples:
          "Specialized fintech/quant VCs (Nyca, Ribbit) · Strategic LPs taking dual position · Operator angels from Renaissance, Two Sigma, Citadel alumni",
      },
    ],
    pitch: {
      oneLine:
        "AI-native absolute return — quant systematic strategy with AI execution at every layer.",
      thirty:
        "Multi-strategy hedge funds today run on humans + Excel. Renaissance and Two Sigma proved systematic strategies generate alpha; we're applying that approach to a broader market with an AI-first execution stack — signal generation, portfolio construction, risk overlay, and rebalancing all AI-native. Smaller AUM, sharper alpha, transparent process.",
      fiveMin:
        "Strategy thesis + back-test results (multi-year) + GP track record + AI-native architecture (not retrofitted to existing fund) + risk framework + GP capital aligned + transparent reporting + studio operating leverage (shared intelligence layer across Serebrum portfolio).",
    },
    objections: [
      {
        q: "First-time fund manager risk.",
        a: "GP track record from prior firm + advisory board of recognized allocators + audit-grade transparency from day one + GP capital aligned (significant personal stake). Fund I size kept deliberately small to manage that risk.",
      },
      {
        q: "Why not Two Sigma / Renaissance scale?",
        a: "We're not aiming for scale — we're aiming for sharper alpha at smaller AUM. Capacity constraints in our strategies make $25–50M Fund I optimal. Big quant funds compete in the same crowded factors; we operate where they can't deploy meaningful capital.",
      },
      {
        q: "AI-native is a buzzword — what's actually different?",
        a: "Three things: signal generation runs on foundation models (not just statistical models); portfolio construction adapts in real time using continuous decisioning (not quarterly rebalances); risk monitoring is per-trade (not VaR snapshots). Each of those changes the strategy's behavior in measurable ways.",
      },
    ],
    milestones: [
      {
        round: "→ Mgmt-co seed",
        gates: [
          "Strategy back-test signed off by independent advisor",
          "GP team finalized (PM + quant + ops)",
          "Audit + admin partners selected",
          "1–2 anchor LP soft commitments at $5M+",
        ],
      },
      {
        round: "→ Fund I close",
        gates: [
          "$25M+ in hard LP commitments",
          "Operating infrastructure live (custody, prime, admin, compliance)",
          "Live track record minimum 3 months on GP capital",
        ],
      },
      {
        round: "→ Mgmt-co Series A",
        gates: [
          "Fund I 90%+ deployed",
          "12-month live track record with target Sharpe achieved",
          "Fund II soft commitments exceed Fund I size",
        ],
      },
    ],
  },
  {
    key: "vg",
    name: "Vygor AI",
    framing: "Healthcare · venture equity (specialist) + non-dilutive grants",
    accent: "emerald",
    context:
      "Healthtech-specialist VC track. Long sales cycle and clinical-evidence requirement mean Series A milestones look different from TokenSource — clinical pilots and outcomes data, not ARR. Capital efficiency matters because the path to revenue is 12–24 months from pilot start.",
    rounds: [
      {
        stage: "Pre-seed",
        size: "$0.5–1M",
        postMoney: "Studio-funded",
        use: "Clinical advisor + lead clinician + 2 engineers, 1–2 pilot LOIs.",
      },
      {
        stage: "Seed",
        size: "$4–6M",
        postMoney: "$20–30M post",
        use: "Pilot infrastructure, clinical operations, first 2–3 active pilots, RCT design.",
      },
      {
        stage: "Series A",
        size: "$15–20M",
        postMoney: "$60–100M post",
        use: "Commercial sales hires, broker relationships, regulatory infrastructure, RCT execution.",
      },
    ],
    warmCold: {
      warm: "~35% reachable. Healthtech specialists are a small known set, mostly relationship-driven. Livongo/Omada alumni angels reachable through 2nd-degree.",
      cold: "~65% requires cold or warm-intro work. Health-system-affiliated funds are particularly hard to reach without insider relationships.",
    },
    investors: [
      {
        tier: "Tier 1",
        segment: "Healthtech specialist VCs",
        examples:
          "General Catalyst Health Assurance · Oak HC/FT · 7wireVentures · Define Ventures · Healthier Capital · Optum Ventures",
      },
      {
        tier: "Tier 2",
        segment: "Generalist tier-1 with health practice",
        examples:
          "a16z Bio + Health · Andreessen Horowitz · Khosla Ventures · Lux Capital · Founders Fund (health team) · F-Prime",
      },
      {
        tier: "Tier 3",
        segment: "Strategic health-system funds + operator angels",
        examples:
          "Highmark Ventures · Providence Ventures · Kaiser Permanente Ventures · Atrium Health Ventures · Livongo/Omada/Calibrate alumni angels",
      },
    ],
    pitch: {
      oneLine: "Continuous AI care for chronic disease — Livongo on AI.",
      thirty:
        "Livongo proved health plans pay $18.5B for chronic disease management. Their model was wearable + human coach. Ours is wearable + AI coach + clinician oversight, with fundamentally different unit economics — 3–5x cheaper per member, 2–3x engagement, measurable HbA1c reduction. Buyers are health plans, self-funded employers, and TPAs.",
      fiveMin:
        "Studio thesis + Livongo $18.5B exit as comp + AI-native cost structure (10x engagement at fraction of human-coach cost) + multi-buyer channel strategy (plans + employers + TPAs in parallel) + clinical-evidence path (peer-reviewed outcomes within 18 months) + GLP-1 tailwind (every GLP-1 patient needs behavior support).",
    },
    objections: [
      {
        q: "Healthcare is hard. Sales cycles will eat the runway.",
        a: "We're staffing healthcare operators from day one — clinical lead + payer-relationships VP. Sales cycle is baked into the plan: pilots Q1, outcomes Q3, commercial contracts Q4. Self-funded employer pilots close 6–9 months, not 24, which de-risks the cash burn.",
      },
      {
        q: "GLP-1s are eating the obesity market — won't they obsolete you?",
        a: "GLP-1s solve weight loss. They don't solve adherence, T2D management, behavior change, lifestyle modification. Vygor is the layer GLP-1 patients use to *succeed* with the drug. We're a tailwind beneficiary, not a casualty.",
      },
      {
        q: "Calibrate, Noom, Found struggled. Why are you different?",
        a: "Those went D2C. We're B2B2C through health plans, employers, and TPAs with outcomes-based contracts. The unit economics are completely different — they paid CAC to acquire individuals; we get distribution through buyers who already cover the population.",
      },
    ],
    milestones: [
      {
        round: "→ Seed",
        gates: [
          "2–3 pilot LOIs signed (mix of self-funded employer + regional plan)",
          "Lead clinician hired (board-cert endocrinology or obesity medicine)",
          "Clinical advisory board formed (3+ recognized PIs)",
        ],
      },
      {
        round: "→ Series A",
        gates: [
          "1+ commercial contract signed",
          "First peer-reviewed outcomes paper accepted (or in late review)",
          "Measurable HbA1c reduction in pilot population (>0.5 points)",
          "Pipeline of 5+ health-plan / TPA conversations at advanced stage",
        ],
      },
    ],
  },
];

export default function RaiseTabs() {
  const [active, setActive] = useState(0);
  const v = ventures[active];
  const a = accents[v.accent];

  return (
    <div>
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Per-venture raise plan tabs"
        className="flex flex-wrap gap-1 border-b border-white/[0.06]"
      >
        {ventures.map((d, i) => {
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
        </div>

        {/* Round structure */}
        <div className="mb-12">
          <div
            className={`mb-5 font-mono text-[10px] uppercase tracking-[0.25em] ${a.text}`}
          >
            / Round structure
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0a0a0d]">
            <table className="w-full min-w-[680px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Stage
                  </th>
                  <th className="px-3 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Size
                  </th>
                  <th className="px-3 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Valuation
                  </th>
                  <th className="px-3 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Use of funds
                  </th>
                </tr>
              </thead>
              <tbody>
                {v.rounds.map((r) => (
                  <tr
                    key={r.stage}
                    className="border-b border-white/[0.04] last:border-0"
                  >
                    <td className="px-5 py-4 align-top">
                      <div className="text-sm font-medium text-neutral-50">
                        {r.stage}
                      </div>
                    </td>
                    <td className="px-3 py-4 align-top">
                      <span className={`font-serif text-lg ${a.text}`}>
                        {r.size}
                      </span>
                    </td>
                    <td className="px-3 py-4 align-top text-xs text-neutral-400">
                      {r.postMoney}
                    </td>
                    <td className="px-3 py-4 align-top text-sm leading-6 text-neutral-300">
                      {r.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Warm vs cold */}
        <div className="mb-12 grid gap-4 md:grid-cols-2">
          <div
            className={`rounded-2xl border ${a.softBorder} ${a.softBg} p-6`}
          >
            <div
              className={`font-mono text-[10px] uppercase tracking-[0.2em] ${a.text}`}
            >
              Warm reach
            </div>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              {v.warmCold.warm}
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Cold reach
            </div>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              {v.warmCold.cold}
            </p>
          </div>
        </div>

        {/* Investor segments */}
        <div className="mb-12">
          <div
            className={`mb-5 font-mono text-[10px] uppercase tracking-[0.25em] ${a.text}`}
          >
            / Investor segments
          </div>
          <div className="space-y-3">
            {v.investors.map((it) => (
              <div
                key={it.tier}
                className="grid grid-cols-12 gap-4 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5"
              >
                <div className="col-span-12 md:col-span-2">
                  <span
                    className={`inline-flex items-center rounded-full border ${a.softBorder} ${a.softBg} px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${a.text}`}
                  >
                    {it.tier}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="text-sm text-neutral-300">{it.segment}</div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="text-sm text-neutral-100">{it.examples}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch narratives */}
        <div className="mb-12">
          <div
            className={`mb-5 font-mono text-[10px] uppercase tracking-[0.25em] ${a.text}`}
          >
            / Pitch narratives
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                One line
              </div>
              <p className="mt-3 font-serif text-lg italic leading-snug text-neutral-50">
                {v.pitch.oneLine}
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                30-second elevator
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                {v.pitch.thirty}
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                5-minute frame
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                {v.pitch.fiveMin}
              </p>
            </div>
          </div>
        </div>

        {/* Objections */}
        <div className="mb-12">
          <div
            className={`mb-5 font-mono text-[10px] uppercase tracking-[0.25em] ${a.text}`}
          >
            / Common objections + responses
          </div>
          <div className="space-y-4">
            {v.objections.map((o, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold ${a.rankBg} ${a.rankText}`}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium text-neutral-100">
                    {o.q}
                  </p>
                </div>
                <p className="mt-3 ml-9 text-sm leading-6 text-neutral-300">
                  → {o.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div>
          <div
            className={`mb-5 font-mono text-[10px] uppercase tracking-[0.25em] ${a.text}`}
          >
            / Milestones triggering next round
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {v.milestones.map((m) => (
              <div
                key={m.round}
                className={`rounded-2xl border ${a.softBorder} ${a.softBg} p-5`}
              >
                <div
                  className={`font-mono text-[10px] uppercase tracking-[0.2em] ${a.text}`}
                >
                  {m.round}
                </div>
                <ul className="mt-4 space-y-2">
                  {m.gates.map((g, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-6 text-neutral-300"
                    >
                      <span className={`font-mono text-xs ${a.text}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
