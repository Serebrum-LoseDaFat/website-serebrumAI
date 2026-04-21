import type { Metadata } from "next";
import VenturePage from "@/components/VenturePage";

export const metadata: Metadata = {
  title: "TokenSource — Intelligence-driven software lifecycle",
  description:
    "TokenSource replaces fragmented product management with an AI-native execution system — from user need to shipped product.",
  alternates: { canonical: "/ventures/tokensource" },
  openGraph: {
    title: "TokenSource — Intelligence-driven software lifecycle",
    description:
      "AI-native execution system that takes product teams from idea to delivery.",
    url: "/ventures/tokensource",
  },
};

export default function Page() {
  return (
    <VenturePage
      accent="cyan"
      logoSrc="/ventures/tokensource.svg"
      category="Software Lifecycle"
      name="TokenSource"
      tagline="The execution layer for AI-native product teams."
      summary="AI now writes much of the code, but the layer above it — product management, prioritization, alignment, and delivery — remains manual and fragmented. TokenSource is the intelligence layer that runs the software development lifecycle end-to-end, from real user signal to shipped outcome."
      problem="Product teams juggle disconnected tools for research, roadmaps, tickets, specs, and reviews. Context is fragmented across Slack, Jira, Notion, and calls. Decisions drift, priorities shift weekly, and 60–70% of features ship without moving the metrics they were meant to move. The coordination tax on human teams is enormous."
      solution="TokenSource is a unified execution system. It ingests real user signal, translates it into structured work, aligns stakeholders on what to build and why, and adapts plans as reality changes. The lifecycle becomes continuous and intelligence-driven rather than a series of manual handoffs between tools."
      buyer="Product, engineering, and design leadership at software companies — paid for faster time-to-market and higher product success rates. Pricing aligns with shipped outcomes, not seats."
      impact={[
        "30–50% faster delivery from idea to shipped feature",
        "2x stakeholder alignment on priorities and scope",
        "Measurably higher release success rates against product KPIs",
      ]}
      howItWorks={[
        {
          title: "Signal ingestion",
          body: "User interviews, support tickets, analytics, and sales feedback are continuously unified into a live model of what customers actually need.",
        },
        {
          title: "Structured work generation",
          body: "The system translates needs into briefs, specs, and tickets with the context each role requires — PM, design, engineering, QA.",
        },
        {
          title: "Continuous alignment",
          body: "Decisions, tradeoffs, and scope changes propagate across stakeholders automatically, replacing meetings with persistent shared context.",
        },
        {
          title: "Adaptive execution",
          body: "Plans update as reality shifts — new signal, shipped experiments, changed priorities — so teams spend time on work that still matters.",
        },
      ]}
    />
  );
}
