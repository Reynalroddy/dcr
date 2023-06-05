import React from "react";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
const ProtectedRouteAdmin = ({ children }) => {
  // const { userInfo } = useSelector((state) => state.user);
  const userInfo = JSON.parse(localStorage.getItem('user-birth'))
// const userInfo={name:'true',
// isAdmin:true};

return userInfo && userInfo.Role_ID ==='1'?children : userInfo && userInfo.Role_ID ==='2'?children :userInfo && userInfo.Role_ID ==='5'?children : userInfo && userInfo.Role_ID ==='3'?children: <Navigate to="/unauth" />;
};

export default ProtectedRouteAdmin;