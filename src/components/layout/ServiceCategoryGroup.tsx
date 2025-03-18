
import React from "react";
import { Link } from "react-router-dom";

interface ServiceItem {
  title: string;
  to: string;
}

interface ServiceCategoryProps {
  category: {
    title: string;
    items: ServiceItem[];
  }
}

const ServiceCategoryGroup = ({ category }: ServiceCategoryProps) => {
  return (
    <div className="p-4">
      <h3 className="text-base font-semibold mb-3 text-slate-800">{category.title}</h3>
      <ul className="space-y-2">
        {category.items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="block text-sm text-slate-600 hover:text-primary transition-colors duration-200 py-1"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCategoryGroup;
