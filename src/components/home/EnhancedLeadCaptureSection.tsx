
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";

interface EnhancedLeadCaptureSectionProps {
  defaultService?: string;
}

const EnhancedLeadCaptureSection: React.FC<EnhancedLeadCaptureSectionProps> = ({ defaultService }) => {
  const [showForm, setShowForm] = React.useState(!!defaultService);
  
  return (
    <section className="py-24 bg-gradient-to-b from-apple-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-black">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Expert Legal Assistance?
            </h2>
            <p className="text-xl mb-10 text-apple-gray-600 leading-relaxed">
              Our team of experienced legal professionals is ready to help you navigate 
              complex business and legal challenges. Get started with a free consultation.
            </p>
            
            {!showForm && (
              <Button 
                onClick={() => setShowForm(true)}
                size="lg" 
                className="bg-apple-blue text-white hover:bg-apple-darkblue py-6 px-8 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Free Consultation Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-apple-gray-100 p-8">
            {showForm ? (
              <LeadCaptureForm 
                defaultService={defaultService} 
                variant="inline" 
                className="bg-transparent border-0 shadow-none p-0" 
                onSubmitSuccess={() => setShowForm(false)}
              />
            ) : (
              <div className="text-center p-6">
                <h3 className="text-3xl font-bold text-apple-gray-800 mb-5">
                  How Can We Help You?
                </h3>
                <p className="text-apple-gray-600 mb-10 text-lg">
                  Fill out our simple form to get a free consultation with our legal experts. 
                  We'll get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setShowForm(true)}
                  size="lg" 
                  className="bg-apple-blue text-white hover:bg-apple-darkblue w-full py-6 text-lg rounded-full shadow-md hover:shadow-lg"
                >
                  Talk to Us Now
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
