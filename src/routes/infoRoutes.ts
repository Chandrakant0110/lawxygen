
import { lazy } from 'react';
import { RouteConfig } from './routeTypes';

// Group similar pages
const infoRoutes: RouteConfig[] = [
  { 
    path: "/about", 
    component: lazy(() => import(/* webpackChunkName: "info-pages" */ '../pages/AboutPage'))
  },
  { 
    path: "/contact", 
    component: lazy(() => import(/* webpackChunkName: "info-pages" */ '../pages/ContactPage'))
  },
  { 
    path: "/privacy", 
    component: lazy(() => import(/* webpackChunkName: "info-pages" */ '../pages/PrivacyPage'))
  },
  { 
    path: "/terms", 
    component: lazy(() => import(/* webpackChunkName: "info-pages" */ '../pages/TermsPage'))
  },
  { 
    path: "/legal", 
    component: lazy(() => import(/* webpackChunkName: "info-pages" */ '../pages/LegalPage'))
  },
  { 
    path: "/faq", 
    component: lazy(() => import(/* webpackChunkName: "info-pages" */ '../pages/FAQPage'))
  },
  { 
    path: "/blog", 
    component: lazy(() => import(/* webpackChunkName: "info-pages" */ '../pages/BlogPage'))
  },
];

export default infoRoutes;
