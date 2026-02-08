"use client";

import Link from "next/link";

type AdminPageHeaderProps = {
  title: string;
  backHref: string;
};

export default function AdminPageHeader({ title, backHref }: AdminPageHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6 md:mb-8">
      <Link
        href={backHref}
        className="w-10 h-10 shrink-0 rounded-full border border-[#D9D9D9] bg-white flex items-center justify-center text-[#8F8F8F] hover:bg-gray-50 transition-colors"
        aria-label="Go back"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      <h1 className="text-2xl md:text-3xl font-semibold text-[#2E2E2E]">
        {title}
      </h1>
    </div>
  );
}
