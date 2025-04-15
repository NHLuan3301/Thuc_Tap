const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    stock: Number,
    sku: String,
    account_id: { type: Schema.Types.ObjectId, ref: "Accounts" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
