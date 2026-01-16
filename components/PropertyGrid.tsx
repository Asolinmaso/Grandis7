"use client";

import Image from "next/image";
import { useState } from "react";

const allProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    type: "Residential",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Luxury_villa.png",
  },
  {
    id: 2,
    title: "2 BHK",
    type: "Residential",
    location: "Baner, Pune",
    image: "/images/worth_exploring/2BHK.png",
  },
  {
    id: 3,
    title: "Premium Office Space",
    type: "Commercial",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Commercial_space.png",
  },
  {
    id: 4,
    title: "1000sqft Open Plot",
    type: "Plots",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Luxury_villa.png",
  },
  {
    id: 5,
    title: "3 BHK",
    type: "Residential",
    location: "Baner, Pune",
    image: "/images/worth_exploring/2BHK.png",
  },
  {
    id: 6,
    title: "2000sqft Open Plot",
    type: "Plots",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Commercial_space.png",
  },
  {
    id: 7,
    title: "Luxury Villa",
    type: "Residential",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Luxury_villa.png",
  },
  {
    id: 8,
    title: "Commercial Space",
    type: "Commercial",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Commercial_space.png",
  },
  {
    id: 9,
    title: "4 BHK",
    type: "Residential",
    location: "Baner, Pune",
    image: "/images/worth_exploring/2BHK.png",
  },
];

export default function PropertyGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;
  const totalPages = Math.ceil(allProperties.length / propertiesPerPage);

  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const currentProperties = allProperties.slice(startIndex, endIndex);

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Property Image */}
              <div className="relative w-full h-[250px] lg:h-[300px]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {property.type} | {property.location}
                </p>
                <button className="w-full py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
            aria-label="Previous page"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-colors ${
                currentPage === page
                  ? "bg-[#421F00] text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
            aria-label="Next page"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
