
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  ChevronDown, 
  Grid, 
  List 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfessionalCard from "@/components/ui/ProfessionalCard";
import ServiceCard from "@/components/ui/ServiceCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { professionals, services } from "@/mock/mockData";

const SearchResults = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchType, setSearchType] = useState<"professionals" | "services">("services");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Search Header */}
        <div className="bg-white border-b">
          <div className="container-custom py-6">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <Input 
                  type="search" 
                  placeholder="Search for legal services or professionals..." 
                  className="pl-10"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                </Button>
                
                <div className="hidden md:flex border rounded-md overflow-hidden">
                  <Button 
                    variant="ghost" 
                    className={`rounded-none px-3 ${view === "grid" ? "bg-muted" : ""}`}
                    onClick={() => setView("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={`rounded-none px-3 ${view === "list" ? "bg-muted" : ""}`}
                    onClick={() => setView("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {filterOpen && (
              <div className="mt-4 p-4 border rounded-md bg-gray-50 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Category
                  </label>
                  <select className="w-full rounded-md border-gray-300 py-2 px-3">
                    <option>All Categories</option>
                    <option>Corporate Law</option>
                    <option>Litigation</option>
                    <option>Real Estate</option>
                    <option>Family Law</option>
                    <option>Intellectual Property</option>
                    <option>Tax Law</option>
                    <option>Immigration</option>
                    <option>Employment Law</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range
                  </label>
                  <select className="w-full rounded-md border-gray-300 py-2 px-3">
                    <option>Any Price</option>
                    <option>$0 - $100</option>
                    <option>$100 - $200</option>
                    <option>$200 - $500</option>
                    <option>$500+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                  </label>
                  <select className="w-full rounded-md border-gray-300 py-2 px-3">
                    <option>Any Rating</option>
                    <option>4+ Stars</option>
                    <option>3+ Stars</option>
                    <option>2+ Stars</option>
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
                    />
                  </div>
                </div>
                
                <div className="md:col-span-4 flex justify-end">
                  <Button 
                    variant="outline" 
                    className="mr-2"
                  >
                    Reset
                  </Button>
                  <Button>
                    Apply Filters
                  </Button>
                </div>
              </div>
            )}
            
            <div className="mt-4">
              <Tabs defaultValue="services" className="w-full" onValueChange={(value) => setSearchType(value as "professionals" | "services")}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="professionals">Professionals</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {searchType === "professionals" ? "Professional Legal Experts" : "Legal Services"} 
                <span className="text-gray-500 ml-2 text-lg font-normal">
                  ({searchType === "professionals" ? professionals.length : services.length} results)
                </span>
              </h2>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select className="text-sm border-gray-300 rounded-md py-1">
                  <option>Most Relevant</option>
                  <option>Highest Rated</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {searchType === "professionals" ? (
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
                {professionals.map((professional) => (
                  <ProfessionalCard 
                    key={professional.id}
                    id={professional.id}
                    name={professional.name}
                    title={professional.title}
                    rating={professional.rating}
                    reviews={professional.reviews}
                    hourlyRate={professional.hourlyRate}
                    avatar={professional.avatar}
                    specialties={professional.specialties}
                    isTopRated={professional.isTopRated}
                  />
                ))}
              </div>
            ) : (
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
                {services.map((service) => (
                  <ServiceCard 
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    price={service.price}
                    providerId={service.providerId}
                    providerName={service.providerName}
                    providerAvatar={service.providerAvatar}
                    rating={service.rating}
                    reviews={service.reviews}
                    image={service.image}
                    category={service.category}
                    tags={service.tags}
                  />
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
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
                <span className="px-2">...</span>
                <Button variant="outline" size="sm">
                  8
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
