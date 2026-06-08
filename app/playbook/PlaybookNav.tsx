"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections: {
  href: string;
  label: string;
  external?: boolean;
  locked?: boolean;
}[] = [
  { href: "/playbook", label: "Overview" },
  { href: "/playbook/blueprint", label: "Blueprint" },
  { href: "/playbook/priorities", label: "Priorities", locked: true },
  { href: "/playbook/gtm", label: "GTM" },
  { href: "/playbook/fundraising", label: "Fundraising" },
  { href: "/playbook/content-marketing", label: "Content marketing" },
  { href: "/playbook/b2b-leadgen.html", label: "B2B LeadGen", external: true },
  { href: "/playbook/lead-machine", label: "Lead machine" },
];

export default function PlaybookNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Playbook sections"
      className="sticky top-[64px] z-40 border-b border-white/[0.06] bg-[#070709]/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="flex items-center gap-4 overflow-x-auto py-3">
          <Link
            href="/playbook"
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400/80 transition hover:text-emerald-400"
          >
            / Playbook
          </Link>
          <span className="text-neutral-700">·</span>
          <div className="flex items-center gap-1">
            {sections.map((s) => {
              const isActive =
                s.href === "/playbook"
                  ? pathname === "/playbook"
                  : pathname === s.href || pathname.startsWith(s.href + "/");
              const className = `whitespace-nowrap rounded-full px-3 py-1.5 text-xs transition ${
                isActive
                  ? "bg-white/[0.08] text-neutral-50"
                  : "text-neutral-400 hover:bg-white/[0.04] hover:text-neutral-100"
              }`;
              const labelNode = (
                <>
                  {s.label}
                  {s.locked && (
                    <span
                      aria-label="Password required"
                      className="ml-1.5 inline-block translate-y-[-1px] text-[10px] opacity-70"
                    >
                      🔒
                    </span>
                  )}
                </>
              );
              // External (static HTML) entries use a regular anchor so we leave
              // the Next.js app rather than 404 on a non-route.
              if (s.external) {
                return (
                  <a key={s.href} href={s.href} className={className}>
                    {labelNode}
                  </a>
                );
              }
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  aria-current={isActive ? "page" : undefined}
                  className={className}
                >
                  {labelNode}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
