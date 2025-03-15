
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  bgColorClass?: string;
  imageUrl?: string;
  serviceId?: string;
}

const ServicePageHero: React.FC<ServicePageHeroProps> = ({
  title,
  subtitle,
  bgColorClass = "bg-violet-50",
  imageUrl,
  serviceId,
}) => {
  const [showLeadForm, setShowLeadForm] = React.useState(false);
  
  return (
    <div className={`py-12 ${bgColorClass}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              {subtitle}
            </p>
            
            {showLeadForm ? (
              <div className="bg-white p-6 rounded-lg shadow-md border border-violet-100 mb-6">
                <LeadCaptureForm 
                  variant="inline" 
                  defaultService={serviceId}
                  className="bg-transparent p-0 border-0 shadow-none" 
                />
                <Button 
                  onClick={() => setShowLeadForm(false)} 
                  variant="outline" 
                  className="mt-4 w-full"
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  onClick={() => setShowLeadForm(true)}
                  variant="primary" 
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="#services">Explore Services</Link>
                </Button>
              </div>
            )}
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={`${title} Service`} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ) : (
              <div className="aspect-video bg-gradient-to-r from-violet-500 to-purple-500 opacity-80 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {title}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;
