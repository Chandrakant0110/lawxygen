
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import EnhancedServiceDropdown from "@/components/layout/EnhancedServiceDropdown";
import { Menu, X } from "lucide-react";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  const { isMobile } = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-black">
            Lawxygen
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <div className="relative group">
              <EnhancedServiceDropdown />
            </div>
            <Link to="/find-lawyer" className="text-gray-700 hover:text-black">
              Find a Lawyer
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
          </nav>
        )}

        {/* Auth Buttons */}
        {!isMobile && (
          <div>
            <AuthButtons />
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-black"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <div className="relative">
            <EnhancedServiceDropdown />
          </div>
          <Link
            to="/find-lawyer"
            className="text-gray-700 hover:text-black"
            onClick={toggleMenu}
          >
            Find a Lawyer
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-black"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-black"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <div className="pt-2">
            <AuthButtons />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
