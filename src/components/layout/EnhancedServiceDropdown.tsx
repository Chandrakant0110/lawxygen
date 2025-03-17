
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ServiceCategoryGroup from "./ServiceCategoryGroup";
import { serviceCategories } from "@/data/serviceCategories";
import { ChevronRight } from "lucide-react";

const EnhancedServiceDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary w-full">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="services-mega-dropdown">
              <div className="services-mega-dropdown-grid">
                {serviceCategories.map((category, categoryIndex) => (
                  <ServiceCategoryGroup 
                    key={categoryIndex} 
                    category={category}
                  />
                ))}
              </div>
              <div className="bg-slate-50 p-4 border-t">
                <Link 
                  to="/services" 
                  className="flex items-center justify-center text-sm font-medium text-primary hover:text-primary/80 gap-1"
                >
                  View all services
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default EnhancedServiceDropdown;
