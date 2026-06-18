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
      { label: "Credit Counseling", href: "/services" },
      { label: "Management Accounting", href: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Footer Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
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
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            © 2025 S R S P &amp; Co. All rights reserved.
          </p>
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Designed with care for financial excellence
          </p>
        </div>

      </div>
    </footer>
  );
}
