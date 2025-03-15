
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
  Check
} from "lucide-react";

// Type for service categories
interface ServiceCategory {
  title: string;
  items: {
    title: string;
    description: string;
    href: string;
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
        href: "/services/company-registration",
        icon: <Building className="h-5 w-5" />
      },
      {
        title: "Government Registrations",
        description: "GST, PAN, TAN, and other essential registrations",
        href: "/services/government-registrations",
        icon: <FileCheck className="h-5 w-5" />
      },
      {
        title: "Business Compliance",
        description: "Annual filings and regulatory compliance",
        href: "/services/business-compliance",
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
        href: "/services/legal-document-drafting",
        icon: <FileText className="h-5 w-5" />
      },
      {
        title: "HR & Payroll Compliance",
        description: "Employee contracts, HR policies, and payroll",
        href: "/services/hr-payroll-compliance",
        icon: <Users className="h-5 w-5" />
      },
      {
        title: "Financial Compliance",
        description: "Virtual CFO, accounting, and financial management",
        href: "/services/financial-compliance",
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
        href: "/services/ip-services",
        icon: <Copyright className="h-5 w-5" />
      },
      {
        title: "Legal Retainer Plans",
        description: "Monthly subscription for ongoing legal support",
        href: "/services/legal-retainer-plans",
        icon: <Clock className="h-5 w-5" />
      },
      {
        title: "Startup Legal Consultation",
        description: "Specialized legal services for startups",
        href: "/services/startup-legal-consultation",
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
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-indigo-600 data-[state=open]:bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] gap-3 p-4 md:w-[700px] md:grid-cols-3 lg:w-[900px]">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <h3 className="text-lg font-medium text-indigo-700 border-b pb-1 mb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <ListItem
                        key={itemIndex}
                        title={item.title}
                        href={item.href}
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
                className="block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
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
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref as any}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 hover:bg-indigo-50 transition-colors no-underline outline-none",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2">
              <div className="text-indigo-600">
                {icon}
              </div>
              <div className="text-base font-medium text-slate-900">{title}</div>
            </div>
            <p className="line-clamp-2 pl-7 text-sm text-slate-600">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default ServiceDropdown;
