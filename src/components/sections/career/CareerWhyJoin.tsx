import { GraduationCap, TrendingUp, Users, HeartHandshake } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const perks = [
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Structured training, mentorship from senior partners, and exposure to real client engagements from day one.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Clear career progression paths with performance-based promotions and increasing responsibility over time.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside a close-knit team that values integrity, ownership, and open communication.",
  },
  {
    icon: HeartHandshake,
    title: "Work-Life Balance",
    description:
      "Predictable working hours and a supportive environment that respects your time outside the office.",
  },
];

export default function CareerWhyJoin() {
  return (
    <section className="pt-12 lg:pt-24 pb-12 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionLabel text="Why Join Us" />
          <div className="grid lg:grid-cols-2 gap-10 mt-6 items-end">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Build your career with a firm that invests in you
            </h2>
            <p
              className="text-body leading-relaxed"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              At S R S P & Co, we believe our people are our greatest asset. We offer
              an environment where talent is nurtured, ideas are valued, and every
              team member has the opportunity to grow professionally.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="group bg-primary-light/20 rounded-2xl border border-primary-light/30 p-6 shadow-sm transition-colors duration-300 hover:bg-[#c7f4aa]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                <perk.icon size={22} className="text-white" />
              </div>
              <h3
                className="font-bold text-heading text-base mb-2 group-hover:text-black transition-colors duration-300"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {perk.title}
              </h3>
              <p
                className="text-body text-sm leading-relaxed group-hover:text-black transition-colors duration-300"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
