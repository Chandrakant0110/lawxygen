import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const Litigation = () => {
  const serviceId = "litigation";
  
  const title = "Litigation Support";
  
  const subtitle = "Expert representation in legal disputes and court proceedings";
  
  const description = "Our litigation support services provide expert representation in various legal disputes including commercial litigation, civil matters, criminal defense, and arbitration. We combine strategic thinking with aggressive advocacy to protect your interests in court.";
  
  const heroImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What types of litigation do you handle?",
      answer: "We handle commercial disputes, contract breaches, employment disputes, intellectual property litigation, debt recovery, real estate disputes, and regulatory matters across various courts and tribunals."
    },
    {
      question: "Do you try to settle cases out of court?",
      answer: "Yes, we always explore settlement opportunities and alternative dispute resolution methods like mediation and arbitration before proceeding to full litigation, as they can save time and costs."
    },
    {
      question: "How do you estimate litigation costs?",
      answer: "Litigation costs depend on case complexity, duration, and court levels. We provide transparent cost estimates and explore funding options including contingency arrangements where applicable."
    },
    {
      question: "What is your success rate in litigation?",
      answer: "Our success rate varies by case type and complexity. We focus on thorough preparation, strategic case development, and aggressive advocacy to maximize chances of favorable outcomes."
    },
    {
      question: "Do you handle international disputes?",
      answer: "Yes, we handle cross-border disputes, international arbitration, and work with foreign counsel when required for cases involving international elements."
    }
  ];
  
  const relatedServices = [
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Business Contracts",
      link: "/services/business-contracts"
    },
    {
      title: "Legal Retainer Plans",
      link: "/services/legal-retainer"
    },
    {
      title: "Business Advisory",
      link: "/services/business-advisory"
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

export default Litigation;