"use client";

import { useState } from "react";

const jobListings = [
  {
    id: 1,
    title: "Property Sales Executive",
    location: "Pune",
    experience: "1-3 Years",
    description:
      "Drive property sales by connecting with potential buyers, showcasing properties, and closing deals. Build relationships and help clients find their perfect property match.",
  },
  {
    id: 2,
    title: "Channel Partner Manager",
    location: "Pune",
    experience: "2-4 Years",
    description:
      "Manage and grow our network of channel partners. Develop strategic partnerships, provide training and support, and ensure partner success in property sales.",
  },
  {
    id: 3,
    title: "Marketing & Content Executive",
    location: "Pune",
    experience: "1-3 Years",
    description:
      "Create compelling marketing content and campaigns to promote our properties. Manage digital marketing channels, social media, and content creation.",
  },
  {
    id: 4,
    title: "Property Sales Executive",
    location: "Chennai",
    experience: "1-3 Years",
    description:
      "Drive property sales by connecting with potential buyers, showcasing properties, and closing deals. Build relationships and help clients find their perfect property match.",
  },
  {
    id: 5,
    title: "Business Development Manager",
    location: "Pune",
    experience: "3-5 Years",
    description:
      "Identify new business opportunities, develop strategic partnerships, and expand our market presence. Lead initiatives to grow the company's portfolio and client base.",
  },
  {
    id: 6,
    title: "Customer Relationship Manager",
    location: "Pune",
    experience: "2-4 Years",
    description:
      "Maintain strong relationships with clients throughout their property journey. Provide exceptional customer service, address concerns, and ensure client satisfaction.",
  },
];

export default function OpenPositions() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const totalPages = Math.ceil(jobListings.length / jobsPerPage);

  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobListings.slice(startIndex, endIndex);

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Open Positions
        </h2>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {job.location} | {job.experience}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {job.description}
              </p>
              <button className="w-full py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors">
                Apply Now
              </button>
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
