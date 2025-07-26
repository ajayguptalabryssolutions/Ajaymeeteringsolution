// import React, { useEffect, useState, useMemo } from "react";
// import { ArrowDownCircle } from "lucide-react";
// import Header from "../header/Header";
// import { useDispatch } from "react-redux";
// import { setBreadcrumbs, setHeaderTitle } from "../../redux/slice/headerSlice";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const SuperAdminRechargeHistory = () => {
//   const dispatch = useDispatch();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [page, setPage] = useState(1);
//   const [limit] = useState(10);

//   useEffect(() => {
//     dispatch(setHeaderTitle("Top Up History"));
//     dispatch(setBreadcrumbs([{ label: "Top Up History" }]));
//   }, [dispatch]);

//   // 📦 Dummy data with meterId
//   const dummyData = useMemo(() => {
//     const statuses = ["success", "failed"];
//     const sources = ["UPI", "Credit Card", "Bank Transfer", "Wallet"];
//     const meters = ["MTR001", "MTR002", "MTR003", "MTR004"];

//     return Array.from({ length: 50 }, (_, i) => ({
//       _id: `txn_${i}`,
//       amount: (Math.random() * 500 + 100).toFixed(2),
//       source: sources[Math.floor(Math.random() * sources.length)],
//       status: statuses[Math.floor(Math.random() * statuses.length)],
//       meterId: meters[Math.floor(Math.random() * meters.length)],
//       updatedAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30).toISOString(),
//     }));
//   }, []);

//   // 🔍 Filtering logic
//   const filteredData = useMemo(() => {
//     return dummyData
//       .filter((item) => {
//         const term = searchTerm.toLowerCase();
//         const inSearch =
//           item._id.toLowerCase().includes(term) ||
//           item.status.toLowerCase().includes(term) ||
//           item.source.toLowerCase().includes(term) ||
//           item.meterId.toLowerCase().includes(term) ||
//           item.amount.toString().includes(term);

//         const updatedAt = new Date(item.updatedAt);
//         const inRange =
//           (!startDate || updatedAt >= startDate) &&
//           (!endDate || updatedAt <= endDate);

//         return inSearch && inRange;
//       })
//       .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
//   }, [searchTerm, startDate, endDate, dummyData]);

//   const paginatedData = useMemo(() => {
//     const start = (page - 1) * limit;
//     return filteredData.slice(start, start + limit);
//   }, [filteredData, page, limit]);

//   const totalPages = Math.ceil(filteredData.length / limit);

//   const headerSection = useMemo(() => (
//     <>
//       <Header />
//       <div className="p-4 max-w-7xl mx-auto">
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
//           Recharge History
//         </h2>
//       </div>
//     </>
//   ), []);

//   return (
//     <div className="p-bg-blue-200/10 min-h-screen">
//       {headerSection}

//       <div className="p-4 max-w-7xl mx-auto">
//         {/* 🔍 Filters */}
//         <div className="mb-4 flex flex-wrap gap-4 items-center">
//           <input
//             type="text"
//             placeholder="Search by status, amount, meterId..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setPage(1);
//             }}
//             className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
//           />

//           <DatePicker
//             selected={startDate}
//             onChange={(date) => {
//               setStartDate(date);
//               setPage(1);
//             }}
//             placeholderText="Start Date"
//             className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
//           />

//           <DatePicker
//             selected={endDate}
//             onChange={(date) => {
//               setEndDate(date);
//               setPage(1);
//             }}
//             placeholderText="End Date"
//             className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
//           />
//         </div>

//         {/* Recharge History List */}
//         <div className="space-y-4 bg-white rounded-lg shadow-md p-4 min-h-[400px]">
//           {paginatedData.length === 0 ? (
//             <p className="text-gray-600 text-center">No recharge history found.</p>
//           ) : (
//             <>
//               {paginatedData.map((item, index) => {
//                 const isSuccess = item.status === "success";
//                 const rechargeDate = new Date(item.updatedAt).toLocaleString("en-GB", {
//                   day: "2-digit",
//                   month: "short",
//                   year: "2-digit",
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   hour12: true,
//                 });

//                 return (
//                   <div
//                     key={item._id || index}
//                     className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-3 bg-gray-100 rounded-lg shadow-sm"
//                   >
//                     <div className="text-gray-500 text-sm font-medium sm:w-1/4">{rechargeDate}</div>

//                     <div className="text-blue-600 text-sm sm:text-base font-semibold text-center sm:w-1/4">
//                       ₹ {item.amount}
//                       <div className="text-xs text-blue-500">{item.source}</div>
//                     </div>

//                     <div className="text-center sm:w-1/4">
//                       <p className={`text-sm font-semibold ${isSuccess ? "text-green-600" : "text-red-500"}`}>
//                         {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
//                       </p>
//                       <p className="text-xs text-gray-500">{item.meterId}</p>
//                     </div>

//                     <div className="flex items-center justify-end sm:w-1/4 gap-1 mt-2 sm:mt-0">
//                       <p className={`text-sm font-semibold ${isSuccess ? "text-green-600" : "text-red-500"}`}>
//                         ₹{item.amount}
//                       </p>
//                       {isSuccess && <ArrowDownCircle className="w-4 h-4 text-green-600" />}
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Pagination */}
//               <div className="flex justify-center mt-6 gap-4 items-center">
//                 <button
//                   onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//                   disabled={page <= 1}
//                   className="px-4 py-2 bg-gray-200 cursor-pointer text-sm rounded-md disabled:opacity-50"
//                 >
//                   Prev
//                 </button>
//                 <span className="text-sm">
//                   Page {page} of {totalPages}
//                 </span>
//                 <button
//                   onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
//                   disabled={page >= totalPages}
//                   className="px-4 py-2 bg-gray-200 text-sm cursor-pointer rounded-md disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuperAdminRechargeHistory;

import React, { useEffect, useState, useMemo } from "react";
import { ArrowDownCircle } from "lucide-react";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { setBreadcrumbs, setHeaderTitle } from "../../redux/slice/headerSlice";

const AdminRechargeHistory = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const [dummyData] = useState([
    {
      _id: "txn_001",
      amount: "250.00",
      source: "UPI",
      status: "success",
      meterId: "MTR001",
      updatedAt: "2025-07-20T10:30:00Z",
    },
    {
      _id: "txn_002",
      amount: "500.00",
      source: "Credit Card",
      status: "failed",
      meterId: "MTR002",
      updatedAt: "2025-07-18T12:15:00Z",
    },
    {
      _id: "txn_003",
      amount: "350.00",
      source: "Wallet",
      status: "success",
      meterId: "MTR001",
      updatedAt: "2025-07-17T08:45:00Z",
    },
    {
      _id: "txn_004",
      amount: "450.00",
      source: "Bank Transfer",
      status: "success",
      meterId: "MTR003",
      updatedAt: "2025-07-16T09:30:00Z",
    },
    {
      _id: "txn_005",
      amount: "150.00",
      source: "UPI",
      status: "failed",
      meterId: "MTR004",
      updatedAt: "2025-07-15T14:10:00Z",
    },
  ]);

  const filteredData = useMemo(() => {
    return dummyData
      .filter((item) => {
        const term = searchTerm.toLowerCase();
        const inSearch =
          item._id.toLowerCase().includes(term) ||
          item.status.toLowerCase().includes(term) ||
          item.source.toLowerCase().includes(term) ||
          item.meterId.toLowerCase().includes(term) ||
          item.amount.toString().includes(term);

        const updatedAt = new Date(item.updatedAt);
        const inRange =
          (!startDate || updatedAt >= new Date(startDate)) &&
          (!endDate || updatedAt <= new Date(endDate));

        return inSearch && inRange;
      })
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }, [searchTerm, startDate, endDate, dummyData]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * limit;
    return filteredData.slice(start, start + limit);
  }, [filteredData, page, limit]);

  const totalPages = Math.ceil(filteredData.length / limit);

  useEffect(() => {
    dispatch(setHeaderTitle("Top Up History"));
    dispatch(setBreadcrumbs([{ label: "Top Up History" }]));
  }, [dispatch]);

  return (
    <div className="p-bg-blue-200/10 min-h-screen">
      <Header />
      <div className="p-6 max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Recharge History
        </h2>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <div className="flex flex-col justify-between sm:flex-row sm:items-end gap-4 flex-wrap">
            <div>
              <div className="w-full ">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search by status, amount, meterId..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-6">
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

        {/* List Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className=" sm:w-1/4 mb-3">
            <p className="text-md font-semibold text-blue-600">
              Meter ID: M1012
            </p>
          </div>
          {paginatedData.length === 0 ? (
            <p className="text-gray-600 text-center">
              No recharge history found.
            </p>
          ) : (
            <>
              {paginatedData.map((item, index) => {
                const isSuccess = item.status === "success";
                const rechargeDate = new Date(item.updatedAt).toLocaleString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  }
                );

                return (
                  <div
                    key={item._id || index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-4 mb-3 bg-gray-100 rounded-lg gap-2"
                  >
                    {/* Date */}
                    <div className="text-sm text-gray-600 font-medium sm:w-1/4 w-full">
                      {rechargeDate}
                    </div>

                    {/* Amount */}
                    <div className="text-center sm:w-1/4 w-full">
                      <p className="text-gray-600 font-semibold text-base">
                        ₹ {item.amount}
                      </p>
                    </div>

                    {/* Source */}
                    <div className="text-center sm:w-1/4 w-full">
                      <p className="text-gray-600 font-semibold text-base">
                        {item.source}
                      </p>
                    </div>

                    {/* Status */}
                    <div className="text-center sm:w-1/4 w-full">
                      <p
                        className={`text-base font-semibold ${
                          isSuccess ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </p>
                    </div>

                    {/* Icon & Repeat Amount */}
                    <div className="flex items-center justify-between sm:justify-end sm:w-1/4 w-full gap-2">
                      <p
                        className={`text-base font-semibold ${
                          isSuccess ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        ₹{item.amount}
                      </p>
                      {isSuccess && (
                        <ArrowDownCircle className="w-5 h-5 text-green-600" />
                      )}
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

export default AdminRechargeHistory;

// import React, { useEffect, useState, useMemo } from "react";
// import { ArrowDownCircle } from "lucide-react";
// import Header from "../header/Header";
// import { useDispatch } from "react-redux";
// import { setBreadcrumbs, setHeaderTitle } from "../../redux/slice/headerSlice";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const SuperAdminRechargeHistory = () => {
//   const dispatch = useDispatch();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [page, setPage] = useState(1);
//   const [limit] = useState(10);

//   const [dummyData] = useState([
//     {
//       _id: "txn_001",
//       amount: "250.00",
//       source: "UPI",
//       status: "success",
//       meterId: "MTR001",
//       updatedAt: "2025-07-20T10:30:00Z",
//     },
//     {
//       _id: "txn_002",
//       amount: "500.00",
//       source: "Credit Card",
//       status: "failed",
//       meterId: "MTR002",
//       updatedAt: "2025-07-18T12:15:00Z",
//     },
//     {
//       _id: "txn_003",
//       amount: "350.00",
//       source: "Wallet",
//       status: "success",
//       meterId: "MTR001",
//       updatedAt: "2025-07-17T08:45:00Z",
//     },
//     {
//       _id: "txn_004",
//       amount: "450.00",
//       source: "Bank Transfer",
//       status: "success",
//       meterId: "MTR003",
//       updatedAt: "2025-07-16T09:30:00Z",
//     },
//     {
//       _id: "txn_005",
//       amount: "150.00",
//       source: "UPI",
//       status: "failed",
//       meterId: "MTR004",
//       updatedAt: "2025-07-15T14:10:00Z",
//     },
//     // Add more dummy records if needed
//   ]);

//   const filteredData = useMemo(() => {
//     return dummyData
//       .filter((item) => {
//         const term = searchTerm.toLowerCase();
//         const inSearch =
//           item._id.toLowerCase().includes(term) ||
//           item.status.toLowerCase().includes(term) ||
//           item.source.toLowerCase().includes(term) ||
//           item.meterId.toLowerCase().includes(term) ||
//           item.amount.toString().includes(term);

//         const updatedAt = new Date(item.updatedAt);
//         const inRange =
//           (!startDate || updatedAt >= startDate) &&
//           (!endDate || updatedAt <= endDate);

//         return inSearch && inRange;
//       })
//       .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
//   }, [searchTerm, startDate, endDate, dummyData]);

//   const paginatedData = useMemo(() => {
//     const start = (page - 1) * limit;
//     return filteredData.slice(start, start + limit);
//   }, [filteredData, page, limit]);

//   const totalPages = Math.ceil(filteredData.length / limit);

//   useEffect(() => {
//     dispatch(setHeaderTitle("Top Up History"));
//     dispatch(setBreadcrumbs([{ label: "Top Up History" }]));
//   }, [dispatch]);

//   const headerSection = useMemo(() => (
//     <>
//       <Header />
//       <div className="p-4 max-w-7xl mx-auto">
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
//           Recharge History
//         </h2>
//       </div>
//     </>
//   ), []);

//   return (
//     <div className="p-bg-blue-200/10 min-h-screen">
//       {headerSection}
//       <div className="p-6 max-w-7xl mx-auto">
//       {/* Filter Section */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
//         <div className="flex flex-col sm:flex-row sm:items-end gap-4 flex-wrap">
//           <div className="w-full sm:w-1/3">
//             <label className="text-sm font-medium text-gray-700 mb-1 block">Search</label>
//             <input
//               type="text"
//               placeholder="Search by status, amount, meterId..."
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

//       {/* List Section */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//         {paginatedData.length === 0 ? (
//           <p className="text-gray-600 text-center">No recharge history found.</p>
//         ) : (
//           <>
//             {paginatedData.map((item, index) => {
//               const isSuccess = item.status === "success";
//               const rechargeDate = new Date(item.updatedAt).toLocaleString("en-GB", {
//                 day: "2-digit",
//                 month: "short",
//                 year: "2-digit",
//                 hour: "2-digit",
//                 minute: "2-digit",
//                 hour12: true,
//               });

//               return (
//                 <div
//                   key={item._id || index}
//                   className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 mb-3 bg-gray-100 rounded-lg"
//                 >
//                   {/* Date */}
//                   <div className="text-sm text-gray-500 font-medium sm:w-1/4">
//                     {rechargeDate}
//                   </div>

//                   {/* Amount & Source */}
//                   <div className="text-center sm:w-1/4">
//                     <p className="text-blue-600 font-semibold text-base">
//                       ₹ {item.amount}
//                     </p>
//                     <p className="text-xs text-blue-500">{item.source}</p>
//                   </div>

//                   {/* Status */}
//                   <div className="text-center sm:w-1/4">
//                     <p className={`text-sm font-semibold ${isSuccess ? "text-green-600" : "text-red-500"}`}>
//                       {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
//                     </p>
//                     <p className="text-xs text-gray-500">{item.meterId}</p>
//                   </div>

//                   {/* Icon & Amount Again */}
//                   <div className="flex items-center justify-end sm:w-1/4 gap-2 mt-2 sm:mt-0">
//                     <p className={`text-sm font-semibold ${isSuccess ? "text-green-600" : "text-red-500"}`}>
//                       ₹{item.amount}
//                     </p>
//                     {isSuccess && <ArrowDownCircle className="w-5 h-5 text-green-600" />}
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

//     </div>
//   );
// };

// export default SuperAdminRechargeHistory;
