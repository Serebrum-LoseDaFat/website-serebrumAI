import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vygor · Gym Partnerships",
  description:
    "SDR-executable gym partnership playbook — Apollo + LinkedIn Sales Nav targeting boutique studios and PT-led gyms.",
  robots: { index: false, follow: false },
};

// ============================================================
// Page
// ============================================================
export default function VygorGymsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400">
            / Vygor · V1 · Gyms
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            The{" "}
            <span className="font-serif italic text-gradient">gym partner</span>{" "}
            play.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            50% of new gym members drop off within 6 months — not because the
            training is bad, but because there&apos;s no nutrition and habit
            layer to go with it. Vygor fills that gap.{" "}
            <span className="text-neutral-200">
              AI Dietitian · AI Trainer · habit tracking · member contests
            </span>{" "}
            — all in one app that works alongside the gym&apos;s existing
            program.
          </p>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <MetricCard label="Members drop off ≤6 mo" value="50%" sub="the problem" />
            <MetricCard label="Higher retention" value="+20%" sub="McKinsey, 2023" />
            <MetricCard label="More revenue / member" value="+25%" sub="McKinsey, 2023" />
            <MetricCard label="Exercise adherence lift" value="2.5×" sub="Les Mills, 2024" />
          </div>
        </div>
      </section>

      {/* ICP & ACCOUNT TIERS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              / 00 · ICP & account tiers
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Who to target — and in what order.
            </h2>
            <p className="mt-3 text-neutral-400">
              Gym operators vary enormously. Tier 1 accounts have the highest
              close rate because their business model is 100% tied to member
              results — and Vygor directly improves results. Work top to bottom.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <TierCard
              tier="T1"
              title="Results-based boutique studios"
              accent="emerald"
              tagline="Highest priority. Close fastest."
              types={[
                "CrossFit boxes",
                "F45 · OrangeTheory (independent franchisees)",
                "Boxing & MMA gyms with PT programs",
                "Performance training studios",
                "Personal training studios (PT-only model)",
              ]}
              why="100% of their revenue depends on member results. Every drop-off is a lost testimonial. Vygor's nutrition layer directly reduces churn and strengthens the PT offer."
              decisionMaker="Owner / Head Coach"
            />
            <TierCard
              tier="T2"
              title="Independent gyms with PT dept"
              accent="cyan"
              tagline="Strong target. Slightly longer cycle."
              types={[
                "Independent gyms, 200–600 members",
                "3+ personal trainers on staff or freelance",
                "Active class schedule (HIIT, group fitness)",
                "Member events or challenges already running",
              ]}
              why="PT department cares about client results. Membership director cares about retention. Two different champions you can activate."
              decisionMaker="Owner · GM · PT Director"
            />
            <TierCard
              tier="T3"
              title="Small independents"
              accent="violet"
              tagline="Work if T1/T2 are exhausted."
              types={[
                "Under 150 members",
                "No dedicated PT staff",
                "Owner wears all hats",
                "No digital wellness offering today",
              ]}
              why="Harder sell — less revenue pressure, no PT champion, owner is stretched. Don't start here. Revisit if T1/T2 targets dry up."
              decisionMaker="Owner only"
            />
          </div>

          {/* Exclusions */}
          <div className="mt-6 rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-300">
              / Always exclude
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Planet Fitness", "LA Fitness", "24 Hour Fitness", "Equinox", "Life Time Fitness", "Anytime Fitness (corporate)", "Pure yoga / Pilates (no weight focus)"].map((ex) => (
                <span
                  key={ex}
                  className="rounded-full border border-rose-400/30 bg-rose-400/[0.06] px-3 py-1 font-mono text-[11px] text-rose-200"
                >
                  {ex}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-neutral-500">
              Corporate chains have 6+ month sales cycles, procurement layers, and legal review. Wrong buyer, wrong timeline — don&apos;t start sequences on these.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT VYGOR IS FOR GYMS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              / 01 · Product positioning
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              The nutrition gap gyms can&apos;t fill.
            </h2>
            <p className="mt-3 text-neutral-400">
              Gyms deliver training. They stop there. Members plateau, get
              frustrated with slow results, and drop off. Vygor is the layer
              that fills the other 23 hours — nutrition, habits, and
              accountability outside the gym floor.
            </p>
          </div>

          {/* AI features */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon="🥗"
              title="AI Dietitian"
              body="Weekly personalised meal plans tailored to each member's goals, dietary needs, and fitness routine. No dietitian hire required."
              accent="cyan"
            />
            <FeatureCard
              icon="📸"
              title="AI Macro Tracker"
              body="Photo or barcode scan meal logging. Vygor analyses nutrients and tracks macros automatically — no manual entry."
              accent="cyan"
            />
            <FeatureCard
              icon="🏋️"
              title="AI Physical Trainer"
              body="Personalised exercise plans based on goals, equipment, and schedule — continuously adapting to member performance."
              accent="cyan"
            />
            <FeatureCard
              icon="🧠"
              title="AI Wellness Coach"
              body="CBT-based habit reinforcement, mindfulness prompts, and resilience training. The consistency layer when motivation dips."
              accent="cyan"
            />
          </div>

          {/* Share + Contest */}
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.04] p-7 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                / Share feature — trainer view
              </div>
              <h3 className="mt-3 text-xl font-medium text-neutral-50">
                Trainers see client progress without chasing check-ins
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Members share their weight and steps trend data directly with their trainer inside the app. Real-time visibility into who is consistent and who needs a nudge — between sessions, not just during them.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-400/25 bg-violet-400/[0.04] p-7 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
                / Contest feature — member engagement
              </div>
              <h3 className="mt-3 text-xl font-medium text-neutral-50">
                Gym-branded monthly challenges that drive attendance
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Gyms run weight or steps contests for their members. Members compete, compare, and stay engaged between goal reviews. Gamified accountability — no new hardware, no IT integration required.
              </p>
            </div>
          </div>

          {/* Business case */}
          <div className="mt-5 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
              / Business case — use these numbers in your outreach
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <StatRow stat="+20%" label="Member retention" source="McKinsey, 2023" />
              <StatRow stat="+45%" label="Member participation" source="Wellhub, 2024" />
              <StatRow stat="+25%" label="Revenue per member" source="McKinsey, 2023" />
              <StatRow stat="2.5×" label="Long-term adherence" source="Les Mills, 2024" />
            </div>
          </div>
        </div>
      </section>

      {/* APOLLO SETUP */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              / 02 · Apollo setup
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Apollo — account list and sequence.
            </h2>
            <p className="mt-3 text-neutral-400">
              Build the account list once, save it, refresh weekly. The filter
              set below is Tier 1/2 only — do not mix Tier 3 into the same
              sequence.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Account filters */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                / Account filters
              </div>
              <div className="mt-5 space-y-3">
                <FilterRow label="Industry" value="Health, Wellness and Fitness" />
                <FilterRow label="Sub-industry" value="Fitness Studios · Gyms / Health Clubs" />
                <FilterRow label="Employees" value="2–50 (filters out big-box chains)" />
                <FilterRow label="Revenue" value="$500K – $5M" />
                <FilterRow label="Company type" value="Privately held" />
                <FilterRow label="Keywords" value="CrossFit · F45 · personal training · boutique gym · fitness studio · boxing gym · performance training" />
                <FilterRow label="Geography" value="Your target market" />
              </div>
            </div>

            {/* Contact filters */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                / Contact filters (within matched accounts)
              </div>
              <div className="mt-5 space-y-3">
                <FilterRow label="Title keywords" value="Owner · Founder · General Manager · Head of Personal Training · PT Director · Membership Director" />
                <FilterRow label="Seniority" value="Owner · C-Suite · Director · Manager" />
                <FilterRow label="Email status" value="Verified only — exclude unverified before launching sequence" />
              </div>
              <div className="mt-6 rounded-lg border border-cyan-400/25 bg-cyan-400/[0.05] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                  Save as
                </div>
                <div className="mt-1 text-sm text-neutral-200">
                  Vygor Gyms — Tier 1/2 Prospects
                </div>
              </div>
            </div>
          </div>

          {/* Account scoring */}
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
              / 5-minute research score before touching any account
            </div>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Check Instagram/website/LinkedIn for each account before adding to sequence. Prioritise accounts with score ≥5.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <ScoringRow signal="Runs member challenges or fitness competitions" points="+3" positive />
              <ScoringRow signal="Active PT department (3+ trainers)" points="+2" positive />
              <ScoringRow signal="Community-first social media — not just ads" points="+2" positive />
              <ScoringRow signal="Owner posts personal content (reachable)" points="+1" positive />
              <ScoringRow signal="Under 300 members (faster decision)" points="+1" positive />
              <ScoringRow signal="Big-box brand signals or corporate parent" points="skip" positive={false} />
            </div>
          </div>
        </div>
      </section>

      {/* LINKEDIN SALES NAV SETUP */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300">
              / 03 · LinkedIn Sales Navigator
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              LinkedIn — owner outreach and signal tracking.
            </h2>
            <p className="mt-3 text-neutral-400">
              Gym owners are more reachable on LinkedIn than enterprise buyers.
              They often post personal content and respond to genuine
              engagement. Signals matter here — connect after they post about
              retention, challenges, or member results.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Account search */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
                / Saved account search
              </div>
              <div className="mt-5 space-y-3">
                <FilterRow label="Industry" value="Health, Wellness and Fitness" />
                <FilterRow label="Headcount" value="2–50" />
                <FilterRow label="Company type" value="Privately held" />
                <FilterRow label="Keywords" value="gym · fitness studio · CrossFit · personal training · boutique" />
              </div>
            </div>

            {/* Contact search */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
                / Lead search within accounts
              </div>
              <div className="mt-5 space-y-3">
                <FilterRow label="Title" value="Owner · Founder · General Manager · Head Trainer · PT Director · Membership Director" />
                <FilterRow label="Geography" value="Your target market" />
                <FilterRow label="Connection" value="2nd degree first (warm intro available)" />
              </div>
            </div>
          </div>

          {/* Signal monitoring */}
          <div className="mt-6 rounded-2xl border border-violet-400/25 bg-violet-400/[0.04] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
              / Signals — reach out when you see these
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <SignalCard signal="Posts about member retention or drop-off challenges" timing="Connect same day" />
              <SignalCard signal="Announces a new fitness challenge or competition" timing="Reference it in your note" />
              <SignalCard signal="Asks audience for nutrition app recommendations" timing="Highest-intent signal — DM immediately" />
            </div>
          </div>
        </div>
      </section>

      {/* OUTREACH SEQUENCE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 04 · Outreach sequence
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              16 days. Both channels. 6 touches.
            </h2>
            <p className="mt-3 text-neutral-400">
              Gym owners are owner-operators — faster to respond than enterprise, but also faster to ignore. 16 days and 6 touches is the right window. Past that, move to quarterly nurture.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            <DayCard day="Day 1" touches={[{ channel: "Apollo", action: "Email #1 — the retention hook", accent: "cyan" }, { channel: "Sales Nav", action: "LinkedIn connect (no note)", accent: "violet" }]} />
            <DayCard day="Day 3" touches={[{ channel: "Sales Nav", action: "Like 1–2 of their recent posts", accent: "violet" }]} note="Passive signal" />
            <DayCard day="Day 5" touches={[{ channel: "Apollo", action: "Email #2 — the revenue angle", accent: "cyan" }]} />
            <DayCard day="Day 8" touches={[{ channel: "Sales Nav", action: "LinkedIn DM (if connected)", accent: "violet" }]} note="Curiosity opener, no pitch" />
            <DayCard day="Day 12" touches={[{ channel: "Apollo", action: "Email #3 — breakup / last ask", accent: "cyan" }]} note="Often triggers reply" />
            <DayCard day="Day 16" touches={[{ channel: "Sales Nav", action: "InMail if not connected", accent: "violet" }]} note="Final touch" />
          </div>

          <div className="mt-6 rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-6 text-neutral-400">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300">
              Past Day 16
            </span>
            <span className="ml-3">
              Move to a long-term nurture list — quarterly email only. Gym owners&apos; situations change (new staff, new member challenges, competing product fails). Re-engage in 3 months.
            </span>
          </div>
        </div>
      </section>

      {/* EMAIL TEMPLATES */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              / 05 · Email templates
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Three emails. One logic thread.
            </h2>
            <p className="mt-3 text-neutral-400">
              Email #1 opens with the problem. Email #2 pivots to revenue. Email #3 creates urgency to reply or disengage. Do not add a fourth email — it reads as desperate.
            </p>
          </div>

          <div className="space-y-5">
            <EmailTemplate
              label="/ Email #1 — Day 1 (retention hook)"
              subject="Half your new members are gone by month 6 — this is why"
              body={[
                "Hey {{FirstName}},",
                "",
                "The IHRSA number that keeps showing up in gym research: 50% of new members stop attending within 6 months. Not because the training isn't good — because there's no nutrition and habit support alongside it.",
                "",
                "That gap is what Vygor was built for. We're an AI wellness platform — AI Dietitian, AI Macro Tracker, habit tracking — that gives members personalised nutrition and consistency support 24/7 between sessions.",
                "",
                "Gyms using integrated wellness tools see 20% higher retention and 25% more revenue per member (McKinsey).",
                "",
                "Worth 15 minutes to see how it fits {{GymName}}'s program?",
                "",
                "{{Name}}",
                "partners@vygor.health",
              ]}
            />
            <EmailTemplate
              label="/ Email #2 — Day 5 (revenue angle)"
              subject="Re: {{GymName}} — the revenue side of this"
              body={[
                "Hey {{FirstName}},",
                "",
                "One thing I didn't mention: Vygor creates a new revenue stream alongside your PT packages.",
                "",
                "Your trainers recommend Vygor to their clients. You offer it as a premium add-on to membership. We handle the app and the AI — you keep the revenue share.",
                "",
                "Think of it as adding a digital nutrition coach to every PT package without hiring a dietitian.",
                "",
                "Happy to walk you through how other studios are running it — 15 minutes?",
                "",
                "{{Name}}",
              ]}
            />
            <EmailTemplate
              label="/ Email #3 — Day 12 (breakup)"
              subject="Closing the loop — {{GymName}}"
              body={[
                "Hey {{FirstName}},",
                "",
                "Last note. If member retention and new revenue aren't the priority right now, totally understood.",
                "",
                "If timing changes — I'm at partners@vygor.health.",
                "",
                "{{Name}}",
              ]}
            />
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
                / LinkedIn DM — Day 8 (post-connect)
              </div>
              <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/40 p-4 font-mono text-[13px] leading-6 text-neutral-300">
                <div>Hey {"{{FirstName}}"} — sent a couple of emails about Vygor. Wanted to try here in case that&apos;s easier.</div>
                <div className="h-3" />
                <div>Short version: AI wellness app (nutrition + habit tracking) that fills the gap between gym sessions. Members stay longer, trainers get client visibility without chasing check-ins.</div>
                <div className="h-3" />
                <div>Worth a quick look for {"{{GymName}}"}?</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY CALL */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 06 · Discovery call
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              15 minutes. Five questions. One demo.
            </h2>
            <p className="mt-3 text-neutral-400">
              Goal: understand their retention and nutrition pain, then show exactly how Vygor solves it. Do not pitch features before you hear the problem.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Agenda */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                / 15-min agenda
              </div>
              <div className="mt-5 space-y-4">
                {[
                  { time: "0:00–2:00", label: "Their retention pain", note: "How many members drop off in the first 90 days? Any sense of why?" },
                  { time: "2:00–4:00", label: "Their PT structure", note: "How many trainers? Do they currently handle nutrition, or is that out of scope?" },
                  { time: "4:00–10:00", label: "Demo — share + contest", note: "Show trainer view of client weight/steps trends. Then show contest setup for a 30-day member challenge." },
                  { time: "10:00–13:00", label: "Fit check", note: "Which of these would your trainers use? Or start with a member challenge?" },
                  { time: "13:00–15:00", label: "Pilot structure", note: "Agree on scope — 3 trainers, 30 days, one contest. No commitment beyond the pilot." },
                ].map((a) => (
                  <div key={a.time} className="flex gap-4">
                    <div className="w-20 shrink-0 font-mono text-[10px] text-neutral-500 pt-0.5">{a.time}</div>
                    <div>
                      <div className="text-sm font-medium text-neutral-100">{a.label}</div>
                      <div className="mt-1 text-xs leading-5 text-neutral-400">{a.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discovery questions */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                / Qualifying questions
              </div>
              <div className="mt-5 space-y-5">
                {[
                  { q: "What's your current 90-day and 6-month retention rate?", why: "Quantifies the problem. If they don't know, that's the problem." },
                  { q: "Do your trainers currently give nutrition guidance, or is that out of scope for their PT offering?", why: "Identifies whether trainers feel the nutrition gap." },
                  { q: "Are any trainers losing clients because they can't support the nutrition side?", why: "Direct pain — trainers want this solved." },
                  { q: "Do you have a premium tier or upsell in your membership structure today?", why: "Revenue model question. No upsell path = slower partnership close." },
                  { q: "What would it take to add a digital wellness component this quarter?", why: "Timeline and decision criteria in one question." },
                ].map((item) => (
                  <div key={item.q} className="border-b border-white/[0.05] pb-5 last:border-0 last:pb-0">
                    <div className="text-sm text-neutral-100">&ldquo;{item.q}&rdquo;</div>
                    <div className="mt-1 text-xs leading-5 text-neutral-500">{item.why}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pilot close */}
          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.04] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
              / The pilot offer — removes all friction
            </div>
            <blockquote className="mt-4 border-l-2 border-emerald-400/50 pl-5 text-base leading-7 text-neutral-200 italic">
              &ldquo;Let&apos;s start with 3 of your trainers and 30 days. They set up Vygor with their active PT clients, run one member contest, and we check back on engagement at the end of the month. No commitment beyond the pilot.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-neutral-400">
              Low stakes for the gym. Real signal for both sides. If trainers adopt it and members engage, the commercial conversation becomes obvious.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              / 07 · Partnership models
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Four ways to structure the deal.
            </h2>
            <p className="mt-3 text-neutral-400">
              Match the model to what you heard in discovery. Default to the PT add-on — fastest to close, zero IT lift, and trainers become organic advocates.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <PartnershipCard
              recommended
              num="01"
              title="PT add-on"
              tagline="Fastest to close. Default pilot model."
              how="Trainers bundle Vygor into their PT packages — 'training + nutrition in one app'. Members pay for Vygor alongside their PT sessions."
              gymGets="Revenue share on every subscription activated through the gym. No tech lift."
              bestFor="Any gym with active PT staff"
              accent="emerald"
            />
            <PartnershipCard
              num="02"
              title="Premium membership tier"
              tagline="Bigger lift, bigger revenue."
              how="Gym creates a 'Wellness Membership' tier at a higher monthly rate, with Vygor included as a digital perk."
              gymGets="Higher monthly revenue per member on the premium tier. Drives upsell from base membership."
              bestFor="Gyms with existing tiered pricing or 300+ members"
              accent="cyan"
            />
            <PartnershipCard
              num="03"
              title="Member referral"
              tagline="Lowest friction, lowest revenue."
              how="Gym recommends Vygor to all members via front desk, email, or app. Members sign up independently."
              gymGets="Referral code + commission per signup. No pricing change required."
              bestFor="Smaller gyms or those not ready for a tier change"
              accent="violet"
            />
            <PartnershipCard
              num="04"
              title="Corporate wellness upsell"
              tagline="Highest revenue. Requires positioning shift."
              how="Gym uses Vygor to pitch local employers on employee wellness programs — gym as the local delivery partner, Vygor as the AI platform."
              gymGets="Gym becomes a corporate wellness provider. New B2B revenue stream outside membership."
              bestFor="Gyms near business districts or with corporate client relationships"
              accent="amber"
            />
          </div>
        </div>
      </section>

      {/* REVENUE SHARING */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-300">
              / 08 · Revenue sharing
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              $8 per subscription. Tracked by UTM.
            </h2>
            <p className="mt-3 text-neutral-400">
              Every gym partner gets a unique UTM link. Every time a member signs
              up through that link, the gym earns $8 — paid monthly. No
              minimums, no caps, no manual tracking.
            </p>
          </div>

          {/* Mechanics */}
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.04] p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ The rate</div>
              <div className="mt-4 text-4xl font-medium text-neutral-50">$8</div>
              <div className="mt-1 text-sm text-neutral-400">per subscription activated</div>
              <p className="mt-4 text-xs leading-5 text-neutral-500">
                Vygor is $79.99/year. The gym earns $8 — ~10% — on every member who signs up via their link. Clean, simple, easy to communicate.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ The link</div>
              <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/40 p-4 font-mono text-[12px] text-neutral-300">
                <div className="text-neutral-500">Example UTM</div>
                <div className="mt-2 break-all text-amber-200">vygor.health/?utm_source=gym&amp;utm_medium=partner&amp;utm_campaign=<span className="text-neutral-50">[gymname]</span></div>
              </div>
              <p className="mt-4 text-xs leading-5 text-neutral-500">
                One link per gym, provided by Vygor at onboarding. Works across every channel — QR code at front desk, Instagram bio, email newsletter, trainer recommendation.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ Payout</div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/[0.05] pb-2">
                  <span className="text-neutral-400">Tracking</span>
                  <span className="text-neutral-200">UTM attribution</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.05] pb-2">
                  <span className="text-neutral-400">Cadence</span>
                  <span className="text-neutral-200">Monthly</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.05] pb-2">
                  <span className="text-neutral-400">Minimum</span>
                  <span className="text-neutral-200">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Contact</span>
                  <span className="text-neutral-200">partners@vygor.health</span>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings projection */}
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">
              / Earnings projection — use this in the pitch
            </div>
            <p className="mt-3 text-sm text-neutral-400">
              Frame it as passive income that scales with member adoption. A gym with 500 members and 20% Vygor adoption earns $800/month — for doing nothing after setup.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { members: "25", earn: "$200", label: "25 sign-ups" },
                { members: "50", earn: "$400", label: "50 sign-ups" },
                { members: "100", earn: "$800", label: "100 sign-ups" },
                { members: "200", earn: "$1,600", label: "200 sign-ups" },
              ].map((row) => (
                <div key={row.members} className="rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-5 text-center">
                  <div className="text-2xl font-medium text-amber-200">{row.earn}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">{row.label} / mo</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-neutral-500">
              Numbers are monthly (recurring subscriptions renew annually — gym earns $8 on each new activation, not on renewals). A 500-member gym targeting 10–20% adoption is a realistic first-year goal.
            </p>
          </div>

          {/* How to pitch it */}
          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.04] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
              / How to pitch the revenue share in the sequence
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">In Email #2 — replace the generic revenue angle with this</div>
                <div className="mt-3 rounded-lg border border-white/[0.06] bg-black/40 p-4 font-mono text-[12px] leading-6 text-neutral-300">
                  <div>We pay $8 for every member who signs up through your gym&apos;s link. You get a unique UTM link at onboarding — put it in your Instagram bio, email, or a QR code at the front desk.</div>
                  <div className="h-3" />
                  <div>50 sign-ups = $400/month. No minimum, no manual tracking.</div>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">In the discovery call — after the pilot offer</div>
                <div className="mt-3 rounded-lg border border-white/[0.06] bg-black/40 p-4 font-mono text-[12px] leading-6 text-neutral-300">
                  <div>&ldquo;And once members start signing up, you earn $8 per activation through your unique link — paid monthly. So the pilot is also your first look at what the revenue side looks like for your gym.&rdquo;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAILY ROUTINE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-300">
              / 08 · Daily routine
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              30 minutes. Every day.
            </h2>
            <p className="mt-3 text-neutral-400">
              Three blocks. Same time every day. Gym owners are busy — your cadence needs to be consistent enough to stay on their radar without being intrusive.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <RoutineBlock accent="cyan" when="Morning — 10 min" tool="Apollo" tasks={["Send emails for accounts at Day 1, Day 5, Day 12 in sequence", "Process any replies — move to conversation or unsubscribe", "Add 3–5 new scored accounts to sequence"]} />
            <RoutineBlock accent="violet" when="Midday — 10 min" tool="Sales Navigator" tasks={["Check saved search for new gym accounts matching ICP", "Review signal alerts — posts about retention, challenges, nutrition", "Send connections / DMs for accounts in sequence"]} />
            <RoutineBlock accent="emerald" when="Afternoon — 10 min" tool="Research" tasks={["Score 3 new accounts (Instagram + website + LinkedIn, 3 min each)", "Log ICP score and decision maker in Apollo", "Flag any signal-triggered accounts for same-day outreach"]} />
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
              / Weekly targets at steady state
            </div>
            <div className="mt-3 grid gap-4 md:grid-cols-5">
              <OutputStat value="20–30" label="New accounts / week" />
              <OutputStat value="5–8%" label="Reply rate" />
              <OutputStat value="3–5" label="Conversations / week" />
              <OutputStat value="1–2" label="Discovery calls / week" accent="emerald" />
              <OutputStat value="2–4" label="Pilots / month" accent="emerald" />
            </div>
            <p className="mt-5 text-xs leading-5 text-neutral-500">
              Gym owner reply rates run higher than enterprise (5–8% vs 2–3%) because you&apos;re addressing a problem they feel daily. The failure mode here is wrong ICP selection — not weak copy.
            </p>
          </div>
        </div>
      </section>

      {/* REALITY CHECK */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 09 · Reality check
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              What works. What kills the sequence.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                / What produces results
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                {[
                  ["Leading with the 50% stat", "It quantifies a problem they already feel but haven't put a number on."],
                  ["The nutrition gap hook", "Gyms know they don't solve nutrition. Vygor does. That's the entire pitch in one sentence."],
                  ["Researching before outreaching", "Personalization to their specific challenge (retention, no nutrition program, etc.) lifts reply rate 2–3×."],
                  ["Reaching the owner directly", "Gym GMs and membership directors rarely have budget authority. Owners do."],
                  ["Signal-triggered outreach", "A post about member drop-off or a public fitness challenge is a warm signal. Reach out same day."],
                ].map(([title, body]) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                    <span><span className="text-neutral-50">{title}.</span> {body}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-300">
                / What kills the sequence
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                {[
                  ["Wrong ICP — big-box chains", "Corporate accounts have procurement layers and 6-month cycles. Wasted touches."],
                  ["Leading with features, not the problem", "'We have an AI Dietitian' means nothing. '50% of your members drop off' stops them."],
                  ["Pitching in the LinkedIn connect request", "Immediate disconnect. Connect first, engage second, pitch only after reply."],
                  ["Skipping the research score", "A gym with no PT staff has no Vygor champion. Scoring filters these out before you waste a sequence slot."],
                  ["No pilot offer at the close", "Full commercial commitment scares owner-operators. The 30-day pilot removes the 'what if it doesn't work' objection."],
                ].map(([title, body]) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                    <span><span className="text-neutral-50">{title}.</span> {body}</span>
                  </li>
                ))}
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
function MetricCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
      <div className="text-2xl font-medium text-neutral-50 md:text-3xl">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">{label}</div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">{sub}</div>
    </div>
  );
}

type Accent = "cyan" | "violet" | "amber" | "emerald";

const accentMap: Record<Accent, { text: string; border: string; bg: string; dot: string; bgSoft: string }> = {
  cyan: { text: "text-cyan-300", border: "border-cyan-400/30", bg: "bg-cyan-400/[0.05]", dot: "bg-cyan-400", bgSoft: "bg-cyan-400/[0.04]" },
  violet: { text: "text-violet-300", border: "border-violet-400/30", bg: "bg-violet-400/[0.05]", dot: "bg-violet-400", bgSoft: "bg-violet-400/[0.04]" },
  amber: { text: "text-amber-300", border: "border-amber-400/30", bg: "bg-amber-400/[0.05]", dot: "bg-amber-400", bgSoft: "bg-amber-400/[0.04]" },
  emerald: { text: "text-emerald-300", border: "border-emerald-400/30", bg: "bg-emerald-400/[0.05]", dot: "bg-emerald-400", bgSoft: "bg-emerald-400/[0.04]" },
};

function TierCard({ tier, title, accent, tagline, types, why, decisionMaker }: {
  tier: string; title: string; accent: Accent; tagline: string; types: string[]; why: string; decisionMaker: string;
}) {
  const a = accentMap[accent];
  return (
    <div className={`rounded-2xl border ${a.border} ${a.bgSoft} p-7`}>
      <div className="flex items-baseline gap-3">
        <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${a.border} font-mono text-xs ${a.text}`}>{tier}</span>
        <h3 className="text-lg font-medium text-neutral-50">{title}</h3>
      </div>
      <p className={`mt-2 text-xs italic ${a.text}`}>{tagline}</p>
      <ul className="mt-5 space-y-2 text-sm text-neutral-300">
        {types.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t border-white/[0.05] pt-4 text-xs leading-5 text-neutral-400">{why}</div>
      <div className={`mt-3 font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>Decision maker → {decisionMaker}</div>
    </div>
  );
}

function FeatureCard({ icon, title, body, accent }: { icon: string; title: string; body: string; accent: Accent }) {
  const a = accentMap[accent];
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
      <div className="text-2xl">{icon}</div>
      <div className={`mt-3 font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}>{title}</div>
      <p className="mt-2 text-sm leading-6 text-neutral-300">{body}</p>
    </div>
  );
}

function StatRow({ stat, label, source }: { stat: string; label: string; source: string }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="text-2xl font-medium text-neutral-50">{stat}</div>
      <div className="mt-1 text-xs text-neutral-300">{label}</div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">{source}</div>
    </div>
  );
}

function FilterRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 pt-0.5">{label}</div>
      <div className="text-sm text-neutral-200">{value}</div>
    </div>
  );
}

function ScoringRow({ signal, points, positive }: { signal: string; points: string; positive: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
      <span className="text-sm text-neutral-300">{signal}</span>
      <span className={`ml-3 shrink-0 font-mono text-sm font-medium ${positive ? "text-emerald-300" : "text-rose-300"}`}>{points}</span>
    </div>
  );
}

function SignalCard({ signal, timing }: { signal: string; timing: string }) {
  return (
    <div className="rounded-xl border border-violet-400/20 bg-violet-400/[0.04] p-5">
      <div className="text-sm text-neutral-200">{signal}</div>
      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300">{timing}</div>
    </div>
  );
}

function DayCard({ day, touches, note }: { day: string; touches: { channel: string; action: string; accent: Accent }[]; note?: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{day}</div>
      <div className="mt-4 space-y-3">
        {touches.map((t, i) => {
          const a = accentMap[t.accent];
          return (
            <div key={i} className="flex items-start gap-2">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
              <div className="text-sm">
                <span className={`font-mono text-[10px] ${a.text}`}>{t.channel}</span>
                <div className="text-neutral-200">{t.action}</div>
              </div>
            </div>
          );
        })}
      </div>
      {note && <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">{note}</div>}
    </div>
  );
}

function EmailTemplate({ label, subject, body }: { label: string; subject: string; body: string[] }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">{label}</div>
      <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/40 p-5 font-mono text-[13px] leading-6 text-neutral-300">
        <div className="text-neutral-500">Subject:</div>
        <div className="text-neutral-100">{subject}</div>
        <div className="mt-4 border-t border-white/[0.06] pt-4">
          {body.map((line, i) => (
            <div key={i} className={line === "" ? "h-3" : ""}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnershipCard({ recommended, num, title, tagline, how, gymGets, bestFor, accent }: {
  recommended?: boolean; num: string; title: string; tagline: string; how: string; gymGets: string; bestFor: string; accent: Accent;
}) {
  const a = accentMap[accent];
  return (
    <div className={`rounded-2xl border ${a.border} ${a.bgSoft} p-7 md:p-8`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${a.border} font-mono text-xs ${a.text}`}>{num}</span>
          <h3 className="text-xl font-medium text-neutral-50">{title}</h3>
        </div>
        {recommended && (
          <span className="shrink-0 rounded-full border border-emerald-400/40 bg-emerald-400/[0.08] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300">
            Default
          </span>
        )}
      </div>
      <p className={`mt-2 text-xs italic ${a.text}`}>{tagline}</p>
      <div className="mt-5 space-y-3 text-sm leading-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">How it works</div>
          <div className="mt-1 text-neutral-300">{how}</div>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">Gym gets</div>
          <div className="mt-1 text-neutral-300">{gymGets}</div>
        </div>
        <div>
          <div className={`font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>Best for</div>
          <div className="mt-1 text-neutral-200">{bestFor}</div>
        </div>
      </div>
    </div>
  );
}

function RoutineBlock({ accent, when, tool, tasks }: { accent: Accent; when: string; tool: string; tasks: string[] }) {
  const a = accentMap[accent];
  return (
    <div className={`rounded-2xl border ${a.border} ${a.bgSoft} p-7`}>
      <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}>{when}</div>
      <div className="mt-1 text-xl font-medium text-neutral-50">{tool}</div>
      <ul className="mt-5 space-y-3 text-sm text-neutral-300">
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

function OutputStat({ value, label, accent }: { value: string; label: string; accent?: Accent }) {
  const color = accent ? accentMap[accent].text : "text-neutral-50";
  return (
    <div>
      <div className={`text-2xl font-medium md:text-3xl ${color}`}>{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">{label}</div>
    </div>
  );
}
