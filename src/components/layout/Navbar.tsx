
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import FindLawyerDropdown from "@/components/layout/FindLawyerDropdown";
import { Menu, X } from "lucide-react";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  const isMobile = useIsMobile();
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center navbar-container">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-primary">
            Lawxygen
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center space-x-6 navbar-menu">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary"
              id="home-link"
            >
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary">
              Services
            </Link>
            <FindLawyerDropdown />
            <Link to="/about" className="text-gray-700 hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">
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
            className="text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 z-[9999]">
          <Link
            to="/"
            className="text-gray-700 hover:text-primary"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <div className="relative">
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </div>
          <Link
            to="/find-lawyer"
            className="text-gray-700 hover:text-primary"
            onClick={toggleMenu}
          >
            Find a Lawyer
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-primary"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-primary"
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
