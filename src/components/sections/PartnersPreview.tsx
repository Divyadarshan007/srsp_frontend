import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const partners = [
  {
    name: "CA. Savan M. Patel",
    qualifications: "B.Com, FCA, DISA, CFA (Level I)",
    designation: "Founding Partner",
    image: "/founders/savan.jpeg",
  },
  {
    name: "CA. CS. Raj Shah",
    qualifications: "FCA, ACS, DISA",
    designation: "Co-Founding Partner",
    image: "/founders/raj.jpeg",
  },
];

export default function PartnersPreview() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] flex items-stretch">

      {/* Left decorative column — same treatment as Services section */}
      <div
        className="relative shrink-0 hidden lg:flex flex-col pointer-events-none select-none"
        style={{
          width: "32vw",
          backgroundImage: "radial-gradient(at bottom left, #c7f4aa 0%, #FAFAF8 30%)",
        }}
      >
        <img
          src="/images/logo-w.svg"
          alt=""
          aria-hidden
          style={{ width: "30vw", opacity: 0.1 }}
          className="h-full object-contain object-left"
        />
      </div>

      <div className="flex-1 py-8 lg:py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <SectionLabel text="Our Partners" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Meet Our Partners
            </h2>
          </div>
          <Link
            href="/about"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            View Full Profile <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] w-full shadow-lg">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p
                  className="text-lg font-extrabold text-heading leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {partner.name}
                </p>
                <p
                  className="text-primary font-semibold text-sm mt-1"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {partner.qualifications}
                </p>
                <p
                  className="text-body text-sm mt-0.5"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {partner.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  );
}
