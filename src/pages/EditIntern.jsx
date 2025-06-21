import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function EditIntern() {
  const [interns, setInterns] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState({
    name: "",
    domain: "",
    startDate: "",
    endDate: "",
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchInterns = async () => {
      const snapshot = await getDocs(collection(db, "interns"));
      const internList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setInterns(internList);
    };
    fetchInterns();
  }, []);

  const handleSelect = (e) => {
    const intern = interns.find((i) => i.id === e.target.value);
    setSelectedId(intern.id);
    setForm({
      name: intern.name,
      domain: intern.domain,
      startDate: intern.startDate,
      endDate: intern.endDate,
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedId) return alert("Please select an intern.");

    await updateDoc(doc(db, "interns", selectedId), {
      ...form,
    });

    setSuccess(true);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Edit Intern</h2>

      <select
        className="w-full p-2 border rounded mb-4"
        onChange={handleSelect}
        defaultValue=""
      >
        <option value="" disabled>Select an intern</option>
        {interns.map((i) => (
          <option key={i.id} value={i.id}>
            {i.name} - {i.domain}
          </option>
        ))}
      </select>

      {selectedId && (
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            name="name"
            placeholder="Intern Name"
            className="w-full p-2 border rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="domain"
            placeholder="Domain"
            className="w-full p-2 border rounded"
            value={form.domain}
            onChange={handleChange}
            required
          />
          <div className="flex gap-4">
            <input
              type="date"
              name="startDate"
              className="w-full p-2 border rounded"
              value={form.startDate}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="endDate"
              className="w-full p-2 border rounded"
              value={form.endDate}
              onChange={handleChange}
              required
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
            Update Intern
          </button>

          {success && <p className="text-green-600">✅ Intern updated successfully!</p>}
        </form>
      )}
    </div>
  );
}
