import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Raise",
  description:
    "Sprint-based fundraising outreach — warm-path coverage + 8-week cadence. OpenVC + Crunchbase + LinkedIn Sales Navigator as the core stack.",
  robots: { index: false, follow: false },
};

// ============================================================
// Page
// ============================================================
export default function TheRaisePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300">
            / The Raise
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            The{" "}
            <span className="font-serif italic text-gradient">raise</span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Sprint-based fundraising outreach. Warm-path coverage beats cold
            volume. Run the raise in{" "}
            <span className="text-neutral-200">8 weeks</span>, then stop —
            don&apos;t leave it open-ended. Expected:{" "}
            <span className="text-neutral-200">
              1 lead investor, 2–5 followers
            </span>{" "}
            from 50–100 funds on the target list.
          </p>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <MetricCard label="Target funds" value="50–100" />
            <MetricCard label="First meetings" value="20–40" />
            <MetricCard label="Term sheets" value="1–3" />
            <MetricCard label="Sprint length" value="8 wks" />
          </div>
        </div>
      </section>

      {/* PREREQUISITES */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-300">
              / 00 · Prerequisites
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Before you ask for an intro.
            </h2>
            <p className="mt-3 text-neutral-400">
              Founders waste their best warm intros on half-baked materials.
              These four things exist before the first outreach goes out.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <PrereqCard
              num="P1"
              title="The deck + data room"
              tagline="Final, not drafty. Iteration burns warm capital."
              items={[
                "10–14 slide pitch deck (problem, solution, traction, market, team, ask)",
                "Data room: 2-year financial model, cap table, customer references, team bios, board materials",
                "Hosted on DocSend or equivalent with per-recipient tracking",
                "References pre-cleared and warm — not cold-asks at IC time",
              ]}
            />
            <PrereqCard
              num="P2"
              title="The forwardable summary"
              tagline="The single most important artifact in fundraising."
              items={[
                "3 paragraphs, ~150 words, copy-paste-ready for warm introducers",
                "Para 1: company one-liner + traction headline",
                "Para 2: market + thesis + competitive position",
                "Para 3: round size + lead/follow ask + deck link",
                "No edits needed by the introducer — pure plug-and-forward",
              ]}
            />
            <PrereqCard
              num="P3"
              title="Founder warmth audit"
              tagline="Your warm graph is the single biggest variable in the raise."
              items={[
                "List every advisor · prior coworker · alumni · existing investor · board member",
                "For each: which of your target investors might they know?",
                "Tier connectors: those who'd give a strong intro vs. those who'd give a tepid intro",
                "Pre-warm them at week –2 with a heads-up that asks are coming",
              ]}
            />
            <PrereqCard
              num="P4"
              title="Pitch reps before T1 asks"
              tagline="Practice on B-list funds; save A-list for when the pitch lands."
              items={[
                "5–10 first meetings with friendly investors (advisors, smaller funds, tier-3 targets) BEFORE A-list asks go out",
                "Iterate the deck based on questions that come up repeatedly",
                "Identify the 3 objections that will show up in every meeting and pre-empt them in the deck",
                "By Meeting 10 the pitch is calibrated — that's when you burn T1 warm intros",
              ]}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-300">
              / Hard truth
            </div>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              <span className="text-neutral-50">
                Burning a T1 warm intro on an unrefined pitch
              </span>{" "}
              is the single most common founder mistake. You only get one
              shot per warm path — the introducer&apos;s reputation is on the
              line, and they will not re-introduce you 6 months later. Practice
              first.
            </p>
          </div>
        </div>
      </section>

      {/* 01 · THE PYRAMID */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300">
              / 01 · The pyramid
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Warm paths &gt; cold reach.
            </h2>
            <p className="mt-3 text-neutral-400">
              The single most important framing in fundraising:{" "}
              <span className="text-neutral-200">
                ~80% of your meetings come from the top of this pyramid
              </span>
              . Cold is the bottom 5%. Plan accordingly.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0a0a0d]">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-left">
                  <th className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Tier
                  </th>
                  <th className="px-3 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Path
                  </th>
                  <th className="px-3 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Conversion to meeting
                  </th>
                  <th className="px-3 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Meeting → term sheet
                  </th>
                  <th className="px-3 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Use for
                  </th>
                </tr>
              </thead>
              <tbody>
                <TierRow
                  accent="emerald"
                  tier="T1"
                  path="Warm intro from existing investor or advisor"
                  conv="40–60%"
                  conv2="5–10%"
                  use="Top 20 most-wanted funds"
                />
                <TierRow
                  accent="emerald"
                  tier="T2"
                  path="2nd-degree via portfolio CEO of an existing investor"
                  conv="20–35%"
                  conv2="3–7%"
                  use="Next 30 funds"
                />
                <TierRow
                  accent="cyan"
                  tier="T3"
                  path="2nd-degree via mutual LinkedIn connection (advisor, alumni)"
                  conv="10–20%"
                  conv2="2–4%"
                  use="Next 30 funds"
                />
                <TierRow
                  accent="amber"
                  tier="T4"
                  path="Cold (Apollo + LinkedIn InMail)"
                  conv="1–3%"
                  conv2="<1%"
                  use="Fill the bottom of the list — never your lead path"
                  last
                />
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-violet-400/25 bg-violet-400/[0.04] p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
              / Operating implication
            </div>
            <p className="mt-3 text-base leading-7 text-neutral-200">
              You will spend{" "}
              <span className="text-neutral-50">~80% of your outreach time</span>{" "}
              mapping and asking for T1 + T2 paths. Cold outreach fills out the
              long tail of the list but does not produce the lead. If you find
              yourself sending 200 cold emails before exhausting your warm
              graph, the raise is in trouble.
            </p>
          </div>
        </div>
      </section>

      {/* 02 · TOOL ROLES */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300">
              / 02 · Tool roles
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Each tool, one job.
            </h2>
            <p className="mt-3 text-neutral-400">
              You don&apos;t need all five. Minimum stack: OpenVC + Crunchbase
              + LinkedIn Sales Navigator. Add Signal NFX if you want
              (it&apos;s free). Add Apollo only if you&apos;re sending cold.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ToolCard
              name="OpenVC"
              cost="Free"
              job="Initial fund discovery"
              best={[
                "Free, founder-friendly database",
                "Filter by stage / sector / check size / geography",
                "Public profiles per fund and partner",
              ]}
              avoid="Don't use as the only source — recent investment data lags."
              accent="violet"
            />
            <ToolCard
              name="Crunchbase"
              cost="$50–80/mo"
              job="Recent investments by partner"
              best={[
                "The fund's website thesis ≠ what the partner actually invests in",
                "Crunchbase shows last 6–12 months of deals by name",
                "Filter on partners whose recent 10 deals look like yours",
              ]}
              avoid="Fund-level data alone is misleading. Always drill to the partner."
              accent="violet"
            />
            <ToolCard
              name="LinkedIn Sales Navigator"
              cost="$100/mo"
              job="Find partners + map warm paths"
              best={[
                "Look up specific partners by name + verify current role",
                "See your 1st + 2nd degree connections at each fund",
                "Identify portfolio CEOs you might be 2nd-degree to",
                "Most important tool for the warm-path work",
              ]}
              avoid="Don't InMail until warm paths are exhausted."
              accent="violet"
            />
            <ToolCard
              name="Signal NFX"
              cost="Free"
              job="Warm-intro path discovery"
              best={[
                "Type a partner's name → see your mutual connections ranked",
                "Visualizes the warm graph faster than LinkedIn",
                "Particularly good for finding non-obvious intro paths",
              ]}
              avoid="No emails — pair with LinkedIn or Apollo for contact info."
              accent="cyan"
            />
            <ToolCard
              name="Apollo"
              cost="$50–100/mo"
              job="Email-finding for cold (T4) only"
              best={[
                "Find partner email addresses for cold outreach",
                "Don't use Apollo Sequences here — fundraising is hand-crafted",
                "Use only AFTER T1–T3 warm paths exhausted",
              ]}
              avoid="Apollo Sequences = generic = signals 'spam' to a partner. Hand-write every cold email."
              accent="amber"
            />
            <ToolCard
              name="Twitter/X"
              cost="Free"
              job="Indirect warming layer"
              best={[
                "VCs are very active on X — engage with their posts before reaching out",
                "Useful for showing you've done homework",
                "Comment substantively, not generically",
              ]}
              avoid="Don't pitch in DMs — keep DMs for confirming a warm-intro context."
              accent="cyan"
            />
          </div>
        </div>
      </section>

      {/* 03 · WARM-PATH MAPPING */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">
              / 03 · Warm-path mapping
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              The actual job of fundraising.
            </h2>
            <p className="mt-3 text-neutral-400">
              For each of the 50–100 partners on your target list, 5 minutes
              of warm-path work. Output: a tracker that becomes your operating
              system for the next 8 weeks.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StepCard
              num="01"
              title="Identify the partner"
              body="Not the fund — the partner. Drill into Crunchbase to find whose recent 10 deals match your stage / sector / model. Confirm the partner is still active and at that fund (LinkedIn)."
              accent="emerald"
            />
            <StepCard
              num="02"
              title="Map mutual connections"
              body="LinkedIn Sales Nav + Signal NFX: who do you know who knows them? Rank by intro strength: existing investor > advisor > portfolio CEO > college alumni > random mutual."
              accent="emerald"
            />
            <StepCard
              num="03"
              title="Log to the tracker"
              body="Sheets with columns: Partner · Fund · Warm-path source · Tier (T1/T2/T3/T4) · Intro requested? · Intro confirmed? · Meeting booked? · Status. Religiously updated daily."
              accent="emerald"
            />
          </div>

          {/* Tracker preview */}
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0a0a0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
              Tracker schema — example rows
            </div>
            <table className="w-full min-w-[920px] text-xs">
              <thead>
                <tr className="border-b border-white/[0.06] text-left">
                  <th className="px-3 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">Partner</th>
                  <th className="px-3 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">Fund</th>
                  <th className="px-3 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">Warm-path source</th>
                  <th className="px-3 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">Tier</th>
                  <th className="px-3 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">Intro asked</th>
                  <th className="px-3 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">Meeting</th>
                  <th className="px-3 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">Status</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[11px] text-neutral-300">
                <tr className="border-b border-white/[0.04]">
                  <td className="px-3 py-2.5">Sarah K.</td>
                  <td className="px-3 py-2.5">Fund A</td>
                  <td className="px-3 py-2.5 text-emerald-300">Maya R. (existing inv)</td>
                  <td className="px-3 py-2.5"><span className="rounded bg-emerald-400/15 px-1.5 py-px text-[9px] text-emerald-300">T1</span></td>
                  <td className="px-3 py-2.5 text-neutral-100">Yes · Wk 1</td>
                  <td className="px-3 py-2.5 text-neutral-100">Booked Wk 2</td>
                  <td className="px-3 py-2.5 text-emerald-300">Partner mtg scheduled</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-3 py-2.5">David L.</td>
                  <td className="px-3 py-2.5">Fund B</td>
                  <td className="px-3 py-2.5 text-emerald-300">Aaron P. (portfolio CEO)</td>
                  <td className="px-3 py-2.5"><span className="rounded bg-emerald-400/15 px-1.5 py-px text-[9px] text-emerald-300">T2</span></td>
                  <td className="px-3 py-2.5 text-neutral-100">Yes · Wk 1</td>
                  <td className="px-3 py-2.5 text-amber-300">Pending</td>
                  <td className="px-3 py-2.5 text-amber-300">Following up Wk 3</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-3 py-2.5">Priya N.</td>
                  <td className="px-3 py-2.5">Fund C</td>
                  <td className="px-3 py-2.5 text-cyan-300">LinkedIn mutual (alumni)</td>
                  <td className="px-3 py-2.5"><span className="rounded bg-cyan-400/15 px-1.5 py-px text-[9px] text-cyan-300">T3</span></td>
                  <td className="px-3 py-2.5 text-neutral-500">Queued Wk 2</td>
                  <td className="px-3 py-2.5 text-neutral-500">—</td>
                  <td className="px-3 py-2.5 text-neutral-500">Awaiting intro send</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5">Tom S.</td>
                  <td className="px-3 py-2.5">Fund D</td>
                  <td className="px-3 py-2.5 text-amber-300">None — cold</td>
                  <td className="px-3 py-2.5"><span className="rounded bg-amber-400/15 px-1.5 py-px text-[9px] text-amber-300">T4</span></td>
                  <td className="px-3 py-2.5 text-neutral-500">Wk 4 (after warm exhausted)</td>
                  <td className="px-3 py-2.5 text-neutral-500">—</td>
                  <td className="px-3 py-2.5 text-neutral-500">Lower priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 04 · INTRO REQUEST SYSTEM */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">
              / 04 · The intro request
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Brain-dead easy for the introducer.
            </h2>
            <p className="mt-3 text-neutral-400">
              The introducer is doing you a favor with their reputation. Make
              it zero-cost to them. Forwardable copy with no edits required.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <MessageTemplate
              accent="emerald"
              label="/ Intro request to introducer"
              body={[
                "Hi Maya,",
                "",
                "Quick ask — would love your intro to Sarah K. at Fund A. I think she'd be a fit for our Series A based on her recent investments in [adjacent areas].",
                "",
                "Forwardable below — happy with a one-line forward, or to draft something you can edit. No pressure if it's not a fit; just thought I'd ask.",
                "",
                "Thanks,",
                "[You]",
                "",
                "—— Forwardable ——",
                "",
                "[Paste the 150-word forwardable here]",
              ]}
            />
            <MessageTemplate
              accent="emerald"
              label="/ Forwardable (the actual artifact Sarah reads)"
              body={[
                "Sarah —",
                "",
                "[Company] is the AI-native [category] for [buyer], replacing [legacy operating model]. We're at [traction: $X ARR, Y customers, Z growth rate].",
                "",
                "The thesis: [one paragraph on why this matters, market sizing, competitive position]. Comp pattern: [public-co comp at $XB exit].",
                "",
                "We're raising [$X Series A] with a [target lead profile] and 2–3 followers. Deck: [DocSend link]. Would value 30 minutes of your perspective even if you decide not to dig in.",
                "",
                "[Founder name + brief credibility line]",
              ]}
            />
          </div>

          <div className="mt-6 rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-6 text-neutral-400">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
              The Sarah read
            </span>
            <p className="mt-2">
              When Maya forwards this to Sarah, Sarah reads ~12 seconds. She
              decides yes/no based on (1) credibility signal from Maya, (2)
              fit with her recent portfolio, (3) traction headline, (4)
              specific ask. Every word of the forwardable earns its place.
            </p>
          </div>
        </div>
      </section>

      {/* 05 · COLD OUTREACH (T4) */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-300">
              / 05 · Cold outreach (T4 only)
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              The realistic last resort.
            </h2>
            <p className="mt-3 text-neutral-400">
              Use only when warm paths exhausted. Hit rate is 1–3%.
              Hand-crafted per partner, never sequenced or templated.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <MessageTemplate
              accent="amber"
              label="/ Cold email to partner"
              body={[
                "Subject: AI-native [category] — [recent portfolio investment] adjacent",
                "",
                "Hi Tom,",
                "",
                "I noticed you led [recent investment] at [their portfolio co]. We're building [Company] — the AI-native [category] for [buyer], a pattern I think extends naturally from what [their portfolio co] is solving on the [adjacent angle].",
                "",
                "Quick stats: [$X ARR · Y customers · Z growth]. Comp pattern: [public co at $XB exit]. Currently raising [$X round].",
                "",
                "Would 20 minutes be worth your time? Happy to send a deck first if useful.",
                "",
                "Thanks,",
                "[You]",
              ]}
            />
            <MessageTemplate
              accent="amber"
              label="/ LinkedIn InMail to partner"
              body={[
                "Hi Tom,",
                "",
                "I'm building [Company] — AI-native [category] for [buyer]. Saw your investment in [recent portfolio co] and the pattern overlaps directly with the thesis we're operating on.",
                "",
                "Quick context: [$X ARR · Y customers]. Currently raising [$X Series A].",
                "",
                "Worth 20 minutes? I can send a deck.",
                "",
                "[You]",
              ]}
            />
          </div>

          <div className="mt-6 rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-300">
              / Hard rules for cold outreach
            </div>
            <ul className="mt-4 space-y-2.5 text-sm leading-6 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                <span>
                  <span className="text-neutral-50">Never use Apollo Sequences for fundraising.</span>{" "}
                  Templated emails to partners signal &ldquo;spray-and-pray
                  fundraise&rdquo; — instant pass.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                <span>
                  <span className="text-neutral-50">Reference their actual portfolio.</span>{" "}
                  Generic &ldquo;saw your thesis on the website&rdquo; reads as
                  homework not done. Reference last 6 months of deals.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                <span>
                  <span className="text-neutral-50">One follow-up max.</span>{" "}
                  Cold + silence = move on. Two follow-ups on cold is
                  harassment of someone who&apos;s already passed silently.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                <span>
                  <span className="text-neutral-50">Cold never produces your lead.</span>{" "}
                  Cold can produce a follower if the warm-path leader takes
                  the deal first. Plan accordingly.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 06 · 8-WEEK SPRINT CADENCE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300">
              / 06 · The 8-week sprint
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              The cadence.
            </h2>
            <p className="mt-3 text-neutral-400">
              Time-box the raise. Run hard for 8 weeks, then stop. If
              you&apos;re still doing first meetings in Week 6, the raise is
              in trouble.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <WeekCard
              week="Week –1"
              phase="Prep"
              accent="amber"
              items={[
                "Finalize deck + data room",
                "Pre-warm advisors with heads-up",
                "Lock target list (50–100)",
                "Practice pitch on 5 friendlies",
              ]}
            />
            <WeekCard
              week="Week 1"
              phase="Open"
              accent="violet"
              items={[
                "T1 + T2 intro requests sent (20–30 in flight)",
                "Begin first calls with friendlies",
                "Refine pitch based on early objections",
              ]}
            />
            <WeekCard
              week="Week 2"
              phase="Ramp"
              accent="violet"
              items={[
                "First meetings: 10–15 held",
                "Intros for next batch sent",
                "Identify partners moving fast vs slow",
              ]}
            />
            <WeekCard
              week="Week 3–4"
              phase="Peak"
              accent="violet"
              items={[
                "Peak meeting volume: 20–30 first meetings",
                "Begin partner meetings + deep dives",
                "T4 cold sent to fill long tail",
                "Identify likely leads (3–5 firms)",
              ]}
            />
            <WeekCard
              week="Week 5–6"
              phase="Deep"
              accent="emerald"
              items={[
                "Partner meetings: 8–15",
                "IC presentations: 3–7",
                "Reference calls in flight",
                "Term sheet conversations begin",
              ]}
            />
            <WeekCard
              week="Week 7"
              phase="Sheets"
              accent="emerald"
              items={[
                "Term sheets arrive (1–3)",
                "Negotiate terms in parallel",
                "Pick a lead",
                "Communicate timing to followers",
              ]}
            />
            <WeekCard
              week="Week 8"
              phase="Close"
              accent="emerald"
              items={[
                "Sign lead term sheet",
                "Fill out round with followers",
                "Legal: docs + diligence",
                "Wire + announce",
              ]}
            />
            <WeekCard
              week="Post"
              phase="Reset"
              accent="amber"
              items={[
                "Update tracker — who passed, why, who to re-engage later",
                "Thank every introducer with outcome",
                "Add to investor update list for ongoing nurture",
                "Return to building product",
              ]}
            />
          </div>

          <div className="mt-6 rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-6 text-neutral-400">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300">
              Time-box discipline
            </span>
            <p className="mt-2">
              <span className="text-neutral-200">
                If the raise extends past 10 weeks without a term sheet, stop.
              </span>{" "}
              The market is telling you something — pitch is broken, traction
              is light, or category is out of favor. Keep raising forever and
              you signal desperation, which becomes self-fulfilling.
            </p>
          </div>
        </div>
      </section>

      {/* 07 · DAILY ROUTINE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              / 07 · Daily routine
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              A day in the sprint.
            </h2>
            <p className="mt-3 text-neutral-400">
              ~4 hours on outreach + meetings, plus prep + team coordination.
              Building product pauses during active weeks. Plan accordingly.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <RoutineBlock
              accent="violet"
              when="Morning"
              duration="2 hrs"
              tool="Meetings"
              tasks={[
                "3–5 investor first meetings or partner meetings",
                "Same core pitch, adjust based on the partner's recent investments",
                "Take notes on every objection that surfaces",
              ]}
            />
            <RoutineBlock
              accent="cyan"
              when="Afternoon"
              duration="1.5 hrs"
              tool="Follow-up + new asks"
              tasks={[
                "Thank-you notes within 24 hrs of every meeting",
                "Send next round of intro requests (10–15)",
                "Update data room per any IC feedback from prior day",
              ]}
            />
            <RoutineBlock
              accent="emerald"
              when="End of day"
              duration="30 min"
              tool="Tracker"
              tasks={[
                "Update status on every partner you spoke with",
                "Flag who's escalating, who's slow-rolling, who needs a nudge",
                "Plan tomorrow's meetings + prep priorities",
              ]}
            />
          </div>
        </div>
      </section>

      {/* 08 · REALITY + FAILURE MODES */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">
              / 08 · Reality + failure modes
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              What 8 weeks of this produces.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                / Realistic funnel
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                <FunnelRow stage="Funds on target list" count="50–100" />
                <FunnelRow stage="Warm intro requests sent" count="40–80" />
                <FunnelRow stage="First meetings held" count="20–40" />
                <FunnelRow stage="Partner meetings" count="8–15" />
                <FunnelRow stage="Deep dives / IC presentations" count="3–7" />
                <FunnelRow stage="Term sheets" count="1–3" />
                <FunnelRow stage="Lead investor" count="1" highlight />
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-300">
                / Common failure modes
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Going wide before going deep on warm paths.</span>{" "}
                    Sending 200 cold emails before exhausting your warm graph
                    is the sign of an inexperienced founder.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Pitching the wrong partner at the right fund.</span>{" "}
                    Generalists pass; the partner who does your sector reads
                    your deck. Drill to the partner.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Inconsistent narrative across meetings.</span>{" "}
                    Telling SaaS VCs you&apos;re SaaS and AI VCs you&apos;re
                    AI signals you&apos;re shopping a half-formed story.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Burning T1 intros on a half-baked deck.</span>{" "}
                    Practice on tier-3 funds first; save T1 intros for when
                    the pitch lands consistently.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">No tracker.</span>{" "}
                    You will lose track of who&apos;s where. Sheets template,
                    updated religiously, becomes your sprint OS.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Not running parallel.</span>{" "}
                    Sequential conversations produce exploding offers with
                    zero leverage. Run 10+ deep dives in parallel so term
                    sheets arrive within 1–2 weeks of each other.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Open-ended raise.</span>{" "}
                    Past 10 weeks without a term sheet = stop, regroup, fix
                    something material before restarting. The market signal
                    is real.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// Helpers
// ============================================================
function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
      <div className="text-2xl font-medium text-neutral-50 md:text-3xl">
        {value}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
        {label}
      </div>
    </div>
  );
}

type Accent = "emerald" | "cyan" | "violet" | "amber";

const accentMap: Record<
  Accent,
  { text: string; border: string; bg: string; dot: string; bgSoft: string }
> = {
  emerald: {
    text: "text-emerald-300",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/[0.05]",
    dot: "bg-emerald-400",
    bgSoft: "bg-emerald-400/[0.04]",
  },
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/[0.05]",
    dot: "bg-cyan-400",
    bgSoft: "bg-cyan-400/[0.04]",
  },
  violet: {
    text: "text-violet-300",
    border: "border-violet-400/30",
    bg: "bg-violet-400/[0.05]",
    dot: "bg-violet-400",
    bgSoft: "bg-violet-400/[0.04]",
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-400/30",
    bg: "bg-amber-400/[0.05]",
    dot: "bg-amber-400",
    bgSoft: "bg-amber-400/[0.04]",
  },
};

function PrereqCard({
  num,
  title,
  tagline,
  items,
}: {
  num: string;
  title: string;
  tagline: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.04] p-6 md:p-7">
      <div className="flex items-baseline gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-400/40 font-mono text-xs text-amber-200">
          {num}
        </span>
        <h3 className="text-xl font-medium text-neutral-50">{title}</h3>
      </div>
      <p className="mt-3 text-sm italic text-amber-200/80">{tagline}</p>
      <ul className="mt-5 space-y-2.5 text-sm leading-6 text-neutral-300">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-300" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TierRow({
  accent,
  tier,
  path,
  conv,
  conv2,
  use,
  last,
}: {
  accent: Accent;
  tier: string;
  path: string;
  conv: string;
  conv2: string;
  use: string;
  last?: boolean;
}) {
  const a = accentMap[accent];
  return (
    <tr className={last ? "" : "border-b border-white/[0.04]"}>
      <td className="px-5 py-4">
        <span
          className={`inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-[10px] ${a.bg} ${a.text} ${a.border}`}
        >
          {tier}
        </span>
      </td>
      <td className="px-3 py-4 text-neutral-200">{path}</td>
      <td className={`px-3 py-4 font-mono ${a.text}`}>{conv}</td>
      <td className={`px-3 py-4 font-mono ${a.text}`}>{conv2}</td>
      <td className="px-3 py-4 text-neutral-400">{use}</td>
    </tr>
  );
}

function ToolCard({
  name,
  cost,
  job,
  best,
  avoid,
  accent,
}: {
  name: string;
  cost: string;
  job: string;
  best: string[];
  avoid: string;
  accent: Accent;
}) {
  const a = accentMap[accent];
  return (
    <div className={`rounded-2xl border ${a.border} ${a.bgSoft} p-6`}>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-medium text-neutral-50">{name}</h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
          {cost}
        </span>
      </div>
      <div className={`mt-2 font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}>
        {job}
      </div>
      <ul className="mt-4 space-y-2 text-xs leading-5 text-neutral-300">
        {best.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-white/[0.06] pt-3 text-xs italic leading-5 text-neutral-500">
        ⚠ {avoid}
      </p>
    </div>
  );
}

function StepCard({
  num,
  title,
  body,
  accent,
}: {
  num: string;
  title: string;
  body: string;
  accent: Accent;
}) {
  const a = accentMap[accent];
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
      <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}>
        / {num}
      </div>
      <div className="mt-2 text-lg font-medium text-neutral-50">{title}</div>
      <p className="mt-3 text-sm leading-6 text-neutral-300">{body}</p>
    </div>
  );
}

function MessageTemplate({
  accent,
  label,
  body,
}: {
  accent: Accent;
  label: string;
  body: string[];
}) {
  const a = accentMap[accent];
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7">
      <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}>
        {label}
      </div>
      <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/40 p-4 font-mono text-[13px] leading-6 text-neutral-300">
        {body.map((line, i) => (
          <div key={i} className={line === "" ? "h-3" : ""}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function WeekCard({
  week,
  phase,
  accent,
  items,
}: {
  week: string;
  phase: string;
  accent: Accent;
  items: string[];
}) {
  const a = accentMap[accent];
  return (
    <div className={`rounded-2xl border ${a.border} ${a.bgSoft} p-5`}>
      <div className="flex items-baseline justify-between">
        <div className="text-sm font-medium text-neutral-50">{week}</div>
        <div className={`font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>
          {phase}
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-xs leading-5 text-neutral-300">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoutineBlock({
  accent,
  when,
  duration,
  tool,
  tasks,
}: {
  accent: Accent;
  when: string;
  duration: string;
  tool: string;
  tasks: string[];
}) {
  const a = accentMap[accent];
  return (
    <div className={`rounded-2xl border ${a.border} ${a.bgSoft} p-7 md:p-8`}>
      <div className="flex items-baseline justify-between">
        <div>
          <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}>
            {when}
          </div>
          <div className="mt-1 text-xl font-medium text-neutral-50">{tool}</div>
        </div>
        <div className="rounded-full border border-white/[0.12] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-300">
          {duration}
        </div>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-neutral-300">
        {tasks.map((t) => (
          <li key={t} className="flex items-start gap-3">
            <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FunnelRow({
  stage,
  count,
  highlight,
}: {
  stage: string;
  count: string;
  highlight?: boolean;
}) {
  return (
    <li
      className={`flex items-center justify-between border-b border-white/[0.04] pb-2 last:border-0 last:pb-0 ${
        highlight ? "text-emerald-200" : ""
      }`}
    >
      <span className={highlight ? "" : "text-neutral-400"}>
        {highlight && "→ "}
        {stage}
      </span>
      <span className={`font-mono ${highlight ? "text-emerald-300" : "text-neutral-100"}`}>
        {count}
      </span>
    </li>
  );
}
