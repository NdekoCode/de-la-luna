import React from "react";
import { Navigate } from "react-router-dom";

const RedirectAuthenticated = ({ children }) => {
  {
    /* Quand l'utilisateur sera connecter on utilisera */
  }
  const userIsAuthenticated = false;
  return userIsAuthenticated ? <Navigate to="/" replace /> : children;
};

export default RedirectAuthenticated;
