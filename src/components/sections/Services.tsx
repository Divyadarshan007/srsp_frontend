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

const images = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=70",
];

export default function Services() {
  return (
    <section
      id="services"
      className="services-bg relative overflow-hidden min-h-[90px] flex items-stretch"
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

      </div>

      {/* RIGHT column — content */}
      <div className="flex-1 flex items-start pt-12 pb-8 lg:pt-20 px-6 lg:px-12">
        <div className="w-full">
          <SectionLabel text="Our Services" />

          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-heading mt-4 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Strategic financial planning for long-term success
          </h2>

          <p className="text-body text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm)" }}>
            Professional services covering financial planning, resource
            management, risk assessment, and regulatory compliance
          </p>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="group flex flex-col bg-[#F1F4F1] rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="h-40 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={images[i]}
                      alt={feat.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col px-5 pb-6">
                    <div className="-mt-6 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F4A3C] shadow">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-heading text-lg mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {feat.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed mb-5 line-clamp-2" style={{ fontFamily: "var(--font-dm)" }}>
                      {feat.desc}
                    </p>
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

      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-11 h-11 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm shadow flex items-center justify-center text-heading hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </section>
  );
}
