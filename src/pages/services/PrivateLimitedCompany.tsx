
import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const PrivateLimitedCompany = () => {
  const serviceId = "private-limited-company";
  
  const title = "Private Limited Company Registration";
  
  const subtitle = "Start your business journey with a Private Limited Company setup that provides credibility and limited liability";
  
  const description = "Our Private Limited Company registration service offers a complete end-to-end solution for entrepreneurs looking to incorporate their business. We handle all legal formalities from name approval to certificate of incorporation, ensuring a smooth and hassle-free registration process.";
  
  const heroImage = "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What are the benefits of registering as a Private Limited Company?",
      answer: "Private Limited Companies offer limited liability protection, easier access to funding, enhanced credibility, perpetual succession, and separate legal entity status. These benefits make them an ideal choice for startups and growing businesses."
    },
    {
      question: "How long does it take to register a Private Limited Company?",
      answer: "The entire process typically takes 10-15 working days from the date of submitting all required documents. This includes name approval, document preparation, filing with ROC, and obtaining the certificate of incorporation."
    },
    {
      question: "What are the minimum requirements to form a Private Limited Company?",
      answer: "You need at least 2 directors and 2 shareholders (can be the same individuals), a minimum paid-up capital (though no minimum requirement officially), a registered office address in India, and Digital Signature Certificates for the directors."
    },
    {
      question: "What compliances are required after incorporation?",
      answer: "After incorporation, you need to conduct annual filings like Annual Returns and Financial Statements, maintain statutory registers, conduct board meetings, hold Annual General Meetings, and comply with various tax regulations like GST, Income Tax, TDS, etc."
    },
    {
      question: "Can foreigners or NRIs register a Private Limited Company in India?",
      answer: "Yes, foreigners and NRIs can register a Private Limited Company in India. However, certain additional documents and procedures like FEMA compliance may be required. Our team can guide you through the specific requirements."
    },
    {
      question: "What is the minimum capital requirement for Private Limited Company registration?",
      answer: "There is no legally prescribed minimum capital requirement for Private Limited Companies in India. You can start with a nominal amount based on your business needs and increase it later as required."
    }
  ];
  
  const relatedServices = [
    {
      title: "LLP Registration",
      link: "/services/llp-registration"
    },
    {
      title: "GST Registration",
      link: "/services/gst-compliance"
    },
    {
      title: "ROC Compliance",
      link: "/services/roc-compliance"
    },
    {
      title: "Business Compliance",
      link: "/services/business-compliance"
    },
    {
      title: "Startup Legal Bundle",
      link: "/services/startup-legal-bundle"
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

export default PrivateLimitedCompany;
