"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import EditPropertyForm from "@/components/admin/EditPropertyForm";

export default function AdminEditPropertyPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [property, setProperty] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch(() => setProperty(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-[#686868]">Loading...</div>;
  if (!property || !id) return <div className="text-[#686868]">Property not found.</div>;

  return (
    <div>
      <AdminPageHeader title="Edit Property" backHref="/admin/property" />
      <EditPropertyForm propertyId={id} initialData={property} onDeleted={() => router.push("/admin/property")} />
    </div>
  );
}
