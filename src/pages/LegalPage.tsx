
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, AlertCircle } from "lucide-react";

const LegalPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-lawblue-950 to-lawpurple-900 text-white py-12">
          <div className="container-custom">
            <h1 className="text-3xl font-bold md:text-4xl">Legal Information</h1>
            <p className="mt-4 text-lg text-gray-200">
              Important legal information about Lawxygen and our services
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                This page contains important legal information about Lawxygen, including our terms of service, privacy policy, and other legal documents. Please review these documents carefully as they govern your use of our platform and services.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 mb-12">
                <Card>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-lawpurple-100 p-2 rounded-full">
                        <FileText className="w-5 h-5 text-lawpurple-600" />
                      </div>
                      <CardTitle>Terms of Service</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Our Terms of Service govern your use of the Lawxygen platform and outline the rules and regulations for using our website and services.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/terms">View Terms of Service</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-lawpurple-100 p-2 rounded-full">
                        <Shield className="w-5 h-5 text-lawpurple-600" />
                      </div>
                      <CardTitle>Privacy Policy</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Our Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/privacy">View Privacy Policy</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <Separator className="my-8" />
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Legal Disclaimer</h3>
                    <p className="text-amber-700">
                      Lawxygen is not a law firm and does not provide legal advice. The information provided on this website is for general informational purposes only and should not be construed as legal advice on any subject matter. The use of this platform does not create an attorney-client relationship. Users should contact qualified legal counsel for advice on any specific legal problem.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Legal Resources</h2>
              
              <ul className="space-y-4 mb-8">
                <li className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900">Cookie Policy</h3>
                  <p className="text-gray-700 mt-1 mb-2">
                    Information about how we use cookies and similar technologies on our website.
                  </p>
                  <Link to="#" className="text-lawpurple-600 hover:underline">Learn More</Link>
                </li>
                
                <li className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900">Copyright Notice</h3>
                  <p className="text-gray-700 mt-1 mb-2">
                    Information about copyright ownership and permissions related to content on our platform.
                  </p>
                  <Link to="#" className="text-lawpurple-600 hover:underline">Learn More</Link>
                </li>
                
                <li className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900">GDPR Compliance</h3>
                  <p className="text-gray-700 mt-1 mb-2">
                    Information about our compliance with the General Data Protection Regulation (GDPR).
                  </p>
                  <Link to="#" className="text-lawpurple-600 hover:underline">Learn More</Link>
                </li>
                
                <li className="pb-4">
                  <h3 className="text-lg font-medium text-gray-900">Accessibility Statement</h3>
                  <p className="text-gray-700 mt-1 mb-2">
                    Information about our commitment to making our website accessible to all users.
                  </p>
                  <Link to="#" className="text-lawpurple-600 hover:underline">Learn More</Link>
                </li>
              </ul>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Our Legal Team</h3>
                <p className="text-gray-700 mb-6">
                  If you have any legal questions or concerns about our platform or services, please contact our legal team at legal@lawxygen.com or visit our contact page.
                </p>
                <Button asChild className="bg-lawpurple-600 hover:bg-lawpurple-700">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalPage;
