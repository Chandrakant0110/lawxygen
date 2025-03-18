
import React from "react";
import { HelpCircle } from "lucide-react";

interface ServiceFAQSectionProps {
  service?: {
    title: string;
  };
  details?: {
    timeline?: string;
  };
}

const ServiceFAQSection: React.FC<ServiceFAQSectionProps> = ({ service, details }) => {
  return (
    <div className="mt-8 bg-white border rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
      
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
            <HelpCircle className="w-5 h-5 text-lawpurple-500 mr-2" />
            What is the typical timeframe for {service?.title || "this service"}?
          </h4>
          <p className="text-gray-700 pl-7">
            {details?.timeline ? 
              `The typical timeframe is ${details.timeline}, though this can vary based on government processing times and the complexity of your specific case.` : 
              "The process typically takes 2-3 weeks to complete, depending on the complexity and any government processing times involved."}
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
            <HelpCircle className="w-5 h-5 text-lawpurple-500 mr-2" />
            What documents will I need to provide?
          </h4>
          <p className="text-gray-700 pl-7">
            You'll typically need to provide identity and address proof, along with service-specific documents that our professional will outline during your initial consultation.
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
            <HelpCircle className="w-5 h-5 text-lawpurple-500 mr-2" />
            Are there any ongoing compliance requirements?
          </h4>
          <p className="text-gray-700 pl-7">
            Yes, there may be ongoing compliance requirements depending on the specific service. Our professionals will provide detailed guidance about any ongoing obligations.
          </p>
        </div>
        
        <div className="pb-4">
          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
            <HelpCircle className="w-5 h-5 text-lawpurple-500 mr-2" />
            Do you offer post-service support?
          </h4>
          <p className="text-gray-700 pl-7">
            Yes, we provide 30 days of post-service support to address any questions or concerns you might have after the service is delivered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQSection;
