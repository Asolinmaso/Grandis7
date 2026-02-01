import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Main Content Section */}
      <section className="w-full py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_482px] gap-8 lg:gap-12">
            {/* Left Side - Get in Touch */}
            <div>
              <GetInTouch />
            </div>

            {/* Right Side - Enquiry Form */}
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
