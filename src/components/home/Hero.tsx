
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="bg-gray-50 text-black pb-10">
      <div className="container-custom pt-20 md:pt-24 pb-16 md:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-black">
            Find Expert Legal Professionals
            <span className="block mt-4 text-gray-700">For Your Specific Needs</span>
          </h1>
          <p className="mt-8 text-lg text-gray-600 md:text-xl max-w-3xl mx-auto">
            Connect with top-rated legal professionals and services. From contract review to full legal representation, 
            find the perfect match for your requirements.
          </p>
          
          <div className="mt-12 max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="flex shadow-md rounded-md overflow-hidden">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full py-4 pl-12 pr-4 text-gray-900 border border-gray-200 rounded-l-md focus:ring-black focus:border-black"
                  placeholder="Search for legal services..."
                />
              </div>
              <Button 
                type="submit" 
                className="px-8 py-6 rounded-l-none bg-black hover:bg-gray-800 text-white font-medium text-lg"
              >
                Search
              </Button>
            </form>
            
            <div className="flex flex-wrap mt-4 gap-3 text-sm text-gray-500 justify-center">
              <span>Popular:</span>
              <Link to="/search-results?q=contract" className="hover:text-black">Contract Review</Link>
              <span>•</span>
              <Link to="/search-results?q=consultation" className="hover:text-black">Legal Consultation</Link>
              <span>•</span>
              <Link to="/search-results?q=documents" className="hover:text-black">Document Preparation</Link>
            </div>
          </div>
          
          {showLeadForm ? (
            <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200 shadow-sm max-w-md mx-auto">
              <LeadCaptureForm variant="popup" className="bg-transparent border-0 shadow-none p-0" />
              <Button 
                onClick={() => setShowLeadForm(false)} 
                variant="outline" 
                className="mt-4 border-gray-300 hover:bg-gray-50 text-gray-700"
              >
                Cancel
              </Button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-4 mt-12 justify-center">
              <Button 
                onClick={() => setShowLeadForm(true)} 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white font-medium text-lg px-8 py-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                Get a Free Consultation
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-gray-300 hover:bg-gray-50 text-gray-800 font-medium text-lg px-8 py-6"
              >
                <Link to="/search-results">Explore Our Services</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
