"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full bg-[#421F00] py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Grandis7 Logo"
            width={120}
            height={60}
            className="h-auto"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className={`text-sm md:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm md:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/about")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            About
          </Link>
          <Link
            href="/properties"
            className={`text-sm md:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/properties")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            Properties
          </Link>
          <Link
            href="/career"
            className={`text-sm md:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/career")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            Career
          </Link>
          <Link
            href="/contact"
            className={`text-sm md:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/contact")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
