import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const TDSFiling = () => {
  const serviceId = "tds-filing";
  
  const title = "TDS Filing Services";
  
  const subtitle = "Complete TDS compliance and return filing services with expert guidance";
  
  const description = "Our TDS filing services ensure accurate calculation, deduction, and timely filing of TDS returns. We handle all aspects of TDS compliance including quarterly returns, TDS certificates, and annual statements.";
  
  const heroImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What TDS returns do you help file?",
      answer: "We assist with all TDS returns including 24Q (salary), 26Q (non-salary payments), 27Q (mutual funds), 27EQ (e-commerce), and correction statements. We also help with annual TDS statements and Form 16/16A issuance."
    },
    {
      question: "What are the due dates for TDS filing?",
      answer: "TDS returns are filed quarterly: Q1 (Apr-Jun) due by 31st July, Q2 (Jul-Sep) due by 31st October, Q3 (Oct-Dec) due by 31st January, and Q4 (Jan-Mar) due by 31st May."
    },
    {
      question: "What are the penalties for late TDS filing?",
      answer: "Late filing attracts a penalty of ₹200 per day from the due date until filing. For non-filing, penalty can be 1.5% of TDS amount. We ensure timely filing to avoid these penalties."
    },
    {
      question: "Do you help with TDS certificate issuance?",
      answer: "Yes, we help generate and issue Form 16 for employees and Form 16A for other deductees. We ensure all certificates are issued within the prescribed time limits."
    },
    {
      question: "Can you help rectify TDS filing errors?",
      answer: "Absolutely! We can file correction statements to rectify errors in previously filed TDS returns. We also help with TDS default cases and provide representation before tax authorities."
    }
  ];
  
  const relatedServices = [
    {
      title: "GST Filing",
      link: "/services/gst-filing"
    },
    {
      title: "Accounting Services",
      link: "/services/accounting-services"
    },
    {
      title: "Annual Compliance",
      link: "/services/annual-compliance"
    },
    {
      title: "Tax Filing Services",
      link: "/services/tax-filing-services"
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

export default TDSFiling;