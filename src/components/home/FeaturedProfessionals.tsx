
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Calendar } from "lucide-react";

const ConsultationSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Get Free Legal Consultation</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our experts are ready to assist you with all your legal and business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-lawpurple-100 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-lawpurple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Chat With Us</h3>
            <p className="text-gray-600 mb-6">Get immediate assistance through our online chat service.</p>
            <Button asChild className="w-full bg-lawpurple-600 hover:bg-lawpurple-700">
              <Link to="/contact">Start Chat</Link>
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
            <p className="text-gray-600 mb-6">Speak directly with our legal experts for personalized advice.</p>
            <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
              <a href="tel:+919876543210">Call Now</a>
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Schedule Meeting</h3>
            <p className="text-gray-600 mb-6">Book a free consultation at a time convenient for you.</p>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Need urgent assistance? Our team is available to help you now.</p>
          <Button asChild size="lg" variant="outline" className="border-lawpurple-200 text-lawpurple-950 hover:bg-lawpurple-50">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
