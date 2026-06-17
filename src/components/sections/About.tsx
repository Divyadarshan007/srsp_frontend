"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export default function About() {
  const [savanExpanded, setSavanExpanded] = useState(false);
  const [rajExpanded, setRajExpanded] = useState(false);

  return (
    <section className="py-24 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Row 1 — CA. Savan M. Patel: image left, content right */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — image with name/qual overlay */}
          <div className="relative">
            <svg
              className="absolute -top-10 -left-10 w-36 h-36 text-primary-light opacity-60 -z-10"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 10 C85 10, 110 35, 110 60 C110 85, 85 110, 60 110 C35 110, 10 85, 10 60 C10 35, 35 10, 60 10 Z"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8 6"
              />
            </svg>

            <div className="rounded-3xl overflow-hidden h-120 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                alt="CA. Savan M. Patel"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute bottom-6 left-4 right-4 flex gap-3">
              <div className="flex-1 bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                <p
                  className="text-lg font-extrabold text-heading leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  CA. Savan M. Patel
                </p>
                <p
                  className="text-body text-xs mt-1"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Founding Partner
                </p>
              </div>
              <div className="flex-1 bg-primary-light rounded-2xl px-5 py-4 shadow-lg">
                <p
                  className="text-lg font-extrabold text-heading leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  FCA | CFA
                </p>
                <p
                  className="text-heading/60 text-xs mt-1"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  B.Com | DISA | Level I
                </p>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <SectionLabel text="About The Company" />

            <h2
              className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-heading leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Founding partner driving financial growth and digital transformation
            </h2>

            <p
              className="text-body leading-relaxed"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              CA. Savan M. Patel is the founding partner of the firm and brings
              extensive experience in the fields of Direct Taxation, Project Finance,
              Government Incentives, and Business Advisory Services. He specialises in
              providing strategic financial solutions to businesses across diverse
              industries, helping them achieve sustainable growth and regulatory
              compliance.
            </p>

            {savanExpanded && (
              <>
                <p
                  className="text-body leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  He actively oversees Income Tax compliance, tax planning, assessments,
                  appeals, and advisory assignments for corporate and non-corporate
                  clients. His expertise in project financing enables businesses to
                  secure funding, prepare detailed project reports, and navigate complex
                  financial requirements with confidence.
                </p>

                <p
                  className="text-body leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Apart from his professional practice, he has played a pivotal role in
                  the firm&apos;s digital transformation initiatives. By leveraging
                  technology and automation, he has successfully implemented various
                  office automation systems, enhancing operational efficiency, data
                  accuracy, and client service delivery.
                </p>
              </>
            )}

            <button
              onClick={() => setSavanExpanded((prev) => !prev)}
              className="flex items-center gap-2 text-primary font-semibold text-sm w-fit hover:text-[#174f41] transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {savanExpanded ? (
                <>
                  Read Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Read More <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Row 2 — CA. CS. Raj Shah: content left, image right */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — content */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <h2
              className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-heading leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Co-founding partner specialising in GST litigation and indirect taxation
            </h2>

            <p
              className="text-body leading-relaxed"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              CA. CS. Raj Shah is the co-founding partner of the firm and possesses
              rich experience in the areas of GST Litigation, Indirect Taxation, Income
              Tax Compliance, and Project Finance. With a strong professional background
              as both a Chartered Accountant and Company Secretary, he provides
              comprehensive solutions to businesses navigating complex regulatory and
              taxation frameworks.
            </p>

            {rajExpanded && (
              <>
                <p
                  className="text-body leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  He primarily oversees GST advisory and litigation matters, representing
                  clients in assessments, audits, investigations, and appellate
                  proceedings. His deep understanding of indirect tax laws enables
                  clients to effectively manage compliance risks and resolve disputes
                  with tax authorities.
                </p>

                <p
                  className="text-body leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  In addition, he supervises Income Tax compliance engagements and
                  project finance assignments, assisting businesses in maintaining
                  robust financial and regulatory frameworks. His practical approach,
                  technical expertise, and commitment to client success make him a
                  trusted advisor to entrepreneurs, SMEs, and corporate organisations
                  alike.
                </p>
              </>
            )}

            <button
              onClick={() => setRajExpanded((prev) => !prev)}
              className="flex items-center gap-2 text-primary font-semibold text-sm w-fit hover:text-[#174f41] transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {rajExpanded ? (
                <>
                  Read Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Read More <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>

          {/* Right — image with name/qual overlay */}
          <div className="relative">
            <svg
              className="absolute -top-10 -right-10 w-36 h-36 text-primary-light opacity-60 -z-10"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 10 C85 10, 110 35, 110 60 C110 85, 85 110, 60 110 C35 110, 10 85, 10 60 C10 35, 35 10, 60 10 Z"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8 6"
              />
            </svg>

            <div className="rounded-3xl overflow-hidden h-120 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
                alt="CA. CS. Raj Shah"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute bottom-6 left-4 right-4 flex gap-3">
              <div className="flex-1 bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                <p
                  className="text-lg font-extrabold text-heading leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  CA. CS. Raj Shah
                </p>
                <p
                  className="text-body text-xs mt-1"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Co-Founding Partner
                </p>
              </div>
              <div className="flex-1 bg-primary-light rounded-2xl px-5 py-4 shadow-lg">
                <p
                  className="text-lg font-extrabold text-heading leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  FCA | ACS
                </p>
                <p
                  className="text-heading/60 text-xs mt-1"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  DISA
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
