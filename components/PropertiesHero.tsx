"use client";

import Image from "next/image";
import { useState } from "react";

interface PropertiesHeroProps {
  onSearch: (type: string, location: string) => void;
}

export default function PropertiesHero({ onSearch }: PropertiesHeroProps) {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">

        <Image
          src="/images/Banner.png"
          alt="Properties Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Explore Available Properties
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Browse verified residential, commercial, and plot opportunities
            selected for location, quality, and long-term value.
          </p>

          {/* Search Bar */}
          <div className="mt-6 md:mt-8 bg-white rounded-2xl p-3 shadow-xl max-w-4xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Property Type Dropdown */}
              <div className="relative flex-1">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full h-[56px] px-5 pr-12 rounded-xl border border-[#CFCFCF] text-[18px] text-[#421F00] appearance-none bg-white focus:outline-none cursor-pointer"
                >
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="plots">Plots</option>
                </select>

                <Image
                  src="/images/dropdown-arrow.png"
                  alt="Dropdown Arrow"
                  width={16}
                  height={16}
                  className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>

              {/* Location Dropdown */}
              <div className="relative flex-1">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full h-[56px] px-5 pr-12 rounded-xl border border-[#CFCFCF] text-[18px] text-[#421F00] appearance-none bg-white focus:outline-none cursor-pointer"
                >
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="plots">Plots</option>
                </select>

                <Image
                  src="/images/dropdown-arrow.png"
                  alt="Dropdown Arrow"
                  width={16}
                  height={16}
                  className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="h-[56px] px-10 rounded-lg bg-gradient-to-r from-[#A2630E] via-[#FFBA3E] to-[#A2630E] text-[#421F00] font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:opacity-95"
                onClick={() => {
                  onSearch(propertyType, location);
                }}
              >
                <Image
                  src="/images/search-icon.png"
                  alt="Search"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
