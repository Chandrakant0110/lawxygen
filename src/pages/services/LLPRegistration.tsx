
import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const LLPRegistration = () => {
  const serviceId = "llp-registration";
  
  const title = "Limited Liability Partnership (LLP) Registration";
  
  const subtitle = "Establish a flexible business structure with limited liability protection and tax advantages";
  
  const description = "Our LLP registration service offers a complete solution for entrepreneurs looking to form a Limited Liability Partnership. We handle all legal formalities from partner agreements to certificate of incorporation, ensuring a hassle-free registration process.";
  
  const heroImage = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What are the benefits of registering as an LLP?",
      answer: "LLPs offer limited liability protection to partners, operational flexibility, low compliance requirements, no minimum capital requirements, and favorable tax treatment. They're ideal for professional services and small to medium businesses."
    },
    {
      question: "How long does it take to register an LLP?",
      answer: "The entire process typically takes 15-20 working days from the date of submitting all required documents, including name approval and obtaining the certificate of incorporation."
    },
    {
      question: "What are the minimum requirements to form an LLP?",
      answer: "You need at least 2 designated partners (at least one must be an Indian resident), a registered office address in India, and Digital Signature Certificates for the partners."
    },
    {
      question: "What compliances are required after LLP incorporation?",
      answer: "After incorporation, LLPs need to file annual returns (Form 8), statement of accounts and solvency (Form 11), and comply with income tax filing requirements. The compliance burden is significantly lower than for private limited companies."
    },
    {
      question: "Can foreigners or NRIs register an LLP in India?",
      answer: "Yes, foreigners and NRIs can be partners in an LLP, but at least one designated partner must be an Indian resident. Foreign investment in LLPs is allowed in sectors where 100% FDI is permitted under the automatic route."
    },
    {
      question: "What is the minimum capital requirement for LLP registration?",
      answer: "There is no minimum capital requirement for LLP registration in India. Partners can contribute capital based on their business needs and increase it later as required."
    }
  ];
  
  const relatedServices = [
    {
      title: "Private Limited Company Registration",
      link: "/services/private-limited-company"
    },
    {
      title: "GST Registration",
      link: "/services/gst-compliance"
    },
    {
      title: "LLP Annual Compliance",
      link: "/services/llp-compliance"
    },
    {
      title: "LLP to Private Limited Conversion",
      link: "/services/llp-to-private-limited"
    },
    {
      title: "Partnership Firm Registration",
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

export default LLPRegistration;
