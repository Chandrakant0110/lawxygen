
import React, { useState } from "react";
import ServiceListItem from "./ServiceListItem";
import { ServiceCategory } from "@/data/serviceCategories";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCategoryGroupProps {
  category: ServiceCategory;
}

const ServiceCategoryGroup: React.FC<ServiceCategoryGroupProps> = ({ category }) => {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <div className="space-y-2">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-lg font-medium text-primary border-b pb-1 mb-2 flex-grow">
          {category.title}
        </h3>
        <button className="text-gray-500 hover:text-primary p-1">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      
      {expanded && (
        <ul className="space-y-1 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {category.items.map((item, itemIndex) => (
            <ServiceListItem
              key={itemIndex}
              title={item.title}
              to={item.to}
              icon={item.icon}
            >
              {item.description}
            </ServiceListItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCategoryGroup;
