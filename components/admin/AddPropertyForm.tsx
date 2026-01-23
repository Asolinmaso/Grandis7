"use client";

import { useState } from "react";
import Image from "next/image";

export default function AddPropertyForm() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    area: "",
    configuration: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    status: "",
    price: "On Request",
    description: "",
  });

  const [amenities, setAmenities] = useState<string[]>([]);
  const [amenityInput, setAmenityInput] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

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

  const handleAddAmenity = () => {
    if (amenityInput.trim() && !amenities.includes(amenityInput.trim())) {
      setAmenities([...amenities, amenityInput.trim()]);
      setAmenityInput("");
    }
  };

  const handleRemoveAmenity = (index: number) => {
    setAmenities(amenities.filter((_, i) => i !== index));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    setUploading(true);
    const files = Array.from(e.target.files);

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "grandis7_properties");

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setImages([...images, data.secure_url]);
        }
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Error uploading images. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          amenities,
          images,
        }),
      });

      if (response.ok) {
        alert("Property created successfully!");
        // Reset form
        setFormData({
          name: "",
          type: "",
          area: "",
          configuration: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          status: "",
          price: "On Request",
          description: "",
        });
        setAmenities([]);
        setImages([]);
      } else {
        alert("Error creating property. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating property. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 md:mb-8">Add Property</h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* Name */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter Property Name"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              placeholder="Enter Property Type"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>

          {/* Area */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Area
            </label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
              placeholder="Enter Property Area in Sqft"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>

          {/* Configuration */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Configuration
            </label>
            <input
              type="text"
              name="configuration"
              value={formData.configuration}
              onChange={handleChange}
              required
              placeholder="Enter Configuration"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter Address"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter City"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder="Enter State"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              placeholder="Enter Pincode"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] bg-white text-sm md:text-base"
            >
              <option value="">Select Status</option>
              <option value="available">Available</option>
              <option value="sold">Sold</option>
              <option value="reserved">Reserved</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="On Request"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Enter Description"
            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] resize-none text-sm md:text-base"
          />
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amenities
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={amenityInput}
              onChange={(e) => setAmenityInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddAmenity();
                }
              }}
              placeholder="Add Amenities"
              className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#421F00] text-sm md:text-base"
            />
            <button
              type="button"
              onClick={handleAddAmenity}
              className="px-4 md:px-6 py-2 md:py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors text-sm md:text-base"
            >
              +
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <span
                key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-gray-700 flex items-center gap-2 text-xs md:text-sm"
              >
                {amenity}
                <button
                  type="button"
                  onClick={() => handleRemoveAmenity(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Upload Images */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Property Images
          </label>
          <div className="mb-3">
            <label className="inline-block px-4 md:px-6 py-2 md:py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors cursor-pointer text-sm md:text-base">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
              {uploading ? "Uploading..." : "Upload File"}
            </label>
          </div>
          <div className="flex flex-wrap gap-2">
            {images.map((image, index) => (
              <span
                key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-gray-700 flex items-center gap-2 text-xs md:text-sm"
              >
                Image{index + 1}.jpg
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-6 md:px-8 py-2 md:py-3 bg-[#421F00] text-white rounded-lg font-semibold hover:bg-[#4a2500] transition-colors text-sm md:text-base"
        >
          Create Property
        </button>
      </form>
    </div>
  );
}
