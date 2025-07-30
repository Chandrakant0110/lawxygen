
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/mock/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ServiceListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Legal & Compliance Services
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive legal and compliance solutions for businesses of all sizes. Browse our services or search for specific assistance.
            </p>
          </div>

          <div className="flex items-center max-w-2xl mx-auto mb-12 relative">
            <Input 
              type="text" 
              placeholder="Search for services..." 
              className="h-12 pr-12 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 text-slate-400" size={20} />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Link 
                to={`/category/${category.id}`} 
                key={category.id}
                className="no-underline"
              >
                <Badge 
                  variant="outline" 
                  className={`px-4 py-2 text-sm font-medium cursor-pointer hover:bg-slate-100 ${category.color.replace('bg-', 'hover:')}`}
                >
                  {category.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container-custom">
          {categories.map((category) => {
            // Filter services based on search term if provided
            const displayServices = category.services.filter(service => 
              !searchTerm || service.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // Only display category if it has services matching the search term
            if (displayServices.length === 0) return null;

            return (
              <div key={category.id} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <Search className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{category.name}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayServices.map((service, idx) => {
                    // Convert service name to URL path
                    const serviceUrlPath = service
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/[^\w-]+/g, '');
                    
                    return (
                      <Link 
                        to={`/services/${serviceUrlPath}`} 
                        key={`${category.id}-${idx}`}
                        className="group no-underline"
                      >
                        <div className="border border-slate-200 rounded-lg p-5 h-full hover:border-primary hover:shadow-md transition-all duration-200">
                          <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-primary">
                            {service}
                          </h3>
                          <p className="text-slate-500 mb-4 text-sm">
                            Complete assistance with {service.toLowerCase()}.
                          </p>
                          <div className="flex justify-between items-center mt-auto">
                            <span className="text-sm font-medium text-primary">Learn more</span>
                            <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Not Sure What Service You Need?</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our legal experts are here to help you identify the right service for your business needs. 
                Schedule a free consultation and get personalized guidance.
              </p>
              <div className="flex gap-4">
                <Button className="gap-2">
                  Get Free Consultation
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <LeadCaptureForm variant="inline" className="bg-transparent border-0 shadow-none p-0" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceListPage;
