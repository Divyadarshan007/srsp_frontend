import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutStory() {
  return (
    <section className="py-12 lg:pt-20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel text="Our Story" />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 mb-8 leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            About S R S P &amp; Co.
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
      </div>
    </section>
  );
}
