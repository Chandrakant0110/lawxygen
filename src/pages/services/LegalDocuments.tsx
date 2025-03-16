
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { FileText, Shield, Clock } from "lucide-react";

const LegalDocuments = () => {
  // Service specific data
  const serviceId = "legal-documents";
  const title = "Legal Document Drafting Services";
  const subtitle = "Professional legal documentation tailored to your business needs";
  const description = 
    "Our expert legal document drafting services provide you with comprehensive, legally sound agreements and contracts tailored to your specific business requirements. From business contracts to HR policies, our experienced legal team ensures your documentation is thorough, compliant, and protects your interests.";
  
  // Process steps
  const steps = [
    {
      title: "Requirements Analysis",
      description: "We start by thoroughly understanding your specific needs and business context."
    },
    {
      title: "Document Drafting",
      description: "Our legal experts craft customized documents aligned with current laws and your requirements."
    },
    {
      title: "Review & Revision",
      description: "We review the drafted documents with you and make necessary adjustments to ensure perfect fit."
    },
    {
      title: "Final Delivery",
      description: "You receive the final documents in multiple formats along with implementation guidance."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Basic Document Package",
      price: "₹4,999",
      description: "Essential legal documents for small businesses.",
      features: [
        "1 standard legal document",
        "Basic customization",
        "1 round of revisions",
        "Digital delivery",
        "Email support",
        "30 days advisory"
      ],
      buttonText: "Get Started",
      buttonLink: "#consultation"
    },
    {
      title: "Business Document Suite",
      price: "₹14,999",
      description: "Comprehensive documentation for growing businesses.",
      popular: true,
      features: [
        "3 customized legal documents",
        "Advanced customization",
        "2 rounds of revisions",
        "Digital and print delivery",
        "Dedicated legal advisor",
        "Implementation guidance",
        "90 days advisory"
      ],
      buttonText: "Recommended",
      buttonLink: "#consultation"
    },
    {
      title: "Enterprise Documentation",
      price: "₹29,999",
      description: "Complete legal document solution for established businesses.",
      features: [
        "5 comprehensive legal documents",
        "Full business-specific customization",
        "Unlimited revisions",
        "All formats delivery",
        "Dedicated legal team",
        "Implementation workshop",
        "1 year advisory support",
        "Annual review and updates"
      ],
      buttonText: "Contact Us",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What types of legal documents do you draft?",
      answer: "We draft a wide range of business documents including but not limited to: employment contracts, non-disclosure agreements (NDAs), service level agreements (SLAs), partnership agreements, shareholder agreements, terms and conditions, privacy policies, franchise agreements, and various business contracts."
    },
    {
      question: "How long does it take to get my legal documents?",
      answer: "Standard documents typically take 3-5 business days, while more complex and customized documents may take 7-10 business days. Urgent services are available at an additional cost."
    },
    {
      question: "Are your documents legally binding?",
      answer: "Yes, our documents are drafted by qualified legal professionals in compliance with Indian laws and are legally binding. However, the effectiveness of any legal document depends on proper execution and adherence to legal formalities."
    },
    {
      question: "Can I request revisions to the documents?",
      answer: "Yes, all our packages include at least one round of revisions. The Business Document Suite includes two rounds of revisions, while the Enterprise Documentation package includes unlimited revisions within the scope of the original requirements."
    },
    {
      question: "Do you provide guidance on how to use the documents?",
      answer: "Yes, we provide basic implementation guidance with all packages. The Business Document Suite includes detailed implementation instructions, while the Enterprise Documentation package includes an implementation workshop to ensure proper integration into your business operations."
    },
    {
      question: "Can you help with documents for international business operations?",
      answer: "Yes, we can draft documents compliant with international business practices and conventions. For documents that need to comply with specific foreign laws, we work with our international legal network to ensure compliance."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
    },
    {
      title: "Trademark Registration",
      link: "/services/trademark-registration"
    },
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    }
  ];

  return (
    <ServicePageLayout
      serviceId={serviceId}
      title={title}
      subtitle={subtitle}
      description={description}
      steps={steps}
      pricingTiers={pricingTiers}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Additional custom content for this specific service */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Our Legal Document Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Business Contracts</h3>
              <p className="text-slate-600">
                Comprehensive business agreements including service agreements, vendor contracts, and distribution agreements.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Corporate Documents</h3>
              <p className="text-slate-600">
                Essential corporate documentation including shareholder agreements, founders' agreements, and term sheets.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Employment & HR Policies</h3>
              <p className="text-slate-600">
                Complete employment documentation including contracts, HR policies, and workplace guidelines.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Popular Business Documents
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Non-Disclosure Agreement (NDA)</span>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Service Level Agreement (SLA)</span>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Employment Agreement</span>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Terms of Service & Privacy Policy</span>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Shareholders Agreement</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Why Choose Our Document Services
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Drafted by experienced legal professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Customized to your specific business needs</span>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Updated with the latest legal developments</span>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Clear, comprehensive language without legal jargon</span>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700">Ongoing support and document management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default LegalDocuments;
