
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Calendar, FileText, Users, MessageSquare, CheckCircle } from "lucide-react";

interface ServicePricingCardProps {
  service: {
    id: string;
    price: number;
    providerId: string;
  };
  details?: {
    timeline?: string;
  };
  categoryName?: string;
  category?: any; // Add this to match how it's used in ServicePage.tsx
}

const ServicePricingCard: React.FC<ServicePricingCardProps> = ({ service, categoryName, details, category }) => {
  return (
    <div className="bg-white border rounded-lg p-6 mb-6 sticky top-4">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Service Package</h3>
      
      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold text-gray-900">₹{service.price}</span>
        <span className="text-gray-500 ml-2">one-time fee</span>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <BadgeCheck className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">Expert {categoryName || "legal"} professional</span>
        </div>
        <div className="flex items-start">
          <Calendar className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{details?.timeline || "2-3 day"} delivery</span>
        </div>
        <div className="flex items-start">
          <FileText className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">Complete documentation</span>
        </div>
        <div className="flex items-start">
          <Users className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">30 days support</span>
        </div>
      </div>
      
      <Button asChild className="w-full bg-lawpurple-600 hover:bg-lawpurple-700 mb-4">
        <Link to={`/checkout/${service.id}`}>Purchase Now</Link>
      </Button>
      
      <Button asChild variant="outline" className="w-full">
        <Link to={`/messaging?provider=${service.providerId}`} className="flex items-center justify-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Contact Provider
        </Link>
      </Button>
      
      <div className="mt-6 pt-6 border-t">
        <p className="text-sm text-gray-500 flex items-center mb-4">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
          Money-back guarantee
        </p>
        <p className="text-sm text-gray-500 flex items-center">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
          Secure payment processing
        </p>
      </div>
    </div>
  );
};

export default ServicePricingCard;
