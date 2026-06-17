import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactBanner() {
  return (
    <section className="relative h-72 md:h-96 flex flex-col justify-center items-center overflow-hidden bg-heading">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-heading/80" />

      <div className="relative z-10 text-center px-4">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Contact Us
        </h1>
        <nav
          className="flex items-center justify-center gap-1.5 text-white/60 text-sm"
          style={{ fontFamily: "var(--font-dm)" }}
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary-light transition-colors duration-200">
            Home
          </Link>
          <ChevronRight size={14} className="opacity-60" />
          <span className="text-white">Contact Us</span>
        </nav>
      </div>
    </section>
  );
}
