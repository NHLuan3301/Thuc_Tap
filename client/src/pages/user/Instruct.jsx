import React from "react";
import {
  FaRegCheckCircle,
  FaShippingFast,
  FaClipboardList,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function Instruct() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          Hướng dẫn sử dụng dịch vụ
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Dưới đây là các bước đơn giản để bạn có thể sử dụng dịch vụ vận chuyển
          hàng hóa của chúng tôi một cách nhanh chóng và hiệu quả.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bước 1 */}
          <div className="flex items-start space-x-4">
            <FaClipboardList className="text-3xl text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                1. Tạo đơn hàng
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Đăng nhập và điền thông tin người gửi, người nhận, loại hàng,
                trọng lượng và địa chỉ nhận/giao.
              </p>
            </div>
          </div>

          {/* Bước 2 */}
          <div className="flex items-start space-x-4">
            <FaMoneyCheckAlt className="text-3xl text-green-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                2. Thanh toán cước phí
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Thanh toán dễ dàng qua ví điện tử, chuyển khoản ngân hàng hoặc
                khi nhận hàng (COD).
              </p>
            </div>
          </div>

          {/* Bước 3 */}
          <div className="flex items-start space-x-4">
            <FaShippingFast className="text-3xl text-orange-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                3. Giao hàng nhanh chóng
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Hệ thống vận chuyển tự động xử lý và giao hàng đúng lịch trình
                cam kết.
              </p>
            </div>
          </div>

          {/* Bước 4 */}
          <div className="flex items-start space-x-4">
            <FaRegCheckCircle className="text-3xl text-purple-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                4. Theo dõi và hoàn tất
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Bạn có thể theo dõi tình trạng đơn hàng trực tuyến. Khi giao
                hàng thành công, hệ thống sẽ tự động cập nhật trạng thái.
              </p>
            </div>
          </div>
        </div>

        {/* Kết thúc */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-base">
            Nếu bạn gặp khó khăn, hãy liên hệ đội ngũ hỗ trợ khách hàng của
            chúng tôi 24/7 qua hotline:{" "}
            <span className="font-semibold text-blue-600">1900 1234</span>
          </p>
        </div>
      </div>
    </div>
  );
}
