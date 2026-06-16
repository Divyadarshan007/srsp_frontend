"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#services" },
  { label: "Services", href: "/services" },
  { label: "Case Study", href: "/#case-studies" },
  { label: "Blog", href: "/#blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
                className="flex items-center gap-1 px-4 py-2 text-base font-medium text-body hover:text-primary rounded-lg hover:bg-primary-light/20 transition-all duration-200"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                {link.label}
                {link.label === "Services" && (
                  <ChevronDown size={14} className="opacity-60" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
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
              className="block px-4 py-3 text-sm font-medium text-body hover:text-primary rounded-lg hover:bg-primary-light/20 transition-all"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 px-4">
            <Button variant="primary" size="sm" className="w-full justify-center">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
