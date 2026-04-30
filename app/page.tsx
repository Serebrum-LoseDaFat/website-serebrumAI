import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SerebrumAI — We don't invest in industries. We rebuild them.",
  description:
    "SerebrumAI is a venture studio building AI-native, global-scale companies that replace legacy operating models with intelligent ones. Meet Vygor AI, TokenSource, and AlphaSigma.",
  alternates: { canonical: "/" },
};

const ventures = [
  {
    href: "/ventures/tokensource",
    id: "01",
    category: "Software Lifecycle",
    name: "TokenSource",
    tagline: "The execution layer for AI-native product teams.",
    buyer: "Product · engineering leadership",
    impact: "30–50% faster delivery",
    accent: "from-cyan-400/40 to-cyan-400/0",
  },
  {
    href: "/ventures/alphasigma",
    id: "02",
    category: "Investment Management",
    name: "AlphaSigma",
    tagline: "From reporting dashboards to a decision engine.",
    buyer: "RIAs · family offices",
    impact: "Improved Sharpe · reduced drawdowns",
    accent: "from-violet-400/40 to-violet-400/0",
  },
  {
    href: "/ventures/vygor",
    id: "03",
    category: "Health & Wellness",
    name: "Vygor AI",
    tagline: "Continuous intelligence for weight, obesity, and diabetes care.",
    buyer: "Health plans · employers",
    impact: "20–40% program cost reduction",
    accent: "from-emerald-400/40 to-emerald-400/0",
  },
];

const pillars = [
  {
    title: "Shared intelligence layer",
    body: "Every venture draws from common AI infrastructure, data models, and decision systems — compounding across the portfolio instead of starting from zero.",
  },
  {
    title: "Repeatable build system",
    body: "A structured way to identify opportunities, validate them, and launch companies — so we move faster and ship with higher quality.",
  },
  {
    title: "Concentrated capital",
    body: "Capital flows dynamically to the highest-potential ventures, maximizing returns while keeping the portfolio adaptive.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-28 md:px-10 md:pb-40 md:pt-36">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI-native venture studio
          </div>

          <h1 className="max-w-5xl font-sans text-5xl font-medium tracking-tight text-neutral-50 md:text-7xl lg:text-8xl">
            We don&rsquo;t invest in industries.
            <br />
            <span className="font-serif italic text-gradient">
              We rebuild them.
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-400 md:text-xl">
            SerebrumAI is building the next generation of AI-native companies
            that replace broken systems across industries.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Partner with SerebrumAI
              <span className="transition group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="#ventures"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-neutral-100 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              See the portfolio
            </Link>
          </div>

          <div className="mt-24 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-10 border-t border-white/[0.06] pt-10 sm:grid-cols-3">
            {/* Global */}
            <div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-7 w-7 text-emerald-400"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                <ellipse cx="12" cy="12" rx="9" ry="3.5" strokeWidth="1" opacity="0.7" />
                <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1" opacity="0.7" />
              </svg>
              <div className="mt-4 font-serif text-3xl text-neutral-100">
                Global-scale
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                By default
              </div>
            </div>

            {/* AI-native */}
            <div>
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 text-emerald-400"
                aria-hidden="true"
              >
                <g stroke="currentColor" strokeWidth="1" opacity="0.5">
                  <line x1="12" y1="12" x2="5" y2="5" />
                  <line x1="12" y1="12" x2="19" y2="5" />
                  <line x1="12" y1="12" x2="5" y2="19" />
                  <line x1="12" y1="12" x2="19" y2="19" />
                </g>
                <g fill="currentColor">
                  <circle cx="5" cy="5" r="1.5" opacity="0.75" />
                  <circle cx="19" cy="5" r="1.5" opacity="0.75" />
                  <circle cx="5" cy="19" r="1.5" opacity="0.75" />
                  <circle cx="19" cy="19" r="1.5" opacity="0.75" />
                  <circle cx="12" cy="12" r="2.5" />
                </g>
              </svg>
              <div className="mt-4 font-serif text-3xl text-neutral-100">
                AI-native
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                From day zero
              </div>
            </div>

            {/* Industry-transforming */}
            <div>
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 text-emerald-400"
                aria-hidden="true"
              >
                <rect
                  x="1.5"
                  y="7"
                  width="8"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  opacity="0.7"
                />
                <path
                  d="M 11 12 L 14.5 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <polyline
                  points="13 10.3 14.8 12 13 13.7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="19" cy="12" r="4" fill="currentColor" />
              </svg>
              <div className="mt-4 font-serif text-3xl text-neutral-100">
                Industry-transforming
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                Not incremental
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section
        id="thesis"
        className="scroll-mt-20 border-b border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <h2 className="sr-only">Thesis — three ideas we&rsquo;re betting the studio on</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/thesis-graphic.svg"
            alt="Serebrum thesis: three principles — industries are artifacts of scarcity, AI belongs underneath not on top, the prize is replacement not efficiency"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* VENTURE CREATION MODEL */}
      <section
        id="model"
        className="scroll-mt-20 border-b border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <h2 className="sr-only">Serebrum Venture Creation Model</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vcm-funnel.svg"
            alt="Serebrum Venture Creation Model: four-phase funnel from industry dislocation analysis to AI-native spinout"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* WHY NOW */}
      <section
        id="why-now"
        className="scroll-mt-20 border-b border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <h2 className="sr-only">Why now — three forces have converged</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/why-now-graphic.svg"
            alt="Why now: three forces — abundant intelligence, real-time data, global distribution — converging into a single moment. The window is open to rebuild legacy operating models."
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* VENTURES */}
      <section id="ventures" className="scroll-mt-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
                / Portfolio
              </div>
              <h2 className="mt-4 text-4xl font-medium tracking-tight text-neutral-50 md:text-5xl">
                What we&rsquo;re building now.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-neutral-400">
              Three companies. Three inefficient systems being replaced with
              intelligence-native ones.
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {ventures.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="group relative block overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0a0d] p-8 transition hover:border-white/20 md:p-12"
              >
                <div
                  className={`pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br ${v.accent} opacity-0 blur-3xl transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-1">
                    <div className="font-mono text-xs text-neutral-500">
                      {v.id}
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                      {v.category}
                    </div>
                    <h3 className="mt-3 text-4xl font-medium tracking-tight text-neutral-50 md:text-5xl">
                      {v.name}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-lg leading-7 text-neutral-300">
                      {v.tagline}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500">
                      <div>
                        <span className="font-mono uppercase tracking-widest">
                          Buyer ·{" "}
                        </span>
                        <span className="text-neutral-400">{v.buyer}</span>
                      </div>
                      <div>
                        <span className="font-mono uppercase tracking-widest">
                          Impact ·{" "}
                        </span>
                        <span className="text-neutral-400">{v.impact}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span className="inline-flex items-center gap-2 text-sm text-neutral-300 transition group-hover:text-emerald-400">
                      Read more
                      <span className="transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE WIN */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / Edge
            </div>
            <h2 className="mt-4 text-4xl font-medium tracking-tight text-neutral-50 md:text-5xl">
              Why SerebrumAI wins.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              Not a collection of ideas — a system for building AI-native
              companies faster, cheaper, and with higher probability of
              success.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="relative rounded-3xl border border-white/[0.08] bg-[#0a0a0d] p-8"
              >
                <div className="font-mono text-xs text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-xl font-medium text-neutral-50">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="glow-orb pointer-events-none absolute -bottom-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-sans text-4xl font-medium tracking-tight text-neutral-50 md:text-6xl">
              The biggest opportunities aren&rsquo;t in improving industries.
            </h2>
            <p className="mt-6 font-serif text-3xl italic text-gradient md:text-5xl">
              They&rsquo;re in replacing the systems those industries depend
              on.
            </p>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-neutral-400">
              SerebrumAI exists to find those systems, rebuild them from the
              ground up, and create companies designed for a post-constraint
              world.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                Partner with SerebrumAI
                <span className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-neutral-100 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Review the portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
