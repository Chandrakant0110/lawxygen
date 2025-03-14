
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-700 text-white">
      <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2] bg-grid-8"></div>
      <div className="relative container-custom py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Find Expert Legal Professionals
            <span className="block mt-2 text-teal-200">For Your Specific Needs</span>
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl">
            Connect with top-rated legal professionals and services. From contract review to full legal representation, 
            find the perfect match for your requirements.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/search-results">Browse Services</Link>
            </Button>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              <Link to="/job-posting">Post a Job</Link>
            </Button>
          </div>
          
          <div className="relative mt-10 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full py-3 pl-10 pr-4 text-gray-900 border-0 rounded-l-md focus:ring-2 focus:ring-teal-500"
                  placeholder="Search for legal services..."
                />
              </div>
              <Button 
                type="submit" 
                className="px-6 rounded-l-none bg-teal-600 hover:bg-teal-700"
              >
                Search
              </Button>
            </form>
            <div className="flex flex-wrap mt-3 gap-2 text-sm text-teal-100 justify-center">
              <span>Popular:</span>
              <Link to="/search-results?q=contract" className="hover:text-white">Contract Review</Link>
              <span>•</span>
              <Link to="/search-results?q=consultation" className="hover:text-white">Legal Consultation</Link>
              <span>•</span>
              <Link to="/search-results?q=documents" className="hover:text-white">Document Preparation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
