import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import OrderManagement from "../pages/admin/OrderManagement";
import TenantManagement from "../pages/admin/TenantManagement";
import DriverManagement from "../pages/admin/DriveManagement";
export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/order-management" element={<OrderManagement />} />
        <Route path="/tenant-management" element={<TenantManagement />} />
        <Route path="/driver-management" element={<DriverManagement />} />
      </Route>
    </Routes>
  );
}
