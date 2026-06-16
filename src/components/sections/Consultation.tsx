"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

import { CONTACT } from "@/lib/contact";

const contactItems = [
  { icon: MapPin, label: "Office Address", value: `${CONTACT.address.line1}\n${CONTACT.address.line2}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone },
  { icon: Mail, label: "Email", value: CONTACT.email },
];


export default function Consultation() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };


  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionLabel text="Get In Touch" />
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Turning Challenges into Opportunities
            </h2>
            <p
              className="text-body leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Ready to transform your financial situation? Our expert team is
              here to provide tailored solutions and guide you toward sustainable
              business growth.
            </p>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-light/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p
                      className="text-heading font-bold text-sm mb-0.5"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {label}
                    </p>
                    {value.split("\n").map((line) => (
                      <p
                        key={line}
                        className="text-primary text-sm"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-8">
              <p
                className="text-heading font-bold text-sm mb-3"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Office Hours
              </p>
              <div className="space-y-1.5">
                {CONTACT.hours.map(({ day, time }) => (
                  <p
                    key={day}
                    className="text-primary text-sm"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    <span className="text-heading font-medium">{day}:</span>{" "}
                    {time}
                  </p>
                ))}
              </div>
            </div>

          </div>

          {/* Right — form card matching reference design */}
          <div className="bg-primary-light/30 rounded-3xl p-5">
            {/* Card header */}
            <div className="flex items-center gap-3 mb-4">
              <Send size={20} className="text-primary" />
              <h3
                className="font-bold text-heading text-lg"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Free Consultation for Our Services
              </h3>
            </div>

            {/* White inner card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p
                className="text-body text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Please fill out the form below with your details and message,
                and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: First Name + Phone side by side */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name*"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light/40 bg-white transition-all duration-200"
                    style={{ fontFamily: "var(--font-dm)" }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone*"
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light/40 bg-white transition-all duration-200"
                    style={{ fontFamily: "var(--font-dm)" }}
                  />
                </div>

                {/* Row 2: Email full width */}
                <input
                  type="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light/40 bg-white transition-all duration-200"
                  style={{ fontFamily: "var(--font-dm)" }}
                />

                {/* Row 3: Message textarea */}
                <textarea
                  rows={5}
                  placeholder="Write Message"
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light/40 bg-white transition-all duration-200 resize-y"
                  style={{ fontFamily: "var(--font-dm)" }}
                />

                {/* Submit button — pill, left-aligned */}
                <div>
                  <button
                    type="submit"
                    className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-[#174f41] transition-colors duration-200 text-sm shadow-md shadow-primary/20"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
