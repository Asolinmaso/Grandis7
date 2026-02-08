import ApplyForm from "@/components/ApplyForm";
import CareerHero from "@/components/CareerHero";
import Footer from "@/components/Footer";
import OpenPositions from "@/components/OpenPositions";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <CareerHero />
      <OpenPositions />
      <ApplyForm />
      <Footer />
    </main>
  );
}
