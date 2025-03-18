
import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface RelatedServicesProps {
  services: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    rating: number;
  }>;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ services }) => {
  if (services.length === 0) return null;
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Related Services</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
            <Link to={`/service/${service.id}`}>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium text-gray-900 mb-1">{service.title}</h4>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lawpurple-600 font-medium">${service.price}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{service.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
