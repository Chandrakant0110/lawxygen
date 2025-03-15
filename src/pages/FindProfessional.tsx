
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

// Define professional categories
const professionalCategories = [
  "Business Incorporation", 
  "Government Registrations", 
  "Compliance", 
  "Taxation", 
  "Intellectual Property", 
  "Legal Documents", 
  "Advisory",
  "Specialized Services"
];

const FindProfessional = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // For demonstration, we'll use the existing professionals data
  const filteredProfessionals = selectedCategory === "all" 
    ? professionals 
    : professionals.filter(pro => 
        pro.specialties.some(specialty => 
          specialty.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-sky-600 text-white">
          <div className="container-custom py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold md:text-4xl">Find Your Legal Professional</h1>
              <p className="mt-4 text-lg text-white/90">
                Connect with specialized professionals for all your business and legal service needs
              </p>
              
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input 
                      type="search" 
                      placeholder="Search for business services or professionals..." 
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
        
        {/* Service Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Service Category</h2>
            
            <Tabs 
              defaultValue="all" 
              className="w-full"
              onValueChange={(value) => setSelectedCategory(value)}
            >
              <TabsList className="mb-8 flex flex-wrap h-auto">
                <TabsTrigger value="all">All Categories</TabsTrigger>
                {professionalCategories.map(category => (
                  <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Available Professionals 
                <span className="text-gray-500 ml-2 text-lg font-normal">
                  ({filteredProfessionals.length} results)
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
              {filteredProfessionals.map((professional) => (
                <ProfessionalCard 
                  key={professional.id}
                  id={professional.id}
                  name={professional.name}
                  title={professional.title}
                  rating={professional.rating}
                  reviews={professional.reviews}
                  hourlyRate={professional.hourlyRate}
                  avatar={professional.avatar}
                  specialties={professional.specialties}
                  isTopRated={professional.isTopRated}
                />
              ))}
            </div>
            
            {filteredProfessionals.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No professionals found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any professionals matching your selected category.
                </p>
                <Button
                  onClick={() => setSelectedCategory("all")}
                >
                  View All Professionals
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Services Details */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Professional Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-4">Business Incorporation Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Private Limited Company Registration</li>
                  <li>• Limited Liability Partnership (LLP) Registration</li>
                  <li>• One Person Company (OPC) Registration</li>
                  <li>• Partnership Firm Registration</li>
                  <li>• Sole Proprietorship Registration</li>
                  <li>• Section 8 Company Registration</li>
                </ul>
              </div>
              
              <div className="p-6 border rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-4">Government Registrations & Licenses</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• GST Registration</li>
                  <li>• Import Export Code (IEC) Registration</li>
                  <li>• Professional Tax Registration</li>
                  <li>• Shops and Establishments Registration</li>
                  <li>• FSSAI (Food License) Registration</li>
                  <li>• MSME (Udyam) Registration</li>
                </ul>
              </div>
              
              <div className="p-6 border rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-4">Compliance & Taxation Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Annual ROC Filings for Companies and LLPs</li>
                  <li>• GST Return Filing</li>
                  <li>• Tax Audits</li>
                  <li>• Income Tax Return (ITR) Filing</li>
                  <li>• Tax Planning and Advisory</li>
                  <li>• Representation in Tax Assessments</li>
                </ul>
              </div>
              
              <div className="p-6 border rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-4">Intellectual Property & Legal Documents</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Trademark Search and Registration</li>
                  <li>• Patent Search and Registration</li>
                  <li>• Copyright Registration</li>
                  <li>• Shareholders Agreements</li>
                  <li>• Non-Disclosure Agreements (NDA)</li>
                  <li>• Employment Contracts</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Looking for a specific service? Browse all our service categories or contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/search-results">Browse All Services</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FindProfessional;
