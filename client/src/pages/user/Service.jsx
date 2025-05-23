import { Link } from "react-router-dom";

const serviceList = [
  {
    id: "express",
    title: "Giao hàng nhanh",
    description: "Dịch vụ giao hàng nhanh trong ngày với mức giá cạnh tranh.",
    img: "xe-may.jpg",
  },
  {
    id: "economy",
    title: "Giao hàng tiết kiệm",
    description: "Dịch vụ tiết kiệm chi phí cho các đơn hàng không gấp.",
    img: "thung-hang.jpg",
  },
  {
    id: "truck",
    title: "Dịch vụ thuê xe tải",
    description: "Giải pháp vận chuyển hàng hoá bằng xe tải tiện lợi.",
    img: "xe-tai.jpg",
  },
];

export default function Services() {
  return (
    <div className="bg-white px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 p-3">Dịch vụ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {serviceList.map((service) => (
          <div
            key={service.id}
            className="border border-gray-300 rounded-lg shadow p-6 text-center transition hover:shadow-md"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <Link
              to={`/services/${service.id}`}
              className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
