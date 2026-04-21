import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Partner with SerebrumAI",
  description:
    "Reach out about partnerships, pilots, and investment opportunities with SerebrumAI and our portfolio companies.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
            / Contact
          </div>
          <h1 className="mt-4 max-w-3xl text-5xl font-medium tracking-tight text-neutral-50 md:text-7xl">
            Partner with{" "}
            <span className="font-serif italic text-gradient">SerebrumAI</span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            We work with health plans, employers, family offices, RIAs, and
            product teams ready to replace legacy operating models with AI-native ones.
            Tell us about your organization and we&rsquo;ll be in touch.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-16 md:grid-cols-12">
            <aside className="md:col-span-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                / Response time
              </div>
              <p className="mt-4 text-base leading-6 text-neutral-300">
                We respond within two business days for partnerships, pilot
                opportunities, and investor conversations.
              </p>

              <div className="mt-10 space-y-5 border-t border-white/[0.06] pt-8">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Ventures
                  </div>
                  <div className="mt-2 text-sm text-neutral-300">
                    Vygor AI · TokenSource · AlphaSigma
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Working with
                  </div>
                  <div className="mt-2 text-sm text-neutral-300">
                    Health plans, employers, family offices, RIAs, product
                    teams
                  </div>
                </div>
              </div>
            </aside>

            <div className="md:col-span-8">
              <Suspense fallback={<div className="h-96" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
