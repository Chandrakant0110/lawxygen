import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const ROCCompliance = () => {
  const serviceId = "roc-compliance";
  
  const title = "ROC Compliance Services";
  
  const subtitle = "Complete Registrar of Companies compliance and filing services";
  
  const description = "Our ROC compliance services ensure your company meets all regulatory requirements with the Registrar of Companies. From routine filings to complex compliance matters, we handle all ROC-related obligations efficiently.";
  
  const heroImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What ROC compliances are mandatory for companies?",
      answer: "Mandatory ROC compliances include annual filing of financial statements, annual returns, maintaining statutory registers, filing changes in directors/shareholders, and ensuring proper board meeting procedures."
    },
    {
      question: "What happens if ROC compliances are not met?",
      answer: "Non-compliance can result in penalties, prosecution of directors, striking off the company name, and difficulty in future business operations including banking and contracts."
    },
    {
      question: "How often do we need to file with ROC?",
      answer: "Annual filings are required within 30 days of AGM for financial statements and within 60 days of AGM for annual returns. Event-based filings like director changes must be filed within 30 days of the event."
    },
    {
      question: "Do you help with ROC notices and queries?",
      answer: "Yes, we handle all ROC notices, queries, and compliance issues. We provide representation and help resolve any disputes or clarifications sought by the ROC."
    },
    {
      question: "Can you help revive a struck-off company?",
      answer: "Yes, we assist with revival applications under Section 252 for administrative striking off and provide complete support for the restoration process including necessary documentation and compliance."
    }
  ];
  
  const relatedServices = [
    {
      title: "Annual Compliance",
      link: "/services/annual-compliance"
    },
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
    },
    {
      title: "LLP Registration",
      link: "/services/llp-registration"
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

export default ROCCompliance;