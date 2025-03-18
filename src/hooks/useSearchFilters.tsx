
import { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { professionals, services } from "@/mock/mockData";

interface UseSearchFiltersProps {
  initialSearchType?: "professionals" | "services";
}

export const useSearchFilters = ({ initialSearchType = "services" }: UseSearchFiltersProps = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"professionals" | "services">(
    initialSearchType
  );
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState("any");
  const [rating, setRating] = useState("any");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState("relevant");
  const [location, setLocation] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Initialize from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [searchParams]);
  
  // Filter services based on selected filters - using useMemo to prevent recalculation
  const filteredServices = useMemo(() => services.filter(service => {
    // Search query filter
    if (searchQuery && !service.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (category !== "all" && service.category !== category) {
      return false;
    }
    
    // Price range filter
    if (priceRange === "0-100" && service.price > 100) return false;
    if (priceRange === "100-200" && (service.price < 100 || service.price > 200)) return false;
    if (priceRange === "200-500" && (service.price < 200 || service.price > 500)) return false;
    if (priceRange === "500+" && service.price < 500) return false;
    
    // Rating filter
    if (rating === "4+" && service.rating < 4) return false;
    if (rating === "3+" && service.rating < 3) return false;
    if (rating === "2+" && service.rating < 2) return false;
    
    return true;
  }), [searchQuery, category, priceRange, rating]);

  // Filter professionals based on selected filters - using useMemo
  const filteredProfessionals = useMemo(() => professionals.filter(professional => {
    // Search query filter
    if (searchQuery && !professional.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (category !== "all" && professional.category !== category) {
      return false;
    }
    
    // Price range filter
    if (priceRange === "0-100" && professional.hourlyRate > 100) return false;
    if (priceRange === "100-200" && (professional.hourlyRate < 100 || professional.hourlyRate > 200)) return false;
    if (priceRange === "200-500" && (professional.hourlyRate < 200 || professional.hourlyRate > 500)) return false;
    if (priceRange === "500+" && professional.hourlyRate < 500) return false;
    
    // Rating filter
    if (rating === "4+" && professional.rating < 4) return false;
    if (rating === "3+" && professional.rating < 3) return false;
    if (rating === "2+" && professional.rating < 2) return false;
    
    return true;
  }), [searchQuery, category, priceRange, rating]);

  // Sort services and professionals - using useMemo
  const sortedServices = useMemo(() => [...filteredServices].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    // Default: most relevant
    return 0;
  }), [filteredServices, sortBy]);

  const sortedProfessionals = useMemo(() => [...filteredProfessionals].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "price-low") return a.hourlyRate - b.hourlyRate;
    if (sortBy === "price-high") return b.hourlyRate - a.hourlyRate;
    // Default: most relevant
    return 0;
  }), [filteredProfessionals, sortBy]);

  const handleResetFilters = useCallback(() => {
    setPriceRange("any");
    setRating("any");
    setSortBy("relevant");
    setLocation("");
    setCurrentPage(1);
    
    // Keep the category if it was set in the URL
    const categoryParam = searchParams.get("category");
    if (!categoryParam) {
      setCategory("all");
    }
  }, [searchParams]);

  const handleApplyFilters = useCallback(() => {
    setFilterOpen(false);
    setCurrentPage(1); // Reset to page 1 when filters change
  }, []);
  
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  // Apply pagination - using useMemo to prevent recalculation
  const ITEMS_PER_PAGE = 12;
  
  const paginatedServices = useMemo(() => sortedServices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  ), [sortedServices, currentPage]);
  
  const paginatedProfessionals = useMemo(() => sortedProfessionals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  ), [sortedProfessionals, currentPage]);
  
  // Calculate total pages
  const totalServicesPages = useMemo(() => 
    Math.ceil(sortedServices.length / ITEMS_PER_PAGE), 
    [sortedServices.length]
  );
  
  const totalProfessionalsPages = useMemo(() => 
    Math.ceil(sortedProfessionals.length / ITEMS_PER_PAGE),
    [sortedProfessionals.length]
  );
  
  return {
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
    filteredServices,
    sortedServices,
    paginatedServices,
    filteredProfessionals,
    sortedProfessionals,
    paginatedProfessionals,
    totalServicesPages,
    totalProfessionalsPages,
    handleResetFilters,
    handleApplyFilters,
    handlePageChange
  };
};
