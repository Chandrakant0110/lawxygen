
import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  message?: string | null;
  className?: string;
  showMessage?: boolean;
}

const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = "medium", 
  message = "Loading...",
  className = "",
  showMessage = true
}) => {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12"
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <Loader2 className={`animate-spin text-lawpurple-600 ${sizeClasses[size]} ${showMessage ? 'mb-2' : ''}`} />
      {showMessage && message && <p className="text-gray-600 text-sm text-center">{message}</p>}
    </div>
  );
};

export default EnhancedLoadingSpinner;
