import { ArrowUpRight, BarChart2, FileText, CreditCard, BookOpen } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: BarChart2,
    title: "Finance Management",
    description:
      "Efficient management of finances through smart budgeting, investment planning, expense tracking, and resource allocation for sustainable growth and long-term stability.",
  },
  {
    icon: FileText,
    title: "Tax Planning Solutions",
    description:
      "Smart tax planning strategies to minimize liabilities, maximize savings, ensure compliance, and optimize financial growth for individuals and businesses effectively.",
  },
  {
    icon: CreditCard,
    title: "Credit Counseling",
    description:
      "Professional support to manage debt, improve credit scores, create repayment plans, and build healthier financial habits for long-term financial stability and growth.",
  },
  {
    icon: BookOpen,
    title: "Accounting Services",
    description:
      "Comprehensive accounting services including bookkeeping, financial reporting, tax preparation, payroll management, and compliance support to ensure accurate records.",
  },
];

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
          {services.map((svc) => (
            <ServiceRow key={svc.title} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex items-center gap-6 py-7 hover:bg-[#F8FFFE] -mx-4 px-4 rounded-2xl transition-colors duration-300 cursor-pointer">
      {/* Icon box */}
      <div className="shrink-0 w-14 h-14 rounded-xl border border-gray-200 group-hover:border-primary-light bg-white flex items-center justify-center transition-all duration-300 shadow-sm">
        <Icon size={24} className="text-primary" />
      </div>

      {/* Title + description */}
      <div className="flex-1 grid sm:grid-cols-[1fr_1.6fr] gap-4 items-center">
        <h3
          className="font-bold text-heading text-lg leading-snug"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {title}
        </h3>
        <p
          className="text-body text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          {description}
        </p>
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
