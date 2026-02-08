"use client";

import { useState } from "react";
import AdminPageHeader from "./AdminPageHeader";

const inputClass =
  "w-full px-3 py-3 rounded-lg border border-[#D9D9D9] text-[#2E2E2E] placeholder:text-[#686868] outline-none focus:ring-2 focus:ring-[#421F00] focus:border-[#421F00]";

export default function AddJobForm() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    experience: "",
    location: "",
    shortDescription: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Job position created successfully!");
        setFormData({ jobTitle: "", experience: "", location: "", shortDescription: "" });
      } else {
        alert("Error creating job. Please try again.");
      }
    } catch {
      alert("Error creating job. Please try again.");
    }
  };

  return (
    <div>
      <AdminPageHeader title="Add Career" backHref="/admin/career" />

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#D9D9D9] p-6 md:p-8 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Job Title</label>
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required placeholder="Enter Job Title" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Experience</label>
            <input type="text" name="experience" value={formData.experience} onChange={handleChange} required placeholder="e.g. 1-3 Years" className={inputClass} />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="Enter Location" className={inputClass} />
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Short Description</label>
          <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} required rows={5} placeholder="Enter Short Description" className={`${inputClass} resize-none`} />
        </div>
        <button type="submit" className="w-full py-3 px-6 rounded-lg font-medium text-[#421F00] transition-opacity hover:opacity-90" style={{ background: "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)" }}>
          Create Job
        </button>
      </form>
    </div>
  );
}
