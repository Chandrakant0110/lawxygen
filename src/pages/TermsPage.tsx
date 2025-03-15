
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-lawblue-950 to-lawpurple-900 text-white py-12">
          <div className="container-custom">
            <h1 className="text-3xl font-bold md:text-4xl">Terms of Service</h1>
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
                  Welcome to Lawxygen. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website or using our services, we assume you accept these terms and conditions in full. Do not continue to use Lawxygen's website or services if you do not accept all of the terms and conditions stated on this page.
                </p>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"Client" refers to any user who engages with or purchases services from a legal professional through our platform.</li>
                  <li>"Legal Professional" refers to any attorney, law firm, or legal service provider who offers services through our platform.</li>
                  <li>"Platform" refers to the Lawxygen website, mobile applications, and any other digital services we provide.</li>
                  <li>"User", "You" and "Your" refers to the person accessing this website and services, and accepting the Company's terms and conditions.</li>
                  <li>"We", "Us" and "Our" refers to Lawxygen.</li>
                  <li>"Service" refers to any product, consultation, document, or other legal assistance provided by Legal Professionals through our Platform.</li>
                </ul>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">User Accounts</h2>
                <p>
                  When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on our platform.
                </p>
                <p className="mt-4">
                  You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
                </p>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">Platform Services & Fees</h2>
                <p>
                  Lawxygen provides a platform for clients to connect with legal professionals. We do not provide legal services directly, and we are not a law firm. We are not responsible for the quality, timing, legality, failure to provide, or any other aspect of the services provided by legal professionals on our platform.
                </p>
                <p className="mt-4">
                  We charge a service fee for the use of our platform. The current fee structure is available on our website and may be updated from time to time. Any changes to our fee structure will be communicated to users in advance.
                </p>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">User Conduct</h2>
                <p>
                  Users agree not to use our Platform:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform or participate in any unlawful acts.</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.</li>
                  <li>To submit false or misleading information.</li>
                  <li>To upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Platform.</li>
                  <li>To collect or track the personal information of others.</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape.</li>
                  <li>For any obscene or immoral purpose.</li>
                </ul>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">Termination</h2>
                <p>
                  We may terminate or suspend your account and bar access to the Platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p className="mt-4">
                  If you wish to terminate your account, you may simply discontinue using the Platform, or contact us to request account deletion.
                </p>
                
                <Separator className="my-6" />
                
                <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4">
                  <p><strong>Email:</strong> legal@lawxygen.com</p>
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

export default TermsPage;
