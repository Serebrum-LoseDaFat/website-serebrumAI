import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vygor · Playbook",
  description: "Vygor operating playbooks — gym partnerships, outreach, and go-to-market.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    href: "/playbook/vygor/gyms",
    label: "Gyms",
    tag: "V1",
    description:
      "SDR-executable gym partnership playbook — ICP tiers, Apollo + LinkedIn Sales Nav setup, 16-day outreach sequence, email templates, discovery call, partnership models, and revenue sharing.",
    accent: "amber" as const,
    status: "Live",
  },
  {
    href: "/playbook/vygor/tiktok",
    label: "TikTok",
    tag: "V1",
    description:
      "Full creator marketing playbook — 7 segment briefs, TikTok One discovery criteria, DM/email templates, campaign setup, compliance rules, KPI thresholds, and Scale or Cancel decision framework.",
    accent: "amber" as const,
    status: "Live",
  },
];

export default function VygorOverviewPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 opacity-50" />

        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-28">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400">
            / Vygor
          </div>
          <h1 className="mt-4 max-w-3xl text-5xl font-medium tracking-tight text-neutral-50 md:text-6xl">
            Operating{" "}
            <span className="font-serif italic text-gradient">playbooks.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Internal documents covering Vygor&apos;s go-to-market, partnerships, and
            outreach. Add new sections as the playbook grows.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400/80">
              / Sections
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              What&rsquo;s in this folder.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl border border-amber-400/[0.12] bg-amber-400/[0.03] p-7 transition hover:border-amber-400/25 hover:bg-amber-400/[0.06] md:p-8"
              >
                <div className="flex items-center gap-2.5">
                  <span className="rounded border border-amber-400/30 bg-amber-400/[0.08] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-amber-300">
                    {s.tag}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/[0.06] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-300">
                    {s.status}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-medium text-neutral-50 transition group-hover:text-amber-200">
                  {s.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {s.description}
                </p>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-amber-400/60 transition group-hover:text-amber-400">
                  Open →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
