
import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { BarChart, Calculator, FileSpreadsheet, TrendingUp } from "lucide-react";

const FinancialCompliance = () => {
  // Service specific data
  const serviceId = "financial-compliance";
  const title = "Financial Compliance & Virtual CFO Services";
  const subtitle = "Expert financial management and compliance for growing businesses";
  const description = 
    "Our Financial Compliance and Virtual CFO services provide businesses with professional financial management without the cost of a full-time CFO. We help you maintain financial compliance, optimize cash flow, prepare management reports, and make strategic financial decisions to drive growth.";
  
  // Process steps
  const steps = [
    {
      title: "Financial Assessment",
      description: "We evaluate your current financial processes, identify compliance gaps, and understand your business needs."
    },
    {
      title: "Strategic Planning",
      description: "Our team develops a customized financial strategy and compliance roadmap tailored to your business."
    },
    {
      title: "Implementation",
      description: "We implement robust financial processes, reporting systems, and compliance frameworks."
    },
    {
      title: "Ongoing Support",
      description: "Receive continuous financial management, reporting, and compliance monitoring with regular reviews."
    }
  ];
  
  // Pricing tiers
  const pricingTiers = [
    {
      title: "Financial Compliance Basic",
      price: "₹7,999",
      description: "Essential financial compliance services for small businesses.",
      features: [
        "Monthly bookkeeping",
        "GST compliance & filing",
        "TDS compliance & filing",
        "Basic financial reports",
        "Quarterly compliance review",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonLink: "#consultation"
    },
    {
      title: "Virtual CFO Standard",
      price: "₹15,999",
      description: "Comprehensive financial management for growing businesses.",
      popular: true,
      features: [
        "All Basic features",
        "Advanced financial reporting",
        "Cash flow management",
        "Budgeting & forecasting",
        "Financial analysis",
        "Monthly advisory calls",
        "Priority support"
      ],
      buttonText: "Most Popular",
      buttonLink: "#consultation"
    },
    {
      title: "Virtual CFO Premium",
      price: "Custom",
      description: "Strategic financial leadership for established businesses.",
      features: [
        "All Standard features",
        "Dedicated financial advisor",
        "Strategic financial planning",
        "Investor reporting",
        "Board meeting support",
        "Financial due diligence",
        "M&A advisory",
        "Unlimited advisory access"
      ],
      buttonText: "Contact Us",
      buttonLink: "#consultation"
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "What is a Virtual CFO and how does it differ from a traditional CFO?",
      answer: "A Virtual CFO provides high-level financial expertise on a part-time or contract basis, giving you access to professional financial management without the cost of a full-time executive. While a traditional CFO works exclusively for your company, a Virtual CFO serves multiple clients, making it a cost-effective solution for small and mid-sized businesses."
    },
    {
      question: "How often will I receive financial reports?",
      answer: "Depending on your package, we provide monthly, quarterly, and annual financial reports. These include profit & loss statements, balance sheets, cash flow statements, and customized KPI dashboards tailored to your specific business needs."
    },
    {
      question: "Can you help with fundraising and investor relations?",
      answer: "Yes, our Premium Virtual CFO services include preparing investor-ready financial models, pitch decks, and due diligence documentation. We also assist with financial structuring, valuation, and can even participate in investor meetings to provide financial context and answer questions."
    },
    {
      question: "Do you handle tax planning and compliance?",
      answer: "Absolutely. We provide comprehensive tax planning strategies to legally minimize your tax burden, ensure timely filing of all required returns (GST, TDS, income tax), and maintain documentation to keep you audit-ready at all times."
    },
    {
      question: "How do you ensure financial compliance?",
      answer: "We implement robust financial controls, maintain accurate records, ensure timely statutory filings, and conduct regular compliance reviews. Our team stays updated with changing regulations to keep your business compliant with all financial laws and requirements."
    },
    {
      question: "Can you integrate with our existing accounting software?",
      answer: "Yes, we work with most popular accounting platforms including Tally, QuickBooks, Zoho Books, and Xero. If needed, we can also recommend and help implement the right financial software for your business needs."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "GST & Tax Compliance",
      link: "/services/gst-tax-compliance"
    },
    {
      title: "Business Compliance",
      link: "/services/business-compliance"
    },
    {
      title: "Company Registration",
      link: "/services/company-registration"
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
            Our Virtual CFO Services Include
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Calculator className="text-indigo-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Financial Management</h3>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Bookkeeping & accounting oversight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Financial statements preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Cash flow management & forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Accounts payable & receivable management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Financial controls implementation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <FileSpreadsheet className="text-indigo-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Compliance Services</h3>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>GST registration & regular filings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>TDS compliance & returns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Income tax planning & filing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>ROC compliance for companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Audit preparation & support</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <BarChart className="text-indigo-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Financial Analysis</h3>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Profitability analysis by product/service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Cost structure optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Key performance indicators tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Financial health assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Benchmarking against industry standards</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <TrendingUp className="text-indigo-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Strategic Advisory</h3>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Business growth planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Pricing strategy development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Funding & investment advice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Risk assessment & management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Exit planning & business valuation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default FinancialCompliance;
