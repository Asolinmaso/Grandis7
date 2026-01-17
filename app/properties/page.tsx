"use client";

import Footer from "@/components/Footer";
import PropertiesHero from "@/components/PropertiesHero";
import PropertyGrid from "@/components/PropertyGrid";
import { useState } from "react";

export default function PropertiesPage() {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (type: string, loc: string) => {
    setPropertyType(type);
    setLocation(loc);
    setSearchQuery(""); // Clear text search when using filters
  };

  return (
    <main className="min-h-screen">
      <PropertiesHero onSearch={handleSearch} />
      <PropertyGrid
        searchQuery={searchQuery}
        propertyType={propertyType}
        location={location}
      />
      <Footer />
    </main>
  );
}
