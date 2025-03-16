
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { serviceCategories } from "@/data/serviceCategories";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnhancedLeadCaptureSection from "@/components/home/EnhancedLeadCaptureSection";

const ServiceListPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Complete Legal Service Offerings
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Browse our comprehensive range of legal and business services designed to meet your specific needs
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        {serviceCategories.map((category, index) => (
          <section 
            key={index} 
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b pb-4">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.to}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md hover:border-indigo-200 transition-all group"
                  >
                    <div className="flex items-start">
                      <div className="bg-indigo-50 p-3 rounded-full text-indigo-600 mr-4">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                          Learn More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Lawxygen For Your Legal Needs
              </h2>
              <p className="text-gray-300">
                We combine deep legal expertise with technology to deliver fast, reliable and cost-effective solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="bg-indigo-500 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  Our team consists of experienced legal professionals with expertise across various domains
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="bg-indigo-500 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                <p className="text-gray-300">
                  No hidden fees. Our pricing is transparent with no surprises
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="bg-indigo-500 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tech-Enabled</h3>
                <p className="text-gray-300">
                  We use cutting-edge technology to streamline processes and enhance service delivery
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="bg-indigo-500 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer First</h3>
                <p className="text-gray-300">
                  We prioritize your needs and provide personalized solutions tailored for you
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                asChild
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Lead Capture */}
        <EnhancedLeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceListPage;
