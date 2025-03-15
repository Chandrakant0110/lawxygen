
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";

const EnhancedLeadCaptureSection = () => {
  const [showForm, setShowForm] = React.useState(false);
  
  return (
    <section className="py-16 bg-gradient-to-r from-violet-700 to-purple-700">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Legal Assistance?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Our team of experienced legal professionals is ready to help you navigate 
              complex business and legal challenges. Get started with a free consultation.
            </p>
            
            {!showForm && (
              <Button 
                onClick={() => setShowForm(true)}
                size="lg" 
                className="bg-white text-violet-700 hover:bg-gray-100"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6">
            {showForm ? (
              <LeadCaptureForm variant="inline" className="bg-transparent border-0 shadow-none p-0" />
            ) : (
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-violet-800 mb-4">
                  How Can We Help You?
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill out our simple form to get a free consultation with our legal experts. 
                  We'll get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setShowForm(true)}
                  size="lg" 
                  className="bg-violet-600 text-white hover:bg-violet-700 w-full"
                >
                  Start Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedLeadCaptureSection;
