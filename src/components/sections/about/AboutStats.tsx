import SectionLabel from "@/components/ui/SectionLabel";
import Marquee from "@/components/ui/Marquee";

const stats = [
  {
    value: "3",
    label: "Core Practice Areas",
    desc: "Tax & Litigation, Audit & Assurance, and Business Advisory",
  },
  {
    value: "Est. 2020",
    label: "Year Established",
    desc: "Serving clients since our founding in Surat",
  },
  {
    value: "WIRC",
    label: "ICAI Regional Member",
    desc: "Member — Western India Regional Council, Surat Branch",
  },
];


export default function AboutStats() {
  return (
    <>
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — label + heading + description */}
            <div>
              <SectionLabel text="What We Do" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 mb-5 leading-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Our Practice
              </h2>
              <p
                className="text-body leading-relaxed"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                S R S P &amp; Co. is an ICAI-registered chartered accountancy firm
                based in Surat, providing professional services in taxation,
                audit, and business advisory to individuals, SMEs, and
                corporates across Gujarat.
              </p>
            </div>

            {/* Right — 3 stat columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:pt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <p
                    className="text-3xl sm:text-4xl font-extrabold text-heading"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-primary font-semibold text-sm"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-body text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Marquee />
    </>
  );
}
