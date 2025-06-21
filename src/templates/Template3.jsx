import React from "react";

export default function Template3({ data }) {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border-4 border-yellow-400 font-serif text-center">
      <h1 className="text-4xl font-bold text-yellow-600 mb-6 uppercase tracking-wide">
        Certificate of Completion
      </h1>

      <p className="text-gray-700 text-lg mb-2">This is proudly presented to</p>

      <h2 className="text-3xl font-extrabold text-black mb-2 underline decoration-yellow-400">
        {data.name}
      </h2>

      <p className="text-gray-700 text-lg mb-4">
        For successfully completing an internship in
        <span className="text-yellow-600 font-semibold"> {data.domain}</span>
      </p>

      <p className="text-sm text-gray-600">
        Duration: <span className="font-medium">{data.startDate} to {data.endDate}</span>
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Supervisor</p>
          <div className="border-t border-gray-400 mt-6 w-3/4 mx-auto"></div>
          <p className="text-sm text-gray-600 mt-1">[Supervisor Name]</p>
        </div>
        <div>
          <p className="font-semibold">CEO</p>
          <div className="border-t border-gray-400 mt-6 w-3/4 mx-auto"></div>
          <p className="text-sm text-gray-600 mt-1">[CEO Name]</p>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-400">Certificate ID: {data.certId}</p>
    </div>
  );
}
