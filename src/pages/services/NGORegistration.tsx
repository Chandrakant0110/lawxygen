import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const NGORegistration = () => {
  const serviceId = "ngo-registration";
  
  const title = "NGO Registration Services";
  
  const subtitle = "Complete registration services for non-profit organizations and NGOs";
  
  const description = "Our NGO registration services help establish non-profit organizations including societies, trusts, and Section 8 companies. We handle all legal formalities, compliance requirements, and ongoing regulatory obligations for NGOs.";
  
  const heroImage = "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What types of NGO structures can be registered?",
      answer: "We help register Societies under Societies Registration Act, Public Trusts, Private Trusts, and Section 8 Companies (non-profit companies) based on your specific requirements and objectives."
    },
    {
      question: "What documents are required for NGO registration?",
      answer: "Required documents include memorandum and articles, list of governing body members, identity and address proofs, registered office proof, and specific documents based on the chosen structure."
    },
    {
      question: "How long does NGO registration take?",
      answer: "Registration typically takes 15-30 days depending on the structure chosen and state requirements. We ensure timely completion with all necessary approvals."
    },
    {
      question: "Do you help with tax exemptions?",
      answer: "Yes, we assist with obtaining 12A registration, 80G certification for donors, FCRA registration for foreign funding, and other tax exemptions available to NGOs."
    },
    {
      question: "What ongoing compliances are required?",
      answer: "NGOs must file annual returns, maintain proper accounts, conduct annual meetings, file tax returns, and comply with specific regulations based on their registration type and activities."
    }
  ];
  
  const relatedServices = [
    {
      title: "Section 8 Company",
      link: "/services/section-8-company"
    },
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Annual Compliance",
      link: "/services/annual-compliance"
    },
    {
      title: "Legal Documents",
      link: "/services/legal-documents"
    }
  ];
  
  return (
    <ServiceTemplate
      serviceId={serviceId}
      title={title}
      subtitle={subtitle}
      description={description}
      heroImage={heroImage}
      FAQs={FAQs}
      relatedServices={relatedServices}
    />
  );
};

export default NGORegistration;