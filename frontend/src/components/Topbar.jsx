// import React from "react";
// import { Search, Bell, Mail, Globe, Menu, Expand, ChevronDown, UserCircle } from "lucide-react";

// const Topbar = ({ onToggleSidebar }) => {
//   return (
//     <div className="h-16 flex justify-between items-center px-4 md:px-6 py-2 bg-white shadow-sm border-b border-gray-100 w-full">
//       {/* Left Section */}
//       <div className="flex items-center space-x-4">
//         {/* Hamburger */}
//         <button onClick={onToggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
//           <Menu size={20} className="text-gray-600" />
//         </button>

//         {/* Breadcrumb */}
//         <div className="hidden sm:flex items-center text-sm text-gray-600 space-x-1">
//           <span>Dashboard</span>
//           <span>/</span>
//           <span className="font-medium text-gray-900">Overview</span>
//         </div>

//         {/* Search */}
//         <div className="relative hidden sm:block">
//           <input
//             type="text"
//             className="w-60 p-2 pl-10 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
//             placeholder="Search..."
//           />
//           <Search className="absolute top-2.5 left-3 text-gray-400" size={16} />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-3">
//         <button className="p-2 rounded-lg hover:bg-gray-100">
//           <Globe size={18} className="text-gray-500" />
//         </button>
//         <button className="p-2 rounded-lg hover:bg-gray-100">
//           <Expand size={18} className="text-gray-500" />
//         </button>
//         <button className="relative p-2 rounded-lg hover:bg-gray-100">
//           <Mail size={18} className="text-gray-500" />
//           <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</span>
//         </button>
//         <button className="relative p-2 rounded-lg hover:bg-gray-100">
//           <Bell size={18} className="text-gray-500" />
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
//         </button>

//         {/* User Profile */}
//         <div className="flex items-center space-x-2 cursor-pointer">
//           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">AA</div>
//           <div className="hidden md:block text-sm text-gray-700">
//             <p className="font-semibold">Afraz Ali</p>
//             <div className="flex items-center gap-1 text-xs text-gray-500">
//               <span className="font-medium">Sky Solutions</span>
//             </div>
//           </div>
//           <ChevronDown size={14} className="text-gray-400" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

// import React, { useState } from "react";
// import {
//   Search, Bell, Mail, Globe, Menu, Expand, ChevronDown, UserCircle
// } from "lucide-react";

// const Topbar = ({ onToggleSidebar }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [notifications] = useState(3);

//   return (
//     <div className="w-full flex justify-between items-center px-4 sm:px-6 py-3 bg-white shadow-sm border-b border-gray-100">
//       {/* Left Section */}
//       <div className="flex items-center space-x-4 sm:space-x-6">
//         {/* Sidebar Toggle for Mobile */}
//         <button className="lg:hidden p-2 rounded-md hover:bg-gray-100" onClick={onToggleSidebar}>
//           <Menu className="text-gray-600" size={20} />
//         </button>

//         {/* Breadcrumb */}
//         <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
//           <span>Dashboard</span>
//           <span>/</span>
//           <span className="text-gray-900 font-medium">Overview</span>
//         </div>

//         {/* Search Bar */}
//         <div className="hidden xs:block relative">
//           <input
//             type="text"
//             className="w-44 sm:w-72 p-2.5 pl-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-50 focus:bg-white"
//             placeholder="Search anything..."
//           />
//           <Search className="absolute top-3.5 left-3.5 text-gray-400" size={16} />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-2 sm:space-x-4">
//         {/* Quick Actions */}
//         <div className="hidden xs:flex items-center space-x-2 sm:space-x-3">
//           <button className="p-2 rounded-lg hover:bg-gray-100">
//             <Globe className="text-gray-500" size={18} />
//           </button>
//           <button className="p-2 rounded-lg hover:bg-gray-100">
//             <Expand className="text-gray-500" size={18} />
//           </button>
//           <button className="p-2 rounded-lg hover:bg-gray-100 relative">
//             <Mail className="text-gray-500" size={18} />
//             <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
//           </button>
//           <button className="p-2 rounded-lg hover:bg-gray-100 relative">
//             <Bell className="text-gray-500" size={18} />
//             {notifications > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 {notifications}
//               </span>
//             )}
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="hidden sm:block h-6 w-px bg-gray-200"></div>

//         {/* User Dropdown */}
//         <div className="relative">
//           <div
//             className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
//             onClick={() => setShowDropdown(!showDropdown)}
//           >
//             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
//               <span className="text-white text-sm font-medium">AA</span>
//             </div>
//             <div className="hidden md:block">
//               <p className="text-sm font-semibold text-gray-800">Afraz Ali</p>
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-cyan-500 rounded flex items-center justify-center">
//                   <span className="text-white text-[10px] font-bold">SS</span>
//                 </div>
//                 <span className="text-xs text-gray-500">Sky Solutions</span>
//               </div>
//             </div>
//             <ChevronDown
//               className={`text-gray-400 transition-transform ${showDropdown ? "rotate-180" : ""}`}
//               size={16}
//             />
//           </div>

//           {showDropdown && (
//             <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
//               <div className="px-4 py-3 border-b border-gray-100">
//                 <p className="text-sm font-semibold text-gray-800">Afraz Ali</p>
//                 <p className="text-xs text-gray-500">Administrator</p>
//                 <div className="flex items-center space-x-2 mt-1">
//                   <div className="w-3 h-3 bg-cyan-500 rounded flex items-center justify-center">
//                     <span className="text-white text-[10px] font-bold">SS</span>
//                   </div>
//                   <span className="text-xs text-gray-500">Sky Solutions</span>
//                 </div>
//               </div>
//               <div className="py-2">
//                 <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                   <UserCircle className="mr-3 text-gray-400" size={16} />
//                   My Profile
//                 </a>
//                 <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                   <Bell className="mr-3 text-gray-400" size={16} />
//                   Notifications
//                 </a>
//                 <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                   <Mail className="mr-3 text-gray-400" size={16} />
//                   Messages
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import React, { useState } from "react";
import {
  Search,
  Bell,
  Mail,
  Globe,
  Menu,
  Expand,
  ChevronDown,
  UserCircle,
} from "lucide-react";

const Topbar = ({ onToggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications] = useState(3);

  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-6 py-3 bg-white  border-gray-100">
      {/* Left Section */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Sidebar Toggle for Mobile */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={onToggleSidebar}
        >
          <Menu className="text-gray-600" size={20} />
        </button>

        {/* Breadcrumb */}
        {/* <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">Overview</span>
        </div> */}

        {/* Search Bar - hidden on mobile
        <div className="hidden sm:block relative">
          <input
            type="text"
            className="w-44 sm:w-12 p-2.5 pl-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-50 focus:bg-white"
            placeholder="Search anything..."
          />
          <Search className="absolute top-3.5 left-3.5 text-gray-400" size={16} />
        </div> */}

        <div className="relative w-full max-w-xs">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-50 focus:bg-white text-sm sm:text-base"
            placeholder="Search..."
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Quick Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Globe and Expand only on sm and up */}
          {/* <button className="hidden sm:flex p-2 rounded-lg hover:bg-gray-100">
            <Globe className="text-gray-500" size={18} />
          </button>
          <button className="hidden sm:flex p-2 rounded-lg hover:bg-gray-100">
            <Expand className="text-gray-500" size={18} />
          </button> */}

          {/* Mail - always visible */}
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Mail className="text-gray-500" size={18} />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Bell - always visible */}
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell className="text-gray-500" size={18} />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
        </div>

        {/* Divider */}
        <div className="hidden sm:block h-6 w-px bg-gray-200"></div>

        {/* User Dropdown */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-medium">AA</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-800">Afraz Ali</p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyan-500 rounded flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">SS</span>
                </div>
                <span className="text-xs text-gray-500">Sky Solutions</span>
              </div>
            </div>
            <ChevronDown
              className={`text-gray-400 transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
              size={16}
            />
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-800">Afraz Ali</p>
                <p className="text-xs text-gray-500">Administrator</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-3 h-3 bg-cyan-500 rounded flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">SS</span>
                  </div>
                  <span className="text-xs text-gray-500">Sky Solutions</span>
                </div>
              </div>
              <div className="py-2">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <UserCircle className="mr-3 text-gray-400" size={16} />
                  My Profile
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <Bell className="mr-3 text-gray-400" size={16} />
                  Notifications
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <Mail className="mr-3 text-gray-400" size={16} />
                  Messages
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

// import React, { useState } from "react";
// import {
//   Search, Bell, User, ChevronDown, Mail, Globe, Menu,
//   Expand, UserCircle
// } from "lucide-react";

// const Topbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [notifications, setNotifications] = useState(3);

//   return (
//     <div className="w-full flex justify-between items-center px-4 sm:px-6 py-3 bg-white shadow-sm border-b border-gray-100">
//       {/* Left Section */}
//       <div className="flex items-center space-x-4 sm:space-x-6 w-full sm:w-auto">
//         {/* Mobile Menu Toggle */}
//         {/* <button className="lg:hidden p-2 rounded-lg hover:bg-gray-50">
//           <Menu className="text-gray-500" size={20} />
//         </button> */}

//         {/* Breadcrumb - hide on small screens */}
//         <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
//           <span>Dashboard</span>
//           <span>/</span>
//           <span className="text-gray-900 font-medium">Overview</span>
//         </div>

//         {/* Search - hide on very small screens */}
//         <div className="hidden xs:block relative">
//           <input
//             type="text"
//             className="w-44 sm:w-72 p-2.5 pl-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-50 focus:bg-white"
//             placeholder="Search..."
//           />
//           <Search className="absolute top-3.5 left-3.5 text-gray-400" size={16} />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-2 sm:space-x-4">
//         {/* Quick Actions */}
//         <div className="hidden xs:flex items-center space-x-2 sm:space-x-3">
//           <button className="p-2 rounded-lg hover:bg-gray-50">
//             <Globe className="text-gray-500" size={18} />
//           </button>
//           <button className="p-2 rounded-lg hover:bg-gray-50">
//             <Expand className="text-gray-500" size={18} />
//           </button>
//           <button className="p-2 rounded-lg hover:bg-gray-50 relative">
//             <Mail className="text-gray-500" size={18} />
//             <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//               2
//             </span>
//           </button>
//           <button className="p-2 rounded-lg hover:bg-gray-50 relative">
//             <Bell className="text-gray-500" size={18} />
//             {notifications > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 {notifications}
//               </span>
//             )}
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="hidden sm:block h-6 w-px bg-gray-200"></div>

//         {/* User Dropdown */}
//         <div className="relative">
//           <div
//             className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
//             onClick={() => setShowDropdown(!showDropdown)}
//           >
//             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
//               <span className="text-white text-sm font-medium">AA</span>
//             </div>
//             <div className="hidden md:block">
//               <p className="text-sm font-semibold text-gray-800">Afraz Ali</p>
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-cyan-500 rounded flex items-center justify-center">
//                   <span className="text-white text-[10px] font-bold">SS</span>
//                 </div>
//                 <span className="text-xs text-gray-500">Sky Solutions</span>
//               </div>
//             </div>
//             <ChevronDown className={`text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} size={16} />
//           </div>

//           {showDropdown && (
//             <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
//               <div className="px-4 py-3 border-b border-gray-100">
//                 <p className="text-sm font-semibold text-gray-800">Afraz Ali</p>
//                 <p className="text-xs text-gray-500">Administrator</p>
//                 <div className="flex items-center space-x-2 mt-1">
//                   <div className="w-3 h-3 bg-cyan-500 rounded flex items-center justify-center">
//                     <span className="text-white text-[10px] font-bold">SS</span>
//                   </div>
//                   <span className="text-xs text-gray-500">Sky Solutions</span>
//                 </div>
//               </div>
//               <div className="py-2">
//                 <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                   <UserCircle className="mr-3 text-gray-400" size={16} />
//                   My Profile
//                 </a>
//                 <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                   <Bell className="mr-3 text-gray-400" size={16} />
//                   Notifications
//                 </a>
//                 <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                   <Mail className="mr-3 text-gray-400" size={16} />
//                   Messages
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;
