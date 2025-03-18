
import React from "react";
import ServiceCard, { ServiceCardProps } from "@/components/ui/ServiceCard";

interface ResultsGridProps {
  results: ServiceCardProps[];
  view: "grid" | "list";
}

// Create memoized item component for better performance
const MemoizedServiceCard = React.memo(ServiceCard);

const ResultsGrid: React.FC<ResultsGridProps> = React.memo(({ results, view }) => {
  const gridClass = view === "grid" 
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
    : "grid-cols-1";

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {results.map((service) => (
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
      ))}
    </div>
  );
});

export default ResultsGrid;
