const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrdersSchema = new Schema(
  {
    accounts_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Accounts",
    },
    users_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    customer_info: {
      name: String,
      phone: String,
      address: String,
    },
    items: [
      {
        product_id: Schema.Types.ObjectId,
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    total_amount: Number,
    status: {
      type: String,
      enum: ["unpaid", "paid", "refunded"], //chưa thanh toán, đã thanh toán , hoàn tiền
      default: "unpaid",
    },
    delivery_id: {
      type: Schema.Types.ObjectId,
      ref: "Delivery", //giao hàng
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Orders", OrdersSchema);
