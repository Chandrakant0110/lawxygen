
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Rocket, Award, Zap } from "lucide-react";

const StartupIndia = () => {
  // Service specific data
  const serviceId = "startup-india";
  const title = "Startup India Registration";
  const subtitle = "Get official recognition for your startup and access government benefits";
  const description = 
    "Startup India is a flagship initiative by the Government of India that provides numerous benefits to recognized startups. Our expert assistance ensures your startup gets officially recognized, allowing you to access tax benefits, easier compliance, funding opportunities, and more.";
  
  // Process steps
  const steps = [
    {
      title: "Eligibility Assessment",
      description: "We'll evaluate your business against Startup India criteria and advise on qualification requirements."
    },
    {
      title: "Documentation Preparation",
      description: "Our team assists in preparing all necessary documents, including incorporation papers, business description, and innovation details."
    },
    {
      title: "Application Filing",
      description: "We complete and submit your application through the Startup India portal, ensuring all information is accurate and compelling."
    },
    {
      title: "Recognition & Benefits",
      description: "Once approved, we guide you on accessing the various benefits and schemes available to recognized startups."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Basic Package",
      price: "₹5,999",
      description: "Essential Startup India registration assistance.",
      features: [
        "Eligibility assessment",
        "Application preparation",
        "Document verification",
        "Basic guidance on benefits",
        "Email support",
        "Recognition certificate"
      ],
      buttonText: "Get Started",
      buttonLink: "#consultation"
    },
    {
      title: "Standard Package",
      price: "₹9,999",
      description: "Comprehensive startup recognition with additional benefits.",
      popular: true,
      features: [
        "All features in Basic Package",
        "Tax exemption application",
        "Self-certification guidance",
        "Patent filing assistance",
        "Dedicated support executive",
        "1 year advisory support",
        "Government scheme guidance"
      ],
      buttonText: "Recommended",
      buttonLink: "#consultation"
    },
    {
      title: "Premium Package",
      price: "₹14,999",
      description: "Complete startup ecosystem integration package.",
      features: [
        "All features in Standard Package",
        "Funding opportunities guidance",
        "Incubator/accelerator connections",
        "Pitch deck preparation",
        "Business plan development",
        "2 years advisory support",
        "Quarterly compliance check"
      ],
      buttonText: "Get Premium",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What is Startup India recognition?",
      answer: "Startup India recognition is an official acknowledgment by the Department for Promotion of Industry and Internal Trade (DPIIT) that identifies your business as an innovative startup, making it eligible for various government benefits and incentives."
    },
    {
      question: "What are the eligibility criteria for Startup India recognition?",
      answer: "To be eligible, your business must: be incorporated as a private limited company, registered partnership firm, or LLP; be less than 10 years old; have annual turnover not exceeding ₹100 crore; be working towards innovation, development or improvement of products/processes/services; and not have been formed by splitting or reconstructing an existing business."
    },
    {
      question: "What benefits do recognized startups receive?",
      answer: "Benefits include tax exemption for 3 years, self-certification under labor and environment laws, faster patent application processing, access to government funding, relaxed procurement norms for government tenders, networking opportunities, and easier company closure process."
    },
    {
      question: "How long does it take to get Startup India recognition?",
      answer: "The application process typically takes 2-3 weeks from submission to approval, depending on the completeness of your application and government processing times."
    },
    {
      question: "Is my business innovative enough to qualify?",
      answer: "Innovation can be demonstrated in various ways - through a patent, trademark, or even a detailed explanation of how your product/service improves existing solutions. Our assessment can help determine if your business meets the innovation criteria."
    },
    {
      question: "How do I claim the income tax exemption after recognition?",
      answer: "After obtaining DPIIT recognition, you need to apply separately for the income tax exemption certificate (Form 2) with the Inter-Ministerial Board. Our premium packages include assistance with this additional application process."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Private Limited Company Registration",
      link: "/services/private-limited-company"
    },
    {
      title: "Trademark Registration",
      link: "/services/trademark-registration"
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
            Benefits of Startup India Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tax Benefits</h3>
              <p className="text-slate-600">
                Eligible for income tax exemption for 3 consecutive years and exemption on capital gains and investments above fair market value.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Government Support</h3>
              <p className="text-slate-600">
                Access to government funding, easier compliance, reduced patent costs, and preferential treatment for government tenders.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ecosystem Access</h3>
              <p className="text-slate-600">
                Connect with incubators, accelerators, mentors, and get opportunities to participate in government-sponsored startup events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default StartupIndia;
