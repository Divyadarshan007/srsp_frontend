import {
  Scale,
  ClipboardCheck,
  Receipt,
  Building2,
  TrendingUp,
  BookOpen,
  ScanSearch,
  Rocket,
  Handshake,
  FileSignature,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/services";

const icons = [
  Scale,
  ClipboardCheck,
  Receipt,
  Building2,
  TrendingUp,
  BookOpen,
  ScanSearch,
  Rocket,
  Handshake,
  FileSignature,
];

export default function ServicesDetail() {
  return (
    <section className="py-12 lg:py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top header */}
        <div className="mb-14">
          <SectionLabel text="Our Services" />
          <div className="grid lg:grid-cols-2 gap-10 mt-6 items-end">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Initial financial consultation to assess needs and goals
            </h2>
            <p
              className="text-body leading-relaxed"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Start with an initial financial consultation to understand your needs,
              evaluate current situations, and define clear goals for a structured
              and successful financial plan.
            </p>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = icons[i] ?? Scale;
            return (
              <div
                key={svc.title}
                className="group bg-primary-light/20 rounded-2xl border border-primary-light/30 p-5 shadow-sm transition-colors duration-300 hover:bg-[#c7f4aa] cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <h3
                  className="font-bold text-heading text-base mb-2 group-hover:text-black transition-colors duration-300"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-body text-sm leading-relaxed mb-3 group-hover:text-black transition-colors duration-300"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {svc.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full border border-primary/20"
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
      </div>
    </section>
  );
}
