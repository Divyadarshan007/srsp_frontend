import SectionLabel from "@/components/ui/SectionLabel";
import { teamMembers } from "@/lib/team";

const members = teamMembers.filter((m) => m.bio);

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
    <section className="pt-12 pb-12 lg:py-24 bg-white overflow-hidden">
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

            // desktop column assignments
            const imageCol = isImageLeft ? "lg:col-start-1" : "lg:col-start-2";
            const contentCol = isImageLeft ? "lg:col-start-2" : "lg:col-start-1";

            return (
              <div
                key={member.name}
                className={`flex flex-col gap-8 items-start lg:gap-12 ${isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Image */}
                <div className="relative w-full lg:w-70 shrink-0">
                  <DecorativeSVG
                    className={isImageLeft ? "-top-10 -left-10" : "-top-10 -right-10"}
                  />
                  <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "3/4" }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      style={{ maxWidth: "1122px", maxHeight: "1522px" }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5 flex-1 lg:pt-4">
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-3xl sm:text-4xl font-extrabold text-heading leading-tight"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {member.name}
                    </h3>
                    {member.role && (
                      <p
                        className="text-body font-medium text-base"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        {member.role}
                      </p>
                    )}
                    <p
                      className="text-primary font-semibold text-sm"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      {member.fullQual}
                    </p>
                  </div>
                  <p
                    className="text-body leading-relaxed"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
