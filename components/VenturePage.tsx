import Link from "next/link";

export type VenturePageProps = {
  category: string;
  name: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  buyer: string;
  impact: string[];
  howItWorks: { title: string; body: string }[];
  accent?: "emerald" | "cyan" | "violet";
  logoSrc?: string;
  logoLight?: boolean;
};

const accentColors = {
  emerald: {
    gradient: "from-emerald-400/30 via-emerald-400/0 to-transparent",
    text: "text-emerald-400",
    ring: "bg-emerald-400",
  },
  cyan: {
    gradient: "from-cyan-400/30 via-cyan-400/0 to-transparent",
    text: "text-cyan-400",
    ring: "bg-cyan-400",
  },
  violet: {
    gradient: "from-violet-400/30 via-violet-400/0 to-transparent",
    text: "text-violet-400",
    ring: "bg-violet-400",
  },
};

export default function VenturePage(props: VenturePageProps) {
  const a = accentColors[props.accent || "emerald"];
  const slug = props.name.toLowerCase().split(" ")[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div
          className={`pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b ${a.gradient} blur-3xl`}
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32">
          <Link
            href="/#ventures"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-neutral-200"
          >
            ← All ventures
          </Link>

          <div className="mt-10 flex items-center gap-3">
            <span className={`h-1.5 w-1.5 rounded-full ${a.ring}`} />
            <div
              className={`font-mono text-[11px] uppercase tracking-[0.25em] ${a.text}`}
            >
              {props.category}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
            {props.logoSrc && (
              <div
                className={
                  props.logoLight
                    ? "shrink-0 rounded-2xl bg-transparent p-4 md:p-5"
                    : "shrink-0"
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={props.logoSrc}
                  alt={`${props.name} logo`}
                  className="h-12 w-auto md:h-16"
                />
              </div>
            )}
            <h1 className="text-5xl font-medium tracking-tight text-neutral-50 md:text-7xl">
              {props.name}
            </h1>
          </div>
          <p className="mt-6 max-w-3xl font-serif text-2xl italic leading-tight text-neutral-400 md:text-3xl">
            {props.tagline}
          </p>
          <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-300">
            {props.summary}
          </p>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] md:grid-cols-2">
            <div className="bg-[#0a0a0d] p-8 md:p-12">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                / The problem
              </div>
              <p className="mt-6 text-base leading-7 text-neutral-300 md:text-lg md:leading-8">
                {props.problem}
              </p>
            </div>
            <div className="bg-[#0a0a0d] p-8 md:p-12">
              <div
                className={`font-mono text-[11px] uppercase tracking-[0.25em] ${a.text}`}
              >
                / Our approach
              </div>
              <p className="mt-6 text-base leading-7 text-neutral-300 md:text-lg md:leading-8">
                {props.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-2xl">
            <div
              className={`font-mono text-[11px] uppercase tracking-[0.25em] ${a.text}`}
            >
              / How it works
            </div>
            <h2 className="mt-4 text-4xl font-medium tracking-tight text-neutral-50 md:text-5xl">
              An intelligence-native system, top to bottom.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-white/[0.06]">
            {props.howItWorks.map((item, i) => (
              <div
                key={item.title}
                className="grid grid-cols-12 gap-6 py-8 first:pt-0"
              >
                <div className="col-span-12 font-mono text-xs text-neutral-500 md:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-xl font-medium text-neutral-100 md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="text-base leading-7 text-neutral-400">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER + IMPACT */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                / Economics
              </div>
              <h3 className="mt-4 font-serif text-3xl italic text-neutral-100 md:text-4xl">
                Who pays, and why.
              </h3>
              <p className="mt-6 text-base leading-7 text-neutral-400">
                {props.buyer}
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                / Measured impact
              </div>
              <ul className="mt-6 space-y-5">
                {props.impact.map((line, i) => (
                  <li
                    key={line}
                    className="flex gap-4 border-b border-white/[0.06] pb-5 last:border-0"
                  >
                    <span className={`font-mono text-xs ${a.text}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-7 text-neutral-200">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div
          className={`pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-t ${a.gradient} blur-3xl`}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-medium tracking-tight text-neutral-50 md:text-5xl">
              Interested in {props.name}?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              We&rsquo;re engaging with partners, pilot customers, and
              strategic investors. Tell us about your organization and
              we&rsquo;ll be in touch.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={`/contact?venture=${slug}`}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                Get in touch
                <span className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="/#ventures"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-neutral-100 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                See other ventures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
