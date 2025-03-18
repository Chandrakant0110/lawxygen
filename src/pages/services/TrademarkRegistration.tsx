import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const TrademarkRegistration = () => {
  const serviceId = "trademark-registration";
  
  const title = "Trademark Registration";
  
  const subtitle = "Protect your brand identity and ensure legal rights over your business name, logo, and tagline";
  
  const description = "Our trademark registration service provides comprehensive protection for your brand elements, ensuring exclusive rights to use your marks in commerce. We handle the entire process from trademark search to registration certificate, helping you build and protect your brand identity.";
  
  const heroImage = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "How long does trademark registration take in India?",
      answer: "The trademark registration process in India typically takes 18-24 months from the date of filing to registration, provided there are no objections or oppositions. However, you get rights from the date of filing itself."
    },
    {
      question: "What is the validity period of a trademark?",
      answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely for successive periods of 10 years by paying the renewal fee."
    },
    {
      question: "Can I file for trademark registration myself?",
      answer: "While it's possible to file for trademark registration yourself, having professional assistance significantly increases your chances of successful registration. Our experts handle complex legal requirements, respond to examiner objections, and ensure your application meets all criteria."
    },
    {
      question: "What types of trademarks can be registered?",
      answer: "You can register various types of trademarks including words, logos, combinations of words and logos, shapes, sounds, and even colors in some cases. Any mark that can distinguish your goods/services from others can potentially be registered."
    },
    {
      question: "What happens if someone uses my trademark without permission?",
      answer: "If someone uses your registered trademark without permission, you have legal rights to take action against them. This may include sending cease and desist notices, filing for trademark infringement, seeking damages, and more. Our legal team can provide guidance on enforcement actions."
    },
    {
      question: "Is a preliminary trademark search necessary?",
      answer: "Yes, a preliminary trademark search is highly recommended. It helps identify potential conflicts with existing trademarks that could lead to registration rejections. Our service includes a comprehensive trademark search to minimize rejection risks."
    }
  ];
  
  const relatedServices = [
    {
      title: "Copyright Registration",
      link: "/services/copyright-protection"
    },
    {
      title: "Patent Filing",
      link: "/services/patent-filing"
    },
    {
      title: "Legal Document Drafting",
      link: "/services/legal-document-drafting"
    },
    {
      title: "IP Advisory Services",
      link: "/services/ip-services"
    },
    {
      title: "Global IP Protection",
      link: "/services/global-ip-protection"
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

export default TrademarkRegistration;
