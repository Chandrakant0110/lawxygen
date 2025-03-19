
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LawyerCategories } from "./FindLawyerData";
import { ChevronDown } from "lucide-react";

const FindLawyerDropdown = () => {
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
    <div className="lawyer-dropdown-container" ref={dropdownRef}>
      {/* Trigger button */}
      <button
        className="lawyer-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        Find a Lawyer
        <ChevronDown className="h-4 w-4 ml-1" />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="lawyer-dropdown-menu">
          <div className="lawyer-dropdown-grid">
            {LawyerCategories.map((category, index) => (
              <div key={index} className="lawyer-category">
                <h3 className="lawyer-category-title">{category.title}</h3>
                <ul className="lawyer-category-list">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link 
                        to={item.link} 
                        className="lawyer-item-link"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* CTA section */}
            <div className="lawyer-dropdown-cta">
              <h3>Need help finding the right lawyer?</h3>
              <Link 
                to="/find-lawyer" 
                className="lawyer-cta-button"
                onClick={() => setIsOpen(false)}
              >
                Start Here
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindLawyerDropdown;
