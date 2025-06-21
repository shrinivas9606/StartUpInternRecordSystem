// import React, { useState, useEffect } from "react";
// import { database } from "../firebase";
// import { ref, set, get } from "firebase/database";
// import template1 from "../assets/template1.png"; // Add your template images
// import template2 from "../assets/template2.png";

// export default function TemplateSelection() {
//   const [selectedTemplate, setSelectedTemplate] = useState("");
//   const [savedTemplate, setSavedTemplate] = useState("");

//   useEffect(() => {
//     const fetchTemplate = async () => {
//       const snapshot = await get(ref(database, "settings/defaultTemplate"));
//       if (snapshot.exists()) {
//         setSavedTemplate(snapshot.val());
//         setSelectedTemplate(snapshot.val());
//       }
//     };
//     fetchTemplate();
//   }, []);

//   const handleSelect = (templateId) => {
//     setSelectedTemplate(templateId);
//   };

//   const handleSave = async () => {
//     await set(ref(database, "settings/defaultTemplate"), selectedTemplate);
//     alert("Default template saved!");
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Select Certificate Template</h2>
//       <div className="grid grid-cols-2 gap-4">
//         <div
//           onClick={() => handleSelect("template1")}
//           className={`border p-4 rounded cursor-pointer ${
//             selectedTemplate === "template1" ? "border-blue-500" : ""
//           }`}
//         >
//           <img src={template1} alt="Template 1" className="w-full" />
//           <p className="text-center mt-2">Template 1</p>
//         </div>
//         <div
//           onClick={() => handleSelect("template2")}
//           className={`border p-4 rounded cursor-pointer ${
//             selectedTemplate === "template2" ? "border-blue-500" : ""
//           }`}
//         >
//           <img src={template2} alt="Template 2" className="w-full" />
//           <p className="text-center mt-2">Template 2</p>
//         </div>
//       </div>

//       <button
//         onClick={handleSave}
//         className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Save Template
//       </button>

//       {savedTemplate && (
//         <p className="mt-2 text-green-600">
//           Current Default Template: <strong>{savedTemplate}</strong>
//         </p>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase"; // your firestore instance

export default function TemplateSelect({ onSelect }) {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const querySnapshot = await getDocs(collection(database, "templates"));
      const templatesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTemplates(templatesList);
    };
    fetchTemplates();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <div key={template.id} className="border p-2">
          <img src={template.imageURL} alt={template.name} className="w-full h-40 object-cover" />
          <button
            className="bg-blue-500 text-white mt-2 px-4 py-1 rounded"
            onClick={() => onSelect(template)}
          >
            Use This
          </button>
        </div>
      ))}
    </div>
  );
}
