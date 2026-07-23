import AboutGrandis7 from "@/components/AboutGrandis7";
import ContactUs from "@/components/ContactUs";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import PropertyCategories from "@/components/PropertyCategories";
import TrustedPartners from "@/components/TrustedPartners";

export default function Home() {
  return (
    <main className="min-h-screen bg-white max-md:bg-[#FAFAFA]">
      <HomeHero />
      <AboutGrandis7 />
      <PropertyCategories />
      <FeaturedProperties />
      <TrustedPartners />
      <ContactUs />
      <Footer />
    </main>
  );
}
