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
    <section className="py-12 lg:py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
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

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
    </section>
  );
}
