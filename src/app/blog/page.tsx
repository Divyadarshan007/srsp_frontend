import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogBanner from "@/components/sections/blog/BlogBanner";
import BlogList from "@/components/sections/blog/BlogList";
export const metadata: Metadata = {
  title: "Blog — S R S P & Co",
  description:
    "Stay updated with the latest articles and insights on financial management, tax planning, accounting practices, and business growth from S R S P & Co.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogBanner />
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
