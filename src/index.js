// scroll bar
import React from 'react';

import ReactDOM from 'react-dom';
import 'simplebar/src/simplebar.css';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './core/context/Store';
import {AuthProvider}  from './core/hooks/useAuth';
import { NotificationsProvider } from '@mantine/notifications';

// ----------------------------------------------------------------------

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <NotificationsProvider position="top-right" zIndex={2077}>
        <AppProvider>
          <HelmetProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </HelmetProvider>
        </AppProvider>
      </NotificationsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
