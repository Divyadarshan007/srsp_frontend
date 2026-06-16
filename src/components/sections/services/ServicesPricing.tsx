import { Check, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const plans = [
  {
    name: "Basic Plan",
    description:
      "Perfect for freelancers and small businesses who are just getting started.",
    price: "$15",
    highlighted: false,
    features: [
      "Unlimited Bookkeeping Transactions",
      "CFO Advisory (1 hour/month)",
      "Inventory Management",
      "Quarterly Strategy Sessions",
      "Priority Support",
    ],
  },
  {
    name: "Standard Plan",
    description:
      "For growing businesses that need more in-depth financial insights.",
    price: "$29",
    highlighted: true,
    features: [
      "Unlimited Bookkeeping Transactions",
      "CFO Advisory (3 hours/month)",
      "Inventory Management",
      "Quarterly Strategy Sessions",
      "Priority Support",
    ],
  },
  {
    name: "Premium Plan",
    description:
      "Comprehensive support for established companies with complex financial needs.",
    price: "$99",
    highlighted: false,
    features: [
      "Unlimited Bookkeeping Transactions",
      "CFO Advisory (0 hours/month)",
      "Inventory Management",
      "Quarterly Strategy Sessions",
      "Priority Support",
    ],
  },
];

export default function ServicesPricing() {
  return (
    <section className="py-24 bg-[#F8FFFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <SectionLabel text="Pricing" />
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading mt-5 leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Our Pricing
            </h2>
          </div>
          <p
            className="text-body leading-relaxed"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Choose from flexible pricing plans designed to suit businesses of
            all sizes, offering scalable solutions, transparent costs, and
            valuable services to meet your evolving financial needs efficiently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  description,
  price,
  highlighted,
  features,
}: (typeof plans)[0]) {
  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col gap-7 transition-transform duration-300 ${
        highlighted
          ? "bg-primary shadow-2xl shadow-primary/25 md:-translate-y-3"
          : "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-light"
      }`}
    >
      {/* Plan info */}
      <div>
        <p
          className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
            highlighted ? "text-primary-light" : "text-primary"
          }`}
          style={{ fontFamily: "var(--font-dm)" }}
        >
          {name}
        </p>
        <p
          className={`text-sm leading-relaxed ${
            highlighted ? "text-white/70" : "text-body"
          }`}
          style={{ fontFamily: "var(--font-dm)" }}
        >
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-end gap-1">
        <span
          className={`text-5xl font-extrabold leading-none ${
            highlighted ? "text-white" : "text-heading"
          }`}
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {price}
        </span>
        <span
          className={`text-sm mb-1 ${highlighted ? "text-white/60" : "text-body"}`}
          style={{ fontFamily: "var(--font-dm)" }}
        >
          /Month
        </span>
      </div>

      {/* Divider */}
      <hr className={highlighted ? "border-white/20" : "border-gray-100"} />

      {/* Features */}
      <ul className="space-y-3.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                highlighted ? "bg-white/15" : "bg-primary-light/30"
              }`}
            >
              <Check
                size={11}
                className={highlighted ? "text-white" : "text-primary"}
                strokeWidth={3}
              />
            </div>
            <span
              className={`text-sm ${highlighted ? "text-white/80" : "text-body"}`}
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`w-full flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 ${
          highlighted
            ? "bg-primary-light text-heading hover:bg-white"
            : "bg-heading text-white hover:bg-primary"
        }`}
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        <ArrowUpRight size={16} />
        Choose Package
      </button>
    </div>
  );
}
