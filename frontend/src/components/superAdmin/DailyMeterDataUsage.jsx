// // import React, { useState, useMemo } from 'react';

// // const SuperAdminUserHistory = () => {
// //   const [filters, setFilters] = useState({ startDate: '', endDate: '', search: '' });

// //   const userHistory = [
// //     {
// //       id: 'USR001',
// //       adminName: 'Rajesh Kumar',
// //       action: 'Account Created',
// //       date: '2024-06-15',
// //       details: 'New connection established',
// //     },
// //     {
// //       id: 'USR002',
// //       adminName: 'Priya Sharma',
// //       action: 'Profile Updated',
// //       date: '2024-07-10',
// //       details: 'Contact information updated',
// //     },
// //     {
// //       id: 'USR003',
// //       adminName: 'Amit Singh',
// //       action: 'Password Reset',
// //       date: '2024-07-18',
// //       details: 'User reset password via OTP',
// //     },
// //   ];

// //   const filteredUserHistory = useMemo(() => {
// //     return userHistory.filter((item) => {
// //       const matchesSearch =
// //         item.adminName.toLowerCase().includes(filters.search.toLowerCase()) ||
// //         item.action.toLowerCase().includes(filters.search.toLowerCase());

// //       const withinDate =
// //         (!filters.startDate || new Date(item.date) >= new Date(filters.startDate)) &&
// //         (!filters.endDate || new Date(item.date) <= new Date(filters.endDate));

// //       return matchesSearch && withinDate;
// //     });
// //   }, [filters, userHistory]);

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
// //       <div className="max-w-5xl mx-auto space-y-6">
// //         <div>
// //           <h1 className="text-2xl font-bold text-gray-800 mb-1">User History</h1>
// //           <p className="text-sm text-gray-500">View actions performed by users</p>
// //         </div>

// //         {/* Filters */}
// //         <div className="bg-white p-4 rounded-lg shadow-sm flex flex-wrap gap-4 items-center">
// //           <div className="flex items-center gap-2">
// //             <label className="text-sm text-gray-700">Start:</label>
// //             <input
// //               type="date"
// //               value={filters.startDate}
// //               onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
// //               className="border rounded px-2 py-1 text-sm"
// //             />
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <label className="text-sm text-gray-700">End:</label>
// //             <input
// //               type="date"
// //               value={filters.endDate}
// //               onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
// //               className="border rounded px-2 py-1 text-sm"
// //             />
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <input
// //               type="text"
// //               placeholder="Search by name or action..."
// //               value={filters.search}
// //               onChange={(e) => setFilters({ ...filters, search: e.target.value })}
// //               className="border rounded px-2 py-1 text-sm w-64"
// //             />
// //           </div>
// //         </div>

// //         {/* Table */}
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">Customer</th>
// //                 <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">Action</th>
// //                 <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">Date</th>
// //                 <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">Details</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-200">
// //               {filteredUserHistory.length === 0 ? (
// //                 <tr>
// //                   <td colSpan={4} className="px-6 py-4 text-center text-gray-400">
// //                     No user history found.
// //                   </td>
// //                 </tr>
// //               ) : (
// //                 filteredUserHistory.map((entry, index) => (
// //                   <tr key={index} className="hover:bg-gray-50">
// //                     <td className="px-6 py-4">{entry.adminName}</td>
// //                     <td className="px-6 py-4">{entry.action}</td>
// //                     <td className="px-6 py-4">{entry.date}</td>
// //                     <td className="px-6 py-4">{entry.details}</td>
// //                   </tr>
// //                 ))
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SuperAdminUserHistory;

// import React, { useState, useMemo, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setHeaderTitle, setBreadcrumbs } from "../../redux/slice/headerSlice";
// import Header from "../../components/header/Header";

// const SuperAdminUserHistory = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setHeaderTitle("User History"));
//     dispatch(setBreadcrumbs([{ label: "Super Admin" }, { label: "User History" }]));
//   }, []);

//   const [filters, setFilters] = useState({
//     startDate: "",
//     endDate: "",
//     search: "",
//   });

//   const userHistory = [
//     {
//       id: "USR001",
//       adminName: "Rajesh Kumar",
//       action: "Account Created",
//       date: "2024-06-15",
//       details: "New connection established",
//     },
//     {
//       id: "USR002",
//       adminName: "Priya Sharma",
//       action: "Profile Updated",
//       date: "2024-07-10",
//       details: "Contact information updated",
//     },
//     {
//       id: "USR003",
//       adminName: "Amit Singh",
//       action: "Password Reset",
//       date: "2024-07-18",
//       details: "User reset password via OTP",
//     },
//   ];

//   const filteredUserHistory = useMemo(() => {
//     return userHistory.filter((item) => {
//       const matchesSearch =
//         item.adminName.toLowerCase().includes(filters.search.toLowerCase()) ||
//         item.action.toLowerCase().includes(filters.search.toLowerCase());

//       const withinDate =
//         (!filters.startDate || new Date(item.date) >= new Date(filters.startDate)) &&
//         (!filters.endDate || new Date(item.date) <= new Date(filters.endDate));

//       return matchesSearch && withinDate;
//     });
//   }, [filters, userHistory]);

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-6 max-w-7xl mx-auto">
//         <h1 className="text-xl mb-6 sm:text-2xl md:text-3xl font-semibold text-gray-900 ">
//           User History
//         </h1>

//         {/* Filters */}
//         <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row md:justify-between flex-wrap gap-4 items-start md:items-center">
//           <div className="w-full md:w-auto">
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 placeholder="Search by name or action..."
//                 value={filters.search}
//                 onChange={(e) =>
//                   setFilters({ ...filters, search: e.target.value })
//                 }
//                 className="border border-gray-300 rounded-md px-2 py-1 text-[10px] md:text-xs lg:text-sm w-full md:w-64"
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-2">
//             <label className="text-[10px] md:text-xs lg:text-sm text-gray-700">
//               Start:
//             </label>
//             <input
//               type="date"
//               value={filters.startDate}
//               onChange={(e) =>
//                 setFilters({ ...filters, startDate: e.target.value })
//               }
//               className="border border-gray-300 rounded-md px-2 py-1 text-[10px] md:text-xs lg:text-sm w-[100px] md:w-[120px] lg:w-[140px]"
//             />
//             <label className="text-[10px] md:text-xs lg:text-sm text-gray-700">
//               End:
//             </label>
//             <input
//               type="date"
//               value={filters.endDate}
//               onChange={(e) =>
//                 setFilters({ ...filters, endDate: e.target.value })
//               }
//               className="border border-gray-300 rounded-md px-2 py-1 text-[10px] md:text-xs lg:text-sm w-[100px] md:w-[120px] lg:w-[140px]"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg min-h-screen">
//           <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
//             <thead className="bg-gray-50">
//               <tr>
//                 {["Admin Name", "Action", "Date", "Details"].map((label, idx) => (
//                   <th
//                     key={idx}
//                     className="text-lg font-semibold text-emerald-800 mb-1 px-6 py-3 text-left whitespace-nowrap"
//                   >
//                     {label}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredUserHistory.length === 0 ? (
//                 <tr>
//                   <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
//                     No user history found.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredUserHistory.map((entry, index) => (
//                   <tr key={index} className="hover:bg-gray-50 transition">
//                     <td className="px-6 py-4 text-sm font-medium text-gray-600">
//                       {entry.adminName}
//                     </td>
//                     <td className="px-6 py-4 text-sm font-medium text-gray-600">
//                       {entry.action}
//                     </td>
//                     <td className="px-6 py-4 text-sm font-medium text-gray-600">
//                       {entry.date}
//                     </td>
//                     <td className="px-6 py-4 text-sm font-medium text-gray-600">
//                       {entry.details}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuperAdminUserHistory;

// import React, { useState, useMemo, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setHeaderTitle, setBreadcrumbs } from "../../redux/slice/headerSlice";
// import Header from "../../components/header/Header";
// const DailyMeterDataUsageHistory = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setHeaderTitle("Meter Data Usage History"));
//     dispatch(setBreadcrumbs([{ label: "Super Admin" }, { label: "Meter Usage History" }]));
//   }, []);

//   const [filters, setFilters] = useState({
//     search: "",
//     startDate: "",
//     endDate: "",
//   });

//   const meterDataHistory = [
//     {
//       meterId: "MTR001",
//       date: "2025-07-21T00:00:00.000Z",
//       totalKWh: "51.2",
//       totalDeduction: "12.9",
//       totalEG: "34.1",
//       totalDG: "17.1",
//     },
//     {
//       meterId: "MTR002",
//       date: "2025-07-21T00:00:00.000Z",
//       totalKWh: "51.2",
//       totalDeduction: "12.9",
//       totalEG: "34.1",
//       totalDG: "17.1",
//     },
//     {
//       meterId: "MTR003",
//       date: "2025-07-21T00:00:00.000Z",
//       totalKWh: "51.2",
//       totalDeduction: "12.9",
//       totalEG: "34.1",
//       totalDG: "17.1",
//     },
//     {
//       meterId: "MTR004",
//       date: "2025-07-21T00:00:00.000Z",
//       totalKWh: "51.2",
//       totalDeduction: "12.9",
//       totalEG: "34.1",
//       totalDG: "17.1",
//     },
//     // Add more records here
//   ];

//   const filteredData = useMemo(() => {
//     return meterDataHistory.filter((entry) => {
//       const matchesSearch = entry.meterId.toLowerCase().includes(filters.search.toLowerCase());
//       const entryDate = new Date(entry.date);
//       const withinStart = !filters.startDate || entryDate >= new Date(filters.startDate);
//       const withinEnd = !filters.endDate || entryDate <= new Date(filters.endDate);
//       return matchesSearch && withinStart && withinEnd;
//     });
//   }, [filters, meterDataHistory]);

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-6 max-w-7xl mx-auto">
//         <h1 className="text-xl mb-6 sm:text-2xl md:text-3xl font-semibold text-gray-900">
//           Meter data
//         </h1>

//         {/* Filters */}
//         <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row md:justify-between flex-wrap gap-4 items-start md:items-center">
//           <input
//             type="text"
//             placeholder="Search by meter ID..."
//             value={filters.search}
//             onChange={(e) => setFilters({ ...filters, search: e.target.value })}
//             className="border border-gray-300 rounded-md px-2 py-1 text-xs w-full md:w-64"
//           />
//           <div className="flex flex-wrap items-center gap-2">
//             <label className="text-sm text-gray-700">Start:</label>
//             <input
//               type="date"
//               value={filters.startDate}
//               onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
//               className="border border-gray-300 rounded-md px-2 py-1 text-xs"
//             />
//             <label className="text-sm text-gray-700">End:</label>
//             <input
//               type="date"
//               value={filters.endDate}
//               onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
//               className="border border-gray-300 rounded-md px-2 py-1 text-xs"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg min-h-screen">
//           <table className="min-w-full bg-white border border-gray-200 text-sm">
//             <thead className="bg-gray-50">
//               <tr>
//                 {["Meter ID", "Date", "Total kWh", "Total EG", "Total DG", "Total Deduction"].map((label, idx) => (
//                   <th key={idx} className="text-sm font-semibold text-gray-700 px-6 py-3 text-left">
//                     {label}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredData.length === 0 ? (
//                 <tr>
//                   <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
//                     No meter data found.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredData.map((entry, idx) => (
//                   <tr key={idx}>
//                     <td className="px-6 py-3">{entry.meterId}</td>
//                     <td className="px-6 py-3">{new Date(entry.date).toLocaleDateString()}</td>
//                     <td className="px-6 py-3">{entry.totalKWh}</td>
//                     <td className="px-6 py-3">{entry.totalEG}</td>
//                     <td className="px-6 py-3">{entry.totalDG}</td>
//                     <td className="px-6 py-3">{entry.totalDeduction}</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyMeterDataUsageHistory;

import React, { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeaderTitle, setBreadcrumbs } from "../../redux/slice/headerSlice";
import Header from "../../components/header/Header";

const DailyMeterDataUsageHistory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle("Meter Data Usage History"));
    dispatch(
      setBreadcrumbs([
        { label: "Super Admin" },
        { label: "Meter Usage History" },
      ])
    );
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  const dummyData = [
    {
      meterId: "MTR001",
      date: "2025-07-21T00:00:00.000Z",
      totalKWh: "51.2",
      totalDeduction: "12.9",
      totalEG: "34.1",
      totalDG: "17.1",
    },
    {
      meterId: "MTR002",
      date: "2025-07-21T00:00:00.000Z",
      totalKWh: "48.7",
      totalDeduction: "10.2",
      totalEG: "30.5",
      totalDG: "18.2",
    },
    {
      meterId: "MTR003",
      date: "2025-07-21T00:00:00.000Z",
      totalKWh: "63.3",
      totalDeduction: "14.7",
      totalEG: "40.0",
      totalDG: "23.3",
    },
    {
      meterId: "MTR004",
      date: "2025-07-21T00:00:00.000Z",
      totalKWh: "57.2",
      totalDeduction: "12.5",
      totalEG: "35.7",
      totalDG: "21.5",
    },
    {
      meterId: "MTR005",
      date: "2025-07-22T00:00:00.000Z",
      totalKWh: "44.2",
      totalDeduction: "8.5",
      totalEG: "29.1",
      totalDG: "15.1",
    },
  ];

  const filteredData = useMemo(() => {
    return dummyData
      .filter((item) => {
        const term = searchTerm.toLowerCase();
        const matchesSearch = item.date.toLowerCase().includes(term);

        const itemDate = new Date(item.date);
        const afterStart = !startDate || itemDate >= new Date(startDate);
        const beforeEnd = !endDate || itemDate <= new Date(endDate);

        return matchesSearch && afterStart && beforeEnd;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchTerm, startDate, endDate]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * limit;
    return filteredData.slice(start, start + limit);
  }, [filteredData, page, limit]);

  const totalPages = Math.ceil(filteredData.length / limit);

  return (
    <div className="bg-blue-200/10 min-h-screen">
      <Header />
      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Meter Data
        </h2>

        {/* Filters */}

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4">
          <div className="flex flex-col justify-between sm:flex-row sm:items-end gap-4 flex-wrap">
            {/* Search Meter ID */}
            <div>
              <div className="w-full">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Search by date
                </label>
                <input
                  type="text"
                  placeholder="Search by meter date..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Start & End Date */}
            <div className="flex gap-6 w-full sm:w-auto">
              <div className="w-full sm:w-1/2">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="w-full sm:w-1/2">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Data List */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 min-h-[400px]">
          <div className=" sm:w-1/4 mb-3">
            <p className="text-md font-semibold text-blue-600">
              Meter ID: M1012
            </p>
          </div>
          {paginatedData.length === 0 ? (
            <p className="text-gray-600 text-center">
              No meter usage history found.
            </p>
          ) : (
            <>
              {paginatedData.map((item, index) => {
                const usageDate = new Date(item.date).toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  }
                );

                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-4 mb-3 bg-gray-100 rounded-lg"
                  >
                    <div className="text-sm text-gray-700 font-medium sm:w-1/4 w-full mb-2 sm:mb-0">
                      {usageDate}
                    </div>

                    <div className="text-sm w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div className="min-w-0">
                        <p className="text-md font-semibold text-gray-500">
                          Total kWh
                        </p>
                        <p className="font-semibold text-gray-800">
                          {item.totalKWh} KWh
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-md font-semibold text-gray-500">
                          Total EG
                        </p>
                        <p className="font-semibold text-green-600">
                          {item.totalEG}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-md font-semibold text-gray-500">
                          Total DG
                        </p>
                        <p className="font-semibold text-yellow-600">
                          {item.totalDG}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-md font-semibold text-gray-500">
                          Deduction
                        </p>
                        <p className="font-semibold text-red-600">
                          {item.totalDeduction}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Pagination */}
              <div className="flex justify-center mt-6 gap-4 items-center">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page <= 1}
                  className="px-4 py-2 bg-gray-200 cursor-pointer text-sm rounded-md disabled:opacity-50"
                >
                  Prev
                </button>
                <span className="text-sm">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={page >= totalPages}
                  className="px-4 py-2 bg-gray-200 text-sm cursor-pointer rounded-md disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyMeterDataUsageHistory;

// import React, { useState, useMemo, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setHeaderTitle, setBreadcrumbs } from "../../redux/slice/headerSlice";
// import Header from "../../components/header/Header";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DailyMeterDataUsageHistory = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setHeaderTitle("Meter Data Usage History"));
//     dispatch(setBreadcrumbs([
//       { label: "Super Admin" },
//       { label: "Meter Usage History" },
//     ]));
//   }, []);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [page, setPage] = useState(1);
//   const [limit] = useState(5);

//   const dummyData = [
//     {
//       meterId: "MTR001",
//       date: "2025-07-21T00:00:00.000Z",
//       totalKWh: "51.2",
//       totalDeduction: "12.9",
//       totalEG: "34.1",
//       totalDG: "17.1",
//     },
//     {
//       meterId: "MTR002",
//       date: "2025-07-21T00:00:00.000Z",
//       totalKWh: "48.7",
//       totalDeduction: "10.2",
//       totalEG: "30.5",
//       totalDG: "18.2",
//     },
//     {
//       meterId: "MTR003",
//       date: "2025-07-21T00:00:00.000Z",
//       totalKWh: "63.3",
//       totalDeduction: "14.7",
//       totalEG: "40.0",
//       totalDG: "23.3",
//     },
//     {
//       meterId: "MTR004",
//       date: "2025-07-21T00:00:00.000Z",
//       totalKWh: "57.2",
//       totalDeduction: "12.5",
//       totalEG: "35.7",
//       totalDG: "21.5",
//     },
//     {
//       meterId: "MTR005",
//       date: "2025-07-22T00:00:00.000Z",
//       totalKWh: "44.2",
//       totalDeduction: "8.5",
//       totalEG: "29.1",
//       totalDG: "15.1",
//     },
//     // Add more dummy records if needed
//   ];

//   const filteredData = useMemo(() => {
//     return dummyData
//       .filter((item) => {
//         const term = searchTerm.toLowerCase();
//         const matchesSearch = item.meterId.toLowerCase().includes(term);
//         const entryDate = new Date(item.date);
//         const inRange =
//           (!startDate || entryDate >= startDate) &&
//           (!endDate || entryDate <= endDate);
//         return matchesSearch && inRange;
//       })
//       .sort((a, b) => new Date(b.date) - new Date(a.date));
//   }, [searchTerm, startDate, endDate, dummyData]);

//   const paginatedData = useMemo(() => {
//     const start = (page - 1) * limit;
//     return filteredData.slice(start, start + limit);
//   }, [filteredData, page, limit]);

//   const totalPages = Math.ceil(filteredData.length / limit);

//     return (
//   <div className="bg-blue-200/10 min-h-screen">
//     <Header />
//     <div className="p-6 max-w-7xl mx-auto">
//       {/* Page Title */}
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
//         Meter Usage History
//       </h2>

//       {/* Filters */}
//       <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
//         <div className="flex flex-col sm:flex-row sm:items-end gap-4 flex-wrap">
//           <div className="w-full sm:w-1/3">
//             <label className="text-sm font-medium text-gray-700 mb-1 block">Search Meter ID</label>
//             <input
//               type="text"
//               placeholder="Search by meter ID..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setPage(1);
//               }}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="w-full sm:w-1/3">
//             <label className="text-sm font-medium text-gray-700 mb-1 block">Start Date</label>
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => {
//                 setStartDate(date);
//                 setPage(1);
//               }}
//               placeholderText="Start Date"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="w-full sm:w-1/3">
//             <label className="text-sm font-medium text-gray-700 mb-1 block">End Date</label>
//             <DatePicker
//               selected={endDate}
//               onChange={(date) => {
//                 setEndDate(date);
//                 setPage(1);
//               }}
//               placeholderText="End Date"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Data List */}
//       <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 min-h-[400px]">
//         {paginatedData.length === 0 ? (
//           <p className="text-gray-600 text-center">No meter usage history found.</p>
//         ) : (
//           <>
//             {paginatedData.map((item, index) => {
//               const usageDate = new Date(item.date).toLocaleDateString("en-GB", {
//                 day: "2-digit",
//                 month: "short",
//                 year: "2-digit",
//               });

//               return (
//                 <div
//                   key={index}
//                   className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 mb-3 bg-gray-100 rounded-lg"
//                 >
//                   <div className="text-sm text-gray-700 font-medium sm:w-1/4">{usageDate}</div>

//                   <div className="text-center sm:w-1/4">
//                     <p className="text-sm font-semibold text-blue-600">
//                       Meter ID: {item.meterId}
//                     </p>
//                   </div>

//                   <div className="text-sm sm:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
//                     <div>
//                       <p className="text-xs text-gray-500">Total kWh</p>
//                       <p className="font-semibold text-gray-800">{item.totalKWh} kWh</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Total EG</p>
//                       <p className="font-semibold text-green-600">{item.totalEG}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Total DG</p>
//                       <p className="font-semibold text-yellow-600">{item.totalDG}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Deduction</p>
//                       <p className="font-semibold text-red-600">{item.totalDeduction}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//             {/* Pagination */}
//             <div className="flex justify-center mt-6 gap-4 items-center">
//               <button
//                 onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={page <= 1}
//                 className="px-4 py-2 bg-gray-200 cursor-pointer text-sm rounded-md disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               <span className="text-sm">
//                 Page {page} of {totalPages}
//               </span>
//               <button
//                 onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
//                 disabled={page >= totalPages}
//                 className="px-4 py-2 bg-gray-200 text-sm cursor-pointer rounded-md disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   </div>

//   );
// };

// export default DailyMeterDataUsageHistory;
