import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { getCookies } from "../utils/CookiesUtils";

const RestrictedRoutes = () => {
  return (
    <div>
      {getCookies() ? <Navigate to="/dashboard/all-posts" /> : <Outlet />}
    </div>
  );
};

export default RestrictedRoutes;
