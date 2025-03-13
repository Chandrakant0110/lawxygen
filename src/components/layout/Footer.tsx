
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lawblue-950 text-white">
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
                <Link to="/search-results" className="text-gray-300 hover:text-white">Find Services</Link>
              </li>
              <li>
                <Link to="/job-posting" className="text-gray-300 hover:text-white">Post a Job</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">How it Works</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">For Professionals</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Join as a Professional</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Professional Resources</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Community Guidelines</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Careers</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Press</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 text-sm text-center border-t border-gray-700 text-gray-300">
          <p>© {new Date().getFullYear()} Lawxygen. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-4">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
            <Link to="#" className="hover:text-white">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
