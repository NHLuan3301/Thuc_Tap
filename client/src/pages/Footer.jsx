import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-10 py-8 mt-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo + Text */}
        <div className="flex items-start gap-3">
          <img
            src="public/LogoHeader.png"
            alt="logo-header"
            className="w-12 h-10 md:w-[95px] md:h-[66px]"
          />
          <div className="flex flex-col gap-1">
            <span className="text-[#E70012] font-extrabold text-lg md:text-2xl leading-[100%]">
              Wisdom logistics
            </span>
            <span className="font-normal italic text-sm md:text-base leading-[100%]">
              Chuyên vận chuyển hàng hóa khu vực miền Nam
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 items-start text-sm md:text-base">
          <span className="flex items-center gap-2">
            <Mail size={18} color="#121212" /> wisdom123@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <Phone size={18} color="#121212" /> 0802123243
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <img
              src="public/telegram-icon.png"
              alt="telegram-icon"
              className="w-5 h-5"
            />
            <img
              src="public/facebook-icon.png"
              alt="facebook-icon"
              className="w-5 h-5"
            />
            <img
              src="public/zalo-icon.jpg"
              alt="zalo-icon"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
