"use client";

import Image from "next/image";
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
    <div className="relative w-full min-h-[822px] flex items-center justify-center">
      {/* Background Image Container - 482x822 */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/images/Contact_Us.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#DFDDDB",
        }}
      />

      {/* Form Card */}
      <div
        className="relative bg-white rounded-2xl p-6 mx-auto max-w-[503px] w-full"
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
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg border text-base outline-none focus:ring-2 focus:ring-[#421F00]"
            style={{
              borderColor: "#686868",
              color: "#2E2E2E",
            }}
            placeholder="Name"
          />

          {/* Contact - +91 | separator | input */}
          <div
            className="flex items-center gap-2.5 rounded-lg border px-4 py-2.5"
            style={{ borderColor: "#686868" }}
          >
            <span className="text-base" style={{ color: "#686868" }}>
              +91
            </span>
            <span className="w-px h-5 bg-[#686868]" />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="flex-1 min-w-0 text-base outline-none bg-transparent"
              style={{ color: "#2E2E2E" }}
              placeholder="Contact"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg border text-base outline-none focus:ring-2 focus:ring-[#421F00]"
            style={{
              borderColor: "#686868",
              color: "#2E2E2E",
            }}
            placeholder="E-mail"
          />

          {/* Property Type Dropdown */}
          <div className="relative">
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-lg border text-base outline-none focus:ring-2 focus:ring-[#421F00] appearance-none bg-white"
              style={{
                borderColor: "#686868",
                color: formData.propertyType ? "#2E2E2E" : "#686868",
              }}
            >
              <option value="">Property Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="plots">Plots</option>
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
            >
              <path d="M1 1L5 5L9 1" stroke="#2E2E2E" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border resize-none text-base outline-none focus:ring-2 focus:ring-[#421F00]"
            style={{
              borderColor: "#686868",
              color: "#2E2E2E",
            }}
            placeholder="Message"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[94px] py-3 px-[18px] rounded-lg font-medium text-base leading-6 transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
              color: "#421F00",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
