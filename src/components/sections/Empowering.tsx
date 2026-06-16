import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const bullets = [
  "Expert financial planning tailored to your unique business needs",
  "Transparent reporting with real-time insights and analytics",
  "Dedicated advisors available whenever you need guidance",
  "Proven track record with 2,000+ satisfied clients worldwide",
];

export default function Empowering() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image collage + stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image — people in business meeting */}
              <div className="col-span-2 rounded-2xl overflow-hidden h-64 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
                  alt="Business team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat card — 2,000+ */}
              <div className="bg-[#F8FFFE] border border-primary-light/40 rounded-2xl p-5 flex flex-col gap-1">
                <p
                  className="text-4xl font-extrabold text-heading"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  2,000+
                </p>
                <p
                  className="text-body text-sm leading-snug"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Satisfied clients globally
                </p>
                {/* Avatar stack */}
                <div className="flex -space-x-2 mt-2">
                  {[
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=60&q=80",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=60&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Client"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* Stat card — 25+ */}
              <div className="bg-primary rounded-2xl p-5 flex flex-col gap-1">
                <p
                  className="text-4xl font-extrabold text-white"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  25+
                </p>
                <p
                  className="text-white/70 text-sm leading-snug"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Years of industry experience
                </p>
                <div className="mt-2 w-10 h-1 rounded-full bg-primary-light" />
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full border-4 border-primary-light/40 -z-10" />
            <div className="absolute -bottom-4 right-8 w-14 h-14 rounded-full bg-primary-light/30 -z-10" />
          </div>

          {/* Right — content */}
          <div>
            <SectionLabel text="Next To Know" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 mb-5 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Empowering businesses and individuals financially
            </h2>
            <p
              className="text-body leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              We help businesses and individuals take control of their financial
              future. With expert guidance and tailored strategies, we make
              financial success achievable for everyone, no matter where you
              start.
            </p>

            <ul className="space-y-3 mb-10">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span
                    className="text-body text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button variant="primary" size="md">
              Read More
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
