
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  providerId: string;
  providerName: string;
  providerAvatar: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  tags: string[];
}

const ServiceCard = ({
  id,
  title,
  description,
  price,
  providerId,
  providerName,
  providerAvatar,
  rating,
  reviews,
  image,
  tags
}: ServiceCardProps) => {
  return (
    <div className="overflow-hidden transition-shadow bg-white border rounded-lg hover:shadow-md">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-48"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-lawpurple-600 text-white hover:bg-lawpurple-700">
            ${price}
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <Link to={`/service/${id}`} className="hover:underline">
          <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{title}</h3>
        </Link>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center mt-4 space-x-2">
          <img 
            src={providerAvatar} 
            alt={providerName} 
            className="object-cover w-8 h-8 rounded-full"
          />
          <div>
            <Link to={`/freelancer-profile/${providerId}`} className="text-sm font-medium text-gray-900 hover:underline">
              {providerName}
            </Link>
            <div className="flex items-center text-amber-500">
              <Star className="w-3 h-3 fill-current" />
              <span className="ml-1 text-xs text-gray-600">
                {rating.toFixed(1)} ({reviews})
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button asChild className="flex-1 bg-lawpurple-600 hover:bg-lawpurple-700">
            <Link to={`/service/${id}`}>View Details</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/checkout/${id}`}>Purchase</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
