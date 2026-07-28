"use client";

import Image from "next/image";

export default function InvestorsPartners() {
  return (
    <section className="w-full pt-16 pb-36 lg:pt-20 lg:pb-48 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-12 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.24em] text-[#686868] mb-4">
              INVESTORS & VENTURE PARTNERS
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] text-[#2E2E2E]">
              Partnerships That Build
              <br />
              Long-Term Value
            </h2>

            <p className="mt-8 max-w-[700px] text-lg md:text-[20px] leading-[1.6] text-[#686868]">
              We collaborate with individual investors, corporate partners,
              and venture groups to deliver verified, high-potential property
              opportunities with transparency and structured execution.
            </p>

            <button className="mt-10 h-[56px] px-8 rounded-lg bg-gradient-to-r from-[#A2630E] via-[#FFBA3E] to-[#A2630E] text-[#421F00] text-xl font-semibold shadow-md hover:opacity-90 transition-opacity">
              Join Us
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/investors-building.png"
                alt="Investors & Venture Partners"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}