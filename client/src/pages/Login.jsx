import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Login() {
  // khai báo giá trị ban đầu cho các input của form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // confirm_password:"" nhập lại mật khẩu
  });
  // khai báo giá trị ban đầu cho lỗi của người dùng nhập vào
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const router = useNavigate();
  // hàm validate email và password
  const validate = () => {
    let valid = true;
    const newErrors = {
      email: "",
      password: "",
    };
    // Check rỗng
    if (formData.email.trim() === "") {
      newErrors.email = "Không được để trống email!";
      valid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Không được để trống mật khẩu!";
      valid = false;
    }
    // check độ dài
    if (formData.email.length < 6) {
      newErrors.email = "Email phải nhiều hơn 6 ký tự!";
      valid = false;
    }
    if (formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải nhiều hơn 8 ký tự!";
      valid = false;
    }
    // if(formData.password != formData.confirm_password){
    //   newErrors.confirm_password = "2 mật khẩu của bạn đang không giống nhau !"
    // }
    setErrors(newErrors);
    return valid;
  };
  // hàm thay đổi giá trị input
  const handleChange = (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); // clear lỗi khi user đang nhập
  };
  // hàm submit dữ liệu để gửi đi
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // check dữ liệu mẫu trước vì chưa có api
      if (formData.email === "luan@gmail.com" && formData.password === "123") {
        toast.success("Đăng nhập thành công !");
        router("/");
      } else {
        toast.error("Sai email hoặc mật khẩu!");
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
            Đăng nhập
          </h1>
        </div>

        {/* Đăng nhập với mạng xã hội */}
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

        {/* Form đăng nhập */}
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

          <a
            href="#"
            className="text-right text-blue-500 text-sm hover:underline"
          >
            Quên mật khẩu?
          </a>

          <button
            type="submit"
            className="bg-[#E70012] text-white text-xl font-semibold py-4 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Đăng nhập
          </button>

          <p className="text-center mt-2">
            Chưa có tài khoản?
            <a href="/register" className="text-blue-500 hover:underline ml-1">
              Đăng ký
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
