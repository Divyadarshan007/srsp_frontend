export const blogPosts = [
  {
    id: 1,
    category: "Compliance",
    title: "Cash Flow Management Tips for Sustainable Growth",
    excerpt:
      "Smart Cash Flow Planning Strategies Managing cash flow effectively is essential for sustaining business stability and supporting long-term growth. By tracking income and expenses regularly, businesses can identify patterns and adjust strategies accordingly. A structured cash flow plan ensures companies can meet obligations, avoid financial stress, and invest in opportunities that drive commitment.",
    date: "November 30, 2020",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    category: "Management",
    title: "Top 10 Accounting Practices Every Business Should Follow",
    excerpt:
      "Maintain accurate financial records. Implementing strong accounting practices is fundamental to managing financial health and building business success. By following proper accounting methods, organizations can improve decision making and maintain compliance with regulations, creating a solid foundation for long-term success.",
    date: "November 30, 2020",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    category: "Strategy",
    title: "How to Make Your Business Financially Transparent",
    excerpt:
      "Financial transparency builds trust with stakeholders and creates a foundation for long-term business success. Maintaining clear and accurate financial records allows businesses to present a true picture of their financial health and strengthens relationships with clients, partners, and stakeholders.",
    date: "July 20, 2021",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    category: "Strategy",
    title: "The Role of Financial Accounting in Business Growth",
    excerpt:
      "Understanding how financial accounting drives strategic decisions and enables sustainable business expansion. A thorough record-keeping system enables informed decision-making, operational efficiency, and builds a strong foundation for long-term growth.",
    date: "July 13, 2021",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    category: "Management",
    title: "Tax Planning Strategies for High-Income Earners",
    excerpt:
      "Smart tax optimization strategies to protect wealth and maximize financial outcomes for high earners. A proactive approach to tax management ensures better control over financial costs, helping individuals preserve more of what they earn.",
    date: "July 12, 2021",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    category: "Compliance",
    title: "Risk Management in Global Finance: Best Practices",
    excerpt:
      "Navigating Global Financial Risk Best Practices Risk management is a critical component of managing global financial operations effectively. By understanding various risk factors such as market volatility and currency fluctuations, organizations can structure risk mitigation plans to protect their assets and ensure long-term financial stability.",
    date: "July 13, 2021",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];
