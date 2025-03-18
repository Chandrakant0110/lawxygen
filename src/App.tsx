
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AuthProvider } from './hooks/useAuth';

// Create a lightweight loading component
const PageLoader = () => <div className="w-full h-screen flex items-center justify-center"><LoadingSpinner /></div>;

// Optimized lazy-loading with proper chunking
const AuthPage = React.lazy(() => import(/* webpackChunkName: "auth" */ './pages/AuthPage'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "not-found" */ './pages/NotFound'));
const Index = React.lazy(() => import(/* webpackChunkName: "home" */ './pages/Index'));
const Dashboard = React.lazy(() => import(/* webpackChunkName: "dashboard" */ './pages/Dashboard'));
const ResetPasswordPage = React.lazy(() => import(/* webpackChunkName: "reset-password" */ './pages/ResetPasswordPage'));

// Group similar pages
const AboutPage = React.lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/AboutPage'));
const ContactPage = React.lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/ContactPage'));
const PrivacyPage = React.lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/PrivacyPage'));
const TermsPage = React.lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/TermsPage'));
const LegalPage = React.lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/LegalPage'));
const FAQPage = React.lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/FAQPage'));
const BlogPage = React.lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/BlogPage'));

// Service related pages
const ServiceListPage = React.lazy(() => import(/* webpackChunkName: "service-pages" */ './pages/ServiceListPage'));
const ServiceCategoryPage = React.lazy(() => import(/* webpackChunkName: "service-pages" */ './pages/ServiceCategoryPage'));
const ServicePage = React.lazy(() => import(/* webpackChunkName: "service-pages" */ './pages/ServicePage'));
const FindLawyer = React.lazy(() => import(/* webpackChunkName: "professional-pages" */ './pages/FindLawyer'));
const FindProfessional = React.lazy(() => import(/* webpackChunkName: "professional-pages" */ './pages/FindProfessional'));
const SearchResults = React.lazy(() => import(/* webpackChunkName: "search" */ './pages/SearchResults'));

// Service-specific pages
const PrivateLimitedCompany = React.lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/PrivateLimitedCompany'));
const LLPRegistration = React.lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/LLPRegistration'));
const OPCRegistration = React.lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/OPCRegistration'));
const SoleProprietorship = React.lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/SoleProprietorship'));
const PartnershipFirm = React.lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/PartnershipFirm'));
const Section8Company = React.lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/Section8Company'));
const NidhiCompany = React.lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/NidhiCompany'));
const ProducerCompany = React.lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/ProducerCompany'));
const StartupIndia = React.lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/StartupIndia'));
const ImportExportCode = React.lazy(() => import(/* webpackChunkName: "licenses" */ './pages/services/ImportExportCode'));
const GSTRegistration = React.lazy(() => import(/* webpackChunkName: "tax" */ './pages/services/GSTRegistration'));
const TrademarkRegistration = React.lazy(() => import(/* webpackChunkName: "ipr" */ './pages/services/TrademarkRegistration'));
const TaxFilingServices = React.lazy(() => import(/* webpackChunkName: "tax" */ './pages/services/TaxFilingServices'));
const LegalDocuments = React.lazy(() => import(/* webpackChunkName: "legal" */ './pages/services/LegalDocuments'));
const IPRServices = React.lazy(() => import(/* webpackChunkName: "ipr" */ './pages/services/IPRServices'));
const FinancialCompliance = React.lazy(() => import(/* webpackChunkName: "compliance" */ './pages/services/FinancialCompliance'));
const HRPayrollCompliance = React.lazy(() => import(/* webpackChunkName: "compliance" */ './pages/services/HRPayrollCompliance'));

// Initialize React Query client with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60, // 1 hour (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false // Prevent unnecessary refetches
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/services" element={<ServiceListPage />} />
              <Route path="/services/:category" element={<ServiceCategoryPage />} />
              <Route path="/service/:id" element={<ServicePage />} />
              <Route path="/find-lawyer" element={<FindLawyer />} />
              <Route path="/find-professional" element={<FindProfessional />} />
              <Route path="/search" element={<SearchResults />} />
              
              {/* Service Routes */}
              <Route path="/services/private-limited-company" element={<PrivateLimitedCompany />} />
              <Route path="/services/llp-registration" element={<LLPRegistration />} />
              <Route path="/services/opc-registration" element={<OPCRegistration />} />
              <Route path="/services/sole-proprietorship" element={<SoleProprietorship />} />
              <Route path="/services/partnership-firm" element={<PartnershipFirm />} />
              <Route path="/services/section-8-company" element={<Section8Company />} />
              <Route path="/services/nidhi-company" element={<NidhiCompany />} />
              <Route path="/services/producer-company" element={<ProducerCompany />} />
              <Route path="/services/startup-india" element={<StartupIndia />} />
              <Route path="/services/import-export-code" element={<ImportExportCode />} />
              <Route path="/services/gst-registration" element={<GSTRegistration />} />
              <Route path="/services/trademark-registration" element={<TrademarkRegistration />} />
              <Route path="/services/tax-filing" element={<TaxFilingServices />} />
              <Route path="/services/legal-documents" element={<LegalDocuments />} />
              <Route path="/services/ipr-services" element={<IPRServices />} />
              <Route path="/services/financial-compliance" element={<FinancialCompliance />} />
              <Route path="/services/hr-payroll-compliance" element={<HRPayrollCompliance />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster position="top-right" richColors />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
