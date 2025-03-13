
// Professional data structure
export interface Professional {
  id: number;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  imageUrl: string;
  location: string;
  tags: string[];
  description: string;
}

// Service data structure
export interface Service {
  id: number;
  title: string;
  provider: string;
  providerImageUrl: string;
  rating: number;
  reviewCount: number;
  price: number;
  imageUrl: string;
  tags: string[];
  description: string;
}

// Mock data for professionals
export const professionals: Professional[] = [
  {
    id: 1,
    name: "Jane Smith",
    title: "Corporate Lawyer",
    rating: 4.9,
    reviewCount: 156,
    hourlyRate: 150,
    imageUrl: "/placeholder.svg",
    location: "New York, NY",
    tags: ["Corporate Law", "Contract Review", "Intellectual Property"],
    description: "Corporate attorney with 10+ years of experience in contract negotiations and intellectual property law."
  },
  {
    id: 2,
    name: "Michael Johnson",
    title: "Real Estate Attorney",
    rating: 4.8,
    reviewCount: 132,
    hourlyRate: 125,
    imageUrl: "/placeholder.svg",
    location: "Chicago, IL",
    tags: ["Real Estate", "Property Law", "Transactions"],
    description: "Specializing in residential and commercial real estate transactions and property disputes."
  },
  {
    id: 3,
    name: "Sarah Williams",
    title: "Family Law Specialist",
    rating: 4.7,
    reviewCount: 98,
    hourlyRate: 135,
    imageUrl: "/placeholder.svg",
    location: "Los Angeles, CA",
    tags: ["Family Law", "Divorce", "Child Custody"],
    description: "Compassionate family law attorney focusing on divorce, custody, and support arrangements."
  },
  {
    id: 4,
    name: "David Chen",
    title: "Patent Attorney",
    rating: 4.9,
    reviewCount: 87,
    hourlyRate: 175,
    imageUrl: "/placeholder.svg",
    location: "San Francisco, CA",
    tags: ["Patents", "Trademarks", "IP Strategy"],
    description: "Patent attorney with background in computer science and electrical engineering."
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    title: "Immigration Lawyer",
    rating: 4.8,
    reviewCount: 124,
    hourlyRate: 140,
    imageUrl: "/placeholder.svg",
    location: "Miami, FL",
    tags: ["Immigration", "Visas", "Green Cards"],
    description: "Immigration attorney helping individuals and businesses navigate the complex immigration system."
  },
  {
    id: 6,
    name: "James Wilson",
    title: "Criminal Defense Attorney",
    rating: 4.6,
    reviewCount: 76,
    hourlyRate: 165,
    imageUrl: "/placeholder.svg",
    location: "Boston, MA",
    tags: ["Criminal Defense", "DUI", "Felonies"],
    description: "Former prosecutor now defending clients against criminal charges at state and federal levels."
  }
];

// Mock data for services
export const services: Service[] = [
  {
    id: 1,
    title: "Contract Review & Analysis",
    provider: "Jane Smith",
    providerImageUrl: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 112,
    price: 250,
    imageUrl: "/placeholder.svg",
    tags: ["Contracts", "Legal Review", "Business"],
    description: "Professional review of business contracts with detailed analysis and suggested revisions."
  },
  {
    id: 2,
    title: "Business Formation Package",
    provider: "Michael Johnson",
    providerImageUrl: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 93,
    price: 399,
    imageUrl: "/placeholder.svg",
    tags: ["Business Formation", "LLC", "Incorporation"],
    description: "Complete legal package for forming your business entity, including all necessary filings."
  },
  {
    id: 3,
    title: "Trademark Registration",
    provider: "David Chen",
    providerImageUrl: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 76,
    price: 499,
    imageUrl: "/placeholder.svg",
    tags: ["Trademark", "IP Protection", "Brand"],
    description: "Full trademark search and registration service to protect your brand identity."
  },
  {
    id: 4,
    title: "Last Will & Testament",
    provider: "Sarah Williams",
    providerImageUrl: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 88,
    price: 199,
    imageUrl: "/placeholder.svg",
    tags: ["Estate Planning", "Will", "Legal Document"],
    description: "Legally binding will tailored to your specific needs and family situation."
  },
  {
    id: 5,
    title: "Immigration Consultation",
    provider: "Lisa Rodriguez",
    providerImageUrl: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 105,
    price: 150,
    imageUrl: "/placeholder.svg",
    tags: ["Immigration", "Consultation", "Legal Advice"],
    description: "60-minute consultation to discuss your immigration options and create a strategic plan."
  },
  {
    id: 6,
    title: "Lease Agreement Review",
    provider: "Michael Johnson",
    providerImageUrl: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 79,
    price: 175,
    imageUrl: "/placeholder.svg",
    tags: ["Real Estate", "Lease", "Legal Review"],
    description: "Detailed review of residential or commercial lease agreements with explanations of terms."
  },
  {
    id: 7,
    title: "Patent Filing Assistance",
    provider: "David Chen",
    providerImageUrl: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 64,
    price: 799,
    imageUrl: "/placeholder.svg",
    tags: ["Patent", "Intellectual Property", "Innovation"],
    description: "Professional assistance with preparing and filing utility patent applications."
  },
  {
    id: 8,
    title: "Divorce Consultation",
    provider: "Sarah Williams",
    providerImageUrl: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 81,
    price: 199,
    imageUrl: "/placeholder.svg",
    tags: ["Family Law", "Divorce", "Consultation"],
    description: "90-minute consultation to discuss divorce process, options, and potential outcomes."
  },
  {
    id: 9,
    title: "Business Contract Template",
    provider: "Jane Smith",
    providerImageUrl: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 97,
    price: 125,
    imageUrl: "/placeholder.svg",
    tags: ["Contracts", "Templates", "Business"],
    description: "Customizable legal contract templates for various business needs with usage guidelines."
  }
];
