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
  {
    name: "CA Priya R. Mehta",
    role: "B.Com. | ACA | DISA",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
    <div className="relative rounded-2xl" style={{ flex: "0 0 calc(33.333% - 16px)" }}>
      <div className="relative rounded-2xl overflow-hidden h-96 sm:h-105">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

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

      {/* Share button + popup — flex-col-reverse keeps button & popup in ONE continuous hover zone */}
      <div className="absolute bottom-5 right-5 z-20 group/share flex flex-col-reverse items-end">
        <button
          className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shadow-lg group-hover/share:bg-primary transition-colors duration-200"
          aria-label="Share"
        >
          <Share2 size={16} className="text-heading group-hover/share:text-white transition-colors duration-200" />
        </button>

        <div
          className="mb-2 overflow-hidden max-h-0 opacity-0 group-hover/share:max-h-36 group-hover/share:opacity-100"
          style={{ transition: "max-height 400ms cubic-bezier(0.16,1,0.3,1), opacity 250ms ease-out" }}
        >
          <div className="flex flex-col items-end gap-2 pb-1">
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

        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <SectionLabel text="Team Members" />
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Introducing our team of skilled financial advisors
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

        <div className="relative">
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

          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary border border-primary shadow-md flex items-center justify-center text-white hover:bg-[#174f41] transition-all duration-200 z-10"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary border border-primary shadow-md flex items-center justify-center text-white hover:bg-[#174f41] transition-all duration-200 z-10"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {maxIndex > 0 && (
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
        )}
      </div>
    </section>
  );
}
