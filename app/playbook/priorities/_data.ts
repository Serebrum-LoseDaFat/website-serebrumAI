// Shared data for the priorities page and interactive matrix.
// Underscore prefix so Next.js doesn't treat it as a route.

// ============================================================
// Axes
// ============================================================
export type TimeBucket = "<1yr" | "1–2yr" | ">2yr";
export type SizeBucket = ">$500M" | "$50M–$500M" | "<$50M";
export type Conviction = "low" | "med" | "high";
export type Accent = "cyan" | "amber" | "violet" | "emerald";

export const timeBuckets: TimeBucket[] = ["<1yr", "1–2yr", ">2yr"];
export const sizeBuckets: SizeBucket[] = [">$500M", "$50M–$500M", "<$50M"];

export type CellMeta = {
  label: string;
  blurb: string;
  weight: 0 | 1 | 2 | 3 | 4;
};

export const cellMeta: Record<SizeBucket, Record<TimeBucket, CellMeta>> = {
  ">$500M": {
    "<1yr": {
      label: "Build now · flagship",
      blurb:
        "Top of the studio. Big outcome, fast clock — anchors the external pitch and the raise.",
      weight: 4,
    },
    "1–2yr": {
      label: "Build now · long arc",
      blurb:
        "Same outcome ceiling, longer climb. Capital-efficient sequencing matters; pair with a faster venture.",
      weight: 3,
    },
    ">2yr": {
      label: "Long-arc bet",
      blurb:
        "Asymmetric upside but multi-year proof curve. Fund only with conviction and a phased capital plan.",
      weight: 2,
    },
  },
  "$50M–$500M": {
    "<1yr": {
      label: "Cash-flow play",
      blurb:
        "Quick traction, real outcome — useful as a working-capital engine that funds bigger bets.",
      weight: 3,
    },
    "1–2yr": {
      label: "Steady build",
      blurb:
        "The most common bucket. Worth doing if conviction is high; otherwise sequence behind the flagship.",
      weight: 2,
    },
    ">2yr": {
      label: "Defer or partner",
      blurb:
        "Mid outcome with a long clock is the worst capital ratio in this matrix. Partner, license, or skip.",
      weight: 1,
    },
  },
  "<$50M": {
    "<1yr": {
      label: "Quick win, low ceiling",
      blurb:
        "Fast revenue but a small ceiling. Only pursue if it's a wedge into a bigger arc.",
      weight: 2,
    },
    "1–2yr": {
      label: "Skip",
      blurb:
        "Small outcome, slow clock — nothing here a studio should burn cycles on.",
      weight: 0,
    },
    ">2yr": {
      label: "No",
      blurb:
        "Worst quadrant. Long clock, small outcome — a feature, not a company.",
      weight: 0,
    },
  },
};

// GTM motion
export type Motion = "PLG" | "Hybrid" | "Enterprise" | "Services" | "B2C" | "Fund";

// ============================================================
// Maturity + Traction — used by the interactive slider model
// ============================================================
export type Maturity = "Idea" | "Alpha" | "Beta" | "Delta" | "Customer";
export type Traction = 0 | 1 | 10 | 100;

export const maturityLevels: Maturity[] = ["Idea", "Alpha", "Beta", "Delta", "Customer"];
export const tractionLevels: Traction[] = [0, 1, 10, 100];

export const maturityScore: Record<Maturity, number> = {
  Idea: 0,
  Alpha: 1,
  Beta: 2,
  Delta: 3,
  Customer: 4,
};

export const tractionScore: Record<Traction, number> = {
  0: 0,
  1: 1,
  10: 2,
  100: 3,
};

// Letter glyph shown on chips
export const maturityGlyph: Record<Maturity, string> = {
  Idea: "i",
  Alpha: "α",
  Beta: "β",
  Delta: "δ",
  Customer: "C",
};

// ============================================================
// Ventures (real, currently in flight)
// ============================================================
export type Venture = {
  name: string;
  framing: string;
  accent: Accent;
  size: SizeBucket;
  time: TimeBucket;
  conviction: Conviction;
  motion: Motion;
  note: string;
};

export const ventures: Venture[] = [
  {
    name: "TokenSource",
    framing: "AI-native software lifecycle",
    accent: "cyan",
    size: ">$500M",
    time: "<1yr",
    conviction: "high",
    motion: "Hybrid",
    note: "Fast sales cycle, generalist VC fundability, replacement story for fragmented PM tools.",
  },
  {
    name: "AlphaSigma",
    framing: "AI-native fund management",
    accent: "violet",
    size: ">$500M",
    time: "<1yr",
    conviction: "med",
    motion: "Fund",
    note: "Mgmt fee + carry on Fund I. Fast to first revenue once Fund I closes; LP-dependent path.",
  },
  {
    name: "FedStat",
    framing: "AI-native technology business mgmt",
    accent: "amber",
    size: ">$500M",
    time: "1–2yr",
    conviction: "high",
    motion: "Enterprise",
    note: "Apptio-style comp ($4.6B exit). Long enterprise cycles offset by clear buyer and procurement-heavy moat.",
  },
  {
    name: "Vygor AI",
    framing: "AI-native chronic-care system",
    accent: "emerald",
    size: ">$500M",
    time: ">2yr",
    conviction: "med",
    motion: "Enterprise",
    note: "Health-plan and employer sales cycle. Massive ceiling, slow proof curve — phase capital with pilots.",
  },
  {
    name: "MetabolIQ",
    framing: "AI-native personal HealthOS",
    accent: "violet",
    size: ">$500M",
    time: ">2yr",
    conviction: "med",
    motion: "B2C",
    note: "Consumer HealthOS for chronic condition management — AI breaks down complex medical info into user-controlled daily guidance ('my health, my way'). 60%+ of Americans have at least one chronic condition; no consumer product owns this navigation layer. Vygor distributes into health plans and employers from the B2B side; MetabolIQ attacks the same chronic-disease wedge direct-to-patient. Slow proof curve: trust, HIPAA compliance, and clinical credibility required before scaling. Phase capital with Vygor's employer/health-plan channel relationships.",
  },
  {
    name: "Rattlebox",
    framing: "AI-native developer screening",
    accent: "cyan",
    size: "$50M–$500M",
    time: "1–2yr",
    conviction: "med",
    motion: "Hybrid",
    note: "AI coding test engine for companies screening developers on AI-native engineering skills — Copilot proficiency, prompt engineering, AI-assisted architecture, agentic workflow design. HackerRank/Codility test traditional coding; no product assesses AI-native fluency. Every engineering team is now hiring for these skills without a reliable signal. Interactive AI-coding education layer follows (creates moat and expands TAM beyond assessment). B2B buyer is VP Engineering / Head of Talent — short sales cycle. TokenSource distribution wedge: same engineering-leadership buyer orbit.",
  },
];

// ============================================================
// Candidate ideas — speculative, matrix-only
// ============================================================
export type Idea = {
  name: string;
  size: SizeBucket;
  time: TimeBucket;
  conviction: Conviction;
  motion: Motion;
  rationale: string;
};

export const ideas: Idea[] = [
  {
    name: "MatchMD Programs",
    size: "$50M–$500M",
    time: "<1yr",
    conviction: "med",
    motion: "Enterprise",
    rationale:
      "AI ops platform for residency program directors and coordinators — application screening, AI-driven ranking against program-specific criteria, interview-question drafting from CV/PS, candidate summarization for IC review, offer/rejection comms automation. Reframed from B2C student app to B2B program-side after it became clear the student side caps low. Buyer pain is acute and current: 4,800+ US residency programs screen 200–500 applications per slot in a 6-week window; program directors are drowning in manual review, spreadsheets, ad-hoc rubrics. Existing tools (Thalamus for scheduling, CareerMD for outreach, Doximity Residency Tools) are workflow-narrow — none own AI screening + ranking + comms. Buyer = paid, frustrated, has annual budget allocated. ACV $5–25K/program; 100 programs × $10K = $1M ARR. Sales cycle 3–6 mo (annual budget, simpler than enterprise). Ceiling: 4,800 programs × ~$8K avg ≈ $30–40M just on residency; +30–40% with fellowships (~1,000) and DO programs; B2B layer to med schools and IMGs adds more. Realistic ceiling $50–150M ARR. AI-native angle is genuine — program-specific ranking/scoring is exactly an LLM-shaped problem, not bolted-on. Critical insight: program-side adoption creates a two-sided wedge — programs onboard → students sign up free to track their apps → applicant data graph forms → more programs join (AngelList playbook: paid B2B side → free liquidity layer → flywheel). Time to $1M ARR: 6–12 mo with focused B2B execution. Med conviction: clear ICP, urgent budgeted pain, ROI story is concrete (200 hours of screening → 20), defensible workflow integration.",
  },
  {
    name: "MatchMD Students",
    size: "<$50M",
    time: "1–2yr",
    conviction: "low",
    motion: "B2C",
    rationale:
      "Consumer-facing app for med students applying to residency — strategic advisory layer (where to apply, PS editing, ranking help). Standalone read, NOT including the program-side B2B (that's MatchMD Programs). Match algorithm is owned by NRMP; ERAS owns applications — so this can only be advisory, not the match itself. Annual cycle (Aug–Feb buying window) makes <1yr to $1M ARR nearly impossible — one shot per cohort. ~70–80K applicants × $150 ARPU × 1–3% Y1 conversion ≈ $100–315K; $1M lands year 2–3. Realistic ceiling $20–50M. Med students are price-sensitive ($300K debt), use free incumbents (Reddit, Discord, school advisors), and churn after one cycle. Standalone B2C this is a feature, not a venture. ONLY worth running if (a) coupled to MatchMD Programs as the free liquidity layer that creates the two-sided wedge, or (b) wedge into a broader AI-native physician career platform (residents → fellows → attendings → ~$500M+ ceiling, but >2yr / low conviction). The matrix's 'Skip' cell is honest if standalone; together with MatchMD Programs the combined picture is much stronger.",
  },
  {
    name: "RelayCall",
    size: "$50M–$500M",
    time: ">2yr",
    conviction: "low",
    motion: "Hybrid",
    rationale:
      "Zoom-like video calling using P2P mesh with server fallback. Mesh + SFU fallback is well-known WebRTC architecture, not a moat — it's why Zoom/Teams/Meet all run SFU-mediated (mesh degrades past 4–5 participants because residential upload is asymmetric, O(N²) bandwidth at the peer). Server-cost savings is real engineering but not a buyer-felt pain — enterprises pay $15–25/user/mo and don't blink. Zoom's actual moat is IT-procurement entrenchment (SSO/SCIM/HIPAA/FedRAMP) and scheduled-meeting network effects; top 5 vendors own >85% of the $15B market. Possible reframings: (a) Twilio Video competitor as a dev API — crowded (Daily.co, Agora, LiveKit), ceiling ~$50–100M; (b) privacy/compliance vertical (depositions, telehealth, gov) — niche; (c) privacy-first consumer — no economics. AI-native angle is unclear; mesh is an infra choice, not an AI thesis. Doesn't fit the SerebrumAI replacement story cleanly.",
  },
  {
    name: "BuddhaEngine",
    size: "$50M–$500M",
    time: ">2yr",
    conviction: "low",
    motion: "B2C",
    rationale:
      "AI-assembled on-demand courses from web/YouTube content + creator marketplace (Udemy-like). Crowded space — Khanmigo, Coursera Coach, Coursebox.ai, Mindsmith, EdApp, plus 100K+ educational Custom GPTs and any weekend dev with ChatGPT + YT embeds. Barrier to entry is hours, not months. Hard problems: (1) YouTube TOS / DMCA risk — assembling courses from creator content bypasses YT ad funnel and invites takedowns; web scraping + LLM is the NYT-vs-OpenAI question. (2) Quality — AI-stitched content lacks pedagogical arc; Udemy works because instructors structure narrative. (3) Trust — buyers pay for accreditation signal. (4) Marketplace liquidity — Udemy took ~10 years; their SEO + 65M-learner distribution is uncrackable head-on. Incumbent ceilings: Udemy ~$770M, Coursera ~$700M; AI-native challengers at single-digit-millions after years. Realistic angles: corporate L&D vertical (~$50–150M ceiling) or bounded-IP exam prep (PMP/CFA/USMLE, ~$30–100M). Neither replaces Udemy; neither hits >$500M. Marketplace component drags time-to-revenue to >2yr. AI-native fit is weak — education isn't a broken legacy operating model, it's a crowded but functional market.",
  },
  {
    name: "VentureStat",
    size: "$50M–$500M",
    time: ">2yr",
    conviction: "low",
    motion: "Enterprise",
    rationale:
      "GTM operating system for startups — OKR + marketing + fundraising bundled. The 'OS for startups' pitch has been tried ~50 times; almost all failed. Founders use 8–10 best-of-breed tools (Notion, Linear, Carta, HubSpot, Mercury) because each focused player beats a generalist, free tiers are abundant, and switching cost is low. Vertical incumbents are deep: Lattice (~$100M+) in OKR, HubSpot in SMB marketing, Carta (~$400M) in cap table, Pry/Mosaic/Finmark in financial planning. Startup ICP is brutal — tiny ACV ($10–100/mo), high churn (most die in 18 months), price-sensitive, default to free. SaaS is in an unbundling cycle for SMB tools; all-in-one only wins at enterprise scale. OKR / marketing / fundraising have different buyers (CEO / marketing lead / finance) — bundling = worse than focused in each. AI features in every category are already commodity. Product surface is enormous; building competitive coverage takes years. Better reframings: (a) Stripe-Atlas-style incorporation+bank+cap-table+AI-CFO bundle — but Brex/Mercury already there with distribution moat; (b) AI-native investor relations — niche, ~$30–80M ceiling; (c) studio-specific tools — TAM ~50–100 studios, ceiling <$10M. None replaces the all-in-one ambition. Realistic ceiling at the optimistic end: $50–200M; more likely $20–80M.",
  },
  {
    name: "ActionItems",
    size: "<$50M",
    time: ">2yr",
    conviction: "low",
    motion: "B2C",
    rationale:
      "Personal task list with kanban + list views, Todoist-like. The most saturated, commoditized software category that exists. Todoist itself reached ~$50M ARR after 17 years with 30M users. Things 3, TickTick, Any.do — each $10–20M after ~10 years. Free defaults (Apple Reminders, Google Tasks, Microsoft To Do, Notion) cover ~95% of users at $0 and are pre-installed. Kanban + list views = weekend project; the category has been re-skinned 100 times in 10 years with no real differentiation. B2C unit economics brutal: $3–5/mo ARPU, CAC >$30 via paid, 12-month average life ($60 LTV) — breaks without organic growth, and organic is captured. Zero network effects, zero switching cost (users churn every 6–12 months chasing a feeling). AI angle is commodity (Motion, Reclaim, Notion AI all shipped it). Total paid task-management market is ~$500M–$1B globally; top 5 own >70%. Realistic ceiling for a new entrant: $5–20M ARR, almost certainly <$50M. Most apps in this space never reach $1M ARR. Zero thesis fit — Todoist isn't a broken legacy operating model. Feature, not a venture. Weekend project, not a company. The matrix's 'No' cell (worst quadrant) is doing its job here.",
  },
  {
    name: "AlphaSigma Research",
    size: "$50M–$500M",
    time: "1–2yr",
    conviction: "med",
    motion: "Enterprise",
    rationale:
      "Institutional-grade AI investment research — sold to funds, family offices, and professional allocators. NOTE: distinct from AlphaSigma fund management co, but shares the brand. Reframed to institutional-only (consumer side dropped) — that removes the dual-ICP problem and most of the regulatory drag. Market is real and growing — AlphaSense (~$200M ARR, IPO-track), Hebbia ($130M Series B), Brightwave, Boosted.ai (~$30M), Tegus (acquired by AlphaSense). Buyer = institutional research head / PM / analyst; ACV $50K–$250K typical. Real edge here that other research startups don't have: (1) AlphaSigma fund is a credible seed customer + reference account from day one; (2) LP network = warm-intro pipeline to other institutional buyers; (3) the fund's actual workflow informs product faster than competitors guessing. Risks: still crowded space; AI research becoming commodity (Claude/ChatGPT/Gemini Deep Research read 10-Ks for free) — differentiator must be proprietary data, workflow integration, or distribution. Brand entanglement with the fund still requires careful regulatory framing (research arm cannot front-run fund trades; clear separation of business activities required). Time to $1M ARR: 12–18 months with focused B2B sales — ~10–20 institutional clients at $50–100K each. Ceiling: $50–300M ARR (AlphaSense at ~$200M is the comp). Med conviction because the wedge is real, the ICP is clear, and revenue path is concrete. Most defensible of the speculative ideas on the matrix.",
  },
  {
    name: "VentureStat VC",
    size: "$50M–$500M",
    time: "1–2yr",
    conviction: "med",
    motion: "Enterprise",
    rationale:
      "Software for VCs — deal flow, investments, risk, returns. Sister product to FedStat (both 'Stat' = portfolio/investment management). Heavily consolidated stack: Affinity (~$100M, deal CRM, dominant), Carta (~$400M, cap table + portfolio, network effect via founder-side adoption), PitchBook ($400M+ data), CB Insights (~$100M), Juniper Square (~$50M LP relations), AngelList Stack (~$100M), Visible.vc, Standard Metrics, Tactyc (Carta acquired). AI deal sourcing entrants: Harmonic, Specter, Tracxn — generic AI doesn't differentiate anymore. TAM: ~10,000 firms globally × ~$50K avg software spend ≈ $500M total; top 5 capture 50–70%; new entrant caps ~$30–80M unless niche carved. Hard: VC firms are sophisticated, slow buyers (6–12 mo cycles, partner consensus); switching CRM mid-fund is brutal; Carta's founder-side network effect is real. Real edges that distinguish from other speculative ideas: (1) SerebrumAI distribution wedge — actual VC relationships (LPs, co-investors, advisors) = 12–18 month head start vs. cold-start founder; (2) studio operators see VC ops from both sides — credibility on workflow problems; (3) AI-native angle is genuine here, not bolted-on — LP reporting auto-generation, deal scoring with reasoning chains, portfolio risk models, IC memo synthesis are real LLM-shaped problems; (4) brand consistency with FedStat. Likely niches: emerging managers (~3,000 globally, underserved by Carta's enterprise tier), risk + return analytics for Series A–C funds (replace Excel Monte Carlo / J-curve models), all-in-one for sub-$100M funds. Time to $1M ARR: 12–18 mo with SerebrumAI network warm-intros (20–40 customers at $25–50K ACV). Ceiling: $50–150M plausible if niche carved; head-on with Affinity+Carta is $30–80M. Med conviction — same reason as AlphaSigma Research: distribution wedge is real and AI-native angle is genuine.",
  },
  {
    name: "Cognomix",
    size: ">$500M",
    time: "1–2yr",
    conviction: "high",
    motion: "Hybrid",
    rationale:
      "FinOps for AI — track and optimize enterprise spend on AI models and infra. The strongest speculative idea proposed so far. Cloud FinOps is the canonical analog: Apptio sold to IBM for $4.6B (2023); Flexera ~$200M+ ARR; CloudHealth (VMware) major; CloudCheckr ~$50M+; Vantage/CloudZero/Kubecost ~$10–30M each; Datadog Cost Mgmt module. Total cloud FinOps market $5B+ growing 25%+. AI FinOps is happening NOW: Helicone, Langfuse, PromptLayer, LangSmith, Portkey at ~$5M ARR each; Datadog/Arize/W&B added LLM cost modules. But no FinOps-FIRST product has won yet — most entrants are observability tools that bolted on cost. Pain is acute: enterprise AI budgets $2M (2022) → $25M (2024) → projected $50–100M+ (2026); LLM costs opaque (per-token, per-model, per-modality); multi-model apps fragment billing; inference now dominates training costs in production. CFOs asking 'what are we spending on AI?' — most enterprises have no answer. FinOps Foundation flagged AI cost mgmt as #1 gap. Why this earns high conviction (the first speculative idea to do so): (1) real, urgent, current pain — not speculative; (2) clear buyer triangle (CFO + VP Eng + AI/ML lead) = same as cloud FinOps; (3) genuine AI-native angle — spend forecasting, model-choice optimization, prompt-cost analysis, distillation recommendations need AI to do well; (4) huge comp (Apptio $4.6B); (5) strong FedStat wedge — same buyer, more acute pain, natural cross-sell; (6) multi-tier monetization (free → team $500–5K/mo → enterprise $50K+ ACV). Strategic framing: best as separate venture with explicit FedStat wedge — lands faster (developer-led, bottom-up), then expands to full FedStat TBM. Two products, compounding ACV with same customer. Time to $1M ARR: 6–12 months bottom-up (Helicone/Langfuse precedent); ~12 months realistic with SerebrumAI distribution. Ceiling: $100M–$1B+ ARR in 5–7 years; >$500M plausible. Risks: hyperscalers (AWS/GCP/Azure) build native AI cost tools; observability players expand into FinOps. Mitigated by FinOps-first positioning and timing. Sister product to FedStat — same cell, shared buyer.",
  },
  {
    name: "DealLens AI",
    size: "$50M–$500M",
    time: "1–2yr",
    conviction: "med",
    motion: "Enterprise",
    rationale:
      "AI-native technical due diligence for PE and M&A — code review, infra audit, security posture, scalability assessment, dev-team analysis. Replaces human consulting (Crosslake Technology ~$30M services, West Monroe, Bain TechAdvisor, EY-Parthenon, Big 4) at $50–150K/deal with AI-driven reports at $25–75K/deal. PE deal volume: ~3,000–5,000 software/tech-enabled deals/yr globally; mid-market PE (target ICP) does 15–40 deals/yr each. Pain is current and forced (every deal close = 4–8 week TDD scramble). AI-native angle is genuine — code repo analysis, dependency hygiene, CVE cross-ref, IaC review, contract synthesis, commit-graph team analysis are exactly LLM-shaped problems. Tools today (Snyk, Veracode, BlackDuck) solve fragments; nothing assembles end-to-end TDD-grade reports. Greenfield aspect: no AI-native TDD product has crossed $20M ARR. Crowded aspect: 5–10 funded AI-DD startups (DiligentIQ ~$20M raised, Eilla AI ~$10M Series A, Hebbia $130M Series B though broader, Ansarada AI-VDR, Quill AI, DealZero, Lighthouse, Notebook). Adjacent threats: Datasite (~$500M VDR could ship AI), Snyk could expand from repo to deal-level. PE-internal builds (Vista, Thoma Bravo, KKR) close mega-fund TAM — addressable market is mid-market PE. Real edges for SerebrumAI: (1) AlphaSigma fund management = direct LP/PE relationships, warm-intro pipeline; (2) AlphaSigma fund itself = seed customer (run DealLens on every deal evaluated); (3) dual-side credibility (operator + investor). Time to $1M ARR: 12–18 months realistic — 20 PE firms × $50K avg = $1M; or 5 mid-market funds at $200K subscription. Ceiling: $200–500M ARR in 5–7 yrs (TDD consulting is ~$500M–$1B/yr globally; expansion into post-close monitoring + portfolio analytics adds more). Med conviction: real pain + clear ICP + distribution wedge + AI-native is real, but window is narrow (DiligentIQ/Eilla could pull ahead with Series B distribution before launch). Push to high if first 5–10 customer interviews validate $50K+ ACV willingness-to-pay.",
  },
  {
    name: "ClaimSentry AI",
    size: ">$500M",
    time: "1–2yr",
    conviction: "med",
    motion: "Enterprise",
    rationale:
      "AI-native medical payment integrity for health plans and self-insured employers — detect inappropriate billing, fraud/waste/abuse, coding errors; predict appropriate payment amounts; audit specialty drug claims; auto-draft denial appeals and recoupment letters. TAM: $40B+ payment integrity market within $4.5T US healthcare; growing 12–15% CAGR. Pain is acute: 5–15% of claims are processed incorrectly; specialty drugs drive 50%+ of plan costs with worst billing complexity; every health plan CFO has an AI-era cost containment mandate from the board RIGHT NOW. AI-native angle is genuine and deep: multi-modal claims data + clinical notes + drug protocols + medical literature + LCDs/NCDs (Medicare coverage rules) — pattern detection at semantic level (rule-based engines miss novel patterns). Buyer: VP Payment Integrity / CMO / Chief Claims Officer at health plans + self-insured employer benefit teams. ACV: $300K–$2M per plan; $50–250K self-insured employers; $250K–$1M PBMs. Competitive landscape (crowded but winnable): Cotiviti ($5B+ revenue, dominant, services-heavy, slow on AI), Optum (UHG-captive, not third-party), HealthEdge/Lyric/Goss (mid-tier legacy SaaS), AI-natives Akasa ($85M raised, RCM-side), Notable ($100M+, AI ops expanding to claims), Anomaly, Codoxo. NO AI-native dominant winner yet — 18–24 month window before Cotiviti AI-modernizes or one of the AI-natives breaks out. STRONG SerebrumAI distribution wedge via Vygor: Vygor sells chronic-care intelligence to health plans → ClaimSentry sells cost-containment intelligence to the SAME buyer org charts. Procurement gate already open; cross-sell is structural. Time to $1M ARR: 9–15 months — 2 pilots at $100–200K via Vygor warm intros (Q1–Q2), convert to annual at $300–500K (Q3), 2–3 referral wins (Q4). Ceiling: $500M–$2B+ ARR (Cotiviti $5B+ revenue is the proof point; AI-native displacement of 10–20% = $500M–$1B). Risks: Cotiviti AI-modernizes (real budget + customer base), Akasa/Notable expanding, sales cycles 9–15 mo even with budget allocated, regulated industry needs medical-director sign-off. Mitigation: Vygor wedge accelerates first 2–3 customers; bottom-up TPA + employer parallel motion. Med conviction (could push high if first 2 Vygor-warm pilots convert in <6 months).",
  },
  {
    name: "CreditCore AI",
    size: ">$500M",
    time: "1–2yr",
    conviction: "med",
    motion: "Enterprise",
    rationale:
      "AI-native commercial lending workflow for banks — read borrower financials and auto-extract metrics/ratios/trends, draft credit memos from data room contents, monitor covenant compliance in real-time across portfolio, automate annual reviews (financial spreading, peer benchmarking), auto-generate regulatory reports (CCAR, OCC exam materials). TAM: $50B+ banking back-office software within $5T US bank commercial lending volume. Pain: every regional bank has 50–500 commercial relationship managers + credit analysts drowning in manual work; nCino ($500M ARR public) is dominant SaaS workflow but NOT AI-native — features bolted on. Buyer: Chief Credit Officer / Head of Commercial Lending at banks (mid-size $5–50B in assets buy fastest; top-50 banks slowest). ACV: $250K–$2M per bank. Competitive landscape: nCino ($500M ARR, public, workflow SaaS, AI features bolted on), Encompass/FIS/Fiserv (legacy banking core), Casca/Numerated/BluePoint (newer SMB banking workflow). NO clear AI-native winner — greenfield. Time to $1M ARR: 9–18 months realistic — 3–5 banks at $250K = $1M ARR. AlphaSigma wedge: medium — banks are LPs and counterparties to fund managers; relationships exist but more commercial-deal than back-office. Ceiling: $500M–$1.5B ARR (nCino $500M ARR shows comp; AI-native could match or exceed). Risks: banks notoriously slow buyers (regulatory + IT review = 9–18 mo cycles), nCino has customer relationships and is acquiring AI capability, highly regulated (model risk management, CFPB, OCC scrutiny — every model output needs validation framework). Med conviction: real pain + clear buyer + huge TAM + greenfield, but slower buyer than ClaimSentry and weaker SerebrumAI wedge. Push to high if 2 mid-size banks (~$5–20B assets) convert in <9 months.",
  },
  {
    name: "Cortica",
    size: "$50M–$500M",
    time: "1–2yr",
    conviction: "med",
    motion: "PLG",
    rationale:
      "AI-native operating system for fractional CXOs (CFO first, then CMO, then CPO/CTO/COO/Chief of Staff). Multi-client workspace where a fractional executive connects each client's data sources (QuickBooks, Stripe, Carta, HubSpot, Salesforce, etc.) and AI generates role-specific deliverables — board decks, three-statement models, cap-table scenarios, KPI dashboards, GTM plans, campaign briefs — per client per cadence. Plus billing, time tracking, pipeline mgmt, peer network. Brand name: Cortica (Latin form of 'cortex' — sister brand to SerebrumAI family). SEQUENCING: CFO-first wedge (Y1, $1–2M ARR), CMO-second (Y2, $4–6M ARR), then CPO/CTO/COO (Y3+, $10–15M ARR), then adjacent expansion to fractional networks + consulting firms (Y4+, $25–50M ARR). Y5 ceiling: $100–250M ARR realistic; >$500M with aggressive multi-role + networks-as-customers + consulting-firm tier. Market: 10–15K active fractional CFOs in US (growing 40–60% YoY); 5–8K fractional CMOs; ~30K total fractional CXOs domestically; ~100K globally. Tight community: Bolster (10K+ members), Continuum, Catalant, Chief networks; LinkedIn-very-active audience; conferences (Fractionals for Hire, Bolster Summit, On Deck CXO). ARPU $400/mo blended (Pro $299, Premium $499, Agency $999+). Pricing tiers: Free (1 client), Pro (5 clients), Premium (unlimited + peer network), Agency (multi-fractional collab). Math to $1M ARR: 200 paying users × $400/mo × 12 = $960K — achievable Y1 with focused CFO-only launch. AI-native angle is genuine for CFO use case: reading QuickBooks/NetSuite/Stripe data and auto-generating board-quality deliverables is exactly multi-modal LLM territory. CFO-first reasons: bigger initial market vs CMO, cleaner data integrations, higher templatability (financial models have universal structure), better demo quality ('connect QuickBooks → board deck in 30 seconds'), stronger benchmarking moat (financial metrics are universally comparable, CAC isn't). Competitive landscape: NO specialist tool for fractional CXOs exists today. Adjacent: Toptal/Bolster/Continuum (networks, not ops), HoneyBook (broader service biz), Karbon/Pilot (accounting firm OS, different ICP), Notion/ClickUp (generic ops, no role-specific AI), Causal/Mosaic/Pry (FP&A for single-client teams, not multi-client fractionals). True greenfield. Defensibility / moats: (1) cross-client anonymized benchmark database — Bloomberg-for-fractional-CFOs; (2) accumulated role + industry deliverable templates; (3) peer-referral network effects; (4) accumulating client data raises switching costs; (5) brand-trust in tight community. Distribution: Bolster partnership (revenue share on conversions), LinkedIn content (role-specific deliverable templates = SEO bait + lead gen), conference sponsorships, free-tier viral. SerebrumAI wedge: medium — studio uses fractionals; AlphaSigma's portfolio companies hire fractionals; FedStat's enterprise relationships often started via fractional engagements. Wins/loses on PLG execution + community-led GTM more than studio leverage. Risks: Notion AI ships role-specific fractional templates (25% prob in 12 mo, 50% in 18 mo); Bolster builds platform layer (20% in 18 mo — they have audience but different team); generic AI gets so capable that role-specific deliverables become trivially DIY (incremental but multi-client data integration is harder to commoditize); fractional market growth slows (low — AI is INCREASING fractional demand). FMF requirement: HIGH — needs founder who's been a fractional CXO. Med conviction: real pain + clear ICP + tight community + truly greenfield + capital-efficient + Stripe-pattern multi-role expansion path; capped at $50–500M without aggressive expansion; depends on PLG execution velocity in tight competitive window.",
  },
  {
    name: "Vitasana.ai",
    size: "$50M–$500M",
    time: "1–2yr",
    conviction: "med",
    motion: "B2C",
    rationale:
      "AI-native affiliate site for supplements + vitamins — pure-play recommendation engine across best-of-breed retailers (Amazon, iHerb, Thorne, Pure Encapsulations, brand-direct). No inventory, no fulfillment, no medical claims — just AI consultation matched to evidence-graded products with affiliate links. Pivoted from original DTC framing because affiliate model fixes the structural alignment problem (AI can recommend the BEST product across all retailers, not push specific inventory) and dramatically reduces regulatory exposure (information provider, not seller). Market: $25B+ online supplements within $60B US supplement market; 8–10% CAGR. Underlying gap is real — physicians don't guide on supplements (DSHEA leaves regulation thin), users go to ChatGPT/Reddit/Examine.com/Healthline for guidance. Comps: Examine.com ($10–15M ARR, 15 yrs old, evidence-graded gold standard for honesty), Healthline (~$300M+ revenue, Red Ventures, multi-topic SEO empire), Wirecutter ($30M acquisition by NYT), GoodRx ($750M+ revenue public, drugs not supplements but affiliate-adjacent), NerdWallet ($500M+ revenue public — proves affiliate-content can hit venture scale). AI-native challenger has to win on personalization (something static content sites can't do) or AI-distribution (citation in ChatGPT/Claude/Perplexity answers). Critical strategic variable: AI search is rewriting the affiliate playbook in real-time — Healthline/NerdWallet seeing 15–40% organic traffic drops post-AI-Overviews. Threat AND opportunity: traditional SEO is shifting sand, but a native AI consultation product can become BOTH the citation source AND the destination. Affiliate margins thin (8–15% commission on $40–60 AOV = $3–9 per converting user); need real traffic operation. Time to $1M ARR: 18–30 months — faster scenario (12–18 mo) via TikTok/IG viral demos + AI-platform citations + 8–15% interactive consultation conversion (vs typical 2–4% browse); slower scenario (24–36 mo) via SEO grind. Ceiling: $30–150M ARR pure-play supplements (Examine.com 2.0 trajectory), $100–250M with multi-category expansion (skincare, fitness, sleep). Pure supplement affiliate caps below $100M without expansion. Mild Vygor brand conflict (Vygor signals clinical rigor; Vitasana is consumer-affiliate) but manageable as 'independent guidance' framing. Med conviction: aligned incentives + real AI-native product + capital-efficient + NerdWallet-pattern proof; capped ceiling vs other matrix items + slow trust build (years to compete with Examine/Healthline) + AI-search disruption is existential variable. First non-graveyard B2C idea on the matrix; diversifies portfolio away from enterprise.",
  },
];

// ============================================================
// Style maps
// ============================================================
export const accentColors: Record<
  Accent,
  { dot: string; text: string; border: string; bgSoft: string }
> = {
  cyan: {
    dot: "bg-cyan-400",
    text: "text-cyan-300",
    border: "border-cyan-400/40",
    bgSoft: "bg-cyan-400/[0.08]",
  },
  violet: {
    dot: "bg-violet-400",
    text: "text-violet-300",
    border: "border-violet-400/40",
    bgSoft: "bg-violet-400/[0.08]",
  },
  amber: {
    dot: "bg-amber-400",
    text: "text-amber-300",
    border: "border-amber-400/40",
    bgSoft: "bg-amber-400/[0.08]",
  },
  emerald: {
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    border: "border-emerald-400/40",
    bgSoft: "bg-emerald-400/[0.08]",
  },
};

export const weightToBg: Record<CellMeta["weight"], string> = {
  0: "bg-white/[0.015]",
  1: "bg-emerald-500/[0.04]",
  2: "bg-emerald-500/[0.07]",
  3: "bg-emerald-500/[0.12]",
  4: "bg-emerald-500/[0.18]",
};

export const weightToBorder: Record<CellMeta["weight"], string> = {
  0: "border-white/[0.06]",
  1: "border-emerald-500/15",
  2: "border-emerald-500/25",
  3: "border-emerald-500/40",
  4: "border-emerald-500/60",
};

export const convictionLabel: Record<Conviction, string> = {
  low: "Low conviction",
  med: "Med conviction",
  high: "High conviction",
};

export const convictionDot: Record<Conviction, number> = {
  low: 1,
  med: 2,
  high: 3,
};

// Phase = sequencing role
export type Phase = "short" | "medium" | "long";

export const timeToPhase = (t: TimeBucket): Phase =>
  t === "<1yr" ? "short" : t === "1–2yr" ? "medium" : "long";

export const phaseInfo: Record<
  Phase,
  {
    label: string;
    timeline: string;
    role: string;
    body: string;
    accentText: string;
    accentBorder: string;
    accentBg: string;
  }
> = {
  short: {
    label: "Short-term",
    timeline: "Y0 → Y1.5",
    role: "Cash-flow engine",
    body: "<1yr to $1M ARR. Generate studio cash + external valuation that fund the rest of the portfolio.",
    accentText: "text-emerald-300",
    accentBorder: "border-emerald-400/30",
    accentBg: "bg-emerald-400/[0.04]",
  },
  medium: {
    label: "Medium-term",
    timeline: "Y1 → Y4",
    role: "Compounding wedge",
    body: "1–2yr to $1M ARR. Each leverages an existing venture's distribution wedge — same buyer org chart, faster procurement, shared customer.",
    accentText: "text-cyan-300",
    accentBorder: "border-cyan-400/30",
    accentBg: "bg-cyan-400/[0.04]",
  },
  long: {
    label: "Long-term",
    timeline: "Y2 → Y5+",
    role: "Asymmetric upside",
    body: ">2yr to $1M ARR. Slow proof curves, massive ceilings. Funded by short- and medium-term cashflow + specialty VC tier.",
    accentText: "text-violet-300",
    accentBorder: "border-violet-400/30",
    accentBg: "bg-violet-400/[0.04]",
  },
};

export const motionStyle: Record<
  Motion,
  { bg: string; text: string; border: string; tip: string }
> = {
  PLG: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-300",
    border: "border-emerald-500/30",
    tip: "Product-led, self-serve. Best scalability.",
  },
  Hybrid: {
    bg: "bg-cyan-500/15",
    text: "text-cyan-300",
    border: "border-cyan-500/30",
    tip: "PLG entry, enterprise expansion. Strong leverage.",
  },
  Enterprise: {
    bg: "bg-amber-500/10",
    text: "text-amber-200",
    border: "border-amber-500/25",
    tip: "B2B sales-led. Standard SaaS leverage.",
  },
  Services: {
    bg: "bg-rose-500/10",
    text: "text-rose-300",
    border: "border-rose-500/25",
    tip: "Consulting-heavy. Lowest leverage.",
  },
  B2C: {
    bg: "bg-violet-500/10",
    text: "text-violet-300",
    border: "border-violet-500/25",
    tip: "Consumer-led. Brand and CAC dependent.",
  },
  Fund: {
    bg: "bg-white/[0.04]",
    text: "text-neutral-400",
    border: "border-white/15",
    tip: "Fund / asset-management revenue model.",
  },
};

// ============================================================
// Adjustment model — how maturity + traction shift position
// ============================================================
// Total advancement = maturityScore + tractionScore (range 0–7).
// 0–1: original placement.
// 2–3: pull time bucket one column earlier; conviction +1 if "low".
// 4–5: time = <1yr; conviction = high.
// 6–7: graduated. Pin to flagship cell (>$500M / <1yr / high) AND
//      flag visually as "promoted to venture".

export type Adjustment = { maturity: Maturity; traction: Traction };

export type AdjustedPosition = {
  size: SizeBucket;
  time: TimeBucket;
  conviction: Conviction;
  graduated: boolean;
};

export function adjustedPosition(
  base: { size: SizeBucket; time: TimeBucket; conviction: Conviction },
  adj: Adjustment
): AdjustedPosition {
  const score = maturityScore[adj.maturity] + tractionScore[adj.traction];

  if (score <= 1) {
    return { ...base, graduated: false };
  }

  if (score >= 6) {
    return {
      size: ">$500M",
      time: "<1yr",
      conviction: "high",
      graduated: true,
    };
  }

  // Shift time bucket
  const baseTimeIdx = timeBuckets.indexOf(base.time);
  let newTimeIdx = baseTimeIdx;
  if (score >= 4) newTimeIdx = 0; // <1yr
  else if (score >= 2) newTimeIdx = Math.max(0, baseTimeIdx - 1);

  // Shift conviction
  const convictionOrder: Conviction[] = ["low", "med", "high"];
  const baseConvIdx = convictionOrder.indexOf(base.conviction);
  let newConvIdx = baseConvIdx;
  if (score >= 4) newConvIdx = 2;
  else if (score >= 2 && base.conviction === "low") newConvIdx = 1;

  return {
    size: base.size,
    time: timeBuckets[newTimeIdx],
    conviction: convictionOrder[newConvIdx],
    graduated: false,
  };
}
