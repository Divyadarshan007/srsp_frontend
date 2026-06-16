"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    name: "Jenish Patel",
    company: "Creative Events",
    rating: 5,
    title: "Seamless Event Management",
    quote:
      "S R S P & Co. transformed how we handle our event business finances. Their expertise in GST compliance and timely filings has removed all our accounting stress. Truly professional!",
    image: "/images/jenish.PNG",
  },
  {
    name: "Ram Mandloi",
    company: "Reynak Opticals",
    rating: 5,
    title: "E-commerce Excellence",
    quote:
      "Managing accounts for our optical retail chain was overwhelming until S R S P & Co. stepped in. Their structured bookkeeping and tax planning have made operations far smoother.",
    image: "/images/ram.PNG",
  },
  {
    name: "Ajay Mishra",
    company: "Prime Patch Properties",
    rating: 5,
    title: "Modern Real Estate Tech",
    quote:
      "Navigating real estate taxation is complex, but S R S P & Co. made it effortless. From property transaction guidance to capital gains planning, their advice saved us significantly.",
    image: "/images/ajay.PNG",
  },
  {
    name: "Dr. Hitesh Chauhan",
    company: "Lumive Aesthetics",
    rating: 5,
    title: "Perfect Digital Healthcare",
    quote:
      "S R S P & Co. handles all our clinic's financial and compliance needs with exceptional care. Their accurate reporting and tax planning let me focus entirely on my patients.",
    image: "/images/hitesh.PNG",
  },
  {
    name: "Dhruv Dave",
    company: "V-link Life Solutions",
    rating: 5,
    title: "End-to-End SaaS Development",
    quote:
      "Their strategic tax advisory and financial planning were vital to launching our business confidently. S R S P & Co. is a trusted partner we rely on every step of the way.",
    image: "/images/dhruv.PNG",
  },
  {
    name: "Nikunj Mangukiya",
    company: "Greenable Solar Solution",
    rating: 5,
    title: "Smart Tech for Clean Energy",
    quote:
      "S R S P & Co. guided us through the financial and tax benefits available in the renewable energy sector. Their expertise helped us maximize returns and stay fully compliant.",
    image: "/images/nikunj.PNG",
  },
  {
    name: "Dr. Brijesha Chauhan",
    company: "Radiance Hair & Skin Clinic & Academy",
    rating: 5,
    title: "Advanced Learning Platforms",
    quote:
      "Managing finances for both a clinic and an academy is demanding. S R S P & Co. handles it all seamlessly — from payroll to GST — with great accuracy and professionalism.",
    image: "/images/brijesha.PNG",
  },
  {
    name: "Ad Niket Mehta",
    company: "Mehta Wealth Portfolio Management",
    rating: 5,
    title: "High-Performance Fintech",
    quote:
      "Their depth of knowledge in financial compliance and portfolio-related taxation is exceptional. S R S P & Co. is an integral part of our firm's financial discipline and success.",
    image: "/images/niket.PNG",
  },
  {
    name: "Mayank Soni",
    company: "Bluebird Beverages",
    rating: 5,
    title: "Streamlined Logistics Software",
    quote:
      "S R S P & Co. streamlined our GST filings and inventory accounting for our beverage distribution business. Their team is always available and consistently reliable.",
    image: "/images/mayank.PNG",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  company,
  rating,
  title,
  quote,
  image,
}: (typeof testimonials)[0]) {
  return (
    <div
      className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
      style={{ flex: "0 0 calc(33.333% - 16px)" }}
    >
      {/* Watermark quotation mark */}
      <span
        className="absolute top-3 right-5 text-8xl leading-none select-none text-primary-light/50"
        style={{ fontFamily: "Georgia, serif" }}
        aria-hidden
      >
        &ldquo;
      </span>

      {/* Avatar + name */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary-light shrink-0"
        />
        <div>
          <p
            className="font-bold text-heading text-sm leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {name}
          </p>
          <p
            className="text-body text-xs mt-0.5"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            {company}
          </p>
        </div>
      </div>

      {/* Stars + Verified */}
      <div className="flex items-center justify-between mb-4">
        <Stars rating={rating} />
        <span
          className="text-primary text-xs font-semibold tracking-widest uppercase"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          Verified Review
        </span>
      </div>

      {/* Title */}
      <h4
        className="text-heading font-extrabold text-base leading-snug mb-3"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        &ldquo;{title}&rdquo;
      </h4>

      {/* Body */}
      <p
        className="text-body text-sm leading-relaxed italic"
        style={{ fontFamily: "var(--font-dm)" }}
      >
        {quote}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const maxIndex = Math.max(0, testimonials.length - 3);

  const prev = () => setCurrent((p) => Math.max(0, p - 1));
  const next = () => setCurrent((p) => Math.min(maxIndex, p + 1));

  return (
    <section id="testimonials" className="py-24 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <SectionLabel text="Testimonials" />
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              What our clients say about us
            </h2>
          </div>
          <p
            className="text-body leading-relaxed lg:pt-10"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Hear from the businesses and individuals who trust S R S P &amp; Co.
            for their financial and accounting needs.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 transition-transform duration-500 ease-in-out ${
                testimonials.length < 3 ? "justify-center" : ""
              }`}
              style={
                testimonials.length >= 3
                  ? { transform: `translateX(calc(-${current} * (100% / 3 + 8px)))` }
                  : undefined
              }
            >
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-heading hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 z-10"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary border border-primary shadow-md flex items-center justify-center text-white hover:bg-[#174f41] transition-all duration-200 z-10"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-primary-light"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
