
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, Bell, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">Lawxygen</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:flex-1 md:ml-10">
            <div className="flex items-center flex-1 max-w-xl">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type="search"
                  placeholder="Search for legal services..."
                  className="pl-10 pr-4 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="hidden md:ml-4 md:flex md:items-center md:space-x-4">
              <Link to="/search-results" className="text-gray-600 hover:text-indigo-700">
                Browse Services
              </Link>
              <Link to="/job-posting" className="text-gray-600 hover:text-indigo-700">
                Post a Job
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-indigo-700">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-indigo-700">
                Contact
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-indigo-700">
                Blog
              </Link>
              <Link to="/faq" className="text-gray-600 hover:text-indigo-700">
                FAQ
              </Link>
              <Link to="/dashboard" className="p-1 text-gray-600 hover:text-indigo-700">
                <Bell className="w-5 h-5" />
              </Link>
              <Link to="/messaging" className="p-1 text-gray-600 hover:text-indigo-700">
                <MessageSquare className="w-5 h-5" />
              </Link>
              <Button asChild variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                <Link to="/dashboard">Sign In</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="block w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="relative w-full px-2 py-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="Search for legal services..."
              className="pl-10 pr-4 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <Link
            to="/search-results"
            className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-indigo-700 hover:bg-gray-100"
          >
            Browse Services
          </Link>
          <Link
            to="/job-posting"
            className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-indigo-700 hover:bg-gray-100"
          >
            Post a Job
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-indigo-700 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-indigo-700 hover:bg-gray-100"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-indigo-700 hover:bg-gray-100"
          >
            Blog
          </Link>
          <Link
            to="/faq"
            className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-indigo-700 hover:bg-gray-100"
          >
            FAQ
          </Link>
          <Link
            to="/dashboard"
            className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-indigo-700 hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            to="/messaging"
            className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-indigo-700 hover:bg-gray-100"
          >
            Messages
          </Link>
          <div className="pt-4">
            <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
              <Link to="/dashboard">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
