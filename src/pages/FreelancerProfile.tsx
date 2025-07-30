
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, MapPin, Award, Clock, Calendar, Download, MessageCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Mock data for freelancer
const mockFreelancer = {
  id: "prof1",
  name: "Jessica Reynolds",
  title: "Corporate Lawyer",
  experience: "7 years",
  location: "New York, NY",
  rating: 4.9,
  reviews: 142,
  hourlyRate: 120,
  totalJobs: 98,
  avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  description: "I'm a corporate lawyer with expertise in contract law, business formation, and compliance. I've worked with startups and established companies across various industries, helping them navigate legal complexities and ensuring their businesses are protected.",
  specialties: ["Contract Law", "Corporate Law", "Business Formation", "Compliance", "Risk Management", "Mergers & Acquisitions"],
  education: [
    { degree: "Juris Doctor", institution: "Columbia Law School", year: "2016" },
    { degree: "Bachelor of Arts in Economics", institution: "University of Pennsylvania", year: "2013" }
  ],
  languages: ["English", "Spanish"],
  skills: ["Contract Drafting", "Negotiation", "Due Diligence", "Legal Research", "Regulatory Compliance", "Corporate Governance"],
  recentProjects: [
    { title: "Series A Funding Legal Documents", client: "Tech Startup Inc.", completed: "May 2023" },
    { title: "Corporate Restructuring", client: "Global Enterprises", completed: "January 2023" },
    { title: "Merger Agreement", client: "Finance Solutions LLC", completed: "October 2022" }
  ]
};

const FreelancerProfile = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState("overview");
  
  // In a real app, you would fetch the freelancer data using the ID
  // For now, we'll use mock data
  const freelancer = mockFreelancer;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="bg-white border-b">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-5">
                <img
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="object-cover w-24 h-24 rounded-full border-4 border-white shadow-sm"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{freelancer.name}</h1>
                  <p className="mt-1 text-lg text-gray-600">{freelancer.title}</p>
                  <div className="flex items-center mt-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="ml-1 text-gray-600">{freelancer.location}</span>
                    <div className="w-1 h-1 mx-2 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-gray-600">
                        {freelancer.rating} ({freelancer.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 mt-4 md:mt-0">
                <div className="text-xl font-bold text-gray-900">${freelancer.hourlyRate}/hr</div>
                <div className="flex space-x-3">
                  <Button className="bg-lawpurple-600 hover:bg-lawpurple-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                  <Button variant="outline">
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="w-full justify-start bg-white border-b">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold">About Me</h2>
                    <p className="text-gray-700">{freelancer.description}</p>
                    
                    <div className="mt-8">
                      <h3 className="mb-3 text-lg font-medium">Specializations</h3>
                      <div className="flex flex-wrap gap-2">
                        {freelancer.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="mb-3 text-lg font-medium">Education</h3>
                      <div className="space-y-3">
                        {freelancer.education.map((edu, index) => (
                          <div key={index} className="flex items-start">
                            <Calendar className="w-5 h-5 mt-1 mr-3 text-gray-400" />
                            <div>
                              <div className="font-medium">{edu.degree}</div>
                              <div className="text-sm text-gray-600">{edu.institution}, {edu.year}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="mb-3 text-lg font-medium">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {freelancer.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="border-lawblue-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="mb-3 text-lg font-medium">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {freelancer.languages.map((language, index) => (
                          <span key={index} className="text-gray-700">{language}{index < freelancer.languages.length - 1 ? ", " : ""}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold">Professional Info</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-600">Experience</div>
                          <div className="font-medium">{freelancer.experience}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Award className="w-5 h-5 mr-3 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-600">Jobs Completed</div>
                          <div className="font-medium">{freelancer.totalJobs}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-3 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-600">Rating</div>
                          <div className="font-medium">{freelancer.rating} out of 5</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="mb-3 text-lg font-medium">Recent Projects</h3>
                      <div className="space-y-3">
                        {freelancer.recentProjects.map((project, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded">
                            <div className="font-medium">{project.title}</div>
                            <div className="flex justify-between mt-1">
                              <span className="text-sm text-gray-600">Client: {project.client}</span>
                              <span className="text-sm text-gray-600">{project.completed}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="mt-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Services Offered</h2>
                <p className="text-gray-600 italic">This section will display the professional's services.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Client Reviews</h2>
                <p className="text-gray-600 italic">This section will display reviews from clients.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="portfolio" className="mt-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Portfolio</h2>
                <p className="text-gray-600 italic">This section will display the professional's portfolio and case studies.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FreelancerProfile;
