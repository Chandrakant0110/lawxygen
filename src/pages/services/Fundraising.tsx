import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const Fundraising = () => {
  const serviceId = "fundraising";
  
  const title = "Fundraising Support";
  
  const subtitle = "Legal assistance for funding rounds and investment transactions";
  
  const description = "Our fundraising support services provide comprehensive legal assistance for startups and businesses seeking investment. From seed rounds to IPOs, we help structure deals, draft agreements, and ensure compliance throughout the fundraising process.";
  
  const heroImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What fundraising stages do you support?",
      answer: "We support all stages including pre-seed, seed, Series A/B/C, bridge rounds, debt financing, and IPO preparations. Each stage has specific legal requirements that we handle expertly."
    },
    {
      question: "What documents are involved in fundraising?",
      answer: "Key documents include term sheets, share purchase agreements, shareholders' agreements, articles of association amendments, board resolutions, and compliance certificates."
    },
    {
      question: "How do you help with investor relations?",
      answer: "We assist with investor communications, due diligence preparation, legal compliance, and ongoing investor reporting requirements to maintain good relationships."
    },
    {
      question: "What compliance issues should we consider?",
      answer: "Compliance includes FEMA regulations for foreign investment, SEBI regulations for securities, corporate law requirements, tax implications, and industry-specific regulations."
    },
    {
      question: "Do you help with valuation and terms negotiation?",
      answer: "While we don't provide valuation services, we help structure legal terms, negotiate investor rights, liquidation preferences, and anti-dilution provisions to protect your interests."
    }
  ];
  
  const relatedServices = [
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Shareholders Agreement",
      link: "/services/shareholders-agreement"
    },
    {
      title: "Business Advisory",
      link: "/services/business-advisory"
    },
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
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

export default Fundraising;