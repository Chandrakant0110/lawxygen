import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FindLawyerDropdown = () => {
  const lawyerCategories = [
    {
      title: "Personal / Family",
      items: [
        { name: "Divorce", link: "/services/divorce" },
        { name: "Family Dispute", link: "/services/family-dispute" },
        { name: "Child Custody", link: "/services/child-custody" },
        { name: "Muslim Law", link: "/services/muslim-law" },
        { name: "Medical Negligence", link: "/services/medical-negligence" },
        { name: "Motor Accident", link: "/services/motor-accident" },
      ]
    },
    {
      title: "Criminal / Property",
      items: [
        { name: "Criminal", link: "/services/criminal" },
        { name: "Property", link: "/services/property" },
        { name: "Landlord / Tenant", link: "/services/landlord-tenant" },
        { name: "Cyber Crime", link: "/services/cyber-crime" },
        { name: "Wills / Trusts", link: "/services/wills-trusts" },
        { name: "Labour & Service", link: "/services/labour-service" },
      ]
    },
    {
      title: "Civil / Debt Matters",
      items: [
        { name: "Documentation", link: "/services/documentation" },
        { name: "Consumer Court", link: "/services/consumer-court" },
        { name: "Civil", link: "/services/civil" },
        { name: "Cheque Bounce", link: "/services/cheque-bounce" },
        { name: "Recovery", link: "/services/recovery" },
      ]
    },
    {
      title: "Corporate Law",
      items: [
        { name: "Arbitration", link: "/services/arbitration" },
        { name: "Trademark & Copyright", link: "/services/trademark-copyright" },
        { name: "Customs & Central Excise", link: "/services/customs-excise" },
        { name: "Startup", link: "/services/startup" },
        { name: "Banking / Finance", link: "/services/banking-finance" },
        { name: "GST", link: "/services/gst" },
        { name: "Corporate", link: "/services/corporate" },
        { name: "Tax", link: "/services/tax" },
      ]
    },
    {
      title: "Others",
      items: [
        { name: "Armed Forces Tribunal", link: "/services/armed-forces-tribunal" },
        { name: "Supreme Court", link: "/services/supreme-court" },
        { name: "Insurance", link: "/services/insurance" },
        { name: "Immigration", link: "/services/immigration" },
        { name: "International Law", link: "/services/international-law" },
      ]
    }
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary w-full">
            Find a Lawyer
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="find-lawyer-mega-dropdown">
              <div className="find-lawyer-mega-dropdown-grid">
                {lawyerCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="lawyer-category-container">
                    <h3 className="lawyer-category-title">
                      {category.title}
                    </h3>
                    <ul className="lawyer-items-list">
                      {category.items.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="lawyer-item-link"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="talk-to-lawyer-container">
                  <h3 className="lawyer-category-title">
                    Talk to a Lawyer
                  </h3>
                  <div className="talk-to-lawyer-content">
                    <p className="talk-to-lawyer-question">
                      Need help to find the right lawyer?
                    </p>
                    <Button 
                      asChild
                      className="talk-to-lawyer-button"
                    >
                      <Link to="/find-lawyer">
                        Start Here
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default FindLawyerDropdown; 