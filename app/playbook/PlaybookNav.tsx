"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Accent = "emerald" | "cyan" | "violet";

type Item = {
  href: string;
  label: string;
  external?: boolean;
  locked?: boolean;
};

type Category = {
  key: string;
  accent: Accent;
  items: Item[];
};

const overview: Item = { href: "/playbook", label: "Overview" };

const categories: Category[] = [
  {
    key: "Strategy",
    accent: "emerald",
    items: [
      { href: "/playbook/blueprint", label: "Blueprint" },
      { href: "/playbook/priorities", label: "Priorities", locked: true },
    ],
  },
  {
    key: "Marketing",
    accent: "cyan",
    items: [
      { href: "/playbook/gtm", label: "GTM" },
      { href: "/playbook/content-marketing", label: "Content marketing" },
      { href: "/playbook/b2b-leadgen.html", label: "B2B LeadGen", external: true },
      { href: "/playbook/lead-machine", label: "Lead machine" },
    ],
  },
  {
    key: "Fundraising",
    accent: "violet",
    items: [
      { href: "/playbook/fundraising", label: "Capital strategy", locked: true },
      { href: "/playbook/the-raise", label: "The Raise", locked: true },
    ],
  },
];

const accentText: Record<Accent, string> = {
  emerald: "text-emerald-300/80",
  cyan: "text-cyan-300/80",
  violet: "text-violet-300/80",
};

const accentDot: Record<Accent, string> = {
  emerald: "bg-emerald-300/60",
  cyan: "bg-cyan-300/60",
  violet: "bg-violet-300/60",
};

export default function PlaybookNav() {
  const pathname = usePathname();

  const isItemActive = (item: Item) =>
    item.href === "/playbook"
      ? pathname === "/playbook"
      : pathname === item.href || pathname.startsWith(item.href + "/");

  const renderItem = (item: Item) => {
    const isActive = isItemActive(item);
    const className = `whitespace-nowrap rounded-full px-3 py-1 text-xs transition ${
      isActive
        ? "bg-white/[0.08] text-neutral-50"
        : "text-neutral-400 hover:bg-white/[0.04] hover:text-neutral-100"
    }`;
    const labelNode = (
      <>
        {item.label}
        {item.locked && (
          <span
            aria-label="Password required"
            className="ml-1.5 inline-block translate-y-[-1px] text-[10px] opacity-70"
          >
            🔒
          </span>
        )}
      </>
    );
    if (item.external) {
      return (
        <a key={item.href} href={item.href} className={className}>
          {labelNode}
        </a>
      );
    }
    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={className}
      >
        {labelNode}
      </Link>
    );
  };

  return (
    <nav
      aria-label="Playbook sections"
      className="sticky top-[64px] z-40 border-b border-white/[0.06] bg-[#070709]/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-10">
        {/* Top header row — brand + Overview */}
        <div className="flex items-center gap-3 border-b border-white/[0.04] pb-2">
          <Link
            href="/playbook"
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400/80 transition hover:text-emerald-400"
          >
            / Playbook
          </Link>
          <span className="text-neutral-700">·</span>
          {renderItem(overview)}
        </div>

        {/* Three category rows */}
        <div className="mt-2 space-y-1">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="grid grid-cols-[125px_1fr] items-center gap-3 md:grid-cols-[140px_1fr]"
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className={`h-1 w-1 shrink-0 rounded-full ${accentDot[cat.accent]}`}
                />
                <span
                  className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] ${accentText[cat.accent]}`}
                >
                  / {cat.key}
                </span>
              </div>
              <div className="flex items-center gap-1 overflow-x-auto">
                {cat.items.map(renderItem)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
