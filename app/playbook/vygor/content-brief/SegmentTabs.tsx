"use client";

import { useState } from "react";

type Segment = {
  id: string;
  icon: string;
  label: string;
  angle: string;
  hooks: string[];
  formats: string[];
  doList: string[];
  dontList: string[];
};

export default function SegmentTabs({ segments }: { segments: Segment[] }) {
  const [active, setActive] = useState(0);
  const seg = segments[active];

  return (
    <div>
      {/* Tab bar */}
      <div className="relative -mx-6 md:-mx-10">
        <div className="flex overflow-x-auto scrollbar-hide px-6 md:px-10 gap-1 pb-px">
          {segments.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={[
                "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition whitespace-nowrap",
                active === i
                  ? "border-amber-400/40 bg-amber-400/[0.1] text-amber-300"
                  : "border-white/[0.07] bg-white/[0.02] text-neutral-500 hover:border-white/[0.14] hover:text-neutral-300",
              ].join(" ")}
            >
              <span className="text-base leading-none">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
        {/* fade edges on mobile */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-px w-12 bg-gradient-to-l from-[#080810] to-transparent md:hidden" />
      </div>

      {/* Tab content */}
      <div key={seg.id} className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-7 md:p-9">
        {/* Header */}
        <div className="flex items-start gap-4">
          <span className="text-3xl">{seg.icon}</span>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-400/70">
              Segment {String(active + 1).padStart(2, "0")} of {segments.length}
            </div>
            <h3 className="mt-1 text-2xl font-medium text-neutral-50">{seg.label}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-400">{seg.angle}</p>
          </div>
        </div>

        <div className="mt-8 h-px bg-white/[0.06]" />

        {/* Three columns */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {/* Hooks */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 mb-4">
              Content hooks
            </div>
            <ul className="space-y-3">
              {seg.hooks.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm leading-6 text-neutral-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/60" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Formats */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 mb-4">
              Content formats
            </div>
            <ul className="space-y-3">
              {seg.formats.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm leading-6 text-neutral-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/60" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Do / Don't */}
          <div className="space-y-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300/70 mb-3">
                ✓ Do
              </div>
              <ul className="space-y-2">
                {seg.doList.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-5 text-neutral-300">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/60" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-rose-300/70 mb-3">
                ✗ Don&rsquo;t
              </div>
              <ul className="space-y-2">
                {seg.dontList.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-5 text-neutral-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Next / prev nav */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          disabled={active === 0}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 transition hover:text-neutral-200 disabled:opacity-25"
        >
          ← Previous
        </button>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
          {active + 1} / {segments.length}
        </span>
        <button
          onClick={() => setActive((a) => Math.min(segments.length - 1, a + 1))}
          disabled={active === segments.length - 1}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 transition hover:text-neutral-200 disabled:opacity-25"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
