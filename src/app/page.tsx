import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import HeroSlider from "@/components/HeroSlider";
import MapSection from "@/components/MapSection";
import ServicesSlider from "@/components/ServicesSlider";
import StatsCounter from "@/components/StatsCounter";
// import MapSection from "@/components/MapSection";
// import ServicesSlider from "@/components/ServicesSlider";
// import StatsCounter from "@/components/StatsCounter";
// import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      <ContactSection />

      <MapSection />

      <ServicesSlider />
      <StatsCounter />

      <FAQSection />
      {/*
       */}
    </main>
  );
}
