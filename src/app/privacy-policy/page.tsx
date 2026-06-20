import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — S R S P & Co.",
  description: "Privacy Policy for S R S P & Co. — Chartered Accountants, Surat.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-heading mb-2"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-body text-sm mb-10" style={{ fontFamily: "var(--font-dm)" }}>
            Last updated: June 2026
          </p>

          <div className="space-y-8 text-body leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                1. Who We Are
              </h2>
              <p>
                S R S P &amp; Co. (Chartered Accountants) is a firm registered with the Institute of
                Chartered Accountants of India (ICAI), operating from B-101, Bhatar Trade Center,
                Near Bhatar Char Rasta, Bhatar, Surat – 395017, Gujarat, India.
              </p>
              <p className="mt-2">
                Contact: <a href="mailto:SRSP@SRSPCO.COM" className="text-primary hover:underline">SRSP@SRSPCO.COM</a> | +91 63557 74778
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                2. Information We Collect
              </h2>
              <p>
                When you submit the contact form on this website, we collect the following personal data:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Full name</li>
                <li>Mobile phone number</li>
                <li>Email address (optional)</li>
                <li>Message content (optional)</li>
              </ul>
              <p className="mt-2">
                We do not collect any data automatically through cookies, analytics, or tracking scripts
                beyond what your browser may send as standard HTTP headers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                3. How We Use Your Information
              </h2>
              <p>
                The information you provide via the contact form is used solely to respond to your enquiry.
                Your details are transmitted directly to our WhatsApp business number and are not stored on
                any third-party server by this website.
              </p>
              <p className="mt-2">
                We do not use your personal data for marketing, profiling, or any purpose other than
                responding to the specific enquiry you raised.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                4. Data Retention
              </h2>
              <p>
                This website does not store submitted form data on its own servers. Any record of
                communication retained by the firm is kept only for as long as necessary to fulfil the
                purpose for which it was collected, or as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                5. Your Rights under DPDPA 2023
              </h2>
              <p>
                Under the Digital Personal Data Protection Act, 2023 (India), you have the right to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Know what personal data we hold about you</li>
                <li>Correct inaccurate personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Withdraw consent for processing</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:SRSP@SRSPCO.COM" className="text-primary hover:underline">SRSP@SRSPCO.COM</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                6. Third-Party Services
              </h2>
              <p>
                The contact form on this website uses WhatsApp (Meta Platforms Inc.) to deliver your
                message to us. By submitting the form, your data will be processed in accordance with
                WhatsApp&apos;s own privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The date at the top of this page
                indicates when it was last revised. Continued use of this website after any update
                constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-heading mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                8. Contact Us
              </h2>
              <p>
                For any privacy-related queries, write to us at:
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
