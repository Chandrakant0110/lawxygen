
import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  message?: string;
  className?: string;
}

const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = "medium", 
  message = "Loading service details...",
  className = ""
}) => {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12"
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin text-lawpurple-600 ${sizeClasses[size]} mb-2`} />
      {message && <p className="text-gray-600 text-sm">{message}</p>}
    </div>
  );
};

export default EnhancedLoadingSpinner;
