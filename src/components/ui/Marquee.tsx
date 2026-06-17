const words = [
  { text: "BUSINESS", outlined: false },
  { text: "FINANCE", outlined: true },
  { text: "ACCOUNTING", outlined: false },
  { text: "BUSINESS", outlined: true },
  { text: "FINANCE", outlined: false },
  { text: "ACCOUNTING", outlined: true },
];

const track = [...words, ...words];

export default function Marquee({ bordered = false }: { bordered?: boolean }) {
  return (
    <div className={`overflow-hidden py-6 bg-white select-none ${bordered ? "border-y border-gray-100" : "border-t border-gray-100"}`}>
      <div className="animate-marquee flex gap-10 whitespace-nowrap will-change-transform">
        {track.map((w, i) => (
          <span
            key={i}
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold italic tracking-wider uppercase shrink-0 ${w.outlined ? "marquee-outlined" : ""}`}
            style={{ fontFamily: "var(--font-jakarta)", color: w.outlined ? undefined : "#C7F4AA" }}
            {...(w.outlined ? { "data-text": w.text } : {})}
          >
            {w.text}
          </span>
        ))}
      </div>
    </div>
  );
}
