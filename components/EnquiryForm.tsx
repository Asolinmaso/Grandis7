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
    // Handle form submission here
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
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
          {/* Placeholder - Add skyscraper image at /images/skyscraper.png */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 text-xs">Add skyscraper image</p>
          </div>
          {/* Uncomment when image is available:
          <Image
            src="/images/skyscraper.png"
            alt="Skyscraper"
            fill
            className="object-cover blur-sm"
          />
          */}
        </div>
      </div>

      {/* Form Card */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-900"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone with Country Code */}
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contact
            </label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-900 bg-white"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-900"
                placeholder="Enter your contact number"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-900"
              placeholder="Enter your email"
            />
          </div>

          {/* Property Type */}
          <div>
            <label
              htmlFor="propertyType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-900 bg-white"
            >
              <option value="">Select Property Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="plots">Plots</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-900 resize-none"
              placeholder="Enter your message"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
