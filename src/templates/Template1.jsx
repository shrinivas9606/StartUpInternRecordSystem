// src/templates/Template1.jsx
import React from "react";

export default function Template1({ data }) {
  return (
    <div className="border p-10 w-full h-[700px] bg-white font-serif relative text-center">
      <h1 className="text-3xl font-bold">Certificate of Internship</h1>
      <p className="mt-6 text-xl">This certifies that</p>
      <h2 className="text-2xl font-semibold mt-2">{data.name}</h2>
      <p className="mt-2 text-lg">
        has successfully completed internship in <strong>{data.domain}</strong>
      </p>
      <p className="mt-2">Duration: {data.startDate} to {data.endDate}</p>

      <div className="absolute bottom-10 left-10 text-sm">
        Supervisor: <strong>{data.supervisor || "Name Here"}</strong>
      </div>
      <div className="absolute bottom-10 right-10 text-sm">
        CEO: <strong>{data.ceo || "Name Here"}</strong>
      </div>
    </div>
  );
}
