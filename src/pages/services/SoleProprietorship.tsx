
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { FileCheck, Shield, Clock } from "lucide-react";

const SoleProprietorship = () => {
  // Service specific data
  const serviceId = "sole-proprietorship";
  const title = "Sole Proprietorship Registration";
  const subtitle = "Start your business journey with minimal formalities";
  const description = 
    "A sole proprietorship is the simplest form of business structure in India, perfect for individual entrepreneurs looking to start with minimal compliance requirements. Our sole proprietorship registration service helps you set up your business legally with all necessary registrations.";
  
  // Process steps
  const steps = [
    {
      title: "Initial Consultation",
      description: "We'll discuss your business needs and explain the sole proprietorship structure benefits and limitations."
    },
    {
      title: "Documentation",
      description: "Our team helps you gather and prepare all required documents for registration."
    },
    {
      title: "Registration Filing",
      description: "We file for your shop and establishment license, GST registration if applicable, and other necessary permits."
    },
    {
      title: "Certificate Delivery",
      description: "Once approved, we deliver all your registration certificates and documents."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Basic Package",
      price: "₹2,999",
      description: "Essential registrations for small businesses with minimal requirements.",
      features: [
        "Business name registration",
        "Shop and Establishment license",
        "Udyam/MSME registration",
        "Basic business documentation",
        "Business PAN application"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Standard Package",
      price: "₹4,999",
      description: "Complete registration package for growing businesses.",
      popular: true,
      features: [
        "All features in Basic Package",
        "GST registration",
        "Current account assistance",
        "Trade license assistance",
        "Compliance guidance",
        "1 year support"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Premium Package",
      price: "₹7,999",
      description: "Comprehensive package for established businesses needing full compliance.",
      features: [
        "All features in Standard Package",
        "Professional tax registration",
        "Trademark name search",
        "Digital signature certificate",
        "Business stationery design",
        "2 years support"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What is a Sole Proprietorship?",
      answer: "A sole proprietorship is a business owned and operated by a single individual where there is no legal distinction between the owner and the business entity."
    },
    {
      question: "Do I need to register my Sole Proprietorship?",
      answer: "While sole proprietorships don't require mandatory registration as a business structure, you may need specific registrations like Shop & Establishment License, GST, Professional Tax, or industry-specific licenses to operate legally."
    },
    {
      question: "What documents are required for Sole Proprietorship registration?",
      answer: "Typically, you'll need identity proof (Aadhaar/PAN), address proof, property documents or rent agreement for the place of business, passport-sized photographs, and business activity details."
    },
    {
      question: "What are the advantages of a Sole Proprietorship?",
      answer: "Sole proprietorships are easy to set up with minimal paperwork, have complete control over business decisions, fewer compliance requirements, and simplified taxation (as part of your personal income tax)."
    },
    {
      question: "What are the limitations of a Sole Proprietorship?",
      answer: "The main limitations include unlimited liability (your personal assets can be at risk), limited fundraising ability, challenges in business continuity, and perceived lower credibility compared to incorporated businesses."
    },
    {
      question: "Can I convert my Sole Proprietorship to a Private Limited Company later?",
      answer: "Yes, you can convert your sole proprietorship to a private limited company or LLP as your business grows. We also offer conversion services to help with this transition."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "GST Registration",
      link: "/services/gst-registration"
    },
    {
      title: "MSME Registration",
      link: "/services/msme-registration"
    },
    {
      title: "Private Limited Company",
      link: "/services/private-limited-company"
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
            Why Choose Our Sole Proprietorship Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Setup</h3>
              <p className="text-slate-600">
                Get your sole proprietorship registered and ready to operate within days, not weeks.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance Assurance</h3>
              <p className="text-slate-600">
                We ensure all necessary licenses and permits are obtained for your specific business type.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ongoing Support</h3>
              <p className="text-slate-600">
                Get expert guidance for all your compliance needs even after your business is set up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default SoleProprietorship;
