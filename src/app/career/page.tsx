import { notFound } from "next/navigation";

// Career page temporarily disabled — route returns 404.
export default function CareerPage() {
  notFound();
}

// import type { Metadata } from "next";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import CareerBanner from "@/components/sections/career/CareerBanner";
// import CareerOpenings from "@/components/sections/career/CareerOpenings";
// import CareerApply from "@/components/sections/career/CareerApply";
//
// export const metadata: Metadata = {
//   title: "Career — S R S P & Co",
//   description:
//     "Current job openings at S R S P & Co, Chartered Accountants in Surat.",
// };
//
// export default function CareerPage() {
//   return (
//     <>
//       <Header />
//       <main>
//         <CareerBanner />
//         <CareerOpenings />
//         <CareerApply />
//       </main>
//       <Footer />
//     </>
//   );
// }
