import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <div className="p-4 text-center">🔒 Checking authentication...</div>;
  }

  if (!user) {
    // Redirect to login, preserve the route user was trying to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
