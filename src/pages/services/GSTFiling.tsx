import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const GSTFiling = () => {
  const serviceId = "gst-filing";
  
  const title = "GST Filing Services";
  
  const subtitle = "Hassle-free GST return filing with expert guidance and timely compliance";
  
  const description = "Our GST filing services ensure timely and accurate submission of your GST returns. We handle all types of GST returns including GSTR-1, GSTR-3B, GSTR-9, and more, ensuring complete compliance with GST regulations.";
  
  const heroImage = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What GST returns do you help file?",
      answer: "We assist with all GST returns including GSTR-1 (outward supplies), GSTR-3B (summary return), GSTR-9 (annual return), GSTR-2A (auto-populated), and other specialized returns based on your business type."
    },
    {
      question: "What are the due dates for GST filing?",
      answer: "GSTR-1 is due by 11th of the following month, GSTR-3B by 20th of the following month, and GSTR-9 (annual return) by 31st December of the following financial year. We ensure all filings are completed before due dates."
    },
    {
      question: "What happens if GST returns are filed late?",
      answer: "Late filing attracts penalties and interest charges. For GSTR-3B, late fee is ₹50 per day per act (CGST & SGST), maximum ₹5,000. We help you avoid these penalties with timely filing."
    },
    {
      question: "Do you help with input tax credit claims?",
      answer: "Yes, we review and optimize your input tax credit claims to ensure you receive all eligible credits. We also help reconcile your purchases with GSTR-2A to maximize ITC benefits."
    },
    {
      question: "Can you handle GST filing for multiple states?",
      answer: "Absolutely! We handle GST compliance for businesses operating across multiple states, ensuring proper filing for each state registration and interstate transaction compliance."
    }
  ];
  
  const relatedServices = [
    {
      title: "GST Registration",
      link: "/services/gst-registration"
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
      title: "TDS Filing",
      link: "/services/tds-filing"
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

export default GSTFiling;