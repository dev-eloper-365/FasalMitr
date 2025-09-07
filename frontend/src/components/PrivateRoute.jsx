// AUTHENTICATION COMMENTED OUT - PrivateRoute component disabled
/*
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
*/

// Placeholder component since auth is disabled - always allows access
import React from "react";

const PrivateRoute = ({ children }) => {
  return children; // Always allow access since auth is disabled
};

export default PrivateRoute;