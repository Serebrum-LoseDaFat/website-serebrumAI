import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "SerebrumAI — We don't invest in industries. We rebuild them.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#070709",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(52,211,153,0.15), rgba(52,211,153,0) 70%)",
          position: "relative",
          fontFamily:
            '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)",
          }}
        />

        {/* Top row: logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            position: "relative",
          }}
        >
          {/* β icon */}
          <svg
            width="36"
            height="56"
            viewBox="6 4 30 58"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="6" width="8" height="52" rx="0.5" fill="#fafafa" />
            <path
              fillRule="evenodd"
              fill="#fafafa"
              d="M18 6 A11 11 0 0 1 18 28 Z M18 10 A6 7 0 0 1 18 24 Z"
            />
            <path
              fillRule="evenodd"
              fill="#fafafa"
              d="M18 28 A16 11 0 0 1 18 50 Z M18 32 A11 7 0 0 1 18 46 Z"
            />
          </svg>
          <span
            style={{
              fontSize: "34px",
              fontWeight: 500,
              color: "#fafafa",
              letterSpacing: "-0.5px",
            }}
          >
            Serebrum
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "84px",
              fontWeight: 500,
              color: "#fafafa",
              letterSpacing: "-2px",
              lineHeight: 1.05,
            }}
          >
            We don&rsquo;t invest in industries.
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 400,
              color: "#6ee7b7",
              fontStyle: "italic",
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
              fontFamily: '"Georgia", "Times New Roman", serif',
            }}
          >
            We rebuild them.
          </div>
        </div>

        {/* Bottom row: AI-native pill + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(110,231,183,0.3)",
              background: "rgba(110,231,183,0.08)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background: "#6ee7b7",
              }}
            />
            <span
              style={{
                fontSize: "18px",
                letterSpacing: "4px",
                color: "#6ee7b7",
                fontFamily:
                  '"JetBrains Mono", ui-monospace, "SFMono-Regular", monospace',
                textTransform: "uppercase",
              }}
            >
              AI-native venture studio
            </span>
          </div>
          <span
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "4px",
              fontFamily:
                '"JetBrains Mono", ui-monospace, "SFMono-Regular", monospace',
              textTransform: "uppercase",
            }}
          >
            serebrum.ai
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
