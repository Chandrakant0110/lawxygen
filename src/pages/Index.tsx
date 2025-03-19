
import React, { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ConsultationSection from "@/components/home/FeaturedProfessionals";
import HowItWorks from "@/components/home/HowItWorks";
import EnhancedLoadingSpinner from "@/components/common/EnhancedLoadingSpinner";

// Lazy load less critical components
const LazyEnhancedLeadCaptureSection = React.lazy(() => 
  import("@/components/home/EnhancedLeadCaptureSection")
);

const LoadingFallback = () => (
  <div className="w-full py-12 flex justify-center">
    <EnhancedLoadingSpinner />
  </div>
);

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <LazyEnhancedLeadCaptureSection />
        </Suspense>
        
        <ConsultationSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
