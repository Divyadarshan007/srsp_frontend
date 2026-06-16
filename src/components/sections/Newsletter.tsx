"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="relative py-20 overflow-hidden bg-primary">
      {/* Subtle office background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Get the support you need, when you need it
            </h2>
            <p
              className="text-white/65 mt-4 leading-relaxed"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Subscribe for expert financial tips, market insights, and exclusive
              updates delivered directly to your inbox.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/15 border border-white/30 text-white placeholder-white/70 text-sm focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all duration-200"
                style={{ fontFamily: "var(--font-dm)" }}
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-primary-light text-heading font-semibold px-6 py-3.5 rounded-full hover:bg-white transition-colors duration-200 shrink-0 text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
            <p
              className="text-white/65 text-xs mt-3 pl-1"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
