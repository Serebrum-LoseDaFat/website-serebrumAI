import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vygor · TikTok Playbook",
  description: "TikTok influencer playbook — discover, outreach, campaign, metrics, and scale/cancel for Vygor Health.",
  robots: { index: false, follow: false },
};

// ============================================================
// Data
// ============================================================

const segments = [
  {
    id: "weight-loss",
    icon: "⚖️",
    label: "Weight Loss",
    angle: "Vygor as the system that keeps you on track when willpower runs out. Not a diet — a habit engine that tracks patterns, builds accountability, and makes progress visible.",
    hooks: [
      '"I stopped tracking calories and started doing THIS instead."',
      '"Why I\'ve lost and regained the same 10 lbs — and what finally changed."',
      '"Day 30 of using Vygor — here\'s what the data actually showed me."',
      '"I challenged my friends to a weight loss competition and this happened."',
    ],
    formats: ["Before/after habit comparison (habits, not body imagery)", "Week in my life with Vygor check-ins", "30/60/90-day progress reflection", "Contest reveal — follower weight challenge"],
    doList: ["Talk about habit-building and consistency", "Share personal app experience", "Mention the contest feature", "#ad / 'Paid partnership' in every post"],
    dontList: ["Claim specific weight loss numbers", "Before/after body transformation photos", "Say Vygor 'makes you lose weight'", "Sound like a diet or meal plan"],
    dm: "Hey [name] — I loved your video on [specific topic]. It really resonated because Vygor is built around exactly that idea: that results come from habits, not diets. Would love to see how it fits with your content. Happy to send you early access — no pressure at all.",
    accent: "emerald" as const,
  },
  {
    id: "diet-nutrition",
    icon: "🥗",
    label: "Diet & Nutrition",
    angle: "Vygor complements a healthy diet by building consistent habits around it. Not a calorie counter — a behavioral tracker that helps people stick to the food approach they've already chosen.",
    hooks: [
      '"I\'m a nutritionist and I finally found an app I\'d actually recommend to clients."',
      '"The problem with every nutrition app: they tell you what to eat but not how to build the habit."',
      '"Tracking your food is fine. Tracking your habits is better."',
      '"This is the habit-building layer missing from most nutrition plans."',
    ],
    formats: ["'App I recommend alongside a diet plan' — practitioner framing", "Nutrition routine with Vygor as daily check-in", "'Why habit tracking beats calorie counting' educational piece", "FAQ: 'How do you stay consistent?'"],
    doList: ["Frame Vygor as a habit and consistency tool", "Use language like 'accountability', 'patterns', 'consistency'", "Show routine-building alongside nutrition", "#ad disclosure in every post"],
    dontList: ["Claim Vygor provides nutrition advice or meal plans", "Imply Vygor replaces a dietitian", "Say it 'cures' unhealthy eating or eating disorders", "Make condition-specific claims (insulin resistance, PCOS)"],
    dm: "Hey [name] — I've been following your content on [specific topic] and it struck me how much of your advice is about building sustainable habits rather than just what to eat. That's exactly the gap Vygor is built for. Would you be open to trying it and sharing honest feedback?",
    accent: "cyan" as const,
  },
  {
    id: "womens-health",
    icon: "🌸",
    label: "Women's Health",
    angle: "Weight management for women dealing with PCOS, perimenopause, or postpartum isn't a willpower problem — it's a complexity problem. Vygor helps build consistent habits in a body that doesn't always cooperate.",
    hooks: [
      '"Managing my weight with PCOS is nothing like \'just eat less\' — here\'s what actually helps."',
      '"I gained weight during perimenopause and these are the only habits that made a difference."',
      '"Nobody tells you how hard it is to stay consistent when your hormones are working against you."',
      '"This is the one app that doesn\'t assume my body works like everyone else\'s."',
    ],
    formats: ["Personal story: weight journey with PCOS / menopause / postpartum", "'What I wish I knew about [condition] and weight'", "Day-in-the-life: Vygor check-in as self-care", "Community Q&A: 'How do you stay consistent?'"],
    doList: ["Talk about habit consistency as the key", "Share personal experience — 'this helped me stay consistent'", "Frame Vygor as a support tool alongside medical treatment", "Acknowledge every body is different"],
    dontList: ["Say Vygor 'treats' PCOS, menopause, or any condition", "Claim Vygor balances hormones or reduces symptoms", "Make specific weight loss claims", "Use language like 'cure', 'reverse', 'heal'"],
    dm: "Hey [name] — your video on [PCOS/menopause/postpartum topic] really stuck with me. The way you talk about consistency and self-compassion is exactly what Vygor is built around. It's a habit-tracking app for people who are doing the right things but need help staying consistent. I'd love to send you access.",
    accent: "violet" as const,
  },
  {
    id: "fitness",
    icon: "🏋️",
    label: "Fitness / Workout",
    angle: "Fitness gets you partway there — but weight management is 80% what happens outside the gym. Vygor is the accountability layer for the other 23 hours: sleep, eating consistency, stress management, recovery.",
    hooks: [
      '"I\'ve been training for 3 years and this is the habit I wish I\'d started on day one."',
      '"Why people who work out every day still struggle to lose weight — and what\'s actually missing."',
      '"The app I use to track everything that isn\'t my workout."',
      '"I set a steps challenge for my followers. Here\'s what happened after 30 days."',
    ],
    formats: ["Full day routine: workout + Vygor habit check-in as bookends", "'What your trainer doesn't tell you' — habits outside the gym", "30-day accountability challenge alongside a workout program", "Steps contest: challenge your audience via Vygor's open competition"],
    doList: ["Talk about habits outside the gym: sleep, eating, recovery", "Position Vygor as the accountability layer supporting training", "Use the contest feature for audience challenges", "Be honest — it's a habit app, not a fitness tracker"],
    dontList: ["Imply Vygor tracks workouts or replaces a fitness app", "Claim Vygor accelerates muscle gain or athletic performance", "Make specific body composition claims", "Suggest Vygor substitutes a personal trainer"],
    dm: "Hey [name] — love your content on [specific workout series]. What I appreciate most is how you talk about the lifestyle side, not just the reps. That's exactly what Vygor is: a habit app for everything outside the gym. We'd love for you to try it alongside your current program and share your honest take. No script — just your genuine experience.",
    accent: "amber" as const,
  },
  {
    id: "wellness",
    icon: "🌿",
    label: "Wellness / Lifestyle",
    angle: "Vygor fits naturally into the wellness lifestyle narrative: a tool for building good habits, staying accountable, and showing up consistently for your health. No restriction, no diet culture — just intentional habit-building.",
    hooks: [
      '"The one app that actually changed how I think about my health habits."',
      '"I\'ve tried every wellness routine. This is the only thing that made consistency feel possible."',
      '"My \'soft\' approach to weight management — no restriction, just habits."',
      '"I started a wellness challenge with my community and the results surprised me."',
    ],
    formats: ["Morning routine: Vygor check-in as part of healthy morning", "'Apps that are actually part of my wellness routine'", "Habit reflection: 'what 30 days of tracking taught me'", "Community challenge: steps or weight contest for followers"],
    doList: ["Talk about habit-building, consistency, and showing up for yourself", "Frame weight management as one dimension of overall wellness", "Use language like 'awareness', 'accountability', 'intention', 'patterns'", "Show Vygor authentically as part of your real routine"],
    dontList: ["Promote diet culture, restriction, or body image pressure", "Make specific weight loss claims or outcomes", "Suggest Vygor is a 'quick fix' or shortcut", "Use before/after content or weight numbers"],
    dm: "Hey [name] — your content on [morning routine / habit / wellness topic] really resonated. The philosophy behind Vygor is almost identical to how you talk about health: it's not about restriction, it's about building habits you can actually sustain. I'd love to send you access to try it — not looking for a script, just an honest share if it genuinely fits your routine.",
    accent: "emerald" as const,
  },
  {
    id: "coaches",
    icon: "🧑‍💼",
    label: "Wellness Coaches",
    angle: "Vygor works WITH coaching. The Share feature lets coaches see client weight and steps trends in real time. The Contest feature lets coaches run group challenges between clients. Vygor becomes a coaching platform, not just a personal app.",
    hooks: [
      '"I\'ve been looking for an app that lets me actually SEE my clients\' progress. This is it."',
      '"I run accountability groups for my clients. Here\'s how I use Vygor."',
      '"I set up a 30-day weight loss contest for my coaching group — here\'s what happened."',
      '"My clients can now challenge each other — not just track themselves."',
    ],
    formats: ["Walkthrough: 'how I use Vygor to monitor client progress'", "Demo: setting up a contest between client groups", "'A week in my coaching practice' — Vygor in the workflow", "Open challenge: invite audience to join a steps or weight contest"],
    doList: ["Highlight the Share feature as a coach accountability tool", "Demonstrate the Contest feature for group challenges", "Frame Vygor as complementary to existing coaching methods", "Be clear Vygor supports — not replaces — professional coaching"],
    dontList: ["Imply Vygor provides coaching, therapy, or clinical guidance", "Make specific outcome claims for client results", "Suggest the app replaces a coach or health professional", "Share client data or personal information publicly"],
    dm: "Hey [name] — your approach to [accountability / group coaching / habit-based programs] is really aligned with what we're building at Vygor. We have a Share feature where clients grant their coach visibility into weight and steps trends — and a Contest feature for running group challenges. I think it could genuinely fit your workflow. Would you be open to a quick look?",
    accent: "cyan" as const,
  },
  {
    id: "medical",
    icon: "🩺",
    label: "Medical / Clinical",
    angle: "Vygor bridges the gap between 'your doctor told you to change your lifestyle' and actually doing it — a patient-side habit tool for behavioral consistency. Not a medical device. A behavior tracker to recommend alongside clinical advice.",
    hooks: [
      '"As a doctor: why can\'t my patients stick to healthy habits? Here\'s my answer."',
      '"The gap between knowing what to do and actually doing it — this is the hardest part of weight management."',
      '"Behavior change is the #1 predictor of sustainable weight loss. Here\'s a tool for that."',
      '"Why willpower is not the problem — and what actually is."',
    ],
    formats: ["Educational explainer: 'the science of habit formation and weight'", "'Apps I actually recommend to patients' — Vygor as behavioral tool", "Myth-busting: 'why diets fail' — Vygor as the behavioral solution", "Professional review: honest assessment of what the app does and doesn't do"],
    doList: ["Frame Vygor as a behavior/habit tool, not a medical intervention", "Be clear Vygor is a wellness app, not a medical device", "Recommend Vygor as a complement to clinical care", "Disclose paid partnership prominently — HCP audiences expect transparency"],
    dontList: ["Say Vygor treats, manages, or helps with any medical condition", "Imply Vygor is clinically validated or FDA-cleared", "Make specific outcome claims", "Overstate capabilities — this audience will call it out"],
    dm: "Hi Dr. [name] — I follow your content on [topic] and appreciate how rigorously you approach evidence. I'm reaching out from Vygor Health. We're a habit-tracking app for weight management — not a diet, not a medical device, but a behavioral consistency tool. We're looking for clinicians who create honest educational content. Happy to send access with no strings attached if you're interested.",
    accent: "violet" as const,
  },
];

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
              TikTok One (business.tiktok.com → Creator Marketplace) is the
              primary discovery tool. Build and save your search — refresh weekly.
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
                <FilterRow label="Engagement" value="≥ 4% (TikTok avg is 5.3%; filter below 4%)" />
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

      {/* CREATOR SEGMENTS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300">
              / 02 · Creator segments
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Seven segments. One angle per segment.
            </h2>
            <p className="mt-3 text-neutral-400">
              Match every creator to exactly one primary segment before outreach.
              Use the segment&rsquo;s angle in your DM and the hooks in your content brief.
              Content and compliance rules differ by segment — never use a generic brief.
            </p>
          </div>

          <div className="space-y-5">
            {segments.map((seg) => {
              const a = accentMap[seg.accent];
              return (
                <div key={seg.id} className={`rounded-2xl border ${a.border} ${a.bgSoft} p-7 md:p-8`}>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{seg.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${a.text}`}>Segment</div>
                      <h3 className="mt-1 text-xl font-medium text-neutral-50">{seg.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-400">{seg.angle}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-3">
                    {/* Hooks */}
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Content hooks</div>
                      <ul className="space-y-2">
                        {seg.hooks.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs leading-5 text-neutral-300">
                            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formats */}
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Content formats</div>
                      <ul className="space-y-2">
                        {seg.formats.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs leading-5 text-neutral-300">
                            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Do/don't */}
                    <div className="space-y-4">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300/70 mb-2">✓ Do</div>
                        <ul className="space-y-1">
                          {seg.doList.map((d) => (
                            <li key={d} className="text-xs leading-5 text-neutral-300">· {d}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-rose-300/70 mb-2">✗ Don&rsquo;t</div>
                        <ul className="space-y-1">
                          {seg.dontList.map((d) => (
                            <li key={d} className="text-xs leading-5 text-neutral-400">· {d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTREACH */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / 03 · Outreach
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              DM first. Email second. Never both at once.
            </h2>
            <p className="mt-3 text-neutral-400">
              TikTok DM is the primary channel — it feels native and doesn&rsquo;t
              require an email harvest. Send the segment-specific DM first. If no
              reply in 5 days, follow up with email if available. Do not send generic outreach.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 mb-6">
            {/* DM template */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">/ DM template (segment-personalised)</div>
              <p className="mt-3 text-xs text-neutral-500">Replace [brackets] with specific research. Every DM must reference a real piece of their content.</p>
              <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/40 p-5 font-mono text-[13px] leading-6 text-neutral-300">
                <div>Hi {"{"} Firstname {"}"} — we&rsquo;re Vygor Health, a weight management app launching in the US. We&rsquo;re offering paid partnerships to wellness creators: flat fee per post + affiliate commission on every subscriber you refer. Full creative freedom, no script.</div>
                <div className="h-3" />
                <div className="text-neutral-500">→ Then add 1–2 sentences from the segment DM above</div>
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
                  <div className="h-3" />
                  <div>Nare Harutyunyan · Influencer Manager · Vygor Health</div>
                  <div>creators@vygor.health · 443-360-8250</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sequence */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">/ Outreach sequence</div>
            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {[
                { day: "Day 1", action: "TikTok DM — segment-personalised", sub: "Reference a specific video. No pitch yet — open with the connection.", color: "emerald" },
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
              / 04 · Campaign setup
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
                  ["Brief sent", "Segment-specific brief (from the Content Briefs doc). Confirm receipt."],
                  ["Unique promo code set up", "One code per creator. Never share codes between creators."],
                  ["UTM link generated", "vygor.health/?utm_source=tiktok&utm_medium=creator&utm_campaign=[handle]"],
                  ["Rate confirmed in writing", "Flat fee + commission rate. Get confirmation before brief delivery."],
                  ["Approval workflow agreed", "Creator sends draft via DM or email. PM reviews within 48h."],
                  ["Compliance rules acknowledged", "Creator confirms they've read the compliance section of the brief."],
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

            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-300">/ Universal compliance rules — no exceptions</div>
              <div className="mt-5 space-y-3 text-sm leading-6">
                {[
                  "Every post must include #ad, #sponsored, or 'Paid partnership with Vygor Health'.",
                  "Never make specific outcome claims: 'lose X lbs', 'drop a dress size', 'cure PCOS'.",
                  "No medical claims. Vygor is a wellness app, not a medical device.",
                  "All posts and captions must be reviewed and approved by the PM before publishing.",
                  "Use your unique promo code and UTM link in every post. Never share another creator's link.",
                  "No before/after body transformation imagery.",
                ].map((rule) => (
                  <div key={rule} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                    <span className="text-neutral-300">{rule}</span>
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
              / 05 · Metrics
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
              / 06 · Scale or Cancel
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
