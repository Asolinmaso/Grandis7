"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import EditJobForm from "@/components/admin/EditJobForm";

export default function AdminEditCareerPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [job, setJob] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch(() => setJob(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-[#686868]">Loading...</div>;
  if (!job || !id) return <div className="text-[#686868]">Job not found.</div>;

  return (
    <div>
      <AdminPageHeader title="Edit Career" backHref="/admin/career" />
      <EditJobForm jobId={id} initialData={job} onDeleted={() => router.push("/admin/career")} />
    </div>
  );
}
