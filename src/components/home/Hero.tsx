
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        // Close any open elements if needed
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-apple-gray-50 text-black pb-16">
      <div className="container-custom pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-black">
            Find Expert Legal Professionals
            <span className="block mt-3 text-apple-gray-600">For Your Specific Needs</span>
          </h1>
          
          <p className="mt-8 text-xl text-apple-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with top-rated legal professionals and services. From contract review to full legal representation, 
            find the perfect match for your requirements.
          </p>
          
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative" ref={searchRef}>
              <form onSubmit={handleSearch} className="flex rounded-full overflow-hidden shadow-md">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-5">
                    <Search className="w-5 h-5 text-apple-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full py-4 pl-12 pr-4 text-apple-gray-800 border-none focus:outline-none focus:ring-0"
                    placeholder="Search for legal services..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="px-8 py-6 bg-apple-blue hover:bg-apple-darkblue text-white font-medium text-lg"
                >
                  Search
                </Button>
              </form>
            </div>
            
            <div className="flex flex-wrap mt-5 gap-4 text-sm text-apple-gray-500 justify-center">
              <span>Popular:</span>
              <Link to="/contact" className="hover:text-apple-blue transition-colors">Trademark Registration</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-apple-blue transition-colors">Company Registration</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-apple-blue transition-colors">GST Registration</Link>
            </div>
          </div>
          
          {showLeadForm ? (
            <div className="mt-14 bg-white p-8 rounded-2xl border border-apple-gray-200 shadow-lg max-w-md mx-auto">
              <LeadCaptureForm variant="popup" className="bg-transparent border-0 shadow-none p-0" />
              <Button 
                onClick={() => setShowLeadForm(false)} 
                variant="outline" 
                className="mt-5 border-apple-gray-300 hover:bg-apple-gray-50 text-apple-gray-700"
              >
                Cancel
              </Button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 mt-14 justify-center">
              <Button 
                onClick={() => setShowLeadForm(true)} 
                size="lg" 
                className="bg-apple-blue hover:bg-apple-darkblue text-white font-medium text-lg px-8 py-6 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                Get a Free Consultation
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-apple-gray-300 hover:bg-apple-gray-50 text-apple-gray-800 font-medium text-lg px-8 py-6 rounded-full"
              >
                <Link to="/contact">Explore Our Services</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
