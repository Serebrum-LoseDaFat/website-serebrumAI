import type { Metadata } from "next";
import VenturePage from "@/components/VenturePage";

export const metadata: Metadata = {
  title: "Vygor AI — AI-native health & wellness",
  description:
    "Vygor AI is a continuous, intelligence-driven health system for weight management, obesity, and diabetes. Better outcomes, lower cost of care.",
  alternates: { canonical: "/ventures/vygor" },
  openGraph: {
    title: "Vygor AI — AI-native health & wellness",
    description:
      "A continuous, intelligence-driven health system for weight management, obesity, and diabetes.",
    url: "/ventures/vygor",
  },
};

export default function Page() {
  return (
    <VenturePage
      accent="emerald"
      logoSrc="/ventures/vygor.svg"
      logoLight
      category="Health & Wellness"
      name="Vygor AI"
      tagline="Continuous intelligence for weight, obesity, and diabetes care."
      summary="Vygor AI replaces the fragmented wellness model with a system that is always on: real-time data from wearables, hyper-personalized nutrition and exercise plans, and AI-driven coaching that adapts as users live their lives. Embedded intelligence drives better outcomes and structurally lower healthcare costs."
      problem="The system for weight management, obesity, and diabetes is fundamentally broken. Users rely on generic plans, infrequent human coaching, and disconnected apps. Engagement collapses within weeks, clinical outcomes are inconsistent, and health plans and employers pay for programs that rarely deliver measurable results."
      solution="Vygor is built intelligence-first. Wearable and self-reported data feed a continuous decision engine that generates personalized nutrition, activity, and recovery plans — and adjusts them in real time. An AI coach sustains engagement between human touchpoints, surfacing interventions at the moments that matter. Clinicians oversee, not execute."
      buyer="Health plans and self-insured employers, paid for improved outcomes and reduced cost of care. Individual consumers benefit directly but are not the primary economic buyer."
      impact={[
        "20–40% reduction in program costs versus legacy wellness vendors",
        "2–3x higher sustained engagement vs. app-only models",
        "Measurable clinical improvements (A1C, weight, activity) tied to reimbursement",
      ]}
      howItWorks={[
        {
          title: "Continuous data ingestion",
          body: "Real-time signals from wearables, glucose monitors, and self-reported behavior flow into a unified health model for each user.",
        },
        {
          title: "Personalized planning engine",
          body: "AI generates nutrition, exercise, and recovery plans calibrated to the individual's physiology, preferences, and goals — and revises them as data comes in.",
        },
        {
          title: "AI-driven coaching",
          body: "A 24/7 coaching layer nudges, adapts, and intervenes at the right moments, replacing sporadic human check-ins with continuous support.",
        },
        {
          title: "Clinician oversight",
          body: "Licensed providers supervise cohorts and intervene on high-risk cases, with the system doing the execution work at scale.",
        },
      ]}
    />
  );
}
