const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DeliverySchema = //bảng giao hàng
  new Schema(
    {
      order_id: {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
      tracking_number: String,
      carrier: String,
      status: {
        type: String,
        enum: ["pending", "shipping", "delivered", "failed"], //đang chờ, đang vận chuyển, đã giao, thất bại
        default: "pending",
      },
      estimated_delivery: Date, //thời gian giao hàng ước tính
      delivered_at: Date, // được giao vào
      notes: String,
    },
    { timestamps: true }
  );
module.exports = mongoose.model("Delivery", DeliverySchema);
