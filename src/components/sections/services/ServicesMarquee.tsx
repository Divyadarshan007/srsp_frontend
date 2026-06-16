const words = [
  { text: "BUSINESS", outlined: false },
  { text: "FINANCE", outlined: true },
  { text: "ACCOUNTING", outlined: false },
  { text: "BUSINESS", outlined: true },
  { text: "FINANCE", outlined: false },
  { text: "ACCOUNTING", outlined: true },
];

// Duplicate so the second copy starts exactly where the first ends — seamless loop
const track = [...words, ...words];

export default function ServicesMarquee() {
  return (
    <div className="overflow-hidden py-6 bg-white border-y border-gray-100 select-none">
      <div className="animate-marquee flex gap-10 whitespace-nowrap will-change-transform">
        {track.map((w, i) => (
          <span
            key={i}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider uppercase shrink-0"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: w.outlined ? "transparent" : "#C7F4AA",
              WebkitTextStroke: w.outlined ? "2px #C7F4AA" : undefined,
            }}
          >
            {w.text}
          </span>
        ))}
      </div>
    </div>
  );
}
