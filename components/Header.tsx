import Link from "next/link";
import Logo from "./Logo";

const ventures = [
  { href: "/ventures/tokensource", label: "TokenSource", tag: "Software" },
  { href: "/ventures/alphasigma", label: "AlphaSigma", tag: "Capital" },
  { href: "/ventures/vygor", label: "Vygor AI", tag: "Health" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070709]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" aria-label="SerebrumAI home">
          <Logo size="md" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-neutral-400 transition hover:text-neutral-100">
              Ventures
              <svg
                className="h-3 w-3 opacity-60"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full z-10 w-72 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-[#0d0d11] p-2 shadow-2xl shadow-black/50">
                {ventures.map((v) => (
                  <Link
                    key={v.href}
                    href={v.href}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-neutral-200 transition hover:bg-white/[0.04]"
                  >
                    <span>{v.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      {v.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/#thesis"
            className="rounded-full px-4 py-2 text-sm text-neutral-400 transition hover:text-neutral-100"
          >
            Thesis
          </Link>
          <Link
            href="/#model"
            className="rounded-full px-4 py-2 text-sm text-neutral-400 transition hover:text-neutral-100"
          >
            Approach
          </Link>
          <Link
            href="/#why-now"
            className="rounded-full px-4 py-2 text-sm text-neutral-400 transition hover:text-neutral-100"
          >
            Why now
          </Link>
          <Link
            href="/insights"
            className="rounded-full px-4 py-2 text-sm text-neutral-400 transition hover:text-neutral-100"
          >
            Insights
          </Link>

          <Link
            href="/contact"
            className="ml-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-100 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            Partner with us →
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-100 md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
