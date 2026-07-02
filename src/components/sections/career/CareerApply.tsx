"use client";

import { useEffect, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { CONTACT } from "@/lib/contact";
import { openings } from "@/lib/careers";

const WA_NUMBER = `91${CONTACT.phone.replace(/\D/g, "")}`;

type Form = { name: string; phone: string; email: string; position: string; message: string };
type Errors = { name: string; phone: string; email: string };

function validate(form: Form): Errors {
  const errors: Errors = { name: "", phone: "", email: "" };
  if (!form.name.trim()) {
    errors.name = "Name is required.";
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

export default function CareerApply() {
  const [form, setForm] = useState<Form>({
    name: "",
    phone: "",
    email: "",
    position: openings[0].title,
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({ name: "", phone: "", email: "" });
  const [touched, setTouched] = useState<Partial<Record<keyof Form, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onSelect = (e: Event) => {
      const title = (e as CustomEvent<string>).detail;
      setForm((f) => ({ ...f, position: title }));
    };
    window.addEventListener("career-apply-select", onSelect);
    return () => window.removeEventListener("career-apply-select", onSelect);
  }, []);

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
    setTouched({ name: true, phone: true, email: true });
    const errs = validate(form);
    setErrors(errs);
    if (errs.name || errs.phone || errs.email) return;

    const lines = [
      "*New Job Application — S R S P & Co.*",
      `Position: ${form.position}`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
    ];
    if (form.email.trim()) lines.push(`Email: ${form.email.trim()}`);
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`);

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const inputClass = (err: string) =>
    `w-full bg-white text-heading placeholder-gray-400 border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all duration-200 ${
      err
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-gray-200 focus:border-primary-light focus:ring-primary-light/30"
    }`;

  return (
    <section id="apply" className="py-24 bg-[#F9FAFB] scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionLabel text="Apply Now" />
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Ready to start your journey with us?
          </h2>
          <p
            className="text-body leading-relaxed"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Fill out the form below and our HR team will get back to you shortly.
          </p>
        </div>

        <div className="bg-heading rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => change("name", e.target.value)}
                  onBlur={() => blur("name")}
                  className={inputClass(errors.name)}
                  style={{ fontFamily: "var(--font-dm)" }}
                />
                <FieldError msg={errors.name} />
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

            <select
              value={form.position}
              onChange={(e) => change("position", e.target.value)}
              className="w-full bg-white text-heading border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/30 transition-all duration-200"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {openings.map((job) => (
                <option key={job.title} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>

            <textarea
              placeholder="Tell us why you're a great fit (optional)"
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
              Submit Application
            </button>

            {submitted && (
              <p
                className="text-primary-light text-sm"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Thanks! Your application has been sent via WhatsApp — we&apos;ll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
