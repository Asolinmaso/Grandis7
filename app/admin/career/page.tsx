"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type Job = {
  _id: string;
  jobTitle: string;
  location: string;
  experience: string;
  shortDescription: string;
};

export default function AdminCareerListPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(Array.isArray(data) ? data : []))
      .catch(() => setJobs([]))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      if (res.ok) setJobs((prev) => prev.filter((j) => j._id !== id));
      else alert("Failed to delete job.");
    } catch {
      alert("Failed to delete job.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <AdminPageHeader title="Career" backHref="/admin/career" />

      {loading ? (
        <p className="text-[#686868]">Loading...</p>
      ) : jobs.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#D9D9D9] p-8 text-center text-[#686868]">
          No career listings yet.{" "}
          <Link href="/admin/career/add" className="text-[#421F00] font-medium hover:underline">Add Career</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job._id} className="bg-white rounded-2xl border border-[#D9D9D9] p-4 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-[#2E2E2E]">{job.jobTitle}</h3>
              <p className="text-sm text-[#686868]">{job.location} | {job.experience}</p>
              <p className="text-sm text-[#686868] line-clamp-3 flex-1">{job.shortDescription}</p>
              <div className="flex gap-2 mt-2">
                <Link href={`/admin/career/edit/${job._id}`} className="flex-1 py-2.5 rounded-lg bg-[#421F00] text-white text-center text-sm font-medium hover:opacity-90">Edit</Link>
                <button type="button" onClick={() => handleDelete(job._id)} disabled={deletingId === job._id} className="flex-1 py-2.5 rounded-lg bg-[#421F00] text-white text-sm font-medium hover:opacity-90 disabled:opacity-50">{deletingId === job._id ? "..." : "Delete"}</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
