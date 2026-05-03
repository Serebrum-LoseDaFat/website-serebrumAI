import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] bg-[#070709]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="SerebrumAI home">
              <Logo size="lg" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-neutral-400">
              A venture studio building AI-native, global-scale companies that
              replace legacy operating models with intelligent ones.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-emerald-400"
            >
              Get in touch →
            </Link>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              Ventures
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/ventures/tokensource"
                  className="text-neutral-300 transition hover:text-white"
                >
                  TokenSource
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures/alphasigma"
                  className="text-neutral-300 transition hover:text-white"
                >
                  AlphaSigma
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures/fedstat"
                  className="text-neutral-300 transition hover:text-white"
                >
                  FedStat
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures/vygor"
                  className="text-neutral-300 transition hover:text-white"
                >
                  Vygor AI
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              Studio
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/#model"
                  className="text-neutral-300 transition hover:text-white"
                >
                  Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-now"
                  className="text-neutral-300 transition hover:text-white"
                >
                  Why now
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-neutral-300 transition hover:text-white"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-300 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              Working with
            </div>
            <ul className="mt-4 space-y-2 text-xs text-neutral-400">
              <li>Health plans</li>
              <li>Employers</li>
              <li>Family offices · RIAs</li>
              <li>Product teams</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-neutral-500 md:flex-row md:items-center">
          <div>© {year} SerebrumAI. All rights reserved.</div>
          <div className="font-mono">Built for a post-constraint world.</div>
        </div>
      </div>
    </footer>
  );
}
