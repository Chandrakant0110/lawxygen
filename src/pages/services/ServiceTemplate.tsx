
import React, { memo } from "react";
import ServicePageTemplate from "@/components/layout/ServicePageTemplate";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ErrorBoundary from "@/components/common/ErrorBoundary";

interface ServiceTemplateProps {
  serviceId: string;
  title: string;
  subtitle: string;
  description: string;
  FAQs: Array<{ question: string; answer: string }>;
  relatedServices: Array<{ title: string; link: string }>;
}

const ServiceTemplate = memo(({
  serviceId,
  title,
  subtitle,
  description,
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
    <ServicePageTemplate
      serviceId={serviceId}
      title={title}
      description={description}
    >
      <ErrorBoundary>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ErrorBoundary>
      
      {FAQs && FAQs.length > 0 && (
        <ErrorBoundary>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </ErrorBoundary>
      )}
      
      {relatedServices && relatedServices.length > 0 && (
        <ErrorBoundary>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedServices.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.link} 
                    className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </ErrorBoundary>
      )}
    </ServicePageTemplate>
  );
});

export default ServiceTemplate;
