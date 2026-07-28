import Image from "next/image";

const coreValues = [
  {
    id: 1,
    title: "Clarity in Decisions",
    description:
      "We make property choices simpler by providing verified information and clear guidance at every step.",
    icon: "/images/clarity.png",
  },
  {
    id: 2,
    title: "Trust & Transparency",
    description:
      "We believe trust is built through honesty, openness, and a transparent approach to real estate.",
    icon: "/images/trust.png",
  },
  {
    id: 3,
    title: "Long-Term Value",
    description:
      "We focus on properties that offer lasting value for buyers and investors, not just quick transactions.",
    icon: "/images/value.png",
  },
];

export default function PurposeSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-12 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[500px_540px] justify-between gap-16">
          {/* Left Column */}
          <div className="flex flex-col h-full">
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
              className="text-4xl md:text-[64px] font-semibold leading-tight md:leading-[87px]"
              style={{ color: "#2E2E2E" }}
            >
              Purpose Behind
              <br />
              Grandis7
            </h2>

            {/* Skyscraper Image */}
            <div className="relative w-full max-w-[397px] h-[455px] rounded-3xl overflow-hidden mt-auto pt-8">
              <Image
                src="/images/ourpurpose.png"
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
                className="bg-white rounded-3xl p-6 border shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                style={{ borderColor: "#D9D9D9" }}
              >
                <div className="flex flex-col gap-6">
                  {/* Icon Circle */}
                  <div
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                  >
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
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
