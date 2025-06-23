import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

// Templates
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";

export default function VerifyCertificate() {
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  const templateMap = {
    template1: Template1,
    template2: Template2,
    template3: Template3,
  };

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const q = query(collection(db, "interns"), where("certId", "==", id));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          data.certLink = window.location.href; // attach cert link for QR
          setCertificate(data);
        } else {
          setCertificate(null);
        }
      } catch (err) {
        console.error(err);
        setCertificate(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [id]);

  const handlePrint = () => {
    const printContents = document.getElementById("certificate-container").innerHTML;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Certificate Print</title>
          <style>
            @page { size: A4 landscape; margin: 0; }
            body { margin: 0; font-family: serif; }
          </style>
        </head>
        <body>${printContents}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center text-lg font-medium text-slate-600">Verifying certificate...</div>
      </div>
    );
  }

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600">Certificate Not Found</h2>
          <p className="text-red-500 mt-2">Invalid certificate ID: {id}</p>
        </div>
      </div>
    );
  }

  const SelectedTemplate = templateMap[certificate.template];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 py-10">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-slate-800">Certificate Verification</h1>
        <p className="text-slate-600">This certificate is verified and authentic</p>
      </div>

      <div id="certificate-container" className="flex justify-center px-4">
        {SelectedTemplate ? (
          <SelectedTemplate data={certificate} verificationUrl={window.location.href} />
        ) : (
          <p className="text-red-500">No template selected for rendering</p>
        )}
      </div>

      <div className="text-center mt-6 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 shadow"
        >
          🖨️ Print Certificate
        </button>
      </div>
    </div>
  );
}
