import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    category: "Business Strategy",
    title: "Competing in a Highly Organized Environment",
    // Modern office with people collaborating
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    bg: "bg-slate-800",
  },
  {
    category: "Property Law",
    title: "Promoting Innovation through Property Rights",
    // Modern commercial real estate / building
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    bg: "bg-teal-900",
  },
  {
    category: "Financial Advisory",
    title: "Responding Positively to a Changing Situation",
    // Person reviewing financial charts on laptop
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80",
    bg: "bg-emerald-900",
  },
  {
    category: "Case Study",
    title: "Financial Breakthroughs: Lessons from Real Cases",
    // Financial data / stock market screens
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    bg: "bg-green-900",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <SectionLabel text="Case Studies" />
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 leading-tight max-w-xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Real-world success stories from our clients
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            View All Cases <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  category,
  title,
  image,
  bg,
}: {
  category: string;
  title: string;
  image: string;
  bg: string;
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-72">
      <div className={`absolute inset-0 ${bg}`} />
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span
            className="bg-primary-light/90 text-heading text-xs font-semibold px-3 py-1 rounded-full"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            {category}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>

        <h3
          className="text-white font-bold text-sm leading-snug"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
