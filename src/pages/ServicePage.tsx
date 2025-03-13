
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Star, Clock, CheckCircle, MessageSquare } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services, professionals } from "@/mock/mockData";

const ServicePage = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the service and provider data based on the ID
    const foundService = services.find(s => s.id === id);
    
    if (foundService) {
      setService(foundService);
      // Find the provider for this service
      const foundProvider = professionals.find(p => p.id === foundService.providerId);
      setProvider(foundProvider);
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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
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
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag: string, index: number) => (
                      <Link key={index} to={`/search-results?tag=${tag}`}>
                        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200">
                          {tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                  
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h1>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
                      <span>{service.rating.toFixed(1)} ({service.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Delivery in 2-3 days</span>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="description" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="description" className="pt-4">
                      <div className="prose prose-blue max-w-none">
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <p className="text-gray-700 mb-4">
                          Our expert legal professionals will handle all aspects of the process, ensuring that your legal matters are managed efficiently and effectively.
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">What's Included:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Professional consultation with a licensed attorney</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Thorough analysis and expertise in {service.category} law</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Comprehensive documentation and guidance</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Follow-up support for questions and clarifications</span>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="details" className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Service Details</h3>
                          <p className="text-gray-700 mt-2">
                            This service is designed to provide professional {service.category} legal assistance tailored to your specific needs.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-md p-4">
                            <h4 className="font-medium text-gray-900">Service Type</h4>
                            <p className="text-gray-700 mt-1">{service.category} Services</p>
                          </div>
                          <div className="border rounded-md p-4">
                            <h4 className="font-medium text-gray-900">Turnaround Time</h4>
                            <p className="text-gray-700 mt-1">2-3 Business Days</p>
                          </div>
                          <div className="border rounded-md p-4">
                            <h4 className="font-medium text-gray-900">Revisions</h4>
                            <p className="text-gray-700 mt-1">2 Revisions Included</p>
                          </div>
                          <div className="border rounded-md p-4">
                            <h4 className="font-medium text-gray-900">Support</h4>
                            <p className="text-gray-700 mt-1">30 Days After Delivery</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="reviews" className="pt-4">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">Client Reviews</h3>
                            <div className="flex items-center mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-5 h-5 ${i < Math.floor(service.rating) ? "text-amber-500 fill-current" : "text-gray-300"}`} 
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-gray-700">{service.rating.toFixed(1)} out of 5</span>
                            </div>
                          </div>
                          <span className="text-gray-500">{service.reviews} reviews</span>
                        </div>
                        
                        {/* Sample reviews */}
                        <div className="space-y-4">
                          <div className="border-b pb-4">
                            <div className="flex justify-between mb-2">
                              <div className="flex items-center">
                                <img 
                                  src="https://randomuser.me/api/portraits/women/12.jpg" 
                                  alt="Client" 
                                  className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                  <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                                  <div className="flex items-center mt-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star 
                                        key={i} 
                                        className={`w-4 h-4 ${i < 5 ? "text-amber-500 fill-current" : "text-gray-300"}`} 
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">2 weeks ago</span>
                            </div>
                            <p className="text-gray-700">
                              Excellent service! The attorney was very thorough and responsive to my needs. The legal advice provided was clear and actionable. I would definitely use this service again.
                            </p>
                          </div>
                          
                          <div className="border-b pb-4">
                            <div className="flex justify-between mb-2">
                              <div className="flex items-center">
                                <img 
                                  src="https://randomuser.me/api/portraits/men/34.jpg" 
                                  alt="Client" 
                                  className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                  <h4 className="font-medium text-gray-900">Michael Roberts</h4>
                                  <div className="flex items-center mt-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star 
                                        key={i} 
                                        className={`w-4 h-4 ${i < 4 ? "text-amber-500 fill-current" : "text-gray-300"}`} 
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">1 month ago</span>
                            </div>
                            <p className="text-gray-700">
                              Very good service overall. The attorney was knowledgeable and provided great advice. The only reason for 4 stars instead of 5 is that I had to wait a bit longer than expected for the final documents.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Card */}
              <div className="bg-white border rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Package</h3>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-gray-900">${service.price}</span>
                  <span className="text-gray-500 ml-2">one-time fee</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Expert {service.category} professional</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">2-3 day delivery</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">2 revisions included</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">30 days support</span>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-lawpurple-600 hover:bg-lawpurple-700 mb-4">
                  <Link to={`/checkout/${service.id}`}>Purchase Now</Link>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/messaging?provider=${service.providerId}`} className="flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Contact Provider
                  </Link>
                </Button>
              </div>
              
              {/* Provider Card */}
              {provider && (
                <div className="bg-white border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={provider.avatar} 
                      alt={provider.name} 
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                      <p className="text-gray-600 text-sm">{provider.title}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">
                          {provider.rating.toFixed(1)} ({provider.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">About the Provider</h4>
                    <p className="text-gray-700 text-sm">
                      {provider.name} is a highly experienced professional in {service.category} with over {provider.title.match(/\d+/)?.[0] || "5"} years of expertise. Specializing in {provider.specialties.join(", ")}.
                    </p>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/freelancer-profile/${provider.id}`}>View Full Profile</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
