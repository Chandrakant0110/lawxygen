
import { lazy } from 'react';
import { RouteConfig } from './routeTypes';

// Service related pages
const serviceRoutes: RouteConfig[] = [
  { 
    path: "/", 
    component: lazy(() => import(/* webpackChunkName: "home" */ '../pages/Index'))
  },
  { 
    path: "/services", 
    component: lazy(() => import(/* webpackChunkName: "service-pages" */ '../pages/ServiceListPage'))
  },
  { 
    path: "/services/:category", 
    component: lazy(() => import(/* webpackChunkName: "service-pages" */ '../pages/ServiceCategoryPage'))
  },
  { 
    path: "/service/:id", 
    component: lazy(() => import(/* webpackChunkName: "service-pages" */ '../pages/ServicePage'))
  },
  { 
    path: "/category/:category", 
    component: lazy(() => import(/* webpackChunkName: "service-pages" */ '../pages/ServiceCategoryPage'))
  },
  { 
    path: "/search", 
    component: lazy(() => import(/* webpackChunkName: "search" */ '../pages/SearchResults'))
  },
  // Add service detail routes directly here to simplify the routing structure
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
    path: "/services/trademark-registration",
    component: lazy(() => import(/* webpackChunkName: "ipr" */ '../pages/services/TrademarkRegistration'))
  },
  {
    path: "/services/gst-registration",
    component: lazy(() => import(/* webpackChunkName: "tax" */ '../pages/services/GSTRegistration'))
  },
  { 
    path: "*", 
    component: lazy(() => import(/* webpackChunkName: "not-found" */ '../pages/NotFound'))
  },
];

export default serviceRoutes;
