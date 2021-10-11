import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Helpers from './core/func/Helpers';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import SampleNDVI from './pages/SampleNDVI';
import NDVIindex from './pages/NDVIindex';
import NotFound from './pages/Page404';
import { useAuth } from './core/hooks/useAuth';


// ----------------------------------------------------------------------

export default function Router() {
  const { user } = useAuth();
  Helpers.loadUserInStore(user);
  return useRoutes( user !== null && user?.refresh_token !== '' ? [
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'ndviindex', element: <NDVIindex /> },
        { path: 'samplendvi', element: <SampleNDVI /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element:  <Navigate to="/dashboard/app" replace /> },
        { path: 'register', element:  <Navigate to="/dashboard/app" replace />  },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/dashboard" replace /> }
  ]: 
  [
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/login" /> },
        { path: '*', element: <Navigate to="/login" /> }
      ]
    },
    { path: '*', element: <Navigate to="/login" replace /> }
   ]
  );

  
}
