
import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { categories } from "@/mock/mockData";

interface CategoryTabsProps {
  searchType: "services";
  setSearchType: (type: "services") => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ searchType, setSearchType }) => {
  return (
    <Tabs defaultValue={searchType} className="w-full" onValueChange={(value) => setSearchType(value as "services")}>
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
    </Tabs>
  );
};

export default CategoryTabs;
