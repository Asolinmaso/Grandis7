"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#421F00] text-white rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static w-64 bg-[#421F00] min-h-screen p-6 flex flex-col z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo */}
        <Link
          href="/admin"
          className="mb-8"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo.png"
              alt="Grandis7 Logo"
              width={120}
              height={60}
              className="h-auto mb-2"
            />
            <span className="text-white text-lg font-semibold">GRANDIS7</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <Link
            href="/admin/property"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive("/admin/property")
                ? "bg-[#FFBA3E] text-[#421F00] font-semibold"
                : "text-white hover:bg-[#4a2500]"
            }`}
          >
            Property
          </Link>
          <Link
            href="/admin/career"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive("/admin/career")
                ? "bg-[#FFBA3E] text-[#421F00] font-semibold"
                : "text-white hover:bg-[#4a2500]"
            }`}
          >
            Career
          </Link>
        </nav>
      </aside>
    </>
  );
}
