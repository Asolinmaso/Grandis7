import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import MissionQuote from "@/components/MissionQuote";
import PurposeSection from "@/components/PurposeSection";
import ServicesSection from "@/components/ServicesSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <PurposeSection />
      <MissionQuote />
      <ServicesSection />
      <Footer />
    </main>
  );
}
