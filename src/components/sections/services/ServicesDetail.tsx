import {
  Scale,
  ClipboardCheck,
  Receipt,
  Building2,
  TrendingUp,
  BookOpen,
  ScanSearch,
  Rocket,
  Handshake,
  FileSignature,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/services";

const icons = [
  Scale,
  ClipboardCheck,
  Receipt,
  Building2,
  TrendingUp,
  BookOpen,
  ScanSearch,
  Rocket,
  Handshake,
  FileSignature,
];

const images = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=70",
];

export default function ServicesDetail() {
  return (
    <section className="py-12 lg:py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top header */}
        <div className="mb-14">
          <SectionLabel text="Our Services" />
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

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = icons[i] ?? Scale;
            return (
              <div
                key={svc.title}
                className="group flex flex-col bg-[#F1F4F1] rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="h-44 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[i % images.length]}
                    alt={svc.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="relative flex flex-1 flex-col px-5 pb-6">
                  <div className="-mt-6 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F4A3C] shadow">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3
                    className="font-bold text-heading text-xl mb-2"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-body text-sm leading-relaxed mb-5 line-clamp-2"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {svc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
