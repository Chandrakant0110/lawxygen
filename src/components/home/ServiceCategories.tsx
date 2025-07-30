
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Building, 
  FileCheck, 
  DollarSign, 
  Copyright, 
  FileText, 
  Info, 
  Handshake, 
  Home,
  Check,
  Scale
} from "lucide-react";

const categories = [
  {
    id: "business-incorporation",
    name: "Business Incorporation",
    description: "Company registrations, LLP, partnerships & more",
    icon: Building,
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: "government-registrations",
    name: "Government Registrations",
    description: "GST, IEC, licenses & statutory registrations",
    icon: FileCheck,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "compliance-services",
    name: "Compliance Services",
    description: "Annual filings, accounting & regulatory compliance",
    icon: Check,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "taxation-services",
    name: "Taxation Services",
    description: "Tax returns, planning & representation",
    icon: DollarSign,
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: "intellectual-property",
    name: "Intellectual Property",
    description: "Trademarks, patents, copyrights & design registration",
    icon: Copyright,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "legal-documents",
    name: "Legal Documents",
    description: "Agreements, contracts & legal document drafting",
    icon: FileText,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "advisory-services",
    name: "Advisory Services",
    description: "Legal consultation & business advisory",
    icon: Info,
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: "specialized-services",
    name: "Specialized Services",
    description: "Litigation support & specialized legal assistance",
    icon: Scale,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "individual-services",
    name: "Individual Services",
    description: "Property agreements, wills & family law matters",
    icon: Home,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "additional-services",
    name: "Additional Services",
    description: "Business plans, certifications & support services",
    icon: Handshake,
    color: "bg-teal-100 text-teal-700",
  },
];

const ServiceCategories = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Legal Services Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our wide range of legal service categories to find the perfect match for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="flex flex-col items-center p-6 text-center bg-white border rounded-lg card-humanized hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <div className={`p-3 rounded-full ${category.color}`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
