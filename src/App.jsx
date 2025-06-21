import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AddIntern from "./pages/AddIntern";
import EditIntern from "./pages/EditIntern";
import VerifyCertificate from "./pages/VerifyCertificate";
import InternList from "./pages/InternList";
import TemplatePage from "./pages/TemplatePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:id" element={<VerifyCertificate />} />
        <Route path="/template" element={<TemplatePage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-intern"
          element={
            <PrivateRoute>
              <AddIntern />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <PrivateRoute>
              <EditIntern />
            </PrivateRoute>
          }
        />
        <Route
          path="/previous"
          element={
            <PrivateRoute>
              <InternList />
            </PrivateRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
