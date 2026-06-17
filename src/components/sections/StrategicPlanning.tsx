import { BarChart3, Target, Zap } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "Analyse and Goal",
    desc: "We analyze your financial position and set clear, measurable goals aligned with your business vision.",
  },
  {
    icon: Target,
    title: "Building Strategy",
    desc: "We craft a customized financial strategy designed to maximize growth and minimize risk at every step.",
  },
  {
    icon: Zap,
    title: "Execution",
    desc: "We execute the plan with precision, monitoring progress and adjusting to deliver consistent results.",
  },
];

export default function StrategicPlanning() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text content */}
          <div>
            <SectionLabel text="Our Solution" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Strategic financial planning for long-term success
            </h2>
            <p
              className="text-body leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Create strategies to drive financial growth, maximize returns, and
              build sustainable business models that adapt to evolving markets
              and deliver measurable results over the long term.
            </p>
            <Button variant="primary" size="md">
              Read More
              <ArrowRight size={16} />
            </Button>

            {/* Pagination dots */}
            <div className="flex items-center gap-2 mt-10">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`rounded-full transition-all duration-300 ${
                    i === 0
                      ? "w-8 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-primary-light"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — 3 horizontal cards stacked vertically matching reference */}
          <div className="grid gap-5">
            {cards.map((card, idx) => (
              <PlanCard key={card.title} {...card} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl border  border-primary-light hover:shadow-lg shadow-primary-light/20 transition-all duration-300">
      {/* Step number */}
      <div className="shrink-0 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-primary-light/30 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
          <Icon
            size={22}
            className="text-primary group-hover:text-white transition-colors duration-300"
          />
        </div>
        <span
          className="text-xs font-bold text-primary-light group-hover:text-primary transition-colors"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          0{index + 1}
        </span>
      </div>
      <div>
        <h3
          className="font-bold text-heading text-base mb-2"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {title}
        </h3>
        <p
          className="text-body text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
