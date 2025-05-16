export default function GoogleLoginMock() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Đăng nhập bằng Google</h2>
        <p className="mb-6 text-gray-600">
          Trang mô phỏng giao diện đăng nhập Google
        </p>
        <input
          type="email"
          placeholder="Email hoặc số điện thoại"
          className="w-full mb-4 p-3 border rounded-md"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full mb-6 p-3 border rounded-md"
        />
        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700">
          Tiếp tục
        </button>
      </div>
    </div>
  );
}
