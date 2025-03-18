import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const GSTRegistration = () => {
  const serviceId = "gst-registration";
  
  const title = "GST Registration";
  
  const subtitle = "Register for Goods and Services Tax to comply with Indian tax regulations and grow your business";
  
  const description = "Our comprehensive GST registration service helps businesses obtain their GSTIN quickly and efficiently. We handle the entire process from application to certificate delivery, ensuring you meet all legal requirements.";
  
  const FAQs = [
    {
      question: "Who needs to register for GST?",
      answer: "Any business with an annual turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs for service providers and special category states) must register for GST. E-commerce operators, those making inter-state supplies, and certain other categories must register regardless of turnover."
    },
    {
      question: "What documents are required for GST registration?",
      answer: "You'll need PAN of the business, Aadhaar of the proprietor/partners/directors, address proof of the business, bank account details, photographs, and business registration documents (such as certificate of incorporation or partnership deed)."
    },
    {
      question: "How long does GST registration take?",
      answer: "The GST registration process typically takes 3-7 working days from the date of application submission, provided all documents are in order and there are no verification issues."
    },
    {
      question: "Can I register for GST voluntarily even if my turnover is below the threshold?",
      answer: "Yes, businesses can opt for voluntary GST registration even if their turnover is below the prescribed threshold. This can be beneficial for businesses dealing with GST-registered clients to enable input tax credit."
    },
    {
      question: "What happens after GST registration?",
      answer: "After obtaining GST registration, businesses must file regular GST returns (monthly, quarterly, or annually depending on the registration type), maintain proper books of accounts, issue GST-compliant invoices, and comply with other GST regulations."
    },
    {
      question: "Can I apply for multiple GSTINs for different business locations?",
      answer: "Yes, a business needs to obtain separate GST registration for each state where it operates. If you have multiple places of business within the same state, you can opt for either a single registration or separate registrations for each location."
    }
  ];
  
  const relatedServices = [
    {
      title: "GST Return Filing",
      link: "/services/gst-filing"
    },
    {
      title: "Business Registration",
      link: "/services/company-registration"
    },
    {
      title: "Income Tax Filing",
      link: "/services/income-tax-filing"
    },
    {
      title: "Accounting Services",
      link: "/services/accounting-services"
    },
    {
      title: "GST Advisory",
      link: "/services/gst-advisory"
    }
  ];
  
  return (
    <ServiceTemplate
      serviceId={serviceId}
      title={title}
      subtitle={subtitle}
      description={description}
      FAQs={FAQs}
      relatedServices={relatedServices}
    />
  );
};

export default GSTRegistration;
