import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const ServiceLevelAgreement = () => {
  const serviceId = "service-level-agreement";
  
  const title = "Service Level Agreement (SLA) Drafting";
  
  const subtitle = "Professional SLA drafting to define service standards and expectations";
  
  const description = "Our SLA drafting services help businesses establish clear service standards, performance metrics, and accountability frameworks. We create comprehensive service level agreements that protect both service providers and clients while ensuring quality delivery.";
  
  const heroImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What is included in a Service Level Agreement?",
      answer: "An SLA includes service descriptions, performance metrics, availability targets, response times, escalation procedures, penalties for non-compliance, and terms for service modifications."
    },
    {
      question: "Why are SLAs important for businesses?",
      answer: "SLAs set clear expectations, provide measurable service standards, establish accountability, protect against disputes, and ensure consistent service quality between parties."
    },
    {
      question: "Do you customize SLAs for different industries?",
      answer: "Yes, we customize SLAs based on industry requirements, whether it's IT services, consulting, manufacturing, healthcare, or any other sector with specific service delivery needs."
    },
    {
      question: "How do you define appropriate service metrics?",
      answer: "We work with you to identify relevant KPIs, set realistic but challenging targets, define measurement methods, and establish reporting procedures that align with business objectives."
    },
    {
      question: "Can SLAs be modified after signing?",
      answer: "Yes, we include provisions for SLA modifications, review periods, and amendment procedures to accommodate changing business needs and service evolution over time."
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

export default ServiceLevelAgreement;