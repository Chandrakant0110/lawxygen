
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
  Search
} from "lucide-react";

// Type for service categories
interface ServiceCategory {
  title: string;
  items: {
    title: string;
    description: string;
    to: string;
    icon: React.ReactNode;
  }[];
}

// Service categories
const serviceCategories: ServiceCategory[] = [
  {
    title: "Business Setup",
    items: [
      {
        title: "Company Registration",
        description: "Register your business as a Private Limited, LLP, or OPC",
        to: "/services/company-registration",
        icon: <Building className="h-5 w-5" />
      },
      {
        title: "Government Registrations",
        description: "GST, PAN, TAN, and other essential registrations",
        to: "/services/government-registrations",
        icon: <FileCheck className="h-5 w-5" />
      },
      {
        title: "Business Compliance",
        description: "Annual filings and regulatory compliance",
        to: "/services/business-compliance",
        icon: <Check className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Legal & Compliance",
    items: [
      {
        title: "Legal Document Drafting",
        description: "Contracts, agreements, and legal documents",
        to: "/services/legal-document-drafting",
        icon: <FileText className="h-5 w-5" />
      },
      {
        title: "HR & Payroll Compliance",
        description: "Employee contracts, HR policies, and payroll",
        to: "/services/hr-payroll-compliance",
        icon: <Users className="h-5 w-5" />
      },
      {
        title: "Financial Compliance",
        description: "Virtual CFO, accounting, and financial management",
        to: "/services/financial-compliance",
        icon: <Calculator className="h-5 w-5" />
      }
    ]
  },
  {
    title: "Specialized Services",
    items: [
      {
        title: "Intellectual Property",
        description: "Trademark, patent, and copyright registration",
        to: "/services/ip-services",
        icon: <Copyright className="h-5 w-5" />
      },
      {
        title: "Legal Retainer Plans",
        description: "Monthly subscription for ongoing legal support",
        to: "/services/legal-retainer-plans",
        icon: <Clock className="h-5 w-5" />
      },
      {
        title: "Startup Legal Consultation",
        description: "Specialized legal services for startups",
        to: "/services/startup-legal-consultation",
        icon: <Shield className="h-5 w-5" />
      }
    ]
  }
];

const ServiceDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] gap-3 p-4 md:w-[700px] md:grid-cols-3 lg:w-[900px] bg-white">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <h3 className="text-lg font-medium text-primary border-b pb-1 mb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-1">
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

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, icon, children, to, ...props }, ref) => {
    return (
      <li>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 hover:bg-accent transition-colors no-underline outline-none",
            className
          )}
          to={to}
          {...props}
        >
          <div className="flex items-center gap-2">
            <div className="text-primary">
              {icon}
            </div>
            <div className="text-base font-medium text-slate-900">{title}</div>
          </div>
          <p className="line-clamp-2 pl-7 text-sm text-slate-600">{children}</p>
        </Link>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default ServiceDropdown;
