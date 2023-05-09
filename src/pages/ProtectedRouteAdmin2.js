import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRouteAdmin2 = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
// const userInfo={name:'true',
// isAdmin:true};
// const {permission} = userInfo;
// const realp= permission.permissions;
// const permArr = realp.join(',');

// const sd = ["Can_List_Attestation",
// "Can_View_Attestation",
// "Can_Query_Attestation",
// "Can_Approve_Attestation",];

return userInfo && userInfo.roles?.name ==='State Director'?children: <Navigate to="/login" />;
};

export default ProtectedRouteAdmin2;