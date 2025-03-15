
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  bgColorClass?: string;
  imageUrl?: string;
}

const ServicePageHero: React.FC<ServicePageHeroProps> = ({
  title,
  subtitle,
  bgColorClass = "bg-indigo-50",
  imageUrl,
}) => {
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
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild variant="primary" size="lg">
                <Link to="#consultation" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={`${title} Service`} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ) : (
              <div className="aspect-video bg-gradient-to-r from-indigo-500 to-violet-500 opacity-80 rounded-lg shadow-lg flex items-center justify-center">
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
