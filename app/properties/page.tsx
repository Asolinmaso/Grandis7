import Footer from "@/components/Footer";
import PropertiesHero from "@/components/PropertiesHero";
import PropertyGrid from "@/components/PropertyGrid";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <PropertiesHero />
      <PropertyGrid />
      <Footer />
    </main>
  );
}
