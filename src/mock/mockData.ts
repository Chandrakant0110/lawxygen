// Mock data for professionals
export const professionals = [
  {
    id: "prof1",
    name: "Jessica Reynolds",
    title: "Corporate Lawyer • 7 yrs exp",
    rating: 4.9,
    reviews: 142,
    hourlyRate: 120,
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    specialties: ["Contract Law", "Corporate Law", "Business Formation"],
    isTopRated: true,
    category: "corporate",
    location: "New York, NY"
  },
  {
    id: "prof2",
    name: "Marcus Chen",
    title: "Intellectual Property Attorney • 5 yrs exp",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 95,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    specialties: ["Patent Law", "Copyright", "Trademark Registration"],
    isTopRated: true,
    category: "ip",
    location: "San Francisco, CA"
  },
  {
    id: "prof3",
    name: "Sophia Patel",
    title: "Family Law Attorney • 9 yrs exp",
    rating: 4.7,
    reviews: 113,
    hourlyRate: 85,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    specialties: ["Divorce", "Child Custody", "Family Mediation"],
    category: "family",
    location: "Chicago, IL"
  },
  {
    id: "prof4",
    name: "Daniel Wilson",
    title: "Real Estate Attorney • 6 yrs exp",
    rating: 4.6,
    reviews: 78,
    hourlyRate: 110,
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    specialties: ["Property Law", "Lease Agreements", "Real Estate Transactions"],
    category: "realestate",
    location: "Miami, FL"
  },
  {
    id: "prof5",
    name: "Aisha Johnson",
    title: "Immigration Attorney • 8 yrs exp",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 100,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    specialties: ["Visa Applications", "Green Cards", "Citizenship"],
    isTopRated: true,
    category: "immigration",
    location: "Washington, DC"
  },
  {
    id: "prof6",
    name: "Robert Garcia",
    title: "Criminal Defense Attorney • 12 yrs exp",
    rating: 4.8,
    reviews: 201,
    hourlyRate: 150,
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    specialties: ["Criminal Defense", "DUI", "White Collar Crime"],
    category: "criminal",
    location: "Los Angeles, CA"
  },
  {
    id: "prof7",
    name: "Emily Zhang",
    title: "Tax Attorney • 6 yrs exp",
    rating: 4.7,
    reviews: 91,
    hourlyRate: 125,
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
    specialties: ["Tax Planning", "IRS Disputes", "Business Taxation"],
    category: "tax",
    location: "Boston, MA"
  },
  {
    id: "prof8",
    name: "James Washington",
    title: "Employment Attorney • 9 yrs exp",
    rating: 4.8,
    reviews: 118,
    hourlyRate: 115,
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    specialties: ["Workplace Discrimination", "Wrongful Termination", "Employment Contracts"],
    isTopRated: true,
    category: "employment",
    location: "Seattle, WA"
  },
];

// Mock data for services
export const services = [
  {
    id: "serv1",
    title: "Legal Contract Review",
    description: "Professional review of legal contracts with expert recommendations and revisions.",
    price: 150,
    providerId: "prof1",
    providerName: "Jessica Reynolds",
    providerAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    category: "legal",
    tags: ["Contract", "Legal Review", "Business"]
  },
  {
    id: "serv2",
    title: "Trademark Registration",
    description: "Complete trademark search, application preparation and filing with the USPTO.",
    price: 350,
    providerId: "prof2",
    providerName: "Marcus Chen",
    providerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1611184100249-d891ea52c271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "ip",
    tags: ["Trademark", "Intellectual Property", "Brand Protection"]
  },
  {
    id: "serv3",
    title: "Business Incorporation",
    description: "Formation of LLC, C-Corp, or S-Corp including all required documentation and filings.",
    price: 500,
    providerId: "prof1",
    providerName: "Jessica Reynolds",
    providerAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "business",
    tags: ["Incorporation", "Business Formation", "LLC"]
  },
  {
    id: "serv4",
    title: "Tax Planning Consultation",
    description: "Strategic tax planning session with a certified tax attorney to minimize liabilities.",
    price: 275,
    providerId: "prof7",
    providerName: "Emily Zhang",
    providerAvatar: "https://randomuser.me/api/portraits/women/91.jpg",
    rating: 4.7,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1635399860495-2a2bbec0eff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "tax",
    tags: ["Tax Planning", "Financial", "Consultation"]
  },
  {
    id: "serv5",
    title: "Divorce Mediation",
    description: "Professional mediation services to navigate divorce proceedings amicably.",
    price: 400,
    providerId: "prof3",
    providerName: "Sophia Patel",
    providerAvatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4.7,
    reviews: 113,
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    category: "family",
    tags: ["Divorce", "Mediation", "Family Law"]
  },
  {
    id: "serv6",
    title: "Real Estate Closing",
    description: "Complete legal services for residential or commercial real estate transactions.",
    price: 600,
    providerId: "prof4",
    providerName: "Daniel Wilson",
    providerAvatar: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "realestate",
    tags: ["Real Estate", "Property", "Closing"]
  },
  {
    id: "serv7",
    title: "Immigration Consultation",
    description: "Expert consultation on visa applications, green cards, and citizenship processes.",
    price: 200,
    providerId: "prof5",
    providerName: "Aisha Johnson",
    providerAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    category: "immigration",
    tags: ["Immigration", "Visa", "Consultation"]
  },
  {
    id: "serv8",
    title: "Employment Contract Review",
    description: "Thorough review of employment contracts, NDAs, and non-compete agreements.",
    price: 175,
    providerId: "prof8",
    providerName: "James Washington",
    providerAvatar: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: 4.8,
    reviews: 118,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "employment",
    tags: ["Employment", "Contract", "Legal Review"]
  },
];

// Categories data
export const categories = [
  {
    id: "business-incorporation",
    name: "Business Incorporation",
    description: "Company registrations, LLPs, partnerships & more",
    icon: "Briefcase",
    color: "bg-blue-100 text-blue-700",
    services: [
      "Private Limited Company Registration",
      "Limited Liability Partnership (LLP) Registration",
      "One Person Company (OPC) Registration",
      "Partnership Firm Registration",
      "Sole Proprietorship Registration",
      "Section 8 Company Registration",
      "Nidhi Company Registration",
      "Producer Company Registration",
      "Society Registration",
      "Trust Registration"
    ]
  },
  {
    id: "taxation-services",
    name: "Taxation Services",
    description: "Tax returns, planning & representation",
    icon: "DollarSign",
    color: "bg-teal-100 text-teal-700",
    services: [
      "Income Tax Return Filing for Individuals",
      "Income Tax Return Filing for Businesses",
      "Goods and Services Tax (GST) Registration",
      "GST Return Filing",
      "Tax Planning and Advisory",
      "TDS Compliance and Filing",
      "Tax Audit Services",
      "Representation in Tax Assessments",
      "Advance Tax Computation",
      "International Taxation Advisory"
    ]
  },
  {
    id: "compliance-services",
    name: "Compliance Services",
    description: "Annual filings, accounting & regulatory compliance",
    icon: "Check",
    color: "bg-cyan-100 text-cyan-700",
    services: [
      "Annual ROC Filings for Companies",
      "Annual ROC Filings for LLPs",
      "Accounting and Bookkeeping Services",
      "Statutory Audit Services",
      "Internal Audit Services",
      "Secretarial Compliance",
      "Labor Law Compliance",
      "ESI and PF Compliance",
      "Environmental Compliance",
      "Regulatory Compliance Advisory"
    ]
  },
  {
    id: "intellectual-property",
    name: "Intellectual Property",
    description: "Trademarks, patents, copyrights & design registration",
    icon: "Copyright",
    color: "bg-amber-100 text-amber-700",
    services: [
      "Trademark Search and Registration",
      "Patent Search and Registration",
      "Copyright Registration",
      "Design Registration",
      "Geographical Indication Registration",
      "IPR Litigation Support",
      "IP Portfolio Management",
      "IP Assignment and Licensing",
      "Trade Secret Protection",
      "Domain Name Dispute Resolution"
    ]
  },
  {
    id: "legal-documents",
    name: "Legal Documentation",
    description: "Agreements, contracts & legal document drafting",
    icon: "FileText",
    color: "bg-purple-100 text-purple-700",
    services: [
      "Shareholders Agreements",
      "Founders Agreements",
      "Non-Disclosure Agreements (NDA)",
      "Employment Contracts",
      "Service Level Agreements (SLA)",
      "Terms and Conditions",
      "Privacy Policies",
      "Lease and Rental Agreements",
      "Franchise Agreements",
      "Vendor Contracts"
    ]
  },
  {
    id: "government-registrations",
    name: "Government Registrations",
    description: "Licenses & statutory registrations",
    icon: "FileCheck",
    color: "bg-indigo-100 text-indigo-700",
    services: [
      "Import Export Code (IEC) Registration",
      "Professional Tax Registration",
      "Shops and Establishments Registration",
      "FSSAI (Food License) Registration",
      "MSME (Udyam) Registration",
      "PSARA License for Security Agencies",
      "Trade License",
      "Drug License",
      "BARCODE Registration",
      "BIS Certification"
    ]
  },
  {
    id: "advisory-services",
    name: "Advisory Services",
    description: "Legal consultation & business advisory",
    icon: "Info",
    color: "bg-rose-100 text-rose-700",
    services: [
      "Legal Consultation",
      "Business Structuring Advisory",
      "Regulatory Compliance Advisory",
      "Investment and Funding Advisory",
      "Mergers and Acquisitions Advisory",
      "Corporate Governance Advisory",
      "Risk Management Advisory",
      "Succession Planning",
      "CSR Advisory",
      "Startup Mentorship"
    ]
  },
  {
    id: "litigation",
    name: "Litigation & Dispute Resolution",
    description: "Court representation and dispute resolution",
    icon: "Scale",
    color: "bg-red-100 text-red-700",
    services: [
      "Civil Litigation",
      "Criminal Litigation",
      "Commercial Disputes",
      "Arbitration Services",
      "Mediation and Conciliation",
      "Debt Recovery Services",
      "Consumer Dispute Resolution",
      "Employment Disputes",
      "Real Estate Litigation",
      "Family Law Disputes"
    ]
  },
  {
    id: "individual-services",
    name: "Individual Legal Services",
    description: "Property, wills & family law matters",
    icon: "Home",
    color: "bg-green-100 text-green-700",
    services: [
      "Property Agreement Drafting",
      "Will Drafting and Registration",
      "Family Law Matters",
      "Name Change Assistance",
      "Power of Attorney",
      "Succession Certificate",
      "Legal Heir Certificate",
      "Marriage Registration",
      "Divorce Proceedings",
      "Guardianship Matters"
    ]
  }
];

// Detailed service descriptions for service detail pages
export const serviceDetails = {
  "Private Limited Company Registration": {
    description: "Complete assistance in registering a private limited company, including name approval, Director Identification Number (DIN), Digital Signature Certificate (DSC), and incorporation certificate.",
    process: [
      "Name approval from MCA",
      "Obtaining Digital Signature Certificates",
      "Director Identification Number application",
      "Filing incorporation documents",
      "Obtaining Certificate of Incorporation",
      "Post-incorporation compliances"
    ],
    documents: [
      "Identity proof of directors (PAN, Aadhar)",
      "Address proof of directors",
      "Passport-sized photographs of directors",
      "Address proof of registered office",
      "NOC from property owner"
    ],
    timeline: "7-15 business days",
    benefits: [
      "Limited liability protection",
      "Separate legal entity status",
      "Perpetual succession",
      "Enhanced credibility",
      "Easier access to funding"
    ]
  },
  "Trademark Registration": {
    description: "Comprehensive trademark registration services to protect your brand identity, including trademark search, application filing, and prosecution.",
    process: [
      "Comprehensive trademark search",
      "Trademark application preparation",
      "Filing with Trademark Registry",
      "Responding to examination reports",
      "Publication in Trademark Journal",
      "Registration certificate issuance"
    ],
    documents: [
      "Clear representation of the mark",
      "Proof of business/identity",
      "Power of attorney",
      "User affidavit (if applicable)",
      "Priority documents (if applicable)"
    ],
    timeline: "12-18 months",
    benefits: [
      "Exclusive rights to use the mark",
      "Legal protection against infringement",
      "Brand value enhancement",
      "Option to license the mark",
      "Nationwide protection"
    ]
  },
  "GST Registration": {
    description: "Complete assistance with Goods and Services Tax (GST) registration to ensure compliance with Indian tax regulations.",
    process: [
      "Application for GST registration",
      "Verification of business details",
      "Document submission",
      "Application tracking",
      "Obtaining GSTIN",
      "Setting up GST compliance systems"
    ],
    documents: [
      "PAN of the business/proprietor",
      "Identity and address proof of promoters",
      "Business registration documents",
      "Bank account details",
      "Proof of business address"
    ],
    timeline: "3-7 business days",
    benefits: [
      "Legal compliance with tax laws",
      "Ability to collect and claim GST",
      "Access to input tax credits",
      "Expansion of business across states",
      "Enhanced business credibility"
    ]
  }
};
