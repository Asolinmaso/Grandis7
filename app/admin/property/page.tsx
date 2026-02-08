"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type Property = {
  _id: string;
  name: string;
  type: string;
  city: string;
  address?: string;
  images: string[];
  [key: string]: unknown;
};

export default function AdminPropertyListPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/properties?limit=50")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties || []);
      })
      .catch(() => setProperties([]))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/properties/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProperties((prev) => prev.filter((p) => p._id !== id));
      } else {
        alert("Failed to delete property.");
      }
    } catch {
      alert("Failed to delete property.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <AdminPageHeader title="Properties" backHref="/admin/property" />

      {loading ? (
        <p className="text-[#686868]">Loading properties...</p>
      ) : properties.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#D9D9D9] p-8 text-center text-[#686868]">
          No properties yet.{" "}
          <Link href="/admin/property/add" className="text-[#421F00] font-medium hover:underline">
            Add Property
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-[#D9D9D9] overflow-hidden shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-[#DFDDDB]">
                {property.images?.[0] ? (
                  <Image
                    src={property.images[0]}
                    alt={property.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[#686868] text-sm">
                    No image
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[#2E2E2E]">
                  {property.name}
                </h3>
                <p className="text-sm text-[#686868]">
                  {property.type} | {property.city}
                </p>
                <div className="flex gap-2 mt-2">
                  <Link
                    href={`/admin/property/edit/${property._id}`}
                    className="flex-1 py-2.5 rounded-lg bg-[#421F00] text-white text-center text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(property._id)}
                    disabled={deletingId === property._id}
                    className="flex-1 py-2.5 rounded-lg bg-[#421F00] text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {deletingId === property._id ? "..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
