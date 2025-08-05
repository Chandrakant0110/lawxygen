import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const LegalConsultation = () => {
  const serviceId = "legal-consultation";
  
  const title = "Legal Consultation Services";
  
  const subtitle = "Expert legal advice and guidance from experienced professionals";
  
  const description = "Our legal consultation services provide expert advice on various legal matters including business law, contracts, compliance, disputes, and strategic legal planning. Get personalized guidance from qualified legal professionals.";
  
  const heroImage = "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What areas do you provide legal consultation for?",
      answer: "We provide consultation on corporate law, contract law, employment law, intellectual property, compliance matters, dispute resolution, real estate, family law, and various other legal areas."
    },
    {
      question: "How is the consultation conducted?",
      answer: "Consultations can be conducted in-person, over phone, or via video call based on your preference. We also provide written legal opinions and advice when required."
    },
    {
      question: "What should I prepare for the consultation?",
      answer: "Prepare all relevant documents, a clear description of your legal issue, specific questions you want answered, and any previous legal advice received. This helps us provide more focused guidance."
    },
    {
      question: "Is the consultation confidential?",
      answer: "Yes, all consultations are strictly confidential and protected by attorney-client privilege. Your information and discussions remain completely private."
    },
    {
      question: "Can you provide ongoing legal support?",
      answer: "Yes, we offer retainer arrangements for ongoing legal support, regular compliance check-ups, and continuous legal guidance for businesses and individuals."
    }
  ];
  
  const relatedServices = [
    {
      title: "Legal Documents",
      link: "/services/legal-documents"
    },
    {
      title: "Business Advisory",
      link: "/services/business-advisory"
    },
    {
      title: "Legal Retainer Plans",
      link: "/services/legal-retainer"
    },
    {
      title: "Litigation Support",
      link: "/services/litigation"
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

export default LegalConsultation;