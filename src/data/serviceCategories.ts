
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
  icon: React.ComponentType<any>;
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
        icon: Building
      },
      {
        title: "Limited Liability Partnership",
        description: "Register a Limited Liability Partnership",
        to: "/services/llp-registration",
        icon: LandmarkIcon
      },
      {
        title: "One Person Company",
        description: "Form a One Person Company",
        to: "/services/one-person-company",
        icon: Building
      },
      {
        title: "Sole Proprietorship",
        description: "Start a Sole Proprietorship business",
        to: "/services/sole-proprietorship",
        icon: FileSignature
      },
      {
        title: "Nidhi Company",
        description: "Register a Nidhi Company",
        to: "/services/nidhi-company",
        icon: Building
      },
      {
        title: "Producer Company",
        description: "Form a Producer Company",
        to: "/services/producer-company",
        icon: Building
      },
      {
        title: "Partnership Firm",
        description: "Register a Partnership Firm",
        to: "/services/partnership-firm",
        icon: Handshake
      },
      {
        title: "Startup India Registration",
        description: "Register under Startup India program",
        to: "/services/startup-india-registration",
        icon: Award
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
        icon: FileCheck
      },
      {
        title: "GST Filing",
        description: "Regular GST return filing",
        to: "/services/gst-filing",
        icon: FileCheck
      },
      {
        title: "GST Login Portal",
        description: "Access the GST portal",
        to: "/services/gst-login-portal",
        icon: FileCheck
      },
      {
        title: "HSN Code Finder",
        description: "Find the right HSN code",
        to: "/services/hsn-code-finder",
        icon: Search
      },
      {
        title: "TDS Filing",
        description: "File TDS returns accurately",
        to: "/services/tds-filing",
        icon: Calculator
      },
      {
        title: "Annual Compliance",
        description: "Complete annual filing requirements",
        to: "/services/annual-compliance",
        icon: Calendar
      },
      {
        title: "ROC Compliance",
        description: "Comply with Registrar of Companies rules",
        to: "/services/roc-compliance",
        icon: Check
      },
      {
        title: "Accounting Services",
        description: "Professional accounting & bookkeeping",
        to: "/services/accounting-services",
        icon: BarChart
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
        icon: Copyright
      },
      {
        title: "Trademark Search",
        description: "Check if your trademark is available",
        to: "/services/trademark-search",
        icon: Search
      },
      {
        title: "Respond to TM Objection",
        description: "Handle trademark examination reports",
        to: "/services/trademark-objection",
        icon: FileText
      },
      {
        title: "Copyright Registration",
        description: "Protect your creative works",
        to: "/services/copyright-registration",
        icon: PenTool
      },
      {
        title: "Patent Filing",
        description: "Patent your innovations & inventions",
        to: "/services/patent-filing",
        icon: Award
      },
      {
        title: "Design Registration",
        description: "Protect your product designs",
        to: "/services/design-registration",
        icon: PenTool
      },
      {
        title: "International Trademark",
        description: "Global trademark protection",
        to: "/services/international-trademark",
        icon: Globe
      },
      {
        title: "Trademark Class Finder",
        description: "Find the right trademark class",
        to: "/services/trademark-class-finder",
        icon: Search
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
        icon: FileText
      },
      {
        title: "NDA Agreement",
        description: "Non-Disclosure Agreement drafting",
        to: "/services/nda-agreement",
        icon: FileText
      },
      {
        title: "Service Level Agreement",
        description: "SLA drafting and review",
        to: "/services/service-level-agreement",
        icon: FileText
      },
      {
        title: "Shareholders Agreement",
        description: "Structure your company ownership",
        to: "/services/shareholders-agreement",
        icon: Handshake
      },
      {
        title: "Founders Agreement",
        description: "Define co-founder relationships",
        to: "/services/founders-agreement",
        icon: Handshake
      },
      {
        title: "Memorandum of Understanding",
        description: "Document partnership intentions",
        to: "/services/mou",
        icon: FileText
      },
      {
        title: "HR Policies",
        description: "Develop compliant HR documents",
        to: "/services/hr-policies",
        icon: Users
      },
      {
        title: "Legal Notice",
        description: "Issue or respond to legal notices",
        to: "/services/legal-notice",
        icon: FileCheck
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
        icon: Scale
      },
      {
        title: "Fundraising Support",
        description: "Legal assistance for funding rounds",
        to: "/services/fundraising",
        icon: DollarSign
      },
      {
        title: "Business Pitch Deck",
        description: "Create a compelling investor pitch",
        to: "/services/pitch-deck",
        icon: PieChart
      },
      {
        title: "Legal Retainer Plans",
        description: "Ongoing legal support package",
        to: "/services/legal-retainer",
        icon: Clock
      },
      {
        title: "Litigation Support",
        description: "Representation in legal disputes",
        to: "/services/litigation",
        icon: Scale
      },
      {
        title: "Property & Real Estate",
        description: "Property law services",
        to: "/services/property",
        icon: Home
      },
      {
        title: "NGO Registration",
        description: "Register a non-profit organization",
        to: "/services/ngo-registration",
        icon: Shield
      },
      {
        title: "Business Advisory",
        description: "Strategic business guidance",
        to: "/services/business-advisory",
        icon: GraduationCap
      }
    ]
  }
];
