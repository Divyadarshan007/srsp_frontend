import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import StrategicPlanning from "@/components/sections/StrategicPlanning";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Consultation from "@/components/sections/Consultation";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <StrategicPlanning />
        <Team />
        <Testimonials />
        <Consultation />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
