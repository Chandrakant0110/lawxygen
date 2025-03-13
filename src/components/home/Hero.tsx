
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
    <div className="relative overflow-hidden bg-gradient-to-r from-lawblue-950 to-lawpurple-900 text-white">
      <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2] bg-grid-8"></div>
      <div className="relative container-custom py-16 md:py-24">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Find Expert Legal Professionals
              <span className="block mt-2 text-lawpurple-300">For Your Specific Needs</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 md:text-xl">
              Connect with top-rated legal professionals and services. From contract review to full legal representation, 
              find the perfect match for your requirements.
            </p>
            
            <div className="flex flex-col gap-4 mt-8 md:flex-row md:justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-lawpurple-600 hover:bg-lawpurple-700">
                <Link to="/search-results">Browse Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/job-posting">Post a Job</Link>
              </Button>
            </div>
            
            <div className="relative mt-10 max-w-xl mx-auto lg:mx-0">
              <form onSubmit={handleSearch} className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full py-3 pl-10 pr-4 text-gray-900 border-0 rounded-l-md focus:ring-2 focus:ring-lawpurple-500"
                    placeholder="Search for legal services..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="px-6 rounded-l-none bg-lawpurple-600 hover:bg-lawpurple-700"
                >
                  Search
                </Button>
              </form>
              <div className="flex flex-wrap mt-3 gap-2 text-sm text-gray-300 justify-center lg:justify-start">
                <span>Popular:</span>
                <Link to="/search-results?q=contract" className="hover:text-white">Contract Review</Link>
                <span>•</span>
                <Link to="/search-results?q=consultation" className="hover:text-white">Legal Consultation</Link>
                <span>•</span>
                <Link to="/search-results?q=documents" className="hover:text-white">Document Preparation</Link>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-lawpurple-400 to-lawblue-500 opacity-75 blur"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                  alt="Legal professionals at work" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
