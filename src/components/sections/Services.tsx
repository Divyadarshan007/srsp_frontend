"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ChevronDown, Trophy } from "lucide-react";

const services = [
  {
    title: "Indirect Tax Litigation Services",
    description:
      "Expert representation and strategic advisory for complex tax disputes across multiple regulatory frameworks. We help businesses navigate the intricacies of Indian indirect tax laws while mitigating risks and ensuring compliance.",
    tags: ["GST", "Customs"],
  },
  {
    title: "Auditing & Assurance Services",
    description:
      "Comprehensive audit services ensuring compliance and financial integrity for businesses of all sizes. Our approach combines technical expertise with practical insights.",
    tags: ["Statutory Audits", "Tax Audits", "Bank Audits", "Special Purpose Audits"],
  },
  {
    title: "Income Tax Services",
    description:
      "Expert tax planning, compliance, and advisory services for individuals and corporations. We help optimize tax positions while ensuring full regulatory compliance.",
    tags: ["Tax Planning", "Return Filing", "Assessment Support", "Appeals & Litigation"],
  },
  {
    title: "Company Law Consultancy",
    description:
      "Legal advisory on company formation, compliance, and corporate governance matters. Expert guidance on regulatory requirements.",
    tags: ["Company Incorporation", "Annual Compliance", "Board Matters", "FEMA Compliance"],
  },
  {
    title: "Business & Finance Management",
    description:
      "Strategic financial planning and business advisory to drive sustainable growth. We partner with clients to achieve their business objectives.",
    tags: ["Financial Planning", "Cash Flow Management", "Business Valuation", "Due Diligence"],
  },
  {
    title: "Book Keeping & Accountancy",
    description:
      "Accurate financial record maintenance and accounting services for seamless operations. Professional management of your financial data.",
    tags: ["Account Maintenance", "Financial Statements", "MIS Reports", "Payroll Processing"],
  },
  {
    title: "Internal Audits",
    description:
      "Risk-based internal audit services to strengthen controls and operational efficiency. Independent assessment of organizational processes.",
    tags: ["Risk Assessment", "Control Evaluation", "Process Reviews", "Management Reporting"],
  },
  {
    title: "Start-Up Ventures",
    description:
      "Specialized support for start-ups including registration, funding advisory, and compliance. End-to-end assistance for new ventures.",
    tags: ["Entity Formation", "Funding Support", "Compliance Setup", "Growth Advisory"],
  },
  {
    title: "Mergers & Acquisition Consulting",
    description:
      "Expert advisory for corporate restructuring, mergers, acquisitions, and business combinations.",
    tags: ["Deal Structuring", "Valuation", "Due Diligence", "Post-Merger Integration"],
  },
  {
    title: "Company Secretarial",
    description:
      "Professional company secretarial services ensuring corporate governance and statutory compliance.",
    tags: ["Secretarial Audit", "Board Support", "Regulatory Filings", "Corporate Records"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — accordion */}
          <div>
            <SectionLabel text="What We Offer" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 mb-8 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Strategic financial planning services to help your business
            </h2>

            <div className="space-y-2">
              {services.map((svc, i) => {
                const isOpen = openIndex === i;
                const num = String(i + 1).padStart(2, "0");

                return (
                  <div
                    key={svc.title}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-primary-light bg-[#F8FFFE] shadow-sm"
                        : "border-gray-100 bg-white hover:border-primary-light/50"
                    }`}
                  >
                    {/* Accordion header */}
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left"
                    >
                      <span
                        className={`text-2xl font-extrabold shrink-0 transition-colors duration-300 ${
                          isOpen ? "text-primary" : "text-primary-light"
                        }`}
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {num}
                      </span>

                      <span
                        className={`flex-1 font-semibold text-sm transition-colors duration-300 ${
                          isOpen ? "text-heading" : "text-heading/80"
                        }`}
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {svc.title}
                      </span>

                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Accordion body */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pl-[60px]">
                          <p
                            className="text-body text-sm leading-relaxed mb-4"
                            style={{ fontFamily: "var(--font-dm)" }}
                          >
                            {svc.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {svc.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-primary-light/30 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                                style={{ fontFamily: "var(--font-dm)" }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — sticky image */}
          <div className="hidden lg:block sticky top-28">
            <div className="relative rounded-3xl overflow-hidden h-[600px] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Financial team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-heading/30 to-transparent" />

              {/* Floating award card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <Trophy size={20} className="text-primary" />
                  </div>
                  <div>
                    <p
                      className="text-heading font-bold text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Winning approvals 25+
                    </p>
                    <p
                      className="text-body text-xs"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      International awards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-primary-light/40 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-primary/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
