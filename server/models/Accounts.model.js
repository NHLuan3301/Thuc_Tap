const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountsSchema = new Schema(
  {
    company_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true, // tự động tạo createdAt,updatedAt
  }
);
module.exports = mongoose.model("Accounts", AccountsSchema);
