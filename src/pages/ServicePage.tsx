
import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services, categories, serviceDetails } from "@/mock/mockData";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceTabs from "@/components/services/ServiceTabs";
import ServicePricingCard from "@/components/services/ServicePricingCard";
import ServiceFAQSection from "@/components/services/ServiceFAQSection";
import RelatedServices from "@/components/services/RelatedServices";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import EnhancedLoadingSpinner from "@/components/common/EnhancedLoadingSpinner";

const ServicePage = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<any>(null);
  const [relatedServices, setRelatedServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Reset state when id changes
    setLoading(true);
    setError(null);

    // Simulate network request with a small delay
    const timer = setTimeout(() => {
      try {
        // Find the service data based on the ID
        const foundService = services.find(s => s.id === id);
        
        if (foundService) {
          setService(foundService);
          
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
      } catch (err) {
        console.error("Error loading service data:", err);
        setError(err instanceof Error ? err : new Error("Failed to load service data"));
      } finally {
        setLoading(false);
      }
    }, 300); // Short delay for data loading simulation

    return () => clearTimeout(timer);
  }, [id]);

  // Memoized service details to prevent unnecessary re-renders
  const details = useMemo(() => {
    if (!service?.title) return null;
    return serviceDetails[service.title as keyof typeof serviceDetails];
  }, [service?.title]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Service</h2>
            <p className="text-gray-600 mb-6">We encountered an error while loading this service. Please try again.</p>
            <Button asChild>
              <Link to="/search-results">Browse Services</Link>
            </Button>
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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Breadcrumbs */}
      <ErrorBoundary>
        <ServiceBreadcrumbs serviceTitle={service.title} category={category} />
      </ErrorBoundary>
      
      <main className="flex-grow">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Service Info */}
            <div className="lg:col-span-2">
              <ErrorBoundary>
                <div className="bg-white border rounded-lg overflow-hidden">
                  <ServiceHeader service={service} />
                  
                  <ServiceTabs service={service} details={details} />
                </div>
                
                {/* FAQ Section */}
                <ServiceFAQSection service={service} details={details} />
                
                {/* Related Services */}
                <RelatedServices services={relatedServices} />
              </ErrorBoundary>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ErrorBoundary>
                {/* Pricing Card */}
                <ServicePricingCard 
                  service={service} 
                  categoryName={category?.name} 
                  details={details} 
                />
                
                {/* Added CTA for consultation */}
                <div className="bg-white p-6 mt-6 rounded-lg border shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
                  <p className="text-gray-600 mb-4">Our legal experts are ready to assist you with this service. Get personalized advice today.</p>
                  <Button asChild className="w-full bg-lawpurple-600 hover:bg-lawpurple-700">
                    <Link to="/contact">Get Free Consultation</Link>
                  </Button>
                </div>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
