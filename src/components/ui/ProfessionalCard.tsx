
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProfessionalCardProps {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  avatar: string;
  specialties: string[];
  isTopRated?: boolean;
}

const ProfessionalCard = ({
  id,
  name,
  title,
  rating,
  reviews,
  hourlyRate,
  avatar,
  specialties,
  isTopRated = false,
}: ProfessionalCardProps) => {
  return (
    <div className="overflow-hidden transition-shadow bg-white border rounded-lg hover:shadow-md">
      {isTopRated && (
        <div className="px-3 py-1 text-xs font-medium text-white bg-lawpurple-600">
          Top Rated Professional
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start space-x-4">
          <img
            src={avatar}
            alt={name}
            className="object-cover w-16 h-16 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <Link to={`/freelancer-profile/${id}`} className="hover:underline">
              <h3 className="text-lg font-medium text-gray-900 truncate">{name}</h3>
            </Link>
            <p className="text-sm text-gray-600 truncate">{title}</p>
            <div className="flex items-center mt-1">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating) ? "fill-current" : "fill-none"
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm text-gray-600">
                  {rating.toFixed(1)} ({reviews})
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-medium text-gray-900">${hourlyRate}/hr</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {specialties.slice(0, 3).map((specialty, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
              {specialty}
            </Badge>
          ))}
          {specialties.length > 3 && (
            <Badge variant="outline" className="text-gray-600">
              +{specialties.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2 mt-4">
          <Button asChild className="flex-1 bg-lawpurple-600 hover:bg-lawpurple-700">
            <Link to={`/freelancer-profile/${id}`}>View Profile</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/messaging?user=${id}`}>Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
