import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import HomePage from "../pages/user/HomePage";
import Service from "../pages/user/Service";
import ServiceDetails from "../pages/user/ServiceDetails";
import GoogleLoginMock from "../pages/user/GoogleLoginMock";
import LookUpOrders from "../pages/user/LookUpOrders";
import Products from "../pages/user/Products";
import Introduce from "../pages/user/Introduce";
import Instruct from "../pages/user/Instruct";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/look-up" element={<LookUpOrders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/instruct" element={<Instruct />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/google-login" element={<GoogleLoginMock />} />
    </Routes>
  );
};
export default UserRoutes;
