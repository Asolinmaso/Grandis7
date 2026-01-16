import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
            className="text-[#F5F5F5] font-semibold text-sm md:text-base hover:text-[#FFBA3E] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#E5E5E5] font-normal text-sm md:text-base hover:text-[#FFBA3E] transition-colors"
          >
            About
          </Link>
          <Link
            href="/properties"
            className="text-[#E5E5E5] font-normal text-sm md:text-base hover:text-[#FFBA3E] transition-colors"
          >
            Properties
          </Link>
          <Link
            href="/career"
            className="text-[#E5E5E5] font-normal text-sm md:text-base hover:text-[#FFBA3E] transition-colors"
          >
            Career
          </Link>
          <Link
            href="/contact"
            className="text-[#E5E5E5] font-normal text-sm md:text-base hover:text-[#FFBA3E] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
