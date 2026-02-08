"use client";

import { useState } from "react";

const jobListings = [
  {
    id: 1,
    title: "Property Sales Executive",
    location: "Pune",
    experience: "1-3 Years",
    description:
      "Engage with clients, present properties, and support buyers throughout the sales process.",
  },
  {
    id: 2,
    title: "Channel Partner Manager",
    location: "Pune",
    experience: "1-3 Years",
    description:
      "Develop & manage channel partner relationships to generate leads & expand reach.",
  },
  {
    id: 3,
    title: "Marketing & Content Executive",
    location: "Pune",
    experience: "1-3 Years",
    description:
      "Create digital content, manage campaigns, and support brand visibility across platforms.",
  },
  {
    id: 4,
    title: "Property Sales Executive",
    location: "Pune",
    experience: "1-3 Years",
    description:
      "Engage with clients, present properties, and support buyers throughout the sales process.",
  },
  {
    id: 5,
    title: "Channel Partner Manager",
    location: "Pune",
    experience: "1-3 Years",
    description:
      "Develop & manage channel partner relationships to generate leads & expand reach.",
  },
  {
    id: 6,
    title: "Marketing & Content Executive",
    location: "Pune",
    experience: "1-3 Years",
    description:
      "Create digital content, manage campaigns, and support brand visibility across platforms.",
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
    <section className="w-full bg-[#FAFAFA] py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[100px]">
        <h2
          className="text-4xl md:text-[64px] font-semibold leading-tight md:leading-[87px] text-[#2E2E2E] mb-8"
        >
          Open Positions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mb-12">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-4 flex flex-col gap-4 border border-[#D9D9D9]"
            >
              <h3
                className="text-2xl md:text-[32px] font-semibold leading-[44px] text-[#2E2E2E]"
              >
                {job.title}
              </h3>
              <p className="text-xl md:text-2xl leading-[33px] text-[#686868]">
                {job.location} | {job.experience}
              </p>
              <p className="text-xl md:text-2xl leading-[33px] text-[#686868] flex-1">
                {job.description}
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center py-3 px-6 rounded-lg font-normal text-[20px] leading-[27px] text-[#421F00] w-fit hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#D9D9D9] bg-white text-[#8F8F8F] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            aria-label="Previous page"
          >
            <svg className="w-3 h-6" fill="none" viewBox="0 0 12 24">
              <path
                d="M10 4L4 12l6 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-base font-medium leading-6 transition-opacity ${
                currentPage === page
                  ? "text-[#421F00] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                  : "bg-white border border-[#D9D9D9] text-[#8F8F8F] hover:bg-gray-50"
              }`}
              style={
                currentPage === page
                  ? {
                      background:
                        "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
                    }
                  : undefined
              }
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#D9D9D9] bg-white text-[#8F8F8F] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors rotate-180"
            aria-label="Next page"
          >
            <svg className="w-3 h-6" fill="none" viewBox="0 0 12 24">
              <path
                d="M10 4L4 12l6 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
