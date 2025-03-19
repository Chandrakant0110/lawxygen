
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageHero from "@/components/services/ServicePageHero";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ServiceTabs from "@/components/services/ServiceTabs";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import { services } from "@/mock/mockData";

const ServicePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Find the service by ID
    const foundService = services.find(s => s.id === id);
    
    if (foundService) {
      setService(foundService);
      setLoading(false);
    } else {
      setError("Service not found");
      setLoading(false);
      // Redirect to 404 page after a short delay
      setTimeout(() => {
        navigate("/404");
      }, 2000);
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
        <p className="text-gray-600">{error || "An unexpected error occurred"}</p>
        <p className="text-gray-500 mt-2">Redirecting to home page...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ServiceBreadcrumbs service={service} />
        <ServicePageHero service={service} />
        <ServicePageLayout service={service}>
          <ServiceTabs service={service} />
          {/* Related Services Section */}
          <RelatedServices currentServiceId={service.id} category={service.category} />
        </ServicePageLayout>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
