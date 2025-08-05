import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const PatentFiling = () => {
  const serviceId = "patent-filing";
  
  const title = "Patent Filing Services";
  
  const subtitle = "Protect your innovations with comprehensive patent filing and prosecution services";
  
  const description = "Our patent filing services help inventors and businesses protect their innovations through the patent registration process. From patent search to filing and prosecution, we provide complete support for securing your intellectual property rights.";
  
  const heroImage = "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What can be patented?",
      answer: "Patents can be obtained for new inventions, products, processes, or improvements that are novel, non-obvious, and industrially applicable. This includes mechanical devices, chemical compositions, software algorithms, and business methods."
    },
    {
      question: "How long does patent protection last?",
      answer: "Patent protection lasts for 20 years from the date of filing for invention patents. Utility model patents (if applicable) typically last for 7-10 years depending on jurisdiction."
    },
    {
      question: "What is the patent filing process?",
      answer: "The process includes patent search, drafting patent application, filing with patent office, examination, responding to objections (if any), and grant of patent. The entire process can take 2-4 years."
    },
    {
      question: "Is patent search necessary before filing?",
      answer: "Yes, patent search is highly recommended to ensure your invention is novel and to understand existing prior art. This helps in drafting a stronger patent application and assessing patentability."
    },
    {
      question: "Can I file patents internationally?",
      answer: "Yes, we assist with international patent filing through PCT (Patent Cooperation Treaty) route, which allows filing in multiple countries through a single application, or direct filing in specific countries."
    }
  ];
  
  const relatedServices = [
    {
      title: "Trademark Registration",
      link: "/services/trademark-registration"
    },
    {
      title: "Copyright Registration",
      link: "/services/copyright-registration"
    },
    {
      title: "Design Registration",
      link: "/services/design-registration"
    },
    {
      title: "IPR Services",
      link: "/services/ipr-services"
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

export default PatentFiling;