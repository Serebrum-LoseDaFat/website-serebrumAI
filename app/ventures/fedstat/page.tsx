import type { Metadata } from "next";
import VenturePage from "@/components/VenturePage";

export const metadata: Metadata = {
  title: "FedStat — AI-native technology investment management",
  description:
    "FedStat is the AI-native software suite for managing technology investments at large enterprises — budgeting, portfolio management, app rationalization, TBM, capex, and goal tracking.",
  alternates: { canonical: "/ventures/fedstat" },
  openGraph: {
    title: "FedStat — AI-native technology investment management",
    description:
      "Continuous, AI-native decision intelligence for the way large organizations spend on technology.",
    url: "/ventures/fedstat",
  },
};

export default function Page() {
  return (
    <VenturePage
      accent="cyan"
      logoSrc="/ventures/fedstat.svg"
      category="Technology Investment Management"
      name="FedStat"
      tagline="AI-native technology investment management for large enterprises."
      summary="FedStat is a software suite for managing how large organizations invest in technology — budgeting, portfolio management, app rationalization, technology business management (TBM), capex decisions, and goal tracking. It replaces the fragmented spreadsheet-and-committee model with a continuous AI-native decision system."
      problem="Most large organizations manage technology investments in spreadsheets, quarterly reviews, and committee meetings. Information is fragmented across procurement, finance, IT operations, and HR. Application portfolios bloat over time. Spend allocation drifts from strategy. Goal tracking happens after the fact. The result: tens or hundreds of millions in misallocated technology spend per year, with no clear, real-time view of return on technology investment."
      solution="FedStat unifies budgeting, portfolio management, app rationalization, capex decisioning, and goal tracking into a single AI-native system. Live data from procurement, IT operations, and finance feeds a continuous decision layer. The system surfaces rationalization candidates, flags drift from strategy, and produces always-current views of return on technology investment — not quarterly reports."
      buyer="CIOs, CFOs, and IT financial management leaders at Fortune 1000 enterprises and government agencies. Paid for spend optimization, portfolio efficiency, and faster strategic execution."
      impact={[
        "10–25% IT spend optimization through continuous portfolio rationalization",
        "Faster app rationalization cycles — weeks instead of annual reviews",
        "Continuous goal-to-investment alignment across the technology stack",
      ]}
      howItWorks={[
        {
          title: "Unified investment view",
          body: "Procurement, finance, IT operations, and HR data flow into a single ledger of technology investment — every contract, every license, every project, mapped to the strategy it serves.",
        },
        {
          title: "AI-driven decision intelligence",
          body: "Models recommend rationalization candidates, capex priorities, and reallocations based on usage, business outcome, and strategic fit. Decisions are explainable, traceable, and updated in real time.",
        },
        {
          title: "Continuous portfolio management",
          body: "Replaces quarterly portfolio reviews with always-current state. The system flags drift, surfaces emerging risk, and updates plans as inputs change.",
        },
        {
          title: "Goal tracking and ROI",
          body: "Every dollar of technology spend is linked to a measurable business outcome. Leaders see live return-on-technology-investment, not lagging post-mortems.",
        },
      ]}
    />
  );
}
