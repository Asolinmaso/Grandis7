import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="w-full pt-2 pb-16 lg:pt-4 lg:pb-20 max-md:bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-12 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center max-md:flex max-md:flex-col max-md:text-center">
          <div className="space-y-4 lg:space-y-6 max-md:flex max-md:flex-col max-md:items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight max-md:text-[40px] max-md:leading-[54px] max-md:text-[#2E2E2E]">
              Looking for the Right Property?
            </h2>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg max-md:text-[20px] max-md:leading-[27px] max-md:text-[#686868] max-md:max-w-[344px]">
              Let our team help you find a property that fits your lifestyle or
              investment plans.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg text-[#421F00] font-normal text-[20px] leading-[27px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity max-md:w-fit"
              style={{
                background:
                  "linear-gradient(270deg, #A2630E 0%, #FFBA3E 28.11%, #A2630E 54.62%)",
              }}
            >
              Contact Us
            </a>
          </div>

          <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] max-md:h-[251px] max-md:order-last">
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
