import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CareerBanner from "@/components/sections/career/CareerBanner";
import CareerWhyJoin from "@/components/sections/career/CareerWhyJoin";
import CareerOpenings from "@/components/sections/career/CareerOpenings";
import CareerApply from "@/components/sections/career/CareerApply";

export const metadata: Metadata = {
  title: "Career — S R S P & Co",
  description:
    "Join S R S P & Co, Chartered Accountants in Surat. Explore current openings and build your career with a firm that invests in your growth.",
};

export default function CareerPage() {
  return (
    <>
      <Header />
      <main>
        <CareerBanner />
        <CareerWhyJoin />
        <CareerOpenings />
        <CareerApply />
      </main>
      <Footer />
    </>
  );
}
