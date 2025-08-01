// import React, { useEffect, useState, useMemo, useCallback } from 'react';
// import {
//   Gauge, TrendingUp, Download, AlertTriangle, Zap, Bell, Calendar,
//   Activity, Users, DollarSign, BarChart3, UserPlus, Search, Settings,
//   Filter, RefreshCw, ChevronDown, Eye, TrendingDown, Clock, CheckCircle,
//   XCircle, AlertCircle
// } from "lucide-react";

// // Mock data for demo purposes
// const mockCharts = [
//   {
//     id: 1,
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     dataPoints: [65, 59, 80, 81, 56, 55]
//   }
// ];

// import { useSelector, useDispatch } from "react-redux";

// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";

// const Dashboard = () => {
//   const [startDate, setStartDate] = useState("2025-04-01");
//   const [refreshing, setRefreshing] = useState(false);
//   const [notifications, setNotifications] = useState(23);
//   const [alerts, setAlerts] = useState([
//     { id: 1, type: 'critical', message: 'Meter #245 offline', time: '2 min ago' },
//     { id: 2, type: 'warning', message: 'High usage detected', time: '5 min ago' },
//     { id: 3, type: 'info', message: 'System update available', time: '1 hour ago' }
//   ]);

//   const today = new Date().toISOString().split("T")[0];

//    const dispatch = useDispatch();
//     useEffect(() => {
//       dispatch(setHeaderTitle("Admin Dashboard"));
//       dispatch(setBreadcrumbs([{ label: "Admin Dashboard" }]));
//     }, []);

//   const filteredCharts = useMemo(() => {
//     return mockCharts.map(chart => {
//       const from = new Date(startDate);
//       const to = new Date();
//       const filteredLabels = [];
//       const filteredDataPoints = [];

//       chart.labels.forEach((label, i) => {
//         const fakeDate = new Date(`2025-${(i + 1).toString().padStart(2, "0")}-01`);
//         if (fakeDate >= from && fakeDate <= to) {
//           filteredLabels.push(label);
//           filteredDataPoints.push(chart.dataPoints[i]);
//         }
//       });

//       return {
//         ...chart,
//         labels: filteredLabels,
//         dataPoints: filteredDataPoints,
//       };
//     });
//   }, [startDate]);

//   const handleRefresh = useCallback(async () => {
//     setRefreshing(true);
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setRefreshing(false);
//   }, []);

//   const dismissAlert = useCallback((alertId) => {
//     setAlerts(prev => prev.filter(alert => alert.id !== alertId));
//   }, []);

//   const MetricsCard = ({ title, value, change, isPositive, icon: Icon, trend }) => (
//     <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 w-full">
//       <div className="flex items-center justify-between mb-4">
//         <div className={`p-3 rounded-xl ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
//           <Icon className={`${isPositive ? 'text-green-600' : 'text-red-600'}`} size={24} />
//         </div>
//         <div className="flex items-center space-x-1">
//           {isPositive ? <TrendingUp size={16} className="text-green-600" /> : <TrendingDown size={16} className="text-red-600" />}
//           <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>{change}</span>
//         </div>
//       </div>
//       <div>
//         <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
//         <p className="text-2xl font-bold text-gray-900">{value}</p>
//         {trend && (
//           <div className="mt-2 h-12 bg-gray-50 rounded-sm flex items-end justify-between px-2 py-1">
//             {trend.map((point, index) => (
//               <div
//                 key={index}
//                 className={`w-2 rounded-t ${isPositive ? 'bg-green-400' : 'bg-red-400'}`}
//                 style={{ height: `${point}%` }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   const EnhancedChart = ({ data }) => (
//     <div className="w-full min-h-[200px] md:min-h-[300px] bg-gray-50 rounded-sm flex items-center justify-center">
//       <div className="text-center">
//         <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
//         <p className="text-gray-600">Interactive Chart Placeholder</p>
//         <p className="text-sm text-gray-500 mt-2">Data points: {data.dataPoints?.length || 0}</p>
//       </div>
//     </div>
//   );

//   const AlertPanel = () => (
//     <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow w-full">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
//         <div className="flex items-center space-x-3">
//           <div className="p-2 bg-orange-100 rounded-sm">
//             <AlertTriangle className="text-orange-600" size={20} />
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Smart Alerts</h3>
//             <p className="text-sm text-gray-500">{alerts.length} active alerts</p>
//           </div>
//         </div>
//         <button onClick={() => setAlerts([])} className="text-sm text-blue-600 hover:text-blue-800">
//           Clear All
//         </button>
//       </div>
//       <div className="space-y-3 max-h-[300px] overflow-y-auto">
//         {alerts.map((alert) => (
//           <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-sm">
//             <div className="flex items-center space-x-3">
//               <div className={`w-2 h-2 rounded-full ${
//                 alert.type === 'critical' ? 'bg-red-500' :
//                 alert.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
//               }`} />
//               <div>
//                 <div className="text-sm font-medium text-gray-900">{alert.message}</div>
//                 <div className="text-xs text-gray-500">{alert.time}</div>
//               </div>
//             </div>
//             <button onClick={() => dismissAlert(alert.id)} className="text-gray-400 hover:text-gray-600">
//               <XCircle size={16} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-blue-200/20 min-h-screen">
//     <Header/>
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//           <div>
//             <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
//             <p className="text-xs text-gray-500"><span className='font-bold'>Hello {"user"}</span> Welcome to Real-time energy management system</p>
//           </div>
//           <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
//             <Clock size={16} />
//             <span>Last updated: {new Date().toLocaleTimeString()}</span>
//             <button
//               onClick={handleRefresh}
//               disabled={refreshing}
//               className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
//             >
//               <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
//               {refreshing ? 'Refreshing...' : 'Refresh'}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Revenue Summary */}
//       <div className="mx-4 sm:mx-6 mt-6 mb-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 gap-6">
//           <div className="flex items-center space-x-6">
//             <div className="p-4 bg-emerald-100 rounded-2xl">
//               <DollarSign className="text-emerald-600" size={32} />
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold text-emerald-800 mb-1">Total Revenue</h2>
//               <div className="flex items-baseline space-x-2">
//                 <span className="text-3xl font-bold text-emerald-900">$95,000</span>
//                 <span className="text-sm text-emerald-600 flex items-center">
//                   <TrendingUp size={14} className="mr-1" /> +12.5%
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-wrap gap-6 justify-between">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-emerald-900">1,247</div>
//               <div className="text-sm text-emerald-600">Active Users</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-emerald-900">25/30</div>
//               <div className="text-sm text-emerald-600">Active Meters</div>
//             </div>
//             <button className="flex items-center px-4 py-2 bg-white/80 rounded-xl border border-emerald-200 hover:bg-white transition-colors">
//               <Download className="text-emerald-600 mr-2" size={18} />
//               <span className="text-emerald-700 font-medium">Export</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Grid Content */}
//       <div className="px-4 sm:px-6 pb-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           <MetricsCard title="Total Users" value="44,071" change="30.8%" isPositive={true} icon={Users} trend={[20, 40, 60, 80, 100, 85, 90]} />
//           <MetricsCard title="Faulty Meters" value="8" change="2.3%" isPositive={false} icon={AlertTriangle} trend={[10, 15, 8, 12, 20, 18, 8]} />
//           <MetricsCard title="Next Payment" value="$2,829" change="-1.43%" isPositive={false} icon={DollarSign} trend={[80, 70, 85, 75, 90, 85, 75]} />
//           <MetricsCard title="Energy Consumption" value="12,300 kWh" change="18.9%" isPositive={true} icon={Zap} trend={[30, 50, 70, 90, 85, 95, 100]} />
//         </div>

//         <div className="mt-6">
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-blue-100 rounded-sm">
//                   <BarChart3 className="text-blue-600" size={24} />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">Smart Usage Analytics</h2>
//                   <p className="text-sm text-gray-500">AI-powered consumption insights</p>
//                 </div>
//               </div>
//               <div className="flex flex-wrap items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <label className="text-sm font-medium text-gray-700">From:</label>
//                   <input
//                     type="date"
//                     value={startDate}
//                     max={today}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     className="px-3 py-2 border border-gray-300 rounded-sm text-sm focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>
//             </div>
//             <EnhancedChart data={filteredCharts[0] || { dataPoints: [] }} />
//           </div>
//         </div>

//         <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <AlertPanel />
//           <div className="space-y-6">
//             <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-200 p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="p-3 bg-green-100 rounded-xl">
//                   <Gauge className="text-green-600" size={24} />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                   <span className="text-xs text-green-700 font-medium">ONLINE</span>
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Meters</h3>
//               <div className="flex items-baseline space-x-2 mb-3">
//                 <span className="text-2xl font-bold text-green-600">25</span>
//                 <span className="text-lg text-gray-500">/30</span>
//                 <span className="text-sm text-green-600">(83%)</span>
//               </div>
//               <div className="w-full bg-green-200 rounded-full h-3 mb-2">
//                 <div className="bg-green-500 h-3 rounded-full transition-all duration-500" style={{ width: '83%' }}></div>
//               </div>
//               <p className="text-sm text-gray-600">5 meters scheduled for maintenance</p>
//             </div>

//             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="p-3 bg-blue-100 rounded-xl">
//                   <Activity className="text-blue-600" size={24} />
//                 </div>
//                 <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">EXCELLENT</div>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">System Health</h3>
//               <div className="text-2xl font-bold text-blue-600 mb-3">98.5%</div>
//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Uptime</span>
//                   <span className="font-medium">99.2%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Response Time</span>
//                   <span className="font-medium">45ms</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState, useMemo, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../redux/slice/adminDashboardDataSlice"; // adjust path as needed
import { Link } from "react-router-dom";

import {
  Gauge,
  TrendingUp,
  Download,
  AlertTriangle,
  Zap,
  Bell,
  Calendar,
  Activity,
  Users,
  DollarSign,
  BarChart3,
  UserPlus,
  Search,
  Settings,
  Filter,
  RefreshCw,
  ChevronDown,
  Eye,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
// import MeterList from "../components/MeterList";
import {
  fetchAdminMeters,
  selectFilteredAdminMeters,
} from "../redux/slice/meterSlice";
import MeterList from "../components/MeterList";
// import { BarChart3 } from "lucide-react";
import CurrentPowerChart from "../components/meterManagement/CurrentPowerChart";
// Mock data for demo purposes
// const mockCharts = [
//   {
//     id: 1,
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     dataPoints: [65, 59, 80, 81, 56, 55],
//   },
// ];

import { fetchAdminDailyConsumption } from "../redux/slice/adminDashboardDataSlice";
const mockCharts = [
  {
    id: 1,
    title: "Energy Consumption",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    dataPoints: [65, 59, 80, 81, 56, 55],
    barColor: "rgba(75, 192, 192, 0.6)",
    bgColor: "rgba(75, 192, 192, 1)",
  },
  // Add more charts if needed
];

const Dashboard = () => {
  const [startDate, setStartDate] = useState("2025-04-01");
  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState(23);
  const dispatch = useDispatch();
  const adminId = "68774978c2cb68989bbf187b"; // Replace with dynamic if needed
  //   const [alerts, setAlerts] = useState([
  //     {
  //       id: 1,
  //       type: "critical",
  //       message: "Meter #245 offline",
  //       time: "2 min ago",
  //     },
  //     {
  //       id: 2,
  //       type: "warning",
  //       message: "High usage detected",
  //       time: "5 min ago",
  //     },
  //     {
  //       id: 3,
  //       type: "info",
  //       message: "System update available",
  //       time: "1 hour ago",
  //     },
  //   ]);
  const meters = useSelector(selectFilteredAdminMeters);
  const loading = useSelector((state) => state.meters.adminLoading);
  // const error = useSelector((state) => state.meters.adminError);
  console.log("======", meters);

  useEffect(() => {
    dispatch(fetchAdminMeters(adminId));
  }, [dispatch, adminId]);

  const mockAdminNotifications = [
    {
      _id: "ADM-1",
      alertType: "High Load Usage",
      message:
        "High load detected on Meter ID #MTR456 for User ID #USR789. Please reduce usage to avoid overload.",
      value: "6.2kW",
      mode: "Email",
      time: "2025-01-16T09:15:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-2",
      alertType: "Security Alert",
      message: "Unusual login attempt detected",
      value: "From IP: 192.168.1.100",
      mode: "Text",
      time: "2025-01-15T22:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-3",
      alertType: "Maintenance Required",
      message: "Meter MTR-004 needs firmware update",
      value: "MTR-004",
      mode: "Email",
      time: "2025-01-14T14:45:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-4",
      alertType: "Reverse Polarity",
      message:
        "Reverse current detected for Meter ID #MTR321 (User ID #USR654). Downlink sent to protect the system.",
      value: "Reverse Current",
      mode: "Text",
      time: "2025-01-16T11:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-5",
      alertType: "Magnetic Interference",
      message:
        "We detected possible magnetic interference on Meter ID #MTR888 (User ID #USR333). Please ensure the area is safe.",
      value: "Magnet detected",
      mode: "Email",
      time: "2025-01-16T10:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-6",
      alertType: "Current Imbalance",
      message:
        "Phase current imbalance noticed – please check wiring or load for Meter ID #MTR567.",
      value: "R:Y:B = 5A:12A:7A",
      mode: "Email",
      time: "2025-01-16T09:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-7",
      alertType: "Neutral Voltage Issue",
      message:
        "Voltage fluctuation detected – this may damage appliances (Meter ID #MTR678).",
      value: "Neutral = 18V",
      mode: "Text",
      time: "2025-01-16T08:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-8",
      alertType: "Meter Offline",
      message:
        "Meter #MTR123 (User ID #USR987) is offline or not responding for over 3 hours.",
      value: "Last seen: 05:30 AM",
      mode: "Email",
      time: "2025-01-16T08:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-9",
      alertType: "Garbage Uplink Data",
      message:
        "Meter #MTR456 (User #USR789) sent invalid data (01FFFFF) 3 times. Please verify.",
      value: "3x Invalid packets",
      mode: "Email",
      time: "2025-01-15T19:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-10",
      alertType: "No Usage Detected",
      message:
        "No usage detected today on Meter ID #MTR123 for User ID #USR456. May indicate no one is home or a device issue.",
      value: "0 Units",
      mode: "Text",
      time: "2025-01-15T21:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-11",
      alertType: "High Load vs Previous",
      message:
        "Today's load is 50% higher than any previous day for Meter ID #MTR890 (User ID #USR222).",
      value: "9.5kW today",
      mode: "Email",
      time: "2025-01-15T20:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-12",
      alertType: "Spike in Usage",
      message: "Unusual electricity usage detected today.",
      value: "3× Daily Avg",
      mode: "Text",
      time: "2025-01-15T18:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-13",
      alertType: "Meter Offline",
      message: "Meter #MTR456 is offline or not responding for over 3 hours.",
      value: "Last seen: 02:00 PM",
      mode: "Email",
      time: "2025-01-15T17:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-14",
      alertType: "Reverse Polarity",
      message:
        "Reverse current detected for Meter ID #MTR654 (User ID #USR100).",
      value: "Fault Detected",
      mode: "Text",
      time: "2025-01-15T16:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-15",
      alertType: "Current Imbalance",
      message: "Current imbalance detected on Meter MTR010",
      value: "R:5A G:12A B:7A",
      mode: "Email",
      time: "2025-01-15T15:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-16",
      alertType: "Garbage Uplink Data",
      message: "Meter MTR777 sent corrupt data pattern multiple times",
      value: "01FFFFF",
      mode: "Email",
      time: "2025-01-15T14:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-17",
      alertType: "Magnetic Interference",
      message: "Possible magnetic tampering detected – Meter ID #MTR987",
      value: "Magnet Triggered",
      mode: "Text",
      time: "2025-01-15T13:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-18",
      alertType: "Neutral Voltage Issue",
      message: "Voltage on neutral exceeded 15V threshold.",
      value: "Neutral = 16.5V",
      mode: "Email",
      time: "2025-01-15T12:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-19",
      alertType: "Spike in Usage",
      message: "Daily usage has doubled for Meter ID #MTR007.",
      value: "4 units → 10 units",
      mode: "Email",
      time: "2025-01-15T12:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-20",
      alertType: "Security Alert",
      message: "Multiple failed login attempts detected.",
      value: "5 attempts",
      mode: "Text",
      time: "2025-01-15T11:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-21",
      alertType: "Maintenance Required",
      message: "Low signal strength on Meter ID #MTR006",
      value: "RSSI = -105 dBm",
      mode: "Email",
      time: "2025-01-15T11:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-22",
      alertType: "System Alert",
      message: "Memory usage exceeded 80%",
      value: "81% RAM",
      mode: "Email",
      time: "2025-01-15T10:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-23",
      alertType: "Garbage Uplink Data",
      message: "Invalid data received multiple times from Meter MTR-300",
      value: "Repeated Code: XXFFF",
      mode: "Email",
      time: "2025-01-15T09:45:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-24",
      alertType: "Meter Offline",
      message: "No response from Meter ID #MTR110 for 5 hours",
      value: "Offline",
      mode: "Text",
      time: "2025-01-15T09:15:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-25",
      alertType: "Reverse Polarity",
      message:
        "Meter #MTR999 has reversed current. Please inspect immediately.",
      value: "Alert: Polarity Mismatch",
      mode: "Email",
      time: "2025-01-15T08:00:00Z",
      status: "enabled",
    },
  ];

  const initialAlerts = mockAdminNotifications.filter((alert) =>
    [
      "Reverse Polarity",
      "High Load Usage",
      "Balance Expired",
      "Magnetic Interference",
    ].includes(alert.alertType)
  );

  const [alerts, setAlerts] = useState(initialAlerts);

  //   const [isExportOpen, setIsExportOpen] = useState(false);
  //   const handleExportClick = (format) => {
  //     console.log(`Exporting as ${format}`);
  //     setIsExportOpen(false);
  //     // Add your export logic here
  //   };   later i will integrate

  const today = new Date().toISOString().split("T")[0];

  const [adminDashboardData, setAdminDashboardData] = useState(null);
  //   const today = new Date().toISOString().split("T")[0];

  //   const [adminDashboardData, setAdminDashboardData] = useState(null);

  console.log(useSelector((state) => state.adminDashboardData));
  const { data, error } = useSelector((state) => state.adminDashboardData);

  useEffect(() => {
    // dispatch(fetchDashboardData("64acbd8fc9e77a6fba123001"));
    dispatch(fetchDashboardData("68774978c2cb68989bbf187b"));
    dispatch(fetchAdminDailyConsumption("68774978c2cb68989bbf187b"));
    if (!loading && data) {
      setAdminDashboardData(data);
    }
  }, [dispatch, adminId]);

  const { dailyConsumption } = useSelector((state) => state.adminDashboardData);

  const labels =
    dailyConsumption?.map((item) =>
      new Date(item.updatedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      })
    ) || [];

  const dataPoints =
    dailyConsumption?.map((item) => parseFloat(item.totalAdminConsumption)) ||
    [];

  console.log(labels, dataPoints);

  // Transform the data correctly
  const chartData = [
    {
      id: "daily-consumption",
      title: "Admin Daily Consumption",
      labels:
        dailyConsumption?.map((item) =>
          new Date(item.updatedAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
          })
        ) || [],
      dataPoints:
        dailyConsumption?.map((item) =>
          parseFloat(item.totalAdminConsumption)
        ) || [],
      barColor: "rgba(75, 192, 192, 0.6)",
      bgColor: "rgba(75, 192, 192, 1)",
    },
  ];

  console.log("==dailyConsumption==", dailyConsumption);

  console.log("==chartData1==", chartData);

  const filterChart = (chart) => {
    // Return the chart data without filtering
    return chart;
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  const dismissAlert = (alertId) => {
    setAlerts(alerts.filter((alert) => alert._id !== alertId));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading Dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">
          Error loading dashboard: {error.message || error}
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">No dashboard data found.</p>
      </div>
    );
  }

  const totalActive = data.data.totalActiveMeters;
  const total = data.data.totalMeters;

  // Safeguard against division by zero
  const percentage = total > 0 ? Math.round((totalActive / total) * 100) : 0;

  console.log(data.data.totalRevenue);
  //   const MetricsCard = ({
  //     title,
  //     value,
  //     change,
  //     isPositive,
  //     icon: Icon,
  //     trend,
  //   }) => (
  //     <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 w-full">
  //       <div className="flex items-center justify-between mb-4">
  //         <div
  //           className={`p-3 rounded-xl ${
  //             isPositive ? "bg-green-100" : "bg-red-100"
  //           }`}
  //         >
  //           <Icon
  //             className={`${isPositive ? "text-green-600" : "text-red-600"}`}
  //             size={24}
  //           />
  //         </div>
  //         <div className="flex items-center space-x-1">
  //           {isPositive ? (
  //             <TrendingUp size={16} className="text-green-600" />
  //           ) : (
  //             <TrendingDown size={16} className="text-red-600" />
  //           )}
  //           <span
  //             className={`text-sm font-medium ${
  //               isPositive ? "text-green-600" : "text-red-600"
  //             }`}
  //           >
  //             {change}
  //           </span>
  //         </div>
  //       </div>
  //       <div>
  // {/*
  //        <div className="flex">
  //           <Link to="/userlist">    <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
  //         <p className="text-2xl font-bold text-gray-900">{value}</p></Link>
  //           <Link to="/userlist">    <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
  //         <p className="text-2xl font-bold text-gray-900">{value}</p></Link>
  //        </div> */}

  //         <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
  //         <p className="text-2xl font-bold text-gray-900">{value}</p>
  //         {trend && (
  //           <div className="mt-2 h-12 bg-gray-50 rounded-sm flex items-end justify-between px-2 py-1">
  //             {trend.map((point, index) => (
  //               <div
  //                 key={index}
  //                 className={`w-2 rounded-t ${
  //                   isPositive ? "bg-green-400" : "bg-red-400"
  //                 }`}
  //                 style={{ height: `${point}%` }}
  //               />
  //             ))}
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );

  //   const EnhancedChart = ({ data }) =>{
  //     const chartData =
  //     data?.labels?.map((label, index) => ({
  //       name: label,
  //       value: data.dataPoints[index],
  //     })) || [];
  //     return (
  //     <div className="w-full min-h-[200px] md:min-h-[300px] bg-gray-50 rounded-sm p-4">
  //       {chartData.length === 0 ? (
  //         <div className="flex flex-col items-center justify-center h-full text-center">
  //           <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
  //           <p className="text-gray-600">No chart data available</p>
  //           <p className="text-sm text-gray-500 mt-2">
  //             Data points: {data?.dataPoints?.length || 0}
  //           </p>
  //         </div>
  //       ) : (
  //         <ResponsiveContainer width="100%" height={250}>
  //           <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
  //             <CartesianGrid strokeDasharray="3 3" />
  //             <XAxis dataKey="name" stroke="#888" />
  //             <YAxis stroke="#888" />
  //             <Tooltip />
  //             <Bar dataKey="value"  stroke="none"  fill="#4bc0c099" radius={[4, 4, 0, 0]} />
  //           </BarChart>
  //         </ResponsiveContainer>
  //       )}
  //     </div>
  //   );
  // };

  // Custom Tooltip Component
  const MetricsCard = ({
    title,
    value,
    change,
    isPositive,
    icon: Icon,
    trend,
    subLabel, // e.g., "Total Meters"
    subValue, // e.g., 12345
    subLabel2,
    subValue2, // e.g. 67890
    valueRoute, // e.g. "/users"
    subValueRoute, // e.g. "/meters"
  }) => (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 w-full">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-3 rounded-xl ${
            isPositive ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <Icon
            className={`${isPositive ? "text-green-600" : "text-red-600"}`}
            size={24}
          />
        </div>
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <TrendingUp size={16} className="text-green-600" />
          ) : (
            <TrendingDown size={16} className="text-red-600" />
          )}
          <span
            className={`text-sm font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </span>
        </div>
      </div>

      <div>
        {/* Side-by-side values */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col">
            {valueRoute ? (
              <Link
                to={valueRoute}
                className="text-2xl font-bold text-gray-900 hover:underline cursor-pointer"
              >
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  {title}
                </h3>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </Link>
            ) : (
              <>
                {" "}
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  {title}
                </h3>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </>
            )}
          </div>

          {/* {subLabel && subValue && ( */}
          <div className="flex flex-col items-end">
            {subValueRoute ? (
              <Link
                to={subValueRoute}
                className="text-2xl font-bold text-gray-900 hover:underline cursor-pointer"
              >
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {subLabel}
                </p>
                <p className="text-2xl font-bold text-gray-900">{subValue}</p>
              </Link>
            ) : (
              <>
                {" "}
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {subLabel}
                </p>
                <p className="text-2xl font-bold text-gray-900">{subValue}</p>
              </>
            )}
          </div>
          {/* )} */}
        </div>

        {/* Chart */}
        {trend && (
          <div className="mt-2 h-12 bg-gray-50 rounded-sm flex items-end justify-between px-2 py-1">
            {trend.map((point, index) => (
              <div
                key={index}
                className={`w-2 rounded-t ${
                  isPositive ? "bg-green-400" : "bg-red-400"
                }`}
                style={{ height: `${point}%` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-md p-2 shadow text-sm text-gray-800">
          <p className="font-semibold">{label}</p>
          <p>Value: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  const EnhancedChart = ({ data }) => {
    const chartData =
      data?.labels?.map((label, index) => ({
        name: label,
        value: data.dataPoints[index],
      })) || [];

    return (
      <div className="w-full min-h-[200px] md:min-h-[300px] bg-gray-50 rounded-sm p-4">
        {chartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600">No chart data available</p>
            <p className="text-sm text-gray-500 mt-2">
              Data points: {data?.dataPoints?.length || 0}
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="value"
                fill="#4bc0c099"
                stroke="none" // no border
                radius={[4, 4, 0, 0]}
                activeBar={false} // ← disables hover shadow
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    );
  };

  console.log("==alert=====", alerts);
  const getColorByAlertType = (type) => {
    if (type.includes("Polarity")) return "bg-red-500";
    if (type.includes("Magnetic")) return "bg-orange-500";
    if (type.includes("Load")) return "bg-yellow-500";
    return "bg-blue-500";
  };
  const AlertPanel = () => (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-100 rounded-sm">
            <AlertTriangle className="text-orange-600" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Smart Alerts
            </h3>
            <p className="text-sm text-gray-500">
              {alerts.length} active alerts
            </p>
          </div>
        </div>
        <button
          onClick={() => setAlerts([])}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {alerts.map((alert) => (
          <div
            key={alert._id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-sm"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-2 h-2 rounded-full ${getColorByAlertType(
                  alert.alertType
                )}`}
              />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {alert.message}
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(alert.time).toLocaleString()}
                </div>
              </div>
            </div>
            <button
              onClick={() => dismissAlert(alert._id)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XCircle size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  console.log(data.data.totalRevenue);
  return (
    <div className="bg-blue-200/10 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-xs text-gray-500">
              <span className="font-bold">Hello {"user"}</span> Welcome to
              Real-time energy management system
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
            <Clock size={16} />
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`}
              />
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>
      </div>

      {/* Revenue Summary */}
      <div className="mx-4 sm:mx-6 mt-6 mb-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 gap-6">
          <div className="flex items-center space-x-6">
            <div className="p-4 bg-emerald-100 rounded-2xl">
              <DollarSign className="text-emerald-600" size={32} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-emerald-800 mb-1">
                Total Revenue
              </h2>
              <div className="flex items-baseline space-x-2">
                {/* <span className="text-3xl font-bold text-emerald-900">$95,000</span> */}
                <span className="text-3xl font-bold text-emerald-900">
                  {data.data.totalRevenue}
                </span>
                <span className="text-sm text-emerald-600 flex items-center">
                  <TrendingUp size={14} className="mr-1" /> +12.5%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-between">
            <div className="text-center">
              {/* <div className="text-2xl font-bold text-emerald-900">1,247</div> */}
              <div className="text-2xl font-bold text-emerald-900">
                {data.data.totalAssignedUsers}
              </div>
              <div className="text-sm text-emerald-600">Active Users</div>
            </div>
            <div className="text-center">
              {/* <div className="text-2xl font-bold text-emerald-900">25/30</div> */}
              <div className="text-2xl font-bold text-emerald-900">
                {data.data.totalActiveMeters}
              </div>
              <div className="text-sm text-emerald-600">Active Meters</div>
            </div>
            <button className="flex items-center px-4 py-2 bg-white/80 rounded-xl border border-emerald-200 hover:bg-white transition-colors">
              <Download className="text-emerald-600 mr-2" size={18} />
              <span className="text-emerald-700 font-medium">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="px-4 sm:px-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* <MetricsCard title="Total Users" value="44,071" change="30.8%" isPositive={true} icon={Users} trend={[20, 40, 60, 80, 100, 85, 90]} /> */}
          {/* <Link to="/userlist">
            <MetricsCard
              title="Total Users"
              value={data.data.totalUsers}
              change="30.8%"
              isPositive={true}
              icon={Users}
              trend={[20, 40, 60, 80, 100, 85, 90]}
            />
          </Link> */}

          {/* <Link to="/userlist"> */}
          <MetricsCard
            title="Total Users"
            value={data.data.totalUsers}
            subLabel="Total Meters"
            subValue={data.data.totalMeters}
            change="30.8%"
            isPositive={true}
            icon={Users}
            trend={[20, 40, 60, 80, 100, 85, 90]}
            valueRoute="/userlist"
            subValueRoute="/meterslist"
          />
          {/* </Link> */}

          {/* <MetricsCard title="Faulty Meters" value="8" change="2.3%" isPositive={false} icon={AlertTriangle} trend={[10, 15, 8, 12, 20, 18, 8]} /> */}
          <MetricsCard

            subLabel2="Online Meters"
            subValu2={data.data.totalMeters}

            title="Faulty Meters"
            value={data.data.totalFaultyMeters}
            subLabel="Offline Meters"
            subValue={data.data.totalFaultyMeters}

           
            change="2.3%"
            isPositive={false}
            icon={AlertTriangle}
            trend={[10, 15, 8, 12, 20, 18, 8]}
          />

          {/* <MetricsCard title="Next Payment" value="$2,829" change="-1.43%" isPositive={false} icon={DollarSign} trend={[80, 70, 85, 75, 90, 85, 75]} /> */}
          <MetricsCard
            title="Due Balance"
            value={data.data.negativeRevenue}
            change="-1.43%"
            isPositive={false}
            icon={DollarSign}
            trend={[80, 70, 85, 75, 90, 85, 75]}
          />
          {/* <MetricsCard title="Energy Consumption" value="12,300 kWh" change="18.9%" isPositive={true} icon={Zap} trend={[30, 50, 70, 90, 85, 95, 100]} /> */}
          <MetricsCard
            title="Energy Consumption"
            value={data.data.totalConsumption}
            change="18.9%"
            isPositive={true}
            icon={Zap}
            trend={[30, 50, 70, 90, 85, 95, 100]}
          />
        </div>

        <div className="mt-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-sm">
                  <BarChart3 className="text-blue-600" size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Smart Usage Analytics
                  </h2>
                  <p className="text-sm text-gray-500">
                    AI-powered consumption insights
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    From:
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    max={today}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-sm text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            {/* <EnhancedChart data={filteredCharts[0] || { dataPoints: [] }} /> */}

            {/* Chart Section */}

            {/* <div className="mt-6">
  {chartData.map((chart,ind) => {
    console.log("====chart====",chart)
    const filteredChart = filterChart(chart);
    return <CurrentPowerChart key={ind} {...filteredChart} />;
  })}
</div> */}

            {/* // Then in your render: */}
            <div className="mt-6">
              {chartData.map((chart, ind) => {
                // const filteredChart = filterChart(chart);
                return <CurrentPowerChart key={ind} {...chart} />;
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AlertPanel />
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-0 gap-2 bg-white px-4 py-4 rounded-t-md">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-sm">
                  <Zap className="text-orange-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Meters Overview
                  </h3>
                  <p className="text-sm text-gray-500">
                    {meters.length} meters
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[400px] overflow-y-auto">
              <MeterList meters={meters} />
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-200 p-6 hover:shadow-md transition-shadow mt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Gauge className="text-green-600" size={24} />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-700 font-medium">
                    ONLINE
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Smart Meters
              </h3>
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-2xl font-bold text-green-600">
                  {totalActive}
                </span>
                <span className="text-lg text-gray-500">/{total}</span>
                <span className="text-sm text-green-600">({percentage}%)</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-3 mb-2">
                <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: "83%" }}
                ></div>
              </div>
              {/* <p className="text-sm text-gray-600">
                5 meters scheduled for maintenance
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
