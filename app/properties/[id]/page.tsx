"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";

interface Property {
  _id: string;
  name: string;
  type: string;
  area: string;
  configuration: string;
  status: string;
  price: string;
  description: string;
  amenities: string[];
  images: string[];
  address: string;
  city: string;
  state: string;
  pincode: string;
}

const defaultImages = [
  "/images/worth_exploring/Luxury_villa.png",
  "/images/worth_exploring/Luxury_villa.png",
  "/images/worth_exploring/Luxury_villa.png",
  "/images/worth_exploring/Luxury_villa.png",
  "/images/worth_exploring/Luxury_villa.png",
];

export default function PropertyDetailPage() {
  const params = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    contact: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (params.id) {
      fetchProperty();
    }
  }, [params.id]);

  const fetchProperty = async () => {
    try {
      const response = await fetch(`/api/properties/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setProperty(data);
      }
    } catch (error) {
      console.error("Error fetching property:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We'll get back to you shortly.");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <p className="text-[#686868] text-2xl">Loading property details...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <p className="text-[#686868] text-2xl">Property not found</p>
      </div>
    );
  }

  const images =
    property.images && property.images.length > 0
      ? property.images
      : defaultImages;
  const mainImage = images[0];
  const gridImages = [images[1], images[2], images[3], images[4]].map(
    (img, i) => img || images[0]
  );

  const fullAddress = `${property.address}, ${property.city}, ${property.state} – ${property.pincode}`;

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[100px] pt-6 pb-16">
        {/* Property Title - Figma: 48px, line-height 65px, font-weight 500, #2E2E2E */}
        <h1
          className="text-3xl sm:text-4xl md:text-[48px] font-medium leading-tight mb-8"
          style={{ color: "#2E2E2E", lineHeight: "65px" }}
        >
          {property.name}
        </h1>

        {/* Image Gallery - Figma: 1 large (567x502) + 4 in 2x2 (310x239), bg #DFDDDB, rounded-3xl */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          <div className="flex-1 min-h-[280px] sm:min-h-[360px] lg:min-h-0 lg:w-[567px] lg:h-[502px] rounded-3xl overflow-hidden bg-[#DFDDDB] relative">
            <Image
              src={mainImage}
              alt={property.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-[628px]">
            {gridImages.map((src, index) => (
              <div
                key={index}
                className="aspect-[310/239] rounded-3xl overflow-hidden bg-[#DFDDDB] relative"
              >
                <Image
                  src={src}
                  alt={`${property.name} ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Specs Row - Figma: flex row, gap 80px, label 32px #2E2E2E, value 24px #686868 */}
        <div className="flex flex-wrap gap-8 lg:gap-20 mb-10">
          <div className="flex flex-col gap-3">
            <p
              className="text-2xl md:text-[32px] font-medium leading-[44px]"
              style={{ color: "#2E2E2E" }}
            >
              Property Type
            </p>
            <p
              className="text-xl md:text-2xl leading-[33px]"
              style={{ color: "#686868" }}
            >
              {property.type}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p
              className="text-2xl md:text-[32px] font-medium leading-[44px]"
              style={{ color: "#2E2E2E" }}
            >
              Configuration
            </p>
            <p
              className="text-xl md:text-2xl leading-[33px]"
              style={{ color: "#686868" }}
            >
              {property.configuration}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p
              className="text-2xl md:text-[32px] font-medium leading-[44px]"
              style={{ color: "#2E2E2E" }}
            >
              Area
            </p>
            <p
              className="text-xl md:text-2xl leading-[33px]"
              style={{ color: "#686868" }}
            >
              {property.area} sq.ft
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p
              className="text-2xl md:text-[32px] font-medium leading-[44px]"
              style={{ color: "#2E2E2E" }}
            >
              Status
            </p>
            <p
              className="text-xl md:text-2xl leading-[33px]"
              style={{ color: "#686868" }}
            >
              {property.status}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p
              className="text-2xl md:text-[32px] font-medium leading-[44px]"
              style={{ color: "#2E2E2E" }}
            >
              Price
            </p>
            <p
              className="text-xl md:text-2xl leading-[33px]"
              style={{ color: "#686868" }}
            >
              {property.price || "On Request"}
            </p>
          </div>
        </div>

        {/* Two columns: Left content + Right form */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_537px] gap-8 lg:gap-12 items-start">
          {/* Left Column - Overview, Amenities, Location */}
          <div className="flex flex-col gap-10">
            {/* Property Overview */}
            <div className="flex flex-col gap-3">
              <h2
                className="text-2xl md:text-[32px] font-medium leading-[44px]"
                style={{ color: "#2E2E2E" }}
              >
                Property Overview
              </h2>
              <p
                className="text-xl md:text-2xl leading-[33px]"
                style={{ color: "#686868" }}
              >
                {property.description}
              </p>
            </div>

            {/* Amenities - Figma: tags with border 1px #BDBDBD, rounded-lg, text 24px #686868 */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="flex flex-col gap-3">
                <h2
                  className="text-2xl md:text-[32px] font-medium leading-[44px]"
                  style={{ color: "#2E2E2E" }}
                >
                  Amenities
                </h2>
                <div className="flex flex-wrap gap-3">
                  {property.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-4 py-3 border rounded-lg text-xl md:text-2xl leading-[33px]"
                      style={{
                        borderColor: "#BDBDBD",
                        color: "#686868",
                      }}
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            <div className="flex flex-col gap-3">
              <h2
                className="text-2xl md:text-[32px] font-medium leading-[44px]"
                style={{ color: "#2E2E2E" }}
              >
                Location
              </h2>
              <p
                className="text-xl md:text-2xl leading-[33px]"
                style={{ color: "#686868" }}
              >
                {fullAddress}
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form Card - Figma: white, border #D9D9D9, shadow, rounded-3xl, 24px padding */}
          <div className="lg:sticky lg:top-24">
            <div
              className="bg-white rounded-3xl p-6 border shadow-xl"
              style={{
                borderColor: "#D9D9D9",
                boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
              }}
            >
              <h2
                className="text-2xl font-semibold leading-[33px] text-center mb-3"
                style={{ color: "#421F00" }}
              >
                Interested in This Property?
              </h2>
              <p
                className="text-base leading-[22px] text-center mb-6"
                style={{ color: "#686868" }}
              >
                Our advisors will help you with complete details, availability,
                and site visit arrangements.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border text-base placeholder:normal"
                  style={{
                    borderColor: "#686868",
                    color: "#2E2E2E",
                  }}
                  placeholder="Name"
                />

                <div
                  className="flex items-center gap-2 rounded-lg border px-4 py-2.5"
                  style={{ borderColor: "#686868" }}
                >
                  <span className="text-base" style={{ color: "#686868" }}>
                    +91
                  </span>
                  <span className="w-px h-5 bg-[#686868]" />
                  <input
                    type="tel"
                    required
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="flex-1 min-w-0 py-0.5 text-base outline-none bg-transparent"
                    style={{ color: "#2E2E2E" }}
                    placeholder="Contact"
                  />
                </div>

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border text-base"
                  style={{
                    borderColor: "#686868",
                    color: "#2E2E2E",
                  }}
                  placeholder="E-mail"
                />

                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border resize-none text-base"
                  style={{
                    borderColor: "#686868",
                    color: "#2E2E2E",
                  }}
                  placeholder="Message"
                />

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-medium text-base leading-6 transition-opacity hover:opacity-90"
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
        </div>
      </div>

      <Footer />
    </main>
  );
}
