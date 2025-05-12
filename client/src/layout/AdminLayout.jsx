import { Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Car, ChartLine, ShoppingCart, SquareChartGantt } from "lucide-react";
const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout className="h-screen">
      <Sider trigger={null} className="!bg-white">
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          rootClassName="text-white"
          triggerColor="red"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <ChartLine />,
              label: "Dashboard",
              onClick: () => navigate("/admin/dashboard"),
            },
            {
              key: "2",
              icon: <SquareChartGantt />,
              label: " Quản lý Tenant ",
              onClick: () => navigate("/admin/tenant-management"),
            },
            {
              key: " 3",
              icon: <ShoppingCart />,
              label: "Quản lý đơn hàng",
              onClick: () => navigate("/admin/order-management"),
            },
            {
              key: "4",
              icon: <Car />,
              label: " Quản lý tài xế",
              onClick: () => navigate("/admin/driver-management"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="flex justify-between items-center m-3"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <div className="flex items-center gap-3 ">
            <img
              src="/public/LogoHeader.png"
              alt="logo-header"
              className="w-14 h-12 md:w-[95px] md:h-[66px]"
            />
            <span className="text-[#E70012] font-extrabold text-xl md:text-2xl leading-[100%]">
              Wisdom logistics
            </span>
          </div>
          <div class=" text-sm md:text-base text-[#5C5C5C]">
            <span>Email: Wisdom12348@gmail.com</span>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
