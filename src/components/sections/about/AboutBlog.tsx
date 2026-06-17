import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { blogPosts, type BlogPost } from "@/lib/blog";

const posts = blogPosts.slice(2, 5);

export default function AboutBlog() {
  return (
    <section className="py-24 bg-[#F8FFFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <SectionLabel text="Blog & News" />
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Latest articles and updates on financial management
            </h2>
          </div>
          <p
            className="text-body leading-relaxed lg:pt-10"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Explore expert insights, practical financial tips, and industry
            updates designed to keep you informed, empowered, and confident in
            making smarter financial decisions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ category, title, excerpt, date, readTime, image }: BlogPost) {
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
          <span className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-dm)" }}>
            <Calendar size={12} className="text-primary" />
            {date}
          </span>
          <span className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-dm)" }}>
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
