"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    countryCode: "+91",
    phone: "",
    jobPosition: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, selectedFile);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
              {/* Placeholder - Add person working image at /images/career_apply.png */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-sm">
                  Add person working image at /images/career_apply.png
                </p>
              </div>
              {/* Uncomment when image is available:
              <Image
                src="/images/career_apply.png"
                alt="Apply to Grandis7"
                fill
                className="object-cover"
              />
              */}
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apply to Grandis7
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Interested in working with us? Share your details and our team
              will connect with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
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

              {/* Phone and Job Position Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    +91 Phone Number
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
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-900"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="jobPosition"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Job Position
                  </label>
                  <input
                    type="text"
                    id="jobPosition"
                    name="jobPosition"
                    value={formData.jobPosition}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-gray-900"
                    placeholder="Enter job position"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload File
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={handleFileUploadClick}
                    className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Upload File
                  </button>
                  <span className="text-gray-600">
                    {selectedFile ? selectedFile.name : "No File Chosen"}
                  </span>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Drag & drop your file here (PDF, DOCX, JPG, PNG) Max size:
                  5MB
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
