"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* CTA Row */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Get the support you need,<br />when you need it
            </h2>
          </div>

          <div className="lg:pt-1">
            <p
              className="text-white text-sm font-medium mb-3"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Sign up for our Newsletter
            </p>
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-5 py-4 rounded-lg bg-white text-heading placeholder-gray-400 text-sm focus:outline-none"
                style={{ fontFamily: "var(--font-dm)" }}
              />
              <button
                type="submit"
                className="absolute right-2 w-9 h-9 rounded-full bg-heading flex items-center justify-center hover:opacity-80 transition-opacity duration-200 shrink-0"
              >
                <ArrowUpRight size={16} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/25 mt-12 mb-12" />

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
