import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function InternList() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchInterns = async () => {
    const querySnapshot = await getDocs(collection(db, "interns"));
    const internData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setInterns(internData);
    setLoading(false);
  };

  useEffect(() => {
    fetchInterns();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this intern?");
    if (!confirm) return;
    try {
      await deleteDoc(doc(db, "interns", id));
      fetchInterns(); // Refresh the list
    } catch (error) {
      console.error("Error deleting intern:", error);
      alert("Failed to delete. Try again.");
    }
  };

  if (loading) return <div className="text-center mt-10">Loading Interns...</div>;

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">📋 Intern List</h2>
      <table className="w-full border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Domain</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Certificate</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((intern) => (
            <tr key={intern.id}>
              <td className="p-2 border">{intern.name}</td>
              <td className="p-2 border">{intern.domain}</td>
              <td className="p-2 border">
                {intern.startDate} to {intern.endDate}
              </td>
              <td className="p-2 border">
                {intern.certId ? (
                  <button
                    onClick={() => navigate(`/verify/${intern.certId}`)}
                    className="text-blue-600 underline"
                  >
                    View
                  </button>
                ) : (
                  <span className="text-gray-500 italic">No Certificate</span>
                )}
              </td>
              <td className="p-2 border text-red-600">
                <button onClick={() => handleDelete(intern.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
