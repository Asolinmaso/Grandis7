"use client";

import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Plots",
    image: "/images/property_categories/plots.png",
  },
  {
    id: 2,
    name: "Residential",
    image: "/images/property_categories/residential.png",
  },
  {
    id: 3,
    name: "Commercial",
    image: "/images/property_categories/commercial.png",
  },
  {
    id: 4,
    name: "New Launch",
    image: "/images/property_categories/new_launch.png",
  },
  {
    id: 5,
    name: "Ready To Move",
    image: "/images/property_categories/Ready_To_Move.png",
  },
];

export default function PropertyCategories() {
  

  return (
    <section className="w-full py-16 lg:py-20 max-md:py-10 max-md:bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-12 lg:px-14 xl:px-16">
        {/* Section Title - mobile: centered, 16px label, 40px title */}
        <div className="mb-4 max-md:text-center max-md:mb-6">
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.24em] text-[#686868] mb-2 max-md:text-[16px] max-md:leading-[22px] max-md:tracking-[0.24em] max-md:font-light">
            PROPERTY CATEGORIES
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] max-md:text-[40px] max-md:leading-[54px]">
            Spaces That Match Every Purpose
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-6 md:mt-8 max-md:mt-6">
          {/* Left Side - Large Image */}
          <div className="relative rounded-2xl bg-gray-900 max-md:bg-[#DFDDDB]">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-full min-h-[400px]">
              {/* Image - Replace /images/residential_street.png with your actual image path */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/purpose.png"
                  alt="Residential Street"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Golden Button with Diagonal Arrow */}
              <div className="absolute -bottom-3 -right-3 z-20">
                <div className="w-[82px] h-[82px] rounded-full bg-white flex items-center justify-center">
                  <button
                    className="w-[65px] h-[65px] flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="View Property"
                  >
                    <svg
                      width="65"
                      height="65"
                      viewBox="0 0 65 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="65"
                        height="65"
                        rx="32.5"
                        fill="url(#paint0_linear_category)"
                      />
                      <path
                        d="M25.375 40.1258L39.6267 25.874M39.6267 25.874L41.3534 38.2895M39.6267 25.874L27.2113 24.1474"
                        stroke="#421F00"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_category"
                          x1="65"
                          y1="32.5"
                          x2="3.23714e-08"
                          y2="32.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A2630E" />
                          <stop offset="0.2811" stopColor="#FFBA3E" />
                          <stop offset="0.546173" stopColor="#A2630E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Category Buttons - mobile: pill 80px height, rounded-full, first gradient */}
          {/* Right Side - Category Buttons */}
<div className="flex flex-col gap-4 max-md:gap-3 max-md:mt-6">
  {categories.map((category) => (
    <button
      key={category.id}
      className="group flex items-center gap-4 p-1 rounded-full bg-[#421F00] hover:bg-gradient-to-r hover:from-[#A2630E] hover:via-[#FFBA3E] hover:to-[#A2630E] transition-all duration-300 max-md:h-20 max-md:rounded-[60px] max-md:px-3"
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-[#2A1500] group-hover:bg-white transition-all duration-300 max-md:w-[62px] max-md:h-[62px] max-md:rounded-full max-md:bg-white">
        <Image
          src={category.image}
          alt={category.name}
          width={56}
          height={56}
          className="w-full h-full object-cover max-md:object-contain max-md:p-1"
        />
      </div>

      <span className="text-lg font-medium text-white max-md:text-[32px] max-md:leading-[44px] max-md:font-extralight">
        {category.name}
      </span>
    </button>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}
