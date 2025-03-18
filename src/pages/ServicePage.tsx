
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services, professionals, categories, serviceDetails } from "@/mock/mockData";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceTabs from "@/components/services/ServiceTabs";
import ServicePricingCard from "@/components/services/ServicePricingCard";
import ProviderCard from "@/components/services/ProviderCard";
import ServiceFAQSection from "@/components/services/ServiceFAQSection";
import RelatedServices from "@/components/services/RelatedServices";

const ServicePage = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);
  const [relatedServices, setRelatedServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    // Find the service and provider data based on the ID
    const foundService = services.find(s => s.id === id);
    
    if (foundService) {
      setService(foundService);
      
      // Find the provider for this service
      const foundProvider = professionals.find(p => p.id === foundService.providerId);
      setProvider(foundProvider);
      
      // Find the category for this service
      const foundCategory = categories.find(c => c.id === foundService.category || foundService.tags.includes(c.name));
      setCategory(foundCategory);
      
      // Find related services (same category, different service)
      const related = services
        .filter(s => (s.category === foundService.category || 
                      s.tags.some(tag => foundService.tags.includes(tag))) && 
                      s.id !== foundService.id)
        .slice(0, 3);
      setRelatedServices(related);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-lawpurple-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Loading service details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
            <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/search-results">Browse Services</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get detailed information about this specific service if available
  const details = serviceDetails[service.title as keyof typeof serviceDetails];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Breadcrumbs */}
      <ServiceBreadcrumbs serviceTitle={service.title} category={category} />
      
      <main className="flex-grow">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Service Info */}
            <div className="lg:col-span-2">
              <div className="bg-white border rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                
                <ServiceHeader service={service} />
                
                <ServiceTabs service={service} details={details} />
              </div>
              
              {/* FAQ Section */}
              <ServiceFAQSection />
              
              {/* Related Services */}
              <RelatedServices services={relatedServices} />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Card */}
              <ServicePricingCard 
                service={service} 
                category={category} 
                details={details} 
              />
              
              {/* Provider Card */}
              {provider && <ProviderCard provider={provider} category={category} />}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
