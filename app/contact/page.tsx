import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Main Content Section: left = Get in Touch, right = form + image beside it */}
      <section className="w-full pt-6 pb-12 lg:pt-8 lg:pb-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,603px)] gap-8 lg:gap-10 items-start">
            {/* Left - Get in Touch */}
            <div className="lg:pt-[129px]">
              <ScrollReveal><GetInTouch /></ScrollReveal>
            </div>

            {/* Right - Form card + image column (image visible beside form) */}
            <div className="relative min-h-[520px] lg:min-h-[822px] w-full max-w-[985px] lg:w-[603px] lg:max-w-none">
              {/* Image column: 482px right-aligned on desktop, visible beside form */}
              <ScrollReveal>
                <div
                  className="absolute right-0 top-0 hidden lg:block w-[482px] h-[822px] rounded-2xl overflow-hidden"
                  style={{ backgroundColor: "#DFDDDB" }}
                >
                  <Image
                    src="/images/contact.png"
                    alt="City buildings"
                    fill
                    className="object-cover"
                    sizes="482px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                    }}
                  />
                </div>
              </ScrollReveal>
              {/* Form card: left-aligned so image shows to the right */}
              <div className="relative z-10 lg:absolute lg:left-0 lg:top-[140px] w-full max-w-[503px] mx-auto lg:mx-0">
                <ScrollReveal><EnquiryForm /></ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
