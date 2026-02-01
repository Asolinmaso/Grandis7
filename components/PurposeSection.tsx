import Image from "next/image";

const coreValues = [
  {
    id: 1,
    title: "Clarity in Decisions",
    description:
      "We make property choices simpler by providing verified information and clear guidance at every step.",
    icon: "tick",
  },
  {
    id: 2,
    title: "Trust & Transparency",
    description:
      "We believe trust is built through honesty, openness, and a transparent approach to real estate.",
    icon: "handshake",
  },
  {
    id: 3,
    title: "Long-Term Value",
    description:
      "We focus on properties that offer lasting value for buyers and investors, not just quick transactions.",
    icon: "diamond",
  },
];

export default function PurposeSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_620px] gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-6">
            <h3
              className="text-xl md:text-2xl font-light uppercase"
              style={{
                color: "#686868",
                letterSpacing: "0.4em",
                lineHeight: "33px",
              }}
            >
              OUR PURPOSE
            </h3>
            <h2
              className="text-4xl md:text-[64px] font-semibold"
              style={{ color: "#2E2E2E", lineHeight: "87px" }}
            >
              Purpose Behind Grandis7
            </h2>

            {/* Skyscraper Image */}
            <div className="relative w-full max-w-[397px] h-[455px] rounded-3xl overflow-hidden mt-8">
              <Image
                src="/images/purpose.png"
                alt="Purpose"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="space-y-8">
            {coreValues.map((value, index) => (
              <div
                key={value.id}
                className="bg-white rounded-3xl p-4 border"
                style={{
                  borderColor: "#D9D9D9",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  height: index === 0 ? "283px" : "250px",
                }}
              >
                <div className="flex flex-col gap-6">
                  {/* Icon Circle */}
                  <div
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
                    }}
                  >
                    {value.icon === "tick" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="#421F00"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {value.icon === "handshake" && (
                      <svg
                        width="30"
                        height="24"
                        viewBox="0 0 30 24"
                        fill="#421F00"
                      >
                        <path d="M8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11H8ZM21 11C20.7348 11 20.4804 11.1054 20.2929 11.2929C20.1054 11.4804 20 11.7348 20 12C20 12.2652 20.1054 12.5196 20.2929 12.7071C20.4804 12.8946 20.7348 13 21 13H22C22.2652 13 22.5196 12.8946 22.7071 12.7071C22.8946 12.5196 23 12.2652 23 12C23 11.7348 22.8946 11.4804 22.7071 11.2929C22.5196 11.1054 22.2652 11 22 11H21ZM18.5 3.5C18.5 3.10218 18.342 2.72064 18.0607 2.43934C17.7794 2.15804 17.3978 2 17 2H13C12.6022 2 12.2206 2.15804 11.9393 2.43934C11.658 2.72064 11.5 3.10218 11.5 3.5V6.5C11.5 6.89782 11.658 7.27936 11.9393 7.56066C12.2206 7.84196 12.6022 8 13 8H17C17.3978 8 17.7794 7.84196 18.0607 7.56066C18.342 7.27936 18.5 6.89782 18.5 6.5V3.5Z" />
                      </svg>
                    )}
                    {value.icon === "diamond" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 22L22 7L12 2Z"
                          fill="#421F00"
                          stroke="#421F00"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-[32px] font-semibold leading-[44px]"
                    style={{ color: "#2E2E2E" }}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xl md:text-2xl leading-[33px]"
                    style={{ color: "#686868" }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
