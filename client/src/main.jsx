// đây là trang bắt đầu của dự án
import React from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
const RootComponent = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RootComponent />);
