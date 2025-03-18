import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const OPCRegistration = () => {
  const serviceId = "one-person-company";
  
  const title = "One Person Company (OPC) Registration";
  
  const subtitle = "Start your business as a single promoter with the benefits of a corporate entity";
  
  const description = "Our One Person Company registration service provides end-to-end assistance for solo entrepreneurs looking to incorporate their business with limited liability protection, perpetual succession, and other corporate benefits.";
  
  const FAQs = [
    {
      question: "What is a One Person Company?",
      answer: "A One Person Company (OPC) is a hybrid business structure that combines the benefits of a sole proprietorship with those of a private limited company. It allows a single person to establish a company with limited liability protection."
    },
    {
      question: "What are the advantages of OPC over sole proprietorship?",
      answer: "OPC offers limited liability protection, perpetual succession, separate legal entity status, better credibility, and easier access to credit compared to a sole proprietorship."
    },
    {
      question: "Who can be the nominee for an OPC?",
      answer: "The nominee for an OPC must be an Indian citizen and resident of India. This person will take over the company in case of the death or incapacity of the original member."
    },
    {
      question: "Can an OPC convert to a private limited company?",
      answer: "Yes, an OPC can be voluntarily converted into a private limited company when its paid-up share capital exceeds Rs. 50 lakhs or average annual turnover exceeds Rs. 2 crores over three consecutive financial years."
    },
    {
      question: "What are the compliance requirements for an OPC?",
      answer: "OPCs need to maintain financial statements, file annual returns, conduct annual general meetings (though not mandatory), and comply with tax regulations. The compliance requirements are simpler compared to other company structures."
    },
    {
      question: "How long does OPC registration take?",
      answer: "The entire OPC registration process typically takes 10-15 working days from the date of document submission, including name approval, filing with the Registrar of Companies, and receiving the certificate of incorporation."
    }
  ];
  
  const relatedServices = [
    {
      title: "Private Limited Company Registration",
      link: "/services/private-limited-company"
    },
    {
      title: "GST Registration",
      link: "/services/gst-compliance"
    },
    {
      title: "Sole Proprietorship Registration",
      link: "/services/sole-proprietorship"
    },
    {
      title: "Business Compliance",
      link: "/services/business-compliance"
    },
    {
      title: "MSME Registration",
      link: "/services/msme-registration"
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

export default OPCRegistration;
