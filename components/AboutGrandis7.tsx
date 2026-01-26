import Image from "next/image";
import Link from "next/link";

export default function AboutGrandis7() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-2xl xl:max-w-3xl">
            {/* Section Label */}
            <p className="text-gray-500 text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6">
              ABOUT GRANDIS7
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#2E2E2E] leading-tight">
              More Than Property.
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#2E2E2E] leading-tight mt-1 md:mt-2">
              A Partner You Can Trust.
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mt-6 md:mt-8 max-w-xl">
              Grandis7 helps you navigate real estate with clarity and
              confidence. We connect you with verified properties and guide you
              through every step, making buying and investing simple and
              transparent.
            </p>

            {/* Know More Button */}
            <Link
              href="/about"
              className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 text-[#421F00] rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
              style={{
                background:
                  "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
              }}
            >
              Know More
            </Link>
          </div>

          {/* Right Content - Images */}
          <div className="flex gap-3 md:gap-4 lg:gap-2 justify-center lg:justify-end">
            {/* Small Image */}
            <div className="relative w-[140px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/images/know_more/small_part.png"
                alt="Building Architecture"
                width={140}
                height={200}
                className="object-cover"
              />
            </div>

            {/* Large Image */}
            <div className="relative w-[160px] sm:w-[180px] md:w-[220px] lg:w-[280px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
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
