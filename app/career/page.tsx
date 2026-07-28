import ApplyForm from "@/components/ApplyForm";
import CareerHero from "@/components/CareerHero";
import Footer from "@/components/Footer";
import OpenPositions from "@/components/OpenPositions";
import ScrollReveal from "@/components/ScrollReveal";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <ScrollReveal><CareerHero /></ScrollReveal>
      <ScrollReveal><OpenPositions /></ScrollReveal>
      <ScrollReveal><ApplyForm /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
    </main>
  );
}
