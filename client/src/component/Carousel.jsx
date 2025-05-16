import React, { useState, useEffect } from "react";

const images = [
  "/carouselBanner.png",
  "/carouselBanner2.png",
  "/carouselBanner3.png", // Thêm các ảnh banner nếu có
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5s chuyển ảnh
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[570px] bg-no-repeat bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url('${images[currentIndex]}')`,
      }}
    >
      {/* Overlay làm mờ nền */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative flex w-full h-full justify-center items-center animate-fadeIn">
        <div className="w-full max-w-[750px] text-center px-4">
          <h1 className="font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight animate-fadeInUp transition-all duration-1000">
            Giao hàng siêu nhanh, nhưng giá lại siêu rẻ!
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 items-center justify-center">
            <button className="bg-[#E70012] rounded-lg px-6 py-3 sm:px-10 sm:py-5 text-white font-bold text-lg sm:text-2xl hover:scale-105 active:scale-95 transition transform">
              Đặt hàng ngay
            </button>
            <button className="bg-white rounded-lg px-6 py-3 sm:px-10 sm:py-5 text-[#E70012] font-bold text-lg sm:text-2xl hover:scale-105 active:scale-95 transition transform">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-[#E70012]" : "bg-white"
            } transition duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
}
