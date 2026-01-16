import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text and Button */}
          <div className="space-y-6 lg:space-y-8">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Looking for the Right Property?
            </h2>

            {/* Body Text */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
              Let our team help you find a property that fits your lifestyle or
              investment plans.
            </p>

            {/* Contact Us Button */}
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold text-base md:text-lg transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Right Side - House Image */}
          <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
              src="/images/Contact_Us.png"
              alt="Modern House"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
