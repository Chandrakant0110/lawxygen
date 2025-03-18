
import { lazy } from 'react';
import { RouteConfig } from './routeTypes';

// Service related pages
const serviceRoutes: RouteConfig[] = [
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
    path: "/find-lawyer", 
    component: lazy(() => import(/* webpackChunkName: "professional-pages" */ '../pages/FindLawyer'))
  },
  { 
    path: "/find-professional", 
    component: lazy(() => import(/* webpackChunkName: "professional-pages" */ '../pages/FindProfessional'))
  },
  { 
    path: "/search", 
    component: lazy(() => import(/* webpackChunkName: "search" */ '../pages/SearchResults'))
  },
];

export default serviceRoutes;
