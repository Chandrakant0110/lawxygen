
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProfessionals from "@/components/home/FeaturedProfessionals";
import ServiceCategories from "@/components/home/ServiceCategories";
import HowItWorks from "@/components/home/HowItWorks";
import EnhancedServiceList from "@/components/services/EnhancedServiceList";
import EnhancedLeadCaptureSection from "@/components/home/EnhancedLeadCaptureSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <Hero />
        <ServiceCategories />
        <EnhancedServiceList />
        <EnhancedLeadCaptureSection />
        <FeaturedProfessionals />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
