import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full bg-white">
      {/* Mobile layout: centered content + image below (no full-bleed bg) */}
      <div className="md:hidden flex flex-col items-center text-center px-4 pt-8 pb-6">
        <h1 className="text-[40px] leading-[54px] font-bold text-[#2E2E2E]">
          Find the Right Property. Invest with Confidence.
        </h1>
        <p className="mt-6 text-[20px] leading-[27px] text-[#686868] max-w-[397px]">
          Explore thoughtfully selected properties with expert guidance at every step.
        </p>
        <Link
          href="/properties"
          className="mt-6 inline-flex items-center justify-center px-4 py-3 rounded-lg text-[16px] leading-[22px] text-[#421F00] font-normal shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{
            background: "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
          }}
        >
          Explore Properties
        </Link>
        <div className="relative w-full max-w-[553px] aspect-[553/310] mt-6 rounded-2xl overflow-hidden">
          <Image
            src="/images/Home_Banner.png"
            alt="Find the right property"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Desktop layout: background image + content (unchanged) */}
      <div className="hidden md:block relative w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Home_Banner.png"
            alt="Home Banner Background"
            fill
            className="object-cover object-[center_60px]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-12 lg:px-14 xl:px-16">
          <div className="pt-8 md:pt-12 lg:pt-16 pb-48 md:pb-72 lg:pb-[420px] xl:pb-[500px]">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-12">
              <div className="lg:w-[60%]">
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
                    background: "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
                  }}
                >
                  Explore Properties
                </Link>
              </div>
              <div className="lg:flex-1 lg:pt-16 xl:pt-20">
                <p className="max-w-[600px] text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  Explore thoughtfully selected properties with expert guidance at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
