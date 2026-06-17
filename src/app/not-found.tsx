import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        {/* Banner */}
        <section className="relative h-72 md:h-96 flex flex-col justify-center items-center overflow-hidden bg-heading">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-heading/80" />
          <div className="relative z-10 text-center px-4">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              404 Not Found
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
              <span className="text-white">404 Not Found</span>
            </nav>
          </div>
        </section>

        {/* 404 Content */}
        <section className="py-24 px-4 flex flex-col items-center text-center bg-white overflow-hidden">
          {/* Large 404 with decorations */}
          <div className="relative mb-10 select-none">
            {/* Floating question mark badge */}
            <div
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-heading/20 bg-white shadow-md flex items-center justify-center z-10"
              aria-hidden="true"
            >
              <span
                className="text-primary font-bold text-xl"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                ?
              </span>
            </div>

            {/* Decorative leaf dots */}
            <span className="absolute top-4 left-2 w-2 h-2 rounded-full bg-primary/30" aria-hidden="true" />
            <span className="absolute top-0 left-12 w-1.5 h-1.5 rounded-full bg-primary/20" aria-hidden="true" />
            <span className="absolute bottom-6 left-0 w-2.5 h-2.5 rounded-full bg-primary/25" aria-hidden="true" />
            <span className="absolute top-8 right-4 w-2 h-2 rounded-full bg-primary/20" aria-hidden="true" />
            <span className="absolute bottom-2 right-8 w-1.5 h-1.5 rounded-full bg-primary/30" aria-hidden="true" />
            <span className="absolute -bottom-2 left-1/3 w-2 h-2 rounded-full bg-primary/20" aria-hidden="true" />

            {/* SVG leaf decorations */}
            <svg
              className="absolute -left-6 top-1/2 -translate-y-1/2 text-primary/30"
              width="24"
              height="32"
              viewBox="0 0 24 32"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C6 8 2 16 12 32C22 16 18 8 12 0Z" />
            </svg>
            <svg
              className="absolute -right-6 top-1/3 text-primary/20"
              width="18"
              height="24"
              viewBox="0 0 24 32"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C6 8 2 16 12 32C22 16 18 8 12 0Z" />
            </svg>
            <svg
              className="absolute right-2 bottom-0 text-primary/25 rotate-45"
              width="14"
              height="20"
              viewBox="0 0 24 32"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C6 8 2 16 12 32C22 16 18 8 12 0Z" />
            </svg>

            <p
              className="text-[9rem] sm:text-[12rem] lg:text-[14rem] font-extrabold leading-none tracking-tighter text-heading"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              404
            </p>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-extrabold text-heading mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Ooop! Error Page
          </h2>
          <p
            className="text-body max-w-md leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Can&apos;t Find What You Looking For? Take A Moment And Do A Search
            Below Or Start From Our{" "}
            <Link href="/" className="text-primary hover:underline font-medium">
              Home Page
            </Link>
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-heading transition-colors duration-200 text-sm"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-light/20">
              <ArrowUpRight size={14} className="text-primary-light" />
            </span>
            Go To Home
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
