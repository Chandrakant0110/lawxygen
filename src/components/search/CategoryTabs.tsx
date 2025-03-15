
import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { categories } from "@/mock/mockData";

interface CategoryTabsProps {
  searchType: "professionals" | "services";
  setSearchType: (type: "professionals" | "services") => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ searchType, setSearchType }) => {
  return (
    <Tabs defaultValue={searchType} className="w-full" onValueChange={(value) => setSearchType(value as "professionals" | "services")}>
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="services">Services</TabsTrigger>
        <TabsTrigger value="professionals">Professionals</TabsTrigger>
      </TabsList>
      
      <TabsContent value="services" className="mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className={`flex flex-col items-center p-3 rounded-lg ${category.color} text-center hover:opacity-90 transition-opacity`}
            >
              <div className="mb-2 text-sm font-medium line-clamp-2 h-10 flex items-center">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="professionals" className="mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/find-professional?category=${category.id}`}
              className={`flex flex-col items-center p-3 rounded-lg ${category.color} text-center hover:opacity-90 transition-opacity`}
            >
              <div className="mb-2 text-sm font-medium line-clamp-2 h-10 flex items-center">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default CategoryTabs;
