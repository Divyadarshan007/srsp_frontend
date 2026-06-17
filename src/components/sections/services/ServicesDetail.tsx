import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/services";

export default function ServicesDetail() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top header */}
        <div className="mb-14">
          <SectionLabel text="Our Service" />
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

        {/* Service rows */}
        <div className="divide-y divide-gray-100">
          {services.map((svc, i) => (
            <ServiceRow key={svc.title} num={i + 1} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  num,
  title,
  description,
  tags,
}: {
  num: number;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="group flex items-start gap-6 py-7 hover:bg-[#F8FFFE] -mx-4 px-4 rounded-2xl transition-colors duration-300 cursor-pointer">
      {/* Number badge */}
      <div className="shrink-0 w-14 h-14 rounded-xl border border-gray-200 group-hover:border-primary-light bg-white flex items-center justify-center transition-all duration-300 shadow-sm">
        <span
          className="text-lg font-extrabold text-primary"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {String(num).padStart(2, "0")}
        </span>
      </div>

      {/* Title + description + tags */}
      <div className="flex-1 grid sm:grid-cols-[1fr_1.6fr] gap-4 items-start">
        <h3
          className="font-bold text-heading text-lg leading-snug"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {title}
        </h3>
        <div>
          <p
            className="text-body text-sm leading-relaxed mb-3"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
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

      {/* Arrow button */}
      <div className="shrink-0 w-11 h-11 rounded-full border border-gray-200 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300">
        <ArrowUpRight
          size={18}
          className="text-heading group-hover:text-white transition-colors duration-300"
        />
      </div>
    </div>
  );
}
