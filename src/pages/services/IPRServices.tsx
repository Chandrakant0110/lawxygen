
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Copyright, Shield, PenTool } from "lucide-react";

const IPRServices = () => {
  // Service specific data
  const serviceId = "ipr-services";
  const title = "Intellectual Property Rights Services";
  const subtitle = "Protect your innovations, brands, and creative works with expert legal assistance";
  const description = 
    "Our comprehensive Intellectual Property Rights (IPR) services help businesses and individuals secure legal protection for their valuable intellectual assets. From trademarks and copyrights to patents and design rights, we provide end-to-end assistance in registration, protection, and enforcement.";
  
  // Process steps
  const steps = [
    {
      title: "Initial Consultation",
      description: "We'll assess your intellectual property and recommend the most appropriate protection strategy."
    },
    {
      title: "Research & Analysis",
      description: "Our team conducts thorough searches to ensure your IP is unique and registrable before proceeding."
    },
    {
      title: "Application Preparation",
      description: "We prepare comprehensive applications with all required documentation tailored to your specific IP."
    },
    {
      title: "Filing & Follow-up",
      description: "We handle the filing process and respond to any examiner queries until your IP rights are secured."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Trademark Registration",
      price: "₹7,999",
      description: "Protect your brand name, logo, and slogan.",
      features: [
        "Comprehensive trademark search",
        "Application preparation",
        "Filing with Trademark Registry",
        "Response to examination report",
        "Certificate delivery",
        "1-year advisory support"
      ],
      buttonText: "Get Started",
      buttonLink: "#consultation"
    },
    {
      title: "Copyright Registration",
      price: "₹5,999",
      description: "Secure protection for your creative works.",
      features: [
        "Copyright application preparation",
        "Filing with Copyright Office",
        "Response to examination queries",
        "Certificate delivery",
        "Usage advisory",
        "1-year advisory support"
      ],
      buttonText: "Register Now",
      buttonLink: "#consultation"
    },
    {
      title: "Patent Filing",
      price: "₹29,999",
      description: "Protect your inventions and innovations.",
      popular: true,
      features: [
        "Patentability assessment",
        "Prior art search",
        "Patent drafting",
        "Filing with Patent Office",
        "Prosecution support",
        "Response to office actions",
        "2-year advisory support"
      ],
      buttonText: "Recommended",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What is the difference between trademark, copyright, and patent?",
      answer: "A trademark protects brands, logos, and slogans used to identify products or services. Copyright protects original creative works like literature, music, art, and software. Patents protect inventions, processes, and technological innovations."
    },
    {
      question: "How long does it take to register a trademark in India?",
      answer: "The trademark registration process typically takes 18-24 months from filing to registration if there are no objections. However, you get certain rights from the date of application itself."
    },
    {
      question: "Is international protection available for my intellectual property?",
      answer: "Yes, we assist with international IP protection through systems like the Madrid Protocol for trademarks, the Patent Cooperation Treaty (PCT) for patents, and various international copyright conventions."
    },
    {
      question: "What should I do if someone is infringing on my trademark or copyright?",
      answer: "If you discover infringement, we can assist with sending cease and desist notices, filing oppositions or infringement suits, and negotiating settlements. Early action is crucial to protect your rights."
    },
    {
      question: "How long does intellectual property protection last?",
      answer: "Trademarks can be renewed indefinitely every 10 years. Copyright generally lasts for the author's lifetime plus 60 years in India. Patents are protected for 20 years from the filing date, while design registrations last for 10 years, extendable by 5 more years."
    },
    {
      question: "Do I need to register my copyright to protect my work?",
      answer: "While copyright protection automatically exists from the moment of creation, registration provides stronger legal evidence of ownership, enables you to file infringement suits, and creates a public record of your copyright claim."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Trademark Search",
      link: "/services/trademark-search"
    },
    {
      title: "Legal Documentation",
      link: "/services/legal-documents"
    },
    {
      title: "Business Contracts",
      link: "/services/business-contracts"
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
            Comprehensive IP Protection Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Copyright className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Trademark Services</h3>
              <p className="text-slate-600">
                Brand name, logo, and slogan protection through comprehensive trademark registration and management.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Patent Services</h3>
              <p className="text-slate-600">
                Protect your inventions, innovations, and processes with thorough patent registration and defense.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Copyright Services</h3>
              <p className="text-slate-600">
                Secure your creative works, software, content, and artistic creations with copyright registration.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-indigo-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Additional IPR Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mr-3 text-indigo-600">
                  <Copyright className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Design Registration</h4>
                  <p className="text-sm text-slate-600">Protect the visual appearance and aesthetic aspects of your products</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 text-indigo-600">
                  <Copyright className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Trade Secret Protection</h4>
                  <p className="text-sm text-slate-600">Legal strategies to safeguard your confidential business information</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 text-indigo-600">
                  <Copyright className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">IP Portfolio Management</h4>
                  <p className="text-sm text-slate-600">Ongoing management and strategic handling of your intellectual assets</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 text-indigo-600">
                  <Copyright className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">IP Licensing Agreements</h4>
                  <p className="text-sm text-slate-600">Legal documentation for monetizing your intellectual property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default IPRServices;
