# The Raise — Fundraising Sprint App

**A specification for building a fundraising-tracker app in Claude Code.**

This document is two things at once:
1. **The playbook** — the strategic content the app supports (Part 1)
2. **The product spec** — features, data model, tech stack, build phases (Part 2 onward)

A developer (or Claude Code agent) reading this end-to-end should be able to scaffold a working V1 of the app without needing to ask the founder follow-up questions about the domain.

---

## Part 1 · The Playbook (Source of Truth)

### 1.1 What the app is for

A founder running an 8-week fundraising sprint needs to:
1. Identify ~50–100 target funds + the specific partner at each
2. Map warm-path coverage for each partner (existing investor / advisor / portfolio CEO / LinkedIn mutual / cold)
3. Send templated intro requests + track which introducers committed
4. Track every meeting, partner meeting, IC presentation, and term sheet through the funnel
5. Stay disciplined on the 8-week time-box
6. Avoid 7 well-documented failure modes

This app replaces what most founders do today: a half-broken Google Sheet, a Notion board they stop updating in Week 3, and 200 unread emails from VCs they meant to follow up with.

### 1.2 The pyramid (operating principle)

| Tier | Path | Conv → meeting | Meeting → term sheet | Use for |
|---|---|---|---|---|
| **T1** | Warm intro from existing investor / advisor | 40–60% | 5–10% | Top 20 most-wanted funds |
| **T2** | 2nd-degree via portfolio CEO of an existing investor | 20–35% | 3–7% | Next 30 funds |
| **T3** | 2nd-degree via mutual LinkedIn connection | 10–20% | 2–4% | Next 30 funds |
| **T4** | Cold (Apollo + LinkedIn InMail) | 1–3% | <1% | Fill the long tail — never the lead path |

**~80% of meetings come from T1 + T2.** Cold (T4) never produces the lead. The app must encourage warm-path coverage before cold.

### 1.3 Tool roles (which external tools the app integrates with)

| Tool | Job | Integration approach |
|---|---|---|
| **OpenVC** | Initial fund discovery | CSV import (no public API). User filters on OpenVC, exports, app ingests. |
| **Crunchbase** | Recent investments by partner | Crunchbase API (paid tier required). Partner-level investment history. |
| **LinkedIn Sales Navigator** | Partner identification + warm-path discovery | Manual paste (TOS prohibits scraping). App provides clipboard parsers. |
| **Signal NFX** | Warm-intro path discovery | No API. Manual reference in the app. |
| **Apollo** | Email finding for cold (T4) only | Apollo API for email enrichment. |
| **Twitter / X** | Indirect warming (engagement before reach-out) | Link out, no automation. |

### 1.4 The 8-week sprint

| Week | Phase | What's happening |
|---|---|---|
| **Week –1** | Prep | Finalize deck + data room. Pre-warm advisors. Lock target list. Practice pitch on 5 friendlies. |
| **Week 1** | Open | T1 + T2 intro requests sent (20–30 in flight). First calls with friendlies. Refine pitch. |
| **Week 2** | Ramp | First meetings: 10–15 held. Next intro batch. Identify partners moving fast vs slow. |
| **Week 3–4** | Peak | Peak meeting volume: 20–30 first meetings. Begin partner meetings + deep dives. T4 cold sent. Identify likely leads. |
| **Week 5–6** | Deep | Partner meetings: 8–15. IC presentations: 3–7. Reference calls. Term sheet conversations begin. |
| **Week 7** | Sheets | Term sheets arrive (1–3). Negotiate in parallel. Pick a lead. Communicate timing to followers. |
| **Week 8** | Close | Sign lead term sheet. Fill out round with followers. Legal + diligence. Wire + announce. |
| **Post** | Reset | Update tracker — who passed and why. Thank every introducer. Add to ongoing nurture list. Return to building. |

**Time-box discipline:** if the raise extends past 10 weeks without a term sheet, stop. Market signal is real.

### 1.5 The funnel (realistic math)

| Stage | Count |
|---|---|
| Funds on target list | 50–100 |
| Warm intro requests sent | 40–80 |
| First meetings held | 20–40 |
| Partner meetings | 8–15 |
| Deep dives / IC presentations | 3–7 |
| Term sheets | 1–3 |
| **Lead investor** | **1** |

### 1.6 Common failure modes (the app should actively prevent)

1. **Going wide before going deep on warm paths.** Sending 200 cold emails before exhausting your warm graph.
2. **Pitching the wrong partner at the right fund.** Generalists pass.
3. **Inconsistent narrative across meetings.** Telling SaaS VCs you're SaaS and AI VCs you're AI.
4. **Burning T1 intros on a half-baked deck.** Practice on tier-3 funds first.
5. **No tracker.** Losing track of who's where in the funnel.
6. **Not running parallel.** Sequential conversations produce exploding offers with zero leverage.
7. **Open-ended raise.** Past 10 weeks without a term sheet = stop, regroup.

### 1.7 Hard rules (encode as in-app guardrails)

- **Never use templated/sequenced cold for fundraising.** Each cold email is hand-crafted, references the partner's actual recent portfolio.
- **One follow-up max on cold.** Past that = harassment.
- **T1 intros only after the pitch lands consistently** (5+ practiced first meetings).
- **Forwardable summary must be ≤ 150 words** and require zero edits from the introducer.
- **The fund's website thesis lies. The partner's last 10 deals tell the truth.**

### 1.8 Key artifacts (the app generates / manages)

1. **Forwardable summary** — 150-word, copy-paste-ready, the most important artifact in the raise.
2. **Intro request email** — to the introducer, with the forwardable attached.
3. **Cold email** (T4 only) — hand-crafted per partner.
4. **Tracker** — the spreadsheet that becomes the operating system.
5. **Investor update** (post-meeting) — for nurturing those who pass.
6. **Round close announcement** (post-close).

---

## Part 2 · Product Specification

### 2.1 User persona

**Primary**: founder/CEO running an active Seed → Series B fundraise. Has done at most 1–2 raises before. Currently using a broken Google Sheet + Notion + Gmail.

**Secondary (V2)**: founder's chief of staff or fundraising advisor who runs the operational layer for the founder.

### 2.2 Core jobs the app does for the user

| Job | Frequency | Pain today |
|---|---|---|
| Build target list of 50–100 funds + partners | Once per raise (Week –1) | Manual scraping across OpenVC + Crunchbase + LinkedIn |
| Map warm-path coverage per partner | Once per raise | LinkedIn search × 100 partners = 5+ hours |
| Draft + send intro requests to warm connectors | Daily Weeks 1–4 | Cut/paste from a template doc |
| Track every meeting + IC + reference call | Daily Weeks 2–7 | Sheets that goes stale by Week 3 |
| See funnel state at a glance | Daily | Mental model + spreadsheet |
| Generate forwardable summary | Once per raise (revised 1–2×) | Founder rewrites 5+ times before it's tight |
| Surface failure modes in real time | Continuous | Founder doesn't realize they're failing until Week 5 |

### 2.3 Feature list (V1 → V3 prioritized)

#### V1 (MVP — 4–6 week build)

| Feature | What it does |
|---|---|
| **Target list builder** | CSV import from OpenVC. Manual add. Filter on stage / sector / check size / geography. |
| **Partner profile** | Per-partner record: name, fund, role, recent investments (manual entry or Crunchbase pull), notes. |
| **Warm-path tracker** | Per-partner: introducer name + tier (T1–T4) + ask status (queued / asked / confirmed / declined). |
| **Intro request generator** | Claude-powered: takes founder context + partner context → drafts the intro request + forwardable. Copy-to-clipboard. |
| **Forwardable summary editor** | Single source of truth for the 150-word forwardable. Word counter. Re-render in every email. |
| **Meeting log** | Per-meeting: date, partner, type (first / partner / IC / reference), notes, next step, status (active / passed / advancing / term sheet). |
| **Funnel dashboard** | Visual: target → request → meeting → partner meeting → IC → term sheet → close. Live counts. |
| **Sprint timeline** | 8-week visual with current week highlighted + what's happening this week. |
| **Tracker export** | CSV export of the whole tracker (because founders want a backup spreadsheet). |

#### V2 (8–12 week build)

| Feature | What it does |
|---|---|
| **Crunchbase API integration** | Auto-pull partner's recent 10 deals. Highlight matches with founder's company profile. |
| **Apollo integration (T4 only)** | Find emails for cold prospects. Gated UI to discourage premature use. |
| **Gmail integration** | Send intro requests + cold emails from within the app. Track opens + replies. |
| **Failure-mode detector** | Background checks: "You've sent 50 cold before exhausting T1." "You haven't pitched to a friendly in 14 days but you're asking T1." "Your raise is at week 11 with no term sheet — review the failure modes." |
| **AI deck reviewer** | Claude reads the deck + provides 3 most likely objections that will come up in meetings. |
| **AI partner research** | Given a partner, Claude pulls their recent investments + writes a 1-paragraph summary of what they care about, surfaces fit/non-fit signals. |
| **Meeting prep card** | Pre-meeting brief: partner's recent investments, mutual connections, likely questions, your TL;DR. |
| **Calendar integration** | Pull meetings from Google Calendar, auto-link to partner record. |
| **Co-founder collaboration** | Multiple users per raise (founder + CoS + advisor). |

#### V3 (post-launch nice-to-haves)

| Feature | What it does |
|---|---|
| **Investor update generator** | Post-meeting (or post-close), generate the standard investor update from meeting notes. |
| **Reference call coordinator** | Manage which customers are reference-cleared for which VC. |
| **Data room link tracker** | DocSend-style per-recipient deck tracking. |
| **Multi-raise history** | Founder runs another raise 18 months later — their tracker + connections carry over. |
| **Benchmark mode** | Anonymized: "founders raising your stage avg 33 first meetings by Week 4. You're at 18." |

### 2.4 Data model (V1)

#### Entities

```typescript
// Raise — the top-level container for one fundraise
type Raise = {
  id: string;
  founderId: string;
  companyName: string;
  stage: "pre-seed" | "seed" | "series-a" | "series-b" | "series-c+";
  roundSize: number; // dollars
  startDate: Date; // Week 1 anchor
  status: "prep" | "active" | "negotiating" | "closed" | "paused" | "abandoned";
  // The forwardable artifact
  forwardableSummary: string; // ≤ 150 words enforced
  deckUrl: string;
  dataRoomUrl: string;
};

// Fund — a VC firm
type Fund = {
  id: string;
  name: string;
  stage: Stage[];
  sectorFocus: string[];
  checkSize: { min: number; max: number };
  geography: string[];
  source: "openvc" | "crunchbase" | "manual";
};

// Partner — a specific human at a fund
type Partner = {
  id: string;
  fundId: string;
  name: string;
  title: string;
  linkedinUrl: string;
  twitterHandle?: string;
  recentInvestments: string[]; // pulled from Crunchbase or manual
  notes: string;
};

// TargetListEntry — a partner on a raise's target list
type TargetListEntry = {
  id: string;
  raiseId: string;
  partnerId: string;
  priority: 1 | 2 | 3; // founder's prioritization
  status: "not-started" | "intro-queued" | "intro-sent" | "intro-confirmed" |
          "meeting-booked" | "in-conversation" | "passed" | "advancing" | "term-sheet";
  warmPath?: WarmPath;
};

// WarmPath — the route to the partner
type WarmPath = {
  introducerName: string; // can be free-text or linked to a Contact entity (V2)
  tier: "T1" | "T2" | "T3" | "T4-cold";
  relationship: string; // "existing investor", "advisor", "portfolio CEO", "LinkedIn mutual", "none"
  askedDate?: Date;
  confirmedDate?: Date;
  declinedDate?: Date;
};

// Meeting — every investor interaction
type Meeting = {
  id: string;
  raiseId: string;
  partnerId: string;
  date: Date;
  type: "first" | "partner" | "ic" | "reference" | "diligence" | "term-sheet-discussion";
  durationMinutes: number;
  attendees: string[]; // from the partner's side
  notes: string;
  objections: string[]; // tagged objections that came up
  nextStep: string;
  nextStepDate?: Date;
  outcome: "scheduled" | "completed" | "passed" | "advancing" | "no-show";
};

// TermSheet
type TermSheet = {
  id: string;
  raiseId: string;
  partnerId: string;
  fundId: string;
  receivedDate: Date;
  preMoney: number;
  amount: number;
  leadOrFollower: "lead" | "follower";
  status: "received" | "negotiating" | "signed" | "declined" | "withdrawn";
  notes: string;
};
```

#### Key relationships

- `Raise` has many `TargetListEntry` → each has one `Partner` → each belongs to one `Fund`
- `Raise` has many `Meeting` → each linked to one `Partner`
- `Raise` has many `TermSheet` → each linked to one `Partner` + `Fund`

### 2.5 Key user flows

#### Flow 1: Build the target list (Week –1)

1. Founder lands on empty Target List page
2. Three import paths:
   - **Import OpenVC CSV** → drag-drop → app parses + dedupes against existing → shows preview → confirm
   - **Add fund manually** → form: name, stage, sector, etc.
   - **Paste LinkedIn partner profile** → app extracts name + fund + title (Claude-assisted parsing)
3. For each fund, app prompts: "Which partner specifically?" → user adds 1+ partners
4. Founder marks each partner with priority (1/2/3) and initial tier guess (T1/T2/T3/T4)
5. Goal: 50–100 partners on the list before moving on

#### Flow 2: Map warm paths (Week –1 → 0)

1. For each partner without a confirmed warm path, app suggests action:
   - "Do you have a mutual connection on LinkedIn? Paste the profile URL."
   - "Does an existing investor know this partner? Add them."
   - "If no warm path → tier T4 cold."
2. Founder enters introducer name + tier
3. App calculates coverage: "62 of 87 partners have T1–T3 warm paths. 25 are T4."

#### Flow 3: Send intro requests (Week 1)

1. Founder filters target list by status = "intro-queued"
2. For each: click "Draft intro request"
3. Claude generates email to the introducer (using founder + partner + forwardable summary as context)
4. Founder reviews → edits → copies to clipboard → pastes into Gmail (V1) or sends in-app (V2)
5. Marks status = "intro-sent" + records date
6. App tracks: "32 intros sent · 18 confirmed · 5 declined · 9 pending"

#### Flow 4: Track meetings (Weeks 2–6)

1. Calendar shows the week
2. Per meeting: pre-meeting card surfaces partner profile + recent investments + warm-path source
3. Post-meeting: founder logs notes + outcome + next step
4. App auto-advances the funnel state

#### Flow 5: Funnel dashboard (always-on)

Visual progression: **Target → Intro → 1st Meeting → Partner Meeting → IC → Term Sheet**, with live counts and visual cues for stalled stages.

#### Flow 6: Failure-mode alerts (continuous)

App runs background checks daily:
- "You're at Week 6 with no partner meetings. Likely cause: pitch hasn't landed. Review the deck-iteration guide."
- "T1 partners haven't been asked yet but you sent 30 cold emails. Re-prioritize warm paths."
- "You haven't logged a meeting in 5 days. The sprint is losing momentum."

### 2.6 AI-powered features (where Claude provides leverage)

| Feature | Prompt approach |
|---|---|
| **Intro request generation** | System prompt with the playbook context. Input: partner data + introducer relationship + forwardable summary. Output: complete intro request email. |
| **Forwardable summary refinement** | Input: founder's first draft. Output: tightened to ≤ 150 words with specific feedback. |
| **Partner research summary** | Input: partner name + fund. Output: 1-paragraph "what this partner cares about based on recent investments." (Pulls from Crunchbase data + Twitter/X). |
| **Deck objection forecasting** | Input: deck PDF. Output: 3 most likely objections + suggested pre-empts. |
| **Meeting brief** | Pre-meeting card: input partner + history + last interaction. Output: TL;DR brief for the founder. |
| **Failure-mode detection** | Daily cron: scan tracker state against rules. Generate human-readable alerts. |

---

## Part 3 · Tech Stack & Implementation Phases

### 3.1 Recommended stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend framework** | Next.js 15 App Router (matches the SerebrumAI site stack) | Server components for data fetching, React for interactivity. Same conventions you already know. |
| **Styling** | Tailwind CSS | Already in the SerebrumAI stack. |
| **Database** | Postgres (Neon or Supabase) | Real DB needed for relational data + multi-user collab in V2. |
| **ORM** | Drizzle ORM | Type-safe, lightweight, plays well with Next.js. |
| **Auth** | Clerk or Auth.js | Multi-user-ready out of the box. Skip building auth from scratch. |
| **AI** | Anthropic Claude API (Claude Opus 4 or Sonnet 4.5) | Best at structured output + nuanced writing. Use Sonnet for cost-sensitive paths. |
| **Email integration (V2)** | Gmail API via OAuth | Founders use Gmail. Don't fight it. |
| **Deck/file storage** | Vercel Blob or S3 | For deck PDFs + data-room files. |
| **Background jobs** | Inngest or Vercel Cron | For failure-mode detection runs. |
| **Hosting** | Vercel | Consistent with SerebrumAI deployment. |

### 3.2 Recommended directory structure

```
/app
  /api
    /raises
      /[id]
        /partners
        /meetings
        /intro-requests/draft  → POST: Claude generates intro request
        /forwardable/refine    → POST: Claude refines forwardable
    /partners
      /research                → POST: Claude pulls partner context
  /(authed)
    /raises
      /new                     → create-raise wizard
      /[id]
        /target-list           → 50–100 partner list
        /partner/[partnerId]   → partner profile + history
        /intro-requests        → queue of pending requests
        /meetings              → meeting log + calendar
        /funnel                → dashboard
        /sprint                → 8-week timeline
        /settings              → forwardable, deck URL, data room URL
  /layout.tsx
/components
  /target-list
  /warm-path
  /intro-request
  /funnel-dashboard
  /sprint-timeline
  /meeting-card
/lib
  /db
    /schema.ts                 → Drizzle schema
    /queries.ts                → query helpers
  /ai
    /intro-request.ts          → Claude prompts for intro request generation
    /partner-research.ts       → Claude prompts for partner summarization
    /forwardable.ts            → Claude prompts for forwardable refinement
    /failure-modes.ts          → rule-based alert system
  /integrations
    /openvc-csv-parser.ts
    /crunchbase-api.ts
    /apollo-api.ts
    /gmail.ts
/playbook                       → markdown content of the playbook (this file)
```

### 3.3 Build phases (suggested)

#### Phase 1 — MVP local-only (Weeks 1–4)

Goal: a founder can run a single raise end-to-end, using clipboard for email sending.

- [ ] Project scaffold + Postgres + Drizzle schema
- [ ] Clerk auth + single-user
- [ ] Create raise + edit forwardable
- [ ] Target list CRUD (manual add + CSV import from OpenVC)
- [ ] Partner CRUD
- [ ] Warm-path tracker (tier + introducer name)
- [ ] Intro request generator (Claude API, copy-to-clipboard)
- [ ] Meeting log
- [ ] Funnel dashboard (basic counts)
- [ ] Sprint timeline (read-only display)

**Done when:** a founder can manage a 50-partner list, send 30 intro requests via clipboard, log 20 meetings, and see funnel state.

#### Phase 2 — Integrations + AI surfaces (Weeks 5–8)

- [ ] Crunchbase API integration (partner recent investments)
- [ ] Apollo API integration (T4 email finding, gated UI)
- [ ] Gmail OAuth + send-from-app
- [ ] Partner research auto-summary
- [ ] Meeting brief generator
- [ ] Failure-mode detection daily cron + alerts surface

**Done when:** the founder gets meaningful daily nudges from the app and doesn't need to leave the app to send emails.

#### Phase 3 — Polish + collaboration (Weeks 9–12)

- [ ] Multi-user per raise (founder + advisor + CoS)
- [ ] Deck PDF storage + AI deck reviewer
- [ ] Investor update generator
- [ ] Reference call coordinator
- [ ] Data export everywhere

#### Phase 4 — Productize (post-launch)

- [ ] Multi-raise history per founder
- [ ] Anonymized benchmarks ("you vs your stage")
- [ ] Templates per stage (seed vs A vs B)
- [ ] Slack notifications
- [ ] Mobile-responsive (it's currently desktop-first)

### 3.4 Claude API integration notes

The app should use **Claude Sonnet 4.5** as the default model for:
- Intro request generation
- Forwardable refinement
- Partner summarization

Use **Claude Opus 4** only for:
- Failure-mode detection (long context across the entire tracker state)
- Deck objection forecasting (multi-step reasoning on the deck content)

**Prompt caching is mandatory** — the playbook content (this file) should be cached across all AI calls so the model has consistent domain context.

Example Claude call for intro request:

```typescript
const response = await anthropic.messages.create({
  model: "claude-sonnet-4-5-20250929",
  max_tokens: 1024,
  system: [
    {
      type: "text",
      text: PLAYBOOK_CONTEXT, // this file
      cache_control: { type: "ephemeral" },
    },
    {
      type: "text",
      text: "You are drafting an intro request email for a founder running a fundraising sprint.",
    },
  ],
  messages: [
    {
      role: "user",
      content: `
        Founder: ${founder.name} at ${company.name}
        Forwardable summary: ${raise.forwardableSummary}

        Introducer: ${introducer.name}
        Relationship: ${warmPath.relationship}

        Target partner: ${partner.name} at ${fund.name}
        Why this partner: ${partner.notes}

        Draft the intro request email. Match the template structure in the playbook (Section 04).
      `,
    },
  ],
});
```

---

## Part 4 · Open Questions

Decisions the founder should make before building (or that Claude Code should flag during the build):

1. **Single-tenant vs SaaS?** Building for personal use vs other founders. Affects auth complexity and data model.
2. **Self-hosted Claude or via Anthropic API?** API is simpler; self-hosted is more controllable.
3. **Email send-from-app via Gmail OAuth or via Resend/Sendgrid?** Gmail keeps replies in founder's inbox (better UX); Resend is simpler infra.
4. **Crunchbase API budget?** Pro tier is ~$50/mo with rate limits. May need to manually pull for V1.
5. **Should the app store deck PDFs?** Privacy considerations. Could just store DocSend links.
6. **Mobile or desktop-first?** Founders run raises from laptops. Desktop-first is fine for V1.
7. **Multi-raise vs single-raise data model?** Multi is more future-proof; single is faster to V1.

---

## Part 5 · How to use this document with Claude Code

1. **Drop this file into your project root** as `RAISE_SPEC.md` (or save to `docs/` like this repo does)
2. **In Claude Code's first turn**, paste:
   > "Read RAISE_SPEC.md. We're building Phase 1 of the app described in Part 3. Start by setting up the Next.js + Tailwind + Postgres + Drizzle scaffold and creating the Drizzle schema from Part 2.4. After that, scaffold the auth + initial create-raise flow."
3. **For each subsequent feature**, reference the specific Part / Section so Claude has anchoring context.
4. **Keep this document updated** as you make decisions on the open questions in Part 4 — it becomes the living source of truth for the build.

---

## Appendix A — Email templates (from the playbook)

### A.1 Intro request to introducer

```
Hi Maya,

Quick ask — would love your intro to Sarah K. at Fund A. I think she'd be a fit for our Series A based on her recent investments in [adjacent areas].

Forwardable below — happy with a one-line forward, or to draft something you can edit. No pressure if it's not a fit; just thought I'd ask.

Thanks,
[You]

—— Forwardable ——

[Paste the 150-word forwardable here]
```

### A.2 The forwardable

```
Sarah —

[Company] is the AI-native [category] for [buyer], replacing [legacy operating model]. We're at [traction: $X ARR, Y customers, Z growth rate].

The thesis: [one paragraph on why this matters, market sizing, competitive position]. Comp pattern: [public-co comp at $XB exit].

We're raising [$X Series A] with a [target lead profile] and 2–3 followers. Deck: [DocSend link]. Would value 30 minutes of your perspective even if you decide not to dig in.

[Founder name + brief credibility line]
```

### A.3 Cold email (T4 only)

```
Subject: AI-native [category] — [recent portfolio investment] adjacent

Hi Tom,

I noticed you led [recent investment] at [their portfolio co]. We're building [Company] — the AI-native [category] for [buyer], a pattern I think extends naturally from what [their portfolio co] is solving on the [adjacent angle].

Quick stats: [$X ARR · Y customers · Z growth]. Comp pattern: [public co at $XB exit]. Currently raising [$X round].

Would 20 minutes be worth your time? Happy to send a deck first if useful.

Thanks,
[You]
```

### A.4 Cold LinkedIn InMail (T4 only)

```
Hi Tom,

I'm building [Company] — AI-native [category] for [buyer]. Saw your investment in [recent portfolio co] and the pattern overlaps directly with the thesis we're operating on.

Quick context: [$X ARR · Y customers]. Currently raising [$X Series A].

Worth 20 minutes? I can send a deck.

[You]
```

---

## Appendix B — Tracker schema (the spreadsheet the app replaces)

| Partner | Fund | Warm-path source | Tier | Intro asked | Meeting | Status |
|---|---|---|---|---|---|---|
| Sarah K. | Fund A | Maya R. (existing inv) | T1 | Yes · Wk 1 | Booked Wk 2 | Partner mtg scheduled |
| David L. | Fund B | Aaron P. (portfolio CEO) | T2 | Yes · Wk 1 | Pending | Following up Wk 3 |
| Priya N. | Fund C | LinkedIn mutual (alumni) | T3 | Queued Wk 2 | — | Awaiting intro send |
| Tom S. | Fund D | None — cold | T4 | Wk 4 (after warm exhausted) | — | Lower priority |

---

**End of spec. The full content of this document is sufficient context for Claude Code (or any developer) to start Phase 1 of the build.**
