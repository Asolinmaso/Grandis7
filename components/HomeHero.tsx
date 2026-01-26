import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Home_Banner.png"
          alt="Home Banner Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="pt-8 md:pt-12 lg:pt-16 pb-64 md:pb-96 lg:pb-[500px] xl:pb-[600px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#2E2E2E] leading-tight">
                Find the Right Property.
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#2E2E2E] leading-tight mt-1 md:mt-2">
                Invest with Confidence.
              </h1>
              <Link
                href="/properties"
                className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 text-[#421F00] rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
                style={{
                  background:
                    "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
                }}
              >
                Explore Properties
              </Link>
            </div>

            {/* Right Content - positioned lower */}
            <div className="lg:max-w-sm xl:max-w-md lg:pt-16 xl:pt-20">
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                Explore thoughtfully selected properties with expert guidance
                at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
