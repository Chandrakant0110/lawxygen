
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import FreelancerProfile from "./pages/FreelancerProfile";
import JobPosting from "./pages/JobPosting";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import Dashboard from "./pages/Dashboard";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";
import CheckoutPage from "./pages/CheckoutPage";
import MessagingPage from "./pages/MessagingPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import LegalPage from "./pages/LegalPage";
import FindLawyer from "./pages/FindLawyer";
import FindProfessional from "./pages/FindProfessional";
// Import new service pages
import CompanyRegistration from "./pages/services/CompanyRegistration";
import HRPayrollCompliance from "./pages/services/HRPayrollCompliance";
import FinancialCompliance from "./pages/services/FinancialCompliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/freelancer-profile/:id" element={<FreelancerProfile />} />
          <Route path="/job-posting" element={<JobPosting />} />
          <Route path="/find-lawyer" element={<FindLawyer />} />
          <Route path="/find-professional" element={<FindProfessional />} />
          <Route path="/service/:id" element={<ServicePage />} />
          <Route path="/category/:category" element={<ServiceCategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout/:id" element={<CheckoutPage />} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/legal" element={<LegalPage />} />
          
          {/* New Service Pages */}
          <Route path="/services/company-registration" element={<CompanyRegistration />} />
          <Route path="/services/hr-payroll-compliance" element={<HRPayrollCompliance />} />
          <Route path="/services/financial-compliance" element={<FinancialCompliance />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
