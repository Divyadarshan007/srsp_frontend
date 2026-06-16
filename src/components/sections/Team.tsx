"use client";

import { useState } from "react";
import { Share2, ChevronLeft, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const members = [
  {
    name: "CA Raj P. Shah",
    role: "FCA | CS | DISA",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "CA Savan M. Patel",
    role: "B.Com. | FCA | CFA (Level I) | DISA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
];

const socials = [
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

function TeamCard({ name, role, image }: (typeof members)[0]) {
  return (
    /* Outer wrapper — no overflow hidden so popup can escape the card */
    <div className="relative rounded-2xl" style={{ flex: "0 0 calc(33.333% - 16px)" }}>

      {/* Image container — overflow hidden only here */}
      <div className="relative rounded-2xl overflow-hidden h-96 sm:h-105">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        {/* Name + role */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
          <h3
            className="text-white font-bold text-xl leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {name}
          </h3>
          <p
            className="text-white/70 text-sm mt-0.5"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            {role}
          </p>
        </div>
      </div>

      {/* Share button + popup — flex-col-reverse keeps button & popup in ONE continuous hover zone (no gap) */}
      <div className="absolute bottom-5 right-5 z-20 group/share flex flex-col-reverse items-end">

        {/* Share trigger button — visually at bottom due to flex-col-reverse */}
        <button
          className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shadow-lg group-hover/share:bg-primary transition-colors duration-200"
          aria-label="Share"
        >
          <Share2 size={16} className="text-heading group-hover/share:text-white transition-colors duration-200" />
        </button>

        {/* Popup — sits directly above the button (flex-col-reverse), no gap */}
        <div
          className="mb-2 overflow-hidden max-h-0 opacity-0 group-hover/share:max-h-43 group-hover/share:opacity-100"
          style={{ transition: "max-height 400ms cubic-bezier(0.16,1,0.3,1), opacity 250ms ease-out" }}
        >
          <div className="flex flex-col items-end gap-2 pb-1">

            {/* Behance — circle, label expands left on hover */}
            <a href="#" aria-label="Behance" className="group/behance flex items-center justify-end">
              <span
                className="inline-block overflow-hidden max-w-0 opacity-0 whitespace-nowrap group-hover/behance:max-w-20 group-hover/behance:opacity-100 group-hover/behance:mr-2 text-xs font-semibold text-heading bg-white px-2.5 py-1 rounded-full shadow-sm"
                style={{ fontFamily: "var(--font-dm)", transition: "max-width 280ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease-out, margin 280ms cubic-bezier(0.4,0,0.2,1)" }}
              >
                Behance
              </span>
              <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-heading group-hover/behance:bg-primary group-hover/behance:text-white transition-colors duration-200 shrink-0">
                <span className="font-black text-sm leading-none" style={{ fontFamily: "var(--font-jakarta)" }}>Bē</span>
              </div>
            </a>

            {/* Social icon circles — label expands left on hover */}
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group/item flex items-center justify-end"
              >
                <span
                  className="inline-block overflow-hidden max-w-0 opacity-0 whitespace-nowrap group-hover/item:max-w-25 group-hover/item:opacity-100 group-hover/item:mr-2 text-xs font-semibold text-heading bg-white px-2.5 py-1 rounded-full shadow-sm"
                  style={{ fontFamily: "var(--font-dm)", transition: "max-width 280ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease-out, margin 280ms cubic-bezier(0.4,0,0.2,1)" }}
                >
                  {label}
                </span>
                <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-heading group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-200 shrink-0">
                  {icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [current, setCurrent] = useState(0);
  const maxIndex = Math.max(0, members.length - 3);

  const prev = () => setCurrent((p) => Math.max(0, p - 1));
  const next = () => setCurrent((p) => Math.min(maxIndex, p + 1));

  return (
    <section id="team" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — 2 column */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <SectionLabel text="Our Partners" />
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The experienced partners behind S R S P &amp; Co.
            </h2>
          </div>
          <p
            className="text-body leading-relaxed lg:pt-10"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Our firm is led by qualified Chartered Accountants with deep expertise
            across taxation, audit, financial planning, and compliance — committed
            to delivering accuracy and integrity in every engagement.
          </p>
        </div>

        {/* Slider — outer div holds arrows (overflow-visible), inner div clips 4th card */}
        <div className="relative">
          {/* Clip div: hides the 4th peeking card without clipping the nav arrows */}
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 transition-transform duration-500 ease-in-out ${members.length < 3 ? "justify-center" : ""}`}
              style={members.length >= 3 ? { transform: `translateX(calc(-${current} * (100% / 3 + 8px)))` } : undefined}
            >
              {members.map((m) => (
                <TeamCard key={m.name} {...m} />
              ))}
            </div>
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary border border-primary shadow-md flex items-center justify-center text-white hover:bg-[#174f41] transition-all duration-200 z-10"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary border border-primary shadow-md flex items-center justify-center text-white hover:bg-[#174f41] transition-all duration-200 z-10"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-primary-light"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
