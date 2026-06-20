export const blogPosts = [
  {
    id: 1,
    category: "GST",
    title: "GST Amnesty Scheme 2024: What Businesses Must Know Before the Deadline",
    excerpt:
      "The GST Council introduced an amnesty scheme for pending demands under Sections 73 and 74 for FY 2017–18 to 2019–20. Businesses can settle outstanding tax dues at reduced interest and waived penalties if paid before March 31, 2025. This is a limited-window opportunity to close old disputes and avoid litigation.",
    date: "January 15, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    category: "Income Tax",
    title: "New Tax Regime vs Old Regime: Which is Better for You in FY 2025–26?",
    excerpt:
      "Finance Act 2025 revised the slab rates under the new tax regime, making it the default option for most salaried individuals and businesses. Understanding the impact of the revised rebate under Section 87A, the standard deduction changes, and the removal of key exemptions is essential before filing your return.",
    date: "March 10, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    category: "Compliance",
    title: "ICAI Code of Ethics — 13th Edition: Key Changes Effective April 2026",
    excerpt:
      "The ICAI has revised its Code of Ethics (13th Edition), effective April 1, 2026. The updated code reinforces the prohibition on solicitation and testimonials, introduces stronger independence requirements for audit engagements, and aligns with the IESBA International Ethics Standards. CA firms must review their website content and marketing practices immediately.",
    date: "May 5, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    category: "GST",
    title: "Invoice Management System (IMS) on GST Portal: A Practical Guide",
    excerpt:
      "GSTN introduced the Invoice Management System from October 2024, enabling recipients to accept, reject, or keep invoices pending before filing GSTR-3B. Understanding how IMS impacts ITC eligibility and reconciliation with GSTR-2B is critical for accurate monthly returns and avoiding ITC reversals.",
    date: "November 12, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    category: "Company Law",
    title: "MCA Updates 2025: Key Changes to Annual Compliance for Private Companies",
    excerpt:
      "The Ministry of Corporate Affairs has notified several amendments affecting private limited companies in 2025, including revised thresholds for board meetings, updated e-filing requirements under the V3 portal, and stricter timelines for DIN KYC. Non-compliance attracts significant additional fees and potential director disqualification.",
    date: "February 20, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    category: "Income Tax",
    title: "TDS on Purchase of Property: Section 194-IA Compliance Checklist",
    excerpt:
      "Buyers of immovable property valued above ₹50 lakh are required to deduct TDS at 1% under Section 194-IA and deposit it within 30 days via Form 26QB. Recent changes require the PAN of all sellers to be correctly linked and verified. Errors in Form 26QB lead to notices and demands from the Income Tax Department.",
    date: "April 8, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80",
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];
