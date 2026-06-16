import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Information: [
    { label: "About Us", href: "#" },
    { label: "Our Partners", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Privacy Policy", href: "#" },
  ],
  "Useful Links": [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Case Study", href: "#case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "#consultation" },
  ],
  Service: [
    { label: "Finance Management", href: "#services" },
    { label: "Tax Planning", href: "#services" },
    { label: "Credit Counseling", href: "#services" },
    { label: "Management Accounting", href: "#services" },
    { label: "Design Inspiration", href: "#services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-heading text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col leading-tight mb-5">
              <span
                className="text-white font-bold text-xl tracking-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                S R S P &amp; Co
              </span>
              <span
                className="text-primary-light text-xs font-medium tracking-widest uppercase"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Chartered Accountants
              </span>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Accuracy • Integrity • Commitment
            </p>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: `${CONTACT.address.line1}, ${CONTACT.address.line2}` },
                { icon: Phone, text: CONTACT.phone },
                { icon: Mail, text: CONTACT.email },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-primary-light" />
                  </div>
                  <span
                    className="text-white/60 text-sm"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-white font-semibold text-sm mb-5"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-primary-light transition-colors duration-200 flex items-center gap-1.5 group"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-primary-light"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
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
