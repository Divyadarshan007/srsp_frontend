import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactBanner from "@/components/sections/contact/ContactBanner";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactMap from "@/components/sections/contact/ContactMap";
export const metadata: Metadata = {
  title: "Contact Us — S R S P & Co",
  description:
    "Get in touch with S R S P & Co. Visit us at Bhatar, Surat or reach out via phone and email.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactBanner />
        <ContactInfo />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
