import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mx-4 md:mx-10 mt-4 md:mt-6 gap-4 md:gap-0 py-2">
        {/* Logo + Text */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src="/LogoHeader.png"
            alt="logo-header"
            className="w-14 h-12 md:w-[95px] md:h-[66px] object-contain hover:scale-105 transition duration-300"
          />
          <div className="flex flex-col gap-1">
            <span className="text-[#E70012] font-extrabold text-xl md:text-2xl leading-tight">
              Wisdom Logistics
            </span>
            <span className="font-normal italic text-sm md:text-base text-gray-600 leading-tight">
              Chuyên vận chuyển hàng hóa khu vực miền Nam
            </span>
          </div>
        </div>

        {/* Contact Info + Nav */}
        <div className="flex flex-col w-full md:w-auto">
          {/* Top Row: Contact Info */}
          <div className="flex flex-col sm:flex-row justify-between text-center gap-2 sm:gap-6 text-sm md:text-base text-gray-600">
            <span>
              Email:{" "}
              <a
                href="mailto:Wisdom12348@gmail.com"
                className="hover:text-red-500 transition"
              >
                Wisdom12348@gmail.com
              </a>
            </span>
            <span>
              Hotline:{" "}
              <a
                href="tel:0799224145"
                className="hover:text-red-500 transition"
              >
                0799224145
              </a>
            </span>
            <a
              href="/login"
              className="hover:text-red-500 font-medium transition"
            >
              Đăng nhập / Đăng ký
            </a>
          </div>

          {/* Bottom Row: Navigation */}
          <nav className="flex flex-wrap justify-center bg-[#E70012] mt-4 pt-3 pb-3 px-4 gap-4 shadow-inner rounded-lg">
            {[
              { path: "/", label: "Trang Chủ" },
              { path: "/services", label: "Dịch vụ" },
              { path: "/look-up", label: "Tra cứu" },
              { path: "/products", label: "Sản Phẩm" },
              { path: "/introduce", label: "Giới Thiệu" },
              { path: "/instruct", label: "Hướng Dẫn" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="text-white font-semibold whitespace-nowrap hover:underline hover:scale-105 transition duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
