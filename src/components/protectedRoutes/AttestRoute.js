import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const AttestRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
return (userInfo?.permission?.permissions.includes('Can_List_Attestation') && userInfo?.permission?.permissions.includes('Can_View_Attestation'))
?children: <Navigate to="/not-authorized" />;
};

export const BirthRegRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.user);
  return (userInfo?.permission?.permissions.includes('Can_List_Birth') && userInfo?.permission?.permissions.includes('Can_View_Birth'))
  ?children: <Navigate to="/not-authorized" />;
  };


  export const DeathRegRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.user);
  return (userInfo?.permission?.permissions.includes(' Can_List_Death') && userInfo?.permission?.permissions.includes('Can_View_Death'))
  ?children: <Navigate to="/not-authorized" />;
  };

  export const StillRegRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.user);
  return (userInfo?.permission?.permissions.includes('Can_List_Stillbirth') && userInfo?.permission?.permissions.includes('Can_View_Stillbirth'))
  ?children: <Navigate to="/not-authorized" />;
  };
  export const ModRegRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.user);
  return (userInfo?.permission?.permissions.includes('Can_List_Modification') && userInfo?.permission?.permissions.includes('Can_View_Modification'))
  ?children: <Navigate to="/not-authorized" />;
  };

