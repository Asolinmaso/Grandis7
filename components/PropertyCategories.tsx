"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Residential",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 30V15L20 5L35 15V30H25V20H15V30H5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 15H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 20H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Commercial",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="12"
          width="8"
          height="18"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="18"
          y="8"
          width="8"
          height="22"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="28"
          y="15"
          width="4"
          height="15"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 30H36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Plots",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8H32V32H8V8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 20H32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 8V32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="14" r="2" fill="currentColor" />
        <circle cx="28" cy="26" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "New Launch",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="10"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          rx="2"
        />
        <path
          d="M10 18H30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 22H30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Ready To Move",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 30V18L20 8L34 18V30H26V22H14V30H6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 18H28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="25" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function PropertyCategories() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-4">
          <h3 className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wider mb-2">
            PROPERTY CATEGORIES
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Spaces That Match Every Purpose
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 md:mt-12">
          {/* Left Side - Large Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-900">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-full min-h-[400px]">
              {/* Image - Replace /images/residential_street.png with your actual image path */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative">
                <Image
                  src="/images/purpose.png"
                  alt="Residential Street"
                  fill
                  className="object-cover rounded-2xl object-center"
                  priority
                />
              </div>
              {/* Golden Button with Diagonal Arrow */}
              <div className="absolute bottom-6 right-6 z-10">
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

          {/* Right Side - Category Buttons */}
          <div className="flex flex-col gap-4">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-4 p-1 rounded-full transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#A2630E] via-[#FFBA3E] to-[#A2630E]"
                      : "bg-[#421F00] hover:bg-[#4a2500]"
                  }`}
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isActive ? "bg-white/20" : "bg-[#2a1500]"
                    }`}
                  >
                    <div
                      className={`${
                        isActive ? "text-white" : "text-[#FFBA3E]"
                      }`}
                    >
                      {category.icon}
                    </div>
                  </div>
                  {/* Category Name */}
                  <span
                    className={`text-lg font-medium ${
                      isActive ? "text-white" : "text-white"
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
