import React from "react";

export default function Template2({ data }) {
  return (
    <div className="border-2 border-blue-500 p-10 text-center rounded shadow bg-white">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Certificate of Internship</h1>
      <p className="text-gray-700 text-lg">This is to certify that</p>
      <h2 className="text-2xl font-semibold my-2">{data.name}</h2>
      <p className="text-gray-700 text-lg">
        has successfully completed an internship in the domain of{" "}
        <strong>{data.domain}</strong>
      </p>
      <p className="mt-2 text-gray-700">
        Duration: {data.startDate} to {data.endDate}
      </p>
      <div className="mt-6 flex justify-between text-sm text-gray-600">
        <div>
          <p>Supervisor</p>
          <p>____________</p>
        </div>
        <div>
          <p>CEO</p>
          <p>____________</p>
        </div>
      </div>
    </div>
  );
}
