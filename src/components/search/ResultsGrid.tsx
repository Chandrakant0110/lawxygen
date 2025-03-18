
import React from "react";
import ServiceCard, { ServiceCardProps } from "@/components/ui/ServiceCard";
import ProfessionalCard from "@/components/ui/ProfessionalCard";

interface ResultsGridProps {
  searchType: "professionals" | "services";
  results: any[];
  view: "grid" | "list";
}

// Create memoized item components for better performance
const MemoizedServiceCard = React.memo(ServiceCard);
const MemoizedProfessionalCard = React.memo(ProfessionalCard);

const ResultsGrid: React.FC<ResultsGridProps> = React.memo(({ searchType, results, view }) => {
  const gridClass = view === "grid" 
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
    : "grid-cols-1";

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {searchType === "professionals" ? (
        results.map((professional) => (
          <MemoizedProfessionalCard 
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
        ))
      ) : (
        results.map((service: ServiceCardProps) => (
          <MemoizedServiceCard 
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
        ))
      )}
    </div>
  );
});

export default ResultsGrid;
