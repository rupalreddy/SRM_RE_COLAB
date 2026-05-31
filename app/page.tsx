import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialSection from "@/components/landing/TestimonialSection";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <StatsSection />

      <TestimonialSection />

      <Footer />
    </main>
  );
}