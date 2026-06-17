import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";

const bullets1 = [
  "What steps are required to get you to the goals?",
  "Make the plan as detailed as possible.",
  "The best way is to develop and follow a plan.",
];

const bullets2 = [
  "Experienced partners with decades of combined expertise.",
  "Trusted by 2,000+ clients across industries.",
  "Committed to integrity, accuracy, and client success.",
];

export default function About() {
  return (
    <section className="py-24 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Row 1 — CA Raj P. Shah: image left, content right */}
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
                alt="CA Raj P. Shah"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute bottom-6 left-4 right-4 flex gap-3">
              <div className="flex-1 bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                <p
                  className="text-lg font-extrabold text-heading leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  CA Raj P. Shah
                </p>
                <p
                  className="text-body text-xs mt-1"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Partner
                </p>
              </div>
              <div className="flex-1 bg-primary-light rounded-2xl px-5 py-4 shadow-lg">
                <p
                  className="text-lg font-extrabold text-heading leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  FCA | CS
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

          {/* Right — content */}
          <div className="flex flex-col justify-between lg:h-120">
            <SectionLabel text="About The Company" />

            <h2
              className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-heading leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Empowering businesses and individuals financially
            </h2>

            <p
              className="text-body leading-relaxed"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              The best way is to develop and follow a plan. Start with your
              goals in mind and then work backwards to develop the plan. What
              steps are required to get you to the goals? Make the plan as
              detailed as possible.
            </p>

            <ul className="space-y-3">
              {bullets1.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight size={13} className="text-white" />
                  </span>
                  <span
                    className="text-body text-sm"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <button
                className="w-13 h-13 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-[#174f41] transition-colors duration-300 cursor-pointer"
                aria-label="Read more"
              >
                <ArrowUpRight size={22} className="text-white" />
              </button>
              <span
                className="text-heading font-semibold text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Read More
              </span>
            </div>
          </div>
        </div>

        {/* Row 2 — CA Savan M. Patel: content left, image right */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — content */}
          <div className="flex flex-col justify-between lg:h-120">
            <h2
              className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-heading leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Experienced partners dedicated to your financial growth
            </h2>

            <p
              className="text-body leading-relaxed"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Our firm is led by qualified Chartered Accountants with deep expertise
              across taxation, audit, financial planning, and compliance — committed
              to delivering accuracy and integrity in every engagement.
            </p>

            <ul className="space-y-3">
              {bullets2.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight size={13} className="text-white" />
                  </span>
                  <span
                    className="text-body text-sm"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <button
                className="w-13 h-13 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-[#174f41] transition-colors duration-300 cursor-pointer"
                aria-label="Read more"
              >
                <ArrowUpRight size={22} className="text-white" />
              </button>
              <span
                className="text-heading font-semibold text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Read More
              </span>
            </div>
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
                alt="CA Savan M. Patel"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute bottom-6 left-4 right-4 flex gap-3">
              <div className="flex-1 bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                <p
                  className="text-lg font-extrabold text-heading leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  CA Savan M. Patel
                </p>
                <p
                  className="text-body text-xs mt-1"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Partner
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
                  B.Com. | Level I | DISA
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
