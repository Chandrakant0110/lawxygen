
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { serviceCategories } from "@/data/serviceCategories";

const EnhancedServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="services-dropdown-container" ref={dropdownRef}>
      {/* Trigger button */}
      <button
        className="services-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        Services
        <ChevronDown className="h-4 w-4 ml-1" />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="services-dropdown-menu">
          <div className="services-dropdown-grid">
            {serviceCategories.map((category, index) => (
              <div key={index} className="services-category">
                <h3 className="services-category-title">{category.title}</h3>
                <ul className="services-category-list">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link 
                        to={item.to} 
                        className="services-item-link"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="services-dropdown-footer">
            <Link 
              to="/services" 
              className="services-view-all"
              onClick={() => setIsOpen(false)}
            >
              View all services
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedServiceDropdown;
