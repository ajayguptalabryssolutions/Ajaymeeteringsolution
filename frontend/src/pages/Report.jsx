// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import autoTable from 'jspdf-autotable';
// const Report = () => {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [meterType, setMeterType] = useState('EB');
//   const [reportData, setReportData] = useState([]);

//   const handleGenerateReport = () => {
//     // Replace with real API
//     const dummyData = [
//       { date: '2025-07-14', type: meterType, kwh: 120.4, voltage: 220, current: 5.2 },
//       { date: '2025-07-15', type: meterType, kwh: 135.6, voltage: 222, current: 5.0 },
//     ];
//     setReportData(dummyData);
//   };

//   const exportToCSV = () => {
//     const headers = "Date,Meter Type,kWh,Voltage,Current\n";
//     const rows = reportData.map(r => `${r.date},${r.type},${r.kwh},${r.voltage},${r.current}`).join("\n");
//     const csv = headers + rows;
//     const blob = new Blob([csv], { type: "text/csv" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "meter-report.csv";
//     link.click();
//   };

//   const exportToPDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text('Metering Report', 14, 15);

//     const tableColumn = ['Date', 'Meter Type', 'kWh', 'Voltage', 'Current'];
//     const tableRows = reportData.map(r => [
//       r.date,
//       r.type,
//       r.kwh.toString(),
//       r.voltage.toString(),
//       r.current.toString()
//     ]);

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//     });

//     doc.save('meter-report.pdf');
//   };

//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold">📊 Report</h1>

//       {/* Filter Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow">
//         <input
//           type="date"
//           value={fromDate}
//           onChange={(e) => setFromDate(e.target.value)}
//           className="border p-2 rounded w-full"
//         />
//         <input
//           type="date"
//           value={toDate}
//           onChange={(e) => setToDate(e.target.value)}
//           className="border p-2 rounded w-full"
//         />
//         <select
//           value={meterType}
//           onChange={(e) => setMeterType(e.target.value)}
//           className="border p-2 rounded w-full"
//         >
//           <option value="EB">EB</option>
//           <option value="DG">DG</option>
//           <option value="Solar">Solar</option>
//         </select>
//         <button
//           onClick={handleGenerateReport}
//           className="bg-blue-600 cursor-pointer text-white p-2 rounded hover:bg-blue-700"
//         >
//           Generate Report
//         </button>
//       </div>

//       {/* Export & Table Section */}
//       <div className="bg-white rounded-xl shadow p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">Report Data</h2>
//           {reportData.length > 0 && (
//             <div className="space-x-2">
//               <button
//                 onClick={exportToCSV}
//                 className="bg-blue-600 text-white px-3 py-1 cursor-pointer rounded hover:bg-blue-700 text-sm"
//               >
//                 Export CSV
//               </button>
//               <button
//                 onClick={exportToPDF}
//                 className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-700 text-sm"
//               >
//                 Export PDF
//               </button>
//             </div>
//           )}
//         </div>

//         {reportData.length === 0 ? (
//           <p className="text-gray-500 text-center">No Report data found for selected duration</p>
//         ) : (
//           <div className="overflow-auto">
//             <table className="w-full table-auto text-sm border border-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="border px-3 py-2">Date</th>
//                   <th className="border px-3 py-2">Meter Type</th>
//                   <th className="border px-3 py-2">kWh</th>
//                   <th className="border px-3 py-2">Voltage</th>
//                   <th className="border px-3 py-2">Current</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reportData.map((row, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     <td className="border px-3 py-2">{row.date}</td>
//                     <td className="border px-3 py-2">{row.type}</td>
//                     <td className="border px-3 py-2">{row.kwh}</td>
//                     <td className="border px-3 py-2">{row.voltage}</td>
//                     <td className="border px-3 py-2">{row.current}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Report;

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // Important to register autoTable plugin
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
import Header from "../components/header/Header";
const Report = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [meterType, setMeterType] = useState('EB');
  const [reportData, setReportData] = useState([]);
const dispatch = useDispatch();
  useEffect(() => {
      dispatch(setHeaderTitle("Report"));
      dispatch(
        setBreadcrumbs([
          // { label: "Home", link: "/home" },  // Updated label for clarity
          { label: "Report" },
        ])
      );
    }, []);


  const handleGenerateReport = () => {
    // Simulate API response
    const dummyData = [
      { date: '2025-07-14', type: meterType, kwh: 120.4, voltage: 220, current: 5.2 },
      { date: '2025-07-15', type: meterType, kwh: 135.6, voltage: 222, current: 5.0 },
    ];
    setReportData(dummyData);
  };

  const exportToCSV = () => {
    const headers = "Date,Meter Type,kWh,Voltage,Current\n";
    const rows = reportData.map(r => `${r.date},${r.type},${r.kwh},${r.voltage},${r.current}`).join("\n");
    const csv = headers + rows;
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "meter-report.csv";
    link.click();
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Metering Report', 14, 15);

    const tableColumn = ['Date', 'Meter Type', 'kWh', 'Voltage', 'Current'];
    const tableRows = reportData.map(r => [
      r.date,
      r.type,
      r.kwh.toString(),
      r.voltage.toString(),
      r.current.toString()
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save('meter-report.pdf');
  };

  return (
    <div className="p-bg-blue-200/10 min-h-screen">
     <Header />
     <div className='p-2 max-w-7xl mx-auto overflow-y-hidden'>
     <diV className="p-2 max-w-7xl mx-auto space-y-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Report</h1>
      </diV>

      {/* Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={meterType}
          onChange={(e) => setMeterType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="EB">EB</option>
          <option value="DG">DG</option>
          <option value="Solar">Solar</option>
        </select>
        <button
          onClick={handleGenerateReport}
          className="bg-blue-600 cursor-pointer text-white p-2 rounded hover:bg-blue-700"
        >
          Generate Report
        </button>
      </div>

      {/* Export & Table Section */}
      <div className="bg-white rounded-xl shadow p-4 mt-[2%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Report Data</h2>
          {reportData.length > 0 && (
            <div className="space-x-2">
              <button
                onClick={exportToCSV}
                className="bg-blue-600 text-white px-3 py-1 cursor-pointer rounded hover:bg-blue-700 text-sm"
              >
                Export CSV
              </button>
              <button
                onClick={exportToPDF}
                className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-700 text-sm"
              >
                Export PDF
              </button>
            </div>
          )}
        </div>

        {reportData.length === 0 ? (
          <p className="text-gray-500 text-center">No Report data found</p>
        ) : (
          <div className="overflow-auto">
            <table className="w-full table-auto text-sm border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Date</th>
                  <th className="border px-3 py-2">Meter Type</th>
                  <th className="border px-3 py-2">kWh</th>
                  <th className="border px-3 py-2">Voltage</th>
                  <th className="border px-3 py-2">Current</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="border px-3 py-2">{row.date}</td>
                    <td className="border px-3 py-2">{row.type}</td>
                    <td className="border px-3 py-2">{row.kwh}</td>
                    <td className="border px-3 py-2">{row.voltage}</td>
                    <td className="border px-3 py-2">{row.current}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Report;
