"use client";

import { useState } from "react";

import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Luxury_villa.png",
  },
  {
    id: 2,
    title: "2BHK",
    location: "Baner, Pune",
    image: "/images/worth_exploring/2BHK.png",
  },
  {
    id: 3,
    title: "Commercial Space",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Commercial_space.png",
  },
  {
    id: 4,
    title: "Premium Plot",
    location: "Hyderabad",
    image: "/images/worth_exploring/Commercial_space.png",
  },
  {
    id: 5,
    title: "Duplex Villa",
    location: "Hyderabad",
    image: "/images/worth_exploring/Commercial_space.png",
  },
];

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === properties.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? properties.length - 3 : prev - 1
    );
  };

  return (
    <section className="w-full py-16 lg:py-20 max-md:py-10 max-md:bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-12 lg:px-14 xl:px-16">
        {/* Section Title - mobile: centered */}
        <div className="mb-8 max-md:text-center max-md:mb-4">
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.24em] text-[#686868] max-md:text-[16px] max-md:leading-[22px] max-md:tracking-[0.24em] max-md:font-light">
            FEATURED PROPERTIES
          </h3>
        </div>

        {/* Header Section - mobile: centered title + description */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 mb-8 max-md:mb-6">
          <div className="max-md:text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E2E2E] leading-tight max-md:text-[40px] max-md:leading-[54px]">
              Handpicked Spaces Worth Exploring
            </h2>
          </div>

          <div className="flex flex-col justify-between max-md:items-center max-md:text-center">
            <p className="text-[#686868] text-base md:text-lg mb-6 lg:mb-0 text-end max-md:text-center max-md:text-[20px] max-md:leading-[27px] max-md:max-w-[336px] max-md:mx-auto">
              Explore properties that stand out for design, connectivity, and
              investment potential.
            </p>
            {/* Navigation Arrows - hidden on mobile (use dots instead) */}
            <div className="flex gap-4 justify-end mt-6 max-md:hidden">
              <button
                onClick={prevSlide}
                className="w-[60px] h-[60px] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Previous"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 73 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_265_409)">
                    <rect
                      x="4"
                      width="65"
                      height="65"
                      rx="32.5"
                      fill="url(#paint0_linear_265_409)"
                    />
                    <path
                      d="M46.5779 32.9998H26.4229M26.4229 32.9998L33.981 42.9998M26.4229 32.9998L33.981 22.9998"
                      stroke="#421F00"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_265_409"
                      x="0"
                      y="0"
                      width="73"
                      height="73"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_265_409"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_265_409"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_265_409"
                      x1="69"
                      y1="32.5"
                      x2="4"
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
              <button
                onClick={nextSlide}
                className="w-[60px] h-[60px] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Next"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 73 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_265_411)">
                    <rect
                      x="4"
                      width="65"
                      height="65"
                      rx="32.5"
                      fill="url(#paint0_linear_265_411)"
                    />
                    <path
                      d="M26.4231 32.9998H46.5781M46.5781 32.9998L39.02 22.9998M46.5781 32.9998L39.02 42.9998"
                      stroke="#421F00"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_265_411"
                      x="0"
                      y="0"
                      width="73"
                      height="73"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_265_411"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_265_411"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_265_411"
                      x1="69"
                      y1="32.5"
                      x2="4"
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

        {/* Property Cards - mobile: single card feel, gradient overlay, 24px title 20px location */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-md:max-w-[398px] max-md:mx-auto">
          {properties
            .slice(currentIndex, currentIndex + 3)
            .map((property) => (
              <div
                key={property.id}
                className="relative group rounded-2xl overflow-hidden bg-gray-900"
              >
                {/* Property Image - Reduced Height */}
                <div className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 hidden max-md:block" style={{ background: "linear-gradient(180deg, rgba(66, 31, 0, 0) 52.05%, #421F00 99.98%)" }} />
                </div>

                {/* Content Overlay - mobile: 24px title, 20px location */}
                <div className="absolute bottom-0 left-0 right-0 p-6 max-md:p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-1 max-md:text-[24px] max-md:leading-[33px]">
                        {property.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base max-md:text-[20px] max-md:leading-[27px] max-md:text-white">
                        {property.location}
                      </p>
                    </div>
                    {/* Circular Button with Diagonal Arrow */}
                    <button
                      className="w-[65px] h-[65px] flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0 ml-4"
                      aria-label={`View ${property.title}`}
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
                          fill={`url(#paint0_linear_265_431_${property.id})`}
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
                            id={`paint0_linear_265_431_${property.id}`}
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
            ))}
        </div>
        {/* Mobile pagination dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBA3E]" aria-hidden />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBA3E]/50" aria-hidden />
        </div>
      </div>
    </section>
  );
}
