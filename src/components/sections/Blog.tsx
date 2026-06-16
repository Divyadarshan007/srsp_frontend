import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    category: "Business Finance",
    title: "How to Make Your Business Financially Transparent",
    excerpt:
      "Financial transparency builds trust with stakeholders and creates a foundation for long-term business success.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    // Accountant reviewing financial books / ledger
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Accounting",
    title: "The Role of Financial Accounting in Business Growth",
    excerpt:
      "Understanding how financial accounting drives strategic decisions and enables sustainable business expansion.",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    // Business growth chart / financial graph
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Tax Planning",
    title: "Tax Planning Strategies for High-Income Earners",
    excerpt:
      "Smart tax optimization strategies to protect wealth and maximize financial outcomes for high earners.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    // Person signing financial document / tax forms
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#F8FFFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <SectionLabel text="From The Blog" />
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 leading-tight max-w-lg"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Latest articles and updates on financial management
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            View All Articles <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  category,
  title,
  excerpt,
  date,
  readTime,
  image,
}: (typeof posts)[0]) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-light hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        <span
          className="absolute top-4 left-4 bg-primary-light text-heading text-xs font-semibold px-3 py-1 rounded-full"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          {category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-body mb-3">
          <span
            className="flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            <Calendar size={12} className="text-primary" />
            {date}
          </span>
          <span
            className="flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            <Clock size={12} className="text-primary" />
            {readTime}
          </span>
        </div>

        <h3
          className="font-bold text-heading text-base mb-2 leading-snug group-hover:text-primary transition-colors duration-200"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {title}
        </h3>
        <p
          className="text-body text-sm leading-relaxed line-clamp-2 mb-4"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span
            className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Read More <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}
