
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Heart, 
  Building, 
  Award,
  Globe,
  Laptop
} from "lucide-react";
import { Link } from "react-router-dom";

const openPositions = [
  {
    id: "legal-tech-engineer",
    title: "Legal Tech Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    id: "senior-product-manager",
    title: "Senior Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time"
  },
  {
    id: "legal-content-writer",
    title: "Legal Content Writer",
    department: "Marketing",
    location: "Remote",
    type: "Contract"
  },
  {
    id: "legal-operations-specialist",
    title: "Legal Operations Specialist",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time"
  },
  {
    id: "business-development-representative",
    title: "Business Development Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time"
  }
];

const benefits = [
  {
    icon: Globe,
    title: "Remote-First Environment",
    description: "Work from anywhere in the world with our flexible remote policy."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Personalized career paths and mentorship opportunities."
  },
  {
    icon: Award,
    title: "Competitive Compensation",
    description: "Salary, equity, and comprehensive benefits package."
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive healthcare and wellness stipend."
  },
  {
    icon: Building,
    title: "Company Retreats",
    description: "Regular team gatherings in exciting locations worldwide."
  },
  {
    icon: Laptop,
    title: "Learning & Development",
    description: "Budget for courses, conferences, and educational resources."
  }
];

const CareersPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lawblue-950 to-lawpurple-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold md:text-5xl mb-4">Join Our Team</h1>
              <p className="text-xl text-gray-200 mb-8">
                Help us revolutionize the legal services industry
              </p>
              <Button asChild size="lg" className="bg-lawpurple-600 hover:bg-lawpurple-700">
                <a href="#open-positions">View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Culture</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Lawxygen, we're building a platform that makes legal services accessible to everyone. We're a team of passionate individuals who believe in using technology to simplify complex legal processes.
                </p>
                <p className="text-lg text-gray-700">
                  Our culture is built on trust, transparency, and innovation. We value diverse perspectives and believe that the best ideas come from collaborative environments where everyone's voice is heard.
                </p>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Lawxygen team" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
              <p className="text-lg text-gray-700">
                Join a team that values work-life balance, professional growth, and making a meaningful impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-lawpurple-100 p-3 rounded-full mr-4">
                      <benefit.icon className="w-6 h-6 text-lawpurple-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Open Positions */}
        <section id="open-positions" className="py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-700">
                Join our team and help shape the future of legal services.
              </p>
            </div>
            
            <div className="space-y-4">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                          <Globe className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                          <Users className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0 bg-lawpurple-600 hover:bg-lawpurple-700">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-6">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
              </p>
              <Button variant="outline" className="border-lawpurple-600 text-lawpurple-600 hover:bg-lawpurple-50">
                Send Your Resume
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-lawblue-900 py-16 text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Join our mission to transform how legal services are discovered, delivered, and experienced.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-lawpurple-600 hover:bg-lawpurple-700">
                  <a href="#open-positions">View Open Positions</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
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

export default CareersPage;
