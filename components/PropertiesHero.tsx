"use client";

import Image from "next/image";
import { useState } from "react";

export default function PropertiesHero() {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="relative w-full h-[500px] lg:h-[600px]">
      {/* Background Image - Replace with actual hero image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
        {/* Placeholder - Add your hero image at /images/properties_hero.png */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            Add hero image at /images/properties_hero.png
          </p>
        </div>
        {/* Uncomment when image is available:
        <Image
          src="/images/properties_hero.png"
          alt="Properties Hero"
          fill
          className="object-cover"
          priority
        />
        */}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Explore Available Properties
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Browse verified residential, commercial, and plot opportunities
            selected for location, quality, and long-term value.
          </p>

          {/* Search Bar */}
          <div className="mt-8 bg-white rounded-lg p-2 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Property Type Dropdown */}
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-700"
              >
                <option value="">Select Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="plots">Plots</option>
              </select>

              {/* Location Dropdown */}
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-700"
              >
                <option value="">Select Location</option>
                <option value="baner-pune">Baner, Pune</option>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
              </select>

              {/* Search Button */}
              <button
                className="px-8 py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors flex items-center justify-center gap-2"
                onClick={() => {
                  // Handle search
                  console.log("Search:", { propertyType, location });
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
