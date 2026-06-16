import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    price: "$15.00",
    label: "Starter Plan",
    features: ["Basic financial reports", "Monthly bookkeeping", "Email support"],
  },
  {
    price: "$29.00",
    label: "Professional Plan",
    features: ["Advanced analysis", "Weekly bookkeeping", "Priority support"],
  },
  {
    price: "$99.00",
    label: "Enterprise Plan",
    features: ["Custom strategy", "Dedicated advisor", "24/7 support"],
  },
];

const rightFeatures = [
  "Transparent pricing with no hidden fees",
  "Cancel or upgrade your plan any time",
  "Free onboarding support for all plans",
  "Access to all core financial tools",
  "Monthly performance reports included",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#F8FFFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — advisor image + pricing tiers */}
          <div className="space-y-5">
            {/* Advisor image */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                alt="Financial advisor"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Pricing tier rows */}
            {tiers.map((tier) => (
              <PricingRow key={tier.price} {...tier} />
            ))}
          </div>

          {/* RIGHT — label, heading, description, features */}
          <div className="lg:pt-4">
            <SectionLabel text="Pricing Plan" />
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-heading mt-5 mb-5 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Flexible pricing plans for all your financial needs
            </h2>
            <p
              className="text-body leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Whether you are a startup or an established enterprise, we have
              a plan designed to fit your needs and budget. Start small and
              scale as your business grows — our advisors are always here to
              guide you every step of the way.
            </p>

            <ul className="space-y-3 mb-10">
              {rightFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-light/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-primary" strokeWidth={3} />
                  </div>
                  <span
                    className="text-body text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3 rounded-full hover:bg-[#174f41] transition-colors duration-200 text-sm shadow-lg shadow-primary/20"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Get Free Consultation
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingRow({
  price,
  label,
  features,
}: {
  price: string;
  label: string;
  features: string[];
}) {
  return (
    <div className="group flex items-center justify-between gap-4 bg-white border border-gray-100 hover:border-primary-light hover:shadow-md rounded-2xl px-6 py-4 transition-all duration-300">
      <div className="shrink-0">
        <p
          className="text-2xl font-extrabold text-heading"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {price}
        </p>
        <p
          className="text-body text-xs mt-0.5"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          {label}
        </p>
      </div>

      <div className="hidden sm:flex flex-wrap gap-2 flex-1 mx-4">
        {features.map((f) => (
          <span
            key={f}
            className="flex items-center gap-1 text-xs text-body"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            <Check size={11} className="text-primary" strokeWidth={3} />
            {f}
          </span>
        ))}
      </div>

      <button
        className="shrink-0 bg-heading text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-primary transition-colors duration-200 group-hover:bg-primary"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        Get Started
      </button>
    </div>
  );
}
