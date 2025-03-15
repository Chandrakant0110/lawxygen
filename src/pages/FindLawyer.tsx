
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin, ChevronDown, MessageSquare } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfessionalCard from "@/components/ui/ProfessionalCard";
import { professionals } from "@/mock/mockData";

// Filter lawyers from professionals (those with legal specialties)
const legalSpecialties = [
  "Corporate Law", "Litigation", "Family Law", "Criminal Law", 
  "Intellectual Property", "Real Estate Law", "Tax Law", "Immigration Law"
];

const lawyers = professionals.filter(pro => 
  pro.specialties.some(specialty => legalSpecialties.includes(specialty))
);

const FindLawyer = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  const filteredLawyers = selectedSpecialty === "all" 
    ? lawyers 
    : lawyers.filter(lawyer => lawyer.specialties.includes(selectedSpecialty));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white">
          <div className="container-custom py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold md:text-4xl">Find Your Perfect Lawyer</h1>
              <p className="mt-4 text-lg text-white/90">
                Connect with experienced legal professionals specialized in various fields of law
              </p>
              
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input 
                      type="search" 
                      placeholder="Search for lawyers by name or specialty..." 
                      className="pl-10 bg-white text-gray-900"
                    />
                  </div>
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input 
                      type="text" 
                      placeholder="Location" 
                      className="pl-10 bg-white text-gray-900"
                    />
                  </div>
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Specialties */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Legal Specialty</h2>
            
            <Tabs 
              defaultValue="all" 
              className="w-full"
              onValueChange={(value) => setSelectedSpecialty(value)}
            >
              <TabsList className="mb-8 flex flex-wrap h-auto">
                <TabsTrigger value="all">All Specialties</TabsTrigger>
                <TabsTrigger value="Corporate Law">Corporate Law</TabsTrigger>
                <TabsTrigger value="Litigation">Litigation</TabsTrigger>
                <TabsTrigger value="Family Law">Family Law</TabsTrigger>
                <TabsTrigger value="Criminal Law">Criminal Law</TabsTrigger>
                <TabsTrigger value="Intellectual Property">Intellectual Property</TabsTrigger>
                <TabsTrigger value="Real Estate Law">Real Estate Law</TabsTrigger>
                <TabsTrigger value="Tax Law">Tax Law</TabsTrigger>
                <TabsTrigger value="Immigration Law">Immigration Law</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Available Lawyers 
                <span className="text-gray-500 ml-2 text-lg font-normal">
                  ({filteredLawyers.length} results)
                </span>
              </h3>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="w-4 h-4" />
                Filters
                <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""}`} />
              </Button>
            </div>
            
            {filterOpen && (
              <div className="mb-6 p-4 border rounded-md bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience
                  </label>
                  <select className="w-full rounded-md border-gray-300 py-2 px-3">
                    <option>Any Experience</option>
                    <option>1+ years</option>
                    <option>3+ years</option>
                    <option>5+ years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                  </label>
                  <select className="w-full rounded-md border-gray-300 py-2 px-3">
                    <option>Any Rating</option>
                    <option>4+ Stars</option>
                    <option>3+ Stars</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sort By
                  </label>
                  <select className="w-full rounded-md border-gray-300 py-2 px-3">
                    <option>Most Relevant</option>
                    <option>Highest Rated</option>
                    <option>Lowest Hourly Rate</option>
                    <option>Highest Hourly Rate</option>
                  </select>
                </div>
                
                <div className="md:col-span-3 flex justify-end">
                  <Button 
                    variant="outline" 
                    className="mr-2"
                  >
                    Reset
                  </Button>
                  <Button>
                    Apply Filters
                  </Button>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredLawyers.map((lawyer) => (
                <ProfessionalCard 
                  key={lawyer.id}
                  id={lawyer.id}
                  name={lawyer.name}
                  title={lawyer.title}
                  rating={lawyer.rating}
                  reviews={lawyer.reviews}
                  hourlyRate={lawyer.hourlyRate}
                  avatar={lawyer.avatar}
                  specialties={lawyer.specialties}
                  isTopRated={lawyer.isTopRated}
                />
              ))}
            </div>
            
            {filteredLawyers.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No lawyers found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any lawyers matching your selected specialty.
                </p>
                <Button
                  onClick={() => setSelectedSpecialty("all")}
                >
                  View All Lawyers
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Search for a Lawyer</h3>
                <p className="text-gray-600">
                  Browse our directory of qualified lawyers or search by specialty, location, or keywords.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Compare and Choose</h3>
                <p className="text-gray-600">
                  Review profiles, ratings, and experience to find the perfect lawyer for your needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Connect and Consult</h3>
                <p className="text-gray-600">
                  Contact your chosen lawyer directly through our platform and get the legal help you need.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FindLawyer;
