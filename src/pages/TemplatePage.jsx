// src/pages/TemplatePage.jsx

import React from "react";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";

export default function TemplatePage() {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">📄 Choose Certificate Template</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2 text-center">Template 1</h3>
          <img src={template1} alt="Template 1" className="w-full rounded" />
        </div>
        <div className="border rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2 text-center">Template 2</h3>
          <img src={template2} alt="Template 2" className="w-full rounded" />
        </div>
      </div>
    </div>
  );
}
