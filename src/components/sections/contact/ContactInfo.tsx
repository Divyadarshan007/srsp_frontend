"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { CONTACT } from "@/lib/contact";

const WA_NUMBER = `91${CONTACT.phone.replace(/\D/g, "")}`;

type Form = { firstName: string; phone: string; email: string; message: string };
type Errors = { firstName: string; phone: string; email: string };

function validate(form: Form): Errors {
  const errors: Errors = { firstName: "", phone: "", email: "" };
  if (!form.firstName.trim()) {
    errors.firstName = "Name is required.";
  }
  const digits = form.phone.replace(/\D/g, "");
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[6-9]\d{9}$/.test(digits)) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}

function FieldError({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <p className="text-red-400 text-xs mt-1 ml-1" style={{ fontFamily: "var(--font-dm)" }}>
      {msg}
    </p>
  );
}

export default function ContactInfo() {
  const [form, setForm] = useState<Form>({ firstName: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({ firstName: "", phone: "", email: "" });
  const [touched, setTouched] = useState<Partial<Record<keyof Form, boolean>>>({});

  const change = (field: keyof Form, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) setErrors(validate(updated));
  };

  const blur = (field: keyof Form) => {
    setTouched((p) => ({ ...p, [field]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, phone: true, email: true });
    const errs = validate(form);
    setErrors(errs);
    if (errs.firstName || errs.phone || errs.email) return;

    const lines = [
      "*New Consultation Request — S R S P & Co.*",
      `Name: ${form.firstName.trim()}`,
      `Phone: ${form.phone.trim()}`,
    ];
    if (form.email.trim()) lines.push(`Email: ${form.email.trim()}`);
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`);

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
  };

  const inputClass = (err: string) =>
    `w-full bg-white text-heading placeholder-gray-400 border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all duration-200 ${
      err
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-gray-200 focus:border-primary-light focus:ring-primary-light/30"
    }`;

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — contact details */}
          <div>
            <SectionLabel text="Contact Us" />
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Have questions? Get in touch!
            </h2>
            <p
              className="text-body leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Contact us today for tailored financial strategies and expert advice.
              We&apos;re eager to help your business grow!
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <h3
                    className="font-bold text-heading text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Office Location
                  </h3>
                </div>
                <p
                  className="text-body text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {CONTACT.address.line1},<br />
                  {CONTACT.address.line2}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={16} className="text-primary shrink-0" />
                  <h3
                    className="font-bold text-heading text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Phone Number
                  </h3>
                </div>
                <p
                  className="text-body text-sm"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  +91 {CONTACT.phone}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} className="text-primary shrink-0" />
                  <h3
                    className="font-bold text-heading text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Email Address
                  </h3>
                </div>
                <p
                  className="text-body text-sm"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {CONTACT.email}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-primary shrink-0" />
                  <h3
                    className="font-bold text-heading text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Office Time
                  </h3>
                </div>
                {CONTACT.hours.map((h) => (
                  <p
                    key={h.day}
                    className="text-body text-sm"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {h.day} : {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span
                className="text-heading font-semibold text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Follow Us:
              </span>
              <div className="w-8 h-px bg-gray-300" />
              {[
                {
                  label: "Instagram",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "X",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map(({ label, svg }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-body hover:text-primary hover:border-primary-light transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Right — send message card */}
          <div className="bg-heading rounded-3xl p-8 shadow-xl">
            <h3
              className="text-2xl font-extrabold text-white mb-2"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Send Message
            </h3>
            <p
              className="text-white/60 text-sm mb-7 leading-relaxed"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Please fill out the form below with your details and message, and our
              team will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={form.firstName}
                    onChange={(e) => change("firstName", e.target.value)}
                    onBlur={() => blur("firstName")}
                    className={inputClass(errors.firstName)}
                    style={{ fontFamily: "var(--font-dm)" }}
                  />
                  <FieldError msg={errors.firstName} />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone *"
                    value={form.phone}
                    onChange={(e) => change("phone", e.target.value)}
                    onBlur={() => blur("phone")}
                    className={inputClass(errors.phone)}
                    style={{ fontFamily: "var(--font-dm)" }}
                  />
                  <FieldError msg={errors.phone} />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => change("email", e.target.value)}
                  onBlur={() => blur("email")}
                  className={inputClass(errors.email)}
                  style={{ fontFamily: "var(--font-dm)" }}
                />
                <FieldError msg={errors.email} />
              </div>

              <textarea
                placeholder="Write Message (optional)"
                value={form.message}
                onChange={(e) => change("message", e.target.value)}
                rows={5}
                className="w-full bg-white text-heading placeholder-gray-400 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/30 transition-all duration-200 resize-none"
                style={{ fontFamily: "var(--font-dm)" }}
              />

              <button
                type="submit"
                className="bg-primary-light hover:bg-[#b8f09a] text-heading font-semibold px-8 py-3 rounded-full transition-colors duration-200"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
