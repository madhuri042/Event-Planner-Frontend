import React from "react";
import { Navigate } from "react-router-dom";

// Props:
// - isAuthenticated (boolean): true if user logged in
// - children: component(s) to render if authenticated
const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // User not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
