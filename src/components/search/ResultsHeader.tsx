
import React from "react";

interface ResultsHeaderProps {
  resultCount: number;
  searchType: "professionals" | "services";
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({ 
  resultCount, 
  searchType, 
  sortBy, 
  setSortBy 
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-900">
        {searchType === "professionals" ? "Professional Legal Experts" : "Legal Services"} 
        <span className="text-gray-500 ml-2 text-lg font-normal">
          ({resultCount} results)
        </span>
      </h2>
      
      <div className="flex items-center">
        <span className="text-sm text-gray-500 mr-2">Sort by:</span>
        <select 
          className="text-sm border-gray-300 rounded-md py-1"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="relevant">Most Relevant</option>
          <option value="highest">Highest Rated</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ResultsHeader;
