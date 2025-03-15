
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Clock, 
  CheckCircle, 
  MessageSquare, 
  Calendar,
  FileText,
  BadgeCheck,
  HelpCircle,
  Users
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services, professionals, categories, serviceDetails } from "@/mock/mockData";

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
      <div className="bg-gray-50 py-3 border-b">
        <div className="container-custom">
          <div className="flex text-sm text-gray-600">
            <Link to="/" className="hover:text-lawpurple-600">Home</Link>
            <span className="mx-2">/</span>
            {category && (
              <>
                <Link to={`/category/${category.id}`} className="hover:text-lawpurple-600">{category.name}</Link>
                <span className="mx-2">/</span>
              </>
            )}
            <span className="text-gray-900">{service.title}</span>
          </div>
        </div>
      </div>
      
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
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="process">Process</TabsTrigger>
                      <TabsTrigger value="details">Requirements</TabsTrigger>
                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="description" className="pt-4">
                      <div className="prose prose-blue max-w-none">
                        <p className="text-gray-700 mb-4">
                          {details?.description || service.description}
                        </p>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Benefits:</h3>
                        <ul className="space-y-2">
                          {details?.benefits ? (
                            details.benefits.map((benefit: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))
                          ) : (
                            <>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>Professional consultation with a licensed expert</span>
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
                            </>
                          )}
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="process" className="pt-4">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Our Service Process</h3>
                        <p className="text-gray-700">
                          Here's how we handle the {service.title} process from start to finish:
                        </p>
                        
                        <div className="space-y-6 mt-6">
                          {details?.process ? (
                            details.process.map((step: string, index: number) => (
                              <div key={index} className="flex">
                                <div className="flex-shrink-0 mr-4">
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lawpurple-100 text-lawpurple-600 font-semibold">
                                    {index + 1}
                                  </div>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">{step}</p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <>
                              <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lawpurple-100 text-lawpurple-600 font-semibold">
                                    1
                                  </div>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">Initial Consultation</p>
                                  <p className="text-gray-700 mt-1">Thorough discussion to understand your requirements</p>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lawpurple-100 text-lawpurple-600 font-semibold">
                                    2
                                  </div>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">Document Collection</p>
                                  <p className="text-gray-700 mt-1">Gathering all necessary information and paperwork</p>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lawpurple-100 text-lawpurple-600 font-semibold">
                                    3
                                  </div>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">Processing & Filing</p>
                                  <p className="text-gray-700 mt-1">Preparing and submitting all required applications</p>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lawpurple-100 text-lawpurple-600 font-semibold">
                                    4
                                  </div>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">Follow-Up & Delivery</p>
                                  <p className="text-gray-700 mt-1">Monitoring progress and delivering final documents</p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="flex items-start">
                            <Clock className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-gray-900">Expected Timeline</p>
                              <p className="text-gray-700 mt-1">
                                {details?.timeline || "2-3 weeks for completion, depending on government processing times"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="details" className="pt-4">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Required Documents & Information</h3>
                        <p className="text-gray-700">
                          To proceed with {service.title}, please have the following ready:
                        </p>
                        
                        <div className="mt-6 space-y-2">
                          {details?.documents ? (
                            details.documents.map((doc: string, index: number) => (
                              <div key={index} className="flex items-start p-3 border border-gray-100 rounded-md bg-gray-50">
                                <FileText className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-800">{doc}</span>
                              </div>
                            ))
                          ) : (
                            <>
                              <div className="flex items-start p-3 border border-gray-100 rounded-md bg-gray-50">
                                <FileText className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-800">Identity proof (PAN Card, Aadhar Card, Passport, etc.)</span>
                              </div>
                              <div className="flex items-start p-3 border border-gray-100 rounded-md bg-gray-50">
                                <FileText className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-800">Address proof (Utility Bill, Bank Statement, etc.)</span>
                              </div>
                              <div className="flex items-start p-3 border border-gray-100 rounded-md bg-gray-50">
                                <FileText className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-800">Business registration documents (if applicable)</span>
                              </div>
                              <div className="flex items-start p-3 border border-gray-100 rounded-md bg-gray-50">
                                <FileText className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-800">Service-specific documents (will be specified during consultation)</span>
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-md p-4">
                            <h4 className="font-medium text-gray-900">Service Type</h4>
                            <p className="text-gray-700 mt-1">{category?.name || service.category} Services</p>
                          </div>
                          <div className="border rounded-md p-4">
                            <h4 className="font-medium text-gray-900">Turnaround Time</h4>
                            <p className="text-gray-700 mt-1">{details?.timeline || "2-3 Business Days"}</p>
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
                              Excellent service! The professional was very thorough and responsive to my needs. The advice provided was clear and actionable. I would definitely use this service again.
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
                              Very good service overall. The professional was knowledgeable and provided great advice. The only reason for 4 stars instead of 5 is that I had to wait a bit longer than expected for the final documents.
                            </p>
                          </div>
                          
                          <div className="border-b pb-4">
                            <div className="flex justify-between mb-2">
                              <div className="flex items-center">
                                <img 
                                  src="https://randomuser.me/api/portraits/women/45.jpg" 
                                  alt="Client" 
                                  className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                  <h4 className="font-medium text-gray-900">Amanda Patel</h4>
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
                              <span className="text-sm text-gray-500">3 months ago</span>
                            </div>
                            <p className="text-gray-700">
                              Absolutely fantastic service! The entire process was smooth and professional. All my questions were answered promptly, and the final result exceeded my expectations. Highly recommended!
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-8 bg-white border rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <HelpCircle className="w-5 h-5 text-lawpurple-500 mr-2" />
                      What is the typical timeframe for {service.title}?
                    </h4>
                    <p className="text-gray-700 pl-7">
                      {details?.timeline ? 
                        `The typical timeframe is ${details.timeline}, though this can vary based on government processing times and the complexity of your specific case.` : 
                        "The process typically takes 2-3 weeks to complete, depending on the complexity and any government processing times involved."}
                    </p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <HelpCircle className="w-5 h-5 text-lawpurple-500 mr-2" />
                      What documents will I need to provide?
                    </h4>
                    <p className="text-gray-700 pl-7">
                      You'll typically need to provide identity and address proof, along with service-specific documents that our professional will outline during your initial consultation.
                    </p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <HelpCircle className="w-5 h-5 text-lawpurple-500 mr-2" />
                      Are there any ongoing compliance requirements?
                    </h4>
                    <p className="text-gray-700 pl-7">
                      Yes, there may be ongoing compliance requirements depending on the specific service. Our professionals will provide detailed guidance about any ongoing obligations.
                    </p>
                  </div>
                  
                  <div className="pb-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <HelpCircle className="w-5 h-5 text-lawpurple-500 mr-2" />
                      Do you offer post-service support?
                    </h4>
                    <p className="text-gray-700 pl-7">
                      Yes, we provide 30 days of post-service support to address any questions or concerns you might have after the service is delivered.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Related Services</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedServices.map((relatedService) => (
                      <div key={relatedService.id} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                        <Link to={`/service/${relatedService.id}`}>
                          <img 
                            src={relatedService.image} 
                            alt={relatedService.title} 
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-medium text-gray-900 mb-1">{relatedService.title}</h4>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{relatedService.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-lawpurple-600 font-medium">${relatedService.price}</span>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-amber-500 fill-current" />
                                <span className="ml-1 text-sm text-gray-600">{relatedService.rating.toFixed(1)}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Card */}
              <div className="bg-white border rounded-lg p-6 mb-6 sticky top-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Package</h3>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-gray-900">${service.price}</span>
                  <span className="text-gray-500 ml-2">one-time fee</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Expert {category?.name || service.category} professional</span>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{details?.timeline || "2-3 day"} delivery</span>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Complete documentation</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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
                
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-500 flex items-center mb-4">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Money-back guarantee
                  </p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Secure payment processing
                  </p>
                </div>
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
                      {provider.name} is a highly experienced professional in {category?.name || service.category} with over {provider.title.match(/\d+/)?.[0] || "5"} years of expertise. Specializing in {provider.specialties.join(", ")}.
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
