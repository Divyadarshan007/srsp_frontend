const logos = [
  { name: "Namstaque", symbol: "🌿" },
  { name: "@Vision", symbol: "◎" },
  { name: "Penta", symbol: "⬠" },
  { name: "Product", symbol: "◈" },
  { name: "WwwData", symbol: "⊞" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {/* Left label */}
          <p
            className="text-heading font-semibold text-sm shrink-0 whitespace-nowrap"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Client{" "}
            <span className="text-body font-normal">Industries We Serve</span>
          </p>

          <div className="w-px h-6 bg-gray-200 hidden sm:block shrink-0" />

          {/* Logo names */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-1.5 group cursor-pointer">
                <span className="text-primary text-sm">{logo.symbol}</span>
                <span
                  className="text-body text-sm font-medium group-hover:text-primary transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
