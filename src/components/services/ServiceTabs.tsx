
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, CheckCircle, HelpCircle } from "lucide-react";

interface ServiceTabsProps {
  service: {
    rating: number;
    reviews: number;
    description: string;
    title: string;
    category: string;
  };
  details?: {
    description?: string;
    benefits?: string[];
    process?: string[];
    timeline?: string;
    documents?: string[];
  };
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({ service, details }) => {
  return (
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
              <p className="text-gray-700 mt-1">{service.category} Services</p>
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
        <ServiceReviews rating={service.rating} reviewCount={service.reviews} />
      </TabsContent>
    </Tabs>
  );
};

import { Clock, FileText } from "lucide-react";

const ServiceReviews = ({ rating, reviewCount }: { rating: number, reviewCount: number }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Client Reviews</h3>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(rating) ? "text-amber-500 fill-current" : "text-gray-300"}`} 
                />
              ))}
            </div>
            <span className="ml-2 text-gray-700">{rating.toFixed(1)} out of 5</span>
          </div>
        </div>
        <span className="text-gray-500">{reviewCount} reviews</span>
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
  );
};

export default ServiceTabs;
