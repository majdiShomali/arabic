import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="333455483546-th3a57g0225dll5rmadtsoaqctamb1u5.apps.googleusercontent.com">
  <React.StrictMode>
      <App />
  </React.StrictMode>
</GoogleOAuthProvider>
);

