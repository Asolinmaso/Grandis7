"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    contact: "",
    email: "",
    propertyType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We'll get back to you shortly.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="bg-white rounded-[16px] p-6 w-full"
      style={{
        border: "1px solid #D9D9D9",
        boxShadow: "-10px 10px 50px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h2
        className="text-2xl font-semibold leading-[33px] text-center mb-6"
        style={{ color: "#421F00" }}
      >
        Enquiry Form
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-[8px] border text-base leading-[22px] outline-none focus:ring-2 focus:ring-[#421F00]"
          style={{ borderColor: "#686868", color: "#2E2E2E" }}
          placeholder="Name"
        />
        <div
          className="flex items-center gap-2.5 rounded-[8px] border border-[#686868] px-4 py-2.5"
        >
          <span className="text-base leading-[22px] text-[#686868]">+91</span>
          <span className="w-px h-5 bg-[#686868]" />
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="flex-1 min-w-0 text-base leading-[22px] outline-none bg-transparent text-[#2E2E2E]"
            placeholder="Contact"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-[8px] border border-[#686868] text-base leading-[22px] outline-none focus:ring-2 focus:ring-[#421F00] text-[#2E2E2E]"
          placeholder="E-mail"
        />
        <div className="relative">
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-[8px] border border-[#686868] text-base leading-[22px] outline-none focus:ring-2 focus:ring-[#421F00] appearance-none bg-white"
            style={{
              color: formData.propertyType ? "#2E2E2E" : "#686868",
            }}
          >
            <option value="">Property Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="plots">Plots</option>
          </select>
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-[5px] h-[10px]"
            viewBox="0 0 5 10"
            fill="none"
          >
            <path d="M1 1L4 5L1 9" stroke="#2E2E2E" strokeWidth="1.5" />
          </svg>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2.5 rounded-[8px] border border-[#686868] resize-none text-base leading-[22px] outline-none focus:ring-2 focus:ring-[#421F00] text-[#2E2E2E]"
          placeholder="Message"
        />
        <button
          type="submit"
          className="w-[94px] py-3 px-[18px] rounded-[8px] font-medium text-base leading-6 text-[#421F00] transition-opacity hover:opacity-90"
          style={{
            background:
              "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
