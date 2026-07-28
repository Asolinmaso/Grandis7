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
    if (e.target.files?.[0]) setSelectedFile(e.target.files[0]);
  };

  const inputClass =
    "w-full px-3 py-3 rounded-lg border border-[#686868] text-[#2E2E2E] text-base leading-[22px] placeholder:text-[#686868] outline-none focus:ring-2 focus:ring-[#421F00]";

  return (
    <section className="w-full bg-[#FAFAFA] py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Image: align top with form */}
          <div className="relative w-full max-w-[419px] h-[320px] lg:h-[431px] rounded-2xl overflow-hidden bg-[#DFDDDB]">
            <Image
              src="/images/carreer_apply.png"
              alt="Apply to Grandis7"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right - Form: aligned to top */}
          <div className="min-w-0">
            <h2
              className="text-4xl md:text-[64px] font-medium leading-tight md:leading-[87px] text-[#2E2E2E] mb-3"
            >
              Apply to Grandis7
            </h2>
            <p
              className="text-xl md:text-2xl leading-[33px] text-[#686868] mb-6"
            >
              Interested in working with us? Share your details and our team
              will connect with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name | Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Name"
                />
                <div className="flex items-center rounded-lg border border-[#686868] overflow-hidden">
                  <span className="px-3 py-3 text-base leading-[22px] text-[#686868] border-r border-[#686868]">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="flex-1 min-w-0 px-3 py-3 text-base leading-[22px] text-[#2E2E2E] placeholder:text-[#686868] outline-none"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              {/* Row 2: Email | Job Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="jobPosition"
                  value={formData.jobPosition}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Job Position"
                />
              </div>

              {/* Message - full width */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className={`${inputClass} resize-none`}
                placeholder="Message"
              />

              {/* Upload + Submit */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1 rounded-lg border border-[#686868] p-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#686868] bg-white text-[#686868]"
                    >
                      Upload File
                    </button>

                    <span className="text-sm text-[#686868]">
                      {selectedFile ? selectedFile.name : "No File Chosen"}
                    </span>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-[130px] h-[52px] rounded-lg text-[#421F00] text-[18px]"
                    style={{
                      background:
                        "linear-gradient(270deg,#A2630E 0%,#FFBA3E 28.11%,#A2630E 54.62%)",
                      boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                    }}
                  >
                    Submit
                  </button>
                </div>

                <p className="text-xs text-[#686868]">
                  Drag & drop your file here (PDF, DOCX, JPG, PNG)
                  <br />
                  Max size: 5MB
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
