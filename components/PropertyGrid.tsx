"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Property {
  _id: string;
  name: string;
  type: string;
  city: string;
  images: string[];
  address?: string;
}

interface PropertyGridProps {
  searchQuery?: string;
  propertyType?: string;
  location?: string;
}

export default function PropertyGrid({
  searchQuery = "",
  propertyType = "",
  location = "",
}: PropertyGridProps) {
  const router = useRouter();
  const [properties, setProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [searchQuery, propertyType, location]);

  useEffect(() => {
    fetchProperties();
  }, [currentPage, searchQuery, propertyType, location]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "9",
      });

      if (searchQuery) params.append("search", searchQuery);
      if (propertyType) params.append("type", propertyType);
      if (location) params.append("location", location);

      const response = await fetch(`/api/properties?${params.toString()}`);
      const data = await response.json();

      if (response.ok) {
        setProperties(data.properties);
        setTotalPages(data.pagination.totalPages);
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (id: string) => {
    router.push(`/properties/${id}`);
  };

  if (loading) {
    return (
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-gray-600">Loading properties...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {properties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No properties found.</p>
          </div>
        ) : (
          <>
            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {properties.map((property) => (
                <div
                  key={property._id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Property Image */}
                  <div className="relative w-full h-[250px] lg:h-[300px]">
                    <Image
                      src={
                        property.images && property.images.length > 0
                          ? property.images[0]
                          : "/images/worth_exploring/Luxury_villa.png"
                      }
                      alt={property.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Property Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {property.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {property.type} | {property.city}
                    </p>
                    <button
                      onClick={() => handleViewDetails(property._id)}
                      className="w-full py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

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
