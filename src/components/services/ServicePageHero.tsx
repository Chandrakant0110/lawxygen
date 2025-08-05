
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
  bgColorClass = "bg-gradient-to-b from-white to-apple-gray-50",
  imageUrl,
  serviceId,
}) => {
  const scrollToConsultation = () => {
    const consultationSection = document.querySelector('#consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <div className={`py-16 ${bgColorClass}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apple-gray-800 mb-5">
              {title}
            </h1>
            <p className="text-xl text-apple-gray-600 mb-10 leading-relaxed">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={scrollToConsultation}
                variant="primary" 
                size="lg"
                className="bg-apple-blue hover:bg-apple-darkblue shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
              >
                Get a Free Consultation Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-apple-gray-300 rounded-full"
              >
                <Link to="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={`${title} Service`} 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            ) : (
              <div className="aspect-video bg-gradient-to-r from-apple-blue to-apple-darkblue opacity-90 rounded-2xl shadow-lg flex items-center justify-center">
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
