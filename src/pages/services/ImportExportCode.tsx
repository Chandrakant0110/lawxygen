
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Globe, FileCheck, ShoppingBag } from "lucide-react";

const ImportExportCode = () => {
  // Service specific data
  const serviceId = "import-export-code";
  const title = "Import Export Code (IEC) Registration";
  const subtitle = "Start your international trade journey with hassle-free IEC registration";
  const description = 
    "Import Export Code (IEC) is a mandatory 10-digit identification number required for businesses engaged in import or export activities in India. Our comprehensive registration service ensures you obtain your IEC quickly and smoothly to begin your international trade operations.";
  
  // Process steps
  const steps = [
    {
      title: "Initial Consultation",
      description: "We'll discuss your business model, international trade plans, and documentation requirements."
    },
    {
      title: "Document Collection",
      description: "Our team helps you gather and organize all necessary documents for IEC application."
    },
    {
      title: "Application Filing",
      description: "We prepare and submit your IEC application with the Directorate General of Foreign Trade (DGFT)."
    },
    {
      title: "IEC Certificate Delivery",
      description: "Once approved, we deliver your Import Export Code certificate and provide guidance on next steps."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Basic Package",
      price: "₹3,999",
      description: "Essential IEC registration service for individuals and businesses.",
      features: [
        "Document verification",
        "Application preparation",
        "DGFT filing",
        "IEC certificate delivery",
        "Email support",
        "Basic guidance"
      ],
      buttonText: "Get Started",
      buttonLink: "#consultation"
    },
    {
      title: "Standard Package",
      price: "₹5,999",
      description: "Comprehensive IEC registration with additional trade support.",
      popular: true,
      features: [
        "All features in Basic Package",
        "Dedicated support executive",
        "Digital signature assistance",
        "HSN/ITC code guidance",
        "Basic import/export advisory",
        "1 year support",
        "Business profile creation"
      ],
      buttonText: "Recommended",
      buttonLink: "#consultation"
    },
    {
      title: "Premium Package",
      price: "₹9,999",
      description: "Complete international trade setup solution.",
      features: [
        "All features in Standard Package",
        "Trade documentation guidance",
        "Customs procedure advisory",
        "Duty structure consultation",
        "Trade compliance overview",
        "2 years support",
        "Foreign trade policy advisory"
      ],
      buttonText: "Get Premium",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What is an Import Export Code (IEC)?",
      answer: "An Import Export Code (IEC) is a 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT) that is mandatory for any business or individual engaged in import or export activities in India."
    },
    {
      question: "Who needs to obtain an IEC?",
      answer: "Any business entity or individual planning to engage in import or export of goods or services from India needs an IEC. This includes manufacturers, traders, service providers, and even freelancers providing services to international clients."
    },
    {
      question: "What documents are required for IEC registration?",
      answer: "The key documents required include: PAN card, business registration proof (Certificate of Incorporation, Partnership Deed, etc.), banker's certificate, passport-sized photographs, address proof, and canceled cheque leaf of the current account."
    },
    {
      question: "How long does it take to get an IEC?",
      answer: "The process typically takes 3-7 working days after submission of a complete application, assuming there are no queries or additional information requested by the DGFT."
    },
    {
      question: "Does an IEC expire or need renewal?",
      answer: "No, an IEC does not have an expiry date and doesn't require renewal. However, you must update the DGFT about any changes in your business details within 90 days of such changes."
    },
    {
      question: "Can I start import/export activities before getting an IEC?",
      answer: "No, it is not legally possible to engage in import or export activities without an IEC. Customs authorities will not clear your shipments without a valid IEC, and banks will not process foreign remittances related to trade without it."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "GST Registration",
      link: "/services/gst-registration"
    },
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
    },
    {
      title: "Business Advisory",
      link: "/services/business-advisory"
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
            Benefits of Import Export Code Registration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Global Market Access</h3>
              <p className="text-slate-600">
                Legally import products from international suppliers and export your goods to global markets.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Clearance</h3>
              <p className="text-slate-600">
                Obtain necessary customs clearance for your international shipments and foreign trade operations.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Business Credibility</h3>
              <p className="text-slate-600">
                Enhance your business credibility with international partners and access to government incentives.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Who Should Obtain an Import Export Code?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-indigo-600 mr-2 mt-1">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-slate-700">Manufacturers looking to source raw materials internationally or export finished goods</span>
              </li>
              <li className="flex items-start">
                <div className="text-indigo-600 mr-2 mt-1">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-slate-700">Trading companies engaged in import and export of various products</span>
              </li>
              <li className="flex items-start">
                <div className="text-indigo-600 mr-2 mt-1">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-slate-700">Service providers offering services to international clients</span>
              </li>
              <li className="flex items-start">
                <div className="text-indigo-600 mr-2 mt-1">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-slate-700">E-commerce businesses selling products internationally or importing products for local sale</span>
              </li>
              <li className="flex items-start">
                <div className="text-indigo-600 mr-2 mt-1">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-slate-700">Freelancers providing services to foreign clients (for service exports)</span>
              </li>
              <li className="flex items-start">
                <div className="text-indigo-600 mr-2 mt-1">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-slate-700">Startups planning to engage in cross-border trade or services</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default ImportExportCode;
