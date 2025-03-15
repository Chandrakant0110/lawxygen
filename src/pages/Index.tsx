
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProfessionals from "@/components/home/FeaturedProfessionals";
import ServiceCategories from "@/components/home/ServiceCategories";
import HowItWorks from "@/components/home/HowItWorks";
import DetailedServiceList from "@/components/services/DetailedServiceList";
import LeadCaptureSection from "@/components/home/LeadCaptureSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceCategories />
        <DetailedServiceList />
        <LeadCaptureSection />
        <FeaturedProfessionals />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
