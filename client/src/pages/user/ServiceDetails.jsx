import React from "react";

export default function ServiceDetails() {
  return (
    <div className="px-4 md:px-10 py-10 mt-8 text-base md:text-xl">
      <h1 className="text-2xl md:text-3xl font-semibold">Chi tiết dịch vụ</h1>

      <div className="text-3xl md:text-4xl font-bold mt-3">Giao hàng nhanh</div>

      <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
        {/* Text content */}
        <div className="flex flex-col md:w-1/2">
          <span className="font-bold text-lg md:text-xl">Mô tả</span>
          <p className="mt-2 text-base md:text-lg leading-relaxed">
            Dịch vụ giao hàng nhanh của chúng tôi đảm bảo đơn hàng được giao đến
            khách hàng trong thời gian ngắn nhất có thể.
          </p>

          {/* Bảng giá */}
          <div className="mt-6">
            <span className="text-lg md:text-xl font-bold">Bảng giá</span>

            <div className="flex justify-between py-2 border-b">
              <span>Dưới 3kg</span>
              <span>30.000 đ</span>
            </div>

            <div className="flex justify-between py-2 border-b">
              <span>5kg - 10kg</span>
              <span>50.000 đ</span>
            </div>

            <button className="bg-red-500 w-full text-white text-lg font-semibold px-6 py-3 rounded-lg mt-4 hover:bg-red-600 active:scale-95 transition">
              Đặt dịch vụ ngay
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="/xemay-giaohang.png"
            alt="Xe máy giao hàng"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>

      {/* Bảng giá phụ nếu bạn muốn giữ */}
      {/* Có thể xoá nếu không cần phần dưới */}
      <div className="mt-10 p-6 bg-white rounded-md shadow-md w-full">
        <h2 className="text-xl font-bold mb-4">Phụ phí</h2>

        <div className="flex justify-between py-2 border-b">
          <span>Dưới 3kg</span>
          <span>35.000đ</span>
        </div>

        <div className="flex justify-between py-2">
          <span>5kg – 10kg</span>
          <span>50.000đ</span>
        </div>
      </div>
    </div>
  );
}
