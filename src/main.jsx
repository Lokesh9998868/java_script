// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// THIS IS THE CRUCIAL LINE:
import { AuthProvider } from './AuthContext'; // <--- Make sure it imports from './AuthContext'
import './index.css'; // Your CSS import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the App component with AuthProvider here */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);