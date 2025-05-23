import React from "react";

export default function Carousel() {
  return (
    <div
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[570px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('public/carouselBanner.png')",
      }}
    >
      <div className="flex w-full h-full justify-center items-center">
        <div className="w-full max-w-[750px] text-center px-4">
          <h1 className="font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight">
            Giao hàng siêu nhanh, nhưng giá lại siêu rẻ!
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 items-center justify-center">
            <button className="bg-[#E70012] rounded-lg px-6 py-3 sm:px-10 sm:py-5 text-white font-bold text-lg sm:text-2xl">
              Đặt hàng ngay
            </button>
            <button className="bg-white rounded-lg px-6 py-3 sm:px-10 sm:py-5 text-[#E70012] font-bold text-lg sm:text-2xl">
              Đặt hàng ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
