
import React from "react";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { CheckCircle2 } from "lucide-react";

const LeadCaptureSection = () => {
  return (
    <section className="py-16 bg-violet-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Get Expert Legal Support for Your Business
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team of experienced legal professionals is ready to help you navigate complex
              business and legal challenges with confidence.
            </p>
            
            <div className="space-y-4 mb-8">
              <BenefitItem>
                Free initial consultation with legal experts
              </BenefitItem>
              <BenefitItem>
                Transparent pricing with no hidden fees
              </BenefitItem>
              <BenefitItem>
                Fast turnaround times on all services
              </BenefitItem>
              <BenefitItem>
                Dedicated support throughout your business journey
              </BenefitItem>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-violet-300 border-2 border-white flex items-center justify-center text-violet-700 font-medium">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="ml-4 text-sm text-slate-500">Join 2000+ satisfied clients</span>
              </div>
              
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-slate-500">4.9/5 average rating</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <LeadCaptureForm variant="sidebar" />
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start">
      <CheckCircle2 className="h-6 w-6 mr-3 text-violet-600 flex-shrink-0" />
      <span className="text-slate-700">{children}</span>
    </div>
  );
};

export default LeadCaptureSection;
