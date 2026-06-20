import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Disclaimer — S R S P & Co.",
  description: "Professional disclaimer for S R S P & Co. — Chartered Accountants, Surat.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-heading mb-2"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Disclaimer
          </h1>
          <p className="text-body text-sm mb-10" style={{ fontFamily: "var(--font-dm)" }}>
            Last updated: June 2026
          </p>

          <div className="space-y-8 text-body leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                Informational Purpose Only
              </h2>
              <p>
                The content published on this website — including articles, service descriptions,
                and any other material — is provided for general informational purposes only. It does
                not constitute professional advice of any kind, including legal, tax, financial, or
                accounting advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                No Professional Relationship
              </h2>
              <p>
                Accessing this website or submitting an enquiry does not create a client–professional
                relationship between you and S R S P &amp; Co. A formal engagement letter, duly
                accepted by both parties, is required before any professional services commence.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                No Reliance
              </h2>
              <p>
                You should not act or refrain from acting on the basis of any information contained
                on this website without first seeking independent professional advice relevant to your
                specific circumstances. S R S P &amp; Co. accepts no liability for any loss or damage
                arising from reliance on the information published here.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                Regulatory Compliance
              </h2>
              <p>
                S R S P &amp; Co. is a firm of Chartered Accountants registered with the Institute
                of Chartered Accountants of India (ICAI) and is subject to the ICAI Code of Ethics.
                The firm complies with the ICAI Code of Ethics — 13th Edition (effective April 1, 2026).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                External Links
              </h2>
              <p>
                This website may contain links to third-party websites. S R S P &amp; Co. has no
                control over the content of those sites and accepts no responsibility for them or for
                any loss or damage that may arise from your use of them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                Contact
              </h2>
              <p>
                For any queries regarding the information on this website, please contact:
              </p>
              <address className="not-italic mt-2">
                <strong>S R S P &amp; Co.</strong><br />
                B-101, Bhatar Trade Center, Near Bhatar Char Rasta<br />
                Bhatar, Surat – 395017, Gujarat, India<br />
                Email: <a href="mailto:SRSP@SRSPCO.COM" className="text-primary hover:underline">SRSP@SRSPCO.COM</a>
              </address>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
