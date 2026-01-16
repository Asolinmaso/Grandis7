const services = [
  {
    id: 1,
    title: "Property Buying Assistance",
    description:
      "We guide buyers through verified property options with clear insights, expert support, and confident decisions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Investment Guidance",
    description:
      "We guide investors through verified opportunities with clear insights, expert support, and confident decisions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Site Visit Support",
    description:
      "We guide clients through planned site visits with clear insights, expert support, and confident decisions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    isHighlighted: false,
  },
  {
    id: 4,
    title: "Documentation Help",
    description:
      "We guide clients through required documentation with clear insights, expert support, and confident decisions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    isHighlighted: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wider mb-2">
            SERVICES WE PROVIDE
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guidance That Moves You Forward
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
              className={`rounded-xl p-6 lg:p-8 ${
                service.isHighlighted
                  ? "bg-[#421F00] text-white"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
            >
              <div
                className={`mb-4 ${
                  service.isHighlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  service.isHighlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  service.isHighlighted ? "text-white/90" : "text-gray-700"
                }`}
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
