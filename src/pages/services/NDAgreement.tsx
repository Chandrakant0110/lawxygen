import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const NDAgreement = () => {
  const serviceId = "nda-agreement";
  
  const title = "NDA Agreement Drafting";
  
  const subtitle = "Professional Non-Disclosure Agreement drafting to protect your confidential information";
  
  const description = "Our NDA agreement drafting services help protect your confidential business information. We create customized non-disclosure agreements for various scenarios including employee NDAs, business partnership NDAs, and vendor agreements.";
  
  const heroImage = "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What is covered in an NDA agreement?",
      answer: "An NDA covers confidential information definition, obligations of receiving party, permitted uses, duration of confidentiality, consequences of breach, and jurisdiction for dispute resolution."
    },
    {
      question: "What types of NDAs do you draft?",
      answer: "We draft unilateral NDAs (one-way), mutual NDAs (two-way), employee NDAs, consultant NDAs, investor NDAs, and industry-specific confidentiality agreements."
    },
    {
      question: "How long should an NDA be valid?",
      answer: "NDA validity depends on the nature of information. Typically, 2-5 years for business information, perpetual for trade secrets, and specific durations for project-based work."
    },
    {
      question: "Can NDAs be enforced legally?",
      answer: "Yes, properly drafted NDAs are legally enforceable. However, they must be reasonable in scope, duration, and definition of confidential information to be upheld by courts."
    },
    {
      question: "Do you customize NDAs for different industries?",
      answer: "Yes, we customize NDAs based on industry requirements, whether it's technology, healthcare, manufacturing, consulting, or any other sector with specific confidentiality needs."
    }
  ];
  
  const relatedServices = [
    {
      title: "Business Contracts",
      link: "/services/business-contracts"
    },
    {
      title: "Founders Agreement",
      link: "/services/founders-agreement"
    },
    {
      title: "Legal Documents",
      link: "/services/legal-documents"
    },
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
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

export default NDAgreement;