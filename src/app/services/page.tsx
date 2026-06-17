import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesBanner from "@/components/sections/services/ServicesBanner";
import ServicesDetail from "@/components/sections/services/ServicesDetail";
import ServicesMarquee from "@/components/sections/services/ServicesMarquee";
import StrategicPlanning from "@/components/sections/StrategicPlanning";
import Testimonials from "@/components/sections/Testimonials";
export const metadata: Metadata = {
  title: "Services — S R S P & Co",
  description:
    "Explore our full range of financial and accounting services — from tax planning and auditing to company law consultancy and bookkeeping.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesBanner />
        <ServicesDetail />
        <ServicesMarquee />
        <StrategicPlanning />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
