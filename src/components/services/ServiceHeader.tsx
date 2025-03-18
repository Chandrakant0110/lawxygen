
import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock } from "lucide-react";

interface ServiceHeaderProps {
  service: {
    title: string;
    rating: number;
    reviews: number;
    tags: string[];
  };
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ service }) => {
  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.map((tag: string, index: number) => (
          <Link key={index} to={`/search-results?tag=${tag}`}>
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200">
              {tag}
            </span>
          </Link>
        ))}
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h1>
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <div className="flex items-center mr-4">
          <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
          <span>{service.rating.toFixed(1)} ({service.reviews} reviews)</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>Delivery in 2-3 days</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
