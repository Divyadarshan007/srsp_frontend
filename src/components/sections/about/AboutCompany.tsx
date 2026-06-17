import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";

const chatBubbles = [
  { text: "What steps are required to get you to the goals?", offset: false },
  { text: "The best way is to develop and follow a plan.", offset: true },
];

export default function AboutCompany() {
  return (
    <section className="py-24 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image with chat bubble overlays */}
          <div className="relative">
            {/* Decorative dashed circle */}
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

            {/* Main image */}
            <div className="rounded-3xl overflow-hidden h-[500px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                alt="Professional financial advisor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chat bubble overlays */}
            <div className="absolute bottom-10 left-4 right-4 flex flex-col gap-3">
              {chatBubbles.map((bubble, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg max-w-[260px] ${bubble.offset ? "self-end" : "self-start"}`}
                >
                  <div className="w-7 h-7 rounded-full bg-primary-light shrink-0 mt-0.5 flex items-center justify-center">
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                      <path
                        d="M2 4a1 1 0 011-1h10a1 1 0 011 1v6a1 1 0 01-1 1H9l-3 2v-2H3a1 1 0 01-1-1V4z"
                        fill="#1F6F5B"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-heading text-xs font-medium leading-snug"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {bubble.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-7">
            <SectionLabel text="About The Company" />

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Accounting solutions to empower your business growth.
            </h2>

            {/* Stats row */}
            <div className="flex items-center gap-8">
              <div>
                <p
                  className="text-4xl font-extrabold text-heading"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  30+
                </p>
                <p
                  className="text-body text-sm mt-1"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Years of Experience
                </p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p
                  className="text-4xl font-extrabold text-heading"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  6k
                </p>
                <p
                  className="text-body text-sm mt-1"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Expert Consultants
                </p>
              </div>
            </div>

            <p
              className="text-body leading-relaxed"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Empowering businesses with expert knowledge, strategic insights,
              and practical solutions to improve performance, overcome
              challenges, and achieve sustainable growth and long-term success.
            </p>

            {/* Read More CTA */}
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
      </div>
    </section>
  );
}
