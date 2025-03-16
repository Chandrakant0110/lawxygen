
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Props for the ListItem component
export interface ListItemProps {
  className?: string;
  title: string;
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const ServiceListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, icon, children, to, ...props }, ref) => {
    return (
      <li>
        <Link
          ref={ref}
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
      </li>
    );
  }
);

ServiceListItem.displayName = "ServiceListItem";

export default ServiceListItem;
