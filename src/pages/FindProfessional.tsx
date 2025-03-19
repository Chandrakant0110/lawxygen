
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LawyerCategories } from "../components/layout/FindLawyerData";

const FindProfessional = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find the Right Lawyer for Your Case</h1>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Our extensive network of qualified lawyers can help with your legal matters. Browse by category or let us help you find the perfect match for your specific needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {LawyerCategories.map((category, index) => (
              <div key={index} className="border rounded-lg p-5 bg-white shadow-sm">
                <h2 className="text-xl font-semibold text-primary mb-4">{category.title}</h2>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link 
                        to={item.link} 
                        className="text-gray-700 hover:text-primary flex items-center"
                      >
                        <span className="mr-2">•</span> {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/5 rounded-lg p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need help finding the right lawyer?</h3>
            <p className="text-gray-600 mb-6">
              Answer a few questions about your case, and we'll connect you with qualified lawyers who can help you.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 px-8 py-6 h-auto text-lg">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindProfessional;
