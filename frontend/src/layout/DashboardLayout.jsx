// import React from "react";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import { Outlet } from "react-router-dom";
// import Footer from "../pages/Footer";

// function DashboardLayout() {
//   return (
//     <div className="w-screen h-screen bg-blue-200/20 flex space-around">
//       <div className="w-[20%] h-screen ">
//         <Sidebar />
//       </div>
//       <div className="w-[85%] flex-col h-full">
//         <div className="h-[10%]">
//           <Topbar />
//         </div>
//         <div className="h-[90%] overflow-y-scroll">
//           <Outlet />
//         </div>
//       </div>
//       <div>
//         {/* <Footer /> */}
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;


import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-blue-200/20 flex overflow-hidden relative">
      <div className="lg:block hidden w-[20%] h-full">
        <Sidebar />
      </div>
      
      {/* Sidebar Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
      <div
        className={`fixed top-0 left-0 z-40 w-72 h-full transform transition-transform duration-300 ease-in-out bg-white shadow-xl border-r border-gray-100
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full w-[80%]">
        <div className="h-[10%]">
          <Topbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        </div>

        <div className="h-[90%] overflow-y-auto">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
}

export default DashboardLayout;
