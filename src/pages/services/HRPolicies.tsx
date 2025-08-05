import React from "react";
import ServiceTemplate from "./ServiceTemplate";

const HRPolicies = () => {
  const serviceId = "hr-policies";
  
  const title = "HR Policies Development";
  
  const subtitle = "Develop compliant HR documents and workplace policies";
  
  const description = "Our HR policies development services help businesses create comprehensive human resource policies that ensure legal compliance, promote fair workplace practices, and protect both employers and employees. We draft policies tailored to your industry and organizational culture.";
  
  const heroImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  
  const FAQs = [
    {
      question: "What HR policies should every company have?",
      answer: "Essential HR policies include employment terms, code of conduct, anti-harassment policy, leave policy, disciplinary procedures, grievance handling, data protection, and performance management policies."
    },
    {
      question: "How do you ensure HR policies comply with labor laws?",
      answer: "We stay updated with current labor legislation, incorporate statutory requirements, ensure policies align with employment laws, and include provisions for regulatory compliance across different states."
    },
    {
      question: "Can HR policies be customized for different roles?",
      answer: "Yes, we create role-specific policies, department-wise guidelines, and hierarchical policy structures while maintaining overall consistency and compliance across the organization."
    },
    {
      question: "How often should HR policies be updated?",
      answer: "HR policies should be reviewed annually or when laws change, business structure evolves, or significant workplace issues arise. We provide ongoing policy review and update services."
    },
    {
      question: "Do you help with employee handbook creation?",
      answer: "Yes, we create comprehensive employee handbooks that consolidate all HR policies, company culture information, benefits details, and procedural guidelines in an easy-to-understand format."
    }
  ];
  
  const relatedServices = [
    {
      title: "Business Contracts",
      link: "/services/business-contracts"
    },
    {
      title: "Legal Consultation",
      link: "/services/legal-consultation"
    },
    {
      title: "HR Payroll Compliance",
      link: "/services/hr-payroll-compliance"
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

export default HRPolicies;