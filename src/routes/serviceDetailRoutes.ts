
import { lazy } from 'react';
import { RouteConfig } from './routeTypes';

// Service-specific pages
const serviceDetailRoutes: RouteConfig[] = [
  {
    path: "/services/private-limited-company",
    component: lazy(() => import(/* webpackChunkName: "business-setup" */ '../pages/services/PrivateLimitedCompany'))
  },
  {
    path: "/services/llp-registration",
    component: lazy(() => import(/* webpackChunkName: "business-setup" */ '../pages/services/LLPRegistration'))
  },
  {
    path: "/services/opc-registration",
    component: lazy(() => import(/* webpackChunkName: "business-setup" */ '../pages/services/OPCRegistration'))
  },
  {
    path: "/services/sole-proprietorship",
    component: lazy(() => import(/* webpackChunkName: "business-setup" */ '../pages/services/SoleProprietorship'))
  },
  {
    path: "/services/partnership-firm",
    component: lazy(() => import(/* webpackChunkName: "business-setup" */ '../pages/services/PartnershipFirm'))
  },
  {
    path: "/services/section-8-company",
    component: lazy(() => import(/* webpackChunkName: "business-setup" */ '../pages/services/Section8Company'))
  },
  {
    path: "/services/nidhi-company",
    component: lazy(() => import(/* webpackChunkName: "business-setup" */ '../pages/services/NidhiCompany'))
  },
  {
    path: "/services/producer-company",
    component: lazy(() => import(/* webpackChunkName: "business-setup" */ '../pages/services/ProducerCompany'))
  },
  {
    path: "/services/startup-india",
    component: lazy(() => import(/* webpackChunkName: "business-setup" */ '../pages/services/StartupIndia'))
  },
  {
    path: "/services/import-export-code",
    component: lazy(() => import(/* webpackChunkName: "licenses" */ '../pages/services/ImportExportCode'))
  },
  {
    path: "/services/gst-registration",
    component: lazy(() => import(/* webpackChunkName: "tax" */ '../pages/services/GSTRegistration'))
  },
  {
    path: "/services/trademark-registration",
    component: lazy(() => import(/* webpackChunkName: "ipr" */ '../pages/services/TrademarkRegistration'))
  },
  {
    path: "/services/tax-filing",
    component: lazy(() => import(/* webpackChunkName: "tax" */ '../pages/services/TaxFilingServices'))
  },
  {
    path: "/services/legal-documents",
    component: lazy(() => import(/* webpackChunkName: "legal" */ '../pages/services/LegalDocuments'))
  },
  {
    path: "/services/ipr-services",
    component: lazy(() => import(/* webpackChunkName: "ipr" */ '../pages/services/IPRServices'))
  },
  {
    path: "/services/financial-compliance",
    component: lazy(() => import(/* webpackChunkName: "compliance" */ '../pages/services/FinancialCompliance'))
  },
  {
    path: "/services/hr-payroll-compliance",
    component: lazy(() => import(/* webpackChunkName: "compliance" */ '../pages/services/HRPayrollCompliance'))
  },
];

export default serviceDetailRoutes;
