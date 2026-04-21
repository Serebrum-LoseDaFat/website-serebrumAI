import type { Metadata } from "next";
import { XMLParser } from "fast-xml-parser";

export const metadata: Metadata = {
  title: "Writing — essays on AI-native venture building",
  description:
    "Notes from SerebrumAI on AI-native companies, industry transformation, and the venture model.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing · SerebrumAI",
    description:
      "Essays on AI-native venture building, industry transformation, and the Serebrum Venture Creation Model.",
    url: "/writing",
  },
};

const SUBSTACK_URL = "https://serebrumai.substack.com";
const FEED_URL = `${SUBSTACK_URL}/feed`;

type Post = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
};

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "SerebrumAI-Website/1.0" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      parseTagValue: false,
      trimValues: true,
    });
    const parsed = parser.parse(xml);
    const channel = parsed?.rss?.channel;
    if (!channel) return [];
    const rawItems = channel.item;
    if (!rawItems) return [];
    const items = Array.isArray(rawItems) ? rawItems : [rawItems];
    return items.map((item: Record<string, unknown>) => {
      const title = String(item.title ?? "");
      const link = String(item.link ?? "");
      const pubDate = String(item.pubDate ?? "");
      const rawExcerpt = String(
        item.description ?? item["content:encoded"] ?? ""
      );
      return {
        title,
        link,
        pubDate,
        excerpt: stripHtml(rawExcerpt).slice(0, 260),
      };
    });
  } catch (err) {
    console.error("Substack RSS fetch failed:", err);
    return [];
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
            / Writing
          </div>
          <h1 className="mt-4 max-w-3xl text-5xl font-medium tracking-tight text-neutral-50 md:text-7xl">
            Notes from the{" "}
            <span className="font-serif italic text-gradient">studio</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Essays and field notes on AI-native venture building, industry
            transformation, and the Serebrum Venture Creation Model.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-white/[0.08] bg-[#0a0a0d] p-10 text-center">
              <p className="text-neutral-400">
                New essays arrive soon.{" "}
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Subscribe on Substack
                </a>{" "}
                to get them in your inbox.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-white/[0.06]">
              {posts.map((post) => (
                <article
                  key={post.link}
                  className="grid grid-cols-12 gap-6 py-10 first:pt-0 md:gap-10 md:py-12"
                >
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                      {formatDate(post.pubDate)}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-50 transition hover:text-emerald-400"
                      >
                        {post.title}
                      </a>
                    </h2>
                    {post.excerpt && (
                      <p className="mt-4 text-base leading-7 text-neutral-400">
                        {post.excerpt}…
                      </p>
                    )}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 transition hover:text-emerald-400"
                    >
                      Read on Substack
                      <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SUBSCRIBE CTA */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
                / Subscribe
              </div>
              <h2 className="mt-4 font-serif text-3xl italic text-neutral-100 md:text-4xl">
                New essays, in your inbox.
              </h2>
              <p className="mt-4 text-base leading-7 text-neutral-400">
                We write when there&rsquo;s something worth writing. No filler.
              </p>
            </div>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Subscribe on Substack
              <span className="transition group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
