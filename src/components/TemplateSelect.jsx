// src/components/TemplateSelect.jsx

import React from "react";

export default function TemplateSelect({ selectedTemplate, onSelect }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">Select Certificate Template:</label>
      <select
        value={selectedTemplate}
        onChange={(e) => onSelect(e.target.value)} // ✅ Changed from onChange to onSelect
        className="border p-2 w-full rounded"
      >
        <option value="">-- Select Template --</option>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
        <option value="template3">Template 3</option>
      </select>
    </div>
  );
}
