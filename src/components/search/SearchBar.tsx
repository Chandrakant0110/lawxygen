
import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { serviceCategories, ServiceItem } from "@/data/serviceCategories";
import SearchSuggestions from "@/components/search/SearchSuggestions";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<ServiceItem[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Create a flat array of all services for search
  const allServices = serviceCategories.flatMap(category => category.items);

  // Handle search filter as user types
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredSuggestions([]);
      return;
    }
    
    const searchLower = searchQuery.toLowerCase();
    const filtered = allServices.filter(service => 
      service.title.toLowerCase().includes(searchLower) || 
      service.description.toLowerCase().includes(searchLower)
    ).slice(0, 8); // Limit to 8 suggestions
    
    setFilteredSuggestions(filtered);
  }, [searchQuery]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: ServiceItem) => {
    navigate(suggestion.to);
    setShowSuggestions(false);
    setSearchQuery("");
  };

  return (
    <div className="relative flex-grow" ref={searchRef}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Search className="w-5 h-5 text-apple-gray-400" />
      </div>
      <Input 
        type="search" 
        placeholder="Search for legal services or professionals..." 
        className="pl-12 py-3 border-apple-gray-200 rounded-full focus-visible:ring-apple-blue"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => {
          if (searchQuery.trim() && filteredSuggestions.length > 0) {
            setShowSuggestions(true);
          }
        }}
      />
      
      {showSuggestions && filteredSuggestions.length > 0 && (
        <SearchSuggestions 
          suggestions={filteredSuggestions} 
          onSuggestionClick={handleSuggestionClick}
          searchTerm={searchQuery}
        />
      )}
    </div>
  );
};

export default SearchBar;
