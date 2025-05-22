import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Không được để trống email!";
      valid = false;
    } else if (formData.email.length < 6) {
      newErrors.email = "Email phải nhiều hơn 6 ký tự!";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Không được để trống mật khẩu!";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải nhiều hơn 8 ký tự!";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (formData.email === "luan@gmail.com" && formData.password === "123") {
        toast.success("Đăng nhập thành công !");
        navigate("/");
      } else {
        toast.error("Sai email hoặc mật khẩu!");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
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
          <h2 className="text-xl font-semibold text-center mb-6"></h2>

          <div className="mb-4">
            <button
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:shadow"
              onClick={() => navigate("/google-login")}
            >
              <img src="/iconGG.png" alt="Google" className="w-5 h-5 mr-2" />
              <span>Sign with Google</span>
            </button>
          </div>
          <div className="flex justify-center gap-4 p-3">OR</div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <input
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
                className="w-full p-3 border rounded-md"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleChange(e, "password")}
                className="w-full p-3 border rounded-md"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password}</p>
              )}
            </div>
            <button
              className="bg-[#E70012] text-white text-xl font-semibold py-4 rounded-lg hover:bg-red-700 transition duration-300"
              type="submit"
            >
              Đăng nhập
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Nếu bạn chưa có tài khoản?
            <a href="/register" className="text-blue-500 hover:underline pl-1">
              Đăng ký
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
