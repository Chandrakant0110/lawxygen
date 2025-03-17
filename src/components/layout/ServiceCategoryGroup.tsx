
import React from "react";
import { Link } from "react-router-dom";
import { ServiceCategory } from "@/data/serviceCategories";
import { cn } from "@/lib/utils";

interface ServiceCategoryGroupProps {
  category: ServiceCategory;
}

const ServiceCategoryGroup: React.FC<ServiceCategoryGroupProps> = ({ category }) => {
  return (
    <div className="service-category-container">
      <h3 className="service-category-title">
        {category.title}
      </h3>
      <ul className="service-items-list">
        {category.items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="service-item-link"
            >
              <div className="service-item-icon">
                {React.createElement(item.icon, { size: 16 })}
              </div>
              <div className="service-item-content">
                <div className="service-item-title">
                  {item.title}
                </div>
                <p className="service-item-description">
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
