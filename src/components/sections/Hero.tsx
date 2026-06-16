import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-heading"
    >
      {/* Real background — blurred financial office scene */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-heading/96 via-heading/85 to-heading/50" />

      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-primary-light/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Smart Accounting{" "}
              <span className="text-primary-light">and Finance</span> Solutions
              for Businesses
            </h1>

            <p
              className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Professional accounting and financial planning services, designed
              to help your business thrive with clarity and long-term strategy.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="light" size="lg">
                Discover More
                <ArrowRight size={18} />
              </Button>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-9 py-4 text-base border-2 border-white/30 text-white hover:bg-white hover:text-heading transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-14 pt-8 border-t border-white/10">
              {[
                { value: "2,000+", label: "Satisfied Clients" },
                { value: "25+", label: "Years Experience" },
                { value: "50+", label: "Top Companies" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-white/15" />}
                  <div>
                    <p
                      className="text-3xl font-extrabold text-white"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-white/50 text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — real advisor photo */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="w-105 h-125 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Confident businesswoman — finance context */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=840&q=80"
                  alt="Financial advisor"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-heading/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-10 bg-white rounded-2xl px-5 py-4 shadow-2xl">
                <p
                  className="text-heading font-bold text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Powering 50+ Top Companies
                </p>
                <p
                  className="text-body text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Trusted worldwide
                </p>
              </div>
              {/* Green accent ring */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-4 border-primary-light/50" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
