import ApplyForm from "@/components/ApplyForm";
import CareerHero from "@/components/CareerHero";
import Footer from "@/components/Footer";
import OpenPositions from "@/components/OpenPositions";

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <CareerHero />
      <OpenPositions />
      <ApplyForm />
      <Footer />
    </main>
  );
}
