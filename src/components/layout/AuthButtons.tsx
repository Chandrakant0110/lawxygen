
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings, UserCircle } from "lucide-react";

const AuthButtons = () => {
  const { user, signOut, userProfile } = useAuth();

  if (user) {
    const displayName = userProfile?.first_name 
      ? `${userProfile.first_name} ${userProfile.last_name || ''}`
      : user.email?.split('@')[0] || "User";
      
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="rounded-full h-10 w-10 p-0 overflow-hidden">
            {userProfile?.avatar_url ? (
              <img 
                src={userProfile.avatar_url} 
                alt={displayName} 
                className="h-full w-full object-cover"
              />
            ) : (
              <UserCircle className="h-5 w-5" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-white">
          <div className="flex flex-col space-y-1 p-2">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            <p className="text-xs leading-none text-gray-500">{user.email}</p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/dashboard" className="flex items-center cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/settings" className="flex items-center cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center cursor-pointer text-rose-500 focus:text-rose-500"
            onClick={signOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="outline" className="font-medium">
        <Link to="/auth">Sign In</Link>
      </Button>
      <Button asChild className="font-medium bg-primary text-white hover:bg-secondary">
        <Link to="/auth">Sign Up</Link>
      </Button>
    </div>
  );
};

export default AuthButtons;
