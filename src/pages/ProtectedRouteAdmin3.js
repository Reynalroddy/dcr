import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRouteAdmin3 = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
// const userInfo={name:'true',
// isAdmin:true};

return userInfo && userInfo.roles?.name ==='DCR'?children: <Navigate to="/login" />;
};

export default ProtectedRouteAdmin3;