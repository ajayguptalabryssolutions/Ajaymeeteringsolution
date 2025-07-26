// import React from 'react';
// import { ArrowDownCircle } from 'lucide-react';

// import Header from "../header/Header";
// import { useDispatch } from "react-redux";
// import { setBreadcrumbs, setHeaderTitle } from "../../redux/slice/headerSlice";
// import { useEffect } from 'react';
// const RechargeHistory = () => {
//       const dispatch = useDispatch();
//         useEffect(() => {
//           dispatch(setHeaderTitle("Top Up History"));
//           dispatch(setBreadcrumbs([{ label: "Top Up History" }]));
//         }, []);

//   // Sample history data
//   const historyData = [
//     {
//       date: '05-Jul-25',
//       paidAmount: 0.0,
//       rechargeAmount: 300.0,
//       status: 'failed',
//     },
//     {
//       date: '05-Jul-25',
//       paidAmount: 0.0,
//       rechargeAmount: 300.0,
//       status: 'failed',
//     },
//     {
//       date: '28-Jun-25',
//       paidAmount: 300.0,
//       rechargeAmount: 300.0,
//       status: 'success',
//     },
//   ];

//   return (
//     <div className=" p-bg-blue-200/10 min-h-screen ">

//         <Header />
//         <div className='p-4 max-w-7xl mx-auto'>
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
//         Recharge History
//       </h2>
//  {/* <div className="p-4 space-y-4 bg-white rounded-lg shadow-md min-h-screen"></div> */}
//       <div className="p-4 space-y-4 bg-white rounded-lg shadow-md min-h-screen">
//         {historyData.map((item, index) => {
//           const isSuccess = item.status === 'success';

//           return (
//             <div
//               key={index}
//               className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 p-4 rounded-lg shadow-md"
//             >
//               {/* Left - Date */}
//               <div className="text-gray-500 text-sm md:text-base font-semibold w-1/3">
//                 {item.date}
//               </div>

//               {/* Middle - Paid Amount & Source */}
//               <div className="text-center w-1/3">
//                 <p className="text-blue-600 font-bold text-sm md:text-base">
//                   ₹ {item.paidAmount.toFixed(2)}
//                 </p>
//                 <p className="text-blue-600 text-xs md:text-sm">App</p>
//               </div>

//               {/* Right - Recharge Amount & Status */}
//               <div className="flex items-center justify-end gap-1 w-1/3">
//                 <p
//                   className={`font-bold text-sm md:text-base ${
//                     isSuccess ? 'text-green-600' : 'text-red-500'
//                   }`}
//                 >
//                   ₹{item.rechargeAmount.toFixed(2)}
//                 </p>
//                 {isSuccess && (
//                   <ArrowDownCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default RechargeHistory;
/////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from "react";
// import { ArrowDownCircle } from "lucide-react";
// import axios from "axios";
// import Header from "../header/Header";
// import { useDispatch } from "react-redux";
// import { setBreadcrumbs, setHeaderTitle } from "../../redux/slice/headerSlice";
// import { useParams } from "react-router-dom"; // To get meterId from route params

// const RechargeHistory = () => {
//   const dispatch = useDispatch();
//   const { meterId } = useParams("6874d79fbd06639d75c593a2"); // Assuming the route is something like /recharge-history/:meterId
//   const [historyData, setHistoryData] = useState([]);

//   useEffect(() => {
//     dispatch(setHeaderTitle("Top Up History"));
//     dispatch(setBreadcrumbs([{ label: "Top Up History" }]));
//   }, [dispatch]);

//   const fetchRechargeHistory = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:3000/api/v1/payment/get-payment-history/6874d79fbd06639d75c593a2`
//       );
//       console.log("Recharge History Response:", res);

//       if (res.data.success) {
//         setHistoryData(res.data.data);
//       } else {
//         console.error("Failed to fetch payment history");
//       }
//     } catch (error) {
//       console.error("Error fetching recharge history:", error);
//     }
//   };

//   useEffect(() => {
//     fetchRechargeHistory();
//   }, []);


//   return (
//     <div className="p-bg-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-4 max-w-7xl mx-auto">
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
//           Recharge History
//         </h2>

//         <div className="p-4 space-y-4 bg-white rounded-lg shadow-md min-h-screen">
//           {historyData.length === 0 ? (
//             <p className="text-gray-600 text-center">
//               No recharge history found.
//             </p>
//           ) : (
//             historyData.map((item, index) => {
//               const isSuccess = item.status === "success";
//               const rechargeDate = new Date(item.updatedAt).toLocaleString(
//                 "en-GB",
//                 {
//                   day: "2-digit",
//                   month: "short",
//                   year: "2-digit",
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   hour12: true,
//                 }
//               );

//               return (
//                 <div
//                   key={item._id || index}
//                   className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 p-4 rounded-lg shadow-md"
//                 >
//                   {/* Left - Date */}
//                   <div className="text-gray-500 text-sm md:text-base font-semibold w-1/3">
//                     {rechargeDate}
//                   </div>

//                   {/* Middle - Paid Amount & Source */}
//                   <div className="text-center w-1/3">
//                     <p className="text-blue-600 font-semibold text-sm md:text-base">
//                       ₹ {Math.abs(item.amount).toFixed(2)}
//                     </p>
//                     <p className="text-blue-600 text-xs md:text-sm capitalize">
//                       {item.source || "Other"}
//                     </p>
//                   </div>

//                   <div className="text-center w-1/3">
//                     <p
//                       className={` font-semobold text-sm md:text-base ${
//                         isSuccess ? "text-green-600" : "text-red-500"
//                       }`}
//                     >
//                       {isSuccess ? "Success" : "Failed"}
//                     </p>
//                   </div>

//                   {/* Right - Recharge Amount & Status */}
//                   <div className="flex items-center justify-end gap-1 w-1/3">
//                     <p
//                       className={`font-semobold text-sm md:text-base ${
//                         isSuccess ? "text-green-600" : "text-red-500"
//                       }`}
//                     >
//                       ₹{Math.abs(item.amount).toFixed(2)}
//                     </p>
//                     {isSuccess && (
//                       <ArrowDownCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
//                     )}
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RechargeHistory;
import React, { useEffect, useState, useMemo } from "react";
import { ArrowDownCircle, Loader2 } from "lucide-react";
import axios from "axios";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { setBreadcrumbs, setHeaderTitle } from "../../redux/slice/headerSlice";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RechargeHistory = () => {
  const dispatch = useDispatch();
  const { meterId } = useParams();

  const [historyData, setHistoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    dispatch(setHeaderTitle("Top Up History"));
    dispatch(setBreadcrumbs([{ label: "Top Up History" }]));
  }, [dispatch]);

  const fetchRechargeHistory = async () => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams();

      if (startDate) params.append("startTime", startDate.toISOString());
      if (endDate) params.append("endTime", endDate.toISOString());
      if (searchTerm) params.append("search", searchTerm);
      params.append("page", page);
      params.append("limit", limit);

      const url = `http://localhost:3000/api/v1/payment/get-payment-history/6874d79fbd06639d75c593a2?${params.toString()}`;

      const res = await axios.get(url);

      if (res.data.success) {
        const { records, totalPages } = res.data.data;
        setHistoryData(records || []);
        setTotalPages(totalPages || 1);
      } else {
        setHistoryData([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Error fetching recharge history:", error);
      setHistoryData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRechargeHistory();
  }, [startDate, endDate, searchTerm, page]);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

  // 💡 Memoized Header and Title to avoid recomputation
  const headerSection = useMemo(() => (
    <>
      <Header />
      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          Recharge History
        </h2>
      </div>
    </>
  ), []);

  return (
    <div className="p-bg-blue-200/10 min-h-screen">
      {headerSection}

      <div className="p-4 max-w-7xl mx-auto">
        {/* 🔍 Filters */}
        <div className="mb-4 flex flex-wrap gap-4 items-center">
          <input
            type="text"
            placeholder="Search by transaction ID or remarks..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setPage(1);
            }}
            placeholderText="Start Date"
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <DatePicker
            selected={endDate}
            onChange={(date) => {
              setEndDate(date);
              setPage(1);
            }}
            placeholderText="End Date"
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* 🔄 Loader or List */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
          </div>
        ) : (
          <div className="space-y-4 bg-white rounded-lg shadow-md p-4 min-h-[400px]">
            {historyData.length === 0 ? (
              <p className="text-gray-600 text-center">No recharge history found.</p>
            ) : (
              <>
                {historyData.map((item, index) => {
                  const isSuccess = item.status === "success";
                  const rechargeDate = new Date(item.updatedAt).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  });

                  return (
                    <div
                      key={item._id || index}
                      className="flex justify-between items-center px-4 py-3 bg-gray-100 rounded-lg shadow-sm"
                    >
                      <div className="text-gray-500 text-sm md:text-base font-semibold w-1/3">
                        {rechargeDate}
                      </div>

                      <div className="text-center w-1/3">
                        <p className="text-blue-600 font-semibold text-sm md:text-base">
                          ₹ {Math.abs(item.amount).toFixed(2)}
                        </p>
                        <p className="text-blue-600 text-xs md:text-sm capitalize">
                          {item.source || "Other"}
                        </p>
                      </div>

                      <div className="text-center w-1/3">
                        <p
                          className={`font-semibold text-sm md:text-base ${
                            isSuccess ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {isSuccess ? "Success" : "Failed"}
                        </p>
                      </div>

                      <div className="flex items-center justify-end gap-1 w-1/3">
                        <p
                          className={`font-semibold text-sm md:text-base ${
                            isSuccess ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          ₹{Math.abs(item.amount).toFixed(2)}
                        </p>
                        {isSuccess && (
                          <ArrowDownCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* 🔢 Pagination */}
                <div className="flex justify-center mt-6 gap-4 items-center">
                  <button
                    onClick={handlePrev}
                    disabled={page <= 1}
                    className="px-4 py-2 bg-gray-200 cursor-pointer text-sm rounded-md disabled:opacity-50"
                  >
                    Prev
                  </button>
                  <span className="text-sm">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={page >= totalPages}
                    className="px-4 py-2 bg-gray-200 text-sm cursor-pointer rounded-md disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RechargeHistory;
