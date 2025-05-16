import React from "react";

export default function ServiceDetails() {
  return (
    <div className="p-10 mt-8 text-2xl ">
      Chi tiết dịch vụ
      <div className="flex text-4xl font-bold mt-3">Giao hàng nhanh</div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mt-4 ">
          <span className="font-bold">Mô tả</span>
          <span className="text-2xl">
            Dịch vụ giao hàng nhanh của chúng tôi đảm bảo đơn hàng được giao đến
            khách hàng trong thời gian ngắn nhất có thể
          </span>
          <div className="mt-5">
            <span className="text-2xl font-bold">Bảng giá</span>

            <div className="flex justify-between py-2 border-b">
              <span>Dưới 3kg</span>
              <span>30.000 đ</span>
            </div>

            <div className="flex justify-between py-2 ">
              <span>5kg - 10kg</span>
              <span>50.000 đ</span>
            </div>
            <button className="bg-red-500 w-full text-white text-lg font-semibold px-6 py-3 rounded-lg mt-4 hover:bg-red-600 active:scale-95 transition">
              Đặt dịch vụ ngay
            </button>
          </div>
        </div>
        <div className="flex w-full  justify-center size-96">
          <img src="/xemay-giaohang.png" />
        </div>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Text</h2>

        <div className="flex justify-between py-2 border-b">
          <span>Dưới 3kg</span>
          <span>35.000đ</span>
        </div>

        <div className="flex justify-between py-2 ">
          <span>5kg – 10kg</span>
          <span>50.000đ</span>
        </div>
      </div>
    </div>
  );
}
