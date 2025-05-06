import { Camera, Clock12 } from "lucide-react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const router = useNavigate();
  const validate = () => {
    let valid = true;
    const newErrors = {
      email: "",
      password: "",
      confirm_password: "",
    };
    if (formData.email.trim() === "") {
      newErrors.email = "Email không được để trống !";
      valid = false;
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Mật khẩu không được để trống !";
      valid = false;
    }
    if (formData.confirm_password.trim() === "") {
      newErrors.confirm_password = " Không được để trống !";
      valid = false;
    }
    if (formData.email.length < 6) {
      newErrors.email = "Email phải nhiều hơn 6 ký tự !";
    }
    if (formData.password.length < 8) {
      newErrors.password = " Mật khẩu phải nhiều hơn 8 ký tự !";
    }
    if (formData.confirm_password != formData.password) {
      newErrors.confirm_password = "Mật khẩu nhập lại không trùng khớp !";
    }
    setErrors(newErrors);
    return valid;
  };
  const handleChange = (e, field) => {
    const value = e.target.value;
    setFromData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (
        formData.email === "luan@gmail.com" &&
        formData.password === "12345678"
      ) {
        toast.success("Đã đăng ký thành công !");
        router("/login");
      } else {
        toast.error("Sai tên đăng ký hoặc nhập lại mật khẩu không đúng !");
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-white">
      <div className="w-full max-w-2xl">
        <div className="text-center">
          <p className="text-2xl">
            Welcome to
            <span className="text-[#E70012] font-semibold">
              {" "}
              Wisdom Logictis
            </span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-2">
            Đăng ký
          </h1>
        </div>

        {/* Đăng ký với mạng xã hội */}
        <div className="grid grid-cols-3 gap-4 mt-10 items-center justify-items-center">
          <div className="flex items-center bg-[#FFF5F4] rounded-lg px-3 py-2 cursor-pointer hover:shadow">
            <img src="public/iconGG.png" alt="Google" className="w-5 h-5" />
            <span className="ml-2 text-sm font-medium">Google</span>
          </div>
          <img
            src="public/FBlogoLight.webp"
            alt="Facebook"
            className="w-5 h-5 cursor-pointer"
          />
          <img
            src="public/logoapple.png"
            alt="Apple"
            className="w-5 h-5 cursor-pointer"
          />
        </div>

        {/* Form đăng ký */}
        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="username">Nhập tên tài khoản</label>
            <input
              type="text"
              id="username"
              name="username"
              className="border rounded-lg p-3"
              placeholder="Username hoặc email"
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="password">Nhập mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-lg p-3"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="border rounded-lg p-3"
              placeholder="Nhập lại mật khẩu"
              value={formData.confirm_password}
              onChange={(e) => handleChange(e, "confirm_password")}
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-sm">{errors.confirm_password}</p>
            )}
          </div>

          <button
            className="bg-[#E70012] text-white text-xl font-semibold py-4 rounded-lg hover:bg-red-700 transition duration-300"
            type="submit"
          >
            Đăng ký
          </button>

          <p className="text-center mt-2">
            Đã có tài khoản?
            <a href="/login" className="text-blue-500 hover:underline ml-1">
              Đăng nhập
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
