// import React, { useState } from 'react';
// import { Eye, ArrowLeft, Zap, Calendar, Activity, Filter } from 'lucide-react';

// const AdminUserList = () => {
//   const [currentView, setCurrentView] = useState('main');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [dateFilter, setDateFilter] = useState('7days');

// const mockUsers = [
//   {
//     id: 'U001',
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     meterCount: 5,
//     dailyData: [
//       { date: '2025-07-15', usage: 10 },
//       { date: '2025-07-16', usage: 15 },
//       { date: '2025-07-17', usage: 12 }
//     ]
//   },
//   {
//     id: 'U002',
//     name: 'Jane Smith',
//     email: 'jane.smith@example.com',
//     meterCount: 3,
//     dailyData: [
//       { date: '2025-07-15', usage: 8 },
//       { date: '2025-07-16', usage: 11 },
//       { date: '2025-07-17', usage: 9 }
//     ]
//   }
// ];


//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     setCurrentView('details');
//   };

//   const renderMainView = () => (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-lg font-semibold text-gray-700">Users List</h2>
//         <div className="flex items-center space-x-3">
//           <Calendar className="text-gray-500" />
//           <select
//             value={dateFilter}
//             onChange={(e) => setDateFilter(e.target.value)}
//             className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-2 py-1"
//           >
//             <option value="7days">Last 7 Days</option>
//             <option value="30days">Last 30 Days</option>
//           </select>
//         </div>
//       </div>
//       <table className="min-w-full divide-y divide-gray-200 border rounded-lg overflow-hidden">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meter Count</th>
//             <th className="px-6 py-3"></th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {mockUsers.map((user) => (
//             <tr key={user.id} className="hover:bg-gray-50">
//               <td className="px-6 py-4">
//                 <div className="text-sm font-medium text-gray-700">{user.name}</div>
//               </td>
//               <td className="px-6 py-4">
//                 <div className="text-sm text-gray-500">{user.email}</div>
//               </td>
//               <td className="px-6 py-4">
//                 <span className="text-sm text-gray-500">{user.id}</span>
//               </td>
//               <td className="px-6 py-4">
//                 <span className="text-sm text-gray-500">{user.meterCount}</span>
//               </td>
//               <td className="px-6 py-4 text-right">
//                 <button
//                   onClick={() => handleUserClick(user)}
//                   className="text-indigo-600 hover:text-indigo-900"
//                 >
//                   <Eye className="w-4 h-4" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderDetailsView = () => (
//     <div>
//       <button
//         onClick={() => setCurrentView('main')}
//         className="flex items-center text-sm text-blue-600 hover:underline mb-4"
//       >
//         <ArrowLeft className="w-4 h-4 mr-1" /> Back
//       </button>
//       <div className="bg-white rounded-lg shadow p-6 mb-6">
//         <h2 className="text-lg font-semibold text-gray-750 mb-4">User Information</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <div className="text-sm font-medium text-gray-900">{selectedUser.name}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">User ID</label>
//             <div className="text-sm font-medium text-gray-900">{selectedUser.id}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">email</label>
//             <div className="text-sm text-gray-500">{selectedUser.email}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Meter Count</label>
//             <div className="text-sm text-gray-500">{selectedUser.meterCount}</div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white rounded-lg shadow p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Usage Data</h3>
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage (kWh)</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {selectedUser.dailyData.map((entry, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 text-sm text-gray-900">{entry.date}</td>
//                 <td className="px-6 py-4 text-sm text-gray-500">{entry.usage}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-750 mb-6">Admin Dashboard</h1>
//       {currentView === 'main' ? renderMainView() : renderDetailsView()}
//     </div>
//   );
// };

// export default AdminUserList;


















// import React, { useState } from 'react';
// import { Eye, ArrowLeft, Zap, Calendar, Activity, Filter } from 'lucide-react';

// const AdminUserList = () => {
//   const [currentView, setCurrentView] = useState('main');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [dateFilter, setDateFilter] = useState('7days');
//   const [searchTerm, setSearchTerm] = useState('');

//   const mockUsers = [
//     {
//       id: 'U001',
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       meterCount: 5,
//       dailyData: [
//         { date: '2025-07-15', usage: 10 },
//         { date: '2025-07-16', usage: 15 },
//         { date: '2025-07-17', usage: 12 }
//       ]
//     },
//     {
//       id: 'U002',
//       name: 'Jane Smith',
//       email: 'jane.smith@example.com',
//       meterCount: 3,
//       dailyData: [
//         { date: '2025-07-15', usage: 8 },
//         { date: '2025-07-16', usage: 11 },
//         { date: '2025-07-17', usage: 9 }
//       ]
//     }
//   ];

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     setCurrentView('details');
//   };

//   const filteredUsers = mockUsers.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.id.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const renderMainView = () => (
//     <div>
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
//         <h2 className="text-lg font-semibold text-gray-700">Users List</h2>
//         <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
//           <input
//             type="text"
//             placeholder="Search by Name, Email or ID"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-3 py-1"
//           />
//           <div className="flex items-center space-x-2">
//             <Calendar className="text-gray-500" />
//             <select
//               value={dateFilter}
//               onChange={(e) => setDateFilter(e.target.value)}
//               className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-2 py-1"
//             >
//               <option value="7days">Last 7 Days</option>
//               <option value="30days">Last 30 Days</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <table className="min-w-full divide-y divide-gray-200 border rounded-lg overflow-hidden">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meter Count</th>
//             <th className="px-6 py-3"></th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   <div className="text-sm font-medium text-gray-700">{user.name}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="text-sm text-gray-500">{user.email}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="text-sm text-gray-500">{user.id}</span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="text-sm text-gray-500">{user.meterCount}</span>
//                 </td>
//                 <td className="px-6 py-4 text-right">
//                   <button
//                     onClick={() => handleUserClick(user)}
//                     className="text-indigo-600 hover:text-indigo-900"
//                   >
//                     <Eye className="w-4 h-4" />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
//                 No users found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderDetailsView = () => (
//     <div>
//       <button
//         onClick={() => setCurrentView('main')}
//         className="flex items-center text-sm text-blue-600 hover:underline mb-4"
//       >
//         <ArrowLeft className="w-4 h-4 mr-1" /> Back
//       </button>
//       <div className="bg-white rounded-lg shadow p-6 mb-6">
//         <h2 className="text-lg font-semibold text-gray-750 mb-4">User Information</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <div className="text-sm font-medium text-gray-900">{selectedUser.name}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">User ID</label>
//             <div className="text-sm font-medium text-gray-900">{selectedUser.id}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">email</label>
//             <div className="text-sm text-gray-500">{selectedUser.email}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Meter Count</label>
//             <div className="text-sm text-gray-500">{selectedUser.meterCount}</div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white rounded-lg shadow p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Usage Data</h3>
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage (kWh)</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {selectedUser.dailyData.map((entry, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 text-sm text-gray-900">{entry.date}</td>
//                 <td className="px-6 py-4 text-sm text-gray-500">{entry.usage}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-750 mb-6">Admin Dashboard</h1>
//       {currentView === 'main' ? renderMainView() : renderDetailsView()}
//     </div>
//   );
// };

// export default AdminUserList;








// import React, { useState } from 'react';
// import { Eye, ArrowLeft, Calendar } from 'lucide-react';

// const AdminUserList = () => {
//   const [currentView, setCurrentView] = useState('main');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const mockUsers = [
//     {
//       id: 'U001',
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       meterCount: 5,
//       dailyData: [
//         { date: '2025-07-15', usage: 10 },
//         { date: '2025-07-16', usage: 15 },
//         { date: '2025-07-17', usage: 12 }
//       ]
//     },
//     {
//       id: 'U002',
//       name: 'Jane Smith',
//       email: 'jane.smith@example.com',
//       meterCount: 3,
//       dailyData: [
//         { date: '2025-07-15', usage: 8 },
//         { date: '2025-07-16', usage: 11 },
//         { date: '2025-07-17', usage: 9 }
//       ]
//     }
//   ];

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     setCurrentView('details');
//   };

//   const filteredUsers = mockUsers.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.id.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const renderMainView = () => (
//     <div>
//       <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
//         <div>
//           <h2 className="text-lg font-semibold text-gray-700">Users List</h2>
//         </div>

//         <div className="flex flex-wrap gap-3 items-center">
//           <input
//             type="text"
//             placeholder="Search by Name, Email or ID"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-3 py-1"
//           />

//           <div className="flex items-center gap-2">
//             <Calendar className="text-gray-500 w-4 h-4" />
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-2 py-1"
//             />
//             <span className="text-sm font-medium text-gray-500">to</span>
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-2 py-1"
//             />
//           </div>
//         </div>
//       </div>

//       <table className="min-w-full divide-y divide-gray-200 border rounded-lg overflow-hidden">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meter Count</th>
//             <th className="px-6 py-3"></th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   <div className="text-sm font-medium text-gray-700">{user.name}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="text-sm text-gray-500">{user.email}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="text-sm text-gray-500">{user.id}</span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="text-sm text-gray-500">{user.meterCount}</span>
//                 </td>
//                 <td className="px-6 py-4 text-right">
//                   <button
//                     onClick={() => handleUserClick(user)}
//                     className="text-indigo-600 hover:text-indigo-900"
//                   >
//                     <Eye className="w-4 h-4" />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
//                 No users found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderDetailsView = () => (
//     <div>
//       <button
//         onClick={() => setCurrentView('main')}
//         className="flex items-center text-sm text-blue-600 hover:underline mb-4"
//       >
//         <ArrowLeft className="w-4 h-4 mr-1" /> Back
//       </button>
//       <div className="bg-white rounded-lg shadow p-6 mb-6">
//         <h2 className="text-lg font-semibold text-gray-750 mb-4">User Information</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <div className="text-sm font-medium text-gray-900">{selectedUser.name}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">User ID</label>
//             <div className="text-sm font-medium text-gray-900">{selectedUser.id}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">email</label>
//             <div className="text-sm text-gray-500">{selectedUser.email}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Meter Count</label>
//             <div className="text-sm text-gray-500">{selectedUser.meterCount}</div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white rounded-lg shadow p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Usage Data</h3>
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage (kWh)</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {selectedUser.dailyData.map((entry, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 text-sm text-gray-900">{entry.date}</td>
//                 <td className="px-6 py-4 text-sm text-gray-500">{entry.usage}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-750 mb-6">Admin Dashboard</h1>
//       {currentView === 'main' ? renderMainView() : renderDetailsView()}
//     </div>
//   );
// };

// export default AdminUserList;



// import React, { useState } from 'react';
// import { Eye, ArrowLeft, Calendar } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'; // Add navigation

// const AdminUserList = () => {
//   const navigate = useNavigate(); // Hook to navigate
//   const [currentView, setCurrentView] = useState('main');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const mockUsers = [
//     {
//       id: 'U001',
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       meterCount: 5,
//       dailyData: [
//         { date: '2025-07-15', usage: 10 },
//         { date: '2025-07-16', usage: 15 },
//         { date: '2025-07-17', usage: 12 }
//       ]
//     },
//     {
//       id: 'U002',
//       name: 'Jane Smith',
//       email: 'jane.smith@example.com',
//       meterCount: 3,
//       dailyData: [
//         { date: '2025-07-15', usage: 8 },
//         { date: '2025-07-16', usage: 11 },
//         { date: '2025-07-17', usage: 9 }
//       ]
//     }
//   ];

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     setCurrentView('details');
//   };

//   const filteredUsers = mockUsers.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.id.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const renderMainView = () => (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold text-gray-700">Users List</h2>
//         {/* ✅ Back to Dashboard */}
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-sm text-blue-600 hover:underline"
//         >
//           <ArrowLeft className="w-4 h-4 mr-1" /> Back to Dashboard
//         </button>
//       </div>

//       <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
//         <div></div>
//         <div className="flex flex-wrap gap-3 items-center">
//           <input
//             type="text"
//             placeholder="Search by Name, Email or ID"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-3 py-1"
//           />
//           <div className="flex items-center gap-2">
//             <Calendar className="text-gray-500 w-4 h-4" />
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-2 py-1"
//             />
//             <span className="text-sm font-medium text-gray-500">to</span>
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-2 py-1"
//             />
//           </div>
//         </div>
//       </div>

//       <table className="min-w-full divide-y divide-gray-200 border rounded-lg overflow-hidden">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meter Count</th>
//             <th className="px-6 py-3"></th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   <div className="text-sm font-medium text-gray-700">{user.name}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="text-sm text-gray-500">{user.email}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="text-sm text-gray-500">{user.id}</span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="text-sm text-gray-500">{user.meterCount}</span>
//                 </td>
//                 <td className="px-6 py-4 text-right">
//                   <button
//                     onClick={() => handleUserClick(user)}
//                     className="text-indigo-600 hover:text-indigo-900"
//                   >
//                     <Eye className="w-4 h-4" />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
//                 No users found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderDetailsView = () => (
//     <div>
//       <button
//         onClick={() => setCurrentView('main')}
//         className="flex items-center text-sm text-blue-600 hover:underline mb-4"
//       >
//         <ArrowLeft className="w-4 h-4 mr-1" /> Back
//       </button>
//       <div className="bg-white rounded-lg shadow p-6 mb-6">
//         <h2 className="text-lg font-semibold text-gray-750 mb-4">User Information</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <div className="text-sm font-medium text-gray-900">{selectedUser.name}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">User ID</label>
//             <div className="text-sm font-medium text-gray-900">{selectedUser.id}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">email</label>
//             <div className="text-sm text-gray-500">{selectedUser.email}</div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Meter Count</label>
//             <div className="text-sm text-gray-500">{selectedUser.meterCount}</div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white rounded-lg shadow p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Usage Data</h3>
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage (kWh)</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {selectedUser.dailyData.map((entry, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 text-sm text-gray-900">{entry.date}</td>
//                 <td className="px-6 py-4 text-sm text-gray-500">{entry.usage}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-750 mb-6">Admin Dashboard</h1>
//       {currentView === 'main' ? renderMainView() : renderDetailsView()}
//     </div>
//   );
// };

// export default AdminUserList;


import React, { useState } from 'react';
import { Eye, ArrowLeft, Calendar, Filter, Activity, Zap } from 'lucide-react';

const AdminUserList = () => {
  const [currentView, setCurrentView] = useState('main');
  const [selectedUser, setSelectedUser] = useState(null);
  const [dateFilter, setDateFilter] = useState('7days');
  const [searchTerm, setSearchTerm] = useState('');
  const adminData = [
  {
    _id: "64a9eabedcbc2a001fd5b124",
    name: "Ajay User",
    email: "ajay@example.com",
    phonenumber: "9876543210",
    adminId: "64a9eabedcbc2a001fd5b123",
    meters: [
      {
        _id: "687b951b525713e3d11e1e5d",
        meterId: "M-03000000000F3DC7",
        name: "Ajay's PG",
        type: "Smart Electric Meter",
        meterSerialNumber: 998855,
        slaveId: 3,
        status: "online",
        lastSeen: "2025-07-19T12:52:43.717+00:00",
        isAssigned: true,
        userAssignedTimestamp: "2025-07-19T12:53:38.339+00:00",
        dailyData: [
          { date: '2025-07-17', totalKWh: 12.3, totalDeduction: 2.1, totalEG: 8.5, totalDG: 3.8 },
          { date: '2025-07-18', totalKWh: 11.9, totalDeduction: 2.2, totalEG: 8.0, totalDG: 3.9 },
          { date: '2025-07-19', totalKWh: 13.0, totalDeduction: 2.0, totalEG: 9.1, totalDG: 3.9 },
        ]
      }
    ]
  },
  {
    _id: "64b0fbeedcbc2a001fd5b222",
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    phonenumber: "9123456789",
    adminId: "64a9eabedcbc2a001fd5b123",
    meters: [
      {
        _id: "687b951b525713e3d11e1e99",
        meterId: "M-03000000000F3DD1",
        name: "Sneha’s Villa",
        type: "Smart DG Meter",
        meterSerialNumber: 778899,
        slaveId: 4,
        status: "offline",
        lastSeen: "2025-07-18T15:00:00.000+00:00",
        isAssigned: true,
        userAssignedTimestamp: "2025-07-18T15:01:00.000+00:00",
        dailyData: [
          { date: '2025-07-15', totalKWh: 7.2, totalDeduction: 1.5, totalEG: 0, totalDG: 7.2 },
          { date: '2025-07-16', totalKWh: 6.5, totalDeduction: 1.3, totalEG: 0, totalDG: 6.5 },
          { date: '2025-07-17', totalKWh: 6.8, totalDeduction: 1.2, totalEG: 0, totalDG: 6.8 },
        ]
      },
      {
        _id: "687b951b525713e3d11e1e88",
        meterId: "M-03000000000F3DE5",
        name: "Sneha’s Solar",
        type: "Solar EG Meter",
        meterSerialNumber: 223344,
        slaveId: 5,
        status: "online",
        lastSeen: "2025-07-19T11:00:00.000+00:00",
        isAssigned: true,
        userAssignedTimestamp: "2025-07-19T11:02:00.000+00:00",
        dailyData: [
          { date: '2025-07-17', totalKWh: 10.1, totalDeduction: 1.1, totalEG: 10.1, totalDG: 0 },
          { date: '2025-07-18', totalKWh: 9.5, totalDeduction: 1.2, totalEG: 9.5, totalDG: 0 },
          { date: '2025-07-19', totalKWh: 11.0, totalDeduction: 1.0, totalEG: 11.0, totalDG: 0 },
        ]
      }
    ]
  },
  {
    _id: "64b8aeedcbc2a001fd5b333",
    name: "Rohit Verma",
    email: "rohit.verma@example.com",
    phonenumber: "9012345678",
    adminId: "64a9eabedcbc2a001fd5b123",
    meters: []
  }
];

  const filteredUsers = adminData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setCurrentView('userDetails');
  };

  const handleBackToUserList = () => {
    setSelectedUser(null);
    setCurrentView('main');
    setDateFilter('7days');
    setSearchTerm('');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filterDataByDate = (dailyData) => {
    const currentDate = new Date();
    return dailyData.filter((data) => {
      const dataDate = new Date(data.date);
      const daysDiff = Math.ceil((currentDate - dataDate) / (1000 * 3600 * 24));
      switch (dateFilter) {
        case '7days': return daysDiff <= 7;
        case '30days': return daysDiff <= 30;
        case '3months': return daysDiff <= 90;
        case '6months': return daysDiff <= 180;
        case '1year': return daysDiff <= 365;
        default: return true;
      }
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      {currentView === 'main' && (
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
            <p className="text-gray-500">Manage users and their meter data</p>
          </div>

          <div className="bg-white min-h-screen rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-800">Users List</h2>
              <input
                type="text"
                placeholder="Search by Name, Email or ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-72 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meters</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-750">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{user._id}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{user.email || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{user.meters?.length || 0}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleViewUser(user)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                        >
                          <Eye className="w-4 h-4 mr-1" /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {currentView === 'userDetails' && selectedUser && (
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackToUserList}
            className="text-blue-600 hover:text-blue-800 flex items-center mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to User List
          </button>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">User Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">User Name</label>
                <p className="text-lg text-gray-900 font-medium mt-1">{selectedUser.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">User ID</label>
                <p className="text-lg text-gray-900 font-medium mt-1">{selectedUser._id}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="text-lg text-gray-900 font-medium mt-1">{selectedUser.email || 'N/A'}</p>
              </div>
            </div>
          </div>

          {selectedUser?.meters?.map((meter, idx) => {
            return (
              <div key={idx} className="bg-white rounded-lg shadow mb-6">
                <div className="px-6 py-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500" /> {meter.meterName}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{meter.meterType}</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-md font-semibold text-gray-800 flex items-center">
                      <Activity className="w-4 h-4 mr-1 text-blue-500" /> Daily Data
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-gray-500" />
                      <select
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="text-sm border border-gray-300 rounded-md px-2 py-1"
                      >
                        <option value="7days">Last 7 Days</option>
                        <option value="30days">Last 30 Days</option>
                        <option value="3months">Last 3 Months</option>
                        <option value="6months">Last 6 Months</option>
                        <option value="1year">Last 1 Year</option>
                      </select>
                    </div>
                  </div>

                  {filterDataByDate(meter.dailyData).length > 0 ? (
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-gray-500">Date</th>
                          <th className="px-4 py-2 text-gray-500">Total kWh</th>
                          <th className="px-4 py-2 text-gray-500">Deduction</th>
                          <th className="px-4 py-2 text-gray-500">EG</th>
                          <th className="px-4 py-2 text-gray-500">DG</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterDataByDate(meter.dailyData).map((entry, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-4 py-2 text-gray-900">{formatDate(entry.date)}</td>
                            <td className="px-4 py-2 text-gray-900">{entry.totalKWh}</td>
                            <td className="px-4 py-2 text-gray-900">{entry.totalDeduction}</td>
                            <td className="px-4 py-2 text-gray-900">{entry.totalEG}</td>
                            <td className="px-4 py-2 text-gray-900">{entry.totalDG}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-gray-500 text-center py-6">No data available for selected range.</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminUserList;