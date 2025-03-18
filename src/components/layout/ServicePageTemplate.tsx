
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageHero from "@/components/services/ServicePageHero";

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
      <ServicePageHero 
        title={title}
        subtitle={description}
        serviceId={serviceId}
      />
      <main className="flex-grow">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
