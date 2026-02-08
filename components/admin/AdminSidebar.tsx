"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/admin/property") return pathname === "/admin/property";
    if (path === "/admin/property/add") return pathname === "/admin/property/add";
    if (path === "/admin/career") return pathname === "/admin/career";
    if (path === "/admin/career/add") return pathname === "/admin/career/add";
    return pathname === path;
  };

  const linkClass = (path: string) =>
    `block px-4 py-3 rounded-lg transition-colors ${
      isActive(path)
        ? "bg-[#FFBA3E]/20 text-[#FFBA3E] font-semibold"
        : "text-white/90 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#421F00] text-white rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static w-64 shrink-0 bg-[#421F00] min-h-screen p-6 flex flex-col z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Link
          href="/admin/property"
          className="mb-8"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo.png"
              alt="Grandis7 Logo"
              width={80}
              height={44}
              className="h-auto mb-2"
            />
          </div>
        </Link>

        <nav className="flex-1 space-y-1">
          <Link href="/admin/property" onClick={() => setIsMobileMenuOpen(false)} className={linkClass("/admin/property")}>
            Properties
          </Link>
          <Link href="/admin/property/add" onClick={() => setIsMobileMenuOpen(false)} className={linkClass("/admin/property/add")}>
            Add Property
          </Link>
          <Link href="/admin/career" onClick={() => setIsMobileMenuOpen(false)} className={linkClass("/admin/career")}>
            Career
          </Link>
          <Link href="/admin/career/add" onClick={() => setIsMobileMenuOpen(false)} className={linkClass("/admin/career/add")}>
            Add Career
          </Link>
        </nav>
      </aside>
    </>
  );
}
