
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { mainRoutes, infoRoutes } from '@/routes';
import EnhancedLoadingSpinner from '@/components/common/EnhancedLoadingSpinner';
import ErrorBoundary from '@/components/common/ErrorBoundary';

// Create a lightweight loading component for pages
const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <EnhancedLoadingSpinner size="large" message="Loading page..." />
  </div>
);

const AppRoutes: React.FC = () => {
  // Combine all routes for rendering
  const allRoutes = [
    ...mainRoutes,
    ...infoRoutes,
  ];
  
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {allRoutes.map((route) => (
          <Route 
            key={route.path}
            path={route.path}
            element={
              <ErrorBoundary>
                <route.component />
              </ErrorBoundary>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
