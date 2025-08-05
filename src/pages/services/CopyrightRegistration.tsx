import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const CopyrightRegistration = () => {
  const serviceId = "copyright-registration";
  
  const title = "Copyright Registration";
  
  const subtitle = "Protect your creative works with comprehensive copyright registration services";
  
  const description = "Our copyright registration services help protect your original creative works including literary, artistic, musical, and software creations. We handle the entire registration process to secure your intellectual property rights.";
  
  const heroImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What works can be copyrighted?",
      answer: "Copyright can be obtained for literary works, musical works, artistic works, cinematograph films, sound recordings, computer software, and dramatic works that are original and expressed in tangible form."
    },
    {
      question: "How long does copyright protection last?",
      answer: "Copyright protection lasts for the lifetime of the author plus 60 years. For anonymous works, pseudonymous works, and works of joint authorship, it's 60 years from first publication."
    },
    {
      question: "Is copyright registration mandatory?",
      answer: "No, copyright exists automatically upon creation of original work. However, registration provides legal evidence of ownership and is helpful in case of infringement disputes."
    },
    {
      question: "What documents are required for copyright registration?",
      answer: "Required documents include the original work, application form, identity proof of author/applicant, and prescribed fees. For software, source code and object code may be required."
    },
    {
      question: "How long does the copyright registration process take?",
      answer: "The copyright registration process typically takes 6-8 months from the date of application, including examination and publication periods."
    }
  ];
  
  const relatedServices = [
    {
      title: "Trademark Registration",
      link: "/services/trademark-registration"
    },
    {
      title: "Patent Filing",
      link: "/services/patent-filing"
    },
    {
      title: "Design Registration",
      link: "/services/design-registration"
    },
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
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

export default CopyrightRegistration;