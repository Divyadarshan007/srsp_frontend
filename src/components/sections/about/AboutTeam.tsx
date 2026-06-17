import SectionLabel from "@/components/ui/SectionLabel";

const members = [
  {
    name: "Abhishek Rana",
    cardQual: "B.Com | NISM V-A",
    fullQual: "B.Com | NISM V-A Certified Mutual Fund Distributor",
    bio: "Abhishek brings over a year of hands-on experience to the firm, having joined S R S P & Co. in February 2023. He manages a diverse portfolio of responsibilities spanning GST and TDS compliance, CMA report preparation, and statutory audits. Beyond core accounting functions, Abhishek is a certified Mutual Fund Distributor under NISM Series V-A, enabling him to guide clients on SIP and lump sum investments as well as asset allocation strategies. He also plays a key role in managing day-to-day office operations, ensuring smooth workflow across the team.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Faizan Shaikh",
    cardQual: "B.Com | LL.B.",
    fullQual: "B.Com | LL.B. | Advocate (Enr. No. G/3018/2025)",
    bio: "Faizan is a qualified Advocate and commerce graduate who brings a distinctive legal dimension to the firm since joining in March 2023. With prior experience of eight months, his expertise spans income tax and TDS compliance, accounting, and statutory audits. His legal background equips him to handle complex legal drafting, interpret regulatory frameworks, and assist clients with registrations and certifications across various authorities. Faizan's dual proficiency in finance and law makes him a valuable resource for matters requiring a cross-disciplinary approach.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ayush Rana",
    cardQual: "B.Com",
    fullQual: "B.Com",
    bio: "Ayush joined the firm in April 2026, bringing eight months of prior experience in accounting and taxation. He focuses on personal-level accounting, foundational accountancy analysis, and tax planning, ensuring clients receive attentive and accurate financial guidance. Ayush also contributes to GST refund compliance matters and actively supports the firm's internal office operations. His enthusiasm for learning and his growing command over core accounting functions make him a dependable addition to the team.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dhruvi Patel",
    cardQual: "B.Com | M.Com",
    fullQual: "B.Com | M.Com",
    bio: "Dhruvi is a postgraduate in Commerce with three years of professional experience, having joined the firm in December 2025. Her academic depth and practical exposure make her a reliable resource for accounting entries and GST return management. She plays an active supporting role in the firm's major compliance assignments, contributing to the accuracy and timeliness of client deliverables. Dhruvi's strong academic foundation in commerce enables her to handle complex accounting scenarios with confidence and precision.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jiya Pathneja",
    cardQual: "CA Inter | CMA Final",
    fullQual: "B.Com | CA Inter | CMA Final",
    bio: "Jiya brings an impressive academic profile, having cleared both the CA Intermediate and CMA Final examinations alongside her commerce degree. With a year of prior experience, she joined the firm in March 2026 and quickly established herself in income tax return management and accounting entries. Jiya also plays an integral supporting role in the firm's major compliance engagements. Her commitment to pursuing the highest levels of professional qualification reflects the firm's culture of continuous learning and technical excellence.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  },
];

function DecorativeSVG({ className }: { className: string }) {
  return (
    <svg
      className={`absolute w-36 h-36 text-primary-light opacity-60 -z-10 ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 10 C85 10, 110 35, 110 60 C110 85, 85 110, 60 110 C35 110, 10 85, 10 60 C10 35, 35 10, 60 10 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeDasharray="8 6"
      />
    </svg>
  );
}

export default function AboutTeam() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-20">
          <SectionLabel text="Our Team" />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-5 leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Meet the professionals behind S R S P &amp; Co.
          </h2>
        </div>

        {/* Alternating member rows */}
        <div className="space-y-24">
          {members.map((member, index) => {
            const isImageLeft = index % 2 === 0;

            const imageBlock = (
              <div className="relative">
                <DecorativeSVG
                  className={isImageLeft ? "-top-10 -left-10" : "-top-10 -right-10"}
                />
                <div className="rounded-3xl overflow-hidden h-96 shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-6 left-4 right-4 flex gap-3">
                  <div className="flex-1 bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                    <p
                      className="text-lg font-extrabold text-heading leading-tight"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {member.name}
                    </p>
                    <p
                      className="text-body text-xs mt-1"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      S R S P &amp; Co.
                    </p>
                  </div>
                  <div className="flex-1 bg-primary-light rounded-2xl px-5 py-4 shadow-lg">
                    <p
                      className="text-sm font-extrabold text-heading leading-tight"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {member.cardQual}
                    </p>
                  </div>
                </div>
              </div>
            );

            const contentBlock = (
              <div className="flex flex-col gap-6 lg:pt-4">
                <h3
                  className="text-3xl sm:text-4xl font-extrabold text-heading leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-primary font-semibold text-sm"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {member.fullQual}
                </p>
                <p
                  className="text-body leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {member.bio}
                </p>
              </div>
            );

            return (
              <div key={member.name} className="grid lg:grid-cols-2 gap-16 items-start">
                {isImageLeft ? (
                  <>
                    {imageBlock}
                    {contentBlock}
                  </>
                ) : (
                  <>
                    {contentBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
