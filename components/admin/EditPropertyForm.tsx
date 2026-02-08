"use client";

import { useState, useEffect } from "react";

const inputClass =
  "w-full px-3 py-3 rounded-lg border border-[#D9D9D9] text-[#2E2E2E] placeholder:text-[#686868] outline-none focus:ring-2 focus:ring-[#421F00] focus:border-[#421F00]";

type EditPropertyFormProps = {
  propertyId: string;
  initialData: Record<string, unknown>;
  onDeleted: () => void;
};

export default function EditPropertyForm({ propertyId, initialData, onDeleted }: EditPropertyFormProps) {
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
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setFormData({
      name: (initialData.name as string) ?? "",
      type: (initialData.type as string) ?? "",
      area: (initialData.area as string) ?? "",
      configuration: (initialData.configuration as string) ?? "",
      address: (initialData.address as string) ?? "",
      city: (initialData.city as string) ?? "",
      state: (initialData.state as string) ?? "",
      pincode: (initialData.pincode as string) ?? "",
      status: (initialData.status as string) ?? "",
      price: (initialData.price as string) ?? "On Request",
      description: (initialData.description as string) ?? "",
    });
    setAmenities(Array.isArray(initialData.amenities) ? (initialData.amenities as string[]) : []);
    setImages(Array.isArray(initialData.images) ? (initialData.images as string[]) : []);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddAmenity = () => {
    if (amenityInput.trim() && !amenities.includes(amenityInput.trim())) {
      setAmenities([...amenities, amenityInput.trim()]);
      setAmenityInput("");
    }
  };

  const handleRemoveAmenity = (i: number) => setAmenities(amenities.filter((_, index) => index !== i));

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setUploading(true);
    try {
      for (const file of Array.from(e.target.files)) {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("upload_preset", "grandis7_properties");
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        if (res.ok) {
          const data = await res.json();
          setImages((prev) => [...prev, data.secure_url]);
        }
      }
    } catch {
      alert("Error uploading images.");
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = (i: number) => setImages(images.filter((_, index) => index !== i));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, amenities, images }),
      });
      if (res.ok) {
        alert("Property updated successfully.");
      } else {
        alert("Failed to update property.");
      }
    } catch {
      alert("Failed to update property.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/properties/${propertyId}`, { method: "DELETE" });
      if (res.ok) onDeleted();
      else alert("Failed to delete property.");
    } catch {
      alert("Failed to delete property.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#D9D9D9] p-6 md:p-8 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter Property Name" className={inputClass} /></div>
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Type</label><input type="text" name="type" value={formData.type} onChange={handleChange} required placeholder="Enter Property Type" className={inputClass} /></div>
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Area</label><input type="text" name="area" value={formData.area} onChange={handleChange} required placeholder="Enter Property Area in Sqft" className={inputClass} /></div>
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Configuration</label><input type="text" name="configuration" value={formData.configuration} onChange={handleChange} required placeholder="Enter Configuration" className={inputClass} /></div>
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Address</label><input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="Enter Address" className={inputClass} /></div>
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">City</label><input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="Enter City" className={inputClass} /></div>
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">State</label><input type="text" name="state" value={formData.state} onChange={handleChange} required placeholder="Enter State" className={inputClass} /></div>
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Pincode</label><input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required placeholder="Enter Pincode" className={inputClass} /></div>
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Status</label><select name="status" value={formData.status} onChange={handleChange} required className={inputClass}><option value="">Select Status</option><option value="available">Available</option><option value="sold">Sold</option><option value="reserved">Reserved</option></select></div>
        <div><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Price</label><input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="On Request" className={inputClass} /></div>
      </div>
      <div className="mb-6"><label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Description</label><textarea name="description" value={formData.description} onChange={handleChange} required rows={4} placeholder="Enter Description" className={`${inputClass} resize-none`} /></div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Amenities</label>
        <div className="flex flex-wrap gap-2 items-center mb-2">
          <input type="text" value={amenityInput} onChange={(e) => setAmenityInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddAmenity(); } }} placeholder="Add Amenities" className="flex-1 min-w-[160px] max-w-xs px-3 py-2.5 rounded-lg border border-[#D9D9D9] placeholder:text-[#686868] outline-none focus:ring-2 focus:ring-[#421F00]" />
          <button type="button" onClick={handleAddAmenity} className="w-10 h-10 shrink-0 rounded-lg border border-[#D9D9D9] bg-white flex items-center justify-center text-[#2E2E2E] hover:bg-gray-50 text-lg font-medium" aria-label="Add amenity">+</button>
        </div>
        <div className="flex flex-wrap gap-2">{amenities.map((a, i) => (<span key={i} className="px-3 py-1.5 bg-gray-100 rounded-full text-[#2E2E2E] text-sm flex items-center gap-1.5">{a}<button type="button" onClick={() => handleRemoveAmenity(i)} className="text-[#686868] hover:text-red-600">×</button></span>))}</div>
      </div>
      <div className="mb-8">
        <label className="block text-sm font-medium text-[#2E2E2E] mb-1.5">Upload Property Images</label>
        <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#D9D9D9] bg-white cursor-pointer hover:bg-gray-50">
          <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
          <svg className="w-5 h-5 text-[#686868]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
          <span className="text-sm text-[#686868]">{uploading ? "Uploading..." : "Upload File"}</span>
        </label>
        <div className="flex flex-wrap gap-2 mt-2">{images.map((_, i) => (<span key={i} className="px-3 py-1.5 bg-gray-100 rounded-full text-[#2E2E2E] text-sm flex items-center gap-1.5">Image{i + 1}.jpg<button type="button" onClick={() => handleRemoveImage(i)} className="text-[#686868] hover:text-red-600">×</button></span>))}</div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="submit" disabled={submitting} className="py-3 px-6 rounded-lg font-medium text-[#421F00] transition-opacity hover:opacity-90 disabled:opacity-50" style={{ background: "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)" }}>{submitting ? "Saving..." : "Edit Property"}</button>
        <button type="button" onClick={handleDelete} disabled={deleting} className="py-3 px-6 rounded-lg font-medium bg-[#421F00] text-white hover:opacity-90 disabled:opacity-50">{deleting ? "Deleting..." : "Delete Property"}</button>
      </div>
    </form>
  );
}
