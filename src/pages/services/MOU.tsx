import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const MOU = () => {
  const serviceId = "mou";
  
  const title = "Memorandum of Understanding (MOU)";
  
  const subtitle = "Document partnership intentions and collaborative frameworks";
  
  const description = "Our MOU drafting services help businesses and organizations establish formal understanding between parties for potential partnerships, collaborations, or business relationships. We create clear frameworks for cooperation while maintaining flexibility for future negotiations.";
  
  const heroImage = "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What is the difference between an MOU and a contract?",
      answer: "An MOU typically expresses mutual understanding and intentions but may not be legally binding, while contracts create enforceable legal obligations. MOUs often precede formal contracts."
    },
    {
      question: "When should businesses use an MOU?",
      answer: "MOUs are useful for exploring partnerships, joint ventures, business collaborations, licensing discussions, or any situation where parties want to document intentions before formal agreements."
    },
    {
      question: "Can an MOU be legally binding?",
      answer: "Yes, depending on the language used and parties' intentions. We can draft MOUs as either legally binding or non-binding based on your specific requirements and comfort level."
    },
    {
      question: "What key elements should an MOU include?",
      answer: "An effective MOU includes purpose and scope, roles and responsibilities, timelines, confidentiality provisions, termination clauses, and clarity on whether it's binding or non-binding."
    },
    {
      question: "How long does an MOU typically remain valid?",
      answer: "MOU validity varies based on the arrangement, typically ranging from 6 months to 2 years. We include appropriate duration clauses and renewal options based on your needs."
    }
  ];
  
  const relatedServices = [
    {
      title: "Business Contracts",
      link: "/services/business-contracts"
    },
    {
      title: "NDA Agreement",
      link: "/services/nda-agreement"
    },
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Partnership Firm",
      link: "/services/partnership-firm"
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

export default MOU;