import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getCookies } from "../utils/CookiesUtils";

const PrivateRoutes = () => {
  return <div>{getCookies() ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoutes;
