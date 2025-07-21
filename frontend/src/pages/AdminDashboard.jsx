

// import React, { useEffect, useState, useMemo, useCallback } from 'react';
// import { 
//   Gauge, 
//   TrendingUp, 
//   Download, 
//   AlertTriangle, 
//   Zap, 
//   Bell, 
//   Calendar,
//   Activity,
//   Users,
//   DollarSign,
//   BarChart3,
//   UserPlus,
//   Search,
//   Settings,
//   Filter,
//   RefreshCw,
//   ChevronDown,
//   Eye,
//   TrendingDown,
//   Clock,
//   CheckCircle,
//   XCircle,
//   AlertCircle
// } from "lucide-react";

// // Mock data for demo purposes
// const mockCharts = [
//   {
//     id: 1,
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     dataPoints: [65, 59, 80, 81, 56, 55]
//   }
// ];

// const Dashboard = () => {
//   // State management
//   const [startDate, setStartDate] = useState("2025-04-01");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedFilter, setSelectedFilter] = useState("all");
//   const [refreshing, setRefreshing] = useState(false);
//   const [notifications, setNotifications] = useState(23);
//   const [alerts, setAlerts] = useState([
//     { id: 1, type: 'critical', message: 'Meter #245 offline', time: '2 min ago' },
//     { id: 2, type: 'warning', message: 'High usage detected', time: '5 min ago' },
//     { id: 3, type: 'info', message: 'System update available', time: '1 hour ago' }
//   ]);

//   const today = new Date().toISOString().split("T")[0];

//   // Smart filtering and memoization
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

//   // Smart refresh functionality
//   const handleRefresh = useCallback(async () => {
//     setRefreshing(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setRefreshing(false);
//   }, []);

//   // Smart notification management
//   const handleNotificationRead = useCallback(() => {
//     setNotifications(prev => Math.max(0, prev - 1));
//   }, []);

//   // Smart alert dismissal
//   const dismissAlert = useCallback((alertId) => {
//     setAlerts(prev => prev.filter(alert => alert.id !== alertId));
//   }, []);

//   // Enhanced MetricsCard component
//   const MetricsCard = ({ title, value, change, isPositive, icon: Icon, trend, className = "" }) => (
//     <div className={`bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 ${className}`}>
//       <div className="flex items-center justify-between mb-4">
//         <div className={`p-3 rounded-xl ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
//           <Icon className={`${isPositive ? 'text-green-600' : 'text-red-600'}`} size={24} />
//         </div>
//         <div className="flex items-center space-x-1">
//           {isPositive ? <TrendingUp size={16} className="text-green-600" /> : <TrendingDown size={16} className="text-red-600" />}
//           <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
//             {change}
//           </span>
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

//   // Enhanced Chart component
//   const EnhancedChart = ({ data }) => (
//     <div className="w-full h-80 bg-gray-50 rounded-sm flex items-center justify-center">
//       <div className="text-center">
//         <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
//         <p className="text-gray-600">Interactive Chart Placeholder</p>
//         <p className="text-sm text-gray-500 mt-2">Data points: {data.dataPoints?.length || 0}</p>
//       </div>
//     </div>
//   );

//   // Smart Alert Panel
//   const AlertPanel = () => (
//     <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center space-x-3">
//           <div className="p-2 bg-orange-100 rounded-sm">
//             <AlertTriangle className="text-orange-600" size={20} />
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Smart Alerts</h3>
//             <p className="text-sm text-gray-500">{alerts.length} active alerts</p>
//           </div>
//         </div>
//         <button 
//           onClick={() => setAlerts([])}
//           className="text-sm text-blue-600 hover:text-blue-800"
//         >
//           Clear All
//         </button>
//       </div>
//       <div className="space-y-3">
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
//             <button 
//               onClick={() => dismissAlert(alert.id)}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XCircle size={16} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       {/* Smart Header Section */}
//       <div className="bg-white shadow-sm border-b border-gray-200">
//         <div className="px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
//               <p className="text-xs text-gray-500"><span className='font-bold'>Hello {"user"}</span> Welcome to Real-time energy management system</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <div className="flex items-center space-x-2 text-sm text-gray-600">
//                 <Clock size={16} />
//                 <span>Last updated: {new Date().toLocaleTimeString()}</span>
//               </div>
//               <button 
//                 onClick={handleRefresh}
//                 disabled={refreshing}
//                 className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
//               >
//                 <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
//                 {refreshing ? 'Refreshing...' : 'Refresh'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Smart Revenue Banner */}
//       <div className="mx-6 mt-6 mb-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
//         <div className="flex justify-between items-center p-6">
//           <div className="flex items-center space-x-6">
//             <div className="p-4 bg-emerald-100 rounded-2xl">
//               <DollarSign className="text-emerald-600" size={32} />
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold text-emerald-800 mb-1">Total Revenue</h2>
//               <div className="flex items-baseline space-x-2">
//                 <span className="text-3xl font-bold text-emerald-900">$95,000</span>
//                 <span className="text-sm text-emerald-600 flex items-center">
//                   <TrendingUp size={14} className="mr-1" />
//                   +12.5% from last month
//                 </span>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex items-center space-x-6">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-emerald-900">1,247</div>
//               <div className="text-sm text-emerald-600">Active Users</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-emerald-900">25/30</div>
//               <div className="text-sm text-emerald-600">Active Meters</div>
//             </div>
//             <button className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-200 hover:bg-white transition-colors">
//               <Download className="text-emerald-600 mr-2" size={18} />
//               <span className="text-emerald-700 font-medium">Export</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Smart Dashboard Grid */}
//       <div className="px-6 pb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
//           {/* Enhanced Metrics Cards */}
//           <MetricsCard
//             title="Total Users"
//             value="44,071"
//             change="30.8%"
//             isPositive={true}
//             icon={Users}
//             trend={[20, 40, 60, 80, 100, 85, 90]}
//           />
          
//           <MetricsCard
//             title="Faulty Meters"
//             value="8"
//             change="2.3%"
//             isPositive={false}
//             icon={AlertTriangle}
//             trend={[10, 15, 8, 12, 20, 18, 8]}
//           />
          
//           <MetricsCard
//             title="Next Payment"
//             value="$2,829"
//             change="-1.43%"
//             isPositive={false}
//             icon={DollarSign}
//             trend={[80, 70, 85, 75, 90, 85, 75]}
//           />
          
//           <MetricsCard
//             title="Energy Consumption"
//             value="12,300 kWh"
//             change="18.9%"
//             isPositive={true}
//             icon={Zap}
//             trend={[30, 50, 70, 90, 85, 95, 100]}
//           />

//           {/* Enhanced Chart Section */}
//           <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
//               <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center space-x-3">
//                   <div className="p-2 bg-blue-100 rounded-sm">
//                     <BarChart3 className="text-blue-600" size={24} />
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-bold text-gray-800">Smart Usage Analytics</h2>
//                     <p className="text-sm text-gray-500">AI-powered consumption insights</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center space-x-4">
//                     <div className="flex items-center space-x-2">
//                       <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//                       <span className="text-sm text-gray-600">Current</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                       <span className="text-sm text-gray-600">Previous</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <label className="text-sm font-medium text-gray-700">From:</label>
//                     <input
//                       type="date"
//                       value={startDate}
//                       max={today}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       className="px-3 py-2 border border-gray-300 rounded-sm text-sm focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <EnhancedChart data={filteredCharts[0] || { dataPoints: [] }} />
//             </div>
//           </div>

//           {/* Smart Alert Panel */}
//           <div className="lg:col-span-2">
//             <AlertPanel />
//           </div>
          
//           {/* Enhanced Status Cards */}
//           <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-200 p-6 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-4">
//               <div className="p-3 bg-green-100 rounded-xl">
//                 <Gauge className="text-green-600" size={24} />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-xs text-green-700 font-medium">ONLINE</span>
//               </div>
//             </div>
//             <div>
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
//           </div>

//           <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-4">
//               <div className="p-3 bg-blue-100 rounded-xl">
//                 <Activity className="text-blue-600" size={24} />
//               </div>
//               <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
//                 EXCELLENT
//               </div>
//             </div>
//             <div>
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

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  Gauge, TrendingUp, Download, AlertTriangle, Zap, Bell, Calendar,
  Activity, Users, DollarSign, BarChart3, UserPlus, Search, Settings,
  Filter, RefreshCw, ChevronDown, Eye, TrendingDown, Clock, CheckCircle,
  XCircle, AlertCircle
} from "lucide-react";


// Mock data for demo purposes
const mockCharts = [
  {
    id: 1,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    dataPoints: [65, 59, 80, 81, 56, 55]
  }
];

import { useSelector, useDispatch } from "react-redux";

import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
import Header from "../components/header/Header";

const Dashboard = () => {
  const [startDate, setStartDate] = useState("2025-04-01");
  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState(23);
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'critical', message: 'Meter #245 offline', time: '2 min ago' },
    { id: 2, type: 'warning', message: 'High usage detected', time: '5 min ago' },
    { id: 3, type: 'info', message: 'System update available', time: '1 hour ago' }
  ]);

  const today = new Date().toISOString().split("T")[0];

   const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setHeaderTitle("Admin Dashboard"));
      dispatch(setBreadcrumbs([{ label: "Admin Dashboard" }]));
    }, []);

   
  const filteredCharts = useMemo(() => {
    return mockCharts.map(chart => {
      const from = new Date(startDate);
      const to = new Date();
      const filteredLabels = [];
      const filteredDataPoints = [];

      chart.labels.forEach((label, i) => {
        const fakeDate = new Date(`2025-${(i + 1).toString().padStart(2, "0")}-01`);
        if (fakeDate >= from && fakeDate <= to) {
          filteredLabels.push(label);
          filteredDataPoints.push(chart.dataPoints[i]);
        }
      });

      return {
        ...chart,
        labels: filteredLabels,
        dataPoints: filteredDataPoints,
      };
    });
  }, [startDate]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  }, []);

  const dismissAlert = useCallback((alertId) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  }, []);

  const MetricsCard = ({ title, value, change, isPositive, icon: Icon, trend }) => (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 w-full">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
          <Icon className={`${isPositive ? 'text-green-600' : 'text-red-600'}`} size={24} />
        </div>
        <div className="flex items-center space-x-1">
          {isPositive ? <TrendingUp size={16} className="text-green-600" /> : <TrendingDown size={16} className="text-red-600" />}
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>{change}</span>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {trend && (
          <div className="mt-2 h-12 bg-gray-50 rounded-sm flex items-end justify-between px-2 py-1">
            {trend.map((point, index) => (
              <div
                key={index}
                className={`w-2 rounded-t ${isPositive ? 'bg-green-400' : 'bg-red-400'}`}
                style={{ height: `${point}%` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const EnhancedChart = ({ data }) => (
    <div className="w-full min-h-[200px] md:min-h-[300px] bg-gray-50 rounded-sm flex items-center justify-center">
      <div className="text-center">
        <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
        <p className="text-gray-600">Interactive Chart Placeholder</p>
        <p className="text-sm text-gray-500 mt-2">Data points: {data.dataPoints?.length || 0}</p>
      </div>
    </div>
  );

  const AlertPanel = () => (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-100 rounded-sm">
            <AlertTriangle className="text-orange-600" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Smart Alerts</h3>
            <p className="text-sm text-gray-500">{alerts.length} active alerts</p>
          </div>
        </div>
        <button onClick={() => setAlerts([])} className="text-sm text-blue-600 hover:text-blue-800">
          Clear All
        </button>
      </div>
      <div className="space-y-3 max-h-[300px] overflow-y-auto">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-sm">
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${
                alert.type === 'critical' ? 'bg-red-500' :
                alert.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
              }`} />
              <div>
                <div className="text-sm font-medium text-gray-900">{alert.message}</div>
                <div className="text-xs text-gray-500">{alert.time}</div>
              </div>
            </div>
            <button onClick={() => dismissAlert(alert.id)} className="text-gray-400 hover:text-gray-600">
              <XCircle size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-blue-200/20 min-h-screen">
    <Header/>
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
            <p className="text-xs text-gray-500"><span className='font-bold'>Hello {"user"}</span> Welcome to Real-time energy management system</p>
          </div>
          <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
            <Clock size={16} />
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Refreshing...' : 'Refresh'}
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
              <h2 className="text-lg font-semibold text-emerald-800 mb-1">Total Revenue</h2>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-emerald-900">$95,000</span>
                <span className="text-sm text-emerald-600 flex items-center">
                  <TrendingUp size={14} className="mr-1" /> +12.5%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-between">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-900">1,247</div>
              <div className="text-sm text-emerald-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-900">25/30</div>
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
          <MetricsCard title="Total Users" value="44,071" change="30.8%" isPositive={true} icon={Users} trend={[20, 40, 60, 80, 100, 85, 90]} />
          <MetricsCard title="Faulty Meters" value="8" change="2.3%" isPositive={false} icon={AlertTriangle} trend={[10, 15, 8, 12, 20, 18, 8]} />
          <MetricsCard title="Next Payment" value="$2,829" change="-1.43%" isPositive={false} icon={DollarSign} trend={[80, 70, 85, 75, 90, 85, 75]} />
          <MetricsCard title="Energy Consumption" value="12,300 kWh" change="18.9%" isPositive={true} icon={Zap} trend={[30, 50, 70, 90, 85, 95, 100]} />
        </div>

        <div className="mt-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-sm">
                  <BarChart3 className="text-blue-600" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Smart Usage Analytics</h2>
                  <p className="text-sm text-gray-500">AI-powered consumption insights</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">From:</label>
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
            <EnhancedChart data={filteredCharts[0] || { dataPoints: [] }} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AlertPanel />
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Gauge className="text-green-600" size={24} />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-700 font-medium">ONLINE</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Meters</h3>
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-2xl font-bold text-green-600">25</span>
                <span className="text-lg text-gray-500">/30</span>
                <span className="text-sm text-green-600">(83%)</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-3 mb-2">
                <div className="bg-green-500 h-3 rounded-full transition-all duration-500" style={{ width: '83%' }}></div>
              </div>
              <p className="text-sm text-gray-600">5 meters scheduled for maintenance</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Activity className="text-blue-600" size={24} />
                </div>
                <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">EXCELLENT</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">System Health</h3>
              <div className="text-2xl font-bold text-blue-600 mb-3">98.5%</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Uptime</span>
                  <span className="font-medium">99.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-medium">45ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
