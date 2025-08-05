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

// New Missing Service Pages
import AccountingServices from "./pages/services/AccountingServices";
import GSTFiling from "./pages/services/GSTFiling";
import TDSFiling from "./pages/services/TDSFiling";
import AnnualCompliance from "./pages/services/AnnualCompliance";
import ROCCompliance from "./pages/services/ROCCompliance";
import CopyrightRegistration from "./pages/services/CopyrightRegistration";
import PatentFiling from "./pages/services/PatentFiling";
import LegalConsultation from "./pages/services/LegalConsultation";
import NDAgreement from "./pages/services/NDAgreement";
import BusinessContracts from "./pages/services/BusinessContracts";
import TrademarkSearch from "./pages/services/TrademarkSearch";

// Specialized Services
import Fundraising from "./pages/services/Fundraising";
import PitchDeck from "./pages/services/PitchDeck";
import LegalRetainer from "./pages/services/LegalRetainer";
import Litigation from "./pages/services/Litigation";
import Property from "./pages/services/Property";
import NGORegistration from "./pages/services/NGORegistration";
import BusinessAdvisory from "./pages/services/BusinessAdvisory";

// Documentation Services  
import ServiceLevelAgreement from "./pages/services/ServiceLevelAgreement";
import ShareholdersAgreement from "./pages/services/ShareholdersAgreement";
import FoundersAgreement from "./pages/services/FoundersAgreement";
import MOU from "./pages/services/MOU";
import HRPolicies from "./pages/services/HRPolicies";
import LegalNotice from "./pages/services/LegalNotice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
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
            <Route path="/services/startup-india-registration" element={<StartupIndia />} />
            <Route path="/services/tax-filing-services" element={<TaxFilingServices />} />
            <Route path="/services/ipr-services" element={<IPRServices />} />
            <Route path="/services/import-export-code" element={<ImportExportCode />} />
            <Route path="/services/legal-documents" element={<LegalDocuments />} />
            
            {/* New Missing Service Routes */}
            <Route path="/services/accounting-services" element={<AccountingServices />} />
            <Route path="/services/gst-filing" element={<GSTFiling />} />
            <Route path="/services/tds-filing" element={<TDSFiling />} />
            <Route path="/services/annual-compliance" element={<AnnualCompliance />} />
            <Route path="/services/roc-compliance" element={<ROCCompliance />} />
            <Route path="/services/copyright-registration" element={<CopyrightRegistration />} />
            <Route path="/services/patent-filing" element={<PatentFiling />} />
            <Route path="/services/legal-consultation" element={<LegalConsultation />} />
            <Route path="/services/nda-agreement" element={<NDAgreement />} />
            <Route path="/services/business-contracts" element={<BusinessContracts />} />
            <Route path="/services/trademark-search" element={<TrademarkSearch />} />
            
            {/* Specialized Services Routes */}
            <Route path="/services/fundraising" element={<Fundraising />} />
            <Route path="/services/pitch-deck" element={<PitchDeck />} />
            <Route path="/services/legal-retainer" element={<LegalRetainer />} />
            <Route path="/services/litigation" element={<Litigation />} />
            <Route path="/services/property" element={<Property />} />
            <Route path="/services/ngo-registration" element={<NGORegistration />} />
            <Route path="/services/business-advisory" element={<BusinessAdvisory />} />
            
            {/* Documentation Services Routes */}
            <Route path="/services/service-level-agreement" element={<ServiceLevelAgreement />} />
            <Route path="/services/shareholders-agreement" element={<ShareholdersAgreement />} />
            <Route path="/services/founders-agreement" element={<FoundersAgreement />} />
            <Route path="/services/mou" element={<MOU />} />
            <Route path="/services/hr-policies" element={<HRPolicies />} />
            <Route path="/services/legal-notice" element={<LegalNotice />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
