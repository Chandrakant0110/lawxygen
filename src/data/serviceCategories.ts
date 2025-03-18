
// Define and export the ServiceItem interface
export interface ServiceItem {
  title: string;
  to: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Define the interface for a service category
export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Business Setup",
    items: [
      { title: "Private Limited Company", to: "/services/private-limited-company", description: "Register your private limited company with all legal compliances" },
      { title: "Limited Liability Partnership", to: "/services/llp-registration", description: "Set up an LLP with complete legal assistance" },
      { title: "One Person Company", to: "/services/opc-registration", description: "Establish your One Person Company with ease" },
      { title: "Sole Proprietorship", to: "/services/sole-proprietorship", description: "Register your sole proprietorship business" },
      { title: "Partnership Firm", to: "/services/partnership-firm", description: "Set up a partnership firm with legal documentation" },
      { title: "Section 8 Company", to: "/services/section-8-company", description: "Register a non-profit Section 8 company" },
      { title: "Nidhi Company", to: "/services/nidhi-company", description: "Establish a Nidhi company with proper compliance" },
      { title: "Producer Company", to: "/services/producer-company", description: "Set up a Producer company with legal assistance" },
      { title: "Startup India Registration", to: "/services/startup-india", description: "Register your startup under the Startup India program" }
    ]
  },
  {
    title: "Tax & Compliance",
    items: [
      { title: "GST Registration", to: "/services/gst-registration", description: "Register for GST and ensure tax compliance" },
      { title: "GST Filing", to: "/services/gst-filing", description: "File your GST returns on time" },
      { title: "Income Tax Filing", to: "/services/tax-filing", description: "File income tax returns for individuals and businesses" },
      { title: "ROC Compliance", to: "/services/financial-compliance", description: "Maintain compliance with ROC regulations" },
      { title: "Annual Compliance", to: "/services/financial-compliance", description: "Handle annual compliance requirements for your business" },
      { title: "HR & Payroll Compliance", to: "/services/hr-payroll-compliance", description: "Manage HR and payroll compliance effectively" },
    ]
  },
  {
    title: "Intellectual Property",
    items: [
      { title: "Trademark Registration", to: "/services/trademark-registration", description: "Protect your brand with trademark registration" },
      { title: "Copyright Registration", to: "/services/copyright-registration", description: "Secure your creative works with copyright registration" },
      { title: "Patent Filing", to: "/services/patent-filing", description: "Protect your inventions with patent filing" },
      { title: "IP Advisory Services", to: "/services/ipr-services", description: "Get expert advice on intellectual property rights" }
    ]
  },
  {
    title: "Legal Documentation",
    items: [
      { title: "Business Agreements", to: "/services/legal-documents", description: "Create comprehensive business agreements" },
      { title: "NDA & Contracts", to: "/services/legal-documents", description: "Draft NDAs and legal contracts" },
      { title: "Terms & Policies", to: "/services/legal-documents", description: "Develop terms of service and privacy policies" },
      { title: "Founders Agreement", to: "/services/legal-documents", description: "Create founders agreements for startups" }
    ]
  },
  {
    title: "Government Registrations",
    items: [
      { title: "Import Export Code", to: "/services/import-export-code", description: "Obtain an Import Export Code for international trade" },
      { title: "MSME Registration", to: "/services/msme-registration", description: "Register your business as an MSME" },
      { title: "FSSAI Registration", to: "/services/fssai-registration", description: "Get FSSAI registration for food businesses" },
      { title: "Shop & Establishment", to: "/services/shop-establishment", description: "Register your shop or establishment" }
    ]
  }
];

// Mock data for service list
export const mockData = {
  categories: [
    {
      id: "business-setup",
      name: "Business Setup",
      color: "bg-blue-100",
      services: [
        "Private Limited Company Registration",
        "Limited Liability Partnership (LLP) Registration",
        "One Person Company Registration",
        "Sole Proprietorship Registration",
        "Partnership Firm Registration",
        "Section 8 Company Registration",
        "Nidhi Company Registration",
        "Producer Company Registration"
      ]
    },
    {
      id: "tax-compliance",
      name: "Tax & Compliance",
      color: "bg-green-100",
      services: [
        "GST Registration",
        "GST Filing",
        "Income Tax Return Filing",
        "ROC Annual Filing",
        "Accounting & Bookkeeping",
        "HR & Payroll Compliance",
        "ESI & PF Registration"
      ]
    },
    {
      id: "intellectual-property",
      name: "Intellectual Property",
      color: "bg-purple-100",
      services: [
        "Trademark Registration",
        "Copyright Registration",
        "Patent Filing",
        "Design Registration",
        "IP Portfolio Management",
        "Trademark Objection Response",
        "IP Advisory Services"
      ]
    },
    {
      id: "legal-documentation",
      name: "Legal Documentation",
      color: "bg-amber-100",
      services: [
        "Non-Disclosure Agreement (NDA)",
        "Founders Agreement",
        "Shareholder Agreement",
        "Employment Agreement",
        "Service Level Agreement",
        "Terms of Service & Privacy Policy",
        "Vendor Agreement"
      ]
    },
    {
      id: "government-registrations",
      name: "Government Registrations",
      color: "bg-teal-100",
      services: [
        "Import Export Code",
        "MSME Registration",
        "FSSAI License",
        "Shop & Establishment License",
        "Trade License",
        "Professional Tax Registration",
        "Digital Signature Certificate"
      ]
    }
  ]
};
