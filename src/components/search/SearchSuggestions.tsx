
import React from "react";
import { ServiceItem } from "@/data/serviceCategories";

interface SearchSuggestionsProps {
  suggestions: ServiceItem[];
  searchTerm: string;
  onSuggestionClick: (suggestion: ServiceItem) => void;
}

// Create a memoized highlight function
const highlightText = (text: string, query: string) => {
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

const SearchSuggestionItem = React.memo(({ 
  suggestion, 
  searchTerm, 
  onClick 
}: { 
  suggestion: ServiceItem; 
  searchTerm: string; 
  onClick: () => void 
}) => {
  return (
    <li 
      onClick={onClick}
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
            {highlightText(suggestion.title, searchTerm)}
          </div>
          <div className="text-sm text-apple-gray-600 line-clamp-1">
            {highlightText(suggestion.description, searchTerm)}
          </div>
        </div>
      </div>
    </li>
  );
});

const SearchSuggestions: React.FC<SearchSuggestionsProps> = React.memo(({ 
  suggestions, 
  searchTerm, 
  onSuggestionClick 
}) => {
  return (
    <div className="absolute z-50 mt-1 w-full bg-white rounded-xl shadow-lg overflow-hidden border border-apple-gray-200">
      <div className="max-h-96 overflow-y-auto">
        <ul>
          {suggestions.map((suggestion) => (
            <SearchSuggestionItem 
              key={suggestion.to} 
              suggestion={suggestion}
              searchTerm={searchTerm}
              onClick={() => onSuggestionClick(suggestion)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default SearchSuggestions;
