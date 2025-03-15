
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          <div>
            <Link to="/" className="inline-block text-2xl font-bold text-white">
              Lawxygen
            </Link>
            <p className="mt-4 text-gray-300">
              Connect with top legal professionals and services for your business and personal needs.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">For Clients</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/search-results" className="text-gray-300 hover:text-teal-300">Find Services</Link>
              </li>
              <li>
                <Link to="/find-professional" className="text-gray-300 hover:text-teal-300">Find Your Professional</Link>
              </li>
              <li>
                <Link to="/find-lawyer" className="text-gray-300 hover:text-teal-300">Find Your Lawyer</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-teal-300">How it Works</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal-300">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">For Professionals</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/freelancer-profile/join" className="text-gray-300 hover:text-teal-300">Join as a Professional</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal-300">Professional Resources</Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-teal-300">Community Guidelines</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal-300">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal-300">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-teal-300">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal-300">Press</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-teal-300">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 text-sm text-center border-t border-gray-700 text-gray-300">
          <p>© {new Date().getFullYear()} Lawxygen. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-teal-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-teal-300">Terms of Service</Link>
            <Link to="/legal" className="hover:text-teal-300">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
