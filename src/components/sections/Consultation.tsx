"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { CONTACT } from "@/lib/contact";

const WA_NUMBER = `91${CONTACT.phone.replace(/\D/g, "")}`;

const contactItems = [
  { icon: MapPin, label: "Office Address", value: `${CONTACT.address.line1}\n${CONTACT.address.line2}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone },
  { icon: Mail, label: "Email", value: CONTACT.email },
];

type Form = { name: string; phone: string; email: string; message: string };
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
    <p className="text-red-500 text-xs mt-1 ml-1" style={{ fontFamily: "var(--font-dm)" }}>
      {msg}
    </p>
  );
}

export default function Consultation() {
  const [form, setForm] = useState<Form>({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({ name: "", phone: "", email: "" });
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
    setTouched({ name: true, phone: true, email: true });
    const errs = validate(form);
    setErrors(errs);
    if (errs.name || errs.phone || errs.email) return;

    const lines = [
      "*New Consultation Request — S R S P & Co.*",
      `Name: ${form.name.trim()}`,
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
    `w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder-gray-400 focus:outline-none focus:ring-2 bg-white transition-all duration-200 ${
      err
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-gray-200 focus:border-primary focus:ring-primary-light/40"
    }`;

  return (
    <section id="contact" className="py-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionLabel text="Get In Touch" />
            <p
              className="text-body leading-relaxed mb-8 mt-5"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Contact our office for queries regarding our professional services.
              Our team will respond to your enquiry at the earliest.
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

          {/* Right — form */}
          <div className="bg-primary-light/30 rounded-3xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <Send size={20} className="text-primary" />
              <h3
                className="font-bold text-heading text-lg"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Send Us a Message
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p
                className="text-body text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Please fill out the form below with your details and message,
                and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Row 1: Name + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name *"
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

                {/* Row 2: Email (optional) */}
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

                {/* Row 3: Message (optional) */}
                <textarea
                  rows={5}
                  placeholder="Write Message (optional)"
                  value={form.message}
                  onChange={(e) => change("message", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light/40 bg-white transition-all duration-200 resize-y"
                  style={{ fontFamily: "var(--font-dm)" }}
                />

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
