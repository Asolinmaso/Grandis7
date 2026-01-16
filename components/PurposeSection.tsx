import Image from "next/image";

const coreValues = [
  {
    id: 1,
    title: "Clarity in Decisions",
    description:
      "We make property choices simpler by providing verified information and clear guidance at every step.",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Trust & Transparency",
    description:
      "We believe trust is built through honesty, openness, and a transparent approach to real estate.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Long-Term Value",
    description:
      "We focus on properties that offer lasting value for buyers and investors, not just quick transactions.",
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
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

export default function PurposeSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wider">
              OUR PURPOSE
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Purpose Behind Grandis7
            </h2>
            {/* Skyscraper Image */}
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
                {/* Placeholder - Add skyscraper image at /images/about_purpose.png */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">
                    Add skyscraper image at /images/about_purpose.png
                  </p>
                </div>
                {/* Uncomment when image is available:
                <Image
                  src="/images/about_purpose.png"
                  alt="Purpose"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="space-y-6">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="bg-gray-100 rounded-xl p-6 lg:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="text-gray-700 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
