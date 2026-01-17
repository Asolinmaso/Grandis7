"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#421F00] py-3 md:py-4 px-4 sm:px-6 lg:px-8 shadow-md">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center z-50">
          <Image
            src="/images/logo.png"
            alt="Grandis7 Logo"
            width={100}
            height={50}
            className="h-auto w-20 md:w-28"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            href="/"
            className={`text-sm xl:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm xl:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/about")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            About
          </Link>
          <Link
            href="/properties"
            className={`text-sm xl:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/properties")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            Properties
          </Link>
          <Link
            href="/career"
            className={`text-sm xl:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/career")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            Career
          </Link>
          <Link
            href="/contact"
            className={`text-sm xl:text-base hover:text-[#FFBA3E] transition-colors ${
              isActive("/contact")
                ? "text-[#F5F5F5] font-semibold"
                : "text-[#E5E5E5] font-normal"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/properties"
            className="px-4 xl:px-6 py-2 bg-[#FFBA3E] text-[#421F00] rounded-lg font-semibold hover:bg-[#FFD700] transition-colors text-sm xl:text-base whitespace-nowrap"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#421F00] shadow-lg border-t border-[#4a2500]">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 rounded-lg hover:bg-[#4a2500] transition-colors ${
                isActive("/")
                  ? "text-[#F5F5F5] font-semibold bg-[#4a2500]"
                  : "text-[#E5E5E5] font-normal"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 rounded-lg hover:bg-[#4a2500] transition-colors ${
                isActive("/about")
                  ? "text-[#F5F5F5] font-semibold bg-[#4a2500]"
                  : "text-[#E5E5E5] font-normal"
              }`}
            >
              About
            </Link>
            <Link
              href="/properties"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 rounded-lg hover:bg-[#4a2500] transition-colors ${
                isActive("/properties")
                  ? "text-[#F5F5F5] font-semibold bg-[#4a2500]"
                  : "text-[#E5E5E5] font-normal"
              }`}
            >
              Properties
            </Link>
            <Link
              href="/career"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 rounded-lg hover:bg-[#4a2500] transition-colors ${
                isActive("/career")
                  ? "text-[#F5F5F5] font-semibold bg-[#4a2500]"
                  : "text-[#E5E5E5] font-normal"
              }`}
            >
              Career
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 rounded-lg hover:bg-[#4a2500] transition-colors ${
                isActive("/contact")
                  ? "text-[#F5F5F5] font-semibold bg-[#4a2500]"
                  : "text-[#E5E5E5] font-normal"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/properties"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 bg-[#FFBA3E] text-[#421F00] rounded-lg font-semibold hover:bg-[#FFD700] transition-colors text-center mt-2"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
