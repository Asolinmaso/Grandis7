import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section - City Skyline - shorter on mobile */}
      <div className="relative w-full h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[45vh] overflow-hidden">
        <Image
          src="/images/footer_img.png"
          alt="City Skyline"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Bottom Section - Content Area */}
      <div className="bg-[#421F00] w-full">
        <div className="max-w-7xl mx-auto px-12 lg:px-14 xl:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left Column - Company Info & Social Media */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex flex-col items-start">
                <Image
                  src="/images/logo.png"
                  alt="Grandis7 Logo"
                  width={150}
                  height={80}
                  className="mb-4"
                />
              </div>

              {/* Company Description - mobile: 20px white */}
              <p className="text-white text-sm leading-relaxed max-md:text-[20px] max-md:leading-[27px]">
                Grandis7 helps buyers and investors discover verified residential, commercial, and plot opportunities with clarity and trust.
              </p>

              {/* Follow Us - mobile: 24px white heading */}
              <div className="space-y-3">
                <h3 className="text-white text-base font-semibold max-md:text-[24px] max-md:leading-[33px]">
                  Follow Us -
                </h3>
                <div className="flex gap-4">
                  {/* Facebook Icon */}
                  <a
  href="#"
  aria-label="Facebook"
  className="transition-transform duration-300 hover:scale-110"
>
                    <Image
                      src="/images/facebook.png"
                      alt="Facebook"
                      width={40}
                      height={40}
                    />
                  </a>

                  {/* LinkedIn Icon */}
                  <a
  href="#"
  aria-label="Facebook"
  className="transition-transform duration-300 hover:scale-110"
>
                    <Image
                      src="/images/linkedin.png"
                      alt="LinkedIn"
                      width={40}
                      height={40}
                    />
                  </a>

                  {/* Instagram Icon */}
                  <a
  href="#"
  aria-label="Facebook"
  className="transition-transform duration-300 hover:scale-110"
>
                    <Image
                      src="/images/instagram.png"
                      alt="Instagram"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Column - Quick Links - mobile: 24px gold heading, 20px white links */}
            <div className="space-y-6">
              <h3 className="text-white text-[18px] font-semibold mb-6">
  Quick Links
</h3>
              <nav className="flex flex-col space-y-2 max-md:space-y-4">
                <a
                  href="/"
                  className="text-white text-[16px] hover:text-gray-300 transition-colors max-md:text-[20px] max-md:leading-[27px]"
                >
                  Home
                </a>
                <a href="/about" className="text-white text-[16px] hover:text-gray-300 transition-colors max-md:text-[20px] max-md:leading-[27px]">About</a>
                <a href="/properties" className="text-white text-[16px] hover:text-gray-300 transition-colors max-md:text-[20px] max-md:leading-[27px]">Properties</a>
                <a
  href="#services"
  className="text-white text-[16px] font-normal hover:text-gray-300 transition-colors"
>
  Services
</a>
                <a href="/career" className="text-white text-[16px] hover:text-gray-300 transition-colors max-md:text-[20px] max-md:leading-[27px]">Career</a>
                <a href="/contact" className="text-white text-[16px] hover:text-gray-300 transition-colors max-md:text-[20px] max-md:leading-[27px]">Contact</a>
              </nav>
            </div>

            {/* Right Column - Contact - mobile: 24px #FCDE94 heading, 20px white */}
            <div className="space-y-4">
              <h3 className="text-white text-xl font-bold mb-4 max-md:text-[24px] max-md:leading-[33px]">
                Contact
              </h3>
              <div className="space-y-4 max-md:space-y-4">
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/phone.png"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />                  <span className="text-white text-sm max-md:text-[20px] max-md:leading-[27px]">+91 - 9600663389</span>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/mail.png"
                    alt="Mail"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />                  <span className="text-white text-sm max-md:text-[20px] max-md:leading-[27px]">contact@grandis7.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/location.png"
                    alt="Location"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />                  <span className="text-white text-sm max-md:text-[20px] max-md:leading-[30px]">Corporate Office: No.18, Velan Avenue, Rice Mill Road, Kandigai, Chennai – 600127</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-12 lg:px-14 xl:px-16 py-4">
            <p className="text-white/80 text-sm text-center max-md:text-[16px] max-md:leading-[28px]">
              © 2026 Grandis7. All rights reserved. | Designed & Developed By Manvian
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
