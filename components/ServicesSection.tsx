const services = [
  {
    id: 1,
    title: "Property Buying Assistance",
    description:
      "We guide buyers through verified property options with clear insights, expert support, and confident decisions.",
    icon: "home",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Investment Guidance",
    description:
      "We guide investors through verified opportunities with clear insights, expert support, and confident decisions.",
    icon: "chart",
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Site Visit Support",
    description:
      "We guide clients through planned site visits with clear insights, expert support, and confident decisions.",
    icon: "location",
    isHighlighted: false,
  },
  {
    id: 4,
    title: "Documentation Help",
    description:
      "We guide clients through required documentation with clear insights, expert support, and confident decisions.",
    icon: "document",
    isHighlighted: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 lg:py-20">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6 lg:px-[76px]">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-6">
          <h3
            className="text-xl md:text-2xl font-light uppercase"
            style={{
              color: "#686868",
              letterSpacing: "0.4em",
              lineHeight: "33px",
            }}
          >
            SERVICES WE PROVIDE
          </h3>
          <h2
            className="text-4xl md:text-[64px] font-semibold"
            style={{ color: "#2E2E2E", lineHeight: "87px" }}
          >
            Guidance That Moves You Forward
          </h2>
          <p
            className="text-xl md:text-2xl max-w-[888px] mx-auto leading-[33px]"
            style={{ color: "#686868" }}
          >
            End-to-end support designed to simplify property buying and
            investing through clear guidance, expert assistance, and confident
            ownership decisions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-6 flex flex-col gap-6 ${
                service.isHighlighted
                  ? "bg-[#421F00] shadow-lg"
                  : "bg-white border"
              }`}
              style={
                service.isHighlighted
                  ? { boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }
                  : { borderColor: "#D9D9D9" }
              }
            >
              {/* Icon */}
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                {service.icon === "home" && (
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M10 25L30 10L50 25V50C50 51.3261 49.4732 52.5979 48.5355 53.5355C47.5979 54.4732 46.3261 55 45 55H15C13.6739 55 12.4021 54.4732 11.4645 53.5355C10.5268 52.5979 10 51.3261 10 50V25Z"
                      fill="#FCDE94"
                    />
                    <path
                      d="M25 55V35H35V55"
                      stroke="#421F00"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {service.icon === "chart" && (
                  <svg
                    width="57"
                    height="60"
                    viewBox="0 0 57 60"
                    fill="#421F00"
                  >
                    <rect x="5" y="35" width="12" height="20" rx="2" />
                    <rect x="22.5" y="20" width="12" height="35" rx="2" />
                    <rect x="40" y="5" width="12" height="50" rx="2" />
                  </svg>
                )}
                {service.icon === "location" && (
                  <svg
                    width="57"
                    height="60"
                    viewBox="0 0 57 60"
                    fill="none"
                  >
                    <circle
                      cx="28.5"
                      cy="20"
                      r="15"
                      stroke="#421F00"
                      strokeWidth="5"
                    />
                    <circle cx="28.5" cy="20" r="5" fill="#421F00" />
                    <path
                      d="M28.5 35C28.5 35 43.5 45 28.5 55C13.5 45 28.5 35 28.5 35Z"
                      stroke="#421F00"
                      strokeWidth="5"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {service.icon === "document" && (
                  <svg
                    width="48"
                    height="60"
                    viewBox="0 0 48 60"
                    fill="#421F00"
                  >
                    <path d="M8 0C5.79086 0 4 1.79086 4 4V56C4 58.2091 5.79086 60 8 60H40C42.2091 60 44 58.2091 44 56V16L28 0H8Z" />
                    <path d="M28 0V16H44L28 0Z" fill="#FAFAFA" />
                    <rect
                      x="12"
                      y="28"
                      width="24"
                      height="3"
                      rx="1.5"
                      fill="#FAFAFA"
                    />
                    <rect
                      x="12"
                      y="36"
                      width="24"
                      height="3"
                      rx="1.5"
                      fill="#FAFAFA"
                    />
                    <rect
                      x="12"
                      y="44"
                      width="16"
                      height="3"
                      rx="1.5"
                      fill="#FAFAFA"
                    />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3
                className={`text-2xl md:text-[32px] font-semibold leading-[44px] ${
                  service.isHighlighted ? "text-[#FCDE94]" : ""
                }`}
                style={service.isHighlighted ? {} : { color: "#2E2E2E" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-xl md:text-2xl leading-[33px] ${
                  service.isHighlighted ? "opacity-75" : ""
                }`}
                style={
                  service.isHighlighted
                    ? { color: "rgba(252, 222, 148, 0.75)" }
                    : { color: "#686868" }
                }
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
