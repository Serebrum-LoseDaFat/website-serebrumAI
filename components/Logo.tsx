const sizes = {
  sm: { svg: "h-6", text: "text-base" },
  md: { svg: "h-8", text: "text-xl" },
  lg: { svg: "h-10", text: "text-2xl" },
};

export default function Logo({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const s = sizes[size];
  return (
    <span className="inline-flex items-center gap-[0.4em] leading-none text-neutral-50">
      <svg
        viewBox="6 4 30 58"
        xmlns="http://www.w3.org/2000/svg"
        className={`${s.svg} w-auto`}
        aria-hidden="true"
        fill="currentColor"
      >
        {/* stem with descender */}
        <rect x="10" y="6" width="8" height="52" rx="0.5" />
        {/* upper bowl (smaller) */}
        <path
          fillRule="evenodd"
          d="M18 6 A11 11 0 0 1 18 28 Z M18 10 A6 7 0 0 1 18 24 Z"
        />
        {/* lower bowl (larger) */}
        <path
          fillRule="evenodd"
          d="M18 28 A16 11 0 0 1 18 50 Z M18 32 A11 7 0 0 1 18 46 Z"
        />
      </svg>
      <span className={`${s.text} font-medium tracking-tight`}>Serebrum</span>
    </span>
  );
}
