import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const TrademarkSearch = () => {
  const serviceId = "trademark-search";
  
  const title = "Trademark Search Services";
  
  const subtitle = "Comprehensive trademark search to ensure your brand is available for registration";
  
  const description = "Our trademark search services help you verify the availability of your proposed trademark before filing. We conduct thorough searches across multiple databases to identify potential conflicts and provide detailed reports.";
  
  const heroImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "Why is trademark search important?",
      answer: "Trademark search helps avoid infringement issues, saves time and money by identifying conflicts early, increases chances of successful registration, and helps in developing a strong brand strategy."
    },
    {
      question: "What databases do you search?",
      answer: "We search Indian Trademark Registry, Common law trademarks, Domain names, Company names, and international trademark databases to provide comprehensive coverage."
    },
    {
      question: "How detailed is the search report?",
      answer: "Our search report includes identical and similar marks, detailed analysis of potential conflicts, risk assessment, and recommendations for proceeding with the application."
    },
    {
      question: "How long does a trademark search take?",
      answer: "A basic trademark search typically takes 1-2 business days, while a comprehensive search with detailed analysis may take 3-5 business days."
    },
    {
      question: "What if conflicts are found?",
      answer: "If conflicts are identified, we provide alternatives, suggest modifications to your mark, or advise on the feasibility of coexistence with existing marks."
    }
  ];
  
  const relatedServices = [
    {
      title: "Trademark Registration",
      link: "/services/trademark-registration"
    },
    {
      title: "Trademark Class Finder",
      link: "/services/trademark-class-finder"
    },
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "International Trademark",
      link: "/services/international-trademark"
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

export default TrademarkSearch;