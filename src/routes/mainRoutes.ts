
import { lazy } from 'react';
import { RouteConfig } from './routeTypes';

const mainRoutes: RouteConfig[] = [
  { 
    path: "/", 
    component: lazy(() => import(/* webpackChunkName: "home" */ '../pages/Index'))
  },
  { 
    path: "/auth", 
    component: lazy(() => import(/* webpackChunkName: "auth" */ '../pages/AuthPage'))
  },
  { 
    path: "/reset-password", 
    component: lazy(() => import(/* webpackChunkName: "reset-password" */ '../pages/ResetPasswordPage'))
  },
  { 
    path: "/dashboard/*", 
    component: lazy(() => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard'))
  },
  { 
    path: "*", 
    component: lazy(() => import(/* webpackChunkName: "not-found" */ '../pages/NotFound'))
  },
];

export default mainRoutes;
