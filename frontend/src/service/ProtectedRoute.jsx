// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom'

// const ProtectedRoute = ({isAuthenticated, allowedRoles, userRoles, redirectTo = "/AdminDashboard"}) => {
//     if(isAuthenticated){
//         return <Navigate to={redirectTo}/>
//     }
//     if(!isAuthenticated.includes(userRoles)){
//         return <Navigate to="/unauthorised"/>
//     }
//     return <Outlet/>
 
// }

// export default ProtectedRoute

// components/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login"  />;
};

export default PrivateRoute;





// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ isAuthenticated, allowedRoles, userRoles, redirectTo = "/login" }) => {
//     if (!isAuthenticated) {
//         return <Navigate to={redirectTo} />;
//     }
//     if (!allowedRoles.includes(userRoles)) {
//         return <Navigate to="/unauthorised" />;
//     }
//     return <Outlet />;
// };

// export default ProtectedRoute;

