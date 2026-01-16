import ContactUs from "@/components/ContactUs";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
import PropertyCategories from "@/components/PropertyCategories";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Grandis7
        </h1>
        <p className="text-center text-gray-600 mb-16">
          Scroll down to see the property categories, featured properties, contact section and footer design
        </p>
      </div>
      <PropertyCategories />
      <FeaturedProperties />
      <ContactUs />
      <Footer />
    </main>
  );
}
