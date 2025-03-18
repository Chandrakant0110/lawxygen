
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface ProviderCardProps {
  provider: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    rating: number;
    reviews: number;
    specialties: string[];
  };
  categoryName?: string;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider, categoryName }) => {
  return (
    <div className="bg-white border rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img 
          src={provider.avatar} 
          alt={provider.name} 
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{provider.name}</h3>
          <p className="text-gray-600 text-sm">{provider.title}</p>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-amber-500 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {provider.rating.toFixed(1)} ({provider.reviews})
            </span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">About the Provider</h4>
        <p className="text-gray-700 text-sm">
          {provider.name} is a highly experienced professional in {categoryName || "legal services"} with over {provider.title.match(/\d+/)?.[0] || "5"} years of expertise. Specializing in {provider.specialties.join(", ")}.
        </p>
      </div>
      
      <Button asChild variant="outline" className="w-full">
        <Link to={`/freelancer-profile/${provider.id}`}>View Full Profile</Link>
      </Button>
    </div>
  );
};

export default ProviderCard;
