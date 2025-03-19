
import React from "react";

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  serviceId: string;
}

const ServicePageHero: React.FC<ServicePageHeroProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;
