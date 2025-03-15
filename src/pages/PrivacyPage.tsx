
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-lawblue-950 to-lawpurple-900 text-white py-12">
          <div className="container-custom">
            <h1 className="text-3xl font-bold md:text-4xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-200">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
                <p>
                  At Lawxygen, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
                <p>
                  We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
                  <li><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                  <li><strong>Financial Data</strong> includes payment card details.</li>
                  <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of services you have purchased from us.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.</li>
                  <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</li>
                  <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
                  <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                </ul>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
                </p>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">Your Legal Rights</h2>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-4">
                  <p><strong>Email:</strong> privacy@lawxygen.com</p>
                  <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                  <p><strong>Address:</strong> 123 Legal Ave, Suite 500, San Francisco, CA 94105</p>
                </div>
                
                <div className="mt-8">
                  <p>
                    For more information about our services, please visit our <Link to="/" className="text-lawpurple-600 hover:underline">homepage</Link> or <Link to="/contact" className="text-lawpurple-600 hover:underline">contact us</Link> with any questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
