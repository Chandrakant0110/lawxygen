
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  id: string;
  title: string;
  providerId: string;
  providerName: string;
  providerAvatar: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  categories: string[];
  deliveryTime: string;
}

const ServiceCard = ({
  id,
  title,
  providerId,
  providerName,
  providerAvatar,
  rating,
  reviews,
  price,
  image,
  categories,
  deliveryTime,
}: ServiceCardProps) => {
  return (
    <div className="overflow-hidden transition-shadow bg-white border rounded-lg hover:shadow-md">
      <Link to={`/service/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <img
            src={providerAvatar}
            alt={providerName}
            className="w-6 h-6 rounded-full"
          />
          <Link 
            to={`/freelancer-profile/${providerId}`}
            className="text-sm font-medium text-gray-700 hover:text-lawpurple-600 hover:underline"
          >
            {providerName}
          </Link>
        </div>
        
        <Link to={`/service/${id}`} className="hover:text-lawpurple-600">
          <h3 className="mb-2 text-base font-medium text-gray-900 line-clamp-2">{title}</h3>
        </Link>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {rating.toFixed(1)} ({reviews})
            </span>
          </div>
          <div className="mx-2 text-gray-300">|</div>
          <div className="text-sm text-gray-600">
            {deliveryTime}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {categories.slice(0, 2).map((category, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs">
              {category}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-600">Starting at</span>
          <span className="text-lg font-medium text-gray-900">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
