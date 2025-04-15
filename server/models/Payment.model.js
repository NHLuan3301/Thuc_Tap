const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PaymentSchema = //bảng thanh toán
  new Schema(
    {
      order_id: { type: Schema.Types.ObjectId, ref: "Orders" },
      user_id: { type: Schema.Types.ObjectId, ref: "Users" },
      method: {
        type: String,
        enum: ["e-wallet", "bank-transfer", "cash"], //Ví điện tử, chuyển khoảng ngân hàng , tiền mặt
      },
      provider: String, //nhà cung cấp
      status: {
        type: String,
        enum: ["pending", "success", "failed"], //đang chờ , thành công thất bại
        default: "pending",
        amount: Number,
      },
      transaction_id: String, // giao dịch
      paid_at: Date,
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Payment", PaymentSchema);
