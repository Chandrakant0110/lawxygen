
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  onLoad,
  placeholder = "/placeholder.svg",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {(!isLoaded || error) && (
        <img
          src={placeholder}
          alt="Loading"
          className={cn("absolute inset-0 w-full h-full object-cover transition-opacity", 
            isLoaded ? "opacity-0" : "opacity-100")}
          width={width}
          height={height}
        />
      )}
      <img
        src={error ? placeholder : src}
        alt={alt}
        className={cn("w-full h-full object-cover transition-opacity duration-300",
          isLoaded && !error ? "opacity-100" : "opacity-0")}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default LazyImage;
