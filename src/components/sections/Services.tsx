"use client";

import Link from "next/link";
import { FileText, TrendingUp, Target, ArrowUp, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    icon: FileText,
    title: "Tax & Litigation",
    desc: "Expert representation for complex indirect tax disputes, GST matters, and customs litigation across regulatory frameworks.",
    tags: ["GST", "Customs", "Litigation"],
  },
  {
    icon: TrendingUp,
    title: "Audit & Assurance",
    desc: "Comprehensive statutory, tax, and internal audit services ensuring compliance and financial integrity for businesses.",
    tags: ["Statutory Audits", "Tax Audits", "Internal Audits"],
  },
  {
    icon: Target,
    title: "Business Advisory",
    desc: "Strategic financial planning, company law consultancy, and business management to drive sustainable growth.",
    tags: ["Financial Planning", "Company Law", "Advisory"],
  },
];

const avatars = [
  "/images/KapilSuare.png",
  "/images/ajay.PNG",
  "/images/nikunj.PNG",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden min-h-[90px] flex items-stretch"
      style={{
        backgroundImage:
          "radial-gradient(at top right, #c7f4aa 0%, #FFFFFF 30%), radial-gradient(at bottom left, #c7f4aa 0%, #FFFFFF 30%)"
      }}
    >
      {/* LEFT column — svg + decorative overlays */}
      <div
        className="relative shrink-0 hidden lg:flex flex-col pointer-events-none select-none"
        style={{
          width: "30vw",
          backgroundImage: "radial-gradient(at bottom left, #c7f4aa 0%, #FFFFFF 30%)",
        }}
      >
        <img
          src="/images/logo-w.svg"
          alt=""
          aria-hidden
          style={{ width: "26vw", opacity: 0.1 }}
          className="h-full object-contain object-left"
        />

        {/* Customer avatar group */}
        <div className="absolute top-10 left-8 z-10 pointer-events-auto">
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden shrink-0${i > 0 ? " -ml-3" : ""}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="-ml-3 w-10 h-10 rounded-full border-2 border-white bg-primary-light flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-primary">+1</span>
            </div>
          </div>
          <p className="mt-2 text-sm font-bold text-heading" style={{ fontFamily: "var(--font-jakarta)" }}>
            We have approx 20k+
          </p>
          <p className="text-xs font-semibold text-primary" style={{ fontFamily: "var(--font-dm)" }}>
            Customers Wordwide
          </p>
        </div>
      </div>

      {/* RIGHT column — content */}
      <div className="flex-1 flex items-start pt-20 pb-8 px-6 lg:px-12">
        <div className="w-full">
          <SectionLabel text="Our Services" />

          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-heading mt-4 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Strategic financial planning for long-term success
          </h2>

          <p className="text-body text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm)" }}>
            Expert strategies to align financial goals, optimize resources, manage risks, and ensure
            sustainable growth for long-term business success and stability
          </p>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="group bg-primary-light/20 rounded-2xl border border-primary-light/30 p-5 shadow-sm transition-colors duration-300 hover:bg-[#c7f4aa]"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-heading text-sm mb-2 group-hover:text-black transition-colors duration-300" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {feat.title}
                  </h3>
                  <p className="text-body text-xs leading-relaxed mb-3 group-hover:text-black transition-colors duration-300" style={{ fontFamily: "var(--font-dm)" }}>
                    {feat.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {feat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white text-primary text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-primary/20"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-[#174f41] transition-colors duration-300 shadow-lg shadow-primary/20"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              View More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination dots — far right edge */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`block rounded-full ${
              i === 1
                ? "w-2.5 h-7 bg-primary"
                : "w-2.5 h-2.5 bg-primary-light"
            }`}
          />
        ))}
      </div>

      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-8 w-11 h-11 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm shadow flex items-center justify-center text-heading hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </section>
  );
}
