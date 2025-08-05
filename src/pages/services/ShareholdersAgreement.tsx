import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const ShareholdersAgreement = () => {
  const serviceId = "shareholders-agreement";
  
  const title = "Shareholders Agreement Drafting";
  
  const subtitle = "Structure your company ownership with comprehensive shareholders agreements";
  
  const description = "Our shareholders agreement drafting services help companies establish clear ownership structures, governance frameworks, and shareholder rights. We create agreements that protect minority interests, define decision-making processes, and provide exit mechanisms.";
  
  const heroImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What is covered in a shareholders agreement?",
      answer: "A shareholders agreement covers shareholding structure, voting rights, board composition, dividend policy, transfer restrictions, tag-along and drag-along rights, and dispute resolution mechanisms."
    },
    {
      question: "When should a company have a shareholders agreement?",
      answer: "Companies should have shareholders agreements when multiple shareholders are involved, during investment rounds, or when establishing clear governance structures from the beginning."
    },
    {
      question: "How do you protect minority shareholders?",
      answer: "We include protective provisions like tag-along rights, information rights, anti-dilution protections, board representation, and approval rights for major decisions affecting minority interests."
    },
    {
      question: "What are drag-along and tag-along rights?",
      answer: "Drag-along rights allow majority shareholders to force minority shareholders to join in a sale. Tag-along rights allow minority shareholders to join when majority shareholders sell their shares."
    },
    {
      question: "Can shareholders agreements be amended?",
      answer: "Yes, but amendments typically require consent from all or a specified majority of shareholders as defined in the original agreement. We structure flexible amendment procedures."
    }
  ];
  
  const relatedServices = [
    {
      title: "Founders Agreement",
      link: "/services/founders-agreement"
    },
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
    },
    {
      title: "Fundraising Support",
      link: "/services/fundraising"
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

export default ShareholdersAgreement;