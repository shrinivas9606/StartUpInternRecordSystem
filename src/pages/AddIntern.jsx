import React, { useState } from "react";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from "uuid";
import TemplateSelect from "../components/TemplateSelect"; // ✅ ensure this is not commented

export default function AddIntern() {
  const [intern, setIntern] = useState({
    name: "",
    domain: "",
    startDate: "",
    endDate: "",
    supervisorName: "",
    ceoName: "",
  });
  const [companyLogo, setCompanyLogo] = useState("");
  const [supervisorSign, setSupervisorSign] = useState("");
  const [ceoSign, setCeoSign] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [qrValue, setQrValue] = useState("");
  const [generatedId, setGeneratedId] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setIntern({ ...intern, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e, setter) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setter(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTemplate) return alert("Please select a certificate template.");

    const certId = uuidv4();
    const certLink = `${window.location.origin}/verify/${certId}`;

    setQrValue(certLink);
    setGeneratedId(certId);

    await setDoc(doc(db, "interns", certId), {
      ...intern,
      certId,
      certLink,
      template: selectedTemplate,
      companyLogo,
      supervisorSign,
      ceoSign,
      createdAt: Timestamp.now(),
    });

    setSuccess(true);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Add New Intern</h2>

      {success ? (
        <div className="bg-green-100 p-4 rounded">
          ✅ Intern added successfully!
          <br />
          🔗 Certificate link:{" "}
          <a className="text-blue-600" href={qrValue} target="_blank" rel="noreferrer">
            {qrValue}
          </a>
          <br />
          📎 QR Code:
          <div className="mt-2">
            <QRCode value={qrValue} />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Intern Name"
            className="w-full p-2 border rounded"
            value={intern.name}
            onChange={handleChange}
            required
          />
          <input
            name="domain"
            placeholder="Domain"
            className="w-full p-2 border rounded"
            value={intern.domain}
            onChange={handleChange}
            required
          />
          <div className="flex gap-4">
            <input
              type="date"
              name="startDate"
              className="p-2 border rounded w-full"
              value={intern.startDate}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="endDate"
              className="p-2 border rounded w-full"
              value={intern.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="supervisorName"
            placeholder="Supervisor Name"
            className="w-full p-2 border rounded"
            value={intern.supervisorName}
            onChange={handleChange}
            required
          />
          <input
            name="ceoName"
            placeholder="CEO Name"
            className="w-full p-2 border rounded"
            value={intern.ceoName}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block font-semibold mt-4">Company Logo</label>
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setCompanyLogo)} />

            <label className="block font-semibold mt-4">Supervisor Signature</label>
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setSupervisorSign)} />

            <label className="block font-semibold mt-4">CEO Signature</label>
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setCeoSign)} />
          </div>

          <div>
            <h3 className="font-semibold mt-4 mb-2">Select Certificate Template</h3>
            <TemplateSelect onSelect={(template) => setSelectedTemplate(template)} />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
            Add Intern
          </button>
        </form>
      )}
    </div>
  );
}
