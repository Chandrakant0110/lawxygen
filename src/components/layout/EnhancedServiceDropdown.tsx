import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { 
  Building, 
  FileCheck, 
  FileText, 
  Users, 
  Calculator, 
  Shield, 
  Copyright,
  Clock,
  Check,
  Scale,
  LandmarkIcon,
  BarChart,
  FileSignature,
  Award,
  GraduationCap,
  Globe
} from "lucide-react";

// Type for service categories
interface ServiceItem {
  title: string;
  description: string;
  to: string;
  icon: React.ReactNode;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

// Service categories with expanded options
const serviceCategories: ServiceCategory[] = [
  {
    title: "Business Setup",
    items: [
      {
        title: "Private Limited Company",
        description: "Incorporate your business as a Private Limited Company",
        to: "/services/private-limited-company",
        icon: <Building className="h-5 w-5" />
      },
      {
        title: "LLP Registration",
        description: "Register your business as a Limited Liability Partnership",
        to: "/services/llp-registration",
        icon: <LandmarkIcon className="h-5 w-5" />
      },
      {
        title: "Sole Proprietorship",
        description: "Start your business as a sole proprietor",
        to: "/services/sole-proprietorship",
        icon: <FileSignature className="h-5 w-5" />
      },
      {
        title: "MSME Registration",
        description: "Register as Micro, Small, or Medium Enterprise",
        to: "/services/msme-registration",
        icon: <Award className="h-5 w-5" />
      },
      {
        title: "Other Registrations",
        description: "Additional business registration options",
        to: "/services/business-registration",
        icon: <FileCheck className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Tax & Compliance",
    items: [
      {
        title: "GST Registration & Filing",
        description: "Complete GST solution for your business",
        to: "/services/gst-compliance",
        icon: <BarChart className="h-5 w-5" />
      },
      {
        title: "TDS Filing",
        description: "Timely and accurate TDS filing services",
        to: "/services/tds-filing",
        icon: <Calculator className="h-5 w-5" />
      },
      {
        title: "Business Compliance",
        description: "Annual filings and regulatory compliance",
        to: "/services/business-compliance",
        icon: <Check className="h-5 w-5" />
      },
      {
        title: "ROC Compliance",
        description: "Registrar of Companies compliance services",
        to: "/services/roc-compliance",
        icon: <FileCheck className="h-5 w-5" />
      },
      {
        title: "Virtual CFO Services",
        description: "Professional financial management",
        to: "/services/virtual-cfo",
        icon: <Calculator className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Legal & HR Services",
    items: [
      {
        title: "HR & Payroll Compliance",
        description: "Complete HR and payroll management solutions",
        to: "/services/hr-payroll-compliance",
        icon: <Users className="h-5 w-5" />
      },
      {
        title: "Legal Document Drafting",
        description: "Professional drafting of legal documents",
        to: "/services/legal-document-drafting",
        icon: <FileText className="h-5 w-5" />
      },
      {
        title: "Employee Contracts",
        description: "Legally sound employment agreements",
        to: "/services/employee-contracts",
        icon: <FileSignature className="h-5 w-5" />
      },
      {
        title: "ESI & PF Registration",
        description: "Employee benefits registration services",
        to: "/services/esi-pf-registration",
        icon: <Shield className="h-5 w-5" />
      },
      {
        title: "Business Policies",
        description: "Develop compliant business policies",
        to: "/services/business-policies",
        icon: <GraduationCap className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Intellectual Property",
    items: [
      {
        title: "Trademark Registration",
        description: "Protect your brand identity",
        to: "/services/trademark-registration",
        icon: <Copyright className="h-5 w-5" />
      },
      {
        title: "Patent Filing",
        description: "Protect your inventions and innovations",
        to: "/services/patent-filing",
        icon: <Award className="h-5 w-5" />
      },
      {
        title: "Copyright Protection",
        description: "Secure your original creative works",
        to: "/services/copyright-protection",
        icon: <FileText className="h-5 w-5" />
      },
      {
        title: "IP Advisory Services",
        description: "Expert guidance on intellectual property",
        to: "/services/ip-services",
        icon: <Shield className="h-5 w-5" />
      },
      {
        title: "Global IP Protection",
        description: "International intellectual property services",
        to: "/services/global-ip-protection",
        icon: <Globe className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Special Services",
    items: [
      {
        title: "Litigation Support",
        description: "Legal representation and support",
        to: "/services/litigation-support",
        icon: <Scale className="h-5 w-5" />
      },
      {
        title: "Legal Consultation",
        description: "Expert legal advice for your business",
        to: "/services/legal-consultation",
        icon: <GraduationCap className="h-5 w-5" />
      },
      {
        title: "Legal Retainer Plans",
        description: "Ongoing legal support subscription",
        to: "/services/legal-retainer-plans",
        icon: <Clock className="h-5 w-5" />
      },
      {
        title: "Startup Legal Bundle",
        description: "Complete legal package for startups",
        to: "/services/startup-legal-bundle",
        icon: <Building className="h-5 w-5" />
      },
      {
        title: "Business Advisory",
        description: "Strategic business guidance services",
        to: "/services/business-advisory",
        icon: <BarChart className="h-5 w-5" />
      }
    ]
  }
];

const EnhancedServiceDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[700px] lg:w-[1000px] lg:grid-cols-5 bg-white">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <h3 className="text-lg font-medium text-primary border-b pb-1 mb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <ListItem
                        key={itemIndex}
                        title={item.title}
                        to={item.to}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 p-4 border-t">
              <Link 
                to="/search-results" 
                className="block text-center text-sm font-medium text-primary hover:text-primary/80"
              >
                Browse All Services
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

// ListItem component for the dropdown
interface ListItemProps {
  className?: string;
  title: string;
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, icon, children, to, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref as any}
            className={cn(
              "block select-none space-y-1 rounded-md p-2 hover:bg-slate-100 transition-colors no-underline outline-none",
              className
            )}
            to={to}
            {...props}
          >
            <div className="flex items-center gap-2">
              <div className="text-primary">
                {icon}
              </div>
              <div className="text-sm font-medium text-slate-900">{title}</div>
            </div>
            <p className="line-clamp-2 pl-7 text-xs text-slate-600">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default EnhancedServiceDropdown;
