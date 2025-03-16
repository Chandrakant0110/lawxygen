
import React from "react";
import ServiceListItem from "./ServiceListItem";
import { ServiceCategory } from "@/data/serviceCategories";

interface ServiceCategoryGroupProps {
  category: ServiceCategory;
}

const ServiceCategoryGroup: React.FC<ServiceCategoryGroupProps> = ({ category }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-primary border-b pb-1 mb-2">
        {category.title}
      </h3>
      <ul className="space-y-1 max-h-[400px] overflow-y-auto pr-2">
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
    </div>
  );
};

export default ServiceCategoryGroup;
