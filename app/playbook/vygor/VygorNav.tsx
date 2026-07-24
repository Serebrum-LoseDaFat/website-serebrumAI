"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Section = {
  href: string;
  label: string;
  exact?: boolean;
};

const sections: Section[] = [
  { href: "/playbook/vygor", label: "Overview", exact: true },
  { href: "/playbook/vygor/gyms", label: "Gyms" },
];

export default function VygorNav() {
  const pathname = usePathname();

  const isActive = (s: Section) =>
    s.exact ? pathname === s.href : pathname === s.href || pathname.startsWith(s.href + "/");

  return (
    <div className="border-b border-amber-400/[0.10] bg-amber-400/[0.02] backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-2.5 md:px-10">
        <div className="flex items-center gap-3">
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400/80">
            / Vygor
          </span>
          <div className="h-3.5 w-px bg-amber-400/20" />
          <div className="flex items-center gap-1">
            {sections.map((s) => {
              const active = isActive(s);
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs transition ${
                    active
                      ? "bg-amber-400/[0.12] text-amber-200"
                      : "text-neutral-400 hover:bg-amber-400/[0.06] hover:text-amber-300"
                  }`}
                >
                  {s.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
