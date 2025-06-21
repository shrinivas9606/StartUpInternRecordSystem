import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import QRCode from "react-qr-code";

// Import template components
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3"; // ✅ Add this

export default function VerifyCertificate() {
  const { id } = useParams(); // certId from URL
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  // Template mapping
  const templateMap = {
    template1: Template1,
    template2: Template2,
    template3: Template3, // ✅ Map here
  };

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const q = query(collection(db, "interns"), where("certId", "==", id));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          setCertificate(snapshot.docs[0].data());
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

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (!certificate)
    return <div className="text-center mt-10 text-red-500">❌ Invalid Certificate ID</div>;

  const SelectedTemplate = templateMap[certificate.template];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-xl font-bold text-center mb-6">✅ Certificate Verified</h2>

      <div className="bg-white p-4 shadow rounded">
        {SelectedTemplate ? (
          <SelectedTemplate data={certificate} />
        ) : (
          <p className="text-red-600">No template found.</p>
        )}
      </div>

      <div className="mt-6 text-center">
        <QRCode value={window.location.href} />
        <p className="text-sm mt-2 text-gray-600">Scan to verify</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => window.print()}
        >
          🖨️ Print Certificate
        </button>
      </div>
    </div>
  );
}
