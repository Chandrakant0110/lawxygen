
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { FileCheck, Shield, BarChart } from "lucide-react";

const ProducerCompany = () => {
  // Service specific data
  const serviceId = "producer-company";
  const title = "Producer Company Registration";
  const subtitle = "Establish your agricultural producer company with expert legal assistance";
  const description = 
    "Producer Companies are specialized entities designed for farmers and agricultural producers to enhance their business prospects. Our comprehensive registration services handle all legal and regulatory requirements for establishing your Producer Company efficiently.";
  
  // Process steps
  const steps = [
    {
      title: "Initial Consultation",
      description: "We'll discuss your agricultural business model, producer network, and develop a registration strategy."
    },
    {
      title: "Documentation & Name Approval",
      description: "Our team prepares all necessary documents including MOA, AOA tailored for Producer Companies and obtains name approval."
    },
    {
      title: "Incorporation & Filing",
      description: "We handle the incorporation process, file all paperwork with MCA, and obtain the Certificate of Incorporation."
    },
    {
      title: "Post-Incorporation Setup",
      description: "We assist with bank account opening, operational setup, and compliance requirements specific to Producer Companies."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Standard Package",
      price: "₹22,999",
      description: "Complete Producer Company registration with all essential services.",
      features: [
        "Name availability check",
        "DIN and DSC for 5 directors",
        "MOA and AOA tailored for Producer Companies",
        "Certificate of Incorporation",
        "PAN and TAN application",
        "Bank account assistance",
        "GST registration guidance"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Premium Package",
      price: "₹32,999",
      description: "Comprehensive solution for Producer Companies with extended support.",
      popular: true,
      features: [
        "All features in Standard Package",
        "Producer member documentation",
        "Compliance setup for 1 year",
        "Rules and regulations drafting",
        "Share certificate templates",
        "Member management system",
        "1 year compliance support"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Elite Package",
      price: "₹45,999",
      description: "End-to-end solution including post-registration operational setup.",
      features: [
        "All features in Premium Package",
        "Producer benefit schemes guidance",
        "Complete compliance manual",
        "Staff training session",
        "Custom operational software setup",
        "2 years compliance support",
        "Quarterly review meetings"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What is a Producer Company?",
      answer: "A Producer Company is a specialized corporate entity under the Companies Act, designed exclusively for farmers and agricultural producers. It combines the advantages of cooperative principles with the efficiency of a corporate structure."
    },
    {
      question: "Who can form a Producer Company?",
      answer: "Primary producers engaged in activities related to agriculture, horticulture, floriculture, pisciculture, animal husbandry, forestry, and similar activities can form a Producer Company. It requires a minimum of 10 individual producers or 2 producer institutions."
    },
    {
      question: "What are the benefits of registering a Producer Company?",
      answer: "Benefits include limited liability protection, better access to credit and market, collective bargaining power, professional management, tax benefits, and eligibility for various government schemes specifically designed for agricultural producers."
    },
    {
      question: "How long does the registration process take?",
      answer: "The registration process typically takes 3-4 weeks, depending on document readiness and regulatory processing times."
    },
    {
      question: "What are the unique compliance requirements for a Producer Company?",
      answer: "Producer Companies must maintain at least 10 members at all times, ensure that only producers can be shareholders, appoint a minimum of 5 directors, and follow specific rules regarding profit distribution and reserves."
    },
    {
      question: "Can a Producer Company raise external investment?",
      answer: "Producer Companies can only issue shares to active producer members. However, they can raise funds through loans, grants, and subsidies from financial institutions, government schemes, and specialized agricultural funds."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
    },
    {
      title: "GST Registration",
      link: "/services/gst-registration"
    },
    {
      title: "Legal Documentation",
      link: "/services/legal-documents"
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
            Why Choose Our Producer Company Registration Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Agricultural Expertise</h3>
              <p className="text-slate-600">
                Our team specializes in agricultural businesses and understands the unique needs of producer collectives.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">End-to-End Support</h3>
              <p className="text-slate-600">
                We handle everything from incorporation to operational setup, ensuring a smooth launch for your producer network.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Scheme Guidance</h3>
              <p className="text-slate-600">
                We provide information on relevant government schemes and subsidies available to Producer Companies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default ProducerCompany;
