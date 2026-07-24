import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vygor · Creator Content Brief",
  description: "Official creator content brief for Vygor Health — segment angles, content hooks, formats, and compliance rules.",
  robots: { index: false, follow: false },
};

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
    formats: [
      "Before/after habit comparison (habits, not body imagery)",
      "Week in my life with Vygor check-ins",
      "30/60/90-day progress reflection",
      "Contest reveal — follower weight challenge",
    ],
    doList: ["Talk about habit-building and consistency", "Share personal app experience", "Mention the contest feature", '#ad / "Paid partnership" in every post'],
    dontList: ["Claim specific weight loss numbers", "Before/after body transformation photos", "Say Vygor 'makes you lose weight'", "Sound like a diet or meal plan"],
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
    formats: [
      "'App I recommend alongside a diet plan' — practitioner framing",
      "Nutrition routine with Vygor as daily check-in",
      "'Why habit tracking beats calorie counting' educational piece",
      "FAQ: 'How do you stay consistent?'",
    ],
    doList: ["Frame Vygor as a habit and consistency tool", "Use language like 'accountability', 'patterns', 'consistency'", "Show routine-building alongside nutrition", "#ad disclosure in every post"],
    dontList: ["Claim Vygor provides nutrition advice or meal plans", "Imply Vygor replaces a dietitian", "Say it 'cures' unhealthy eating or eating disorders", "Make condition-specific claims (insulin resistance, PCOS)"],
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
    formats: [
      "Personal story: weight journey with PCOS / menopause / postpartum",
      "'What I wish I knew about [condition] and weight'",
      "Day-in-the-life: Vygor check-in as self-care",
      "Community Q&A: 'How do you stay consistent?'",
    ],
    doList: ["Talk about habit consistency as the key", "Share personal experience — 'this helped me stay consistent'", "Frame Vygor as a support tool alongside medical treatment", "Acknowledge every body is different"],
    dontList: ["Say Vygor 'treats' PCOS, menopause, or any condition", "Claim Vygor balances hormones or reduces symptoms", "Make specific weight loss claims", "Use language like 'cure', 'reverse', 'heal'"],
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
    formats: [
      "Full day routine: workout + Vygor habit check-in as bookends",
      "'What your trainer doesn't tell you' — habits outside the gym",
      "30-day accountability challenge alongside a workout program",
      "Steps contest: challenge your audience via Vygor's open competition",
    ],
    doList: ["Talk about habits outside the gym: sleep, eating, recovery", "Position Vygor as the accountability layer supporting training", "Use the contest feature for audience challenges", "Be honest — it's a habit app, not a fitness tracker"],
    dontList: ["Imply Vygor tracks workouts or replaces a fitness app", "Claim Vygor accelerates muscle gain or athletic performance", "Make specific body composition claims", "Suggest Vygor substitutes a personal trainer"],
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
    formats: [
      "Morning routine: Vygor check-in as part of healthy morning",
      "'Apps that are actually part of my wellness routine'",
      "Habit reflection: 'what 30 days of tracking taught me'",
      "Community challenge: steps or weight contest for followers",
    ],
    doList: ["Talk about habit-building, consistency, and showing up for yourself", "Frame weight management as one dimension of overall wellness", "Use language like 'awareness', 'accountability', 'intention', 'patterns'", "Show Vygor authentically as part of your real routine"],
    dontList: ["Promote diet culture, restriction, or body image pressure", "Make specific weight loss claims or outcomes", "Suggest Vygor is a 'quick fix' or shortcut", "Use before/after content or weight numbers"],
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
    formats: [
      "Walkthrough: 'how I use Vygor to monitor client progress'",
      "Demo: setting up a contest between client groups",
      "'A week in my coaching practice' — Vygor in the workflow",
      "Open challenge: invite audience to join a steps or weight contest",
    ],
    doList: ["Highlight the Share feature as a coach accountability tool", "Demonstrate the Contest feature for group challenges", "Frame Vygor as complementary to existing coaching methods", "Be clear Vygor supports — not replaces — professional coaching"],
    dontList: ["Imply Vygor provides coaching, therapy, or clinical guidance", "Make specific outcome claims for client results", "Suggest the app replaces a coach or health professional", "Share client data or personal information publicly"],
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
    formats: [
      "Educational explainer: 'the science of habit formation and weight'",
      "'Apps I actually recommend to patients' — Vygor as behavioral tool",
      "Myth-busting: 'why diets fail' — Vygor as the behavioral solution",
      "Professional review: honest assessment of what the app does and doesn't do",
    ],
    doList: ["Frame Vygor as a behavior/habit tool, not a medical intervention", "Be clear Vygor is a wellness app, not a medical device", "Recommend Vygor as a complement to clinical care", "Disclose paid partnership prominently — HCP audiences expect transparency"],
    dontList: ["Say Vygor treats, manages, or helps with any medical condition", "Imply Vygor is clinically validated or FDA-cleared", "Make specific outcome claims", "Overstate capabilities — this audience will call it out"],
  },
];

export default function ContentBriefPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400">
            / Vygor · Creator Brief
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            Creator Content{" "}
            <span className="font-serif italic text-gradient">Brief.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Everything you need to create authentic, effective content for Vygor — segment angles, content hooks, formats, and compliance rules.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://apps.apple.com/us/app/vygor-ai-wellness-coach/id1565632505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/[0.08] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-amber-300 transition hover:border-amber-400/50 hover:bg-amber-400/[0.12]"
            >
              ↗ Download on App Store
            </a>
            <a
              href="mailto:partners@vygor.health"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400 transition hover:border-white/[0.20] hover:text-neutral-200"
            >
              partners@vygor.health
            </a>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
          <div className="mb-8 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-rose-400">
              / Compliance — required for all posts
            </div>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-neutral-50 md:text-3xl">
              Non-negotiable rules. Every post, every segment.
            </h2>
            <p className="mt-3 text-neutral-400 text-sm leading-6">
              All posts must be reviewed and approved by the Vygor team before publishing. Send your draft to{" "}
              <a href="mailto:partners@vygor.health" className="text-amber-400 underline underline-offset-2">partners@vygor.health</a>{" "}
              or via DM.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 md:p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-rose-300 mb-4">✓ Required</div>
              <ul className="space-y-3">
                {[
                  '#ad, #sponsored, or "Paid partnership with Vygor Health" in every post',
                  "PM approval on all content and captions before publishing",
                  "Your unique promo code and UTM link in every post",
                  "Honest, first-person experience of the app",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm leading-5 text-neutral-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 md:p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-rose-300 mb-4">✗ Prohibited</div>
              <ul className="space-y-3">
                {[
                  "Specific weight loss claims ('lose X lbs', 'drop a dress size')",
                  "Medical claims of any kind ('treats PCOS', 'balances hormones')",
                  "Before/after body transformation imagery",
                  "Language like 'cure', 'reverse', 'heal', 'clinically proven'",
                  "Sharing another creator's promo code or UTM link",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm leading-5 text-neutral-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-600" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT VYGOR */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {/* What it is */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ What Vygor is</div>
              <p className="mt-4 text-base leading-7 text-neutral-300">
                Vygor is a weight management app built around <span className="text-neutral-100">habit tracking and accountability</span> — not calorie counting. It helps people build the consistent daily habits that actually lead to lasting results.
              </p>
              <p className="mt-4 text-base leading-7 text-neutral-300">
                Available on iPhone. <span className="text-neutral-100">$79.99/year.</span>
              </p>
              <div className="mt-6 space-y-3">
                {[
                  ["Contest feature", "Users create weight or steps competitions with friends, family, or followers. Open to the public or invite-only."],
                  ["Share feature", "Users share their weight and steps data with a coach or accountability partner in real time."],
                  ["Habit tracking", "Daily check-ins that build streaks and make consistency visible over time."],
                ].map(([feat, desc]) => (
                  <div key={feat as string} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <div>
                      <span className="text-sm font-medium text-neutral-100">{feat}</span>
                      <span className="text-sm text-neutral-400"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What it isn't */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">/ What Vygor is not</div>
              <p className="mt-4 text-sm leading-6 text-neutral-400">
                Keep this in mind when creating content. Vygor is not:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "A diet app or meal plan",
                  "A calorie counter",
                  "A fitness tracker (it doesn't track workouts)",
                  "A medical device or clinical tool",
                  "A substitute for professional health care",
                  "A weight loss guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg border border-amber-400/20 bg-amber-400/[0.05] p-4 text-xs leading-5 text-neutral-400">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-amber-300">Core message:</span>{" "}
                Vygor is the habit and accountability layer that helps people stay consistent with the healthy choices they&rsquo;ve already decided to make.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
          <div className="mb-10 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400">
              / Creator segments
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Find your segment.
            </h2>
            <p className="mt-3 text-neutral-400">
              Your brief is the section that best matches your content niche. Use the angle, hooks, and formats from your segment. The compliance rules above apply to all segments.
            </p>
          </div>

          <div className="space-y-6">
            {segments.map((seg, i) => (
              <div
                key={seg.id}
                id={seg.id}
                className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{seg.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-400/70">
                        Segment {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-1 text-xl font-medium text-neutral-50">{seg.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-400">{seg.angle}</p>
                  </div>
                </div>

                <div className="mt-7 grid gap-6 md:grid-cols-3">
                  {/* Hooks */}
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 mb-3">
                      Content hooks
                    </div>
                    <ul className="space-y-2">
                      {seg.hooks.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs leading-5 text-neutral-300"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400/60" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Formats */}
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 mb-3">
                      Content formats
                    </div>
                    <ul className="space-y-2">
                      {seg.formats.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs leading-5 text-neutral-300"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400/60" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Do / Don't */}
                  <div className="space-y-5">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300/70 mb-2">
                        ✓ Do
                      </div>
                      <ul className="space-y-1">
                        {seg.doList.map((d) => (
                          <li key={d} className="text-xs leading-5 text-neutral-300">
                            · {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-rose-300/70 mb-2">
                        ✗ Don&rsquo;t
                      </div>
                      <ul className="space-y-1">
                        {seg.dontList.map((d) => (
                          <li key={d} className="text-xs leading-5 text-neutral-400">
                            · {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ Contact</div>
              <div className="mt-4 space-y-2 text-sm">
                <a href="mailto:partners@vygor.health" className="block mt-3 text-amber-400 underline underline-offset-2 hover:text-amber-300 transition">
                  partners@vygor.health
                </a>
                <div className="text-neutral-400">443-360-8250</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ App</div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="text-neutral-200">Vygor AI Wellness Coach</div>
                <div className="text-neutral-500">$79.99 / year · iPhone only</div>
                <a
                  href="https://apps.apple.com/us/app/vygor-ai-wellness-coach/id1565632505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-amber-400 underline underline-offset-2 hover:text-amber-300 transition"
                >
                  Download on App Store ↗
                </a>
                <a
                  href="https://www.vygor.health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neutral-400 hover:text-neutral-200 transition"
                >
                  www.vygor.health
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300">/ Submission</div>
              <div className="mt-4 space-y-3 text-sm text-neutral-400 leading-6">
                <p>Send all drafts for review <span className="text-neutral-200">before publishing.</span></p>
                <p>Include your draft caption, video file or script, and your unique promo code.</p>
                <p>Expect a response within <span className="text-neutral-200">48 hours.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
