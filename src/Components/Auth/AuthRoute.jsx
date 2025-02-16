import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute() {
  return !localStorage.getItem("uid") ? (
    <Outlet />
  ) : (
    <Navigate to={"/dashboard"} />
  );
}
