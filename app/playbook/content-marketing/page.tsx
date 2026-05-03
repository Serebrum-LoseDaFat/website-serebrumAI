import type { Metadata } from "next";
import ContentMarketingTimeline from "./ContentMarketingTimeline";

export const metadata: Metadata = {
  title: "Content Marketing",
  description:
    "The 14-day content distribution flow used by SerebrumAI — from Substack publish to final follow-up.",
  robots: { index: false, follow: false },
};

export default function ContentMarketingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-5xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
            / Content Marketing
          </div>
          <h1 className="mt-4 max-w-3xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            The{" "}
            <span className="font-serif italic text-gradient">
              14-day distribution flow
            </span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            One essay, five channels, fourteen days. Click any phase to expand
            the tasks.
          </p>
        </div>
      </section>

      {/* INTERACTIVE TIMELINE */}
      <ContentMarketingTimeline />
    </>
  );
}
