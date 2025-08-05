import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const PitchDeck = () => {
  const serviceId = "pitch-deck";
  
  const title = "Business Pitch Deck Creation";
  
  const subtitle = "Create compelling investor pitch decks that secure funding";
  
  const description = "Our pitch deck creation services help startups and businesses develop professional, investor-ready presentations. We combine market insights, financial modeling, and compelling storytelling to create pitch decks that capture investor attention and secure funding.";
  
  const heroImage = "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What slides are included in a pitch deck?",
      answer: "A typical pitch deck includes problem statement, solution, market opportunity, business model, traction, competition analysis, team, financials, funding ask, and use of funds slides."
    },
    {
      question: "How long should a pitch deck be?",
      answer: "An effective pitch deck is typically 10-15 slides for presentations and up to 20 slides for detailed investor decks. We focus on clarity and impact over length."
    },
    {
      question: "Do you help with financial projections?",
      answer: "Yes, we assist with creating realistic financial projections, revenue models, unit economics, and funding requirements that investors expect to see."
    },
    {
      question: "Can you customize decks for different investors?",
      answer: "Absolutely! We help customize pitch decks for different investor types (VCs, angels, banks) and funding stages, highlighting relevant aspects for each audience."
    },
    {
      question: "Do you provide presentation coaching?",
      answer: "While our primary focus is deck creation, we provide guidance on presentation structure and key messaging to help you deliver effectively to investors."
    }
  ];
  
  const relatedServices = [
    {
      title: "Fundraising Support",
      link: "/services/fundraising"
    },
    {
      title: "Business Advisory",
      link: "/services/business-advisory"
    },
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
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

export default PitchDeck;