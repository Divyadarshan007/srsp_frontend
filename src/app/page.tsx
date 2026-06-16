import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Empowering from "@/components/sections/Empowering";
import Services from "@/components/sections/Services";
import StrategicPlanning from "@/components/sections/StrategicPlanning";
import CaseStudies from "@/components/sections/CaseStudies";
import Pricing from "@/components/sections/Pricing";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Consultation from "@/components/sections/Consultation";
import Blog from "@/components/sections/Blog";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Empowering />
        <Services />
        <StrategicPlanning />
        <CaseStudies />
        <Pricing />
        <Team />
        <Testimonials />
        <Consultation />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
