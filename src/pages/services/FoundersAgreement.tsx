import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const FoundersAgreement = () => {
  const serviceId = "founders-agreement";
  
  const title = "Founders Agreement Drafting";
  
  const subtitle = "Define co-founder relationships and responsibilities from the start";
  
  const description = "Our founders agreement drafting services help co-founders establish clear roles, responsibilities, equity distribution, and decision-making processes. We create agreements that prevent disputes and provide frameworks for various business scenarios.";
  
  const heroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What should be included in a founders agreement?",
      answer: "A founders agreement should include equity distribution, roles and responsibilities, vesting schedules, decision-making processes, intellectual property assignment, and exit provisions."
    },
    {
      question: "How is equity typically distributed among founders?",
      answer: "Equity distribution depends on factors like initial contribution, ongoing commitment, expertise, and future responsibilities. We help create fair distribution frameworks based on these factors."
    },
    {
      question: "What is founder vesting and why is it important?",
      answer: "Founder vesting means equity is earned over time based on continued involvement. It protects the company if a founder leaves early and ensures committed founders retain appropriate ownership."
    },
    {
      question: "How do you handle intellectual property in founders agreements?",
      answer: "We ensure all IP created by founders is properly assigned to the company, including pre-existing IP that will be used, and establish clear ownership of future developments."
    },
    {
      question: "What happens if a founder wants to leave?",
      answer: "The agreement includes exit provisions covering equity buyback, non-compete obligations, transition responsibilities, and protection of company interests when founders leave."
    }
  ];
  
  const relatedServices = [
    {
      title: "Shareholders Agreement",
      link: "/services/shareholders-agreement"
    },
    {
      title: "NDA Agreement",
      link: "/services/nda-agreement"
    },
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
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

export default FoundersAgreement;