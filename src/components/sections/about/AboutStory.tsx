import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutStory({ bg = "bg-[#FAFAF8]" }: { bg?: string }) {
  return (
    <section className={`py-12 lg:pt-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionLabel text="Our Story" />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 mb-8 leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            About Us.
          </h2>
          <div className="space-y-5 text-body leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>
            <p>
              S R S P &amp; Co. is a firm of Chartered Accountants, established in 2020. The firm
              offers professional services in the areas of Audit &amp; Assurance, Taxation, Accounting,
              and Advisory.
            </p>
            <p>
              The firm is registered with the Institute of Chartered Accountants of India (ICAI) and
              is committed to delivering high-quality professional services in accordance with the
              applicable laws, standards, and the Code of Ethics issued by the ICAI.
            </p>
            <p>
              We adopt a practical approach towards compliance and advisory services, supported by
              modern tools and technology to ensure efficiency and accuracy in our work.
            </p>
            <div className="pt-2">
              <h3
                className="text-xl font-bold text-heading mb-3"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Our Vision
              </h3>
              <p>
                To deliver reliable, ethical, and practical professional services that help businesses
                meet their compliance requirements and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Office photos */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden aspect-3/4 shadow-2xl">
            <img
              src="/images/office-reception.webp"
              alt="SRSP & Co. Chartered Accountants office reception"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden aspect-3/4 shadow-2xl mt-10">
            <img
              src="/images/office-team-member.webp"
              alt="SRSP & Co. team member at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
