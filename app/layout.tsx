import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://serebrum.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SerebrumAI — We don't invest in industries. We rebuild them.",
    template: "%s · SerebrumAI",
  },
  description:
    "SerebrumAI is a venture studio building AI-native, global-scale companies that replace legacy operating models with intelligent ones.",
  keywords: [
    "SerebrumAI",
    "AI venture studio",
    "AI-native companies",
    "Vygor AI",
    "TokenSource",
    "AlphaSigma",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SerebrumAI",
    title: "SerebrumAI — We don't invest in industries. We rebuild them.",
    description:
      "A venture studio building AI-native companies that replace legacy operating models with intelligent ones.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SerebrumAI",
    description:
      "A venture studio building AI-native companies that replace legacy operating models with intelligent ones.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SerebrumAI",
  alternateName: "Serebrum",
  url: siteUrl,
  description:
    "A venture studio building AI-native, global-scale companies that replace legacy operating models with intelligent ones.",
  slogan: "We don't invest in industries. We rebuild them.",
  subOrganization: [
    {
      "@type": "Organization",
      name: "Vygor AI",
      url: `${siteUrl}/ventures/vygor`,
      description:
        "Continuous intelligence for weight, obesity, and diabetes care — sold to health plans and employers.",
    },
    {
      "@type": "Organization",
      name: "TokenSource",
      url: `${siteUrl}/ventures/tokensource`,
      description:
        "The execution layer for AI-native product teams — replaces fragmented product management with intelligence-driven lifecycle.",
    },
    {
      "@type": "Organization",
      name: "AlphaSigma",
      url: `${siteUrl}/ventures/alphasigma`,
      description:
        "Decision intelligence for investment management — clear buy/sell signals and systematic rebalancing for RIAs and family offices.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-[#070709] font-sans text-neutral-200 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
