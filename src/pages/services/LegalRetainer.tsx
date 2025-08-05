import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const LegalRetainer = () => {
  const serviceId = "legal-retainer";
  
  const title = "Legal Retainer Plans";
  
  const subtitle = "Ongoing legal support packages for businesses and individuals";
  
  const description = "Our legal retainer plans provide continuous legal support for your business needs. From routine legal advice to complex transactions, our retainer services ensure you have expert legal guidance whenever you need it at predictable costs.";
  
  const heroImage = "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What is included in a legal retainer plan?",
      answer: "Retainer plans typically include unlimited consultations, contract reviews, legal document drafting, compliance advice, and priority support for urgent matters within the agreed scope."
    },
    {
      question: "How do retainer fees work?",
      answer: "You pay a fixed monthly or annual fee for a predetermined scope of services. This provides cost predictability and ensures immediate access to legal support when needed."
    },
    {
      question: "What types of businesses benefit from retainers?",
      answer: "Startups, growing businesses, real estate firms, technology companies, and any business requiring regular legal support benefit from retainer arrangements."
    },
    {
      question: "Can retainer plans be customized?",
      answer: "Yes, we customize retainer plans based on your specific needs, industry requirements, business size, and the type of legal support you anticipate requiring."
    },
    {
      question: "What happens if I need services beyond the retainer scope?",
      answer: "Services beyond the retainer scope are billed separately at pre-agreed rates, typically at a discount from our standard hourly rates for retainer clients."
    }
  ];
  
  const relatedServices = [
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Business Advisory",
      link: "/services/business-advisory"
    },
    {
      title: "Business Contracts",
      link: "/services/business-contracts"
    },
    {
      title: "Annual Compliance",
      link: "/services/annual-compliance"
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

export default LegalRetainer;