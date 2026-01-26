import AboutGrandis7 from "@/components/AboutGrandis7";
import ContactUs from "@/components/ContactUs";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import PropertyCategories from "@/components/PropertyCategories";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <AboutGrandis7 />
      <PropertyCategories />
      <FeaturedProperties />
      <ContactUs />
      <Footer />
    </main>
  );
}
