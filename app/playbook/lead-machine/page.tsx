import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lead Machine",
  description:
    "Two channels, one workflow — Apollo + LinkedIn Sales Navigator producing qualified leads daily.",
  robots: { index: false, follow: false },
};

// ============================================================
// Page
// ============================================================
export default function LeadMachinePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
            / Lead Machine
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            The{" "}
            <span className="font-serif italic text-gradient">lead machine</span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Two channels. One workflow. Concentrated on a narrow ICP — not
            scattered research. Steady-state{" "}
            <span className="text-neutral-200">30 min/day</span> after a 4–6
            week ramp. Expected:{" "}
            <span className="text-neutral-200">
              1–3 qualified meetings per month per venture
            </span>{" "}
            once the system is live.
          </p>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <MetricCard label="Apollo emails/day" value="20" />
            <MetricCard label="LinkedIn connects/day" value="10" />
            <MetricCard label="Daily touches" value="30" />
            <MetricCard label="Steady-state time" value="30 min" />
          </div>
        </div>
      </section>

      {/* PREREQUISITES — must exist before any outbound starts */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-300">
              / 00 · Prerequisites
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Before you send a single email.
            </h2>
            <p className="mt-3 text-neutral-400">
              Skipping this section means the rest of the playbook produces
              ~10% of expected output. Three things must be in place before
              any outbound starts.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <PrereqCard
              num="P1"
              title="Email deliverability"
              tagline="Without this, half your sends never reach the inbox."
              items={[
                "Dedicated sending domain (e.g., serebrumventures.com — NOT serebrum.ai)",
                "Mailbox warmup tool (Instantly / Lemwarm / Mailreach) for 4–6 weeks before any cold send",
                "SPF · DKIM · DMARC configured and validated",
                "≤30 sends/day per mailbox to stay off spam lists",
                "Use 2–3 mailboxes to scale to 20/day safely",
              ]}
            />
            <PrereqCard
              num="P2"
              title="LinkedIn profile credibility"
              tagline="Cold connects from low-credibility profiles get auto-flagged."
              items={[
                "500+ existing connections (minimum threshold)",
                "Professional headshot · complete About section · banner",
                "Posting cadence of ≥1 post/week for 4 weeks prior",
                "Recent endorsements or recommendations visible",
                "Activity feed showing engagement (likes/comments on others' posts)",
              ]}
            />
            <PrereqCard
              num="P3"
              title="Ramp-up reality"
              tagline="30 min/day is the steady state, not the setup."
              items={[
                "Weeks 1–2: ICP definition, list build, template iteration (≈6 hrs/wk)",
                "Weeks 3–4: deliverability warmup, LinkedIn engagement build (≈4 hrs/wk)",
                "Weeks 5–6: low-volume cold sends to validate (≈3 hrs/wk)",
                "Week 7+: steady-state 30 min/day, results compound",
                "No qualified meetings expected before week 6",
              ]}
            />
          </div>

          {/* Honest definition of 'qualified conversation' */}
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
              / What &ldquo;qualified&rdquo; actually means
            </div>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              The funnel has four distinct stages. They are NOT
              interchangeable. The most common framework failure is treating a
              reply as a conversation, or a conversation as a meeting.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              <FunnelStage
                label="Reply"
                def="Any response that isn't auto-bounce, unsubscribe, or out-of-office. ~2–3% of cold sends."
                pct="100%"
              />
              <FunnelStage
                label="Conversation"
                def="2+ back-and-forth exchanges, not just one acknowledgment."
                pct="~30%"
              />
              <FunnelStage
                label="Meeting"
                def="Calendar invite accepted, call held, agenda followed."
                pct="~30%"
              />
              <FunnelStage
                label="Qualified"
                def="Matches ICP · budget exists · timeline defined · buying authority confirmed."
                pct="~40%"
                emphasize
              />
            </div>
            <p className="mt-5 text-xs leading-5 text-neutral-500">
              Math from 100 cold emails: ~2–3 replies → ~1 conversation → ~0.3
              meetings → ~0.1 qualified opportunities. That&apos;s why the
              system depends on daily volume, not per-email magic.
            </p>
          </div>
        </div>
      </section>

      {/* TWO ENGINES */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 01 · The framework
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Two engines, one workflow.
            </h2>
            <p className="mt-3 text-neutral-400">
              Apollo and Sales Navigator are separate acquisition engines.
              They converge on the same prospect to compound trust through
              multi-touch familiarity.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <EngineCard
              accent="cyan"
              num="A"
              title="Apollo"
              role="High-volume outbound email"
              traits={[
                "Scale + template-driven",
                "Cold-to-warm prospects",
                "Discoverability via filters",
              ]}
              dailyOutput="1 qualified conversation/day"
              best="Net-new pipeline at volume"
            />
            <EngineCard
              accent="violet"
              num="L"
              title="Sales Navigator"
              role="Relationship-led warm conversations"
              traits={[
                "Trust-building + signal-driven",
                "Higher-value prospects",
                "Job change / promotion / post triggers",
              ]}
              dailyOutput="1 qualified conversation/day"
              best="Enterprise + complex sales"
            />
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                / Operating principle
              </div>
              <p className="mt-3 text-base leading-7 text-neutral-200">
                The mistake most people make is spending time researching. The
                goal is a repeatable system that produces{" "}
                <span className="text-neutral-50">daily conversations</span> —
                not perfect lists.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.04] p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">
                / Concentration discipline (most important rule)
              </div>
              <p className="mt-3 text-base leading-7 text-neutral-200">
                One product. One persona. One company profile. Mixed-ICP
                sequences cut response rates{" "}
                <span className="text-neutral-50">3–5×</span> and waste the
                machine&apos;s volume. Pick FedStat or Vygor or the wealth
                platform — not all three.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APOLLO CHANNEL */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              / 02 · Apollo channel
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Apollo — the volume engine.
            </h2>
            <p className="mt-3 text-neutral-400">
              Three steps. Daily cadence. 20 prospects × 5% response = 1
              conversation per day.
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-4 md:grid-cols-3">
            <StepCard
              num="01"
              title="Define a narrow ICP"
              body="Pick ONE product, one persona, one company profile. Concentration wins over breadth — multi-product Apollo lists collapse response rates."
              accent="cyan"
            />
            <StepCard
              num="02"
              title="Build a 100-prospect list"
              body="Filter on title, industry, company size, geography. Save the list as a tier. Refresh weekly with new matches."
              accent="cyan"
            />
            <StepCard
              num="03"
              title="Send 20 emails/day"
              body="Twenty new prospects daily, plus 5 follow-ups to prior batches. At 2–3% reply rate, expect ~0.5 reply/day → ~2–3 replies/week → ~1 real conversation/week from this channel alone."
              accent="cyan"
            />
          </div>

          {/* ICP example */}
          <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
              / Example ICP — FedStat
            </div>
            <h3 className="mt-3 text-xl font-medium text-neutral-50">
              IT Financial Management buyer
            </h3>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <DefRow term="Job titles" def="CIO · Director IT Finance · IT Portfolio Manager" />
              <DefRow term="Industry" def="Federal agencies · Government contractors" />
              <DefRow term="Company size" def="500–5,000 employees" />
              <DefRow term="Geography" def="USA" />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/[0.05] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
              Saved list · FedStat — Tier 1 Prospects
            </div>
          </div>

          {/* Email template */}
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
              / Apollo email template
            </div>
            <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/40 p-5 font-mono text-[13px] leading-6 text-neutral-300">
              <div className="text-neutral-500">Subject:</div>
              <div className="text-neutral-100">
                Reducing IT spend visibility gaps
              </div>

              <div className="mt-5">
                Hi <span className="text-cyan-300">{"{{FirstName}}"}</span>,
              </div>
              <div className="mt-3">
                I noticed you&apos;re responsible for IT budgeting and
                portfolio management.
              </div>
              <div className="mt-3">
                We&apos;ve developed an AI-driven platform that helps
                organizations improve:
              </div>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-neutral-300">
                <li>IT budget planning</li>
                <li>Portfolio prioritization</li>
                <li>Application rationalization</li>
              </ul>
              <div className="mt-3">
                Would it make sense to explore whether this could help{" "}
                <span className="text-cyan-300">{"{{Company}}"}</span>?
              </div>
              <div className="mt-5">Regards,</div>
              <div>
                <span className="text-cyan-300">{"{{Name}}"}</span>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <KPICard
              label="Daily volume"
              rows={[
                ["New emails", "20"],
                ["Follow-ups", "5"],
              ]}
              accent="cyan"
            />
            <KPICard
              label="Honest rates"
              rows={[
                ["Reply rate", "2–3%"],
                ["Reply→conversation", "~30%"],
                ["Conv→meeting", "~30%"],
              ]}
              accent="cyan"
            />
            <KPICard
              label="Steady-state output"
              rows={[
                ["Replies/wk", "2–4"],
                ["Conversations/wk", "~1"],
                ["Meetings/mo", "1–2"],
              ]}
              accent="emerald"
            />
          </div>

          {/* Open-rate caveat */}
          <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-5 text-neutral-400">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300">
              Note on open rate
            </span>
            <p className="mt-2">
              Post Apple Mail Privacy Protection, &ldquo;open rate&rdquo; is no
              longer a reliable signal — Apple auto-opens emails on its
              servers, inflating opens to 30–50% regardless of true engagement.
              Track <span className="text-neutral-200">reply rate</span> and{" "}
              <span className="text-neutral-200">bounce rate</span> instead.
            </p>
          </div>
        </div>
      </section>

      {/* LINKEDIN CHANNEL */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300">
              / 03 · Sales Navigator channel
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              LinkedIn — the trust engine.
            </h2>
            <p className="mt-3 text-neutral-400">
              Higher-value prospects. Lower volume. Engagement before pitching
              — Sales Navigator&apos;s signals make it work.
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <StepCard
              num="01"
              title="Create saved searches"
              body="Title + geography + company filters. Saved search auto-surfaces matches daily."
              accent="violet"
            />
            <StepCard
              num="02"
              title="Review new leads daily"
              body="Sales Nav surfaces job changes, posts, promotions. These are conversation openers."
              accent="violet"
            />
            <StepCard
              num="03"
              title="Connect with 10/day"
              body="Personal connection request. No pitch. Just signal-based familiarity."
              accent="violet"
            />
            <StepCard
              num="04"
              title="Engage before pitching"
              body="3 likes + 2 comments per day on prospects' posts. Lifts acceptance rate ~2×."
              accent="violet"
            />
            <StepCard
              num="05"
              title="Follow up after accept"
              body="Curious-question opener. No pitch in the first message. Lead with their perspective."
              accent="violet"
            />
          </div>

          {/* Saved search example */}
          <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
              / Example saved search
            </div>
            <h3 className="mt-3 text-xl font-medium text-neutral-50">
              FedStat IT-finance buyer
            </h3>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <DefRow term="Title" def="CIO · CTO · Director IT Finance · Portfolio Manager" />
              <DefRow term="Geography" def="USA" />
              <DefRow term="Company" def="Government contractors · Federal agencies · Enterprise" />
            </div>
          </div>

          {/* Templates */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <MessageTemplate
              accent="violet"
              label="/ Connection request"
              body={[
                "Hi John,",
                "",
                "I work with organizations improving IT financial management and portfolio planning.",
                "",
                "Thought it would be valuable to connect.",
                "",
                "Thanks,",
                "Steve",
              ]}
            />
            <MessageTemplate
              accent="violet"
              label="/ Follow-up message (post-accept)"
              body={[
                "Hi John,",
                "",
                "Thanks for connecting.",
                "",
                "Curious how your team currently handles IT portfolio prioritization and budget planning.",
                "",
                "We've been helping organizations improve visibility and governance through AI-driven tooling.",
                "",
                "Would be interested in hearing your perspective.",
              ]}
            />
          </div>

          {/* KPIs */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <KPICard
              label="Daily volume"
              rows={[
                ["Connection requests", "10"],
                ["Engagements (like/comment)", "3"],
                ["Follow-up messages", "2"],
              ]}
              accent="violet"
            />
            <KPICard
              label="Honest rates"
              rows={[
                ["Cold acceptance", "20–25%"],
                ["With prior engagement", "30–45%"],
                ["Accept → reply", "20–30%"],
              ]}
              accent="violet"
            />
            <KPICard
              label="Steady-state output"
              rows={[
                ["Conversations/wk", "2–4"],
                ["Meetings/mo", "1–3"],
              ]}
              accent="emerald"
            />
          </div>

          {/* LinkedIn weekly limit caveat */}
          <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-5 text-neutral-400">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300">
              Note on LinkedIn limits
            </span>
            <p className="mt-2">
              LinkedIn caps connection requests at ~100/week per account
              (enforced weekly, not daily). 10/day × 5 weekdays = 50/week
              stays safely under. Going over triggers warnings, then
              restrictions. Use Sales Navigator&apos;s InMail allotment for
              high-value targets outside the connection-request limit.
            </p>
          </div>
        </div>
      </section>

      {/* COMBINED MULTI-TOUCH */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 04 · Combined workflow
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Multi-touch — same prospect, both channels, 30 days.
            </h2>
            <p className="mt-3 text-neutral-400">
              Apollo and Sales Nav converge on the same person over 30 days
              with 6–8 touches. Familiarity compounds. Outperforms email-only
              or LinkedIn-only by ~2–3× on response rate.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DayCard
              day="Day 1"
              touches={[
                { channel: "Apollo", action: "Cold email", accent: "cyan" },
                { channel: "Sales Nav", action: "Connection request", accent: "violet" },
              ]}
            />
            <DayCard
              day="Day 3"
              touches={[
                { channel: "Sales Nav", action: "Like 1–2 of their posts", accent: "violet" },
              ]}
              note="Passive signal — they notice"
            />
            <DayCard
              day="Day 5"
              touches={[
                { channel: "Apollo", action: "Follow-up email (different angle)", accent: "cyan" },
              ]}
            />
            <DayCard
              day="Day 8"
              touches={[
                { channel: "Sales Nav", action: "Comment substantively on a post", accent: "violet" },
              ]}
            />
            <DayCard
              day="Day 12"
              touches={[
                { channel: "Apollo", action: "Value-add email (case study, data)", accent: "cyan" },
              ]}
            />
            <DayCard
              day="Day 16"
              touches={[
                { channel: "Sales Nav", action: "DM if connected (curiosity opener)", accent: "violet" },
              ]}
              note="If connection accepted"
            />
            <DayCard
              day="Day 23"
              touches={[
                { channel: "Apollo", action: "Break-up email (low-friction ask)", accent: "cyan" },
              ]}
              note="Often triggers reply"
            />
            <DayCard
              day="Day 30"
              touches={[
                { channel: "Decision", action: "Move to long-term nurture or remove", accent: "emerald" },
              ]}
              note="No false hope"
            />
          </div>

          <div className="mt-6 rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-6 text-neutral-400">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
              Touch count
            </span>
            <p className="mt-2">
              6–8 touches over 30 days. Industry data: 78% of replies happen
              after touch 3. Stopping at Day 7 leaves most of the response
              curve on the table. Continuing past Day 30 without a reply tips
              into harassment — move them to a long-term nurture list instead.
            </p>
          </div>
        </div>
      </section>

      {/* DAILY 30-MIN ROUTINE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-300">
              / 05 · Daily routine
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              The 30-minute lead machine.
            </h2>
            <p className="mt-3 text-neutral-400">
              Two blocks. Same time every day. Process matters more than
              creativity here.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <RoutineBlock
              accent="cyan"
              when="Morning"
              duration="15 min"
              tool="Apollo"
              tasks={[
                "Add 20 prospects to today's batch",
                "Send 20 emails using the saved template",
                "Send 5 follow-ups to prior days' non-responders",
              ]}
            />
            <RoutineBlock
              accent="violet"
              when="Afternoon"
              duration="15 min"
              tool="Sales Navigator"
              tasks={[
                "Send 10 connection requests (no pitch)",
                "Engage with 3 posts (like + comment)",
                "Send 2 follow-up messages to recent accepts",
              ]}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
              / Total steady-state output
            </div>
            <div className="mt-3 grid gap-4 md:grid-cols-4">
              <div>
                <div className="text-3xl font-medium text-neutral-50">30</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                  Touches/day
                </div>
              </div>
              <div>
                <div className="text-3xl font-medium text-neutral-50">3–5</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                  Conversations/week
                </div>
              </div>
              <div>
                <div className="text-3xl font-medium text-emerald-300">
                  1–3
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                  Qualified meetings/month
                </div>
              </div>
              <div>
                <div className="text-3xl font-medium text-amber-300">4–6w</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                  Ramp before results
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REALITY CHECK + COMMON FAILURE MODES */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 06 · Reality check
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              What 90 days of this produces.
            </h2>
            <p className="mt-3 text-neutral-400">
              Honest math. Steady-state outputs after the 4–6 week ramp,
              assuming all three prerequisites are in place.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                / Expected steady-state output
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    <span className="text-neutral-50">
                      ~660 touches/month
                    </span>{" "}
                    (30/day × 22 working days)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    <span className="text-neutral-50">
                      12–20 real conversations/month
                    </span>{" "}
                    across both channels
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    <span className="text-neutral-50">
                      1–3 qualified meetings/month
                    </span>{" "}
                    after conversation-to-meeting and meeting-to-qualified
                    filtering
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    <span className="text-neutral-50">3–9 qualified meetings/quarter</span>{" "}
                    — enough pipeline to justify the time
                  </span>
                </li>
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
                    <span className="text-neutral-50">Skipping deliverability setup.</span>{" "}
                    Half your sends go to spam. Open rate looks fine because
                    spam folders still &ldquo;open&rdquo; via MPP.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Mixed-product list.</span>{" "}
                    Selling FedStat + Vygor + Wellness in one sequence cuts
                    response rate 3–5×. Pick ONE.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Stopping at touch 3.</span>{" "}
                    ~78% of replies come after touch 3. Quitting at Day 7
                    leaves most of the response curve on the table.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Treating replies as meetings.</span>{" "}
                    Most replies are &ldquo;not interested&rdquo; or &ldquo;wrong person.&rdquo;
                    The conversion path is 4 stages, not 1.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <span className="text-neutral-50">Expecting results week 1.</span>{" "}
                    No qualified meetings before week 6. Plan capital and
                    morale accordingly.
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

function FunnelStage({
  label,
  def,
  pct,
  emphasize,
}: {
  label: string;
  def: string;
  pct: string;
  emphasize?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        emphasize
          ? "border-emerald-400/40 bg-emerald-400/[0.06]"
          : "border-white/[0.08] bg-white/[0.02]"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <span
          className={`text-sm font-medium ${
            emphasize ? "text-emerald-200" : "text-neutral-50"
          }`}
        >
          {label}
        </span>
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
            emphasize ? "text-emerald-300" : "text-neutral-500"
          }`}
        >
          → {pct}
        </span>
      </div>
      <p className="mt-2 text-xs leading-5 text-neutral-400">{def}</p>
    </div>
  );
}

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

type Accent = "cyan" | "violet" | "amber" | "emerald";

const accentMap: Record<
  Accent,
  { text: string; border: string; bg: string; dot: string; bgSoft: string }
> = {
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
  emerald: {
    text: "text-emerald-300",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/[0.05]",
    dot: "bg-emerald-400",
    bgSoft: "bg-emerald-400/[0.04]",
  },
};

function EngineCard({
  accent,
  num,
  title,
  role,
  traits,
  dailyOutput,
  best,
}: {
  accent: Accent;
  num: string;
  title: string;
  role: string;
  traits: string[];
  dailyOutput: string;
  best: string;
}) {
  const a = accentMap[accent];
  return (
    <div
      className={`rounded-2xl border ${a.border} ${a.bgSoft} p-7 md:p-8`}
    >
      <div className="flex items-baseline gap-3">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full border ${a.border} font-mono text-xs ${a.text}`}
        >
          {num}
        </span>
        <h3 className="text-2xl font-medium text-neutral-50">{title}</h3>
      </div>
      <p className={`mt-3 text-sm ${a.text}`}>{role}</p>
      <ul className="mt-5 space-y-2 text-sm text-neutral-300">
        {traits.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <span
              className={`mt-2 h-1 w-1 shrink-0 rounded-full ${a.dot}`}
            />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid gap-3 border-t border-white/[0.06] pt-5 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-mono uppercase tracking-[0.18em] text-neutral-500">
            Daily output
          </span>
          <span className="text-neutral-200">{dailyOutput}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono uppercase tracking-[0.18em] text-neutral-500">
            Best for
          </span>
          <span className="text-neutral-200">{best}</span>
        </div>
      </div>
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
    <div className={`rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6`}>
      <div
        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}
      >
        / {num}
      </div>
      <div className="mt-2 text-lg font-medium text-neutral-50">{title}</div>
      <p className="mt-3 text-sm leading-6 text-neutral-300">{body}</p>
    </div>
  );
}

function DefRow({ term, def }: { term: string; def: string }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
        {term}
      </div>
      <div className="mt-1 text-sm text-neutral-200">{def}</div>
    </div>
  );
}

function KPICard({
  label,
  rows,
  accent,
}: {
  label: string;
  rows: [string, string][];
  accent: Accent;
}) {
  const a = accentMap[accent];
  return (
    <div className={`rounded-2xl border ${a.border} ${a.bgSoft} p-6`}>
      <div
        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}
      >
        {label}
      </div>
      <div className="mt-3 space-y-2">
        {rows.map(([k, v]) => (
          <div
            key={k}
            className="flex items-center justify-between border-b border-white/[0.04] pb-2 text-sm last:border-0 last:pb-0"
          >
            <span className="text-neutral-400">{k}</span>
            <span className="font-mono text-neutral-100">{v}</span>
          </div>
        ))}
      </div>
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
      <div
        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}
      >
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

function DayCard({
  day,
  touches,
  note,
}: {
  day: string;
  touches: { channel: string; action: string; accent: Accent }[];
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
        {day}
      </div>
      <div className="mt-4 space-y-3">
        {touches.map((t, i) => {
          const a = accentMap[t.accent];
          return (
            <div key={i} className="flex items-start gap-2">
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`}
              />
              <div className="text-sm">
                <span className={`font-mono text-[10px] ${a.text}`}>
                  {t.channel}
                </span>
                <div className="text-neutral-200">{t.action}</div>
              </div>
            </div>
          );
        })}
      </div>
      {note && (
        <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
          {note}
        </div>
      )}
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
          <div
            className={`font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}
          >
            {when}
          </div>
          <div className="mt-1 text-2xl font-medium text-neutral-50">
            {tool}
          </div>
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
