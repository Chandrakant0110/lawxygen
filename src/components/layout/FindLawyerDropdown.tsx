
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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
            Find a Lawyer
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-6 w-[95vw] max-w-[1200px] gap-0 p-4 bg-white shadow-lg rounded-md">
              {/* All categories with no extra left spacing */}
              {LawyerCategories.map((category, index) => (
                <div key={index} className="space-y-1 px-3">
                  <h4 className="font-medium text-sm text-primary border-b pb-1 mb-2">
                    {category.title}
                  </h4>
                  <ul className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.link}
                            className="block text-sm hover:text-primary hover:bg-gray-50 rounded px-2 py-1 transition-colors"
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
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default FindLawyerDropdown;
