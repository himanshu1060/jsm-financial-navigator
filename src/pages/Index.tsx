import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import WealthServices from "@/components/sections/WealthServices";
import InsuranceServices from "@/components/sections/InsuranceServices";
import BookConsultation from "@/components/sections/BookConsultation";
import SmartSip360 from "@/components/sections/SmartSip360";
import AssociatedCompanies from "@/components/sections/AssociatedCompanies";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HomeSection />
      <AboutSection />
      <WealthServices />
      <InsuranceServices />
      <BookConsultation />
      <SmartSip360 />
      <AssociatedCompanies />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
