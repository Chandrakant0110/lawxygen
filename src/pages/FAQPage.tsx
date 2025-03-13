
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What services does Lawxygen offer?",
      answer: "Lawxygen offers a comprehensive range of professional services including legal consultation, CA services, tax advisory, compliance solutions, startup incorporation, trademark registration, and marketing services."
    },
    {
      question: "How do I hire a professional on Lawxygen?",
      answer: "To hire a professional, browse our service categories, select a service that meets your needs, review professional profiles and ratings, and click 'Get Started' to initiate contact. You can then discuss your requirements directly with the professional."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Lawxygen accepts all major credit and debit cards, PayPal, and bank transfers. Payments are processed securely through our platform with industry-standard encryption."
    },
    {
      question: "Is my information secure on Lawxygen?",
      answer: "Yes, we take data security seriously. All personal and financial information is encrypted and stored securely. We comply with data protection regulations and never share your information with third parties without consent."
    },
    {
      question: "Can I get a refund if I'm not satisfied with the service?",
      answer: "We have a satisfaction guarantee policy. If you're not satisfied with the service provided, please contact our support team within 7 days of service completion, and we'll work to resolve the issue or provide a refund as appropriate."
    },
    {
      question: "How are professionals vetted on Lawxygen?",
      answer: "All professionals on our platform undergo a comprehensive verification process. We check their credentials, qualifications, experience, and professional licenses where applicable. We also collect and display client reviews to help you make informed decisions."
    },
    {
      question: "What if I need to cancel a service I've booked?",
      answer: "You can cancel a service from your dashboard. Our cancellation policy varies depending on how close to the service date you cancel. Please refer to the specific terms for each service or contact our support team for assistance."
    },
    {
      question: "How can I become a service provider on Lawxygen?",
      answer: "Professional service providers can apply through our 'Join as Professional' section. You'll need to complete a profile, submit credentials for verification, and pass our quality assessment before being listed on the platform."
    },
    {
      question: "Are there any hidden fees when using Lawxygen?",
      answer: "No, there are no hidden fees. All costs are transparently displayed before you confirm any service. The price shown includes the service fee and any applicable taxes."
    },
    {
      question: "How do I contact Lawxygen customer support?",
      answer: "You can reach our customer support team through the Contact Us page, by emailing support@lawxygen.com, or by calling our toll-free number at +1 (800) 123-4567 during business hours."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lawblue-950 to-lawpurple-900 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-200">
                Find answers to common questions about Lawxygen services
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Accordion Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-white">
                    <AccordionTrigger className="px-6 py-4 font-medium text-lg text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-700 mb-6">
                Our support team is here to help. Reach out to us directly and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-lawpurple-600 text-white font-medium hover:bg-lawpurple-700 transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="tel:+18001234567" 
                  className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
