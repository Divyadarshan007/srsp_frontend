"use client";

import { Briefcase, MapPin, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { openings } from "@/lib/careers";

export default function CareerOpenings() {
  const applyFor = (title: string) => {
    const form = document.getElementById("apply");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.dispatchEvent(new CustomEvent("career-apply-select", { detail: title }));
  };

  return (
    <section className="pt-12 pb-12 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionLabel text="Current Openings" />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mt-6 max-w-2xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Explore roles open right now
          </h2>
        </div>

        <div className="space-y-5">
          {openings.map((job) => (
            <div
              key={job.title}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-[#FAFAF8] rounded-2xl border border-gray-100 p-6 lg:p-8 hover:border-primary-light transition-colors duration-300"
            >
              <div className="flex-1">
                <h3
                  className="font-bold text-heading text-lg mb-2"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {job.title}
                </h3>
                <p
                  className="text-body text-sm leading-relaxed mb-4 max-w-2xl"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {job.description}
                </p>
                <div
                  className="flex flex-wrap items-center gap-x-6 gap-y-2 text-body text-xs"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-primary" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-primary" />
                    {job.experience}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-light/30 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => applyFor(job.title)}
                className="shrink-0"
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
