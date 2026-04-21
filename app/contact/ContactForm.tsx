"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const interests = [
  { value: "partnership", label: "Partnership" },
  { value: "pilot", label: "Pilot customer" },
  { value: "investor", label: "Investor / strategic" },
  { value: "vygor", label: "Vygor AI" },
  { value: "tokensource", label: "TokenSource" },
  { value: "alphasigma", label: "AlphaSigma" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const params = useSearchParams();
  const preselected = params.get("venture") || "";

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const { error: apiError } = await res
          .json()
          .catch(() => ({ error: null }));
        throw new Error(apiError || "Failed to send");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again in a moment."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-white/[0.08] bg-[#0a0a0d] p-10">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Received
        </div>
        <h3 className="mt-4 font-serif text-3xl italic text-neutral-100">
          Thanks — we&rsquo;ll be in touch.
        </h3>
        <p className="mt-4 text-sm leading-6 text-neutral-400">
          Your message has been received. A member of the SerebrumAI team will
          reach out within two business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/[0.08] bg-[#0a0a0d] p-8 md:p-10"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        / Send us a note
      </div>

      <div className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
        </div>
        <Field label="Organization" name="organization" />

        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            Interested in
          </label>
          <select
            name="interest"
            defaultValue={preselected}
            className="mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-neutral-100 transition focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
          >
            <option value="" className="bg-[#0a0a0d]">
              Select one
            </option>
            {interests.map((i) => (
              <option key={i.value} value={i.value} className="bg-[#0a0a0d]">
                {i.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-2 block w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 transition focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
            placeholder="Tell us about your organization and what you're exploring."
          />
        </div>

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <div className="flex items-center justify-end border-t border-white/[0.06] pt-6">
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send message"}
            <span className="transition group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 transition focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
      />
    </div>
  );
}
