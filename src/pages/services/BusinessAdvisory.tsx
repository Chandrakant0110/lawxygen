import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const BusinessAdvisory = () => {
  const serviceId = "business-advisory";
  
  const title = "Business Advisory Services";
  
  const subtitle = "Strategic business guidance and advisory services for growth and compliance";
  
  const description = "Our business advisory services provide strategic guidance for businesses at all stages. From startup advisory to growth strategy, compliance planning, and operational optimization, we help businesses make informed decisions and achieve sustainable growth.";
  
  const heroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What areas do you provide business advisory for?",
      answer: "We provide advisory services for business strategy, legal compliance, corporate governance, risk management, fundraising, mergers & acquisitions, and operational improvements."
    },
    {
      question: "Do you help startups with business planning?",
      answer: "Yes, we assist startups with business structure selection, compliance roadmaps, funding strategies, legal risk assessment, and scalable operational frameworks."
    },
    {
      question: "How do you help with compliance planning?",
      answer: "We create comprehensive compliance calendars, assess regulatory requirements, implement compliance systems, and provide ongoing monitoring to ensure adherence to all applicable laws."
    },
    {
      question: "Can you assist with business restructuring?",
      answer: "We help with corporate restructuring, subsidiary formation, business transfers, shareholding restructuring, and organizational optimization for better efficiency and compliance."
    },
    {
      question: "Do you provide industry-specific advisory?",
      answer: "Yes, we provide specialized advisory services for various industries including technology, healthcare, manufacturing, retail, and financial services, considering industry-specific regulations and best practices."
    }
  ];
  
  const relatedServices = [
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Fundraising Support",
      link: "/services/fundraising"
    },
    {
      title: "Legal Retainer Plans",
      link: "/services/legal-retainer"
    },
    {
      title: "Annual Compliance",
      link: "/services/annual-compliance"
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

export default BusinessAdvisory;