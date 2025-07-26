// import React, { useState, useEffect } from 'react';
// import { Search, Filter, Calendar, X, Zap, User, CreditCard, History } from 'lucide-react';

// const SuperAdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('meters');
//   const [showRechargeModal, setShowRechargeModal] = useState(false);
//   const [selectedMeter, setSelectedMeter] = useState(null);
//   const [filters, setFilters] = useState({
//     startDate: '',
//     endDate: '',
//     search: ''
//   });
//   const [rechargeAmount, setRechargeAmount] = useState('');

//   // Sample data - in real app, this would come from API based on superAdminId
//   const [metersData] = useState([
//     {
//       id: 'MTR001',
//       customerName: 'Rajesh Kumar',
//       meterId: 'ELE001234',
//       location: 'Sector 15, Noida',
//       currentBalance: 150.50,
//       lastRecharge: '2024-07-20',
//       status: 'Active',
//       connectionType: 'Residential'
//     },
//     {
//       id: 'MTR002',
//       customerName: 'Priya Sharma',
//       meterId: 'ELE001235',
//       location: 'Sector 22, Gurgaon',
//       currentBalance: 75.25,
//       lastRecharge: '2024-07-18',
//       status: 'Active',
//       connectionType: 'Commercial'
//     },
//     {
//       id: 'MTR003',
//       customerName: 'Amit Singh',
//       meterId: 'ELE001236',
//       location: 'Lajpat Nagar, Delhi',
//       currentBalance: 25.00,
//       lastRecharge: '2024-07-15',
//       status: 'Low Balance',
//       connectionType: 'Residential'
//     }
//   ]);

//   const [rechargeHistory] = useState([
//     {
//       id: 'RCH001',
//       meterId: 'ELE001234',
//       customerName: 'Rajesh Kumar',
//       amount: 500,
//       date: '2024-07-20',
//       status: 'Completed',
//       transactionId: 'TXN789123'
//     },
//     {
//       id: 'RCH002',
//       meterId: 'ELE001235',
//       customerName: 'Priya Sharma',
//       amount: 300,
//       date: '2024-07-18',
//       status: 'Completed',
//       transactionId: 'TXN789124'
//     }
//   ]);

//   const [userHistory] = useState([
//     {
//       id: 'USR001',
//       customerName: 'Rajesh Kumar',
//       action: 'Account Created',
//       date: '2024-06-15',
//       details: 'New connection established'
//     },
//     {
//       id: 'USR002',
//       customerName: 'Priya Sharma',
//       action: 'Profile Updated',
//       date: '2024-07-10',
//       details: 'Contact information updated'
//     }
//   ]);

//   const [paymentHistory] = useState([
//     {
//       id: 'PAY001',
//       customerName: 'Rajesh Kumar',
//       amount: 500,
//       paymentMethod: 'UPI',
//       date: '2024-07-20',
//       status: 'Success',
//       transactionId: 'TXN789123'
//     },
//     {
//       id: 'PAY002',
//       customerName: 'Priya Sharma',
//       amount: 300,
//       paymentMethod: 'Credit Card',
//       date: '2024-07-18',
//       status: 'Success',
//       transactionId: 'TXN789124'
//     }
//   ]);

//   const handleRecharge = (meter) => {
//     setSelectedMeter(meter);
//     setShowRechargeModal(true);
//   };

//   const processRecharge = () => {
//     if (rechargeAmount && selectedMeter) {
//       // In real app, make API call to process recharge
//       alert(`Recharge of ₹${rechargeAmount} initiated for meter ${selectedMeter.meterId}`);
//       setShowRechargeModal(false);
//       setRechargeAmount('');
//       setSelectedMeter(null);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Active': return 'text-green-600 bg-green-100';
//       case 'Low Balance': return 'text-red-600 bg-red-100';
//       case 'Completed': return 'text-green-600 bg-green-100';
//       case 'Success': return 'text-green-600 bg-green-100';
//       default: return 'text-gray-600 bg-gray-100';
//     }
//   };

//   const renderMetersTable = () => (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Meter Details</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Recharge</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {metersData.map((meter) => (
//             <tr key={meter.id} className="hover:bg-gray-50">
//               <td className="px-6 py-4">
//                 <div>
//                   <div className="text-sm font-medium text-gray-900">{meter.meterId}</div>
//                   <div className="text-sm text-gray-500">{meter.connectionType}</div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 text-sm text-gray-900">{meter.customerName}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{meter.location}</td>
//               <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{meter.currentBalance}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{meter.lastRecharge}</td>
//               <td className="px-6 py-4">
//                 <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(meter.status)}`}>
//                   {meter.status}
//                 </span>
//               </td>
//               <td className="px-6 py-4">
//                 <button
//                   onClick={() => handleRecharge(meter)}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
//                 >
//                   <Zap size={16} />
//                   Recharge
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderRechargeHistory = () => (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Meter Number</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {rechargeHistory.map((item) => (
//             <tr key={item.id} className="hover:bg-gray-50">
//               <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.transactionId}</td>
//               <td className="px-6 py-4 text-sm text-gray-900">{item.meterId}</td>
//               <td className="px-6 py-4 text-sm text-gray-900">{item.customerName}</td>
//               <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{item.amount}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
//               <td className="px-6 py-4">
//                 <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
//                   {item.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderUserHistory = () => (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Name</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {userHistory.map((item) => (
//             <tr key={item.id} className="hover:bg-gray-50">
//               <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.customerName}</td>
//               <td className="px-6 py-4 text-sm text-gray-900">{item.action}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{item.details}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderPaymentHistory = () => (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {paymentHistory.map((item) => (
//             <tr key={item.id} className="hover:bg-gray-50">
//               <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.transactionId}</td>
//               <td className="px-6 py-4 text-sm text-gray-900">{item.customerName}</td>
//               <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{item.amount}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{item.paymentMethod}</td>
//               <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
//               <td className="px-6 py-4">
//                 <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
//                   {item.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Super Admin Panel</h1>
//           <p className="text-gray-600">Manage all meters and view transaction history</p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//           <div className="flex flex-wrap gap-4 items-center">
//             <div className="flex items-center gap-2">
//               <Calendar size={20} className="text-gray-500" />
//               <label className="text-sm font-medium text-gray-700">Start Date:</label>
//               <input
//                 type="date"
//                 value={filters.startDate}
//                 onChange={(e) => setFilters({...filters, startDate: e.target.value})}
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div className="flex items-center gap-2">
//               <label className="text-sm font-medium text-gray-700">End Date:</label>
//               <input
//                 type="date"
//                 value={filters.endDate}
//                 onChange={(e) => setFilters({...filters, endDate: e.target.value})}
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div className="flex items-center gap-2">
//               <Search size={20} className="text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search by meter number or customer name"
//                 value={filters.search}
//                 onChange={(e) => setFilters({...filters, search: e.target.value})}
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
//               />
//             </div>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
//               <Filter size={16} />
//               Apply Filter
//             </button>
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="bg-white rounded-lg shadow-sm mb-6">
//           <div className="border-b border-gray-200">
//             <nav className="flex space-x-8 px-6">
//               <button
//                 onClick={() => setActiveTab('meters')}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === 'meters'
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <Zap size={16} />
//                   All Meters
//                 </div>
//               </button>
//               <button
//                 onClick={() => setActiveTab('rechargeHistory')}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === 'rechargeHistory'
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <History size={16} />
//                   Recharge History
//                 </div>
//               </button>
//               <button
//                 onClick={() => setActiveTab('userHistory')}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === 'userHistory'
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <User size={16} />
//                   User History
//                 </div>
//               </button>
//               <button
//                 onClick={() => setActiveTab('paymentHistory')}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === 'paymentHistory'
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <CreditCard size={16} />
//                   Payment History
//                 </div>
//               </button>
//             </nav>
//           </div>

//           {/* Table Content */}
//           <div className="p-6">
//             {activeTab === 'meters' && renderMetersTable()}
//             {activeTab === 'rechargeHistory' && renderRechargeHistory()}
//             {activeTab === 'userHistory' && renderUserHistory()}
//             {activeTab === 'paymentHistory' && renderPaymentHistory()}
//           </div>
//         </div>

//         {/* Recharge Modal */}
//         {showRechargeModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-900">Recharge Meter</h3>
//                 <button
//                   onClick={() => setShowRechargeModal(false)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>

//               {selectedMeter && (
//                 <div className="mb-4 p-4 bg-gray-50 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-2">Meter Details:</div>
//                   <div className="font-medium">{selectedMeter.meterId}</div>
//                   <div className="text-sm text-gray-600">{selectedMeter.customerName}</div>
//                   <div className="text-sm text-gray-600">Current Balance: ₹{selectedMeter.currentBalance}</div>
//                 </div>
//               )}

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Recharge Amount (₹)
//                 </label>
//                 <input
//                   type="number"
//                   value={rechargeAmount}
//                   onChange={(e) => setRechargeAmount(e.target.value)}
//                   placeholder="Enter amount"
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className="flex gap-3 justify-end">
//                 <button
//                   onClick={() => setShowRechargeModal(false)}
//                   className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={processRecharge}
//                   disabled={!rechargeAmount}
//                   className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                 >
//                   <Zap size={16} />
//                   Process Recharge
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SuperAdminPanel;

// import React, { useState, useMemo } from 'react';
// import { Search, Filter, Calendar, X, Zap, User, CreditCard, History } from 'lucide-react';

// const SuperAdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('meters');
//   const [showRechargeModal, setShowRechargeModal] = useState(false);
//   const [selectedMeter, setSelectedMeter] = useState(null);
//   const [rechargeAmount, setRechargeAmount] = useState('');
//   const [filters, setFilters] = useState({ startDate: '', endDate: '', search: '' });

//   const [metersData] = useState([
//     {
//       id: 'MTR001',
//       customerName: 'Rajesh Kumar',
//       meterId: 'ELE001234',
//       meterName: 'Meter 1',
//       currentBalance: 150.5,
//       lastRecharge: '2024-07-20',
//       status: 'Active',
//       connectionType: 'Residential',
//     },
//     {
//       id: 'MTR002',
//       customerName: 'Priya Sharma',
//       meterId: 'ELE001235',
//       meterName: 'Mater 2',
//       currentBalance: 75.25,
//       lastRecharge: '2024-07-18',
//       status: 'Active',
//       connectionType: 'Commercial',
//     },
//     {
//       id: 'MTR003',
//       customerName: 'Amit Singh',
//       meterId: 'ELE001236',
//       materName: 'Meter 3',
//       currentBalance: 25.0,
//       lastRecharge: '2024-07-15',
//       status: 'Low Balance',
//       connectionType: 'Residential',
//     },
//   ]);

//   const [rechargeHistory] = useState([
//     {
//       id: 'RCH001',
//       meterId: 'ELE001234',
//       customerName: 'Rajesh Kumar',
//       amount: 500,
//       date: '2024-07-20',
//       status: 'Completed',
//       transactionId: 'TXN789123',
//     },
//     {
//       id: 'RCH002',
//       meterId: 'ELE001235',
//       customerName: 'Priya Sharma',
//       amount: 300,
//       date: '2024-07-18',
//       status: 'Completed',
//       transactionId: 'TXN789124',
//     },
//   ]);

//   const [userHistory] = useState([
//     {
//       id: 'USR001',
//       customerName: 'Rajesh Kumar',
//       action: 'Account Created',
//       date: '2024-06-15',
//       details: 'New connection established',
//     },
//     {
//       id: 'USR002',
//       customerName: 'Priya Sharma',
//       action: 'Profile Updated',
//       date: '2024-07-10',
//       details: 'Contact information updated',
//     },
//   ]);

//   const filteredMeters = useMemo(() => {
//     return metersData.filter((meter) => {
//       const matchesSearch =
//         meter.meterId.toLowerCase().includes(filters.search.toLowerCase()) ||
//         meter.customerName.toLowerCase().includes(filters.search.toLowerCase());
//       const withinDate =
//         (!filters.startDate || new Date(meter.lastRecharge) >= new Date(filters.startDate)) &&
//         (!filters.endDate || new Date(meter.lastRecharge) <= new Date(filters.endDate));
//       return matchesSearch && withinDate;
//     });
//   }, [filters, metersData]);

//   const filteredRechargeHistory = useMemo(() => {
//     return rechargeHistory.filter((item) => {
//       const matchesSearch =
//         item.meterId.toLowerCase().includes(filters.search.toLowerCase()) ||
//         item.customerName.toLowerCase().includes(filters.search.toLowerCase());
//       const withinDate =
//         (!filters.startDate || new Date(item.date) >= new Date(filters.startDate)) &&
//         (!filters.endDate || new Date(item.date) <= new Date(filters.endDate));
//       return matchesSearch && withinDate;
//     });
//   }, [filters, rechargeHistory]);

//   const filteredUserHistory = useMemo(() => {
//     return userHistory.filter((item) => {
//       const matchesSearch =
//         item.customerName.toLowerCase().includes(filters.search.toLowerCase()) ||
//         item.action.toLowerCase().includes(filters.search.toLowerCase());
//       const withinDate =
//         (!filters.startDate || new Date(item.date) >= new Date(filters.startDate)) &&
//         (!filters.endDate || new Date(item.date) <= new Date(filters.endDate));
//       return matchesSearch && withinDate;
//     });
//   }, [filters, userHistory]);

//   const handleRecharge = (meter) => {
//     setSelectedMeter(meter);
//     setShowRechargeModal(true);
//   };

//   const processRecharge = () => {
//     if (rechargeAmount && selectedMeter) {
//       alert(`Recharge of ₹${rechargeAmount} initiated for meter ${selectedMeter.meterId}`);
//       setRechargeAmount('');
//       setSelectedMeter(null);
//       setShowRechargeModal(false);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Active':
//       case 'Completed':
//       case 'Success':
//         return 'text-green-600 bg-green-100';
//       case 'Low Balance':
//         return 'text-red-600 bg-red-100';
//       default:
//         return 'text-gray-600 bg-gray-100';
//     }
//   };

//   const renderTable = (data, columns) => (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
//         <thead className="bg-gray-50">
//           <tr>
//             {columns.map((col, idx) => (
//               <th key={idx} className="px-6 py-3 text-left font-medium text-gray-500 uppercase whitespace-nowrap">
//                 {col.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {data.length === 0 ? (
//             <tr>
//               <td colSpan={columns.length} className="px-6 py-4 text-center text-gray-400">
//                 No data found.
//               </td>
//             </tr>
//           ) : (
//             data.map((row, i) => (
//               <tr key={i} className="hover:bg-gray-50">
//                 {columns.map((col, j) => (
//                   <td key={j} className="px-6 py-4 whitespace-nowrap">
//                     {col.render ? col.render(row) : row[col.key]}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto space-y-6">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-1">Super Admin Panel</h1>
//           <p className="text-gray-600">Manage all meters and view transaction history</p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm space-y-4 md:space-y-0 md:flex md:flex-wrap gap-4">
//           <div className="flex items-center gap-2 w-full md:w-auto">
//             <Calendar size={18} className="text-gray-500" />
//             <label className="text-sm text-gray-700">Start:</label>
//             <input
//               type="date"
//               value={filters.startDate}
//               onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
//               className="border rounded px-2 py-1 text-sm"
//             />
//           </div>
//           <div className="flex items-center gap-2 w-full md:w-auto">
//             <label className="text-sm text-gray-700">End:</label>
//             <input
//               type="date"
//               value={filters.endDate}
//               onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
//               className="border rounded px-2 py-1 text-sm"
//             />
//           </div>
//           <div className="flex items-center gap-2 w-full md:w-auto">
//             <Search size={18} className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={filters.search}
//               onChange={(e) => setFilters({ ...filters, search: e.target.value })}
//               className="border rounded px-2 py-1 text-sm w-full md:w-64"
//             />
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-lg shadow-sm">
//           <nav className="flex flex-wrap px-4 pt-4 space-x-4 border-b border-gray-200">
//             {[
//               { id: 'meters', icon: <Zap size={16} />, label: 'All Meters' },
//               { id: 'rechargeHistory', icon: <History size={16} />, label: 'Recharge History' },
//               { id: 'userHistory', icon: <User size={16} />, label: 'User History' },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`py-3 px-2 text-sm font-medium border-b-2 ${
//                   activeTab === tab.id
//                     ? 'text-blue-600 border-blue-500'
//                     : 'text-gray-500 border-transparent hover:border-gray-300'
//                 } flex items-center gap-1`}
//               >
//                 {tab.icon}
//                 {tab.label}
//               </button>
//             ))}
//           </nav>

//           <div className="p-4 md:p-6">
//             {activeTab === 'meters' &&
//               renderTable(filteredMeters, [
//                 { key: 'meterId', label: 'Meter Number' },
//                 { key: 'customerName', label: 'Customer' },
//                 { key: 'meterName', label: 'meterName' },
//                 { key: 'currentBalance', label: 'Balance', render: (r) => `₹${r.currentBalance}` },
//                 { key: 'lastRecharge', label: 'Last Recharge' },
//                 {
//                   key: 'status',
//                   label: 'Status',
//                   render: (r) => (
//                     <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(r.status)}`}>
//                       {r.status}
//                     </span>
//                   ),
//                 },
//                 {
//                   key: 'action',
//                   label: 'Action',
//                   render: (r) => (
//                     <button
//                       onClick={() => handleRecharge(r)}
//                       className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded flex items-center gap-1"
//                     >
//                       <Zap size={14} />
//                       Recharge
//                     </button>
//                   ),
//                 },
//               ])}

//             {activeTab === 'rechargeHistory' &&
//               renderTable(filteredRechargeHistory, [
//                 { key: 'transactionId', label: 'Transaction ID' },
//                 { key: 'meterId', label: 'Meter' },
//                 { key: 'customerName', label: 'Customer' },
//                 { key: 'amount', label: 'Amount', render: (r) => `₹${r.amount}` },
//                 { key: 'date', label: 'Date' },
//                 {
//                   key: 'status',
//                   label: 'Status',
//                   render: (r) => (
//                     <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(r.status)}`}>
//                       {r.status}
//                     </span>
//                   ),
//                 },
//               ])}

//             {activeTab === 'userHistory' &&
//               renderTable(filteredUserHistory, [
//                 { key: 'customerName', label: 'Customer' },
//                 { key: 'action', label: 'Action' },
//                 { key: 'date', label: 'Date' },
//                 { key: 'details', label: 'Details' },
//               ])}

//           </div>
//         </div>

//         {/* Recharge Modal */}
//         {showRechargeModal && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
//               <button
//                 onClick={() => setShowRechargeModal(false)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               >
//                 <X size={20} />
//               </button>
//               <h2 className="text-lg font-semibold mb-4">Recharge Meter</h2>
//               {selectedMeter && (
//                 <div className="mb-4 space-y-1 text-sm text-gray-600">
//                   <div>
//                     <span className="font-semibold">Meter:</span> {selectedMeter.meterId}
//                   </div>
//                   <div>
//                     <span className="font-semibold">Customer:</span> {selectedMeter.customerName}
//                   </div>
//                   <div>
//                     <span className="font-semibold">Current Balance:</span> ₹{selectedMeter.currentBalance}
//                   </div>
//                 </div>
//               )}
//               <input
//                 type="number"
//                 placeholder="Enter amount"
//                 value={rechargeAmount}
//                 onChange={(e) => setRechargeAmount(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
//               />
//               <div className="flex justify-end gap-2">
//                 <button
//                   onClick={() => setShowRechargeModal(false)}
//                   className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={processRecharge}
//                   disabled={!rechargeAmount}
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
//                 >
//                   Recharge
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SuperAdminPanel;

// import React, { useState, useMemo } from "react";
// import { Zap, Calendar, Search } from "lucide-react";

// const SuperAdminAllMeters = () => {
//   const [filters, setFilters] = useState({
//     startDate: "",
//     endDate: "",
//     search: "",
//   });
//   const [selectedMeter, setSelectedMeter] = useState(null);
//   const [rechargeAmount, setRechargeAmount] = useState("");
//   const [showRechargeModal, setShowRechargeModal] = useState(false);

//   const metersData = [
//     {
//       id: "MTR001",
//       Admin: "Rajesh Kumar",
//       User: "Ankit",
//       meterId: "ELE001234",
//       meterName: "Meter 1",
//       currentBalance: 150.5,
//       lastRecharge: "2024-07-20",
//       status: "Online",
//       connectionType: "Residential",
//     },
//     {
//       id: "MTR002",
//       Admin: "Priya Sharma",
//       User: "Rahul",
//       meterId: "ELE001235",
//       meterName: "Meter 2",
//       currentBalance: 75.25,
//       lastRecharge: "2024-07-18",
//       status: "Online",
//       connectionType: "Commercial",
//     },
//     {
//       id: "MTR003",
//       Admin: "Amit Singh",
//       User: "Ramesh",
//       meterId: "ELE001236",
//       meterName: "Meter 3",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Offline",
//       connectionType: "Residential",
//     },
//     {
//       id: "MTR003",
//       Admin: "Sunil",
//       User: "Suresh",
//       meterId: "ELE001236",
//       meterName: "Meter 3",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Faulty",
//       connectionType: "Residential",
//     },
//   ];

//   const filteredMeters = useMemo(() => {
//     return metersData.filter((meter) => {
//       const matchesSearch =
//         meter.meterId
//           .toLowerCase()
//           .includes(filters.search.toLowerCase()) ||
//         meter.customerName.toLowerCase().includes(filters.search.toLowerCase());
//       const withinDate =
//         (!filters.startDate ||
//           new Date(meter.lastRecharge) >= new Date(filters.startDate)) &&
//         (!filters.endDate ||
//           new Date(meter.lastRecharge) <= new Date(filters.endDate));
//       return matchesSearch && withinDate;
//     });
//   }, [filters]);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Online":
//         return "text-green-600 bg-green-100";
//       case "Offline":
//         return "text-red-600 bg-red-100";
//       case "Faulty":
//         return "text-red-600 bg-orange-100";
//       default:
//         return "text-gray-600 bg-gray-100";
//     }
//   };

//   const handleRecharge = (meter) => {
//     setSelectedMeter(meter);
//     setShowRechargeModal(true);
//   };

//   const processRecharge = () => {
//     if (rechargeAmount && selectedMeter) {
//       alert(
//         `Recharge of ₹${rechargeAmount} initiated for meter ${selectedMeter.meterId}`
//       );
//       setRechargeAmount("");
//       setSelectedMeter(null);
//       setShowRechargeModal(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">
//           Super Admin - All Meters
//         </h1>

//         {/* Filters */}
//         <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap gap-4 items-center">
//           <div className="flex items-center gap-2">
//             <Calendar size={18} className="text-gray-500" />
//             <label className="text-sm">Start:</label>
//             <input
//               type="date"
//               value={filters.startDate}
//               onChange={(e) =>
//                 setFilters({ ...filters, startDate: e.target.value })
//               }
//               className="border rounded px-2 py-1 text-sm"
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <label className="text-sm">End:</label>
//             <input
//               type="date"
//               value={filters.endDate}
//               onChange={(e) =>
//                 setFilters({ ...filters, endDate: e.target.value })
//               }
//               className="border rounded px-2 py-1 text-sm"
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <Search size={18} className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search by name or meter number..."
//               value={filters.search}
//               onChange={(e) =>
//                 setFilters({ ...filters, search: e.target.value })
//               }
//               className="border rounded px-2 py-1 text-sm w-64"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
//             <thead className="bg-gray-50">
//               <tr>
//                 {[
//                   "Meter Id",
//                   "Admin",
//                   "User",
//                   "Meter Name",
//                   "Balance",
//                   "Last Recharge",
//                   "Status",
//                   "Action",
//                 ].map((label, idx) => (
//                   <th
//                     key={idx}
//                     className="px-6 py-3 text-left font-medium text-gray-500 uppercase whitespace-nowrap"
//                   >
//                     {label}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredMeters.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan={7}
//                     className="px-6 py-4 text-center text-gray-400"
//                   >
//                     No data found.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredMeters.map((row, i) => (
//                   <tr key={i} className="hover:bg-gray-50">
//                     <td className="px-6 py-4">{row.meterId}</td>
//                     <td className="px-6 py-4">{row.Admin}</td>
//                     <td className="px-6 py-4">{row.User}</td>
//                     <td className="px-6 py-4">{row.meterName}</td>
//                     <td className="px-6 py-4">₹{row.currentBalance}</td>
//                     <td className="px-6 py-4">{row.lastRecharge}</td>
//                     <td className="px-6 py-4">
//                       <span
//                         className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
//                           row.status
//                         )}`}
//                       >
//                         {row.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <button
//                         onClick={() => handleRecharge(row)}
//                         className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded flex items-center gap-1"
//                       >
//                         <Zap size={14} />
//                         Recharge
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Recharge Modal */}
//         {showRechargeModal && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
//               <button
//                 onClick={() => setShowRechargeModal(false)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               >
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold mb-4">Recharge Meter</h2>
//               {selectedMeter && (
//                 <div className="mb-4 space-y-1 text-sm text-gray-600">
//                   <div>
//                     <span className="font-semibold">Meter:</span>{" "}
//                     {selectedMeter.meterId}
//                   </div>
//                   <div>
//                     <span className="font-semibold">Customer:</span>{" "}
//                     {selectedMeter.customerName}
//                   </div>
//                   <div>
//                     <span className="font-semibold">Current Balance:</span> ₹
//                     {selectedMeter.currentBalance}
//                   </div>
//                 </div>
//               )}
//               <input
//                 type="number"
//                 placeholder="Enter amount"
//                 value={rechargeAmount}
//                 onChange={(e) => setRechargeAmount(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
//               />
//               <div className="flex justify-end gap-2">
//                 <button
//                   onClick={() => setShowRechargeModal(false)}
//                   className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={processRecharge}
//                   disabled={!rechargeAmount}
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
//                 >
//                   Recharge
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SuperAdminAllMeters;

// import React, { useState, useMemo } from "react";
// import { Zap, Calendar, Search } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/header/Header";
// const SuperAdminAllMeters = () => {
//   const navigate = useNavigate();

//   const NevigateToRechargeHistory = () => {
//     navigate("/userdashboard/rechargehistory");
//   };

//   const NevigateToUserHistory = () => {
//     // navigate("/usermanagement");
//     navigate("/superadmin/userhistory")
//   };

//   const dispatch = useDispatch();
//   const [filters, setFilters] = useState({
//     startDate: "",
//     endDate: "",
//     search: "",
//   });

//   useEffect(() => {
//     dispatch(setHeaderTitle("Super Admin"));
//     dispatch(setBreadcrumbs([{ label: "Super Admin" }]));
//   }, []);
//   const [selectedMeter, setSelectedMeter] = useState(null);
//   const [rechargeAmount, setRechargeAmount] = useState("");
//   const [showRechargeModal, setShowRechargeModal] = useState(false);

//   const metersData = [
//     {
//       id: "MTR001",
//       Admin: "Rajesh Kumar",
//       User: "Ankit",
//       meterId: "ELE001234",
//       meterName: "Meter 1",
//       currentBalance: 150.5,
//       lastRecharge: "2024-07-20",
//       status: "Online",
//       connectionType: "Residential",
//     },
//     {
//       id: "MTR002",
//       Admin: "Priya Sharma",
//       User: "Rahul",
//       meterId: "ELE001235",
//       meterName: "Meter 2",
//       currentBalance: 75.25,
//       lastRecharge: "2024-07-18",
//       status: "Online",
//       connectionType: "Commercial",
//     },
//     {
//       id: "MTR003",
//       Admin: "Amit Singh",
//       User: "Ramesh",
//       meterId: "ELE001236",
//       meterName: "Meter 3",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Offline",
//       connectionType: "Residential",
//     },
//     {
//       id: "MTR004",
//       Admin: "Sunil",
//       User: "Suresh",
//       meterId: "ELE001237",
//       meterName: "Meter 4",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Faulty",
//       connectionType: "Residential",
//     },
//   ];

//   const filteredMeters = useMemo(() => {
//     return metersData.filter((meter) => {
//       const matchesSearch =
//         meter.meterId
//           .toLowerCase()
//           .includes(filters.search.toLowerCase()) ||
//         meter.User.toLowerCase().includes(filters.search.toLowerCase()) ||
//         meter.Admin.toLowerCase().includes(filters.search.toLowerCase());
//       const withinDate =
//         (!filters.startDate ||
//           new Date(meter.lastRecharge) >= new Date(filters.startDate)) &&
//         (!filters.endDate ||
//           new Date(meter.lastRecharge) <= new Date(filters.endDate));
//       return matchesSearch && withinDate;
//     });
//   }, [filters]);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Online":
//         return "text-green-700 bg-green-100";
//       case "Offline":
//         return "text-red-700 bg-red-100";
//       case "Faulty":
//         return "text-orange-700 bg-orange-100";
//       default:
//         return "text-gray-700 bg-gray-100";
//     }
//   };

//   const handleRecharge = (meter) => {
//     setSelectedMeter(meter);
//     setShowRechargeModal(true);
//   };

//   const processRecharge = () => {
//     if (rechargeAmount && selectedMeter) {
//       alert(
//         `Recharge of ₹${rechargeAmount} initiated for meter ${selectedMeter.meterId}`
//       );
//       setRechargeAmount("");
//       setSelectedMeter(null);
//       setShowRechargeModal(false);
//     }
//   };

//   return (
//     <div className="g-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-6 max-w-7xl mx-auto">
//         <h1 className="text-xl mb-6 sm:text-2xl md:text-3xl font-semibold text-gray-900 ">
//           Super Admin
//         </h1>

//         {/* Filters and Buttons */}
//         <div className="flex flex-col  gap-2 sm:gap-4 w-full md:w-auto">
//           <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row justify-between flex-wrap gap-4 items-start md:items-center">

//             <div className="w-full md:w-auto">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="text"
//                   placeholder="Search by name or meter number..."
//                   value={filters.search}
//                   onChange={(e) =>
//                     setFilters({ ...filters, search: e.target.value })
//                   }
//                   className="border border-gray-300 rounded-md px-2 py-1 text-[10px] md:text-xs lg:text-sm w-full md:w-64"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center gap-2">

//               <label className="text-[10px] md:text-xs lg:text-sm text-gray-700">
//                 Start:
//               </label>
//               <input
//                 type="date"
//                 value={filters.startDate}
//                 onChange={(e) =>
//                   setFilters({ ...filters, startDate: e.target.value })
//                 }
//                 className="border border-gray-300 rounded-md px-2 py-1 text-[10px] md:text-xs lg:text-sm w-[100px] md:w-[120px] lg:w-[140px]"
//               />
//               <label className="text-[10px] md:text-xs lg:text-sm text-gray-700">
//                 End:
//               </label>
//               <input
//                 type="date"
//                 value={filters.endDate}
//                 onChange={(e) =>
//                   setFilters({ ...filters, endDate: e.target.value })
//                 }
//                 className="border border-gray-300 rounded-md px-2 py-1 text-[10px] md:text-xs lg:text-sm w-[100px] md:w-[120px] lg:w-[140px]"
//               />
//             </div>

//              <div className="flex justify-between mb-2 gap-2">
//               <button
//                 onClick={NevigateToRechargeHistory}
//                 className="px-3 py-1 text-xs md:text-sm lg:text-base md:px-4 md:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
//               >
//                 Recharge History
//               </button>
//               <button
//                 onClick={NevigateToUserHistory}
//                 className="px-3 py-1 text-xs md:text-sm lg:text-base md:px-4 md:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
//               >
//                 User History
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg min-h-screen">
//           <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
//             <thead className="bg-gray-50">
//               <tr>
//                 {[
//                   "Meter Id",
//                   "Admin Name",
//                   "User Name",
//                   "Meter Name",
//                   "Balance",
//                   "Last Recharge",
//                   "Status",
//                   "Action",
//                 ].map((label, idx) => (
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
//               {filteredMeters.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan={8}
//                     className="px-6 py-4 text-center text-gray-500"
//                   >
//                     No data found.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredMeters.map((row, i) => (
//                   <tr key={i} className="hover:bg-gray-50 transition">
//                     <td className="px-6 py-4 text-sm mb-1 font-medium text-gray-600">
//                       {row.meterId}
//                     </td>
//                     <td className="text-sm font-medium text-gray-600 mb-1 px-6 py-4">
//                       {row.Admin}
//                     </td>
//                     <td className="text-sm font-medium text-gray-600 mb-1 px-6 py-4">
//                       {row.User}
//                     </td>
//                     <td className=" text-sm font-medium text-gray-600 mb-1 px-6 py-4">
//                       {row.meterName}
//                     </td>
//                     <td className="text-sm font-medium text-gray-600 mb-1 px-6 py-4">
//                       ₹{row.currentBalance}
//                     </td>
//                     <td className="text-sm font-medium text-gray-600 mb-1 px-6 py-4">
//                       {row.lastRecharge}
//                     </td>
//                     <td className="text-sm font-medium text-gray-600 mb-1 px-6 py-4">
//                       <span
//                         className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
//                           row.status
//                         )}`}
//                       >
//                         {row.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <button
//                         onClick={() => handleRecharge(row)}
//                         className="flex items-center gap-1 px-3 py-1 cursor-pointer bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
//                       >
//                         <Zap size={14} />
//                         Recharge
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Recharge Modal */}
// {showRechargeModal && (
//   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//     <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
//       <button
//         onClick={() => setShowRechargeModal(false)}
//         className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
//       >
//         ×
//       </button>
//       <h2 className="text-lg font-semibold mb-4">Recharge Meter</h2>
//       {selectedMeter && (
//         <div className="space-y-1 mb-4 text-sm text-gray-700">
//           <div>
//             <strong>Meter:</strong> {selectedMeter.meterId}
//           </div>
//           <div>
//             <strong>Admin:</strong> {selectedMeter.Admin}
//           </div>
//           <div>
//             <strong>User:</strong> {selectedMeter.User}
//           </div>
//           <div>
//             <strong>Current Balance:</strong> ₹
//             {selectedMeter.currentBalance}
//           </div>
//         </div>
//       )}
//       <input
//         type="number"
//         placeholder="Enter recharge amount"
//         value={rechargeAmount}
//         onChange={(e) => setRechargeAmount(e.target.value)}
//         className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm"
//       />
//       <div className="flex justify-end gap-2">
//         <button
//           onClick={() => setShowRechargeModal(false)}
//           className="px-4 py-2 cursor-pointer text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={processRecharge}
//           disabled={!rechargeAmount}
//           className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
//         >
//           Recharge
//         </button>
//       </div>
//     </div>
//   </div>
// )}
//       </div>
//     </div>
//   );
// };

// export default SuperAdminAllMeters;

//////////////////////////////////

// import React, { useState, useMemo, useEffect } from "react";
// import { Zap } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";

// const AdminPanel = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [filters, setFilters] = useState({
//     search: "",
//   });

//   const [selectedMeter, setSelectedMeter] = useState(null);
//   const [selectedSearchMeter, setSelectedSearchMeter] = useState(null);
//   const [rechargeAmount, setRechargeAmount] = useState("");
//   const [showRechargeModal, setShowRechargeModal] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [debouncedSearch, setDebouncedSearch] = useState(filters.search);

//   const metersData = [
//     {
//       id: "1",
//       Admin: "Priya Sharma",
//       User: "Rahul",
//       meterId: "MTR001",
//       meterName: "Meter 1",
//       currentBalance: 75.25,
//       lastRecharge: "2024-07-18",
//       status: "Online",
//       connectionType: "Commercial",
//     },
//     {
//       id: "2",
//       Admin: "Amit Singh",
//       User: "Ramesh",
//       meterId: "MTR002",
//       meterName: "Meter 2",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Offline",
//       connectionType: "Residential",
//     },
//     {
//       id: "3",
//       Admin: "Sunil",
//       User: "Suresh",
//       meterId: "MTR003",
//       meterName: "Meter 3",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Faulty",
//       connectionType: "Residential",
//     },
//     {
//       id: "4",
//       Admin: "Sunil",
//       User: "Suresh",
//       meterId: "MTR004",
//       meterName: "Meter 4",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Faulty",
//       connectionType: "Residential",
//     },
//     {
//       id: "5",
//       Admin: "Rajesh Kumar",
//       User: "Ankit",
//       meterId: "MTR005",
//       meterName: "Meter 5",
//       currentBalance: 150.5,
//       lastRecharge: "2024-07-20",
//       status: "Online",
//       connectionType: "Residential",
//     },
//   ];

//   useEffect(() => {
//     dispatch(setHeaderTitle("Super Admin"));
//     dispatch(setBreadcrumbs([{ label: "Super Admin" }]));
//   }, []);

//   useMemo(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearch(filters.search);
//     }, 500); // Adjust delay as needed

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [filters.search]);

//   const filteredSuggestions = useMemo(() => {
//     if (!debouncedSearch.trim()) return [];
//     return metersData.filter(
//       (meter) =>
//         meter.meterId.toLowerCase().includes(filters.search.toLowerCase()) ||
//         meter.User.toLowerCase().includes(filters.search.toLowerCase())
//     );
//   }, [debouncedSearch]);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Online":
//         return "text-green-700 bg-green-100";
//       case "Offline":
//         return "text-red-700 bg-red-100";
//       case "Faulty":
//         return "text-orange-700 bg-orange-100";
//       default:
//         return "text-gray-700 bg-gray-100";
//     }
//   };

//   const handleRecharge = (meter) => {
//     setSelectedMeter(meter);
//     setShowRechargeModal(true);
//   };

//   const processRecharge = () => {
//     if (rechargeAmount && selectedMeter) {
//       alert(
//         `Recharge of ₹${rechargeAmount} initiated for meter ${selectedMeter.meterId}`
//       );
//       setRechargeAmount("");
//       setSelectedMeter(null);
//       setShowRechargeModal(false);
//     }
//   };

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-4 max-w-7xl mx-auto">
//         {/* Title */}
//         <div className="mb-4">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
//             Admin Panel
//           </h1>
//           <p className="text-sm sm:text-base text-gray-600">
//             Manage all meters, recharge balances, and monitor statuses
//           </p>
//         </div>

//         {/* Search + Action Section */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
//           <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4 items-start md:items-center">
//             {/* Search Input */}
//             <div className="w-full md:w-1/2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Search Meter
//               </label>
//               <input
//                 type="text"
//                 placeholder="Search MeterId, Name..."
//                 value={filters.search}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setFilters({ ...filters, search: value });
//                   setIsDropdownOpen(true);
//                   if (value.trim() === "") {
//                     setSelectedSearchMeter(null);
//                   }
//                 }}
//                 className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//               />
//               {isDropdownOpen && filteredSuggestions.length > 0 && (
//                 <ul className="absolute z-10 bg-white border border-gray-300 mt-1 rounded-md max-h-40 overflow-y-auto  text-sm">
//                   {filteredSuggestions.map((suggestion, index) => (
//                     <li
//                       key={index}
//                       onClick={() => {
//                         setSelectedSearchMeter(suggestion);
//                         setFilters({
//                           ...filters,
//                           search: `${suggestion.meterName} (${suggestion.meterId}) ${suggestion.Admin}`,
//                         });
//                         setIsDropdownOpen(false);
//                       }}
//                       className="px-3 py-1 cursor-pointer hover:bg-gray-100"
//                     >
//                       {suggestion.meterId} ({suggestion.Admin},{" "}
//                       {suggestion.meterName})
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="bg-white h-[350px] rounded-lg shadow-sm border border-gray-200 p-2 sm:p-4 lg:p-4">
//           {selectedSearchMeter ? (
//             <div className="space-y-2">

//               <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
//                 {/* Meter ID */}
//                 <div className="flex flex-col space-y-1">
//                   <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                     Meter ID
//                   </p>
//                   <p className="text-sm sm:text-base text-blue-600 font-medium break-all">
//                     {selectedSearchMeter.meterId}
//                   </p>
//                 </div>

//                 {/* User */}
//                 <div className="flex flex-col space-y-1">
//                   <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                     User
//                   </p>
//                   <p
//                     className="text-sm sm:text-base text-gray-800 font-medium truncate"
//                     title={selectedSearchMeter.meterName}
//                   >
//                     {selectedSearchMeter.meterName}
//                   </p>
//                 </div>

//                 {/* Meter Name */}
//                 <div className="flex flex-col space-y-1">
//                   <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                     Meter Name
//                   </p>
//                   <p
//                     className="text-sm sm:text-base text-gray-800 font-medium truncate"
//                     title={selectedSearchMeter.meterName}
//                   >
//                     {selectedSearchMeter.meterName}
//                   </p>
//                 </div>

//                 {/* Balance */}
//                 <div className="flex flex-col space-y-1">
//                   <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                     Balance
//                   </p>
//                   <p className="text-base sm:text-lg font-bold text-green-600">
//                     ₹{selectedSearchMeter.currentBalance}
//                   </p>
//                 </div>

//                 {/* Last Recharge */}
//                 <div className="flex flex-col space-y-1">
//                   <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                     Last Recharge
//                   </p>
//                   <p className="text-sm sm:text-base font-semibold text-blue-600">
//                     {selectedSearchMeter.lastRecharge}
//                   </p>
//                 </div>

//                 {/* Status */}
//                 <div className="flex flex-col space-y-1">
//                   <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                     Status
//                   </p>
//                   <div>
//                     <span
//                       className={`inline-block px-2 py-1 text-xs sm:text-sm font-semibold rounded-full ${getStatusColor(
//                         selectedSearchMeter.status
//                       )}`}
//                     >
//                       {selectedSearchMeter.status}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Action Buttons Section - Separate row for better mobile experience */}
//               <div className="border-t pt-4 mt-4">
//                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
//                   {/* History Buttons */}
//                   <div className="flex xs:flex-row gap-2 flex-1">
//                     <button
//                       onClick={() =>
//                         navigate(
//                           `/admin/rechargehistory/${selectedSearchMeter?.meterId}`
//                         )
//                       }
//                       disabled={!selectedSearchMeter}
//                       className={` px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
//                         selectedSearchMeter
//                           ? "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md"
//                           : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       }`}
//                     >
//                       <span className="">Recharge History</span>
//                       {/* <span className="sm:hidden">Recharge</span> */}
//                     </button>
//                     <button
//                       onClick={() =>
//                         navigate(
//                           `/admin/meterdata/${selectedSearchMeter?.meterId}`
//                         )
//                       }
//                       disabled={!selectedSearchMeter}
//                       className={` px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
//                         selectedSearchMeter
//                           ? "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md"
//                           : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       }`}
//                     >
//                       <span className="">Usage History</span>
//                       {/* <span className="sm:hidden">Usage</span> */}
//                     </button>
//                   </div>

//                   {/* Recharge Button - Prominent */}
//                   <div className="sm:w-auto">
//                     <button
//                       onClick={() => handleRecharge(selectedSearchMeter)}
//                       className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold rounded-md hover:from-green-700 hover:to-green-800 active:from-green-800 active:to-green-900 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
//                     >
//                       Recharge Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center py-8 sm:py-12">
//               <div className="text-gray-400 mb-3">
//                 <svg
//                   className="w-12 h-12 sm:w-16 sm:h-16"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                   />
//                 </svg>
//               </div>
//               <p className="text-gray-600 text-center text-sm sm:text-base font-medium">
//                 Please search and select a meter to display details
//               </p>
//             </div>
//           )}
//         </div>

//         {showRechargeModal && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
//               <button
//                 onClick={() => setShowRechargeModal(false)}
//                 className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
//               >
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold mb-4">Recharge Meter</h2>
//               {selectedMeter && (
//                 <div className="space-y-1 mb-4 text-sm text-gray-700">
//                   <div>
//                     <strong>Meter:</strong> {selectedMeter.meterId}
//                   </div>
//                   <div>
//                     <strong>Admin:</strong> {selectedMeter.Admin}
//                   </div>
//                   <div>
//                     <strong>User:</strong> {selectedMeter.User}
//                   </div>
//                   <div>
//                     <strong>Current Balance:</strong> ₹
//                     {selectedMeter.currentBalance}
//                   </div>
//                 </div>
//               )}
//               <input
//                 type="number"
//                 placeholder="Enter recharge amount"
//                 value={rechargeAmount}
//                 onChange={(e) => setRechargeAmount(e.target.value)}
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm"
//               />
//               <div className="flex justify-end gap-2">
//                 <button
//                   onClick={() => setShowRechargeModal(false)}
//                   className="px-4 py-2 cursor-pointer text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={processRecharge}
//                   disabled={!rechargeAmount}
//                   className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
//                 >
//                   Recharge
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

/////////////////////////////////////
// correct

// import React, { useState, useMemo, useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";

// const AdminPanel = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [filters, setFilters] = useState({ search: "" });
//   const [debouncedSearch, setDebouncedSearch] = useState(filters.search);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedMeters, setSelectedMeters] = useState([]);
//   const [showRechargeModal, setShowRechargeModal] = useState(false);
//   const [selectedMeter, setSelectedMeter] = useState(null);
//   const [rechargeAmount, setRechargeAmount] = useState("");
//   const dropdownRef = useRef(null);

//   const metersData = [
//     {
//       id: "1",
//       Admin: "Priya Sharma",
//       User: "Rahul",
//       meterId: "MTR001",
//       meterName: "Meter 1",
//       currentBalance: 75.25,
//       lastRecharge: "2024-07-18",
//       status: "Online",
//       connectionType: "Commercial",
//     },
//     {
//       id: "2",
//       Admin: "Amit Singh",
//       User: "Ramesh",
//       meterId: "MTR002",
//       meterName: "Meter 2",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Offline",
//       connectionType: "Residential",
//     },
//     {
//       id: "3",
//       Admin: "Sunil",
//       User: "Suresh",
//       meterId: "MTR003",
//       meterName: "Meter 3",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Faulty",
//       connectionType: "Residential",
//     },
//     {
//       id: "4",
//       Admin: "Sunil",
//       User: "Suresh",
//       meterId: "MTR004",
//       meterName: "Meter 4",
//       currentBalance: 25.0,
//       lastRecharge: "2024-07-15",
//       status: "Faulty",
//       connectionType: "Residential",
//     },
//     {
//       id: "5",
//       Admin: "Rajesh Kumar",
//       User: "Ankit",
//       meterId: "MTR005",
//       meterName: "Meter 5",
//       currentBalance: 150.5,
//       lastRecharge: "2024-07-20",
//       status: "Online",
//       connectionType: "Residential",
//     },
//   ];

//   useEffect(() => {
//     dispatch(setHeaderTitle("Super Admin"));
//     dispatch(setBreadcrumbs([{ label: "Super Admin" }]));
//   }, []);

//   useMemo(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearch(filters.search);
//     }, 500);
//     return () => clearTimeout(handler);
//   }, [filters.search]);

//   const filteredSuggestions = useMemo(() => {
//     if (!debouncedSearch.trim()) return [];
//     return metersData.filter(
//       (meter) =>
//         meter.meterId.toLowerCase().includes(filters.search.toLowerCase()) ||
//         meter.User.toLowerCase().includes(filters.search.toLowerCase())
//     );
//   }, [debouncedSearch]);

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleMeterSelection = (meter) => {
//     setSelectedMeters((prev) => {
//       const alreadySelected = prev.find((m) => m.meterId === meter.meterId);
//       if (alreadySelected) {
//         return prev.filter((m) => m.meterId !== meter.meterId);
//       } else {
//         return [...prev, meter];
//       }
//     });
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Online":
//         return "text-green-700 bg-green-100";
//       case "Offline":
//         return "text-red-700 bg-red-100";
//       case "Faulty":
//         return "text-orange-700 bg-orange-100";
//       default:
//         return "text-gray-700 bg-gray-100";
//     }
//   };

//   const handleRecharge = (meter) => {
//     setSelectedMeter(meter);
//     setShowRechargeModal(true);
//   };

//   const processRecharge = () => {
//     if (rechargeAmount && selectedMeter) {
//       alert(
//         `Recharge of ₹${rechargeAmount} initiated for meter ${selectedMeter.meterId}`
//       );
//       setRechargeAmount("");
//       setSelectedMeter(null);
//       setShowRechargeModal(false);
//     }
//   };

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-4 max-w-7xl mx-auto">
//         <div className="mb-4">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
//             Admin Panel
//           </h1>
//           <p className="text-sm sm:text-base text-gray-600">
//             Manage all meters, recharge balances, and monitor statuses
//           </p>
//         </div>

//         {/* Search + Action Section */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
//           <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4 items-start md:items-center">
//             <div className="w-full md:w-1/2 relative" ref={dropdownRef}>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Search Meter
//               </label>

//               <input
//                 type="text"
//                 placeholder={
//                   selectedMeters.length > 0
//                     ? `${selectedMeters.length} Meter${
//                         selectedMeters.length > 1 ? "s" : ""
//                       } Selected`
//                     : "Search MeterId, Name..."
//                 }
//                 value={filters.search}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setFilters({ ...filters, search: value });
//                   setIsDropdownOpen(true);
//                 }}
//                 onFocus={() => setIsDropdownOpen(true)}
//                 className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//               />

//               {isDropdownOpen && filteredSuggestions.length > 0 && (
//                 <ul className="absolute bg-white border border-gray-300 mt-1 rounded-md max-h-40 overflow-y-auto text-sm">
//                   {filteredSuggestions.map((suggestion, index) => (
//                     <li
//                       key={index}
//                       onClick={() => toggleMeterSelection(suggestion)}
//                       className="px-3 py-1 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
//                     >
//                       <input
//                         type="checkbox"
//                         checked={
//                           !!selectedMeters.find(
//                             (m) => m.meterId === suggestion.meterId
//                           )
//                         }
//                         readOnly
//                       />
//                       <span>
//                         {suggestion.meterId} ({suggestion.Admin},{" "}
//                         {suggestion.meterName})
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Selected Meter Cards */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 sm:p-4 lg:p-4 space-y-4">
//           {selectedMeters.length > 0 ? (
//             selectedMeters.map((selectedSearchMeter) => (
//               <div key={selectedSearchMeter.meterId} className=" space-y-2">
//                 <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
//                   <div className="flex flex-col space-y-1">
//                     <p className="text-xs sm:text-sm font-semibold text-gray-500  tracking-wide">
//                       Meter ID
//                     </p>
//                     <p className="text-sm sm:text-base text-blue-600 font-medium break-all">
//                       {selectedSearchMeter.meterId}
//                     </p>
//                   </div>
//                   <div className="flex flex-col space-y-1">
//                     <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wide">
//                       User
//                     </p>
//                     <p
//                       className="text-sm sm:text-base text-gray-800 font-medium truncate"
//                       title={selectedSearchMeter.meterName}
//                     >
//                       {selectedSearchMeter.User}
//                     </p>
//                   </div>
//                   <div className="flex flex-col space-y-1">
//                     <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wide">
//                       Meter Name
//                     </p>
//                     <p
//                       className="text-sm sm:text-base text-gray-800 font-medium truncate"
//                       title={selectedSearchMeter.meterName}
//                     >
//                       {selectedSearchMeter.meterName}
//                     </p>
//                   </div>
//                   <div className="flex flex-col space-y-1">
//                     <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wide">
//                       Balance
//                     </p>
//                     <p className="text-base sm:text-lg font-bold text-green-600">
//                       ₹{selectedSearchMeter.currentBalance}
//                     </p>
//                   </div>
//                   <div className="flex flex-col space-y-1">
//                     <p className="text-xs sm:text-sm font-semibold text-gray-500  tracking-wide">
//                       Last Recharge
//                     </p>
//                     <p className="text-sm sm:text-base font-semibold text-blue-600">
//                       {selectedSearchMeter.lastRecharge}
//                     </p>
//                   </div>
//                   <div className="flex flex-col space-y-1">
//                     <p className="text-xs sm:text-sm font-semibold text-gray-500  tracking-wide">
//                       Status
//                     </p>
//                     <div>
//                       <span
//                         className={`inline-block px-2 py-1 text-xs sm:text-sm font-semibold rounded-full ${getStatusColor(
//                           selectedSearchMeter.status
//                         )}`}
//                       >
//                         {selectedSearchMeter.status}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className=" pt-1 mt-2">
//                   <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
//                     <div className="flex xs:flex-row gap-2 flex-1">
//                       <button
//                         onClick={() =>
//                           navigate(
//                             `/admin/rechargehistory/${selectedSearchMeter.meterId}`
//                           )
//                         }
//                         className="px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md"
//                       >
//                         Recharge History
//                       </button>
//                       <button
//                         onClick={() =>
//                           navigate(
//                             `/admin/meterdata/${selectedSearchMeter.meterId}`
//                           )
//                         }
//                         className="px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md"
//                       >
//                         Usage History
//                       </button>
//                     </div>
//                     <div className="sm:w-auto">
//                       <button
//                         onClick={() => handleRecharge(selectedSearchMeter)}
//                         className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold rounded-md hover:from-green-700 hover:to-green-800 active:from-green-800 active:to-green-900 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
//                       >
//                         Recharge Now
//                       </button>
//                     </div>
//                   </div>
//                   <hr className="mt-2 mb-2" />
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="flex flex-col items-center justify-center py-8 sm:py-12">
//               <div className="text-gray-400 mb-3">
//                 <svg
//                   className="w-12 h-12 sm:w-16 sm:h-16"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                   />
//                 </svg>
//               </div>
//               <p className="text-gray-600 text-center text-sm sm:text-base font-medium">
//                 Please search and select a meter to display details
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Recharge Modal */}
//         {showRechargeModal && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
//               <button
//                 onClick={() => setShowRechargeModal(false)}
//                 className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
//               >
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold mb-4">Recharge Meter</h2>
//               {selectedMeter && (
//                 <div className="space-y-1 mb-4 text-sm text-gray-700">
//                   <div>
//                     <strong>Meter:</strong> {selectedMeter.meterId}
//                   </div>
//                   <div>
//                     <strong>Admin:</strong> {selectedMeter.Admin}
//                   </div>
//                   <div>
//                     <strong>User:</strong> {selectedMeter.User}
//                   </div>
//                   <div>
//                     <strong>Current Balance:</strong> ₹
//                     {selectedMeter.currentBalance}
//                   </div>
//                 </div>
//               )}
//               <input
//                 type="number"
//                 placeholder="Enter recharge amount"
//                 value={rechargeAmount}
//                 onChange={(e) => setRechargeAmount(e.target.value)}
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm"
//               />
//               <div className="flex justify-end gap-2">
//                 <button
//                   onClick={() => setShowRechargeModal(false)}
//                   className="px-4 py-2 cursor-pointer text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={processRecharge}
//                   disabled={!rechargeAmount}
//                   className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
//                 >
//                   Recharge
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

// import React, { useState, useEffect, useMemo, useRef } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";

// const AdminPanel = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const dropdownRef = useRef(null);

//   const [filters, setFilters] = useState({ search: "" });
//   const [debouncedSearch, setDebouncedSearch] = useState(filters.search);
//   const [selectedMeter, setSelectedMeter] = useState(null);
//   const [showRechargeModal, setShowRechargeModal] = useState(false);
//   const [rechargeAmount, setRechargeAmount] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const metersPerPage = 10;

//   const [allMeters, setAllMeters] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     dispatch(setHeaderTitle("Super Admin"));
//     dispatch(setBreadcrumbs([{ label: "Super Admin" }]));
//   }, []);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearch(filters.search);
//       setCurrentPage(1);
//     }, 400);
//     return () => clearTimeout(handler);
//   }, [filters.search]);

//   useEffect(() => {
//     const fetchMeters = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/v1/meter/get-all-meter"
//         );
//         const formatted = response.data.data.map((item) => ({
//           id: item._id,
//           Admin: "Admin", // Static placeholder
//           User: item.assingnedUserId?.name || "Unassigned",
//           meterId: item.meterId,
//           meterName: item.name,
//           currentBalance: Math.floor(Math.random() * 100), // Mock value
//           lastRecharge: item.updatedAt?.split("T")[0] || "-",
//           status: item.status === "online" ? "Online" : "Offline",
//           connectionType: item.type,
//           originalData: item,
//         }));
//         setAllMeters(formatted);
//       } catch (err) {
//         console.error("Error fetching meters:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeters();
//   }, []);

//   const uniqueMetersData = useMemo(() => {
//     const seen = new Set();
//     return allMeters.filter((meter) => {
//       if (seen.has(meter.meterId)) return false;
//       seen.add(meter.meterId);
//       return true;
//     });
//   }, [allMeters]);

//   const filteredMeters = useMemo(() => {
//     if (!debouncedSearch.trim()) return uniqueMetersData;
//     return uniqueMetersData.filter(
//       (meter) =>
//         meter.meterId.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//         meter.User.toLowerCase().includes(debouncedSearch.toLowerCase())
//     );
//   }, [debouncedSearch, uniqueMetersData]);

//   const indexOfLastMeter = currentPage * metersPerPage;
//   const indexOfFirstMeter = indexOfLastMeter - metersPerPage;
//   const paginatedMeters = filteredMeters.slice(
//     indexOfFirstMeter,
//     indexOfLastMeter
//   );
//   const totalPages = Math.ceil(filteredMeters.length / metersPerPage);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Online":
//         return "text-green-700 bg-green-100";
//       case "Offline":
//         return "text-red-700 bg-red-100";
//       case "Faulty":
//         return "text-orange-700 bg-orange-100";
//       default:
//         return "text-gray-700 bg-gray-100";
//     }
//   };

//   const handleRecharge = () => {
//     if (selectedMeter) {
//       setShowRechargeModal(true);
//     }
//   };

//   const processRecharge = () => {
//     if (rechargeAmount && selectedMeter) {
//       alert(
//         `Recharge of ₹${rechargeAmount} initiated for meter ${selectedMeter.meterId}`
//       );
//       setRechargeAmount("");
//       setShowRechargeModal(false);
//     }
//   };

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-4 max-w-7xl mx-auto">
//         <div className="mb-4">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
//             Admin Panel
//           </h1>
//           <p className="text-sm sm:text-base text-gray-600">
//             Manage all meters, recharge balances, and monitor statuses
//           </p>
//         </div>

//         {/* Search and Actions */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
//           <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//             <div className="w-full md:w-2/3" ref={dropdownRef}>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Search Meter
//               </label>
//               <input
//                 type="text"
//                 placeholder="Search MeterId, Name..."
//                 value={filters.search}
//                 onChange={(e) =>
//                   setFilters({ ...filters, search: e.target.value })
//                 }
//                 className=" px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row w-full md:w-1/3 gap-2">
//               <button
//                 disabled={!selectedMeter}
//                 onClick={() =>
//                   navigate(`/admin/rechargehistory/${selectedMeter?.meterId}`)
//                 }
//                 className="cursor-pointer disabled:cursor-not-allowed px-3 py-2 w-full sm:w-auto text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
//               >
//                 Recharge History
//               </button>

//               <button
//                 disabled={!selectedMeter}
//                 onClick={() =>
//                   navigate(`/admin/meterdata/${selectedMeter?.meterId}`)
//                 }
//                 className="cursor-pointer disabled:cursor-not-allowed px-3 py-2 w-full sm:w-auto text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
//               >
//                 Usage History
//               </button>

//               <button
//                 disabled={!selectedMeter}
//                 onClick={handleRecharge}
//                 className="cursor-pointer disabled:cursor-not-allowed px-3 py-2 w-full sm:w-auto text-sm rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
//               >
//                 Recharge Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Loading State */}
//         {loading ? (
//           <div className="text-center text-gray-500 py-10">Loading meters...</div>
//         ) : (
//           <>
//             {/* Meter Cards */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
//               {paginatedMeters.map((meter) => (
//                 <div
//                   key={meter.id}
//                   className={`cursor-pointer p-4 border rounded-lg transition-all ${
//                     selectedMeter?.meterId === meter.meterId
//                       ? "border-blue-600 bg-blue-50"
//                       : "border-gray-200 hover:bg-gray-50"
//                   }`}
//                   onClick={() => setSelectedMeter(meter)}
//                 >
//                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//                     <div>
//                       <p className="text-xs text-gray-500">Meter ID</p>
//                       <p className="text-sm font-semibold text-blue-700">
//                         {meter.meterId}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">User</p>
//                       <p className="text-sm font-medium">{meter.User}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Meter Name</p>
//                       <p className="text-sm font-medium">{meter.meterName}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Balance</p>
//                       <p className="text-sm font-bold text-green-600">
//                         ₹{meter.currentBalance}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Last Recharge</p>
//                       <p className="text-sm font-medium text-blue-600">
//                         {meter.lastRecharge}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Status</p>
//                       <span
//                         className={`text-xs px-2 py-1 font-medium rounded-full ${getStatusColor(
//                           meter.status
//                         )}`}
//                       >
//                         {meter.status}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center mt-6 gap-4">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200 disabled:opacity-50"
//               >
//                 Previous
//               </button>
//               <span className="text-sm font-medium text-gray-700">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={() =>
//                   setCurrentPage((prev) =>
//                     prev < totalPages ? prev + 1 : prev
//                   )
//                 }
//                 disabled={currentPage === totalPages}
//                 className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200 disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}

//         {/* Recharge Modal */}
//         {showRechargeModal && selectedMeter && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
//               <button
//                 onClick={() => setShowRechargeModal(false)}
//                 className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
//               >
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold mb-4">Recharge Meter</h2>
//               <div className="space-y-1 mb-4 text-sm text-gray-700">
//                 <div>
//                   <strong>Meter:</strong> {selectedMeter.meterId}
//                 </div>
//                 <div>
//                   <strong>Admin:</strong> {selectedMeter.Admin}
//                 </div>
//                 <div>
//                   <strong>User:</strong> {selectedMeter.User}
//                 </div>
//                 <div>
//                   <strong>Current Balance:</strong> ₹
//                   {selectedMeter.currentBalance}
//                 </div>
//               </div>
//               <input
//                 type="number"
//                 placeholder="Enter recharge amount"
//                 value={rechargeAmount}
//                 onChange={(e) => setRechargeAmount(e.target.value)}
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm"
//               />
//               <div className="flex justify-end gap-2">
//                 <button
//                   onClick={() => setShowRechargeModal(false)}
//                   className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={processRecharge}
//                   disabled={!rechargeAmount}
//                   className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
//                 >
//                   Recharge
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;


import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
import Header from "../components/header/Header";

const AdminPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const [filters, setFilters] = useState({ search: "" });
  const [debouncedSearch, setDebouncedSearch] = useState(filters.search);
  const [selectedMeter, setSelectedMeter] = useState(null);
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const metersPerPage = 10;

  const metersData = [
    {
      id: "1",
      Admin: "Priya Sharma",
      User: "Rahul",
      meterId: "MTR001",
      meterName: "Meter 1",
      currentBalance: 75.25,
      lastRecharge: "2024-07-18",
      status: "Online",
      connectionType: "Commercial",
    },
    {
      id: "2",
      Admin: "Amit Singh",
      User: "Ramesh",
      meterId: "MTR002",
      meterName: "Meter 2",
      currentBalance: 25.0,
      lastRecharge: "2024-07-15",
      status: "Offline",
      connectionType: "Residential",
    },
    {
      id: "3",
      Admin: "Sunil",
      User: "Suresh",
      meterId: "MTR003",
      meterName: "Meter 3",
      currentBalance: 25.0,
      lastRecharge: "2024-07-15",
      status: "Faulty",
      connectionType: "Residential",
    },
    {
      id: "4",
      Admin: "Sunil",
      User: "Suresh",
      meterId: "MTR004",
      meterName: "Meter 4",
      currentBalance: 25.0,
      lastRecharge: "2024-07-15",
      status: "Faulty",
      connectionType: "Residential",
    },
    {
      id: "5",
      Admin: "Rajesh Kumar",
      User: "Ankit",
      meterId: "MTR005",
      meterName: "Meter 5",
      currentBalance: 150.5,
      lastRecharge: "2024-07-20",
      status: "Online",
      connectionType: "Residential",
    },
    {
      id: "6",
      Admin: "Deepak",
      User: "Vikram",
      meterId: "MTR006",
      meterName: "Meter 6",
      currentBalance: 80.0,
      lastRecharge: "2024-07-16",
      status: "Online",
      connectionType: "Residential",
    },
  ];

  // Remove duplicates based on meterId
  const uniqueMetersData = useMemo(() => {
    const seen = new Set();
    return metersData.filter((meter) => {
      if (seen.has(meter.meterId)) return false;
      seen.add(meter.meterId);
      return true;
    });
  }, [metersData]);

  useEffect(() => {
    dispatch(setHeaderTitle("Super Admin"));
    dispatch(setBreadcrumbs([{ label: "Super Admin" }]));
  }, []);

  // Debounce logic for search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(filters.search);
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(handler);
  }, [filters.search]);

  const filteredMeters = useMemo(() => {
    if (!debouncedSearch.trim()) return uniqueMetersData;
    return uniqueMetersData.filter(
      (meter) =>
        meter.meterId.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        meter.User.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, uniqueMetersData]);

  const indexOfLastMeter = currentPage * metersPerPage;
  const indexOfFirstMeter = indexOfLastMeter - metersPerPage;
  const paginatedMeters = filteredMeters.slice(
    indexOfFirstMeter,
    indexOfLastMeter
  );
  const totalPages = Math.ceil(filteredMeters.length / metersPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case "Online":
        return "text-green-700 bg-green-100";
      case "Offline":
        return "text-red-700 bg-red-100";
      case "Faulty":
        return "text-orange-700 bg-orange-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  const handleRecharge = () => {
    if (selectedMeter) {
      setShowRechargeModal(true);
    }
  };

  const processRecharge = () => {
    if (rechargeAmount && selectedMeter) {
      alert(
        `Recharge of ₹${rechargeAmount} initiated for meter ${selectedMeter.meterId}`
      );
      setRechargeAmount("");
      setShowRechargeModal(false);
    }
  };

  return (
    <div className="bg-blue-200/10 min-h-screen">
      <Header />
      <div className="p-4 max-w-7xl mx-auto">
        <div className="mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            Admin Panel
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Manage all meters, recharge balances, and monitor statuses
          </p>
        </div>

        {/* Search and Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:w-2/3" ref={dropdownRef}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search Meter
              </label>
              <input
                type="text"
                placeholder="Search MeterId, Name..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className=" px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full md:w-1/3 gap-2">
              <button
                disabled={!selectedMeter}
                onClick={() =>
                  navigate(`/admin/rechargehistory/${selectedMeter?.meterId}`)
                }
                className="cursor-pointer disabled:cursor-not-allowed px-3 py-2 w-full sm:w-auto text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
              
                Recharge History
              </button>

              <button
                disabled={!selectedMeter}
                onClick={() =>
                  navigate(`/admin/meterdata/${selectedMeter?.meterId}`)
                }
                className="cursor-pointer disabled:cursor-not-allowed px-3 py-2 w-full sm:w-auto text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                Usage History
              </button>

              <button
                disabled={!selectedMeter}
                onClick={handleRecharge}
                className="cursor-pointer disabled:cursor-not-allowed px-3 py-2 w-full sm:w-auto text-sm rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
              >
                Recharge Now
              </button>
            </div>
          </div>
        </div>

        {/* Meter Cards */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
          {paginatedMeters.map((meter) => (
            <div
              key={meter.id}
              className={`cursor-pointer p-4 border rounded-lg transition-all ${
                selectedMeter?.meterId === meter.meterId
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedMeter(meter)}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <div>
                  <p className=" text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">Meter ID</p>
                  <p className="text-sm font-semibold text-blue-700">
                    {meter.meterId}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-500  tracking-wid">User</p>
                  <p className="text-sm font-medium">{meter.User}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">Meter Name</p>
                  <p className="text-sm font-medium">{meter.meterName}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">Balance</p>
                  <p className="text-sm font-bold text-green-600">
                    ₹{meter.currentBalance}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">Last Recharge</p>
                  <p className="text-sm font-medium text-blue-600">
                    {meter.lastRecharge}
                  </p>
                </div>
                <div>
                  <p className="ttext-xs sm:text-sm font-semibold text-gray-500 tracking-wid">Status</p>
                  <span
                    className={`text-xs px-2 py-1 font-medium rounded-full ${getStatusColor(
                      meter.status
                    )}`}
                  >
                    {meter.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < totalPages ? prev + 1 : prev
              )
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Recharge Modal */}
        {showRechargeModal && selectedMeter && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
              <button
                onClick={() => setShowRechargeModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
              <h2 className="text-lg font-semibold mb-4">Recharge Meter</h2>
              <div className="space-y-1 mb-4 text-sm text-gray-700">
                <div>
                  <strong>Meter:</strong> {selectedMeter.meterId}
                </div>
                <div>
                  <strong>Admin:</strong> {selectedMeter.Admin}
                </div>
                <div>
                  <strong>User:</strong> {selectedMeter.User}
                </div>
                <div>
                  <strong>Current Balance:</strong> ₹
                  {selectedMeter.currentBalance}
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter recharge amount"
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowRechargeModal(false)}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={processRecharge}
                  disabled={!rechargeAmount}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  Recharge
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

