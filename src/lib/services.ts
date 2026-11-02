export type Service = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  overview: string;
  offerings: string[];
};

export const services: Service[] = [
  {
    slug: "indirect-tax-litigation",
    title: "Indirect Tax Litigation Services",
    description:
      "Expert representation and strategic advisory for complex tax disputes across multiple regulatory frameworks. We help businesses navigate the intricacies of Indian indirect tax laws while mitigating risks and ensuring compliance.",
    tags: ["GST", "Customs"],
    overview:
      "Indirect tax disputes can be time-consuming and costly if not handled strategically. We represent businesses before tax authorities and appellate forums, building well-reasoned positions grounded in statute and case law, so that exposure is minimised and your business can stay focused on operations.",
    offerings: [
      "Reply to show-cause notices, audit queries and departmental inquiries",
      "Representation before adjudicating authorities and appellate forums",
      "GST and Customs dispute strategy and risk assessment",
      "Refund claims, advance rulings and classification disputes",
      "Pre-litigation advisory to reduce the chance of future disputes",
    ],
  },
  {
    slug: "auditing-assurance",
    title: "Auditing & Assurance Services",
    description:
      "Comprehensive audit services ensuring compliance and financial integrity for businesses of all sizes. Our approach combines technical expertise with practical insights.",
    tags: ["Statutory Audits", "Tax Audits", "Bank Audits", "Special Purpose Audits"],
    overview:
      "Our audit and assurance practice gives stakeholders confidence in your financial statements. We follow applicable auditing standards and combine technical rigour with practical, business-minded observations that help you strengthen your processes year after year.",
    offerings: [
      "Statutory audits under the Companies Act and other applicable laws",
      "Tax audits under the Income Tax Act",
      "Bank audits including concurrent and stock audits",
      "Special purpose audits and certifications",
      "Management letters with actionable improvement suggestions",
    ],
  },
  {
    slug: "income-tax",
    title: "Income Tax Services",
    description:
      "Expert tax planning, compliance, and advisory services for individuals and corporations. We help optimize tax positions while ensuring full regulatory compliance.",
    tags: ["Tax Planning", "Return Filing", "Assessment Support", "Appeals & Litigation"],
    overview:
      "From individuals to large corporates, we help you manage income tax obligations accurately and efficiently. Our team plans proactively, files on time and supports you through assessments and appeals so that you pay what is due, and no more.",
    offerings: [
      "Tax planning for individuals, firms and companies",
      "Preparation and filing of income tax returns",
      "TDS/TCS compliance and return filing",
      "Support during scrutiny assessments and notices",
      "Appeals before CIT(A) and the Income Tax Appellate Tribunal",
    ],
  },
  {
    slug: "company-law-consultancy",
    title: "Company Law Consultancy",
    description:
      "Legal advisory on company formation, compliance, and corporate governance matters. Expert guidance on regulatory requirements.",
    tags: ["Company Incorporation", "Annual Compliance", "Board Matters", "FEMA Compliance"],
    overview:
      "Staying compliant with corporate and foreign exchange laws is essential for any growing business. We guide you from incorporation through ongoing compliance and governance, making sure your company meets every regulatory requirement.",
    offerings: [
      "Company, LLP and other entity incorporation",
      "Annual ROC filings and compliance management",
      "Board and shareholder meeting support and documentation",
      "FEMA and RBI compliance for foreign investment",
      "Corporate restructuring and changes in constitution",
    ],
  },
  {
    slug: "business-finance-management",
    title: "Business & Finance Management",
    description:
      "Financial planning and business advisory services, including cash flow management and business valuation support.",
    tags: ["Financial Planning", "Cash Flow Management", "Business Valuation", "Due Diligence"],
    overview:
      "Sound financial management is the backbone of a sustainable business. We work with owners and management teams to plan, monitor and improve financial performance, and to make informed decisions backed by reliable numbers.",
    offerings: [
      "Financial planning, budgeting and forecasting",
      "Cash flow and working capital management",
      "Business valuation support",
      "Financial due diligence",
      "Project reports and bank loan documentation",
    ],
  },
  {
    slug: "book-keeping-accountancy",
    title: "Book Keeping & Accountancy",
    description:
      "Accurate financial record maintenance and accounting services for seamless operations. Professional management of your financial data.",
    tags: ["Account Maintenance", "Financial Statements", "MIS Reports", "Payroll Processing"],
    overview:
      "Accurate books are the foundation for compliance and decision-making. We maintain your accounts diligently, deliver timely reports and free you from day-to-day bookkeeping so you can concentrate on running the business.",
    offerings: [
      "Day-to-day accounting and ledger maintenance",
      "Preparation of financial statements",
      "Monthly MIS and management reports",
      "Payroll processing and statutory compliance",
      "Bank, debtor and creditor reconciliations",
    ],
  },
  {
    slug: "internal-audits",
    title: "Internal Audits",
    description:
      "Risk-based internal audit services to strengthen controls and operational efficiency. Independent assessment of organizational processes.",
    tags: ["Risk Assessment", "Control Evaluation", "Process Reviews", "Management Reporting"],
    overview:
      "An independent internal audit helps management see where processes leak value or expose the organisation to risk. We take a risk-based approach to evaluate controls, identify gaps and recommend practical improvements.",
    offerings: [
      "Risk assessment and internal audit planning",
      "Evaluation of internal financial controls",
      "Process reviews across purchase, sales, inventory and payroll",
      "Regular reporting to management and those charged with governance",
      "Follow-up on implementation of recommendations",
    ],
  },
  {
    slug: "start-up-ventures",
    title: "Start-Up Ventures",
    description:
      "Support for start-ups including registration, funding advisory, and compliance requirements.",
    tags: ["Entity Formation", "Funding Advisory", "Compliance Setup", "Business Advisory"],
    overview:
      "Starting a business involves many decisions and registrations. We support founders from day one by choosing the right structure, setting up compliance, and preparing the business for funding and growth.",
    offerings: [
      "Choosing and forming the right business entity",
      "Start-up recognition and registrations",
      "Funding advisory and investor-ready documentation",
      "Setting up accounting, tax and compliance systems",
      "Ongoing business advisory as you scale",
    ],
  },
  {
    slug: "mergers-acquisition-consulting",
    title: "Mergers & Acquisition Consulting",
    description:
      "Expert advisory for corporate restructuring, mergers, acquisitions, and business combinations.",
    tags: ["Deal Structuring", "Valuation", "Due Diligence", "Post-Merger Integration"],
    overview:
      "Mergers, acquisitions and restructurings are complex transactions with tax, legal and financial implications. We advise on structure and execution to help you close the deal efficiently and integrate smoothly afterwards.",
    offerings: [
      "Deal structuring from tax and regulatory perspectives",
      "Business and share valuation",
      "Financial and tax due diligence",
      "Scheme of arrangement and regulatory approvals",
      "Post-merger integration support",
    ],
  },
  {
    slug: "government-incentive-advisory",
    title: "Government Incentive Advisory",
    description:
      "Strategic guidance to identify, apply for, and claim central and state government incentives, subsidies, and schemes that support your business growth.",
    tags: ["Subsidy Planning", "Scheme Eligibility", "Application Support", "Claim Management"],
    overview:
      "Central and state governments offer a wide range of incentives, subsidies and schemes for businesses, but eligibility rules and procedures can be hard to navigate. We help you identify the schemes that fit your plans, prepare strong applications and follow through until the benefit is received.",
    offerings: [
      "Identifying central and state incentive schemes relevant to your business",
      "Eligibility assessment and project structuring to maximise benefits",
      "Preparation and filing of applications and supporting documents",
      "Liaison with government departments and agencies",
      "Claim filing, follow-up and compliance with scheme conditions",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
