import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vygor · TikTok Playbook",
  description: "TikTok influencer playbook — discover, outreach, campaign, metrics, and scale/cancel for Vygor Health.",
  robots: { index: false, follow: false },
};

const accentMap: Record<string, { text: string; border: string; bgSoft: string; dot: string }> = {
  emerald: { text: "text-emerald-300", border: "border-emerald-400/25", bgSoft: "bg-emerald-400/[0.04]", dot: "bg-emerald-400" },
  cyan:    { text: "text-cyan-300",    border: "border-cyan-400/25",    bgSoft: "bg-cyan-400/[0.04]",    dot: "bg-cyan-400" },
  violet:  { text: "text-violet-300",  border: "border-violet-400/25",  bgSoft: "bg-violet-400/[0.04]",  dot: "bg-violet-400" },
  amber:   { text: "text-amber-300",   border: "border-amber-400/25",   bgSoft: "bg-amber-400/[0.04]",   dot: "bg-amber-400" },
};

// ============================================================
// Page
// ============================================================
export default function VygorTikTokPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400">
            / Vygor · TikTok
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            The{" "}
            <span className="font-serif italic text-gradient">habit</span>{" "}
            goes viral.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            TikTok is the highest-intent discovery surface for wellness habits.{" "}
            <span className="text-neutral-200">
              Discover · Outreach · Campaign · Metrics · Scale or Cancel
            </span>{" "}
            — the full creator playbook for @vygorapp.
          </p>
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <MetricCard value="1B+" label="Monthly active users" sub="TikTok, 2024" />
            <MetricCard value="#1" label="Wellness discovery platform" sub="Sprout Social, 2024" />
            <MetricCard value="5.3%" label="Avg engagement rate" sub="vs 0.6% Instagram" />
            <MetricCard value="2–4×" label="Higher conversion vs IG" sub="Influencer Marketing Hub" />
          </div>
        </div>
      </section>

      {/* @VYGORAPP — ACCOUNT STRATEGY */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400">
              / 00 · @vygorapp — account strategy
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Own the habit conversation. Every day.
            </h2>
            <p className="mt-3 text-neutral-400">
              The @vygorapp account is the trust anchor for every creator partnership.
              Creators check your page before they reply. Keep it consistent, on-brand,
              and high-value — it&rsquo;s your credibility signal.
            </p>
          </div>

          {/* Content pillars */}
          <div className="mb-6 grid gap-4 md:grid-cols-5">
            {[
              { pct: "40%", label: "Education", desc: "Habit science, weight psychology, consistency tips. No promotion. Just value.", color: "emerald" },
              { pct: "20%", label: "App demos", desc: "Show the product naturally: logging a habit, checking a streak, running a contest.", color: "cyan" },
              { pct: "20%", label: "Challenges", desc: "Steps and weight contests. Tag participants. Keep the community loop active.", color: "violet" },
              { pct: "10%", label: "Social proof", desc: "User testimonials, milestone shares, UGC reposts. Let customers tell the story.", color: "amber" },
              { pct: "10%", label: "Trending", desc: "Participate in trending sounds and formats where they fit. Discoverability play.", color: "emerald" },
            ].map((p) => {
              const a = accentMap[p.color];
              return (
                <div key={p.label} className={`rounded-2xl border ${a.border} ${a.bgSoft} p-5`}>
                  <div className={`text-3xl font-medium ${a.text}`}>{p.pct}</div>
                  <div className={`mt-1 font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>{p.label}</div>
                  <p className="mt-3 text-xs leading-5 text-neutral-400">{p.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Cadence + formats */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ Posting cadence</div>
              <div className="mt-5 space-y-4">
                {[
                  { item: "Frequency", val: "4–5 posts / week — consistency beats volume on TikTok" },
                  { item: "Best times", val: "9–11 am and 7–9 pm EST — highest organic reach windows" },
                  { item: "Video length", val: "15–30 sec for hooks; 45–60 sec for demos and tutorials" },
                  { item: "Captions", val: "Short and punchy. TikTok is sound-on — lead with audio hook" },
                  { item: "Hashtags", val: "#vygor #habittracking #weightloss #wellness + 1–2 trending tags" },
                ].map((r) => (
                  <div key={r.item} className="flex gap-4">
                    <div className="w-28 shrink-0 font-mono text-[10px] text-neutral-500 pt-0.5">{r.item}</div>
                    <div className="text-sm text-neutral-200">{r.val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ Content formats that work</div>
              <div className="mt-5 space-y-3">
                {[
                  ["POV / hook open", "POV: you finally stopped treating weight loss like a sprint", "cyan"],
                  ["This changed my life", "'I tried tracking my habits for 30 days. Here's what actually happened.'", "emerald"],
                  ["Myth-bust", "'You don't have a willpower problem. You have a system problem.'", "violet"],
                  ["Tutorial / demo", "Slow walkthrough of setting up a Vygor contest with friends", "amber"],
                  ["Duet / stitch", "React to viral diet content — reframe habits over restriction", "cyan"],
                  ["Before/after routine", "Old morning routine vs. new morning routine with Vygor check-in", "emerald"],
                ].map(([format, example, color]) => {
                  const a = accentMap[color];
                  return (
                    <div key={format as string} className="flex items-start gap-3">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                      <div>
                        <div className={`font-mono text-[10px] uppercase tracking-[0.15em] ${a.text}`}>{format}</div>
                        <div className="text-xs text-neutral-400">{example}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              / 01 · Discover — TikTok One for Business
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Find the right creator before you write a single DM.
            </h2>
            <p className="mt-3 text-neutral-400">
              <a
                href="https://ads.tiktok.com/creative/creator/explore?region=us_ttp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition"
              >
                TikTok One Creator Explorer
              </a>{" "}
              is the primary discovery tool. Build and save your search — refresh weekly.
              Do not DM anyone with a score below 6.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">/ Search filters</div>
              <div className="mt-5 space-y-3">
                <FilterRow label="Category" value="Fitness & Health · Food & Cooking · Lifestyle" />
                <FilterRow label="Followers" value="10K – 500K (micro to mid-tier; best ROI)" />
                <FilterRow label="Avg views" value="5K+ per video minimum" />
                <FilterRow label="Engagement" value="> 8% (TikTok avg is 5.3%; skip anyone below this)" />
                <FilterRow label="Location" value="United States" />
                <FilterRow label="Audience age" value="18–35 (primary), 35–44 (secondary)" />
                <FilterRow label="Audience gender" value="50%+ female preferred (Vygor core user)" />
                <FilterRow label="Recent activity" value="Posted within last 14 days" />
              </div>
              <div className="mt-5 rounded-lg border border-cyan-400/25 bg-cyan-400/[0.05] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">Save as</div>
                <div className="mt-1 text-sm text-neutral-200">Vygor Health — Micro US Wellness</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">/ Creator tier guide</div>
              <div className="mt-5 space-y-4">
                {[
                  { tier: "Nano", range: "1K – 10K", pri: "Skip initially", note: "High trust, near-zero reach. Only if repurposing UGC content.", color: "neutral" },
                  { tier: "Micro", range: "10K – 100K", pri: "Primary target", note: "Best engagement-to-cost ratio. Audiences trust them deeply.", color: "emerald" },
                  { tier: "Mid-tier", range: "100K – 500K", pri: "Budget dependent", note: "Reach multiplier. Activate only after micro proof of concept.", color: "cyan" },
                  { tier: "Macro", range: "500K – 2M", pri: "Defer to Phase 2", note: "Brand awareness play. Too expensive before conversion data.", color: "amber" },
                ].map((t) => {
                  const colors: Record<string, string> = {
                    neutral: "text-neutral-500",
                    emerald: "text-emerald-300",
                    cyan: "text-cyan-300",
                    amber: "text-amber-300",
                  };
                  const bg: Record<string, string> = {
                    neutral: "bg-white/[0.02]",
                    emerald: "bg-emerald-400/[0.04]",
                    cyan: "bg-cyan-400/[0.04]",
                    amber: "bg-amber-400/[0.04]",
                  };
                  return (
                    <div key={t.tier} className={`rounded-xl border border-white/[0.06] ${bg[t.color]} p-4`}>
                      <div className="flex items-baseline justify-between">
                        <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${colors[t.color]}`}>{t.tier} · {t.range}</span>
                        <span className={`font-mono text-[9px] uppercase tracking-[0.15em] ${colors[t.color]}`}>{t.pri}</span>
                      </div>
                      <p className="mt-1.5 text-xs leading-5 text-neutral-400">{t.note}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scoring rubric */}
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
              / 10-minute creator score — do this before any outreach
            </div>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Check TikTok profile + most recent 9 videos before adding to outreach queue. Prioritise creators with score ≥ 6.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <ScoringRow signal="Engagement rate ≥ 5% on recent posts" points="+3" positive />
              <ScoringRow signal="Content is authentically habit/wellness focused (not just fitness)" points="+2" positive />
              <ScoringRow signal="Audience comments show trust and personal sharing" points="+2" positive />
              <ScoringRow signal="Has run a challenge or accountability content before" points="+1" positive />
              <ScoringRow signal="Posts in one of our 7 target segments consistently" points="+1" positive />
              <ScoringRow signal="Content feels native, not like polished brand ads" points="+1" positive />
              <ScoringRow signal="Follower spike (bought followers / engagement pod signals)" points="skip" positive={false} />
              <ScoringRow signal="Content is primarily transformation / body-focused" points="skip" positive={false} />
            </div>
          </div>
        </div>
      </section>

      {/* OUTREACH */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 02 · Outreach
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              DM first. Email second. Never both at once.
            </h2>
            <p className="mt-3 text-neutral-400">
              TikTok DM is the primary channel — it feels native and doesn&rsquo;t
              require an email harvest. Send the DM first. If no reply in 5 days,
              follow up with email if available.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 mb-6">
            {/* DM template */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">/ DM template</div>
              <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/40 p-5 font-mono text-[13px] leading-6 text-neutral-300">
                <div>Hi {"{"} Firstname {"}"} — we&rsquo;re Vygor Health, a weight management app launching in the US. We&rsquo;re offering paid partnerships to wellness creators: flat fee per post + affiliate commission on every subscriber you refer. Full creative freedom, no script.</div>
                <div className="h-3" />
                <div>Interested? Reply here or email us at creators@vygor.health.</div>
              </div>
              <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.04] p-4 text-xs text-neutral-400">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-300">Key detail:</span>{" "}
                Always mention the specific video or topic you found them through. Generic DMs have a &lt;1% reply rate. Personalised DMs hit 8–15%.
              </div>
            </div>

            {/* Email template */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">/ Email template (Day 5 follow-up)</div>
              <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/40 p-5 font-mono text-[13px] leading-6 text-neutral-300">
                <div className="text-neutral-500">Subject:</div>
                <div className="text-neutral-100">Paid collaboration offer from Vygor Health App</div>
                <div className="mt-4 border-t border-white/[0.06] pt-4">
                  <div>Hi {"{"} Firstname {"}"} ,</div>
                  <div className="h-3" />
                  <div>We&rsquo;re Vygor Health, a weight management app launching in the US, and we&rsquo;re looking for creators in the health and wellness space for paid partnerships.</div>
                  <div className="h-3" />
                  <div>Vygor isn&rsquo;t a diet or calorie counter — it&rsquo;s a habit and consistency tool for people who want sustainable, long-term weight management. We think your audience is a strong fit.</div>
                  <div className="h-3" />
                  <div className="text-neutral-200">What we&rsquo;re offering:</div>
                  <div>Free app access · Flat fee per post · Affiliate commission per subscriber · Full creative freedom</div>
                  <div className="h-3" />
                  <div>Visit www.vygor.health or download from the App Store (iPhone). If you&rsquo;re open to hearing more, reply and we&rsquo;ll share details.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sequence */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">/ Outreach sequence</div>
            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {[
                { day: "Day 1", action: "TikTok DM", sub: "Reference a specific video. No pitch yet — open with the connection.", color: "emerald" },
                { day: "Day 5", action: "Email (if no DM reply)", sub: "Use the email template above. Only send if you have a verified email.", color: "cyan" },
                { day: "Day 8", action: "TikTok DM follow-up", sub: "One sentence: 'Wanted to make sure this didn't get buried — still happy to share details if you're interested.'", color: "violet" },
                { day: "Day 12", action: "Final close — or move on", sub: "'Last note — if timing isn't right, no worries. We'll be back in touch in Q2.' Then archive.", color: "amber" },
              ].map((s) => {
                const a = accentMap[s.color];
                return (
                  <div key={s.day} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <div className={`font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>{s.day}</div>
                    <div className="mt-2 text-sm font-medium text-neutral-100">{s.action}</div>
                    <p className="mt-2 text-xs leading-5 text-neutral-500">{s.sub}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-5 text-xs leading-5 text-neutral-500">
              Past Day 12: move to a quarterly nurture list. Creators&rsquo; situations change — new audience growth, niche shifts, sponsored content openings. Re-engage in 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* CAMPAIGN SETUP */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300">
              / 03 · Campaign setup
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Brief, track, approve. In that order.
            </h2>
            <p className="mt-3 text-neutral-400">
              Every active creator gets a brief at onboarding. Every post is reviewed
              by the PM before publishing. No exceptions — compliance risk is real in
              the wellness category.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 mb-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">/ Creator onboarding checklist</div>
              <div className="mt-5 space-y-3">
                {[
                  ["Rate confirmed in writing", "Flat fee + commission rate. Get written confirmation before anything else."],
                  ["Content Brief sent + compliance acknowledged", "Send the Content Brief link. Creator confirms they've read the compliance rules before receiving their tracking link."],
                  ["Unique tracking link set up", "One promo code + UTM per creator: vygor.health/?utm_source=tiktok&utm_medium=creator&utm_campaign=[handle]. Never share between creators."],
                  ["Approval workflow agreed", "Creator sends draft via DM or email. PM reviews within 48h."],
                ].map(([label, note]) => (
                  <div key={label as string} className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 shrink-0 rounded border border-violet-400/30 bg-violet-400/[0.06] flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400/60" />
                    </span>
                    <div>
                      <div className="text-sm text-neutral-200">{label}</div>
                      <div className="text-xs text-neutral-500">{note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Rate structure */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">/ Rate structure by tier</div>
            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {[
                { tier: "Nano", range: "1K–10K", flat: "$50–$150", commission: "$8 / subscriber", note: "Primarily UGC — content rights, not reach." },
                { tier: "Micro", range: "10K–100K", flat: "$150–$500", commission: "$8 / subscriber", note: "Primary target. Flat fee + commission combo." },
                { tier: "Mid-tier", range: "100K–500K", flat: "$500–$2K", commission: "$8 / subscriber", note: "Negotiate post series (3+ posts) for better rates." },
                { tier: "Macro", range: "500K–2M", flat: "$2K–$10K", commission: "$8 / subscriber", note: "Defer until micro conversion data justifies spend." },
              ].map((t) => (
                <div key={t.tier} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300">{t.tier} · {t.range}</div>
                  <div className="mt-3 text-lg font-medium text-neutral-50">{t.flat}</div>
                  <div className="mt-0.5 font-mono text-[10px] text-neutral-500">per post</div>
                  <div className="mt-3 text-xs text-amber-300">{t.commission}</div>
                  <p className="mt-2 text-xs leading-5 text-neutral-500">{t.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-neutral-500">
              Commission rate: $8 per annual subscription activated via creator&rsquo;s unique UTM link. Vygor is $79.99/year — gym earns ~10% on every new activation. Paid monthly, no minimum.
            </p>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-300">
              / 04 · Metrics
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Measure the right things. At the right time.
            </h2>
            <p className="mt-3 text-neutral-400">
              Evaluate each post at 48h (TikTok reach peaks in the first 48h) and
              again at 7 days (for conversion tail). Do not make decisions on
              same-day numbers — TikTok&rsquo;s algorithm distributes content unevenly.
            </p>
          </div>

          {/* KPI table */}
          <div className="mb-6 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9 overflow-x-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300 mb-5">/ KPIs per post — evaluate at 48h and 7 days</div>
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  {["Metric", "Target", "Acceptable", "Pause", "Kill"].map((h) => (
                    <th key={h} className="pb-3 text-left font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {[
                  ["Engagement rate", "≥ 5%", "3–5%", "1–3%", "< 1%"],
                  ["View-through rate", "≥ 35%", "20–35%", "10–20%", "< 10%"],
                  ["Link CTR (bio / caption)", "≥ 1.5%", "0.8–1.5%", "0.3–0.8%", "< 0.3%"],
                  ["Promo code conversions", "≥ 8 / post", "4–8", "1–3", "0"],
                  ["Comments sentiment", "Mostly positive / curious", "Mixed", "Mostly neutral", "Negative / critical"],
                ].map(([metric, target, ok, pause, kill]) => (
                  <tr key={metric}>
                    <td className="py-3 pr-4 text-neutral-200">{metric}</td>
                    <td className="py-3 pr-4 text-emerald-300">{target}</td>
                    <td className="py-3 pr-4 text-cyan-300">{ok}</td>
                    <td className="py-3 pr-4 text-amber-300">{pause}</td>
                    <td className="py-3 text-rose-300">{kill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* What to log */}
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ Log in TikTok One</div>
              <ul className="mt-4 space-y-2 text-xs leading-5 text-neutral-300">
                {["Total views at 48h and 7 days", "Engagement rate (TikTok native dashboard)", "Profile visits from the post", "Follower gain from the post"].map((i) => (
                  <li key={i} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">/ Log in your tracker</div>
              <ul className="mt-4 space-y-2 text-xs leading-5 text-neutral-300">
                {["UTM link clicks (Google Analytics / Vercel)", "Promo code redemptions (Vygor backend)", "App installs attributed to creator", "Cost per acquisition (flat fee ÷ conversions)"].map((i) => (
                  <li key={i} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">/ Review cadence</div>
              <ul className="mt-4 space-y-2 text-xs leading-5 text-neutral-300">
                {["48h: check reach and engagement signal", "7 days: check link clicks and conversions", "Monthly: creator-level CPA and ROI", "Quarterly: portfolio review — scale, hold, or cancel"].map((i) => (
                  <li key={i} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCALE OR CANCEL */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 05 · Scale or Cancel
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              The decision is in the data. Make it fast.
            </h2>
            <p className="mt-3 text-neutral-400">
              Every creator gets exactly two posts to prove conversion. Evaluate
              after post 2 — don&rsquo;t wait for post 3 to make a call you already have
              the data for. Speed of decision is competitive advantage here.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 mb-6">
            {/* Scale */}
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.04] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">/ Scale — when to go deeper</div>
              <div className="mt-5 space-y-4">
                {[
                  { trigger: "Both posts hit Target or Acceptable thresholds", action: "Offer a 3-post extension at same rate. Lock in before they reprice." },
                  { trigger: "CPA ≤ $30 after post 2", action: "Increase to 2 posts/month. Add a dedicated story or pinned bio link." },
                  { trigger: "CPA ≤ $15 and engagement ≥ 5%", action: "Offer affiliate-only deal or monthly retainer. Long-term relationship." },
                  { trigger: "Content went viral (500K+ views)", action: "Boost as Spark Ad immediately via TikTok Ads Manager. Amplify organic reach paid." },
                ].map((s) => (
                  <div key={s.trigger} className="border-b border-emerald-400/[0.10] pb-4 last:border-0 last:pb-0">
                    <div className="text-sm font-medium text-emerald-200">{s.trigger}</div>
                    <div className="mt-1 text-xs leading-5 text-neutral-400">→ {s.action}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] p-4 text-xs text-neutral-400">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-300">TikTok Spark Ads:</span>{" "}
                When a creator&rsquo;s organic post performs, use Spark Ads to amplify it as a paid ad without losing the native social proof (likes, comments, shares stay intact). This is the most efficient paid amplification path.
              </div>
            </div>

            {/* Cancel */}
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-300">/ Cancel — when to cut</div>
              <div className="mt-5 space-y-4">
                {[
                  { trigger: "Both posts hit Pause or Kill thresholds", action: "Do not book post 3. Send a polite close. Move budget to the next creator in queue." },
                  { trigger: "CPA > $50 after post 2", action: "Not economically viable at current subscription price. Cut immediately." },
                  { trigger: "Compliance violation on any post", action: "Request immediate edit or removal. If creator refuses, end relationship and flag in your tracker." },
                  { trigger: "Comment sentiment is negative or hostile", action: "Cancel remaining posts. Brand safety trumps reach." },
                ].map((s) => (
                  <div key={s.trigger} className="border-b border-rose-400/[0.10] pb-4 last:border-0 last:pb-0">
                    <div className="text-sm font-medium text-rose-200">{s.trigger}</div>
                    <div className="mt-1 text-xs leading-5 text-neutral-400">→ {s.action}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-rose-400/20 bg-rose-400/[0.06] p-4 text-xs text-neutral-400">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-rose-300">Cancel cadence:</span>{" "}
                Keep a warm file for cancelled creators whose audiences are right but timing wasn&rsquo;t. Re-engage in 90 days. Creators grow — their audience and content quality shifts. A miss today isn&rsquo;t a miss forever.
              </div>
            </div>
          </div>

          {/* Quarterly portfolio review */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">/ Quarterly portfolio review — 4 questions</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                { q: "What is our blended CPA this quarter?", why: "If blended CPA > $40, rebalance toward better-performing segments. If < $20, increase creator budget." },
                { q: "Which segments convert best?", why: "Double the allocation to top 2 segments. Cut or test new angles in the bottom 2." },
                { q: "What content formats drove the most conversions?", why: "Brief all new creators toward the winning format. Retire formats with zero conversion." },
                { q: "What is our ratio of active to cancelled creators?", why: "If cancel rate > 40%, the brief or ICP scoring is wrong — revisit before hiring more creators." },
              ].map((item) => (
                <div key={item.q} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="text-sm font-medium text-neutral-100">&ldquo;{item.q}&rdquo;</div>
                  <div className="mt-2 text-xs leading-5 text-neutral-500">{item.why}</div>
                </div>
              ))}
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
function MetricCard({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
      <div className="text-2xl font-medium text-neutral-50 md:text-3xl">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">{label}</div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">{sub}</div>
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
