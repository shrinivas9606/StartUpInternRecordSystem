import React from "react";

export default function Template1({ data }) {
  return (
    <div className="border p-10 w-full h-[700px] bg-white font-serif relative text-center">

      {/* Company Logo */}
      {data.companyLogo && (
        <img
          src={data.companyLogo}
          alt="Company Logo"
          className="h-20 mx-auto mb-4"
        />
      )}

      <h1 className="text-3xl font-bold">Certificate of Internship</h1>
      <p className="mt-6 text-xl">This certifies that</p>
      <h2 className="text-2xl font-semibold mt-2">{data.name}</h2>
      <p className="mt-2 text-lg">
        has successfully completed internship in <strong>{data.domain}</strong>
      </p>
      <p className="mt-2">Duration: {data.startDate} to {data.endDate}</p>

      {/* Signatures and Names */}
      <div className="absolute bottom-20 left-10 text-center">
        {data.supervisorSign && (
          <img src={data.supervisorSign} alt="Supervisor Sign" className="h-16 mx-auto" />
        )}
        <p className="mt-2 font-medium">{data.supervisorName || "Supervisor"}</p>
        <p className="text-sm">Supervisor</p>
      </div>

      <div className="absolute bottom-20 right-10 text-center">
        {data.ceoSign && (
          <img src={data.ceoSign} alt="CEO Sign" className="h-16 mx-auto" />
        )}
        <p className="mt-2 font-medium">{data.ceoName || "CEO"}</p>
        <p className="text-sm">CEO</p>
      </div>
    </div>
  );
}
