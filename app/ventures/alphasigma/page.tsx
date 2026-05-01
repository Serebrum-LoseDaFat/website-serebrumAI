import type { Metadata } from "next";
import VenturePage from "@/components/VenturePage";

export const metadata: Metadata = {
  title: "AlphaSigma — AI-native absolute return strategy",
  description:
    "AlphaSigma is a fund management company running an AI-native absolute return strategy. Continuous portfolio management, transparent process, AI-driven decisioning.",
  alternates: { canonical: "/ventures/alphasigma" },
  openGraph: {
    title: "AlphaSigma — AI-native absolute return strategy",
    description:
      "A fund management company running an AI-native absolute return strategy.",
    url: "/ventures/alphasigma",
  },
};

export default function Page() {
  return (
    <VenturePage
      accent="violet"
      logoSrc="/ventures/alphasigma.svg"
      category="Fund Management"
      name="AlphaSigma"
      tagline="An AI-native absolute return strategy."
      summary="AlphaSigma is a fund management company. Its absolute return strategy is operated continuously by an AI engine — sizing positions, managing risk, and rebalancing without the lag of human committees or quarterly reviews."
      problem="Active asset management is built around human portfolio managers, weekly committees, and monthly rebalances — a structure optimized for an era when intelligence was scarce and decisions were necessarily batched. The result is high fees, inconsistent risk-adjusted returns, and strategies that can't keep pace with markets that move continuously."
      solution="AlphaSigma is structured as a fund management company. The absolute return strategy is operated end-to-end by an AI engine that processes market data continuously, sizes positions dynamically, and applies risk management without committee bottlenecks. Human oversight enforces mandate and constraints; the system does the work."
      buyer="Limited partners — family offices, endowments, fund-of-funds, and institutional allocators looking for AI-native exposure with transparent process and competitive risk-adjusted returns."
      impact={[
        "Continuously managed strategy across market regimes — not quarterly rebalancing",
        "Transparent process — every position decision is auditable, not buried in quarterly letters",
        "Lower cost structure than traditional active management with equivalent mandates",
      ]}
      howItWorks={[
        {
          title: "Continuous market analysis",
          body: "The AI engine ingests price action, factor data, and signals across asset classes in real time. There are no scheduled cycles — analysis is continuous and the strategy responds when the data changes, not when the next committee meets.",
        },
        {
          title: "Position sizing & execution",
          body: "Each entry, exit, and rebalance is sized by the engine according to risk targets, conviction, and current exposure. The strategy executes without human-committee delay between signal and action.",
        },
        {
          title: "Active risk management",
          body: "Drawdown, factor, and concentration risks are monitored continuously. The system de-risks before losses compound — not after a monthly review meeting.",
        },
        {
          title: "Transparent reporting",
          body: "LPs see strategy logic and exposure in real time. Process visibility replaces quarterly letters, and every position is auditable against the mandate.",
        },
      ]}
    />
  );
}
