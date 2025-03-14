
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Scale, 
  Home, 
  Users, 
  FileText, 
  Landmark, 
  Globe, 
  Shield 
} from "lucide-react";

const categories = [
  {
    id: "corporate",
    name: "Corporate Law",
    description: "Business formation, contracts, and compliance",
    icon: Briefcase,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "litigation",
    name: "Litigation",
    description: "Court representation and dispute resolution",
    icon: Scale,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "realestate",
    name: "Real Estate",
    description: "Property transactions and tenant matters",
    icon: Home,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "family",
    name: "Family Law",
    description: "Divorce, custody, and family matters",
    icon: Users,
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: "ip",
    name: "Intellectual Property",
    description: "Patents, copyrights, and trademarks",
    icon: FileText,
    color: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    id: "tax",
    name: "Tax Law",
    description: "Tax planning, compliance, and disputes",
    icon: Landmark,
    color: "bg-slate-100 text-slate-700",
  },
  {
    id: "immigration",
    name: "Immigration",
    description: "Visas, green cards, and citizenship",
    icon: Globe,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "employment",
    name: "Employment Law",
    description: "Workplace issues and compliance",
    icon: Shield,
    color: "bg-purple-100 text-purple-700",
  },
];

const ServiceCategories = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Legal Services Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our wide range of legal service categories to find the perfect match for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/search-results?category=${category.id}`}
              className="flex flex-col items-center p-6 text-center bg-white border rounded-lg card-humanized hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              <div className={`p-3 rounded-full ${category.color}`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                {category.name}
              </h3>
              <p className="mt-2 text-gray-600">
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
