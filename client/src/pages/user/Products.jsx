import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { products } from "../../data/products";
export default function Products() {
  return (
    <div className="min-h-screen bg-white px-1 sm:px-8 py-3 sm:py-6 flex flex-col sm:flex-row gap-3 sm:gap-0">
      <aside className="order-2 sm:order-1 w-full sm:w-64 pr-0 sm:pr-4 mt-3 sm:mt-0">
        <div className="border border-gray-300 rounded-md p-3 sm:p-4 bg-white shadow-sm">
          <h3 className="text-base font-semibold mb-2">BỘ LỌC TÌM KIẾM</h3>
          <div className="mb-3 sm:mb-4">
            <h4 className="text-sm font-medium mb-1">Theo Danh Mục</h4>
            <div className="flex flex-col gap-1 text-sm">
              <label>
                <input type="checkbox" className="mr-2" />
                Vận chuyển
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Giao hàng
              </label>
            </div>
          </div>
          <div className="mb-3 sm:mb-4">
            <h4 className="text-sm font-medium mb-1">Nơi Bán</h4>
            <div className="flex flex-col gap-1 text-sm">
              <label>
                <input type="checkbox" className="mr-2" />
                Hà Nội
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                TP. Hồ Chí Minh
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Thái Nguyên
              </label>
            </div>
          </div>
          <div className="mb-3 sm:mb-4">
            <h4 className="text-sm font-medium mb-1">Khoảng Giá</h4>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Từ"
                className="w-full border rounded px-2 py-1 text-sm"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Đến"
                className="w-full border rounded px-2 py-1 text-sm"
              />
            </div>
            <button className="mt-2 w-full bg-red-500 text-white text-sm py-1 rounded hover:bg-red-600 cursor-pointer">
              Áp dụng
            </button>
          </div>
        </div>
      </aside>
      {/* Products grid */}
      <div className="order-1  sm:order-2 flex-1 flex flex-col">
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {products.map((product) => (
            <div
              key={product.productId}
              className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-200 cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 relative">
                <h2 className="text-sm font-medium h-10 line-clamp-2 overflow-hidden">
                  {product.productName}
                </h2>
                <div className="flex justify-between items-center font-semibold">
                  <div className="text-red-500 font-semibold text-base mt-1">
                    ₫{product.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Đã bán {product.sold.toLocaleString()}
                  </div>
                </div>
                <span className="hidden xs:inline-block text-red-500 font-semibold absolute top-2 right-2 px-2 py-1 rounded-sm border border-red-500 text-xs sm:text-sm">
                  -{product.discount} %
                </span>
              </div>
            </div>
          ))}
        </div>
        <nav
          className="flex items-center -space-x-px pt-4 justify-center"
          aria-label="Pagination"
        >
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Previous"
          >
            <LeftOutlined />
            <span className="hidden sm:block">Trang trước</span>
          </button>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-hidden focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none"
            aria-current="page"
          >
            1
          </button>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          >
            2
          </button>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          >
            3
          </button>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Next"
          >
            <span className="hidden sm:block">Trang tiếp theo</span>
            <RightOutlined />
          </button>
        </nav>
      </div>
    </div>
  );
}
