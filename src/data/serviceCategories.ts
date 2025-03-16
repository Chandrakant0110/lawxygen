
import { 
  Building, 
  FileCheck, 
  FileText, 
  Users, 
  Calculator, 
  Scale, 
  Copyright,
  Clock,
  Check,
  LandmarkIcon,
  BarChart,
  FileSignature,
  Award,
  GraduationCap,
  Globe,
  DollarSign,
  Handshake,
  Shield,
  Home,
  PieChart,
  Calendar,
  PenTool,
  Search
} from "lucide-react";
import React from "react";

// Types for service data
export interface ServiceItem {
  title: string;
  description: string;
  to: string;
  icon: React.ReactNode;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

// Service categories with expanded options
export const serviceCategories: ServiceCategory[] = [
  {
    title: "Business Setup",
    items: [
      {
        title: "Private Limited Company",
        description: "Register a Private Limited Company",
        to: "/services/private-limited-company",
        icon: <Building className="h-5 w-5" />
      },
      {
        title: "Limited Liability Partnership",
        description: "Register a Limited Liability Partnership",
        to: "/services/llp-registration",
        icon: <LandmarkIcon className="h-5 w-5" />
      },
      {
        title: "One Person Company",
        description: "Form a One Person Company",
        to: "/services/one-person-company",
        icon: <Building className="h-5 w-5" />
      },
      {
        title: "Sole Proprietorship",
        description: "Start a Sole Proprietorship business",
        to: "/services/sole-proprietorship",
        icon: <FileSignature className="h-5 w-5" />
      },
      {
        title: "Nidhi Company",
        description: "Register a Nidhi Company",
        to: "/services/nidhi-company",
        icon: <Building className="h-5 w-5" />
      },
      {
        title: "Producer Company",
        description: "Form a Producer Company",
        to: "/services/producer-company",
        icon: <Building className="h-5 w-5" />
      },
      {
        title: "Partnership Firm",
        description: "Register a Partnership Firm",
        to: "/services/partnership-firm",
        icon: <Handshake className="h-5 w-5" />
      },
      {
        title: "Startup India Registration",
        description: "Register under Startup India program",
        to: "/services/startup-india-registration",
        icon: <Award className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Tax & Compliance",
    items: [
      {
        title: "GST Registration",
        description: "Register for Goods & Services Tax",
        to: "/services/gst-registration",
        icon: <FileCheck className="h-5 w-5" />
      },
      {
        title: "GST Filing",
        description: "Regular GST return filing",
        to: "/services/gst-filing",
        icon: <FileCheck className="h-5 w-5" />
      },
      {
        title: "GST Login Portal",
        description: "Access the GST portal",
        to: "/services/gst-login-portal",
        icon: <FileCheck className="h-5 w-5" />
      },
      {
        title: "HSN Code Finder",
        description: "Find the right HSN code",
        to: "/services/hsn-code-finder",
        icon: <Search className="h-5 w-5" />
      },
      {
        title: "TDS Filing",
        description: "File TDS returns accurately",
        to: "/services/tds-filing",
        icon: <Calculator className="h-5 w-5" />
      },
      {
        title: "Annual Compliance",
        description: "Complete annual filing requirements",
        to: "/services/annual-compliance",
        icon: <Calendar className="h-5 w-5" />
      },
      {
        title: "ROC Compliance",
        description: "Comply with Registrar of Companies rules",
        to: "/services/roc-compliance",
        icon: <Check className="h-5 w-5" />
      },
      {
        title: "Accounting Services",
        description: "Professional accounting & bookkeeping",
        to: "/services/accounting-services",
        icon: <BarChart className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Intellectual Property",
    items: [
      {
        title: "Trademark Registration",
        description: "Register your brand's trademark",
        to: "/services/trademark-registration",
        icon: <Copyright className="h-5 w-5" />
      },
      {
        title: "Trademark Search",
        description: "Check if your trademark is available",
        to: "/services/trademark-search",
        icon: <Search className="h-5 w-5" />
      },
      {
        title: "Respond to TM Objection",
        description: "Handle trademark examination reports",
        to: "/services/trademark-objection",
        icon: <FileText className="h-5 w-5" />
      },
      {
        title: "Copyright Registration",
        description: "Protect your creative works",
        to: "/services/copyright-registration",
        icon: <PenTool className="h-5 w-5" />
      },
      {
        title: "Patent Filing",
        description: "Patent your innovations & inventions",
        to: "/services/patent-filing",
        icon: <Award className="h-5 w-5" />
      },
      {
        title: "Design Registration",
        description: "Protect your product designs",
        to: "/services/design-registration",
        icon: <PenTool className="h-5 w-5" />
      },
      {
        title: "International Trademark",
        description: "Global trademark protection",
        to: "/services/international-trademark",
        icon: <Globe className="h-5 w-5" />
      },
      {
        title: "Trademark Class Finder",
        description: "Find the right trademark class",
        to: "/services/trademark-class-finder",
        icon: <Search className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Documentation",
    items: [
      {
        title: "Business Contracts",
        description: "Essential business legal documents",
        to: "/services/business-contracts",
        icon: <FileText className="h-5 w-5" />
      },
      {
        title: "NDA Agreement",
        description: "Non-Disclosure Agreement drafting",
        to: "/services/nda-agreement",
        icon: <FileText className="h-5 w-5" />
      },
      {
        title: "Service Level Agreement",
        description: "SLA drafting and review",
        to: "/services/service-level-agreement",
        icon: <FileText className="h-5 w-5" />
      },
      {
        title: "Shareholders Agreement",
        description: "Structure your company ownership",
        to: "/services/shareholders-agreement",
        icon: <Handshake className="h-5 w-5" />
      },
      {
        title: "Founders Agreement",
        description: "Define co-founder relationships",
        to: "/services/founders-agreement",
        icon: <Handshake className="h-5 w-5" />
      },
      {
        title: "Memorandum of Understanding",
        description: "Document partnership intentions",
        to: "/services/mou",
        icon: <FileText className="h-5 w-5" />
      },
      {
        title: "HR Policies",
        description: "Develop compliant HR documents",
        to: "/services/hr-policies",
        icon: <Users className="h-5 w-5" />
      },
      {
        title: "Legal Notice",
        description: "Issue or respond to legal notices",
        to: "/services/legal-notice",
        icon: <FileCheck className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Specialized Services",
    items: [
      {
        title: "Legal Consultation",
        description: "Expert legal advice & guidance",
        to: "/services/legal-consultation",
        icon: <Scale className="h-5 w-5" />
      },
      {
        title: "Fundraising Support",
        description: "Legal assistance for funding rounds",
        to: "/services/fundraising",
        icon: <DollarSign className="h-5 w-5" />
      },
      {
        title: "Business Pitch Deck",
        description: "Create a compelling investor pitch",
        to: "/services/pitch-deck",
        icon: <PieChart className="h-5 w-5" />
      },
      {
        title: "Legal Retainer Plans",
        description: "Ongoing legal support package",
        to: "/services/legal-retainer",
        icon: <Clock className="h-5 w-5" />
      },
      {
        title: "Litigation Support",
        description: "Representation in legal disputes",
        to: "/services/litigation",
        icon: <Scale className="h-5 w-5" />
      },
      {
        title: "Property & Real Estate",
        description: "Property law services",
        to: "/services/property",
        icon: <Home className="h-5 w-5" />
      },
      {
        title: "NGO Registration",
        description: "Register a non-profit organization",
        to: "/services/ngo-registration",
        icon: <Shield className="h-5 w-5" />
      },
      {
        title: "Business Advisory",
        description: "Strategic business guidance",
        to: "/services/business-advisory",
        icon: <GraduationCap className="h-5 w-5" />
      }
    ]
  }
];
