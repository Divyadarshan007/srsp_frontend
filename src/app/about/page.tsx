import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutBanner from "@/components/sections/about/AboutBanner";
import About from "@/components/sections/About";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutStrategic from "@/components/sections/about/AboutStrategic";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutTeam from "@/components/sections/about/AboutTeam";
export const metadata: Metadata = {
  title: "About Us — S R S P & Co",
  description:
    "Learn about S R S P & Co — our story, our team of skilled chartered accountants, and our commitment to empowering businesses with expert financial solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutBanner />
        <AboutStory />
        <About />
        <AboutTeam />
        <AboutStrategic />
        <AboutStats />
      </main>
      <Footer />
    </>
  );
}
