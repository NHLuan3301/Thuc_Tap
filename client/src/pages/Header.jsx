import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mx-4 md:mx-[30px] mt-4 md:mt-[30px] gap-4 md:gap-0">
      {/* Logo + Text */}
      <div className="flex items-center gap-3">
        <img
          src="public/LogoHeader.png"
          alt="logo-header"
          className="w-14 h-12 md:w-[95px] md:h-[66px]"
        />
        <div className="flex flex-col gap-1">
          <span className="text-[#E70012] font-extrabold text-xl md:text-2xl leading-[100%]">
            Wisdom logistics
          </span>
          <span className="font-normal italic text-sm md:text-base leading-[100%]">
            Chuyên vận chuyển hàng hóa khu vực miền Nam
          </span>
        </div>
      </div>

      {/* Contact Info + Nav */}
      <div className="flex flex-col w-full md:w-auto">
        {/* Top Row: Contact Info */}
        <div className="flex flex-col sm:flex-row justify-between text-center gap-2 sm:gap-6 text-sm md:text-base text-[#5C5C5C]">
          <span>Email: Wisdom12348@gmail.com</span>
          <span>Hotline: 0799224145</span>
          <a href="/login">Đăng nhập/ Đăng ký</a>
        </div>

        {/* Bottom Row: Navigation */}
        <div className="flex flex-wrap justify-center bg-[#E70012] mt-4 pt-3 pb-3 px-4 gap-4">
          <a href="/" className="text-white whitespace-nowrap">
            Trang Chủ
          </a>
          <a href="/products" className="text-white whitespace-nowrap">
            Sản Phẩm
          </a>
          <a href="/introduce" className="text-white whitespace-nowrap">
            Giới Thiệu
          </a>
          <a href="/instruct" className="text-white whitespace-nowrap">
            Hướng Dẫn
          </a>
        </div>
      </div>
    </div>
  );
}
