
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceDetailsListProps {
  categoryId: string;
  categoryName: string;
  servicesList: string[];
  colorClass: string;
}

const ServiceDetailsList: React.FC<ServiceDetailsListProps> = ({
  categoryId,
  categoryName,
  servicesList,
  colorClass
}) => {
  return (
    <div className="py-10">
      <div className="container-custom">
        <div className="bg-white border rounded-lg overflow-hidden">
          <div className={`p-6 ${colorClass.replace('text-', 'bg-').replace('100', '50')} border-b`}>
            <h2 className="text-2xl font-bold text-gray-900">{categoryName} Services</h2>
            <p className="mt-2 text-gray-700">
              Explore our comprehensive range of {categoryName.toLowerCase()} services designed to meet your legal and business needs.
            </p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className={`w-5 h-5 ${colorClass} mr-2 flex-shrink-0 mt-0.5`} />
                  <div>
                    <h3 className="font-medium text-gray-900">{service}</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Professional assistance with all aspects of {service.toLowerCase()}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link to={`/search-results?category=${categoryId}`} className="flex items-center gap-2">
                  Find a {categoryName} Professional
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsList;
