import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AuthProvider } from './hooks/useAuth';
import ErrorBoundary from './components/common/ErrorBoundary';
import EnhancedLoadingSpinner from './components/common/EnhancedLoadingSpinner';

// Create a lightweight loading component for different sections
const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <EnhancedLoadingSpinner size="large" message="Loading page..." />
  </div>
);

const ComponentLoader = () => (
  <div className="w-full py-8 flex items-center justify-center">
    <EnhancedLoadingSpinner size="medium" />
  </div>
);

// Optimized lazy-loading with proper chunking
const AuthPage = lazy(() => import(/* webpackChunkName: "auth" */ './pages/AuthPage'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ './pages/NotFound'));
const Index = lazy(() => import(/* webpackChunkName: "home" */ './pages/Index'));
const Dashboard = lazy(() => import(/* webpackChunkName: "dashboard" */ './pages/Dashboard'));
const ResetPasswordPage = lazy(() => import(/* webpackChunkName: "reset-password" */ './pages/ResetPasswordPage'));

// Group similar pages
const AboutPage = lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/AboutPage'));
const ContactPage = lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/ContactPage'));
const PrivacyPage = lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/PrivacyPage'));
const TermsPage = lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/TermsPage'));
const LegalPage = lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/LegalPage'));
const FAQPage = lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/FAQPage'));
const BlogPage = lazy(() => import(/* webpackChunkName: "info-pages" */ './pages/BlogPage'));

// Service related pages
const ServiceListPage = lazy(() => import(/* webpackChunkName: "service-pages" */ './pages/ServiceListPage'));
const ServiceCategoryPage = lazy(() => import(/* webpackChunkName: "service-pages" */ './pages/ServiceCategoryPage'));
const ServicePage = lazy(() => import(/* webpackChunkName: "service-pages" */ './pages/ServicePage'));
const FindLawyer = lazy(() => import(/* webpackChunkName: "professional-pages" */ './pages/FindLawyer'));
const FindProfessional = lazy(() => import(/* webpackChunkName: "professional-pages" */ './pages/FindProfessional'));
const SearchResults = lazy(() => import(/* webpackChunkName: "search" */ './pages/SearchResults'));

// Service-specific pages
const PrivateLimitedCompany = lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/PrivateLimitedCompany'));
const LLPRegistration = lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/LLPRegistration'));
const OPCRegistration = lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/OPCRegistration'));
const SoleProprietorship = lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/SoleProprietorship'));
const PartnershipFirm = lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/PartnershipFirm'));
const Section8Company = lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/Section8Company'));
const NidhiCompany = lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/NidhiCompany'));
const ProducerCompany = lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/ProducerCompany'));
const StartupIndia = lazy(() => import(/* webpackChunkName: "business-setup" */ './pages/services/StartupIndia'));
const ImportExportCode = lazy(() => import(/* webpackChunkName: "licenses" */ './pages/services/ImportExportCode'));
const GSTRegistration = lazy(() => import(/* webpackChunkName: "tax" */ './pages/services/GSTRegistration'));
const TrademarkRegistration = lazy(() => import(/* webpackChunkName: "ipr" */ './pages/services/TrademarkRegistration'));
const TaxFilingServices = lazy(() => import(/* webpackChunkName: "tax" */ './pages/services/TaxFilingServices'));
const LegalDocuments = lazy(() => import(/* webpackChunkName: "legal" */ './pages/services/LegalDocuments'));
const IPRServices = lazy(() => import(/* webpackChunkName: "ipr" */ './pages/services/IPRServices'));
const FinancialCompliance = lazy(() => import(/* webpackChunkName: "compliance" */ './pages/services/FinancialCompliance'));
const HRPayrollCompliance = lazy(() => import(/* webpackChunkName: "compliance" */ './pages/services/HRPayrollCompliance'));

// Initialize React Query client with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60, // 1 hour (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false, // Prevent unnecessary refetches
    }
  }
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={
                  <ErrorBoundary>
                    <Index />
                  </ErrorBoundary>
                } />
                <Route path="/auth" element={
                  <ErrorBoundary>
                    <AuthPage />
                  </ErrorBoundary>
                } />
                <Route path="/reset-password" element={
                  <ErrorBoundary>
                    <ResetPasswordPage />
                  </ErrorBoundary>
                } />
                <Route path="/dashboard/*" element={
                  <ErrorBoundary>
                    <Dashboard />
                  </ErrorBoundary>
                } />
                <Route path="/about" element={
                  <ErrorBoundary>
                    <AboutPage />
                  </ErrorBoundary>
                } />
                <Route path="/contact" element={
                  <ErrorBoundary>
                    <ContactPage />
                  </ErrorBoundary>
                } />
                <Route path="/privacy" element={
                  <ErrorBoundary>
                    <PrivacyPage />
                  </ErrorBoundary>
                } />
                <Route path="/terms" element={
                  <ErrorBoundary>
                    <TermsPage />
                  </ErrorBoundary>
                } />
                <Route path="/legal" element={
                  <ErrorBoundary>
                    <LegalPage />
                  </ErrorBoundary>
                } />
                <Route path="/faq" element={
                  <ErrorBoundary>
                    <FAQPage />
                  </ErrorBoundary>
                } />
                <Route path="/blog" element={
                  <ErrorBoundary>
                    <BlogPage />
                  </ErrorBoundary>
                } />
                <Route path="/services" element={
                  <ErrorBoundary>
                    <ServiceListPage />
                  </ErrorBoundary>
                } />
                <Route path="/services/:category" element={
                  <ErrorBoundary>
                    <ServiceCategoryPage />
                  </ErrorBoundary>
                } />
                <Route path="/service/:id" element={
                  <ErrorBoundary>
                    <ServicePage />
                  </ErrorBoundary>
                } />
                <Route path="/find-lawyer" element={
                  <ErrorBoundary>
                    <FindLawyer />
                  </ErrorBoundary>
                } />
                <Route path="/find-professional" element={
                  <ErrorBoundary>
                    <FindProfessional />
                  </ErrorBoundary>
                } />
                <Route path="/search" element={
                  <ErrorBoundary>
                    <SearchResults />
                  </ErrorBoundary>
                } />
                
                {/* Service Routes */}
                <Route path="/services/private-limited-company" element={
                  <ErrorBoundary>
                    <PrivateLimitedCompany />
                  </ErrorBoundary>
                } />
                <Route path="/services/llp-registration" element={
                  <ErrorBoundary>
                    <LLPRegistration />
                  </ErrorBoundary>
                } />
                <Route path="/services/opc-registration" element={
                  <ErrorBoundary>
                    <OPCRegistration />
                  </ErrorBoundary>
                } />
                <Route path="/services/sole-proprietorship" element={
                  <ErrorBoundary>
                    <SoleProprietorship />
                  </ErrorBoundary>
                } />
                <Route path="/services/partnership-firm" element={
                  <ErrorBoundary>
                    <PartnershipFirm />
                  </ErrorBoundary>
                } />
                <Route path="/services/section-8-company" element={
                  <ErrorBoundary>
                    <Section8Company />
                  </ErrorBoundary>
                } />
                <Route path="/services/nidhi-company" element={
                  <ErrorBoundary>
                    <NidhiCompany />
                  </ErrorBoundary>
                } />
                <Route path="/services/producer-company" element={
                  <ErrorBoundary>
                    <ProducerCompany />
                  </ErrorBoundary>
                } />
                <Route path="/services/startup-india" element={
                  <ErrorBoundary>
                    <StartupIndia />
                  </ErrorBoundary>
                } />
                <Route path="/services/import-export-code" element={
                  <ErrorBoundary>
                    <ImportExportCode />
                  </ErrorBoundary>
                } />
                <Route path="/services/gst-registration" element={
                  <ErrorBoundary>
                    <GSTRegistration />
                  </ErrorBoundary>
                } />
                <Route path="/services/trademark-registration" element={
                  <ErrorBoundary>
                    <TrademarkRegistration />
                  </ErrorBoundary>
                } />
                <Route path="/services/tax-filing" element={
                  <ErrorBoundary>
                    <TaxFilingServices />
                  </ErrorBoundary>
                } />
                <Route path="/services/legal-documents" element={
                  <ErrorBoundary>
                    <LegalDocuments />
                  </ErrorBoundary>
                } />
                <Route path="/services/ipr-services" element={
                  <ErrorBoundary>
                    <IPRServices />
                  </ErrorBoundary>
                } />
                <Route path="/services/financial-compliance" element={
                  <ErrorBoundary>
                    <FinancialCompliance />
                  </ErrorBoundary>
                } />
                <Route path="/services/hr-payroll-compliance" element={
                  <ErrorBoundary>
                    <HRPayrollCompliance />
                  </ErrorBoundary>
                } />
                
                <Route path="*" element={
                  <ErrorBoundary>
                    <NotFound />
                  </ErrorBoundary>
                } />
              </Routes>
            </Suspense>
            <Toaster position="top-right" richColors />
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
