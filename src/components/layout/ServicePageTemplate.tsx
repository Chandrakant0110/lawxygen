
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnhancedLeadCaptureSection from "@/components/home/EnhancedLeadCaptureSection";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  serviceId: string;
  children: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  description,
  serviceId,
  children
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-600 mb-8">{description}</p>
            {children}
          </div>
        </div>
        <EnhancedLeadCaptureSection defaultService={serviceId} />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
