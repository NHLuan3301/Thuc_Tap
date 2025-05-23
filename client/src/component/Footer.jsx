import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-10 py-8 bg-white shadow-inner mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo + Text */}
        <div className="flex items-start gap-3 cursor-pointer" onClick={() => (window.location.href = "/")}> 
          <img
            src="/LogoHeader.png"
            alt="logo-header"
            className="w-12 h-10 md:w-[95px] md:h-[66px] object-contain hover:scale-105 transition duration-300"
          />
          <div className="flex flex-col gap-1">
            <span className="text-[#E70012] font-extrabold text-lg md:text-2xl leading-tight">
              Wisdom Logistics
            </span>
            <span className="font-normal italic text-sm md:text-base text-gray-600 leading-tight">
              Chuyên vận chuyển hàng hóa khu vực miền Nam
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 items-start text-sm md:text-base text-gray-600">
          <span className="flex items-center gap-2">
            <Mail size={18} color="#121212" /> 
            <a href="mailto:wisdom123@gmail.com" className="hover:text-red-500 transition">wisdom123@gmail.com</a>
          </span>
          <span className="flex items-center gap-2">
            <Phone size={18} color="#121212" /> 
            <a href="tel:0802123243" className="hover:text-red-500 transition">0802123243</a>
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            {[
              { src: "/telegram-icon.png", alt: "telegram" },
              { src: "/facebook-icon.png", alt: "facebook" },
              { src: "/zalo-icon.jpg", alt: "zalo" },
            ].map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt={`${item.alt}-icon`}
                className="w-5 h-5 hover:scale-125 transform transition duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
