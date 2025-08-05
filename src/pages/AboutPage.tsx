
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Award, Users, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lawblue-950 to-lawpurple-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold md:text-5xl mb-4 text-black">About Lawxygen</h1>
              <p className="text-xl mb-8 text-black">
                Connecting businesses and individuals with top legal professionals since 2018
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Lawxygen, our mission is to democratize access to high-quality legal services by connecting clients with the right legal professionals for their specific needs. We believe that expert legal advice should be accessible, affordable, and efficient.
                </p>
                <p className="text-lg text-gray-700">
                  We strive to simplify the process of finding and engaging with legal professionals, making it easier for individuals and businesses to navigate complex legal matters with confidence.
                </p>
              </div>
              
              <div className="order-first md:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                  alt="Lawxygen team meeting" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="Legal professionals" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We envision a world where finding the right legal professional is as easy as ordering a ride or booking a stay. Our platform aims to transform how legal services are discovered, delivered, and experienced.
                </p>
                <p className="text-lg text-gray-700">
                  By leveraging technology and our vast network of qualified professionals, we're building a future where legal assistance is just a click away, regardless of your location, budget, or the complexity of your legal matter.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-700">
                These principles guide every aspect of our business and help us deliver exceptional experiences for both clients and professionals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="bg-lawpurple-100 p-3 rounded-full">
                    <Shield className="w-8 h-8 text-lawpurple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Trust & Integrity</h3>
                <p className="text-gray-700 text-center">
                  We maintain the highest standards of honesty and ethical conduct in all our operations, fostering trust with clients and professionals alike.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="bg-lawblue-100 p-3 rounded-full">
                    <Award className="w-8 h-8 text-lawblue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Excellence</h3>
                <p className="text-gray-700 text-center">
                  We are committed to excellence in every service provided on our platform, ensuring clients receive top-quality legal assistance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Client-Centered</h3>
                <p className="text-gray-700 text-center">
                  We put our clients' needs first, focusing on creating seamless experiences and meaningful connections with legal professionals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Globe className="w-8 h-8 text-amber-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Accessibility</h3>
                <p className="text-gray-700 text-center">
                  We believe legal services should be accessible to all, regardless of background, location, or economic status.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
              <p className="text-lg text-gray-700">
                Our diverse team of experts is passionate about transforming the legal services industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img 
                  src="/lovable-uploads/67ebdc6c-78eb-483e-a497-997375701c88.png" 
                  alt="Harsh Rao" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-center"
                />
                <h3 className="text-xl font-semibold mb-1">Harsh Rao</h3>
                <p className="text-lawpurple-600 mb-3">Founder & CEO</p>
                <p className="text-gray-700">
                  Visionary entrepreneur with a strong background in legal tech, committed to making legal services more accessible and efficient for everyone.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Mitchell" 
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">Sarah Mitchell</h3>
                <p className="text-lawpurple-600 mb-3">COO & Co-Founder</p>
                <p className="text-gray-700">
                  Former legal tech executive with extensive experience in operations and scaling marketplace platforms in the professional services sector.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/68.jpg" 
                  alt="David Patel" 
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">David Patel</h3>
                <p className="text-lawpurple-600 mb-3">CTO</p>
                <p className="text-gray-700">
                  Tech innovator with a background in building secure, scalable platforms for sensitive industries including healthcare and financial services.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-lawblue-900 py-16 text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-black mb-8">
                Join thousands of satisfied clients who have found the perfect legal professional for their needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-white">
                  <Link to="/search-results">Find a Professional</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-black border-black hover:bg-white/10">
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

export default AboutPage;
