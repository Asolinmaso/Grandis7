import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import MissionQuote from "@/components/MissionQuote";
import PurposeSection from "@/components/PurposeSection";
import ServicesSection from "@/components/ServicesSection";
import InvestorsPartners from "@/components/InvestorsPartners";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <ScrollReveal><AboutHero /></ScrollReveal>
      <ScrollReveal><PurposeSection /></ScrollReveal>
      <ScrollReveal><MissionQuote /></ScrollReveal>
      <ScrollReveal><ServicesSection /></ScrollReveal>
      <ScrollReveal><InvestorsPartners /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
      </main>
  );
}