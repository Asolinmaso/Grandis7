import Image from "next/image";
import Link from "next/link";

export default function AboutGrandis7() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 max-md:bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-12 lg:px-14 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-2xl xl:max-w-3xl max-md:text-center max-md:flex max-md:flex-col max-md:items-center">
            <p className="text-gray-500 text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6 max-md:text-[16px] max-md:leading-[22px] max-md:tracking-[0.24em] max-md:text-[#686868]">
              ABOUT GRANDIS7
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#2E2E2E] leading-tight max-md:text-[40px] max-md:leading-[54px]">
              More Than Property.
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#2E2E2E] leading-tight mt-1 md:mt-2 max-md:text-[40px] max-md:leading-[54px]">
              A Partner You Can Trust.
            </h2>

            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mt-6 md:mt-8 max-w-xl max-md:text-center max-md:text-[20px] max-md:leading-[27px] max-md:text-[#686868] max-md:max-w-[393px]">
              Grandis7 helps you navigate real estate with clarity and
              confidence. We connect you with verified properties and guide you
              through every step, making buying and investing simple and
              transparent.
            </p>

            <Link
              href="/about"
              className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 text-[#421F00] rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base max-md:py-3 max-md:px-4 max-md:text-[16px] max-md:leading-[22px] max-md:font-normal max-md:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              style={{
                background:
                  "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
              }}
            >
              Know More
            </Link>
          </div>

          {/* Right Content - Images */}
          <div className="flex gap-3 md:gap-4 lg:gap-0 justify-center lg:justify-end max-md:bg-[#CEEFFF] max-md:rounded-2xl max-md:p-4 max-md:gap-4 max-md:w-full max-md:max-w-[440px] max-md:mx-auto">
            {/* Small Image */}
            <div className="relative w-[140px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[380px] rounded-lg overflow-hidden max-md:w-[90px] max-md:h-[280px] max-md:rounded-2xl max-md:shrink-0">
              <Image
                src="/images/know_more/small_part.png"
                alt="Building Architecture"
                width={140}
                height={200}
                className="object-cover"
              />
            </div>

            {/* Large Image */}
            <div className="relative w-[160px] sm:w-[180px] md:w-[220px] lg:w-[280px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[380px] rounded-lg overflow-hidden max-md:flex-1 max-md:min-h-[280px] max-md:rounded-2xl">
              <Image
                src="/images/know_more/large_part.png"
                alt="Building Architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
