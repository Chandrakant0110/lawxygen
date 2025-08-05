import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const LegalNotice = () => {
  const serviceId = "legal-notice";
  
  const title = "Legal Notice Services";
  
  const subtitle = "Issue or respond to legal notices with expert guidance";
  
  const description = "Our legal notice services help individuals and businesses issue formal legal notices or respond to notices received. We ensure proper legal formatting, compliance with procedural requirements, and strategic positioning for the best possible outcomes.";
  
  const heroImage = "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What types of legal notices do you handle?",
      answer: "We handle demand notices, breach of contract notices, defamation notices, eviction notices, employment termination notices, intellectual property infringement notices, and various other legal communications."
    },
    {
      question: "What is the legal significance of a notice?",
      answer: "Legal notices serve as formal communication, establish legal positions, provide opportunities for resolution, meet statutory requirements, and often serve as prerequisites for legal action."
    },
    {
      question: "How should one respond to a legal notice?",
      answer: "Response strategy depends on the notice content, legal merit, and desired outcome. We analyze notices, advise on response options, and draft appropriate replies to protect your interests."
    },
    {
      question: "What are the time limits for responding to notices?",
      answer: "Response timeframes vary by notice type and jurisdiction, typically ranging from 7 to 30 days. We ensure timely responses and can request extensions when appropriate."
    },
    {
      question: "Can legal notices lead to court cases?",
      answer: "Yes, ignored or improperly handled notices can lead to litigation. We help resolve matters at the notice stage to avoid court proceedings wherever possible."
    }
  ];
  
  const relatedServices = [
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Litigation Support",
      link: "/services/litigation"
    },
    {
      title: "Business Contracts",
      link: "/services/business-contracts"
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

export default LegalNotice;