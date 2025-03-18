import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
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
import ServiceListPage from "./pages/ServiceListPage";
import CheckoutPage from "./pages/CheckoutPage";
import MessagingPage from "./pages/MessagingPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import LegalPage from "./pages/LegalPage";
import FindLawyer from "./pages/FindLawyer";
import FindProfessional from "./pages/FindProfessional";
import AuthPage from "./pages/AuthPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

// Service Pages
import CompanyRegistration from "./pages/services/CompanyRegistration";
import HRPayrollCompliance from "./pages/services/HRPayrollCompliance";
import FinancialCompliance from "./pages/services/FinancialCompliance";
import TrademarkRegistration from "./pages/services/TrademarkRegistration";
import PrivateLimitedCompany from "./pages/services/PrivateLimitedCompany";
import LLPRegistration from "./pages/services/LLPRegistration";
import OPCRegistration from "./pages/services/OPCRegistration";
import GSTRegistration from "./pages/services/GSTRegistration";

// Additional service pages
import SoleProprietorship from "./pages/services/SoleProprietorship";
import NidhiCompany from "./pages/services/NidhiCompany";
import ProducerCompany from "./pages/services/ProducerCompany.tsx";
import Section8Company from "./pages/services/Section8Company";
import PartnershipFirm from "./pages/services/PartnershipFirm";
import StartupIndia from "./pages/services/StartupIndia";
import TaxFilingServices from "./pages/services/TaxFilingServices";
import IPRServices from "./pages/services/IPRServices";
import ImportExportCode from "./pages/services/ImportExportCode";
import LegalDocuments from "./pages/services/LegalDocuments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/freelancer-profile/:id" element={<FreelancerProfile />} />
            <Route path="/job-posting" element={<JobPosting />} />
            <Route path="/find-lawyer" element={<FindLawyer />} />
            <Route path="/find-professional" element={<FindProfessional />} />
            <Route path="/service/:id" element={<ServicePage />} />
            <Route path="/category/:category" element={<ServiceCategoryPage />} />
            <Route path="/services" element={<ServiceListPage />} />
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
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            
            {/* Service Pages */}
            <Route path="/services/company-registration" element={<CompanyRegistration />} />
            <Route path="/services/hr-payroll-compliance" element={<HRPayrollCompliance />} />
            <Route path="/services/financial-compliance" element={<FinancialCompliance />} />
            <Route path="/services/trademark-registration" element={<TrademarkRegistration />} />
            <Route path="/services/private-limited-company" element={<PrivateLimitedCompany />} />
            <Route path="/services/llp-registration" element={<LLPRegistration />} />
            <Route path="/services/one-person-company" element={<OPCRegistration />} />
            <Route path="/services/gst-registration" element={<GSTRegistration />} />
            
            {/* Additional Service Pages */}
            <Route path="/services/sole-proprietorship" element={<SoleProprietorship />} />
            <Route path="/services/nidhi-company" element={<NidhiCompany />} />
            <Route path="/services/producer-company" element={<ProducerCompany />} />
            <Route path="/services/section-8-company" element={<Section8Company />} />
            <Route path="/services/partnership-firm" element={<PartnershipFirm />} />
            <Route path="/services/startup-india" element={<StartupIndia />} />
            <Route path="/services/tax-filing-services" element={<TaxFilingServices />} />
            <Route path="/services/ipr-services" element={<IPRServices />} />
            <Route path="/services/import-export-code" element={<ImportExportCode />} />
            <Route path="/services/legal-documents" element={<LegalDocuments />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
