
import React from "react";
import { Link } from "react-router-dom";

interface ServiceBreadcrumbsProps {
  serviceTitle: string;
  category?: {
    id: string;
    name: string;
  };
}

const ServiceBreadcrumbs: React.FC<ServiceBreadcrumbsProps> = ({ serviceTitle, category }) => {
  return (
    <div className="bg-gray-50 py-3 border-b">
      <div className="container-custom">
        <div className="flex text-sm text-gray-600">
          <Link to="/" className="hover:text-lawpurple-600">Home</Link>
          <span className="mx-2">/</span>
          {category && (
            <>
              <Link to={`/category/${category.id}`} className="hover:text-lawpurple-600">{category.name}</Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-gray-900">{serviceTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceBreadcrumbs;
