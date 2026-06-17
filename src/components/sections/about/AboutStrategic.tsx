import SectionLabel from "@/components/ui/SectionLabel";
import { BarChart3, Play, ArrowRight } from "lucide-react";

function MiniChart() {
  const pts = [[0,72],[25,55],[50,62],[75,40],[100,50],[125,28],[150,38],[175,18],[200,28]];
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]},${p[1]}`).join(" ");
  const area = `${line} L 200,90 L 0,90 Z`;

  return (
    <svg viewBox="0 0 200 90" className="w-full h-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F6F5B" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1F6F5B" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaGrad)" />
      <path d={line} fill="none" stroke="#1F6F5B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dots at key points */}
      {pts.filter((_, i) => i % 2 === 0).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#1F6F5B" />
      ))}
    </svg>
  );
}

export default function AboutStrategic() {
  return (
    <section className="py-24 bg-[#F8FFFE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text + Finance Management card */}
          <div>
            <SectionLabel text="We're Good At" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 mb-5 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Strategic financial planning and budgeting guidance
            </h2>
            <p
              className="text-body leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Expert guidance on financial planning and budgeting to optimize
              resources, control expenses, and achieve stable, long-term
              business growth.
            </p>

            {/* Finance Management card */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-light/30 flex items-center justify-center">
                  <BarChart3 size={20} className="text-primary" />
                </div>
                <span
                  className="text-heading font-bold text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Finance Management
                </span>
              </div>
              <p
                className="text-body text-xs leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Start with your goals in mind and then work backwards to develop
                the plan. What steps are required to get you to the goals? Make
                the plan as detailed as possible.
              </p>
              <div className="bg-[#F8FFFE] rounded-xl p-3 border border-primary-light/20">
                <MiniChart />
              </div>
            </div>
          </div>

          {/* Right — image + stat cards (2-col inner grid) */}
          <div className="grid grid-cols-2 gap-4">

            {/* Left inner: image with play button */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=600&q=80"
                alt="Financial advisor presenting"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/25" />
              {/* Play button */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <button
                  className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:bg-white transition-colors duration-200"
                  aria-label="Watch video"
                >
                  <Play size={17} className="text-primary ml-0.5" fill="#1F6F5B" />
                </button>
                <span
                  className="text-white text-xs font-medium tracking-wide"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Watch Video
                </span>
              </div>
            </div>

            {/* Right inner: 6k+ card + Scalable Solutions card */}
            <div className="flex flex-col gap-4">
              {/* 6k+ green card */}
              <div className="bg-primary rounded-2xl p-5 flex flex-col gap-2">
                <p
                  className="text-4xl font-extrabold text-white"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  6k+
                </p>
                <p
                  className="text-white/75 text-sm leading-snug"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Unlock Your Business Potential with Financial Solutions
                </p>
              </div>

              {/* Scalable Solutions card */}
              <div className="bg-primary-light rounded-2xl p-5 flex flex-col gap-3 flex-1">
                <h4
                  className="text-heading font-bold text-sm leading-snug"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Scalable Solutions for Growing Businesses
                </h4>
                <p
                  className="text-heading/70 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Start with your goals in mind and then work backwards to
                  develop the plan. What steps are required to get you to
                  the goals?
                </p>
                <button
                  className="flex items-center gap-2 bg-primary text-white text-xs font-semibold px-4 py-2.5 rounded-xl w-fit hover:bg-[#174f41] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Learn More <ArrowRight size={13} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
