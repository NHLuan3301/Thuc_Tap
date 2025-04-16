import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
