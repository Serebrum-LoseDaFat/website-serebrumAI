import type { Metadata } from "next";
import VenturePage from "@/components/VenturePage";

export const metadata: Metadata = {
  title: "AlphaSigma — Decision intelligence for investment management",
  description:
    "AlphaSigma turns fragmented portfolio data into continuous, model-driven decisions for RIAs and family offices. Better risk-adjusted returns, systematic execution.",
  alternates: { canonical: "/ventures/alphasigma" },
  openGraph: {
    title: "AlphaSigma — Decision intelligence for investment management",
    description:
      "Continuous, model-driven decision support for RIAs and family offices.",
    url: "/ventures/alphasigma",
  },
};

export default function Page() {
  return (
    <VenturePage
      accent="violet"
      logoSrc="/ventures/alphasigma.svg"
      category="Investment Management"
      name="AlphaSigma"
      tagline="From reporting dashboards to a decision engine."
      summary="Investment management today aggregates data and reports on it. AlphaSigma goes further: it recommends buys and sells, evaluates portfolios holistically, proposes rebalancing, and actively monitors risk — grounded in proven quantitative frameworks and continuously refreshed."
      problem="RIAs and family offices operate reactively. Information arrives fragmented across custodians, research providers, and spreadsheets. Portfolio decisions are episodic, risk monitoring is manual, and most 'tech' in the stack is a reporting dashboard rather than a decision tool. High-stakes judgments get made without continuous intelligence support."
      solution="AlphaSigma consolidates positions, market data, and risk models into one decision system. It issues clear buy and sell signals, recommends dynamic rebalancing tied to client mandates, and flags risk concentrations before they become losses. Human advisors retain authority; the system removes the operational burden and sharpens the judgment."
      buyer="Registered investment advisors (RIAs), family offices, and wealth platforms — paid for improved risk-adjusted returns and the quality of decisions made on their behalf."
      impact={[
        "Improved Sharpe ratio across monitored portfolios",
        "Reduced maximum drawdowns through earlier risk signals",
        "Systematic rebalancing that eliminates decision drift and oversight gaps",
      ]}
      howItWorks={[
        {
          title: "Unified portfolio state",
          body: "Positions, transactions, and client mandates across custodians are consolidated into a single, continuously updated portfolio view.",
        },
        {
          title: "Signal generation",
          body: "Quantitative models produce buy, sell, and hold signals at the security and portfolio level, with transparent reasoning.",
        },
        {
          title: "Dynamic rebalancing",
          body: "The system recommends rebalancing actions calibrated to each client's mandate, tax situation, and risk profile.",
        },
        {
          title: "Active risk management",
          body: "Concentration, factor, and drawdown risks are monitored continuously, with alerts surfaced to advisors before they become material.",
        },
      ]}
    />
  );
}
