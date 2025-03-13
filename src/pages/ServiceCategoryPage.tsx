
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/ServiceCard";
import { services, categories } from "@/mock/mockData";
import { 
  Briefcase, 
  Scale, 
  Home, 
  Users, 
  FileText, 
  Landmark, 
  Globe, 
  Shield,
  Search
} from "lucide-react";

const iconMap: Record<string, any> = {
  Briefcase,
  Scale,
  Home,
  Users,
  FileText,
  Landmark,
  Globe,
  Shield
};

const ServiceCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [categoryData, setCategoryData] = useState<any>(null);
  const [filteredServices, setFilteredServices] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (category) {
      const foundCategory = categories.find(c => c.id === category);
      if (foundCategory) {
        setCategoryData(foundCategory);
      }
      
      const matchingServices = services.filter(service => 
        service.category === category || 
        service.tags.includes(foundCategory?.name || "")
      );
      setFilteredServices(matchingServices);
    }
  }, [category]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === "") {
      // Reset to all services in this category
      const matchingServices = services.filter(service => 
        service.category === category || 
        service.tags.includes(categoryData?.name || "")
      );
      setFilteredServices(matchingServices);
    } else {
      // Filter by search term within the category
      const searchResults = services.filter(service => 
        (service.category === category || service.tags.includes(categoryData?.name || "")) &&
        (service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
      setFilteredServices(searchResults);
    }
  };

  if (!categoryData) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h2>
            <p className="text-gray-600 mb-6">The category you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/search-results">Browse All Services</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = iconMap[categoryData.icon] || Briefcase;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Category Header */}
        <section className={`py-16 ${categoryData.color.replace('text-', 'bg-').replace('100', '500')}`}>
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="bg-white p-3 rounded-full mr-4">
                  <IconComponent className={`w-8 h-8 ${categoryData.color.replace('bg-', 'text-')}`} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{categoryData.name}</h1>
                  <p className="text-white/90">{categoryData.description}</p>
                </div>
              </div>
              
              <form onSubmit={handleSearch} className="flex w-full md:w-auto">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full py-2 pl-10 pr-4 text-gray-900 border-0 rounded-l-md focus:ring-2 focus:ring-lawpurple-500"
                    placeholder={`Search in ${categoryData.name}...`}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="px-4 rounded-l-none bg-lawpurple-600 hover:bg-lawpurple-700"
                >
                  Search
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Available {categoryData.name} Services
                <span className="text-gray-500 ml-2 text-lg font-normal">
                  ({filteredServices.length} results)
                </span>
              </h2>
            </div>
            
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard 
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    price={service.price}
                    providerId={service.providerId}
                    providerName={service.providerName}
                    providerAvatar={service.providerAvatar}
                    rating={service.rating}
                    reviews={service.reviews}
                    image={service.image}
                    category={service.category}
                    tags={service.tags}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any services matching your criteria in this category.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setFilteredServices(services.filter(service => 
                      service.category === category || 
                      service.tags.includes(categoryData?.name || "")
                    ));
                  }}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Related Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Categories</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories
                .filter(c => c.id !== category)
                .slice(0, 4)
                .map((relatedCategory) => {
                  const RelatedIcon = iconMap[relatedCategory.icon] || Briefcase;
                  return (
                    <Link
                      key={relatedCategory.id}
                      to={`/category/${relatedCategory.id}`}
                      className="flex flex-col items-center p-6 text-center transition-all bg-white border rounded-lg hover:shadow-md hover:border-lawpurple-300"
                    >
                      <div className={`p-3 rounded-full ${relatedCategory.color}`}>
                        <RelatedIcon className="w-8 h-8" />
                      </div>
                      <h3 className="mt-4 text-xl font-medium text-gray-900">
                        {relatedCategory.name}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {relatedCategory.description}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceCategoryPage;
