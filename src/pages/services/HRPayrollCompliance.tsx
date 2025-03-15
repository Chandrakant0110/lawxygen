
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Users, FileText, Lock, Database } from "lucide-react";

const HRPayrollCompliance = () => {
  // Service specific data
  const serviceId = "hr-payroll-compliance";
  const title = "HR & Payroll Compliance Services";
  const subtitle = "Manage Payroll, ESI, PF & Employee Agreements with Ease";
  const description = 
    "Our comprehensive HR and payroll compliance services ensure your business meets all legal requirements while managing your workforce effectively. From statutory compliance to payroll processing, we handle all aspects of HR management so you can focus on growing your business.";
  
  // Process steps
  const steps = [
    {
      title: "Assessment",
      description: "We evaluate your current HR practices and identify compliance gaps and improvement areas."
    },
    {
      title: "Documentation",
      description: "Our team creates or updates all required HR documents, policies, and employee agreements."
    },
    {
      title: "Implementation",
      description: "We implement compliant payroll systems, ESI/PF registrations, and HR workflows."
    },
    {
      title: "Ongoing Support",
      description: "Receive continuous updates, monthly payroll processing, and compliance monitoring."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Starter HR Package",
      price: "₹4,999",
      description: "Essential HR compliance for small businesses with up to 10 employees.",
      features: [
        "HR policy documentation",
        "Employment contracts drafting",
        "Statutory compliance setup",
        "Basic payroll processing",
        "ESI & PF registration",
        "Quarterly compliance checks",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonLink: "#consultation"
    },
    {
      title: "Professional HR Solution",
      price: "₹9,999",
      description: "Comprehensive HR management for growing businesses with up to 25 employees.",
      popular: true,
      features: [
        "All Starter features",
        "Advanced payroll processing",
        "Leave & attendance management",
        "Performance review templates",
        "HR advisory services",
        "Monthly compliance reports",
        "Priority email & phone support"
      ],
      buttonText: "Most Popular",
      buttonLink: "#consultation"
    },
    {
      title: "Enterprise HR Management",
      price: "Custom",
      description: "Full-service HR outsourcing for established businesses with 25+ employees.",
      features: [
        "All Professional features",
        "Dedicated HR consultant",
        "Custom HR policies & manuals",
        "Complete payroll management",
        "Employee benefits administration",
        "Strategic HR planning",
        "24/7 HR support",
        "Quarterly HR audits"
      ],
      buttonText: "Contact Us",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What HR documents does a business legally need?",
      answer: "Businesses need several essential HR documents including employment contracts, offer letters, employee handbooks, HR policies, confidentiality agreements, and statutory compliance documentation like PF, ESI, and professional tax registrations."
    },
    {
      question: "How often should we update our HR policies?",
      answer: "HR policies should be reviewed at least annually to ensure compliance with changing laws and regulations. Additionally, immediate updates are necessary when significant legislative changes occur."
    },
    {
      question: "Can you help with employee dispute resolution?",
      answer: "Yes, our HR services include guidance on employee dispute resolution, disciplinary procedures, and termination processes in compliance with labor laws to minimize legal risks."
    },
    {
      question: "Do you provide payroll software or just processing services?",
      answer: "We offer both options. We can process your payroll using our systems or help you implement and configure payroll software that integrates with your existing business systems."
    },
    {
      question: "How do you handle payroll tax filings and compliance?",
      answer: "Our team manages all aspects of payroll tax compliance including monthly/quarterly filings, TDS deductions, Form 16/16A generation, and ensuring timely payments to relevant authorities."
    },
    {
      question: "Can you help with establishing HR processes for a new business?",
      answer: "Absolutely! We specialize in setting up HR infrastructure for new businesses, including creating all necessary policies, establishing compliant processes, and implementing effective HR systems from day one."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Company Registration",
      link: "/services/company-registration"
    },
    {
      title: "Legal Document Drafting",
      link: "/services/legal-document-drafting"
    },
    {
      title: "Business Compliance",
      link: "/services/business-compliance"
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
            Comprehensive HR & Payroll Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">HR Documentation</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Employment contracts</li>
                <li>• Offer & appointment letters</li>
                <li>• HR policies & handbooks</li>
                <li>• Code of conduct</li>
                <li>• Exit formalities</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Statutory Compliance</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• PF & ESI registration</li>
                <li>• Professional tax</li>
                <li>• Labor law compliance</li>
                <li>• Factory & shop acts</li>
                <li>• Regulatory filings</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Database className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll Management</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Salary processing</li>
                <li>• Tax calculations</li>
                <li>• Statutory deductions</li>
                <li>• Payslip generation</li>
                <li>• Form 16/16A preparation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lock className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">HR Advisory</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Performance management</li>
                <li>• Dispute resolution</li>
                <li>• Termination guidance</li>
                <li>• HR audit & analytics</li>
                <li>• Regulatory updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default HRPayrollCompliance;
