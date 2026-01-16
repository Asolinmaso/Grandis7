import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Main Content Section */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
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
