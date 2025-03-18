
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  bgColorClass?: string;
  serviceId?: string;
}

const ServicePageHero: React.FC<ServicePageHeroProps> = ({
  title,
  subtitle,
  bgColorClass = "bg-gradient-to-b from-white to-apple-gray-50",
  serviceId,
}) => {
  return (
    <div className={`py-16 ${bgColorClass}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apple-gray-800 mb-5">
              {title}
            </h1>
            <p className="text-xl text-apple-gray-600 mb-10 leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          <div className="md:w-2/5 mt-8 md:mt-0">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-apple-gray-100">
              <LeadCaptureForm 
                variant="inline" 
                defaultService={serviceId}
                className="bg-transparent p-0 border-0 shadow-none" 
                title="Get Expert Assistance"
                subtitle="Fill out this form for a free consultation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;
