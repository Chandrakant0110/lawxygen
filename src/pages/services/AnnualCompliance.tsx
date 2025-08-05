import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const AnnualCompliance = () => {
  const serviceId = "annual-compliance";
  
  const title = "Annual Compliance Services";
  
  const subtitle = "Complete annual filing and compliance services for companies and LLPs";
  
  const description = "Our annual compliance services ensure your business meets all statutory requirements including ROC filings, annual returns, financial statements, and board resolutions. We handle all compliance deadlines to keep your business in good standing.";
  
  const heroImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What annual compliances are required for companies?",
      answer: "Companies must file Annual Return (AOC-4), Financial Statements (MGT-7), conduct AGM, maintain statutory registers, file board resolutions, and ensure director compliances including DIN and DSC renewals."
    },
    {
      question: "What are the penalties for non-compliance?",
      answer: "Non-filing of annual returns can result in penalties up to ₹5 lakhs and potential striking off from ROC. Late filing attracts additional fees and penalties that increase with delay."
    },
    {
      question: "What documents do you need for annual compliance?",
      answer: "We need financial statements, board resolutions, AGM minutes, statutory registers, bank statements, and details of any changes in directors or shareholders during the year."
    },
    {
      question: "Do you handle LLP annual compliances too?",
      answer: "Yes, we handle LLP annual filings including Form 8 (Statement of Account & Solvency) and Form 11 (Annual Return), ensuring timely compliance with LLP regulations."
    },
    {
      question: "Can you help with compliance for previous years?",
      answer: "Yes, we can help file pending compliances for previous years with additional fees and penalties as applicable. We also assist with compounding applications if required."
    }
  ];
  
  const relatedServices = [
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
    },
    {
      title: "LLP Registration",
      link: "/services/llp-registration"
    },
    {
      title: "ROC Compliance",
      link: "/services/roc-compliance"
    },
    {
      title: "Accounting Services",
      link: "/services/accounting-services"
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

export default AnnualCompliance;