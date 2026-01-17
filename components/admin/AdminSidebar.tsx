"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 bg-[#421F00] min-h-screen p-6 flex flex-col">
      {/* Logo */}
      <Link href="/admin" className="mb-8">
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
  );
}
