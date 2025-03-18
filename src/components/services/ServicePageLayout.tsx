import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageHero from "@/components/services/ServicePageHero";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Step {
  title: string;
  description: string;
}

interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  serviceId: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  steps: Step[];
  pricingTiers?: PricingTier[];
  faqs: FAQ[];
  relatedServices?: {
    title: string;
    link: string;
  }[];
  children?: React.ReactNode;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  serviceId,
  title,
  subtitle,
  description,
  steps,
  pricingTiers,
  faqs,
  relatedServices,
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <ServicePageHero
          title={title}
          subtitle={subtitle}
          serviceId={serviceId}
        />
        
        {/* Top Lead Capture Form */}
        <section id="consultation" className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  How We Can Help You
                </h2>
                <p className="text-gray-600 mb-6">
                  {description}
                </p>
                <div className="space-y-4">
                  {steps.slice(0, 2).map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gray-100 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-black">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <LeadCaptureForm 
                defaultService={serviceId} 
                title="Talk to Us Today"
                subtitle="Get expert advice tailored to your specific needs. Our team will contact you within 24 hours."
              />
            </div>
          </div>
        </section>
        
        {/* Process Steps */}
        <section id="process" className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
              Our Simple Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section (if available) */}
        {pricingTiers && pricingTiers.length > 0 && (
          <section id="pricing" className="py-12 bg-white">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
                Transparent Pricing Plans
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className={`bg-white p-6 rounded-xl shadow-sm border ${
                      tier.popular ? 'border-gray-300 ring-2 ring-black ring-opacity-20' : 'border-gray-200'
                    } relative`}
                  >
                    {tier.popular && (
                      <div className="absolute top-0 right-0 bg-black text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        POPULAR
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-black mb-2">{tier.title}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-black">{tier.price}</span>
                      {tier.price !== 'Custom' && <span className="text-gray-600">/service</span>}
                    </div>
                    <p className="text-gray-600 mb-6">{tier.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-gray-700 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      asChild 
                      variant={tier.popular ? "default" : "outline"} 
                      className={`w-full ${tier.popular ? 'bg-black text-white hover:bg-gray-800' : 'border-gray-300 text-gray-800 hover:bg-gray-50'}`}
                    >
                      <Link to={tier.buttonLink || "#consultation"}>
                        {tier.buttonText || "Talk to Us Now"}
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Custom Content Section */}
        {children}
        
        {/* FAQs Section */}
        <section id="faqs" className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        {relatedServices && relatedServices.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
                Related Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-black mb-2">{service.title}</h3>
                    <Button asChild variant="ghost" className="text-gray-700 p-0 hover:bg-transparent hover:text-black">
                      <Link to={service.link} className="flex items-center">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Bottom Lead Capture Form */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team of legal experts is ready to help you with your {title.toLowerCase()} needs. 
                Get in touch with us today to schedule a free consultation.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <LeadCaptureForm 
                defaultService={serviceId} 
                variant="inline" 
                className="bg-white" 
                title="Get a Free Consultation Now"
                subtitle="Our experts are ready to answer your questions and provide personalized guidance."
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
