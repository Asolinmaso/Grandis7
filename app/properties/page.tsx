"use client";

import Footer from "@/components/Footer";
import PropertiesHero from "@/components/PropertiesHero";
import PropertyGrid from "@/components/PropertyGrid";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

export default function PropertiesPage() {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (type: string, loc: string) => {
    setPropertyType(type);
    setLocation(loc);
    setSearchQuery("");
  };

  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <PropertiesHero onSearch={handleSearch} />
      </ScrollReveal>

      <ScrollReveal>
        <PropertyGrid
          searchQuery={searchQuery}
          propertyType={propertyType}
          location={location}
        />
      </ScrollReveal>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}