import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const AccountingServices = () => {
  const serviceId = "accounting-services";
  
  const title = "Accounting Services";
  
  const subtitle = "Professional accounting and bookkeeping services to keep your business finances in order";
  
  const description = "Our comprehensive accounting services help businesses maintain accurate financial records, ensure compliance, and make informed financial decisions. From basic bookkeeping to complex financial reporting, we provide expert support for all your accounting needs.";
  
  const heroImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What accounting services do you provide?",
      answer: "We offer comprehensive accounting services including bookkeeping, financial statement preparation, tax preparation, payroll processing, accounts payable/receivable management, and financial reporting."
    },
    {
      question: "Do you provide services for small businesses?",
      answer: "Yes, we specialize in providing accounting services for small to medium-sized businesses. Our services are scalable and can be customized based on your business size and requirements."
    },
    {
      question: "How often do you provide financial reports?",
      answer: "We can provide financial reports monthly, quarterly, or annually based on your business needs. Regular monthly reports help you stay on top of your financial performance."
    },
    {
      question: "Do you handle tax compliance?",
      answer: "Yes, our accounting services include tax compliance support. We ensure your books are maintained in a way that makes tax filing smooth and helps you take advantage of all available deductions."
    },
    {
      question: "Can you help with GST compliance?",
      answer: "Absolutely! We provide comprehensive GST compliance services including GST registration, return filing, input tax credit optimization, and handling GST audits."
    }
  ];
  
  const relatedServices = [
    {
      title: "GST Registration",
      link: "/services/gst-registration"
    },
    {
      title: "Annual Compliance",
      link: "/services/annual-compliance"
    },
    {
      title: "Tax Filing Services",
      link: "/services/tax-filing-services"
    },
    {
      title: "Business Advisory",
      link: "/services/business-advisory"
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

export default AccountingServices;