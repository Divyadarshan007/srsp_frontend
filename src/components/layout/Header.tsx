"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span
              className="text-heading font-bold text-xl tracking-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              S R S P &amp; Co
            </span>
            <span
              className="text-primary text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Chartered Accountants
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative flex items-center gap-1 px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-primary bg-primary-light/30 font-semibold"
                    : "text-body hover:text-primary hover:bg-primary-light/20"
                }`}
                style={{ fontFamily: "var(--font-dm)" }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-heading hover:bg-primary-light/20 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                isActive(link.href)
                  ? "text-primary bg-primary-light/30 font-semibold"
                  : "text-body hover:text-primary hover:bg-primary-light/20"
              }`}
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 px-4">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <Button variant="primary" size="sm" className="w-full justify-center">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
