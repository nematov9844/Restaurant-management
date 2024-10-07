// components/Auth/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

// AuthContext yaratish
const AuthContext = createContext();

// AuthProvider komponenti
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Foydalanuvchi holati

  const login = () => setIsAuthenticated(true); // Tizimga kirish
  const logout = () => setIsAuthenticated(false); // Tizimdan chiqish

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth xooki
export const useAuth = () => useContext(AuthContext);
