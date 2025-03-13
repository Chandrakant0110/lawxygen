
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter, Star, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProfessionalCard from "@/components/ui/ProfessionalCard";
import ServiceCard from "@/components/ui/ServiceCard";

// Mock data for professionals and services
import { professionals } from "./mockData";
import { services } from "./mockData";

const SearchResults = () => {
  const location = useLocation();
  const [searchType, setSearchType] = useState<"professionals" | "services">("professionals");
  const [showFilters, setShowFilters] = useState(false);
  
  // Get query params
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q") || "";
  const categoryFilter = queryParams.get("category") || "";
  
  // Set up search state
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [minRating, setMinRating] = useState(0);
  
  // Function to handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // In a real app, you would filter the results based on the search term
  };
  
  // Toggle filters on mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="bg-white border-b">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Search Results</h1>
              
              <div className="mt-4 md:mt-0">
                <div className="flex space-x-2">
                  <Button 
                    variant={searchType === "professionals" ? "default" : "outline"}
                    onClick={() => setSearchType("professionals")}
                    className={searchType === "professionals" ? "bg-lawpurple-600 hover:bg-lawpurple-700" : ""}
                  >
                    Professionals
                  </Button>
                  <Button 
                    variant={searchType === "services" ? "default" : "outline"}
                    onClick={() => setSearchType("services")}
                    className={searchType === "services" ? "bg-lawpurple-600 hover:bg-lawpurple-700" : ""}
                  >
                    Services
                  </Button>
                  <Button 
                    variant="outline" 
                    className="md:hidden"
                    onClick={toggleFilters}
                  >
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <form onSubmit={handleSearch} className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2"
                    placeholder={`Search for legal ${searchType}...`}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="ml-2 bg-lawpurple-600 hover:bg-lawpurple-700"
                >
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters - Desktop (always visible) & Mobile (toggleable) */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">Filters</h2>
                    <Button variant="ghost" size="sm" className="lg:hidden" onClick={toggleFilters}>
                      Close
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3 text-sm font-medium">Categories</h3>
                      <div className="space-y-2">
                        {[
                          "Corporate Law",
                          "Litigation",
                          "Real Estate",
                          "Family Law",
                          "Intellectual Property",
                          "Tax Law",
                          "Immigration",
                          "Employment Law"
                        ].map((category) => (
                          <div key={category} className="flex items-center">
                            <Checkbox id={`category-${category}`} />
                            <label
                              htmlFor={`category-${category}`}
                              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="mb-3 text-sm font-medium">Price Range</h3>
                      <Slider
                        defaultValue={[0, 200]}
                        max={500}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-600">${priceRange[0]}</span>
                        <span className="text-sm text-gray-600">${priceRange[1]}+</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="mb-3 text-sm font-medium">Rating</h3>
                      <Select 
                        defaultValue="0" 
                        onValueChange={(value) => setMinRating(parseInt(value))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Minimum rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Any Rating</SelectItem>
                          <SelectItem value="3">3+ Stars</SelectItem>
                          <SelectItem value="4">4+ Stars</SelectItem>
                          <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="mb-3 text-sm font-medium">Location</h3>
                      <Select defaultValue="anywhere">
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="anywhere">Anywhere</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button className="w-full bg-lawpurple-600 hover:bg-lawpurple-700">
                      Apply Filters
                    </Button>
                    <Button variant="outline" className="w-full">
                      Reset Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Results */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-600">
                    {searchType === "professionals" ? professionals.length : services.length} results found
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {searchType === "professionals" ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {professionals.map((professional) => (
                    <ProfessionalCard key={professional.id} {...professional} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                  ))}
                </div>
              )}
              
              <div className="flex justify-center mt-8">
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-lawpurple-600 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
