
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Handshake, FileCheck, Users } from "lucide-react";

const PartnershipFirm = () => {
  // Service specific data
  const serviceId = "partnership-firm";
  const title = "Partnership Firm Registration";
  const subtitle = "Establish your partnership business with strong legal foundation";
  const description = 
    "A Partnership Firm offers a flexible business structure for multiple owners to share profits and responsibilities. Our comprehensive registration services handle all legal requirements to establish your partnership with proper agreements and registrations.";
  
  // Process steps
  const steps = [
    {
      title: "Initial Consultation",
      description: "We'll discuss your business model, partner roles, and develop a registration strategy tailored to your needs."
    },
    {
      title: "Partnership Deed Drafting",
      description: "Our legal experts will craft a comprehensive partnership deed outlining rights, responsibilities, and profit-sharing terms."
    },
    {
      title: "Registration Process",
      description: "We handle the firm registration with the Registrar of Firms in your state along with all required documentation."
    },
    {
      title: "Post-Registration Setup",
      description: "We assist with bank account opening, GST registration, and other compliance requirements to get your business running."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Basic Package",
      price: "₹7,999",
      description: "Essential partnership registration services.",
      features: [
        "Partnership deed drafting",
        "Firm registration application",
        "PAN application",
        "Basic compliance guidance",
        "Email support",
        "1 revision of partnership deed"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Standard Package",
      price: "₹12,999",
      description: "Comprehensive partnership setup with additional services.",
      popular: true,
      features: [
        "All features in Basic Package",
        "GST registration",
        "Bank account assistance",
        "Business licenses guidance",
        "Dedicated support executive",
        "3 revisions of partnership deed",
        "1 year advisory support"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Premium Package",
      price: "₹19,999",
      description: "Complete business setup solution for partnerships.",
      features: [
        "All features in Standard Package",
        "Custom business agreements",
        "MSME registration",
        "Accounting setup guidance",
        "HR policy documents",
        "Unlimited revisions of partnership deed",
        "2 years advisory support"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What is a Partnership Firm?",
      answer: "A Partnership Firm is a business entity formed by two or more individuals who agree to share the profits and losses of a business carried on by all or any of them acting for all, governed by the Indian Partnership Act, 1932."
    },
    {
      question: "Is it mandatory to register a Partnership Firm?",
      answer: "While registration is not legally mandatory in India, an unregistered partnership faces significant limitations including partners' inability to sue the firm or other partners, and restrictions on claiming set-offs in legal proceedings, making registration highly advisable."
    },
    {
      question: "What are the key contents of a Partnership Deed?",
      answer: "A Partnership Deed typically includes names and addresses of partners, nature of business, capital contribution, profit-sharing ratio, rights and duties of partners, dispute resolution, terms for admission/retirement of partners, and dissolution procedures."
    },
    {
      question: "How many partners can a Partnership Firm have?",
      answer: "Under the Indian Partnership Act, a partnership firm can have a minimum of 2 partners and a maximum of 20 partners (50 for banking businesses)."
    },
    {
      question: "What is the difference between a Partnership Firm and an LLP?",
      answer: "The key difference is liability protection. In a Partnership Firm, partners have unlimited liability, whereas in an LLP, partners' liability is limited to their agreed contribution. LLPs also have more regulatory requirements but offer better credibility."
    },
    {
      question: "How long does it take to register a Partnership Firm?",
      answer: "The registration process typically takes 2-3 weeks, depending on the state where you're registering and the completeness of your documentation."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "LLP Registration",
      link: "/services/llp-registration"
    },
    {
      title: "GST Registration",
      link: "/services/gst-registration"
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
            Why Choose Our Partnership Firm Registration Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Agreement Drafting</h3>
              <p className="text-slate-600">
                Our legal experts craft comprehensive partnership deeds that protect all partners and clearly define roles and responsibilities.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Hassle-Free Registration</h3>
              <p className="text-slate-600">
                We handle all the paperwork and follow-ups with government agencies, saving you time and effort.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ongoing Support</h3>
              <p className="text-slate-600">
                Our relationship doesn't end with registration - we continue to support your growing business with compliance and advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default PartnershipFirm;
