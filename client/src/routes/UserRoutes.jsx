import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import Service from "../pages/Service";
import ServiceDetails from "../pages/ServiceDetails";
import GoogleLoginMock from "../pages/GoogleLoginMock";
import LookUpOrders from "../pages/LookUpOrders";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/look-up" element={<LookUpOrders />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/google-login" element={<GoogleLoginMock />} />
    </Routes>
  );
};
export default UserRoutes;
