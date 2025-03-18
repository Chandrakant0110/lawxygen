
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnhancedLoadingSpinner from "./EnhancedLoadingSpinner";

interface LoadingSpinnerProps {
  fullPage?: boolean;
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  fullPage = true,
  message = "Loading service details..." 
}) => {
  // Component-only version (for embedding in other components)
  if (!fullPage) {
    return <EnhancedLoadingSpinner size="medium" message={message} />;
  }
  
  // Full page version with header and footer
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <EnhancedLoadingSpinner size="large" message={message} />
      </main>
      <Footer />
    </div>
  );
};

export default LoadingSpinner;
