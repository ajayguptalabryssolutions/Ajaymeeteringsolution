// // import React from "react";
// // import { HashRouter, Route, Routes } from "react-router-dom";
// // import DashboardLayout from "./layout/DashboardLayout";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import MeterManagement from "./pages/MeterManagement";
// // import UserManagement from "./pages/UserManagement";
// // import AlertAndNotification from "./pages/AlertAndNotification";
// // import Archive from "./pages/Archive";
// // import BillingAndPayment from "./pages/BillingAndPayment";
// // import Chat from "./pages/Chat";
// // import EnergyConsumption from "./pages/EnergyConsumption";
// // import Invoice from "./pages/Invoice";
// // import Onboarding from "./pages/Onboarding";
// // import Roles from "./pages/Roles";
// // import SupportAndLogs from "./pages/SupportAndLogs";
// // import RecentAndHistoricalData from "./components/energyConsumption/RecentAndHistoricalData";
// // import UserDashboard from "./pages/UserDashboard";
// // import ProtectedRoute from "./service/ProtectedRoute";
// // import SignIn from "./pages/SignIn";

// // const App = () => {
// //   // const isAuthenticated = true;
// //   // const userRole = "Admin"
// //   return (
// //     <HashRouter>
// //       <Routes>

// //  <Route path="/" element={<SignIn />} />
// //         <Route path="/" element={<DashboardLayout />}>
// //           <Route index element={<AdminDashboard />} />
// //         </Route>

// //         {/* <Route path="/" element={<DashboardLayout />}> */}
// //         {/* <Route path="admin" element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={["Admin"]} userRoles={userRole} />}> */}
// //           {/* <Route index element={<AdminDashboard />} /> */}
// //           <Route path="userdashboard" element={<UserDashboard/>}/>

// //           <Route path="userdashboard">
// //             <Route path="" index element={<UserDashboard/>}/>
// //             <Route path="recenthistoricaldata" element={<RecentAndHistoricalData/>}/>
// //           </Route>
// //           {/* </Route> */}
// //           <Route path="metermanagement" element={<MeterManagement />} />
// //           <Route path="usermanagement" >
// //             <Route index element={<UserManagement />}/>
// //             <Route path="userDashboard/:userId" element={<UserDashboard/>}/>
// //           </Route>
// //           <Route
// //             path="alertandnotification"
// //             element={<AlertAndNotification />}
// //           />
// //           <Route path="archive" element={<Archive />} />
// //           <Route path="billingandpayment" element={<BillingAndPayment />} />
// //           <Route path="chat" element={<Chat />} />

// //           <Route path="energyConsumption">
// //             <Route path="" index element={<EnergyConsumption />}/>
// //             <Route path="recenthistoricaldata" element={<RecentAndHistoricalData />}/>
// //           </Route>

// //           <Route path="invoice" element={<Invoice />} />
// //           <Route path="onboarding" element={<Onboarding />} />
// //           <Route path="roles" element={<Roles />} />
// //           <Route path="supportandlogs" element={<SupportAndLogs />} />
// //         </Route>

// //       </Routes>

// //     </HashRouter>
// //   );
// // };

// // export default App;

// // import React from "react";
// // import { HashRouter, Route, Routes } from "react-router-dom";
// // import DashboardLayout from "./layout/DashboardLayout";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import MeterManagement from "./pages/MeterManagement";
// // import UserManagement from "./pages/UserManagement";
// // import AlertAndNotification from "./pages/AlertAndNotification";
// // import Archive from "./pages/Archive";
// // import BillingAndPayment from "./pages/BillingAndPayment";
// // import Chat from "./pages/Chat";
// // import EnergyConsumption from "./pages/EnergyConsumption";
// // import Invoice from "./pages/Invoice";
// // import Onboarding from "./pages/Onboarding";
// // import Roles from "./pages/Roles";
// // import SupportAndLogs from "./pages/SupportAndLogs";
// // import RecentAndHistoricalData from "./components/energyConsumption/RecentAndHistoricalData";
// // import UserDashboard from "./pages/UserDashboard";
// // import LogIn from "./pages/LogIn";

// // // import ProtectedRoute from "./service/ProtectedRoute"; // Optional for later use

// // const App = () => {
// //   // const isAuthenticated = true;
// //   // const userRole = "Admin"

// //   return (
// //     <HashRouter>
// //       <Routes>
// //         {/* Public Routes */}
// //         <Route path="/" element={<LogIn/>} />

// //         {/* Authenticated Routes */}
// //         <Route path="/" element={<DashboardLayout />}>
// //           {/* Default to AdminDashboard */}
// //           <Route index element={<AdminDashboard />} />

// //           <Route path="userdashboard">
// //             <Route index element={<UserDashboard />} />
// //             <Route path="recenthistoricaldata" element={<RecentAndHistoricalData />} />
// //           </Route>

// //           <Route path="metermanagement" element={<MeterManagement />} />

// //           <Route path="usermanagement">
// //             <Route index element={<UserManagement />} />
// //             <Route path="userDashboard/:userId" element={<UserDashboard />} />
// //           </Route>

// //           <Route path="alertandnotification" element={<AlertAndNotification />} />
// //           <Route path="archive" element={<Archive />} />
// //           <Route path="billingandpayment" element={<BillingAndPayment />} />
// //           <Route path="chat" element={<Chat />} />

// //           <Route path="energyConsumption">
// //             <Route index element={<EnergyConsumption />} />
// //             <Route path="recenthistoricaldata" element={<RecentAndHistoricalData />} />
// //           </Route>

// //           <Route path="invoice" element={<Invoice />} />
// //           <Route path="onboarding" element={<Onboarding />} />
// //           <Route path="roles" element={<Roles />} />
// //           <Route path="supportandlogs" element={<SupportAndLogs />} />
// //         </Route>
// //       </Routes>
// //     </HashRouter>
// //   );
// // };

// // export default App;

// ////////////////////////////////////////

// // import React, { useState } from "react";
// // import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// // import DashboardLayout from "./layout/DashboardLayout";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import MeterManagement from "./pages/MeterManagement";
// // import UserManagement from "./pages/UserManagement";
// // import AlertAndNotification from "./pages/AlertAndNotification";
// // import BillingAndPayment from "./pages/BillingAndPayment";
// // import Chat from "./pages/Chat";
// // import EnergyConsumption from "./pages/EnergyConsumption";
// // import Invoice from "./pages/Invoice";
// // import Onboarding from "./pages/Onboarding";
// // import Roles from "./pages/Roles";
// // import SupportAndLogs from "./pages/SupportAndLogs";
// // import RecentAndHistoricalData from "./components/energyConsumption/RecentAndHistoricalData";
// // import UserDashboard from "./pages/UserDashboard";
// // import SignIn from "./pages/LogIn";
// // import SignUpForm from "./components/user/SignUpForm";
// // import PrivateRoute from "./service/ProtectedRoute";
// // import Report from './pages/Report'
// // import Archive from './pages/Archive'

// // const App = () => {
// //   // const token = localStorage.getItem("token");
// //   const [token] = useState(() => localStorage.getItem("token"));

// //   return (
// //     <HashRouter>
// //       <Routes>
// //         {/* Public Routes */}
// //         <Route
// //           path="/login"
// //           element={!token ? <SignIn /> : <Navigate to="/" />}
// //         />
// //         <Route path="/customer-register" element={<SignUpForm />} />

// //         {/* Private Routes */}

// //         <Route element={<PrivateRoute />}>
// //           <Route path="/" element={<Navigate to="/dashboard" />} />
// //           <Route element={<DashboardLayout />}>
// //             <Route path="/dashboard" element={<AdminDashboard />} />
// //             <Route path="/userdashboard" element={<UserDashboard />} />
// //             <Route
// //               path="/userdashboard/recenthistoricaldata"
// //               element={<RecentAndHistoricalData />}
// //             />
// //             <Route path="/metermanagement" element={<MeterManagement />} />
// //             <Route path="/usermanagement" element={<UserManagement />} />
// //             <Route
// //               path="/usermanagement/userDashboard/:userId"
// //               element={<UserDashboard />}
// //             />
// //             <Route
// //               path="/alertandnotification"
// //               element={<AlertAndNotification />}
// //             />
// //             <Route path="/archive" element={<Archive />} />
// //             <Route path="/billingandpayment" element={<BillingAndPayment />} />
// //             <Route path="/chat" element={<Chat />} />
// //             <Route path="/energyConsumption" element={<EnergyConsumption />} />
// //             <Route
// //               path="/energyConsumption/recenthistoricaldata"
// //               element={<RecentAndHistoricalData />}
// //             />
// //             <Route path="/invoice" element={<Invoice />} />
// //             {/* <Route path="/onboarding" element={<Onboarding />} /> */}
// //             <Route path="/roles" element={<Roles />} />
// //             <Route path="/supportandlogs" element={<SupportAndLogs />} />
// //             <Route path = '/report' element={<Report/>}/>

// //           </Route>
// //           <Route path="*" element={<h1>404 Not Found</h1>} />
// //         </Route>
// //       </Routes>
// //     </HashRouter>
// //   );
// // };

// // export default App;

import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import AdminDashboard from "./pages/AdminDashboard";
import MeterManagement from "./pages/MeterManagement";
import UserManagement from "./pages/UserManagement";
import AlertAndNotification from "./pages/AlertAndNotification";
import BillingAndPayment from "./pages/BillingAndPayment";
import Chat from "./pages/Chat";
import EnergyConsumption from "./pages/EnergyConsumption";
import Invoice from "./pages/Invoice";
import Roles from "./pages/Roles";
import SupportAndLogs from "./pages/SupportAndLogs";
import RecentAndHistoricalData from "./components/energyConsumption/RecentAndHistoricalData";
import UserDashboard from "./pages/UserDashboard";
import SignIn from "./pages/LogIn";
import SignUpForm from "./components/user/SignUpForm";
import PrivateRoute from "./service/ProtectedRoute";
import Report from "./pages/Report";
import Archive from "./pages/Archive";
import RechargeHistory from "./components/userDashboard/RechargeHistory";
import AdminUserList from "./components/adminDashboard/AdminUserList";
import SuperAdminPanel from "./pages/AdminPanel";
import SuperAdminUserHistory from "./components/superAdmin/DailyMeterDataUsage";
import SuperAdminRechargeHistory from "./components/superAdmin/SuperAdminRechargeHistory";
import DailyMeterDataUsageHistory from "./components/superAdmin/DailyMeterDataUsage";
import AdminPanel from "./pages/AdminPanel";
import AdminRechargeHistory from "./components/superAdmin/SuperAdminRechargeHistory";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/customer-register" element={<SignUpForm />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/userlist" element={<AdminUserList />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/meterdata/:meterId" element={<DailyMeterDataUsageHistory />} />
            <Route path="admin/rechargehistory/:meterid" element = {<AdminRechargeHistory/>}/>

            {/* <Route path="/userdashboard">
            <Route path="" index element={<UserDashboard />} />
             <Route path="rechargehistory/:meterId" element={<RechargeHistory />} />
          <Route path="recenthistoricaldata" element={<RecentAndHistoricalData />} />
         
        </Route> */}
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route
              path="/userdashboard/rechargehistory"
              element={<RechargeHistory />}
            />
            <Route
              path="/userdashboard/recenthistoricaldata"
              element={<RecentAndHistoricalData />}
            />

            <Route path="/metermanagement" element={<MeterManagement />} />
            <Route path="/usermanagement" element={<UserManagement />} />
            <Route
              path="/usermanagement/userDashboard/:userId"
              element={<UserDashboard />}
            />
            <Route
              path="/alertandnotification"
              element={<AlertAndNotification />}
            />
            <Route path="/archive" element={<Archive />} />
            <Route path="/billingandpayment" element={<BillingAndPayment />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/energyConsumption" element={<EnergyConsumption />} />

            <Route path="/invoice" element={<Invoice />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/supportandlogs" element={<SupportAndLogs />} />
            <Route path="/report" element={<Report />} />
          </Route>

          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-screen">
                <h1 className="text-3xl font-bold text-gray-700">
                  404 Page Not Found
                </h1>
              </div>
            }
          />
        </Route>
      </Routes>
      {/* <AdminDashboardUserData  /> */}
     {/* <SuperAdminUserHistory/> */}
    </HashRouter>
  );
};

export default App;

// ///////////////////////////

// // import React from "react";
// // import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// // import DashboardLayout from "./layout/DashboardLayout";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import MeterManagement from "./pages/MeterManagement";
// // import UserManagement from "./pages/UserManagement";
// // import AlertAndNotification from "./pages/AlertAndNotification";
// // import Archive from "./pages/Archive";
// // import BillingAndPayment from "./pages/BillingAndPayment";
// // import Chat from "./pages/Chat";
// // import EnergyConsumption from "./pages/EnergyConsumption";
// // import Invoice from "./pages/Invoice";
// // import Onboarding from "./pages/Onboarding";
// // import Roles from "./pages/Roles";
// // import SupportAndLogs from "./pages/SupportAndLogs";
// // import RecentAndHistoricalData from "./components/energyConsumption/RecentAndHistoricalData";
// // import UserDashboard from "./pages/UserDashboard";
// // import SignIn from "./pages/LogIn";
// // import SignUpForm from "./components/user/SignUpForm";

// // const App = () => {
// //   const token = localStorage.getItem("token");

// //   return (
// //     <HashRouter>
// //       <Routes>
// //         {/* Show login page if not logged in */}
// //         <Route
// //           path="/login"
// //           element={!token ? <SignIn /> : <Navigate to="/" />}
// //         />
// //          <Route path="/customer-register" element={<SignUpForm />} />

// //         {/* Authenticated Routes */}
// //         <Route path="/" element={<DashboardLayout />}>
// //           <Route index element={<AdminDashboard />} />

// //           <Route path="userdashboard">
// //             <Route index element={<UserDashboard />} />
// //             <Route
// //               path="recenthistoricaldata"
// //               element={<RecentAndHistoricalData />}
// //             />
// //           </Route>

// //           <Route path="metermanagement" element={<MeterManagement />} />

// //           <Route path="usermanagement">
// //             <Route index element={<UserManagement />} />
// //             <Route
// //               path="userDashboard/:userId"
// //               element={<UserDashboard />}
// //             />
// //           </Route>

// //           <Route
// //             path="alertandnotification"
// //             element={<AlertAndNotification />}
// //           />
// //           <Route path="archive" element={<Archive />} />
// //           <Route path="billingandpayment" element={<BillingAndPayment />} />
// //           <Route path="chat" element={<Chat />} />

// //           <Route path="energyConsumption">
// //             <Route index element={<EnergyConsumption />} />
// //             <Route
// //               path="recenthistoricaldata"
// //               element={<RecentAndHistoricalData />}
// //             />
// //           </Route>

// //           <Route path="invoice" element={<Invoice />} />
// //           <Route path="onboarding" element={<Onboarding />} />
// //           <Route path="roles" element={<Roles />} />
// //           <Route path="supportandlogs" element={<SupportAndLogs />} />
// //         </Route>
// //       </Routes>
// //     </HashRouter>
// //   );
// // };

// // export default App;

// ////////////////////////////////////////////////

// // import React, { useState } from "react";
// // import { HashRouter, Routes, Route } from "react-router-dom";
// // import DashboardLayout from "./layout/DashboardLayout";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import ManagerDashboard from "./pages/ManagerDashboard";
// // import UserDashboard from "./pages/UserDashboard";
// // import MeterManagement from "./pages/MeterManagement";
// // import UserManagement from "./pages/UserManagement";
// // import AlertAndNotification from "./pages/AlertAndNotification";
// // import BillingAndPayment from "./pages/BillingAndPayment";
// // import Chat from "./pages/Chat";
// // import Roles from "./pages/Roles";
// // import ProtectedRoute from "./service/ProtectedRoute";
// // import Sidebar from "./components/Sidebar";

// // const App = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(true); // Change based on auth state
// //   const [userRole, setUserRole] = useState("Admin"); // Change based on login

// //   return (
// //     <HashRouter>
// //       <div className="flex">
// //         {/* Sidebar - Only show if authenticated */}
// //         {isAuthenticated && <Sidebar userRole={userRole} />}

// //         <div className="flex-grow p-6">
// //           <Routes>
// //             {/* Admin Routes */}
// //             <Route
// //               element={
// //                 <ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={["Admin"]} userRole={userRole} />
// //               }
// //             >
// //             <Route path="/" element={<DashboardLayout/>}>
// //               <Route path="/admin" element={<AdminDashboard />} />
// //               <Route path="/usermanagement" element={<UserManagement />} />
// //               <Route path="/roles" element={<Roles />} />
// //               <Route path="/billingandpayment" element={<BillingAndPayment />} />
// //             </Route>
// //             </Route>

// //             {/* Manager Routes */}
// //             <Route
// //               element={
// //                 <ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={["Manager"]} userRole={userRole} />
// //               }
// //             >
// //               <Route path="/manager" element={<ManagerDashboard />} />
// //               <Route path="/metermanagement" element={<MeterManagement />} />
// //             </Route>

// //             {/* User Routes */}
// //             <Route
// //               element={
// //                 <ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={["User"]} userRole={userRole} />
// //               }
// //             >
// //               <Route path="/user" element={<UserDashboard />} />
// //               <Route path="/alertandnotification" element={<AlertAndNotification />} />
// //               <Route path="/chat" element={<Chat />} />
// //             </Route>

//             {/* Default Route */}
//             // <Route path="*" element={<h1>404 Not Found</h1>} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </HashRouter>
// //   );
// // };

// // export default App;

// import React from "react";
// import { HashRouter, Route, Routes } from "react-router-dom";
// import DashboardLayout from "./layout/DashboardLayout";
// import AdminDashboard from "./pages/AdminDashboard";
// import MeterManagement from "./pages/MeterManagement";
// import UserManagement from "./pages/UserManagement";
// import AlertAndNotification from "./pages/AlertAndNotification";
// import Archive from "./pages/Archive";
// import BillingAndPayment from "./pages/BillingAndPayment";
// import Chat from "./pages/Chat";
// import EnergyConsumption from "./pages/EnergyConsumption";
// import Invoice from "./pages/Invoice";
// import Onboarding from "./pages/Onboarding";
// import Roles from "./pages/Roles";
// import SupportAndLogs from "./pages/SupportAndLogs";
// import RecentAndHistoricalData from "./components/energyConsumption/RecentAndHistoricalData";
// import UserDashboard from "./pages/UserDashboard";
// import ProtectedRoute from "./service/ProtectedRoute";
// import AdminUserList from "./components/adminDashboard/AdminUserList";
// import RechargeHistory from "./components/userDashboard/RechargeHistory";

// const App = () => {
//   // const isAuthenticated = true;
//   // const userRole = "Admin"
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<DashboardLayout />}>
//         {/* <Route path="admin" element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={["Admin"]} userRoles={userRole} />}> */}

//           <Route index element={<AdminDashboard />} />
//            <Route path="/userlist" element={<AdminUserList />} />

//           <Route path="userdashboard" element={<UserDashboard/>}/>

//           <Route path="userdashboard">
//             <Route path="" index element={<UserDashboard/>}/>
//             <Route path="recenthistoricaldata" element={<RecentAndHistoricalData/>}/>
//           </Route>
//           {/* </Route> */}
//           <Route path="metermanagement" element={<MeterManagement />} />
//           <Route path="usermanagement" >
//             <Route index element={<UserManagement />}/>
//             <Route path="userDashboard/:userId" element={<UserDashboard/>}/>
//           </Route>
//           <Route path="userdashboard/rechargehistory" element={<RechargeHistory />} />
//           <Route
//             path="alertandnotification"
//             element={<AlertAndNotification />}
//           />
//           <Route path="archive" element={<Archive />} />
//           <Route path="billingandpayment" element={<BillingAndPayment />} />
//           <Route path="chat" element={<Chat />} />

// <Route path="energyConsumption">
//   <Route path="" index element={<EnergyConsumption />}/>
//   <Route path="recenthistoricaldata" element={<RecentAndHistoricalData />}/>
// </Route>

//           <Route path="invoice" element={<Invoice />} />
//           <Route path="onboarding" element={<Onboarding />} />
//           <Route path="roles" element={<Roles />} />
//           <Route path="supportandlogs" element={<SupportAndLogs />} />
//         </Route>

//       </Routes>

//     </HashRouter>
//   );
// };

// export default App;
