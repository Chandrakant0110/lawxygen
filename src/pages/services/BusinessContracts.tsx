import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const BusinessContracts = () => {
  const serviceId = "business-contracts";
  
  const title = "Business Contract Drafting";
  
  const subtitle = "Professional business contract drafting services for all your commercial needs";
  
  const description = "Our business contract drafting services cover all types of commercial agreements including service contracts, vendor agreements, employment contracts, and partnership agreements. We ensure your contracts are legally sound and protect your business interests.";
  
  const heroImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What types of business contracts do you draft?",
      answer: "We draft service agreements, vendor contracts, employment contracts, partnership agreements, licensing agreements, distribution agreements, and other commercial contracts tailored to your business needs."
    },
    {
      question: "How do you ensure contracts protect our interests?",
      answer: "We carefully review your business requirements, include appropriate clauses for protection, ensure compliance with applicable laws, and include dispute resolution mechanisms to safeguard your interests."
    },
    {
      question: "Can you review existing contracts?",
      answer: "Yes, we provide contract review services to identify potential risks, suggest improvements, and ensure your existing agreements adequately protect your business interests."
    },
    {
      question: "Do you handle contract negotiations?",
      answer: "We assist with contract negotiations by providing legal guidance, suggesting favorable terms, and helping you understand the implications of various contract clauses."
    },
    {
      question: "Are your contracts industry-specific?",
      answer: "Yes, we customize contracts based on your industry requirements, whether it's technology, manufacturing, services, retail, or any other sector with specific needs."
    }
  ];
  
  const relatedServices = [
    {
      title: "NDA Agreement",
      link: "/services/nda-agreement"
    },
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Founders Agreement",
      link: "/services/founders-agreement"
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

export default BusinessContracts;