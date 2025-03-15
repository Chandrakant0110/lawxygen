
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { categories } from "@/mock/mockData";

interface FilterPanelProps {
  category: string;
  setCategory: (category: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  rating: string;
  setRating: (rating: string) => void;
  location: string;
  setLocation: (location: string) => void;
  handleResetFilters: () => void;
  handleApplyFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  rating,
  setRating,
  location,
  setLocation,
  handleResetFilters,
  handleApplyFilters
}) => {
  return (
    <div className="mt-4 p-4 border rounded-md bg-gray-50 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service Category
        </label>
        <select 
          className="w-full rounded-md border-gray-300 py-2 px-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price Range
        </label>
        <select 
          className="w-full rounded-md border-gray-300 py-2 px-3"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="any">Any Price</option>
          <option value="0-100">$0 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-500">$200 - $500</option>
          <option value="500+">$500+</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating
        </label>
        <select 
          className="w-full rounded-md border-gray-300 py-2 px-3"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="any">Any Rating</option>
          <option value="4+">4+ Stars</option>
          <option value="3+">3+ Stars</option>
          <option value="2+">2+ Stars</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MapPin className="w-4 h-4 text-gray-400" />
          </div>
          <Input 
            type="text" 
            placeholder="Enter location..." 
            className="pl-10"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      
      <div className="md:col-span-4 flex justify-end">
        <Button 
          variant="outline" 
          className="mr-2"
          onClick={handleResetFilters}
        >
          Reset
        </Button>
        <Button onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
