"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  ventures,
  ideas,
  timeBuckets,
  sizeBuckets,
  cellMeta,
  accentColors,
  weightToBg,
  weightToBorder,
  convictionLabel,
  convictionDot,
  motionStyle,
  maturityLevels,
  tractionLevels,
  maturityGlyph,
  adjustedPosition,
  type Adjustment,
  type Maturity,
  type Traction,
  type Venture,
  type Idea,
  type Conviction,
  type Motion,
  type SizeBucket,
  type TimeBucket,
  type AdjustedPosition,
} from "./_data";

// ============================================================
// Types & storage
// ============================================================
const STORAGE_KEY = "matrix-adjustments-v1";

const defaultAdj: Adjustment = { maturity: "Idea", traction: 0 };

type ItemBase = {
  name: string;
  size: SizeBucket;
  time: TimeBucket;
  conviction: Conviction;
  motion: Motion;
  kind: "venture" | "idea";
  // Display fields
  accent?: Venture["accent"];
  framing?: string;
  note?: string;
  rationale?: string;
};

type ItemWithSim = ItemBase & {
  original: { size: SizeBucket; time: TimeBucket; conviction: Conviction };
  adjusted: AdjustedPosition;
  moved: boolean;
  adj: Adjustment;
};

// ============================================================
// Component
// ============================================================
export default function MatrixInteractive() {
  const [adjustments, setAdjustments] = useState<Record<string, Adjustment>>({});
  const [hydrated, setHydrated] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setAdjustments(JSON.parse(stored));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(adjustments));
    } catch {
      // ignore
    }
  }, [adjustments, hydrated]);

  const getAdj = useCallback(
    (name: string): Adjustment => adjustments[name] ?? defaultAdj,
    [adjustments]
  );

  const updateAdj = (name: string, adj: Adjustment) => {
    setAdjustments((prev) => ({ ...prev, [name]: adj }));
  };

  const resetAdj = (name: string) => {
    setAdjustments((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const resetAll = () => setAdjustments({});

  // Build all items with simulated positions
  const allItems: ItemWithSim[] = [
    ...ventures.map<ItemBase>((v) => ({
      name: v.name,
      size: v.size,
      time: v.time,
      conviction: v.conviction,
      motion: v.motion,
      kind: "venture" as const,
      accent: v.accent,
      framing: v.framing,
      note: v.note,
    })),
    ...ideas.map<ItemBase>((i) => ({
      name: i.name,
      size: i.size,
      time: i.time,
      conviction: i.conviction,
      motion: i.motion,
      kind: "idea" as const,
      rationale: i.rationale,
    })),
  ].map((item) => {
    const adj = getAdj(item.name);
    const original = { size: item.size, time: item.time, conviction: item.conviction };
    const adjusted = adjustedPosition(original, adj);
    const moved =
      adjusted.size !== original.size ||
      adjusted.time !== original.time ||
      adjusted.conviction !== original.conviction;
    return { ...item, original, adjusted, moved, adj };
  });

  // For each cell, who's there in original vs simulated?
  function cellItems(size: SizeBucket, time: TimeBucket) {
    const sim = allItems.filter(
      (i) => i.adjusted.size === size && i.adjusted.time === time
    );
    // ghosts = items whose ORIGINAL is here but adjusted moved AWAY from here
    const ghosts = allItems.filter(
      (i) =>
        i.original.size === size &&
        i.original.time === time &&
        i.moved &&
        !(i.adjusted.size === size && i.adjusted.time === time)
    );
    return { sim, ghosts };
  }

  // Active count (any adjustment applied from default)
  const activeAdjustmentCount = Object.values(adjustments).filter(
    (a) => !(a.maturity === "Idea" && a.traction === 0)
  ).length;

  const openItemData = openItem ? allItems.find((i) => i.name === openItem) : null;

  return (
    <section className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              / Matrix
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
              Peak ARR × Time to $1M ARR.
            </h2>
            <p className="mt-3 text-neutral-400">
              Click any chip to set its maturity + customer traction. Position
              updates live based on advancement score. Ghost chips show original
              placement when an item has shifted.
            </p>
            {activeAdjustmentCount > 0 && (
              <div className="mt-3 flex items-center gap-3 text-xs">
                <span className="text-emerald-300">
                  {activeAdjustmentCount} item{activeAdjustmentCount > 1 ? "s" : ""} adjusted
                </span>
                <button
                  onClick={resetAll}
                  className="rounded border border-white/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400 transition hover:border-white/30 hover:text-neutral-200"
                >
                  Reset all
                </button>
              </div>
            )}
          </div>

          {/* Legends */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-4 rounded-full border border-white/[0.08] bg-[#0a0a0d] px-4 py-2 text-xs text-neutral-400">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                Conviction
              </span>
              {(["low", "med", "high"] as Conviction[]).map((c) => (
                <span key={c} className="flex items-center gap-1.5">
                  <ConvictionDots level={c} />
                  <span>{c}</span>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#0a0a0d] px-4 py-2 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>venture</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-3 rounded-sm border border-dashed border-white/30" />
                <span className="italic">idea</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-3 rounded-sm border border-dotted border-white/20 opacity-50" />
                <span className="text-neutral-500">ghost</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-amber-300">
                <span>★</span>
                <span>graduated</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/[0.08] bg-[#0a0a0d] px-4 py-2 text-xs text-neutral-400">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                Motion
              </span>
              {(["PLG", "Hybrid", "Enterprise", "Services", "B2C", "Fund"] as Motion[]).map((mn) => {
                const m = motionStyle[mn];
                return (
                  <span
                    key={mn}
                    title={m.tip}
                    className={`inline-flex items-center rounded border px-1 py-px font-mono text-[9px] ${m.bg} ${m.text} ${m.border}`}
                  >
                    {mn}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Matrix grid */}
        <div className="grid grid-cols-[auto_auto_1fr_1fr_1fr] gap-3">
          {/* Y-axis title (rotated), spans the 3 cell rows */}
          <div className="row-span-3 row-start-1 flex items-center justify-center pr-2">
            <div className="rotate-180 font-mono text-base uppercase tracking-[0.25em] text-neutral-500 [writing-mode:vertical-rl]">
              Peak ARR potential →
            </div>
          </div>

          {sizeBuckets.flatMap((size, rowIdx) => {
            const cells: React.ReactNode[] = [
              <div
                key={`y-${size}`}
                className="self-center justify-self-center rotate-180 px-2 font-mono text-base uppercase tracking-[0.12em] text-neutral-400 [writing-mode:vertical-rl]"
                style={{ gridRow: rowIdx + 1, gridColumn: 2 }}
              >
                {size}
              </div>,
            ];

            timeBuckets.forEach((time, colIdx) => {
              const meta = cellMeta[size][time];
              const { sim, ghosts } = cellItems(size, time);

              cells.push(
                <div
                  key={`${size}-${time}`}
                  className={`relative flex min-h-[200px] flex-col rounded-2xl border ${weightToBorder[meta.weight]} ${weightToBg[meta.weight]} p-4 transition`}
                  style={{ gridRow: rowIdx + 1, gridColumn: colIdx + 3 }}
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                    {size} · {time}
                  </div>
                  <div className="mt-1 text-sm font-medium text-neutral-100">
                    {meta.label}
                  </div>
                  <p className="mt-1 text-xs leading-5 text-neutral-400">
                    {meta.blurb}
                  </p>

                  {(sim.length > 0 || ghosts.length > 0) && (
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {sim.map((item) => (
                        <ChipSim
                          key={`sim-${item.name}`}
                          item={item}
                          onClick={() => setOpenItem(item.name)}
                        />
                      ))}
                      {ghosts.map((item) => (
                        <ChipGhost
                          key={`ghost-${item.name}`}
                          item={item}
                          onClick={() => setOpenItem(item.name)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            });

            return cells;
          })}

          {/* X-axis bucket labels */}
          {timeBuckets.map((t, i) => (
            <div
              key={`x-${t}`}
              className="text-center font-mono text-base uppercase tracking-[0.18em] text-neutral-400"
              style={{ gridRow: 4, gridColumn: i + 3 }}
            >
              {t}
            </div>
          ))}

          {/* X-axis title */}
          <div
            className="text-center font-mono text-base uppercase tracking-[0.25em] text-neutral-500"
            style={{ gridRow: 5, gridColumn: "3 / span 3" }}
          >
            Time to $1M ARR
          </div>
        </div>

        {/* Slider popover (modal) */}
        {openItemData && (
          <SliderModal
            item={openItemData}
            onClose={() => setOpenItem(null)}
            onChange={(adj) => updateAdj(openItemData.name, adj)}
            onReset={() => resetAdj(openItemData.name)}
            onPrev={() => {
              const idx = allItems.findIndex((i) => i.name === openItemData.name);
              const prev = allItems[(idx - 1 + allItems.length) % allItems.length];
              setOpenItem(prev.name);
            }}
            onNext={() => {
              const idx = allItems.findIndex((i) => i.name === openItemData.name);
              const next = allItems[(idx + 1) % allItems.length];
              setOpenItem(next.name);
            }}
          />
        )}
      </div>
    </section>
  );
}

// ============================================================
// Chip components
// ============================================================

function firstSentence(text: string): string {
  const m = text.match(/^.+?[.!?](?:\s|$)/);
  const s = m ? m[0].trim() : text.slice(0, 200);
  return s.length > 200 ? s.slice(0, 197).replace(/\s\w*$/, "") + "…" : s;
}

function ChipTooltip({ item }: { item: ItemWithSim }) {
  const desc =
    item.kind === "venture"
      ? item.note
        ? firstSentence(item.note)
        : item.framing ?? ""
      : item.rationale
      ? firstSentence(item.rationale)
      : "";

  if (!desc) return null;

  return (
    <div className="pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-60 rounded-xl border border-white/[0.12] bg-[#0d0d10] p-3 text-left opacity-0 shadow-2xl transition-opacity duration-150 group-hover:opacity-100">
      {item.framing && (
        <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-500">
          {item.framing}
        </div>
      )}
      <p className="text-[11px] leading-[1.6] text-neutral-300">{desc}</p>
    </div>
  );
}

function ChipSim({ item, onClick }: { item: ItemWithSim; onClick: () => void }) {
  const m = motionStyle[item.motion];
  const isGrad = item.adjusted.graduated;

  if (item.kind === "venture" && item.accent) {
    const c = accentColors[item.accent];
    return (
      <div className="group relative">
        <ChipTooltip item={item} />
        <button
          onClick={onClick}
          className={`inline-flex items-center gap-1.5 rounded-full border ${c.border} ${c.bgSoft} px-2 py-0.5 text-[11px] ${c.text} transition hover:brightness-125 ${
            isGrad ? "ring-1 ring-amber-300/60 ring-offset-0" : ""
          }`}
        >
          {isGrad && <span className="text-amber-300">★</span>}
          <MaturityBadge maturity={item.adj.maturity} traction={item.adj.traction} />
          <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
          {item.name}
          <span
            className={`inline-flex items-center rounded border px-1 py-px font-mono text-[9px] not-italic ${m.bg} ${m.text} ${m.border}`}
          >
            {item.motion}
          </span>
          <ConvictionDots level={item.adjusted.conviction} />
        </button>
      </div>
    );
  }

  return (
    <div className="group relative">
      <ChipTooltip item={item} />
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-1.5 rounded-full border border-dashed border-white/20 bg-white/[0.02] px-2 py-0.5 text-[11px] italic text-neutral-400 transition hover:border-white/40 hover:text-neutral-200 ${
          isGrad ? "ring-1 ring-amber-300/60 ring-offset-0" : ""
        }`}
      >
        {isGrad && <span className="not-italic text-amber-300">★</span>}
        <MaturityBadge maturity={item.adj.maturity} traction={item.adj.traction} />
        {item.name}
        <span
          className={`inline-flex items-center rounded border px-1 py-px font-mono text-[9px] not-italic ${m.bg} ${m.text} ${m.border}`}
        >
          {item.motion}
        </span>
        <ConvictionDots level={item.adjusted.conviction} />
      </button>
    </div>
  );
}

function ChipGhost({ item, onClick }: { item: ItemWithSim; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-dotted border-white/15 bg-transparent px-2 py-0.5 text-[10px] text-neutral-600 opacity-60 transition hover:opacity-90"
      title={`Original placement · ${item.name} moved to ${item.adjusted.size} / ${item.adjusted.time}`}
    >
      <span className="text-neutral-700">↘</span>
      <span className="line-through decoration-neutral-700/60">{item.name}</span>
    </button>
  );
}

function MaturityBadge({ maturity, traction }: { maturity: Maturity; traction: Traction }) {
  // Only render if not at default
  if (maturity === "Idea" && traction === 0) return null;
  return (
    <span className="inline-flex items-center gap-0.5 rounded bg-white/[0.06] px-1 py-px font-mono text-[9px] not-italic text-neutral-300">
      {maturityGlyph[maturity]}
      {traction > 0 && <span className="text-neutral-500">·{traction}</span>}
    </span>
  );
}

// ============================================================
// Conviction dots
// ============================================================
function ConvictionDots({ level }: { level: Conviction }) {
  const filled = convictionDot[level];
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i <= filled ? "bg-emerald-400" : "bg-white/15"
          }`}
        />
      ))}
    </span>
  );
}

// ============================================================
// Slider modal
// ============================================================
function SliderModal({
  item,
  onClose,
  onChange,
  onReset,
  onPrev,
  onNext,
}: {
  item: ItemWithSim;
  onClose: () => void;
  onChange: (adj: Adjustment) => void;
  onReset: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  const advancement =
    maturityLevels.indexOf(item.adj.maturity) +
    tractionLevels.indexOf(item.adj.traction);

  let phaseLabel = "Stays at original";
  if (item.adjusted.graduated) phaseLabel = "Graduated → flagship cell";
  else if (advancement >= 4) phaseLabel = "Pulled to <1yr · conviction high";
  else if (advancement >= 2) phaseLabel = "Pulled 1 column earlier";

  const ventureColor =
    item.kind === "venture" && item.accent ? accentColors[item.accent] : null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-[70] w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/[0.12] bg-[#0a0a0d] p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              {item.kind === "venture" ? "Venture" : "Idea"} · adjust position
            </div>
            <div className="mt-1 flex items-center gap-2">
              {ventureColor && (
                <span className={`h-2 w-2 rounded-full ${ventureColor.dot}`} />
              )}
              <h3 className="text-xl font-medium text-neutral-50">{item.name}</h3>
            </div>
            {item.framing && (
              <p className="mt-1 text-xs text-neutral-400">{item.framing}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-white/10 px-2 py-1 text-sm text-neutral-400 transition hover:border-white/30 hover:text-neutral-200"
          >
            ✕
          </button>
        </div>

        {/* Maturity slider */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
              Product maturity
            </label>
            <span className="font-mono text-[10px] text-neutral-500">
              {item.adj.maturity}
            </span>
          </div>
          <div className="mt-2 grid grid-cols-5 gap-1">
            {maturityLevels.map((level) => (
              <button
                key={level}
                onClick={() =>
                  onChange({ maturity: level, traction: item.adj.traction })
                }
                className={`rounded border py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition ${
                  item.adj.maturity === level
                    ? "border-emerald-400/60 bg-emerald-400/15 text-emerald-200"
                    : "border-white/10 bg-white/[0.02] text-neutral-500 hover:border-white/30 hover:text-neutral-300"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Traction slider */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
              Customer traction
            </label>
            <span className="font-mono text-[10px] text-neutral-500">
              {item.adj.traction} {item.adj.traction === 1 ? "customer" : "customers"}
            </span>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-1">
            {tractionLevels.map((level) => (
              <button
                key={level}
                onClick={() =>
                  onChange({ maturity: item.adj.maturity, traction: level })
                }
                className={`rounded border py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition ${
                  item.adj.traction === level
                    ? "border-emerald-400/60 bg-emerald-400/15 text-emerald-200"
                    : "border-white/10 bg-white/[0.02] text-neutral-500 hover:border-white/30 hover:text-neutral-300"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Position shift indicator */}
        <div className="mt-6 rounded-lg border border-white/[0.08] bg-white/[0.02] p-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
            Position
          </div>
          <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                Original
              </div>
              <div className="mt-0.5 text-neutral-400">
                {item.original.size} · {item.original.time}
              </div>
              <div className="text-neutral-500">{item.original.conviction}</div>
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                Simulated
              </div>
              <div
                className={`mt-0.5 ${item.moved ? "text-emerald-200" : "text-neutral-400"}`}
              >
                {item.adjusted.size} · {item.adjusted.time}
              </div>
              <div
                className={`${item.moved ? "text-emerald-300" : "text-neutral-500"}`}
              >
                {item.adjusted.conviction}
                {item.adjusted.graduated && (
                  <span className="ml-1 text-amber-300">★ graduated</span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-3 text-[11px] text-neutral-400">
            <span className="font-mono">advancement {advancement}/7 </span>·{" "}
            {phaseLabel}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            onClick={onReset}
            className="rounded-lg border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400 transition hover:border-white/30 hover:text-neutral-200"
          >
            Reset
          </button>
          <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
            <button
              onClick={onPrev}
              className="rounded border border-white/10 px-2 py-1 hover:border-white/30 hover:text-neutral-200"
              aria-label="Previous"
            >
              ← prev
            </button>
            <button
              onClick={onNext}
              className="rounded border border-white/10 px-2 py-1 hover:border-white/30 hover:text-neutral-200"
              aria-label="Next"
            >
              next →
            </button>
          </div>
        </div>
        <div className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
          Esc to close · ← → to switch
        </div>
      </div>
    </>
  );
}
