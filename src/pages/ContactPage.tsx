import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lawblue-950 to-lawpurple-900 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-gray-200">
                Have questions or need assistance? We're here to help!
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lawpurple-100 text-lawpurple-600 mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-700 mb-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
                <a href="tel:+18001234567" className="text-lawpurple-600 font-medium hover:underline">
                  +1 (800) 123-4567
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lawpurple-100 text-lawpurple-600 mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-700 mb-2">We'll respond within 24 hours</p>
                <a href="mailto:support@lawxygen.com" className="text-lawpurple-600 font-medium hover:underline">
                  support@lawxygen.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lawpurple-100 text-lawpurple-600 mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-700 mb-2">123 Legal Avenue, Suite 500</p>
                <p className="text-lawpurple-600 font-medium">
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700 mb-4">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      className="bg-lawpurple-600 hover:bg-lawpurple-700"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="johndoe@example.com"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lawpurple-500"
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-lawpurple-600 hover:bg-lawpurple-700"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
              
              {/* Business Hours & Map */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours & Location</h2>
                
                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-lawpurple-600 mr-2" />
                    <h3 className="text-lg font-semibold">Business Hours</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Our Location</h3>
                  
                  {/* This is a placeholder for a map. In a real project, you'd integrate Google Maps or another mapping service */}
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-gray-400 mr-2" />
                    <span className="text-gray-500">Map location placeholder</span>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Lawxygen Headquarters</h4>
                    <p className="text-gray-700">
                      123 Legal Avenue, Suite 500<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-700">
                Find quick answers to common questions about our services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">How does Lawxygen work?</h3>
                  <p className="text-gray-700">
                    Lawxygen connects clients with legal professionals through our online marketplace. You can browse professional profiles, read reviews, and choose the right expert for your specific legal needs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">How do I pay for services?</h3>
                  <p className="text-gray-700">
                    We offer secure payment processing through our platform. You can pay using credit/debit cards, and funds are only released to the professional once you're satisfied with the service.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">What if I'm not satisfied with the service?</h3>
                  <p className="text-gray-700">
                    We have a satisfaction guarantee policy. If you're not satisfied, please contact our support team within 7 days of service completion, and we'll work to resolve the issue.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/faq">View All FAQs</Link>
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

export default ContactPage;
