
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
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-black">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Legal Assistance?
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              Our team of experienced legal professionals is ready to help you navigate 
              complex business and legal challenges. Get started with a free consultation.
            </p>
            
            {!showForm && (
              <Button 
                onClick={() => setShowForm(true)}
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 py-6 px-8 text-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            {showForm ? (
              <LeadCaptureForm 
                defaultService={defaultService} 
                variant="inline" 
                className="bg-transparent border-0 shadow-none p-0" 
              />
            ) : (
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-black mb-4">
                  How Can We Help You?
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out our simple form to get a free consultation with our legal experts. 
                  We'll get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setShowForm(true)}
                  size="lg" 
                  className="bg-black text-white hover:bg-gray-800 w-full py-6 text-lg"
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
