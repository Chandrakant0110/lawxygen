import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const Property = () => {
  const serviceId = "property";
  
  const title = "Property & Real Estate Legal Services";
  
  const subtitle = "Comprehensive legal services for all your property and real estate needs";
  
  const description = "Our property and real estate legal services cover all aspects of property transactions including purchase, sale, lease agreements, property disputes, title verification, and regulatory compliance. We ensure smooth and legally sound property dealings.";
  
  const heroImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What property legal services do you provide?",
      answer: "We handle property purchase/sale agreements, lease deeds, title verification, property registration, dispute resolution, RERA compliance, and property development legal support."
    },
    {
      question: "Do you verify property titles?",
      answer: "Yes, we conduct comprehensive title verification including chain of ownership, encumbrance checks, approval verifications, and identification of any legal issues or disputes."
    },
    {
      question: "Can you help with property disputes?",
      answer: "We handle all types of property disputes including ownership disputes, possession matters, boundary disputes, tenant-landlord issues, and property fraud cases."
    },
    {
      question: "Do you assist with commercial property transactions?",
      answer: "Yes, we handle commercial property transactions including office leases, retail agreements, industrial property deals, joint ventures, and development agreements."
    },
    {
      question: "What about RERA compliance?",
      answer: "We ensure RERA compliance for real estate projects, help with RERA registrations, handle RERA dispute resolution, and provide ongoing compliance support for developers."
    }
  ];
  
  const relatedServices = [
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Business Contracts",
      link: "/services/business-contracts"
    },
    {
      title: "Litigation Support",
      link: "/services/litigation"
    },
    {
      title: "Legal Documents",
      link: "/services/legal-documents"
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

export default Property;