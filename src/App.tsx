
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AuthProvider } from './hooks/useAuth';

// Lazy-loaded components
const AuthPage = React.lazy(() => import('./pages/AuthPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Index = React.lazy(() => import('./pages/Index'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const ResetPasswordPage = React.lazy(() => import('./pages/ResetPasswordPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));
const LegalPage = React.lazy(() => import('./pages/LegalPage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const ServiceListPage = React.lazy(() => import('./pages/ServiceListPage'));
const ServiceCategoryPage = React.lazy(() => import('./pages/ServiceCategoryPage'));
const ServicePage = React.lazy(() => import('./pages/ServicePage'));
const FindLawyer = React.lazy(() => import('./pages/FindLawyer'));
const FindProfessional = React.lazy(() => import('./pages/FindProfessional'));
const SearchResults = React.lazy(() => import('./pages/SearchResults'));

// Service Pages
const PrivateLimitedCompany = React.lazy(() => import('./pages/services/PrivateLimitedCompany'));
const LLPRegistration = React.lazy(() => import('./pages/services/LLPRegistration'));
const OPCRegistration = React.lazy(() => import('./pages/services/OPCRegistration'));
const SoleProprietorship = React.lazy(() => import('./pages/services/SoleProprietorship'));
const PartnershipFirm = React.lazy(() => import('./pages/services/PartnershipFirm'));
const Section8Company = React.lazy(() => import('./pages/services/Section8Company'));
const NidhiCompany = React.lazy(() => import('./pages/services/NidhiCompany'));
const ProducerCompany = React.lazy(() => import('./pages/services/ProducerCompany'));
const StartupIndia = React.lazy(() => import('./pages/services/StartupIndia'));
const ImportExportCode = React.lazy(() => import('./pages/services/ImportExportCode'));
const GSTRegistration = React.lazy(() => import('./pages/services/GSTRegistration'));
const TrademarkRegistration = React.lazy(() => import('./pages/services/TrademarkRegistration'));
const TaxFilingServices = React.lazy(() => import('./pages/services/TaxFilingServices'));
const LegalDocuments = React.lazy(() => import('./pages/services/LegalDocuments'));
const IPRServices = React.lazy(() => import('./pages/services/IPRServices'));
const FinancialCompliance = React.lazy(() => import('./pages/services/FinancialCompliance'));
const HRPayrollCompliance = React.lazy(() => import('./pages/services/HRPayrollCompliance'));

// Initialize React Query client with correct options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60, // 1 hour (formerly cacheTime)
      retry: 1
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<LoadingSpinner />}>
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
