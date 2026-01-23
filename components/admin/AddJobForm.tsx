"use client";

import { useState } from "react";

export default function AddJobForm() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    experience: "",
    location: "",
    shortDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Job position created successfully!");
        // Reset form
        setFormData({
          jobTitle: "",
          experience: "",
          location: "",
          shortDescription: "",
        });
      } else {
        alert("Error creating job position. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating job position. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 md:mb-8">Add Job Position</h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* Job Title */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              placeholder="Enter Job Title"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              placeholder="Enter Experience"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter Location"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00]"
          />
        </div>

        {/* Short Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Enter Short Description"
            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] resize-none text-sm md:text-base"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-6 md:px-8 py-2 md:py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors text-sm md:text-base"
        >
          Create Job
        </button>
      </form>
    </div>
  );
}
