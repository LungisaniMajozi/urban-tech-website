import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import ServicesOverview from "../components/home/ServicesOverview";
import IndustriesSection from "../components/home/IndustriesSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
