
import React from "react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  Building, 
  FileCheck, 
  Check, 
  Calculator, 
  Copyright, 
  FileText, 
  Scale, 
  Users, 
  Shield,
  Clock,
  Award,
  Globe,
  FileSignature,
  LandmarkIcon,
  BarChart 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  to: string;
  icon: React.ReactNode;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  services: ServiceItem[];
}

// Expanded service categories with more options
const serviceCategories: ServiceCategory[] = [
  {
    id: "business-incorporation",
    name: "Business Incorporation",
    description: "Start your business with the right legal structure",
    color: "bg-violet-100 text-violet-700",
    services: [
      {
        id: "private-limited-company",
        name: "Private Limited Company",
        description: "Incorporate your business as a Private Limited Company",
        to: "/services/private-limited-company",
        icon: <Building className="w-5 h-5" />
      },
      {
        id: "llp-registration",
        name: "LLP Registration",
        description: "Register your business as a Limited Liability Partnership",
        to: "/services/llp-registration",
        icon: <LandmarkIcon className="w-5 h-5" />
      },
      {
        id: "sole-proprietorship",
        name: "Sole Proprietorship",
        description: "Setup your business as a sole proprietor",
        to: "/services/sole-proprietorship",
        icon: <FileSignature className="w-5 h-5" />
      },
      {
        id: "msme-registration",
        name: "MSME Registration",
        description: "Register as Micro, Small, or Medium Enterprise",
        to: "/services/msme-registration",
        icon: <Award className="w-5 h-5" />
      },
      {
        id: "opc-registration",
        name: "OPC Registration",
        description: "Register as a One Person Company",
        to: "/services/opc-registration",
        icon: <Building className="w-5 h-5" />
      }
    ]
  },
  {
    id: "tax-compliance",
    name: "Tax & Compliance",
    description: "Stay compliant with all tax regulations",
    color: "bg-purple-100 text-purple-700",
    services: [
      {
        id: "gst-compliance",
        name: "GST Registration & Filing",
        description: "Complete GST solution for your business",
        to: "/services/gst-compliance",
        icon: <BarChart className="w-5 h-5" />
      },
      {
        id: "tds-filing",
        name: "TDS Filing",
        description: "Timely and accurate TDS filing services",
        to: "/services/tds-filing",
        icon: <Calculator className="w-5 h-5" />
      },
      {
        id: "business-compliance",
        name: "Business Compliance",
        description: "Annual filings and regulatory compliance",
        to: "/services/business-compliance",
        icon: <Check className="w-5 h-5" />
      },
      {
        id: "roc-compliance",
        name: "ROC Compliance",
        description: "Registrar of Companies compliance services",
        to: "/services/roc-compliance",
        icon: <FileCheck className="w-5 h-5" />
      },
      {
        id: "virtual-cfo",
        name: "Virtual CFO Services",
        description: "Professional financial management",
        to: "/services/virtual-cfo",
        icon: <Calculator className="w-5 h-5" />
      }
    ]
  },
  {
    id: "legal-hr",
    name: "Legal & HR Compliance",
    description: "Comprehensive legal and HR solutions",
    color: "bg-fuchsia-100 text-fuchsia-700",
    services: [
      {
        id: "hr-payroll-compliance",
        name: "HR & Payroll Compliance",
        description: "Complete HR and payroll management solutions",
        to: "/services/hr-payroll-compliance",
        icon: <Users className="w-5 h-5" />
      },
      {
        id: "legal-document-drafting",
        name: "Legal Document Drafting",
        description: "Professional drafting of legal documents",
        to: "/services/legal-document-drafting",
        icon: <FileText className="w-5 h-5" />
      },
      {
        id: "employee-contracts",
        name: "Employee Contracts",
        description: "Legally sound employment agreements",
        to: "/services/employee-contracts",
        icon: <FileSignature className="w-5 h-5" />
      },
      {
        id: "esi-pf-registration",
        name: "ESI & PF Registration",
        description: "Employee benefits registration services",
        to: "/services/esi-pf-registration",
        icon: <Shield className="w-5 h-5" />
      },
      {
        id: "business-policies",
        name: "Business Policies",
        description: "Develop compliant business policies",
        to: "/services/business-policies",
        icon: <FileCheck className="w-5 h-5" />
      }
    ]
  },
  {
    id: "intellectual-property",
    name: "Intellectual Property",
    description: "Protect your innovations and brand identity",
    color: "bg-violet-100 text-violet-700",
    services: [
      {
        id: "trademark-registration",
        name: "Trademark Registration",
        description: "Protect your brand identity",
        to: "/services/trademark-registration",
        icon: <Copyright className="w-5 h-5" />
      },
      {
        id: "patent-filing",
        name: "Patent Filing",
        description: "Protect your inventions and innovations",
        to: "/services/patent-filing",
        icon: <Award className="w-5 h-5" />
      },
      {
        id: "copyright-protection",
        name: "Copyright Protection",
        description: "Secure your original creative works",
        to: "/services/copyright-protection",
        icon: <FileText className="w-5 h-5" />
      },
      {
        id: "ip-services",
        name: "IP Advisory Services",
        description: "Expert guidance on intellectual property",
        to: "/services/ip-services",
        icon: <Shield className="w-5 h-5" />
      },
      {
        id: "global-ip-protection",
        name: "Global IP Protection",
        description: "International intellectual property services",
        to: "/services/global-ip-protection",
        icon: <Globe className="w-5 h-5" />
      }
    ]
  },
  {
    id: "specialized-services",
    name: "Specialized Services",
    description: "Tailored solutions for specific legal needs",
    color: "bg-purple-100 text-purple-700",
    services: [
      {
        id: "litigation-support",
        name: "Litigation Support",
        description: "Legal representation and support",
        to: "/services/litigation-support",
        icon: <Scale className="w-5 h-5" />
      },
      {
        id: "legal-consultation",
        name: "Legal Consultation",
        description: "Expert legal advice for your business",
        to: "/services/legal-consultation",
        icon: <Users className="w-5 h-5" />
      },
      {
        id: "legal-retainer-plans",
        name: "Legal Retainer Plans",
        description: "Ongoing legal support subscription",
        to: "/services/legal-retainer-plans",
        icon: <Clock className="w-5 h-5" />
      },
      {
        id: "startup-legal-bundle",
        name: "Startup Legal Bundle",
        description: "Complete legal package for startups",
        to: "/services/startup-legal-bundle",
        icon: <Building className="w-5 h-5" />
      },
      {
        id: "business-advisory",
        name: "Business Advisory",
        description: "Strategic business guidance services",
        to: "/services/business-advisory",
        icon: <BarChart className="w-5 h-5" />
      }
    ]
  }
];

const EnhancedServiceList = () => {
  const [expandedCategories, setExpandedCategories] = React.useState<string[]>([]);
  
  const toggleCategory = (categoryId: string) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our Comprehensive Legal Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our wide range of legal and business services tailored for entrepreneurs, businesses, and individuals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            const displayServices = isExpanded ? category.services : category.services.slice(0, 3);
            
            return (
              <div key={category.id} className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                <div className={`p-4 ${category.color.replace('text-', 'bg-').replace('700', '50')} border-b`}>
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${category.color}`}>
                      {category.id === "business-incorporation" && <Building className="w-5 h-5" />}
                      {category.id === "tax-compliance" && <Calculator className="w-5 h-5" />}
                      {category.id === "legal-hr" && <Users className="w-5 h-5" />}
                      {category.id === "intellectual-property" && <Copyright className="w-5 h-5" />}
                      {category.id === "specialized-services" && <Shield className="w-5 h-5" />}
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <p className="mt-2 text-gray-700 pl-12">{category.description}</p>
                </div>
                
                <div className="p-4">
                  <ul className="space-y-2">
                    {displayServices.map((service, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 py-1 hover:text-violet-600 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-2 text-violet-500" />
                        <Link to={service.to} className="hover:text-violet-600 transition-colors flex-1">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  
                  {category.services.length > 3 && (
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="mt-4 text-sm font-medium text-violet-600 hover:text-violet-700 flex items-center"
                    >
                      {isExpanded ? "Show Less" : `View ${category.services.length - 3} More Services`}
                      <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  )}
                </div>
                
                <div className="px-4 py-3 bg-gray-50 border-t">
                  <Link 
                    to={`/category/${category.id}`}
                    className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-700"
                  >
                    Browse All {category.name}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg" className="bg-violet-600 hover:bg-violet-700">
            <Link to="/search-results">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServiceList;
