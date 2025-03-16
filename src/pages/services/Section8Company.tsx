
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { HeartHandshake, Shield, Landmark } from "lucide-react";

const Section8Company = () => {
  // Service specific data
  const serviceId = "section-8-company";
  const title = "Section 8 Company Registration";
  const subtitle = "Establish your non-profit organization with expert legal assistance";
  const description = 
    "Section 8 Companies are non-profit organizations established for promoting charitable or public utility purposes. Our comprehensive registration services handle all legal and regulatory requirements for establishing your Section 8 Company efficiently and in compliance with all regulations.";
  
  // Process steps
  const steps = [
    {
      title: "Initial Consultation",
      description: "We'll discuss your non-profit goals, activities, and develop a registration strategy aligned with your mission."
    },
    {
      title: "Documentation & Name Approval",
      description: "Our team prepares all necessary documents including MOA, AOA with specific charitable objects and obtains name approval."
    },
    {
      title: "Incorporation & Filing",
      description: "We handle the incorporation process, file all paperwork with MCA, and obtain the Certificate of Incorporation with Section 8 license."
    },
    {
      title: "Post-Incorporation Setup",
      description: "We assist with bank account opening, 80G/12A registration, FCRA registration guidance, and compliance requirements."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Standard Package",
      price: "₹19,999",
      description: "Complete Section 8 Company registration with all essential services.",
      features: [
        "Name availability check",
        "DIN and DSC for 2 directors",
        "MOA and AOA with charitable objects",
        "Certificate of Incorporation",
        "PAN and TAN application",
        "Bank account assistance",
        "Basic compliance guidance"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Premium Package",
      price: "₹29,999",
      description: "Comprehensive solution for serious non-profit organizations.",
      popular: true,
      features: [
        "All features in Standard Package",
        "80G/12A registration",
        "Compliance setup for 1 year",
        "CSR eligibility guidance",
        "Donor management system",
        "Basic website setup",
        "1 year compliance support"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Elite Package",
      price: "₹39,999",
      description: "End-to-end solution including post-registration operational setup.",
      features: [
        "All features in Premium Package",
        "FCRA registration guidance",
        "Complete compliance manual",
        "Staff training session",
        "Fundraising strategy consultation",
        "2 years compliance support",
        "Quarterly review meetings"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What is a Section 8 Company?",
      answer: "A Section 8 Company is a non-profit organization registered under Section 8 of the Companies Act, 2013. It is formed for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of the environment, or any such other purpose."
    },
    {
      question: "What are the key features of a Section 8 Company?",
      answer: "Key features include prohibition on payment of dividends to members, use of profits for promoting the company's objectives, no requirement for minimum paid-up capital, exemption from various provisions of the Companies Act, and tax benefits under the Income Tax Act."
    },
    {
      question: "What are the minimum requirements to form a Section 8 Company?",
      answer: "You need at least 2 directors, 2 shareholders (who can be the same as directors), a registered office address, and clear charitable or public utility objectives defined in the Memorandum of Association."
    },
    {
      question: "How long does the registration process take?",
      answer: "The registration process typically takes 4-6 weeks, as it requires special approval from the Regional Director of the Ministry of Corporate Affairs, in addition to the regular incorporation process."
    },
    {
      question: "Can a Section 8 Company engage in profit-making activities?",
      answer: "While a Section 8 Company can engage in activities that generate revenue, all profits must be used solely for promoting the company's charitable objectives and cannot be distributed to its members as dividends."
    },
    {
      question: "What tax benefits are available to a Section 8 Company?",
      answer: "Section 8 Companies can apply for income tax exemption under Sections 12A and 80G of the Income Tax Act. This allows them to receive tax-exempt donations and grants, significantly enhancing their fundraising capabilities."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Trust Registration",
      link: "/services/trust-registration"
    },
    {
      title: "NGO Compliance",
      link: "/services/ngo-compliance"
    },
    {
      title: "Legal Documentation",
      link: "/services/legal-documents"
    }
  ];

  return (
    <ServicePageLayout
      serviceId={serviceId}
      title={title}
      subtitle={subtitle}
      description={description}
      steps={steps}
      pricingTiers={pricingTiers}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Additional custom content for this specific service */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Why Choose Our Section 8 Company Registration Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Non-Profit Expertise</h3>
              <p className="text-slate-600">
                Our team specializes in non-profit organizations and understands the unique regulatory landscape they operate in.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">End-to-End Support</h3>
              <p className="text-slate-600">
                We handle everything from incorporation to tax exemption registrations, ensuring a smooth launch for your non-profit.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fundraising Guidance</h3>
              <p className="text-slate-600">
                We provide strategic advice on tax-efficient fundraising methods and compliance requirements for non-profits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Section8Company;
