
import { ComponentType, LazyExoticComponent } from 'react';

export interface RouteConfig {
  path: string;
  component: LazyExoticComponent<ComponentType<any>>;
  exact?: boolean;
}

export interface RouteGroup {
  name: string;
  routes: RouteConfig[];
}
