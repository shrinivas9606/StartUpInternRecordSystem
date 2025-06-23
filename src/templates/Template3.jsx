// import React from "react";

// export default function Template3({ data }) {
//   return (
//     <div className="bg-white p-10 rounded-xl shadow-lg border-4 border-yellow-400 font-serif text-center">
//       <h1 className="text-4xl font-bold text-yellow-600 mb-6 uppercase tracking-wide">
//         Certificate of Completion
//       </h1>

//       <p className="text-gray-700 text-lg mb-2">This is proudly presented to</p>

//       <h2 className="text-3xl font-extrabold text-black mb-2 underline decoration-yellow-400">
//         {data.name}
//       </h2>

//       <p className="text-gray-700 text-lg mb-4">
//         For successfully completing an internship in
//         <span className="text-yellow-600 font-semibold"> {data.domain}</span>
//       </p>

//       <p className="text-sm text-gray-600">
//         Duration: <span className="font-medium">{data.startDate} to {data.endDate}</span>
//       </p>

//       <div className="mt-10 grid grid-cols-2 gap-4">
//         <div>
//           <p className="font-semibold">Supervisor</p>
//           <div className="border-t border-gray-400 mt-6 w-3/4 mx-auto"></div>
//           <p className="text-sm text-gray-600 mt-1">[Supervisor Name]</p>
//         </div>
//         <div>
//           <p className="font-semibold">CEO</p>
//           <div className="border-t border-gray-400 mt-6 w-3/4 mx-auto"></div>
//           <p className="text-sm text-gray-600 mt-1">[CEO Name]</p>
//         </div>
//       </div>

//       <p className="mt-8 text-xs text-gray-400">Certificate ID: {data.certId}</p>
//     </div>
//   );
// }






import React from "react";

export default function Template3({ data = {
  name: "John Doe",
  domain: "Web Development",
  startDate: "January 1, 2024",
  endDate: "March 31, 2024",
  certId: "CERT-2024-001"
}}) {
  // Generate QR code URL with certificate data
  const qrData = `Certificate ID: ${data.certId}, Name: ${data.name}, Domain: ${data.domain}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(qrData)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        {/* Main Certificate Container */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400 via-transparent to-amber-400"></div>
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), 
                                 radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 40% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`
              }}
            ></div>
          </div>

          {/* Golden Border Frame */}
          <div className="absolute inset-4 border-4 border-double border-amber-400 rounded-xl pointer-events-none"></div>
          <div className="absolute inset-6 border border-amber-300 rounded-lg pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
            {/* Header Ornament */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-wide">
              CERTIFICATE
            </h1>
            <div className="w-32 sm:w-40 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6 sm:mb-8"></div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 mb-8 sm:mb-10 uppercase tracking-widest">
              Of Excellence
            </h2>

            {/* Award Text */}
            <p className="text-lg sm:text-xl text-slate-600 mb-4 font-light">
              This certificate is proudly presented to
            </p>

            {/* Name */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 relative">
                {data.name}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </h3>
            </div>

            {/* Achievement */}
            <p className="text-lg sm:text-xl text-slate-600 mb-2 leading-relaxed max-w-3xl mx-auto">
              For successfully completing an intensive internship program in
            </p>
            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-6 sm:mb-8">
              {data.domain}
            </p>

            {/* QR Code Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-8 sm:mb-10">
              {/* Duration */}
              <div className="text-center sm:text-left">
                <p className="text-slate-600 text-sm sm:text-base mb-1">Program Duration</p>
                <p className="font-semibold text-slate-800 text-base sm:text-lg">
                  {data.startDate}
                </p>
                <div className="w-12 h-px bg-slate-300 mx-auto sm:mx-0 my-2"></div>
                <p className="font-semibold text-slate-800 text-base sm:text-lg">
                  {data.endDate}
                </p>
              </div>

              {/* QR Code */}
              <div className="flex-shrink-0">
                <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-amber-200">
                  <img 
                    src={qrCodeUrl} 
                    alt="Certificate QR Code"
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2 text-center">Verify Certificate</p>
              </div>

              {/* Certificate ID */}
              <div className="text-center sm:text-right">
                <p className="text-slate-600 text-sm sm:text-base mb-1">Certificate ID</p>
                <p className="font-mono font-semibold text-slate-800 text-base sm:text-lg bg-slate-50 px-3 py-1 rounded border">
                  {data.certId}
                </p>
              </div>
            </div>

            {/* Signatures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="text-center">
                <div className="mb-4">
                  <p className="text-slate-600 text-sm sm:text-base mb-3">Program Supervisor</p>
                  <div className="w-40 sm:w-48 h-px bg-slate-400 mx-auto mb-2"></div>
                  <p className="text-slate-800 font-medium text-sm sm:text-base">Dr. Sarah Johnson</p>
                  <p className="text-slate-500 text-xs sm:text-sm">Lead Supervisor</p>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <p className="text-slate-600 text-sm sm:text-base mb-3">Chief Executive Officer</p>
                  <div className="w-40 sm:w-48 h-px bg-slate-400 mx-auto mb-2"></div>
                  <p className="text-slate-800 font-medium text-sm sm:text-base">Michael Chen</p>
                  <p className="text-slate-500 text-xs sm:text-sm">CEO & Founder</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 pt-6">
              <p className="text-slate-400 text-xs sm:text-sm">
                Issued on {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-amber-400 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-amber-400 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-amber-400 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-amber-400 rounded-br-lg"></div>
        </div>
      </div>
    </div>
  );
}