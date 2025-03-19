
import { lazy } from "react";
import { RouteConfig } from "./routeTypes";

const Index = lazy(() => import("../pages/Index"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const SearchResults = lazy(() => import("../pages/SearchResults"));
const ServicePage = lazy(() => import("../pages/ServicePage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const FAQPage = lazy(() => import("../pages/FAQPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const FindProfessional = lazy(() => import("../pages/FindProfessional"));
const AuthPage = lazy(() => import("../pages/AuthPage"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPasswordPage"));

const mainRoutes: RouteConfig[] = [
  {
    path: "/",
    component: Index,
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/search-results",
    component: SearchResults,
  },
  {
    path: "/service/:id",
    component: ServicePage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/faq",
    component: FAQPage,
  },
  {
    path: "/find-professional",
    component: FindProfessional,
  },
  {
    path: "/auth",
    component: AuthPage,
  },
  {
    path: "/reset-password",
    component: ResetPasswordPage,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default mainRoutes;
