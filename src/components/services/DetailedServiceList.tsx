
import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/mock/mockData";
import { 
  ChevronRight, 
  Building, 
  FileCheck, 
  Check, 
  DollarSign, 
  Copyright, 
  FileText, 
  Info, 
  Scale, 
  Home 
} from "lucide-react";

// Map of category IDs to their respective icons
const iconMap: Record<string, React.ReactNode> = {
  "business-incorporation": <Building className="w-5 h-5" />,
  "government-registrations": <FileCheck className="w-5 h-5" />,
  "compliance-services": <Check className="w-5 h-5" />,
  "taxation-services": <DollarSign className="w-5 h-5" />,
  "intellectual-property": <Copyright className="w-5 h-5" />,
  "legal-documents": <FileText className="w-5 h-5" />,
  "advisory-services": <Info className="w-5 h-5" />,
  "litigation": <Scale className="w-5 h-5" />,
  "individual-services": <Home className="w-5 h-5" />
};

const DetailedServiceList = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our Comprehensive Legal Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of legal and business services to meet all your professional needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
              <div className={`p-4 ${category.color.replace('text-', 'bg-').replace('100', '50')} border-b`}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-full mr-3 ${category.color}`}>
                    {iconMap[category.id] || <Building className="w-5 h-5" />}
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                <p className="mt-2 text-gray-700 pl-12">{category.description}</p>
              </div>
              
              <div className="p-4">
                <ul className="space-y-2">
                  {category.services.slice(0, 5).map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 py-1 hover:text-lawpurple-600 transition-colors">
                      <ChevronRight className="w-4 h-4 mr-2 text-lawpurple-500" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                
                {category.services.length > 5 && (
                  <div className="mt-2 pt-2 border-t text-right">
                    <Link 
                      to={`/category/${category.id}`} 
                      className="inline-flex items-center text-sm font-medium text-lawpurple-600 hover:text-lawpurple-700"
                    >
                      View All {category.services.length} Services
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="px-4 py-3 bg-gray-50 border-t">
                <Link 
                  to={`/category/${category.id}`}
                  className="inline-flex items-center text-sm font-medium text-lawpurple-600 hover:text-lawpurple-700"
                >
                  Browse {category.name}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServiceList;
