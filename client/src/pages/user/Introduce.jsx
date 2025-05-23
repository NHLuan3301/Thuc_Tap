import React from "react";
import {
  FaTruckMoving,
  FaBoxes,
  FaGlobeAsia,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Introduce() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề chính */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Giới thiệu về dịch vụ vận chuyển hàng hóa
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Chúng tôi cung cấp giải pháp vận chuyển nhanh chóng, an toàn và tiết
          kiệm cho khách hàng trên toàn quốc và quốc tế.
        </p>

        {/* Các dịch vụ nổi bật */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <FaTruckMoving className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Vận chuyển nội địa
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Dịch vụ nhanh chóng, đúng giờ trên toàn quốc.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <FaBoxes className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Đóng gói chuyên nghiệp
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Cam kết bảo vệ hàng hóa tối ưu trong suốt quá trình vận chuyển.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <FaGlobeAsia className="text-4xl text-yellow-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Vận chuyển quốc tế
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Hợp tác với các đối tác uy tín để đảm bảo giao hàng toàn cầu.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <FaPhoneAlt className="text-4xl text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Hỗ trợ 24/7</h3>
            <p className="text-sm text-gray-600 mt-2">
              Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ mọi lúc, mọi nơi.
            </p>
          </div>
        </div>

        {/* Liên hệ */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-gray-600 mb-2">
            Hotline: <span className="font-semibold">1900 1234</span>
          </p>
          <p className="text-gray-600">Email: support@vanchuyenhang.vn</p>
        </div>
      </div>
    </div>
  );
}
