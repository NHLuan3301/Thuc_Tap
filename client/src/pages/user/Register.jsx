import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    const newErrors = {
      email: "",
      password: "",
      confirm_password: "",
    };
    if (formData.email.trim() === "") {
      newErrors.email = "Email không được để trống!";
      valid = false;
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Mật khẩu không được để trống!";
      valid = false;
    }
    if (formData.confirm_password.trim() === "") {
      newErrors.confirm_password = "Không được để trống!";
      valid = false;
    }
    if (formData.email.length < 6) {
      newErrors.email = "Email phải nhiều hơn 6 ký tự!";
      valid = false;
    }
    if (formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải nhiều hơn 8 ký tự!";
      valid = false;
    }
    if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = "Mật khẩu nhập lại không khớp!";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (
        formData.email === "luan@gmail.com" &&
        formData.password === "12345678"
      ) {
        toast.success("Đăng ký thành công!");
        navigate("/login");
      } else {
        toast.error("Sai thông tin đăng ký hoặc mật khẩu không khớp!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white w-full max-w-4xl flex shadow-lg rounded-xl overflow-hidden">
        <div className="hidden md:flex flex-col justify-center items-center bg-white px-8 py-12 w-1/2">
          <div className="flex items-center flex-col font-semibold text-xl">
            <img
              src="/LogoHeader.png"
              alt="logo-header"
              className="w-40 h-40 object-contain"
            />
            <div className="flex gap-1">
              <span className="text-red-500">Wisdom </span>
              <span> logistics</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <div className="mb-4">
            <button
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:shadow"
              onClick={() => navigate("/google-login")}
            >
              <img src="/iconGG.png" alt="Google" className="w-5 h-5 mr-2" />
              <span>Sign with Google</span>
            </button>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
                <p className="text-red-500 text-sm">
                  {errors.confirm_password}
                </p>
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
      </div>
      <ToastContainer />
    </div>
  );
}
