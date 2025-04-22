import React from "react";
import {
  CircleCheck,
  Clock12,
  MapPinCheck,
  UserRoundSearch,
  ListTodo,
  Hospital,
} from "lucide-react";

export default function ServiceIntro() {
  return (
    <div className="w-full px-4 md:px-10 py-12 flex flex-col items-center">
      {/* Section: Giới thiệu dịch vụ */}
      <h2 className="text-center font-bold text-2xl md:text-4xl">
        Giới thiệu dịch vụ
      </h2>
      <span className="text-center mt-3 max-w-[475px] text-sm md:text-base">
        Nền tảng logistics với mạng lưới rộng lớn, cung cấp sản phẩm giao hàng
        tối ưu và hiệu quả
      </span>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {[
          {
            icon: <Clock12 size={40} color="#ff0000" />,
            label: "Giao hàng nhanh",
          },
          {
            icon: <CircleCheck size={40} color="#ff0000" />,
            label: "Giá cả hợp lý",
          },
          {
            icon: <MapPinCheck size={40} color="#ff0000" />,
            label: "Nhiều tỉnh thành",
          },
          {
            icon: <UserRoundSearch size={40} color="#ff0000" />,
            label: "Hỗ trợ 24/7",
          },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            {item.icon}
            <span className="font-semibold text-center text-sm md:text-base">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Section: Tính năng nổi bật */}
      <h3 className="text-center font-bold text-2xl md:text-4xl mt-12">
        Tính năng nổi bật
      </h3>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full max-w-4xl">
        {[
          {
            icon: <Clock12 size={40} color="#ff0000" />,
            title: "Giao nhanh",
            desc: "Giá cả hợp lý tiết kiệm thời gian",
          },
          {
            icon: <ListTodo size={40} color="#ff0000" />,
            title: "Quản lý đơn hàng",
            desc: "Giá cả hợp lý tiết kiệm thời gian",
          },
          {
            icon: <MapPinCheck size={40} color="#ff0000" />,
            title: "Theo dõi tài xế",
            desc: "Giá cả hợp lý tiết kiệm thời gian",
          },
          {
            icon: <Hospital size={40} color="#ff0000" />,
            title: "Bảo hiểm hàng hoá",
            desc: "Giá cả hợp lý tiết kiệm thời gian",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex gap-3 rounded-xl border border-gray-300 p-4 items-start"
          >
            {item.icon}
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-base">{item.title}</span>
              <span className="text-sm text-gray-600">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-6 bg-red-600 hover:bg-red-700 text-white text-sm md:text-base px-6 py-2 rounded-xl shadow-md transition">
        Xem thêm dịch vụ
      </button>
    </div>
  );
}
