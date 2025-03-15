
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { FileText, Shield, Clock, Check, Users } from "lucide-react";

interface ServiceTemplateProps {
  serviceId: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  FAQs: Array<{question: string; answer: string}>;
  relatedServices: Array<{title: string; link: string}>;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  serviceId,
  title,
  subtitle,
  description,
  heroImage,
  FAQs,
  relatedServices
}) => {
  // Common steps for most services
  const steps = [
    {
      title: "Initial Consultation",
      description: "We start with a detailed consultation to understand your specific requirements."
    },
    {
      title: "Document Collection",
      description: "We'll guide you on the necessary documents required for the process."
    },
    {
      title: "Expert Processing",
      description: "Our team of experts handles the entire procedure with precision and care."
    },
    {
      title: "Final Delivery",
      description: "The completed service is delivered to you with all necessary follow-up support."
    }
  ];

  // Standard pricing tiers
  const pricingTiers = [
    {
      title: "Basic",
      price: "₹4,999",
      description: "Essential services for small businesses and startups",
      features: [
        "Standard processing time",
        "Document preparation assistance",
        "Email support",
        "1 revision included"
      ],
      buttonText: "Get Started",
      buttonLink: "#consultation"
    },
    {
      title: "Professional",
      price: "₹9,999",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Expedited processing",
        "Complete document preparation",
        "Dedicated support executive",
        "3 revisions included",
        "1 year of advisory support"
      ],
      popular: true,
      buttonText: "Recommended",
      buttonLink: "#consultation"
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for established businesses with complex needs",
      features: [
        "Priority processing",
        "End-to-end handling",
        "Dedicated legal expert",
        "Unlimited revisions",
        "3 years of advisory support",
        "Customized legal strategy"
      ],
      buttonText: "Contact Us",
      buttonLink: "#consultation"
    }
  ];

  return (
    <ServicePageLayout
      serviceId={serviceId}
      title={title}
      subtitle={subtitle}
      description={description}
      heroImage={heroImage}
      steps={steps}
      pricingTiers={pricingTiers}
      faqs={FAQs}
      relatedServices={relatedServices}
    >
      {/* Additional Content Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Why Choose Our {title} Service?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 bg-violet-100 p-2 rounded-full text-violet-600 mr-4">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Expert Legal Team</h3>
                    <p className="text-slate-600">Our team of experienced legal professionals ensures your {title.toLowerCase()} process is handled efficiently and accurately.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-violet-100 p-2 rounded-full text-violet-600 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Timely Completion</h3>
                    <p className="text-slate-600">We prioritize completing your {title.toLowerCase()} process within the promised timeframe, keeping you updated at every step.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-violet-100 p-2 rounded-full text-violet-600 mr-4">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Compliance Guaranteed</h3>
                    <p className="text-slate-600">Our thorough process ensures complete compliance with all legal requirements and regulations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-violet-100 p-2 rounded-full text-violet-600 mr-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Ongoing Support</h3>
                    <p className="text-slate-600">We provide continued support after service completion to address any questions or concerns.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Required Documents
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-slate-600 mb-4">
                  To proceed with your {title.toLowerCase()} service, please have the following documents ready:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-violet-600 mr-2 mt-1">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700">Identity proof of directors/partners (Aadhar, PAN)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-violet-600 mr-2 mt-1">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700">Address proof of directors/partners</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-violet-600 mr-2 mt-1">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700">Proof of registered office address</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-violet-600 mr-2 mt-1">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700">Digital signature certificates (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-violet-600 mr-2 mt-1">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700">Photographs of directors/partners</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-500 mt-4">
                  Note: Additional documents may be required based on your specific case. Our team will guide you through the complete requirements during the initial consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default ServiceTemplate;
