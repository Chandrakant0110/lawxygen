
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import LoadingSpinner from "@/components/common/LoadingSpinner";

// Eagerly loaded components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazily loaded components
const SearchResults = lazy(() => import("./pages/SearchResults"));
const FreelancerProfile = lazy(() => import("./pages/FreelancerProfile"));
const JobPosting = lazy(() => import("./pages/JobPosting"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ServiceCategoryPage = lazy(() => import("./pages/ServiceCategoryPage"));
const ServiceListPage = lazy(() => import("./pages/ServiceListPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const MessagingPage = lazy(() => import("./pages/MessagingPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const FindLawyer = lazy(() => import("./pages/FindLawyer"));
const FindProfessional = lazy(() => import("./pages/FindProfessional"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));

// Service Pages - lazy loaded
const CompanyRegistration = lazy(() => import("./pages/services/CompanyRegistration"));
const HRPayrollCompliance = lazy(() => import("./pages/services/HRPayrollCompliance"));
const FinancialCompliance = lazy(() => import("./pages/services/FinancialCompliance"));
const TrademarkRegistration = lazy(() => import("./pages/services/TrademarkRegistration"));
const PrivateLimitedCompany = lazy(() => import("./pages/services/PrivateLimitedCompany"));
const LLPRegistration = lazy(() => import("./pages/services/LLPRegistration"));
const OPCRegistration = lazy(() => import("./pages/services/OPCRegistration"));
const GSTRegistration = lazy(() => import("./pages/services/GSTRegistration"));

// Additional service pages - lazy loaded
const SoleProprietorship = lazy(() => import("./pages/services/SoleProprietorship"));
const NidhiCompany = lazy(() => import("./pages/services/NidhiCompany"));
const ProducerCompany = lazy(() => import("./pages/services/ProducerCompany"));
const Section8Company = lazy(() => import("./pages/services/Section8Company"));
const PartnershipFirm = lazy(() => import("./pages/services/PartnershipFirm"));
const StartupIndia = lazy(() => import("./pages/services/StartupIndia"));
const TaxFilingServices = lazy(() => import("./pages/services/TaxFilingServices"));
const IPRServices = lazy(() => import("./pages/services/IPRServices"));
const ImportExportCode = lazy(() => import("./pages/services/ImportExportCode"));
const LegalDocuments = lazy(() => import("./pages/services/LegalDocuments"));

// Configure React Query with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents unnecessary refetches on window focus
      staleTime: 1000 * 60 * 5, // Data considered fresh for 5 minutes
      cacheTime: 1000 * 60 * 30, // Cache persists for 30 minutes
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Suspense fallback={<LoadingSpinner />}>
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
              <Toaster />
              <Sonner />
            </Suspense>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
