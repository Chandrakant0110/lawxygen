
import React from "react";
import { ServiceItem } from "@/data/serviceCategories";

interface SearchSuggestionsProps {
  suggestions: ServiceItem[];
  searchTerm: string;
  onSuggestionClick: (suggestion: ServiceItem) => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ 
  suggestions, 
  searchTerm, 
  onSuggestionClick 
}) => {
  // Highlight matching text in suggestion
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return (
      <>
        {parts.map((part, i) => 
          regex.test(part) ? 
            <span key={i} className="bg-yellow-100 font-medium">{part}</span> : 
            <span key={i}>{part}</span>
        )}
      </>
    );
  };

  return (
    <div className="absolute z-50 mt-1 w-full bg-white rounded-xl shadow-lg overflow-hidden border border-apple-gray-200">
      <div className="max-h-96 overflow-y-auto">
        <ul>
          {suggestions.map((suggestion) => (
            <li 
              key={suggestion.to} 
              onClick={() => onSuggestionClick(suggestion)}
              className="px-4 py-3 hover:bg-apple-gray-50 cursor-pointer border-b border-apple-gray-100 last:border-none"
            >
              <div className="flex items-start">
                {suggestion.icon && (
                  <div className="mr-3 text-apple-gray-400 mt-1">
                    <suggestion.icon className="h-4 w-4" />
                  </div>
                )}
                <div>
                  <div className="font-medium text-apple-gray-800">
                    {highlightMatch(suggestion.title, searchTerm)}
                  </div>
                  <div className="text-sm text-apple-gray-600 line-clamp-1">
                    {highlightMatch(suggestion.description, searchTerm)}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchSuggestions;
