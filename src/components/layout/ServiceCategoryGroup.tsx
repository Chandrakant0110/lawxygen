
import React from "react";
import { Link } from "react-router-dom";
import { ServiceCategory } from "@/data/serviceCategories";
import { cn } from "@/lib/utils";

interface ServiceCategoryGroupProps {
  category: ServiceCategory;
}

const ServiceCategoryGroup: React.FC<ServiceCategoryGroupProps> = ({ category }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium text-primary border-b pb-2">
        {category.title}
      </h3>
      <ul className="space-y-1">
        {category.items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="flex items-start p-2 rounded-md hover:bg-slate-50 group"
            >
              <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-primary">
                {React.createElement(item.icon, { size: 18 })}
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {item.title}
                </div>
                <p className="text-xs text-gray-500 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCategoryGroup;
