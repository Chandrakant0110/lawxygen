
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

interface ServiceTemplateProps {
  serviceId: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  FAQs: Array<{ question: string; answer: string }>;
  relatedServices: Array<{ title: string; link: string }>;
}

const ServiceTemplate = ({
  serviceId,
  title,
  subtitle,
  description,
  heroImage,
  FAQs,
  relatedServices
}: ServiceTemplateProps) => {
  // Process steps - consistent for all service pages
  const steps = [
    {
      title: "Consultation",
      description: "We begin with a detailed discussion to understand your specific requirements and objectives."
    },
    {
      title: "Documentation",
      description: "Our team assists you in gathering and preparing all necessary documents for the process."
    },
    {
      title: "Filing & Processing",
      description: "We handle the submission of all documents and follow up with relevant authorities."
    },
    {
      title: "Completion & Delivery",
      description: "Once approved, we deliver all certificates and guide you through next steps."
    }
  ];

  return (
    <ServicePageLayout
      serviceId={serviceId}
      title={title}
      subtitle={subtitle}
      description={description}
      heroImage={heroImage}
      steps={steps}
      faqs={FAQs}
      relatedServices={relatedServices}
    />
  );
};

export default ServiceTemplate;
