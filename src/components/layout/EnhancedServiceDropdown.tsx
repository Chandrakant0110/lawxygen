
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

const EnhancedServiceDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary w-full">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-6 p-6 md:w-[900px] lg:w-[1200px] xl:w-[1400px] lg:grid-cols-3 xl:grid-cols-5 bg-white shadow-lg z-[9999]">
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
                className="block text-center text-sm font-medium text-primary hover:text-primary/80"
              >
                Browse All Services
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default EnhancedServiceDropdown;
