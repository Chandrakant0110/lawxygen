
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { FileCheck, Shield, BarChart } from "lucide-react";

const NidhiCompany = () => {
  // Service specific data
  const serviceId = "nidhi-company";
  const title = "Nidhi Company Registration";
  const subtitle = "Set up a specialized financial institution with expert assistance";
  const description = 
    "Nidhi Companies are a special type of NBFC recognized under section 406 of Companies Act, 2013, focused on cultivating saving habits and mutual benefits among members. Our comprehensive registration services handle all legal and regulatory requirements for establishing your Nidhi Company.";
  
  // Process steps
  const steps = [
    {
      title: "Initial Consultation",
      description: "We'll discuss your goals, explain Nidhi Company regulations, and develop a registration strategy."
    },
    {
      title: "Documentation & Name Approval",
      description: "Our team prepares all necessary documents including MOA, AOA with specific Nidhi clauses and obtains name approval."
    },
    {
      title: "Incorporation & Filing",
      description: "We handle the incorporation process, file all paperwork with MCA, and obtain the Certificate of Incorporation."
    },
    {
      title: "Post-Incorporation Compliance",
      description: "We assist with the mandatory RBI declaration, compliance setup, and other post-registration requirements."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Standard Package",
      price: "₹24,999",
      description: "Complete Nidhi Company registration with all essential services.",
      features: [
        "Name availability check",
        "DIN and DSC for 3 directors",
        "MOA and AOA with Nidhi clauses",
        "Certificate of Incorporation",
        "PAN and TAN application",
        "Bank account assistance",
        "GST registration"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Premium Package",
      price: "₹34,999",
      description: "Comprehensive solution for serious Nidhi Company entrepreneurs.",
      popular: true,
      features: [
        "All features in Standard Package",
        "RBI declaration assistance",
        "Compliance setup for 1 year",
        "Rules and regulations drafting",
        "Share certificate templates",
        "Member management system",
        "1 year compliance support"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Elite Package",
      price: "₹49,999",
      description: "End-to-end solution including post-registration operational setup.",
      features: [
        "All features in Premium Package",
        "Loan & deposit policy drafting",
        "Complete compliance manual",
        "Staff training session",
        "Custom software setup",
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
      question: "What is a Nidhi Company?",
      answer: "A Nidhi Company is a type of Non-Banking Financial Company (NBFC) that operates primarily to cultivate the habit of thrift and savings amongst its members. It accepts deposits and makes loans to its members only."
    },
    {
      question: "What are the requirements to start a Nidhi Company?",
      answer: "You need minimum 7 shareholders, 3 directors, minimum paid-up capital of ₹5 lakhs, and must comply with the regulations specified in the Companies Act, 2013 and Nidhi Rules, 2014."
    },
    {
      question: "How long does it take to register a Nidhi Company?",
      answer: "The registration process typically takes 3-4 weeks for incorporation. However, becoming fully operational as a Nidhi Company requires additional declarations to be filed within 120 days of incorporation."
    },
    {
      question: "What are the unique compliance requirements for a Nidhi Company?",
      answer: "Nidhi Companies must maintain specific net owned fund to deposit ratios, ensure loans are only given to members with securities, maintain required reserves, and follow strict guidelines on interest rates and terms of loans and deposits."
    },
    {
      question: "Can a Nidhi Company operate nationally?",
      answer: "Nidhi Companies typically operate within a limited geographical area to ensure proper management and member engagement. While there's no specific prohibition on national operations, practical considerations and regulatory scrutiny generally favor localized operations."
    },
    {
      question: "What is the RBI declaration for Nidhi Companies?",
      answer: "Within 120 days of incorporation, a Nidhi Company must file Form NDH-4 with the Regional Director, declaring that it has 200 members, Net Owned Funds of ₹20 lakhs, and a 1:20 NOF to deposit ratio, among other requirements."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
    },
    {
      title: "Financial Compliance",
      link: "/services/financial-compliance"
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
            Why Choose Our Nidhi Company Registration Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Regulatory Expertise</h3>
              <p className="text-slate-600">
                Our team specializes in the complex regulations governing Nidhi Companies, ensuring full compliance.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">End-to-End Support</h3>
              <p className="text-slate-600">
                We handle everything from incorporation to operational setup, ensuring a smooth launch.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Post-Registration Guidance</h3>
              <p className="text-slate-600">
                Our support extends beyond registration, helping you navigate the crucial early operational period.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default NidhiCompany;
