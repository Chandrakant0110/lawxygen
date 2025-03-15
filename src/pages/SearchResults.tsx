
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/search/SearchBar";
import FilterPanel from "@/components/search/FilterPanel";
import CategoryTabs from "@/components/search/CategoryTabs";
import ResultsHeader from "@/components/search/ResultsHeader";
import ViewToggle from "@/components/search/ViewToggle";
import ResultsGrid from "@/components/search/ResultsGrid";
import ResultsPagination from "@/components/search/ResultsPagination";
import { useSearchFilters } from "@/hooks/useSearchFilters";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  
  // Use our custom hook for search filters and state management
  const {
    searchQuery,
    setSearchQuery,
    searchType,
    setSearchType,
    filterOpen,
    setFilterOpen,
    priceRange,
    setPriceRange,
    rating,
    setRating,
    category,
    setCategory,
    sortBy,
    setSortBy,
    location,
    setLocation,
    view,
    setView,
    currentPage,
    paginatedServices,
    paginatedProfessionals,
    totalServicesPages,
    totalProfessionalsPages,
    handleResetFilters,
    handleApplyFilters,
    handlePageChange
  } = useSearchFilters();
  
  // Get the appropriate results and total pages based on search type
  const results = searchType === "professionals" ? paginatedProfessionals : paginatedServices;
  const totalPages = searchType === "professionals" ? totalProfessionalsPages : totalServicesPages;
  const resultCount = searchType === "professionals" ? paginatedProfessionals.length : paginatedServices.length;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Search Header */}
        <div className="bg-white border-b">
          <div className="container-custom py-6">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              
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
                
                <ViewToggle view={view} setView={setView} />
              </div>
            </div>
            
            {filterOpen && (
              <FilterPanel
                category={category}
                setCategory={setCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                rating={rating}
                setRating={setRating}
                location={location}
                setLocation={setLocation}
                handleResetFilters={handleResetFilters}
                handleApplyFilters={handleApplyFilters}
              />
            )}
            
            <div className="mt-4">
              <CategoryTabs 
                searchType={searchType} 
                setSearchType={setSearchType} 
              />
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <ResultsHeader 
              resultCount={resultCount}
              searchType={searchType}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            
            <ResultsGrid 
              searchType={searchType}
              results={results}
              view={view}
            />
            
            {/* Pagination */}
            {totalPages > 1 && (
              <ResultsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
