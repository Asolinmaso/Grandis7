import AboutGrandis7 from "@/components/AboutGrandis7";
import ContactUs from "@/components/ContactUs";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import PropertyCategories from "@/components/PropertyCategories";
import TrustedPartners from "@/components/TrustedPartners";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white max-md:bg-[#FAFAFA]">
      <ScrollReveal><HomeHero /></ScrollReveal>
      <ScrollReveal><AboutGrandis7 /></ScrollReveal>
      <ScrollReveal><PropertyCategories /></ScrollReveal>
      <ScrollReveal><FeaturedProperties /></ScrollReveal>
      <ScrollReveal><TrustedPartners /></ScrollReveal>
      <ScrollReveal><ContactUs /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
    </main>
  );
}
