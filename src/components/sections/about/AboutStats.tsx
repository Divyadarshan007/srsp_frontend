import SectionLabel from "@/components/ui/SectionLabel";
import Marquee from "@/components/ui/Marquee";

const stats = [
  {
    value: "130+",
    label: "Financial advices",
    desc: "Smart money management for your future",
  },
  {
    value: "148+",
    label: "Projection Analysis",
    desc: "Future trends and financial growth insights",
  },
  {
    value: "95%",
    label: "Business planning",
    desc: "Strategic roadmap for business growth success",
  },
];


export default function AboutStats() {
  return (
    <>
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — label + heading + description */}
            <div>
              <SectionLabel text="What We Do" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 mb-5 leading-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Helping companies attempt possibilities
              </h2>
              <p
                className="text-body leading-relaxed"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Supporting companies in exploring new opportunities, overcoming
                business challenges, and transforming ideas into actionable
                strategies that drive innovation, improve performance, and
                create lasting value.
              </p>
            </div>

            {/* Right — 3 stat columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:pt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <p
                    className="text-3xl sm:text-4xl font-extrabold text-heading"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-primary font-semibold text-sm"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-body text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Marquee />
    </>
  );
}
