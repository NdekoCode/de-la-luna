import React from "react";
import { Navigate } from "react-router-dom";

const AuthenticatedRoutes = ({ children }) => {
  const userIsAuthenticated = true;
  {
    /* Quand l'utilisateur sera connecter on utilisera */
  }
  return userIsAuthenticated ? children : <Navigate to="/login" replace />;
};

export default AuthenticatedRoutes;
