
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { LawyerCategories } from "./FindLawyerData";

const FindLawyerDropdown = () => {
  return (
    <NavigationMenu className="find-lawyer-nav-menu">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
            Find a Lawyer
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="lawyer-mega-dropdown">
              <div className="lawyer-mega-dropdown-grid">
                {/* All categories with no extra left spacing */}
                {LawyerCategories.map((category, index) => (
                  <div key={index} className="lawyer-category-container">
                    <h4 className="lawyer-category-title">
                      {category.title}
                    </h4>
                    <ul className="lawyer-items-list">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.link}
                              className="lawyer-item-link"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                {/* CTA column */}
                <div className="bg-gray-50 rounded-md p-4 flex flex-col justify-center items-center space-y-3">
                  <h4 className="font-medium text-center">
                    Need help finding the right lawyer?
                  </h4>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link to="/find-lawyer">Start Here</Link>
                  </Button>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default FindLawyerDropdown;
