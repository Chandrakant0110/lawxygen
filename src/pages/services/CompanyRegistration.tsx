
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { FileCheck, Shield, BarChart } from "lucide-react";

const CompanyRegistration = () => {
  // Service specific data
  const serviceId = "company-registration";
  const title = "Company Registration Services";
  const subtitle = "Start your business journey with expert company incorporation services";
  const description = 
    "Our comprehensive company registration services help entrepreneurs and businesses establish their legal presence quickly and efficiently. We handle all the paperwork, government filings, and legal requirements, allowing you to focus on growing your business.";
  
  // Process steps
  const steps = [
    {
      title: "Initial Consultation",
      description: "We'll discuss your business needs, structure options, and provide tailored recommendations."
    },
    {
      title: "Documentation",
      description: "Our team prepares all necessary documents including MOA, AOA, and other required forms."
    },
    {
      title: "Government Filing",
      description: "We file all paperwork with the appropriate government agencies and handle any follow-ups."
    },
    {
      title: "Certificate Delivery",
      description: "Once approved, we deliver your incorporation certificate and all official documents."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Private Limited Company",
      price: "₹9,999",
      description: "Perfect for startups and small businesses seeking limited liability protection.",
      features: [
        "Name availability check",
        "DIN and DSC for 2 directors",
        "MOA and AOA preparation",
        "ROC filing and registration",
        "Certificate of Incorporation",
        "PAN and TAN application",
        "GST registration assistance"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Limited Liability Partnership",
      price: "₹7,999",
      description: "Ideal for professional services and partnerships with tax benefits.",
      popular: true,
      features: [
        "Name availability check",
        "DPIN and DSC for 2 partners",
        "LLP Agreement drafting",
        "ROC filing and registration",
        "Certificate of Incorporation",
        "PAN application",
        "GST registration assistance"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "One Person Company",
      price: "₹8,999",
      description: "For sole entrepreneurs seeking corporate benefits with simplified compliance.",
      features: [
        "Name availability check",
        "DIN and DSC for director",
        "MOA and AOA preparation",
        "ROC filing and registration",
        "Certificate of Incorporation",
        "PAN and TAN application",
        "GST registration assistance"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "How long does it take to register a company in India?",
      answer: "Typically, it takes 10-15 working days to complete the entire company registration process, from name approval to receiving the certificate of incorporation."
    },
    {
      question: "What is the difference between Private Limited Company and LLP?",
      answer: "A Private Limited Company offers better credibility and fundraising options but has more compliance requirements. LLP provides partnership benefits with limited liability and fewer compliance obligations."
    },
    {
      question: "What documents do I need to provide for company registration?",
      answer: "You'll need ID proof, address proof, and photographs of all directors/partners, proof of registered office address, and digital signatures of all directors/partners."
    },
    {
      question: "Can a foreigner register a company in India?",
      answer: "Yes, foreigners can register a company in India. They need to provide a copy of their passport, overseas address proof, and may need to appoint at least one resident Indian director depending on the company type."
    },
    {
      question: "Do I need to visit your office for the registration process?",
      answer: "No, our entire process can be completed online. We collect all necessary information and documents electronically, and provide regular updates through email and phone."
    },
    {
      question: "What happens after my company is registered?",
      answer: "After registration, we help you set up your company bank account, apply for necessary registrations like GST, and provide guidance on initial compliance requirements."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "GST & Tax Compliance",
      link: "/services/gst-tax-compliance"
    },
    {
      title: "Business Compliance",
      link: "/services/business-compliance"
    },
    {
      title: "Legal Document Drafting",
      link: "/services/legal-document-drafting"
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
            Why Choose Our Company Registration Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expertise & Experience</h3>
              <p className="text-slate-600">
                Our team has successfully registered over 1,000+ companies across various industries.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">End-to-End Support</h3>
              <p className="text-slate-600">
                We handle everything from documentation to government filings and post-registration compliances.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Pricing</h3>
              <p className="text-slate-600">
                No hidden costs or surprises. Our packages clearly outline what's included in our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CompanyRegistration;
