
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnhancedLoadingSpinner from "./EnhancedLoadingSpinner";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <EnhancedLoadingSpinner size="large" />
      </main>
      <Footer />
    </div>
  );
};

export default LoadingSpinner;
