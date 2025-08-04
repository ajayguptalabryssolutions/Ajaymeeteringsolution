// import React, { useState } from "react";
// import { format } from "date-fns";

// const dummyData = [
//   {
//     meterId: "M-03000000000F3BC1",
//     username: "Ajay Kumar",
//     userType: "Assigned",
//     meterName: "Floor 6, springhouse coworking, JMD Galleria Mall",
//     dueBalance: 1200.5,
//     lastUpdated: new Date("2025-08-01T10:15:00"),
//     status: "Online",
//     remarks: "",
//   },
//   {
//     meterId: "M-01000000499602D2",
//     username: "Unassigned",
//     userType: "Unassigned",
//     meterName: "Main Building Meter",
//     dueBalance: 0,
//     lastUpdated: null,
//     status: "Offline",
//     remarks: "Balance cleared",
//   },
//   {
//     meterId: "M-03000000000F3DDD",
//     username: "Rohit Sinha",
//     userType: "Assigned",
//     meterName: "Floor 6, springhouse coworking, JMD Galleria Mall",
//     dueBalance: 500,
//     lastUpdated: new Date("2025-07-30T08:40:00"),
//     status: "Online",
//     remarks: "Overdue since 2 days",
//   },
// ];

// const StatusPill = ({ status }) => (
//   <span
//     className={`text-sm px-3 py-1 rounded-full font-medium ${
//       status === "Online" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
//     }`}
//   >
//     {status}
//   </span>
// );

// const DueBalanceUser = () => {
//   const [searchText, setSearchText] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");

//   const filteredData = dummyData.filter((item) => {
//     const search = searchText.toLowerCase();

//     const matchesText =
//       item.username.toLowerCase().includes(search) ||
//       item.meterId.toLowerCase().includes(search) ||
//       item.meterName.toLowerCase().includes(search);

//     const updatedTime = item.lastUpdated ? new Date(item.lastUpdated) : null;

//     const matchesStart = startTime ? updatedTime && updatedTime >= new Date(startTime) : true;
//     const matchesEnd = endTime ? updatedTime && updatedTime <= new Date(endTime) : true;

//     return matchesText && matchesStart && matchesEnd;
//   });

//   return (
//     <div className="p-6 bg-blue-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-1">Due Balance Panel</h1>
//       <p className="text-gray-600 mb-6">Search & Filter due balances and updates</p>

//       <div className="bg-white p-4 rounded-lg shadow-md mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//         <input
//           type="text"
//           placeholder="Search Meter ID, Name, Username..."
//           className="w-full border px-4 py-2 rounded-md"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />

//         <input
//           type="datetime-local"
//           className="w-full border px-4 py-2 rounded-md"
//           value={startTime}
//           onChange={(e) => setStartTime(e.target.value)}
//         />

//         <input
//           type="datetime-local"
//           className="w-full border px-4 py-2 rounded-md"
//           value={endTime}
//           onChange={(e) => setEndTime(e.target.value)}
//         />
//       </div>

//       {filteredData.length === 0 ? (
//         <p className="text-center text-gray-500">No data found</p>
//       ) : (
//         filteredData.map((meter, index) => (
//           <div
//             key={index}
//             className="bg-white p-5 rounded-lg shadow mb-4 flex flex-col md:flex-row justify-between gap-4"
//           >
//             <div>
//               <p className="text-sm text-gray-500">Meter ID</p>
//               <p className="text-blue-600 font-medium">{meter.meterId}</p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500">User</p>
//               <p className="font-semibold">
//                 {meter.username}
//                 {meter.userType === "Unassigned" && (
//                   <span className="ml-2 text-xs text-red-500">(Unassigned)</span>
//                 )}
//               </p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500">Meter Name</p>
//               <p>{meter.meterName}</p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500">Due Balance</p>
//               <p className="text-red-600 font-semibold">₹{meter.dueBalance.toFixed(2)}</p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500">Last Updated</p>
//               <p className="text-blue-600">
//                 {meter.lastUpdated
//                   ? format(new Date(meter.lastUpdated), "dd/MM/yyyy HH:mm")
//                   : "Invalid Date"}
//               </p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500">Status</p>
//               <StatusPill status={meter.status} />
//             </div>
//           </div>
//         ))
//       )}
//     </div>
// )}

// export default DueBalanceUser;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { format } from "date-fns";
// import { useParams } from "react-router-dom";

// const StatusPill = ({ status }) => (
//   <span
//     className={`text-sm px-3 py-1 rounded-full font-medium ${
//       status === "online" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
//     }`}
//   >
//     {status.charAt(0).toUpperCase() + status.slice(1)}
//   </span>
// );

// const DueBalanceUser = () => {
//   const [data, setData] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");

//   const {adminId} = useParams()

//   // const adminId = "68774978c2cb68989bbf187b";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3005/api/v1/user/negative-payments/${adminId}`
//         );
//         setData(res.data?.data || []);
//       } catch (err) {
//         console.error("Failed to fetch negative payments:", err);
//       }
//     };
//     fetchData();
//   }, [adminId]);

//   const filteredData = data.filter(({ meter, assignedUser, payment }) => {
//     const search = searchText.toLowerCase();
//     const lastUpdated = payment?.updatedAt ? new Date(payment.updatedAt) : null;

//     const matchesText =
//       meter?.meterId?.toLowerCase().includes(search) ||
//       meter?.name?.toLowerCase().includes(search) ||
//       assignedUser?.name?.toLowerCase().includes(search);

//     const matchesStart = startTime ? lastUpdated && lastUpdated >= new Date(startTime) : true;
//     const matchesEnd = endTime ? lastUpdated && lastUpdated <= new Date(endTime) : true;

//     return matchesText && matchesStart && matchesEnd;
//   });

//   return (
//     <div className="p-2 sm:p-4 bg-blue-50 min-h-screen">
//       <h1 className="text-xl sm:text-xl md:text-3xl font-semibold text-gray-900 mb-2">Due Balance</h1>
//       {/* <p className="text-gray-600 mb-6">Search & Filter due balances and updates</p> */}

//       {/* Filters */}
//       <div className="bg-white p-4 flex justify-between rounded-lg shadow-md mb-2 grid-cols-1 md:grid-cols-3 gap-4">
//       <div>
//         <input
//           type="text"
//           placeholder="Search Meter ID, Name, Username..."
//           className="w-full border px-4 py-2 rounded-md"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         </div>
//         <div className="flex gap-2">
//         <input
//           type="date"
//           className="w-full border px-4 py-2 rounded-md"
//           value={startTime}
//           onChange={(e) => setStartTime(e.target.value)}
//         />
//         <input
//           type="date"
//           className="w-full border px-4 py-2 rounded-md"
//           value={endTime}
//           onChange={(e) => setEndTime(e.target.value)}
//         />
//         </div>
//       </div>

//       {/* Result */}
//       {filteredData.length === 0 ? (
//         <p className="text-center text-gray-500">No due balances found</p>
//       ) : (
//         filteredData.map((entry, index) => {
//           const { meter, assignedUser, payment } = entry;
//           return (
//             <div
//               key={index}
//               className="bg-white p-5 rounded-lg shadow mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap"
//             >
//               <div>
//                 <p className="text-md font-semibold text-gray-500">Meter ID</p>
//                 <p className="text-blue-600 font-medium">{meter?.meterId}</p>
//               </div>

//               <div>
//                 <p className="text-md font-semibold text-gray-500">User</p>
//                 <p className="font-semibold">{assignedUser?.name || "Unassigned"}</p>
//               </div>

//                <div>
//                 <p className="text-md font-semibold text-gray-500">Email</p>
//                 <p className="font-semibold">{assignedUser?.email || "Unassigned"}</p>
//               </div>

//               <div className="min-w-[180px]">
//                 <p className="text-md font-semibold text-gray-500">Meter Name</p>
//                 <p>{meter?.name}</p>
//               </div>

//               <div>
//                 <p className="text-md font-semibold text-gray-500">Due Balance</p>
//                 <p className="text-red-600 font-semibold">
//                   ₹{(payment?.amount ?? 0).toFixed(2)}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-md font-semibold text-gray-500">Last Updated</p>
//                 <p className="text-blue-600">
//                   {payment?.updatedAt
//                     ? format(new Date(payment.updatedAt), "dd/MM/yyyy HH:mm")
//                     : "N/A"}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-md font-semibold text-gray-500">Status</p>
//                 <StatusPill status={meter?.status || "offline"} />
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default DueBalanceUser;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { format } from "date-fns";
// import { useParams } from "react-router-dom";

// const StatusPill = ({ status }) => (
//   <span
//     className={`inline-block text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium ${
//       status === "online"
//         ? "bg-green-100 text-green-700"
//         : "bg-red-100 text-red-600"
//     }`}
//   >
//     {status.charAt(0).toUpperCase() + status.slice(1)}
//   </span>
// );

// const DueBalanceUser = () => {
//   const [data, setData] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const { adminId } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3005/api/v1/user/negative-payments/${adminId}`
//         );
//         setData(res.data?.data || []);
//       } catch (err) {
//         console.error("Failed to fetch negative payments:", err);
//       }
//     };
//     fetchData();
//   }, [adminId]);

//   const filteredData = data.filter(({ meter, assignedUser, payment }) => {
//     const search = searchText.toLowerCase();
//     const lastUpdated = payment?.updatedAt ? new Date(payment.updatedAt) : null;

//     const matchesText =
//       meter?.meterId?.toLowerCase().includes(search) ||
//       meter?.name?.toLowerCase().includes(search) ||
//       assignedUser?.name?.toLowerCase().includes(search);

//     const matchesStart = startTime
//       ? lastUpdated && lastUpdated >= new Date(startTime)
//       : true;
//     const matchesEnd = endTime
//       ? lastUpdated && lastUpdated <= new Date(endTime)
//       : true;

//     return matchesText && matchesStart && matchesEnd;
//   });

//   return (
//     <div className="min-h-screen bg-blue-50 p-3 sm:p-4 lg:p-6">
//       {/* Header */}
//       <div className="mb-4 sm:mb-6">
//         <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-1">
//           Due Balance
//         </h1>
//         <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
//           Search & Filter due balances and updates
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-md mb-4 sm:mb-6 p-3 sm:p-4 lg:p-6">
//         <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
//           <div className="flex-1 lg:flex-2">
//             <input
//               type="text"
//               placeholder="Search Meter ID, Name, Username..."
//               className="w-full border border-gray-300 px-4 py-2.5 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-1">
//             <input
//               type="date"
//               className="w-full border border-gray-300 px-4 py-2.5 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               value={startTime}
//               onChange={(e) => setStartTime(e.target.value)}
//             />
//             <input
//               type="date"
//               className="w-full border border-gray-300 px-4 py-2.5 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               value={endTime}
//               onChange={(e) => setEndTime(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Results */}
//       <div className="space-y-4">
//         {filteredData.length === 0 ? (
//           <div className="bg-white rounded-lg shadow-md p-8 text-center">
//             <div className="text-gray-400 mb-4">
//               <svg
//                 className="mx-auto h-12 w-12"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1}
//                   d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                 />
//               </svg>
//             </div>
//             <p className="text-gray-500 text-sm sm:text-base">
//               No due balances found
//             </p>
//           </div>
//         ) : (
//           filteredData.map(({ meter, assignedUser, payment }, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 sm:p-5 lg:p-6"
//             >
//               <div className="flex flex-col md:grid md:grid-cols-3 xl:grid-cols-7 gap-4 items-start sm:items-center">
//                 {/* Meter ID */}
//                 <div className="flex flex-col">
//                   <span className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
//                     Meter ID
//                   </span>
//                   <span className="text-blue-600 font-semibold text-sm sm:text-base break-all">
//                     {meter?.meterId}
//                   </span>
//                 </div>

//                 {/* User */}
//                 <div className="flex flex-col">
//                   <span className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
//                     User
//                   </span>
//                   <span className="font-semibold text-sm sm:text-base">
//                     {assignedUser?.name || "Unassigned"}
//                   </span>
//                 </div>

//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <span className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
//                     Email
//                   </span>
//                   <span className="text-sm break-words">
//                     {assignedUser?.email || "Unassigned"}
//                   </span>
//                 </div>

//                 {/* Meter Name */}
//                 <div className="flex flex-col">
//                   <span className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
//                     Meter Name
//                   </span>
//                   <span className="text-sm">{meter?.name}</span>
//                 </div>

//                 {/* Due Balance */}
//                 <div className="flex flex-col">
//                   <span className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
//                     Due Balance
//                   </span>
//                   <span className="text-red-600 font-bold text-base sm:text-lg">
//                     ₹{(payment?.amount ?? 0).toFixed(2)}
//                   </span>
//                 </div>

//                 {/* Last Updated */}
//                 <div className="flex flex-col">
//                   <span className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
//                     Last Updated
//                   </span>
//                   <span className="text-blue-600 text-sm">
//                     {payment?.updatedAt
//                       ? format(new Date(payment.updatedAt), "dd/MM/yyyy HH:mm")
//                       : "N/A"}
//                   </span>
//                 </div>

//                 {/* Status Pill */}
//                 <div className="flex justify-start md:justify-end">
//                   <StatusPill status={meter?.status || "offline"} />
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default DueBalanceUser;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { adminDashboard } from "../../api/apiService";

const StatusPill = ({ status }) => (
  <span
    className={`inline-block capitalize text-xs sm:text-sm px-3 py-1 rounded-full font-medium ${
      status === "online"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-600"
    }`}
  >
    {status || "Offline"}
  </span>
);

const DueBalanceUser = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const { adminId } = useParams();

  const fetchData = async () => {
    try {
      // const res = await axios.get(
      //   `http://localhost:3005/api/v1/user/negative-payments/${adminId}`
      // );

      const res = await adminDashboard.getDueBalanceUser(adminId);
      setData(res.data?.data || []);
    } catch (err) {
      console.error("Failed to fetch negative payments:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [adminId]);

  const filteredData = data.filter(({ meter, assignedUser, payment }) => {
    const search = searchText.toLowerCase();
    const lastUpdated = payment?.updatedAt ? new Date(payment.updatedAt) : null;

    const matchesText =
      meter?.meterId?.toLowerCase().includes(search) ||
      meter?.name?.toLowerCase().includes(search) ||
      assignedUser?.name?.toLowerCase().includes(search);

    const matchesStart = startTime
      ? lastUpdated && lastUpdated >= new Date(startTime)
      : true;
    const matchesEnd = endTime
      ? lastUpdated && lastUpdated <= new Date(endTime)
      : true;

    return matchesText && matchesStart && matchesEnd;
  });

  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-4 lg:p-4">
      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-1">
          Due Balance
        </h1>
        <p className="text-sm text-gray-600 hidden sm:block">
          Search and filter meters with negative balance.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4">
        <div className="flex flex-col justify-between sm:flex-row sm:items-end gap-4 flex-wrap">
          {/* Search Input */}
          <div className="w-full sm:w-auto">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Search by meterId
            </label>
            <input
              type="text"
              placeholder="Search Meter ID, User Name, Meter Name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>

          {/* Date Filters */}
          <div className="flex gap-6 w-full sm:w-auto">
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Start Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                }}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                End Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={endTime}
                onChange={(e) => {
                  setEndTime(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredData.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            <svg
              className="mx-auto h-12 w-12 text-gray-300 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p>No due balances found</p>
          </div>
        ) : (
          filteredData.map(({ meter, assignedUser, payment }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-5"
            >
              <div className="text-sm w-full grid grid-cols-2 sm:grid-cols-7 gap-4 text-center">
                {/* Meter ID */}
                <div className="min-w-0">
                  <p className="text-md font-semibold text-gray-500">
                    Meter ID
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-blue-600 break-all">
                    {meter?.meterId}
                  </p>
                </div>

                {/* User */}
                <div>
                  <p className="text-md font-semibold text-gray-500">User</p>
                  <p className="text-sm sm:text-base font-medium">
                    {assignedUser?.name || "Unassigned"}
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="text-md font-semibold text-gray-500">Phone</p>
                  <p className="text-sm break-words">
                    {assignedUser?.phone || "Unassigned"}
                  </p>
                </div>

                {/* Meter Name */}
                <div>
                  <p className="text-md font-semibold text-gray-500">
                    Meter Name
                  </p>
                  <p className="text-sm">{meter?.name}</p>
                </div>

                {/* Due Balance */}
                <div>
                  <p className="text-md font-semibold text-gray-500">
                    Due Balance
                  </p>
                  <p className="text-red-600 font-bold text-base sm:text-lg">
                    ₹{(payment?.amount ?? 0).toFixed(2)}
                  </p>
                </div>

                {/* Last Updated */}
                <div>
                  <p className="text-md font-semibold text-gray-500">
                    Last Updated
                  </p>
                  <p className="text-sm text-blue-700">
                    {payment?.updatedAt
                      ? format(new Date(payment.updatedAt), "dd/MM/yyyy HH:mm")
                      : "N/A"}
                  </p>
                </div>

                {/* Status */}
                <div className="">
                  <p className="text-md font-semibold text-gray-500">status</p>
                  <StatusPill status={meter?.status || "offline"} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DueBalanceUser;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { format } from "date-fns";
// import { useParams } from "react-router-dom";

// const StatusPill = ({ status }) => (
//   <span
//     className={`inline-block text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium ${
//       status === "online" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
//     }`}
//   >
//     {status.charAt(0).toUpperCase() + status.slice(1)}
//   </span>
// );

// const DueBalanceUser = () => {
//   const [data, setData] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");

//   const {adminId} = useParams()

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3005/api/v1/user/negative-payments/${adminId}`
//         );
//         setData(res.data?.data || []);
//       } catch (err) {
//         console.error("Failed to fetch negative payments:", err);
//       }
//     };
//     fetchData();
//   }, [adminId]);

//   const filteredData = data.filter(({ meter, assignedUser, payment }) => {
//     const search = searchText.toLowerCase();
//     const lastUpdated = payment?.updatedAt ? new Date(payment.updatedAt) : null;

//     const matchesText =
//       meter?.meterId?.toLowerCase().includes(search) ||
//       meter?.name?.toLowerCase().includes(search) ||
//       assignedUser?.name?.toLowerCase().includes(search);

//     const matchesStart = startTime ? lastUpdated && lastUpdated >= new Date(startTime) : true;
//     const matchesEnd = endTime ? lastUpdated && lastUpdated <= new Date(endTime) : true;

//     return matchesText && matchesStart && matchesEnd;
//   });

//   return (
//     <div className="min-h-screen bg-blue-50 p-3 sm:p-4 lg:p-6">
//       {/* Header */}
//       <div className="mb-4 sm:mb-6">
//         <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-1">
//           Due Balance
//         </h1>
//         <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
//           Search & Filter due balances and updates
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-md mb-4 sm:mb-6 p-3 sm:p-4 lg:p-6">
//         <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
//           {/* Search Input */}
//           <div className="flex-1 lg:flex-2">
//             <input
//               type="text"
//               placeholder="Search Meter ID, Name, Username..."
//               className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//           </div>

//           {/* Date Filters */}
//           <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-1">
//             <div className="flex-1">
//               <input
//                 type="date"
//                 className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//               />
//             </div>
//             <div className="flex-1">
//               <input
//                 type="date"
//                 className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Results */}
//       <div className="space-y-3 sm:space-y-4">
//         {filteredData.length === 0 ? (
//           <div className="bg-white rounded-lg shadow-md p-8 sm:p-12 text-center">
//             <div className="text-gray-400 mb-4">
//               <svg className="mx-auto h-12 w-12 sm:h-16 sm:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//             </div>
//             <p className="text-gray-500 text-sm sm:text-base">No due balances found</p>
//           </div>
//         ) : (
//           filteredData.map((entry, index) => {
//             const { meter, assignedUser, payment } = entry;
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
//               >
//                 {/* Mobile Layout */}
//                 <div className="block sm:hidden p-4 space-y-3">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className="text-xs font-medium text-gray-500 tracking-wide">Meter ID</p>
//                       <p className="text-blue-600 font-semibold text-sm">{meter?.meterId}</p>
//                     </div>
//                     <StatusPill status={meter?.status || "offline"} />
//                   </div>

//                   <div className="grid grid-cols-1 gap-3">
//                     <div>
//                       <p className="text-xs font-medium text-gray-500 tracking-wide">User</p>
//                       <p className="font-medium text-sm">{assignedUser?.name || "Unassigned"}</p>
//                     </div>

//                     <div>
//                       <p className="text-xs font-medium text-gray-500 tracking-wide">Email</p>
//                       <p className="font-medium text-sm break-all">{assignedUser?.email || "Unassigned"}</p>
//                     </div>

//                     <div>
//                       <p className="text-xs font-medium text-gray-500 tracking-wide">Meter Name</p>
//                       <p className="text-sm">{meter?.name}</p>
//                     </div>

//                     <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//                       <div>
//                         <p className="text-xs font-medium text-gray-500 tracking-wide">Due Balance</p>
//                         <p className="text-red-600 font-bold text-lg">₹{(payment?.amount ?? 0).toFixed(2)}</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-xs font-medium text-gray-500 tracking-wide">Last Updated</p>
//                         <p className="text-blue-600 text-xs">
//                           {payment?.updatedAt
//                             ? format(new Date(payment.updatedAt), "dd/MM/yyyy HH:mm")
//                             : "N/A"}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Tablet Layout */}
//                 <div className="hidden sm:block md:hidden p-4 sm:p-5">
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide">Meter ID</p>
//                       <p className="text-blue-600 font-semibold">{meter?.meterId}</p>
//                     </div>
//                     <div className="text-right">
//                       <StatusPill status={meter?.status || "offline"} />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide">User</p>
//                       <p className="font-semibold">{assignedUser?.name || "Unassigned"}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide">Due Balance</p>
//                       <p className="text-red-600 font-bold text-lg">₹{(payment?.amount ?? 0).toFixed(2)}</p>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 gap-3">
//                     <div>
//                       <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide">Email</p>
//                       <p className="font-medium break-all">{assignedUser?.email || "Unassigned"}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide">Meter Name</p>
//                       <p>{meter?.name}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide">Last Updated</p>
//                       <p className="text-blue-600">
//                         {payment?.updatedAt
//                           ? format(new Date(payment.updatedAt), "dd/MM/yyyy HH:mm")
//                           : "N/A"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Desktop Layout */}
//                 <div className="hidden md:block p-4 lg:p-6">
//                   <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-6 items-center">
//                     <div>
//                       <p className="text-xs lg:text-sm font-medium text-gray-500 tracking-wide mb-1">Meter ID</p>
//                       <p className="text-blue-600 font-semibold">{meter?.meterId}</p>
//                     </div>

//                     <div>
//                       <p className="text-xs lg:text-sm font-medium text-gray-500 tracking-wide mb-1">User</p>
//                       <p className="font-semibold">{assignedUser?.name || "Unassigned"}</p>
//                     </div>

//                     <div className="xl:col-span-1">
//                       <p className="text-xs lg:text-sm font-medium text-gray-500 tracking-wide mb-1">Email</p>
//                       <p className="font-medium break-all text-sm">{assignedUser?.email || "Unassigned"}</p>
//                     </div>

//                     <div>
//                       <p className="text-xs lg:text-sm font-medium text-gray-500 tracking-wide mb-1">Meter Name</p>
//                       <p className="text-sm lg:text-base">{meter?.name}</p>
//                     </div>

//                     <div>
//                       <p className="text-xs lg:text-sm font-medium text-gray-500 tracking-wide mb-1">Due Balance</p>
//                       <p className="text-red-600 font-bold text-lg">₹{(payment?.amount ?? 0).toFixed(2)}</p>
//                     </div>

//                     <div>
//                       <p className="text-xs lg:text-sm font-medium text-gray-500 tracking-wide mb-1">Last Updated</p>
//                       <p className="text-blue-600 text-sm">
//                         {payment?.updatedAt
//                           ? format(new Date(payment.updatedAt), "dd/MM/yyyy HH:mm")
//                           : "N/A"}
//                       </p>
//                     </div>

//                     <div className="flex justify-end">
//                       <StatusPill status={meter?.status || "offline"} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default DueBalanceUser;
