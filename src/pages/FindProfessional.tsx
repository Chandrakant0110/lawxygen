
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const FindProfessional = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Get Expert Legal Consultation</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our legal services have been updated. Instead of individual professionals, we now offer 
            comprehensive consultation services with our expert legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-lawpurple-600 hover:bg-lawpurple-700">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/search-results">Browse Services</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindProfessional;
