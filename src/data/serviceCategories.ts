
export const serviceCategories = [
  {
    title: "Business Setup",
    items: [
      { title: "Private Limited Company", to: "/services/private-limited-company" },
      { title: "Limited Liability Partnership", to: "/services/llp-registration" },
      { title: "One Person Company", to: "/services/opc-registration" },
      { title: "Sole Proprietorship", to: "/services/sole-proprietorship" },
      { title: "Partnership Firm", to: "/services/partnership-firm" },
      { title: "Section 8 Company", to: "/services/section-8-company" },
      { title: "Nidhi Company", to: "/services/nidhi-company" },
      { title: "Producer Company", to: "/services/producer-company" },
      { title: "Startup India Registration", to: "/services/startup-india" }
    ]
  },
  {
    title: "Tax & Compliance",
    items: [
      { title: "GST Registration", to: "/services/gst-registration" },
      { title: "GST Filing", to: "/services/gst-filing" },
      { title: "Income Tax Filing", to: "/services/tax-filing" },
      { title: "ROC Compliance", to: "/services/financial-compliance" },
      { title: "Annual Compliance", to: "/services/financial-compliance" },
      { title: "HR & Payroll Compliance", to: "/services/hr-payroll-compliance" },
    ]
  },
  {
    title: "Intellectual Property",
    items: [
      { title: "Trademark Registration", to: "/services/trademark-registration" },
      { title: "Copyright Registration", to: "/services/copyright-registration" },
      { title: "Patent Filing", to: "/services/patent-filing" },
      { title: "IP Advisory Services", to: "/services/ipr-services" }
    ]
  },
  {
    title: "Legal Documentation",
    items: [
      { title: "Business Agreements", to: "/services/legal-documents" },
      { title: "NDA & Contracts", to: "/services/legal-documents" },
      { title: "Terms & Policies", to: "/services/legal-documents" },
      { title: "Founders Agreement", to: "/services/legal-documents" }
    ]
  },
  {
    title: "Government Registrations",
    items: [
      { title: "Import Export Code", to: "/services/import-export-code" },
      { title: "MSME Registration", to: "/services/msme-registration" },
      { title: "FSSAI Registration", to: "/services/fssai-registration" },
      { title: "Shop & Establishment", to: "/services/shop-establishment" }
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
