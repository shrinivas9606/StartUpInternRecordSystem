// ✅ FILE: src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome, Admin 👋</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <button
          onClick={() => navigate("/add-intern")}
          className="bg-blue-600 text-white p-4 rounded shadow"
        >
          ➕ Add Intern
        </button>
        <button
          onClick={() => navigate("/edit")}
          className="bg-yellow-500 text-white p-4 rounded shadow"
        >
          ✏️ Edit Intern
        </button>
        <button
          onClick={() => navigate("/previous")}
          className="bg-indigo-600 text-white p-4 rounded shadow"
        >
          📋 Previous Interns
        </button>
        <button
          onClick={() => navigate("/template")}
          className="bg-green-600 text-white p-4 rounded shadow"
        >
          📄 Choose Certificate Template
        </button>
      </div>
    </div>
  );
}
