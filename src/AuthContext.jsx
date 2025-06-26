// src/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebaseConfig'; // Make sure this path is correct for your Firebase config file
import { onAuthStateChanged, signOut } from 'firebase/auth';

// 1. Create the Auth Context
const AuthContext = createContext(null);

// 2. Custom hook to easily consume the auth context in any component
export const useAuth = () => {
  return useContext(AuthContext);
};

// 3. The AuthProvider component that will wrap your entire application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores the Firebase user object (null if logged out)
  const [loading, setLoading] = useState(true); // True while Firebase is checking auth state

  useEffect(() => {
    // This Firebase listener automatically runs when the auth state changes (login, logout, session restored)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state
      setLoading(false);    // Authentication state has been determined
    });

    // Cleanup subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount

  // A convenient function to log out the user
  const logout = () => {
    signOut(auth);
  };

  // The value that will be provided to any component that uses `useAuth()`
  const value = {
    user,
    loading,
    logout,
    isAuthenticated: !!user // A boolean: true if a user object exists (logged in)
  };

  // Render children only after the authentication state has been determined
  // This prevents flickering or showing incorrect state before Firebase loads
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* Optionally, you could show a loading spinner here: {loading ? <LoadingSpinner /> : children} */}
    </AuthContext.Provider>
  );
};