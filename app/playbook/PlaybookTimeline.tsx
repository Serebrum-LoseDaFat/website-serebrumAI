"use client";

import { useState } from "react";

type ChannelKey =
  | "substack"
  | "website"
  | "linkedin"
  | "twitter"
  | "notes"
  | "email"
  | "dm";

type Phase = {
  day: string;
  title: string;
  summary: string;
  channels: ChannelKey[];
  tasks: string[];
};

const channels: Record<ChannelKey, { label: string; color: string }> = {
  substack: { label: "Substack", color: "text-orange-300 border-orange-300/30 bg-orange-300/[0.06]" },
  website: { label: "serebrum.ai", color: "text-emerald-300 border-emerald-300/30 bg-emerald-300/[0.06]" },
  linkedin: { label: "LinkedIn", color: "text-blue-300 border-blue-300/30 bg-blue-300/[0.06]" },
  twitter: { label: "Twitter/X", color: "text-neutral-200 border-white/20 bg-white/[0.06]" },
  notes: { label: "Substack Notes", color: "text-orange-200 border-orange-200/30 bg-orange-200/[0.05]" },
  email: { label: "Email", color: "text-violet-300 border-violet-300/30 bg-violet-300/[0.06]" },
  dm: { label: "DM", color: "text-cyan-300 border-cyan-300/30 bg-cyan-300/[0.06]" },
};

const phases: Phase[] = [
  {
    day: "Day 0",
    title: "Publish",
    summary:
      "Essay goes live on Substack. Native post on LinkedIn. Twitter thread. serebrum.ai/writing auto-syncs.",
    channels: ["substack", "linkedin", "twitter", "website"],
    tasks: [
      "Publish on Substack — aim for Tue or Wed, 8 AM in target timezone.",
      "Post native text on LinkedIn (use manifesto or story variant from writing/drafts).",
      "Drop the Substack URL as your own first comment on the LinkedIn post.",
      "Reply to first-hour comments individually — single strongest algorithm signal.",
      "Post a 5–7 tweet thread on Twitter/X. Each tweet standalone; Substack link in last tweet.",
      "Pin the Twitter thread to your profile for two weeks.",
      "serebrum.ai/writing auto-updates from the Substack RSS within an hour.",
    ],
  },
  {
    day: "Day 1",
    title: "Warm-intro sweep",
    summary:
      "Every investor, operator, or relevant person who engaged yesterday is a warm lead. Act on it today.",
    channels: ["linkedin", "email"],
    tasks: [
      "List every LinkedIn liker/commenter from the Day 0 post.",
      "Flag investors, operators, relevant engagers.",
      "For each, map second-degree mutual connections on LinkedIn.",
      "Send 3–5 warm-intro requests using the template.",
      "Add each target to the outreach tracker.",
    ],
  },
  {
    day: "Day 2",
    title: "Cold outreach begins",
    summary:
      "Five cold DMs and five cold emails per day. Personalize each. The essay is the deck — no attachments.",
    channels: ["linkedin", "email", "dm"],
    tasks: [
      "Send 5 cold LinkedIn DMs — personalized opener, Substack link at the end.",
      "Send 5 cold emails — 3-paragraph structure, no deck attached.",
      "First ask is always a 20-min conversation, not capital.",
      "Track in spreadsheet: name, firm, channel, date, next action.",
      "Hard cap at ~10 cold touches/day to keep personalization quality.",
    ],
  },
  {
    day: "Day 3–5",
    title: "Response management",
    summary:
      "Reply to any inbound interest within 24 hours. Never let an interested investor cool off.",
    channels: ["email", "linkedin", "dm"],
    tasks: [
      "Reply to every inbound DM/email within 24 hours.",
      "Send Calendly link immediately when someone says yes to a call.",
      "Never make scheduling the friction point.",
      "Capture notes from conversations back into tracker.",
    ],
  },
  {
    day: "Day 7",
    title: "Second wave",
    summary:
      "Resurface the content with a new angle. Post a Substack Note. Send more outreach.",
    channels: ["notes", "linkedin", "email"],
    tasks: [
      "Post a Substack Note — one punchy takeaway from the essay + link.",
      "Reshare or repost the LinkedIn piece with a new framing.",
      "Comment thoughtfully on 3–5 investor posts — natural warm-up for future DMs.",
      "Send 5 more cold outreaches.",
    ],
  },
  {
    day: "Day 10",
    title: "Follow-up",
    summary:
      "Exactly one follow-up for non-responders from Day 2. Never send two.",
    channels: ["email", "linkedin"],
    tasks: [
      "Send the single follow-up using 'no need to reply' framing.",
      "Expected response rate: 15–20% even after initial silence.",
      "Mark confirmed passes in tracker so you don't circle back unnecessarily.",
      "Close out any positive signals with a scheduled Zoom.",
    ],
  },
  {
    day: "Day 14",
    title: "Review + plan next",
    summary:
      "Look at what resonated. Pick the next essay topic based on the strongest signals.",
    channels: ["website"],
    tasks: [
      "Review Substack analytics — opens, reads, best-performing sections.",
      "Review LinkedIn + Twitter impressions and comments.",
      "Identify which arguments generated the most engagement.",
      "Choose the next essay topic from the highest-engagement thread.",
      "Schedule the next publish date ~2 weeks out.",
    ],
  },
];

export default function PlaybookTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <div className="relative">
          {/* vertical spine */}
          <div
            className="absolute left-[15px] top-3 bottom-3 w-px bg-white/10 md:left-[23px]"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {phases.map((phase, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={phase.day} className="relative pl-12 md:pl-20">
                  {/* node dot */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-5 flex h-[31px] w-[31px] items-center justify-center rounded-full border transition md:left-2 ${
                      isOpen
                        ? "border-emerald-400/60 bg-emerald-400/[0.12]"
                        : "border-white/15 bg-[#0a0a0d]"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition ${
                        isOpen ? "bg-emerald-400" : "bg-white/40"
                      }`}
                    />
                  </div>

                  {/* card */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`group w-full rounded-2xl border p-6 text-left transition md:p-7 ${
                      isOpen
                        ? "border-emerald-400/25 bg-[#0b0e0d]"
                        : "border-white/[0.08] bg-[#0a0a0d] hover:border-white/[0.18]"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400">
                          {phase.day}
                        </span>
                        <h3 className="text-xl font-medium tracking-tight text-neutral-50 md:text-2xl">
                          {phase.title}
                        </h3>
                      </div>
                      <span
                        className={`font-mono text-xs text-neutral-500 transition ${
                          isOpen ? "rotate-180 text-emerald-400" : ""
                        }`}
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-neutral-400 md:text-base">
                      {phase.summary}
                    </p>

                    {/* channel pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {phase.channels.map((ck) => (
                        <span
                          key={ck}
                          className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${channels[ck].color}`}
                        >
                          {channels[ck].label}
                        </span>
                      ))}
                    </div>

                    {/* expanded task list */}
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "mt-6 grid-rows-[1fr] opacity-100"
                          : "mt-0 grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-3 border-t border-white/[0.06] pt-5">
                          {phase.tasks.map((t, ti) => (
                            <li
                              key={ti}
                              className="flex gap-3 text-sm leading-6 text-neutral-300 md:text-[15px]"
                            >
                              <span className="font-mono text-[11px] text-emerald-400/70 mt-0.5">
                                {String(ti + 1).padStart(2, "0")}
                              </span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* legend */}
        <div className="mt-16 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            / Channel legend
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(Object.keys(channels) as ChannelKey[]).map((ck) => (
              <span
                key={ck}
                className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${channels[ck].color}`}
              >
                {channels[ck].label}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-neutral-500">
          Publishing day is 10% of the work. The rollout is the other 90%.
        </p>
      </div>
    </section>
  );
}
