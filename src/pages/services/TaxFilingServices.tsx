
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Calculator, Clock, Shield } from "lucide-react";

const TaxFilingServices = () => {
  // Service specific data
  const serviceId = "tax-filing-services";
  const title = "Tax Filing Services";
  const subtitle = "Professional tax preparation and filing for individuals and businesses";
  const description = 
    "Our comprehensive tax filing services ensure accurate and timely submission of your tax returns while maximizing legal deductions. Our experienced tax professionals handle individual and business tax returns with precision and care.";
  
  // Process steps
  const steps = [
    {
      title: "Initial Consultation",
      description: "We'll discuss your tax situation, collect necessary information, and identify potential deductions and credits."
    },
    {
      title: "Document Collection",
      description: "Our team provides a customized checklist of required documents and assists you in organizing your financial information."
    },
    {
      title: "Tax Preparation",
      description: "Experienced tax professionals prepare your returns, ensuring accuracy and compliance with latest tax laws."
    },
    {
      title: "Review & Filing",
      description: "We review the completed returns with you, answer any questions, and file them electronically with the tax authorities."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Individual Tax Return",
      price: "₹2,999",
      description: "For salaried individuals with standard income sources.",
      features: [
        "Income tax return preparation",
        "Basic tax planning advice",
        "Electronic filing",
        "Email support",
        "Form 16 based filing",
        "Standard deductions review"
      ],
      buttonText: "Get Started",
      buttonLink: "#consultation"
    },
    {
      title: "Business Tax Package",
      price: "₹7,999",
      description: "For proprietorships and small businesses with multiple income sources.",
      popular: true,
      features: [
        "Business income tax return",
        "GST return filing (4 quarters)",
        "Tax planning consultation",
        "Deductions optimization",
        "Dedicated tax expert",
        "1 year advisory support",
        "Audit assistance"
      ],
      buttonText: "Recommended",
      buttonLink: "#consultation"
    },
    {
      title: "Corporate Tax Solution",
      price: "₹19,999",
      description: "Comprehensive tax services for companies and complex business structures.",
      features: [
        "Corporate tax return filing",
        "Advanced tax strategy",
        "Monthly GST compliance",
        "TDS returns (4 quarters)",
        "Tax audit coordination",
        "Year-round support",
        "International tax advisory"
      ],
      buttonText: "Contact Us",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "When is the deadline for filing income tax returns in India?",
      answer: "For individuals, the general deadline is July 31st following the end of the financial year (which ends March 31st). For businesses and individuals requiring audit, the deadline is typically September 30th or October 31st, depending on the category."
    },
    {
      question: "What documents do I need to provide for tax filing?",
      answer: "For individuals, you'll need Form 16, investment proofs, home loan statements, and rent receipts (if applicable). Businesses will need financial statements, expense records, GST returns, and asset purchase/sale documentation."
    },
    {
      question: "Do I need to file returns if my income is below the taxable limit?",
      answer: "While not legally required, filing returns even when below the taxable limit is advisable as it creates an income record, facilitates loan applications, and allows carrying forward of losses if any."
    },
    {
      question: "How can I maximize my tax refund?",
      answer: "Maximizing your refund involves claiming all eligible deductions (Section 80C investments, medical insurance, home loan interest), ensuring correct TDS credits, claiming HRA benefits if eligible, and properly reporting exempt income."
    },
    {
      question: "What happens if I miss the tax filing deadline?",
      answer: "Filing after the deadline may result in late fees ranging from ₹1,000 to ₹10,000 depending on income and delay duration. Additionally, you may lose the ability to carry forward certain losses and face interest charges on any tax due."
    },
    {
      question: "How long do you retain my tax documents?",
      answer: "We securely maintain your tax documents for a period of 7 years, which aligns with the potential assessment period under Indian tax laws. However, we recommend you also maintain personal copies of all submitted documents."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "GST Registration",
      link: "/services/gst-registration"
    },
    {
      title: "Accounting Services",
      link: "/services/accounting-services"
    },
    {
      title: "Financial Compliance",
      link: "/services/financial-compliance"
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
            Why Choose Our Tax Filing Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tax Expertise</h3>
              <p className="text-slate-600">
                Our team of experienced tax professionals stays updated with the latest tax laws and regulations to ensure maximum benefits.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Time-Saving</h3>
              <p className="text-slate-600">
                We handle the complete tax filing process, saving you countless hours of paperwork and research.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Audit Protection</h3>
              <p className="text-slate-600">
                Our meticulous approach minimizes audit risks, and we provide support in case of tax department inquiries or notices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default TaxFilingServices;
