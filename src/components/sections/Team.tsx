"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { teamMembers, type TeamMember } from "@/lib/team";

function TeamCard({ name, role, cardQual, image, visibleCount }: TeamMember & { visibleCount: number }) {
  const cardWidth = `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 24 / visibleCount}px)`;
  return (
    <div className="relative rounded-2xl shrink-0" style={{ flex: `0 0 ${cardWidth}`, width: cardWidth }}>
      <div className="relative rounded-2xl overflow-hidden h-96 sm:h-105">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
          style={{ maxWidth: "1122px", maxHeight: "1522px" }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
          <h3
            className="text-white font-bold text-xl leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {name}
          </h3>
          {role && (
            <p
              className="text-white/80 text-sm mt-0.5"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {role}
            </p>
          )}
          {cardQual && (
            <p
              className="text-primary-light text-xs mt-1"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {cardQual}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
      setCurrent(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - visibleCount);
  const loopedMembers = [...teamMembers, ...teamMembers.slice(0, visibleCount)];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => p + 1), 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (current >= teamMembers.length) {
      const t = setTimeout(() => {
        setAnimated(false);
        setCurrent(0);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [current]);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const prev = () => setCurrent((p) => Math.max(0, p - 1));
  const next = () => setCurrent((p) => Math.min(maxIndex, p + 1));

  const activeDot = current % (maxIndex + 1);

  return (
    <section id="team" className="pt-12 pb-12 lg:py-24 bg-white overflow-hidden">
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
              className={`flex gap-6 ${animated ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: `translateX(calc(-${current} * (${100 / visibleCount}% + ${24 / visibleCount}px)))` }}
            >
              {loopedMembers.map((m, i) => (
                <TeamCard key={`${m.name}-${i}`} {...m} visibleCount={visibleCount} />
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
                  i === activeDot ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-primary-light"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
