import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Finance Management", href: "/services" },
      { label: "Tax Planning Solutions", href: "/services" },
      { label: "Management Accounting", href: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Top section: columns + firm info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-white font-semibold text-sm mb-5"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Firm registration column */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Firm Details
            </h4>
            <ul className="space-y-3">
              <li
                className="text-white/60 text-sm"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Firm Reg. No.: 153921W
              </li>
              <li
                className="text-white/60 text-sm"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Member — WIRC of ICAI
              </li>
              <li
                className="text-white/60 text-sm"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Surat Branch
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <p
            className="text-white/40 text-xs leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Content on this site is for informational purposes only and does not constitute professional advice.
            An engagement letter is required before any professional services commence.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p
              className="text-white/40 text-xs"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              © 2025 S R S P &amp; Co. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/disclaimer"
                className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
