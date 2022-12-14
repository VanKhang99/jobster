import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, user }) {
  if (!user) {
    return <Navigate to="/landing" />;
  }

  return children;
}

export default ProtectedRoute;
