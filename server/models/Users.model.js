const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, //unique là duy nhất không được phép giống nhau
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    company_name: {
      type: String,
    },
    role: {
      type: String,
      default: "customer", //Mặc định role là người dùng
      enum: ["admin", "staff", "customer"],
    },
    accounts: {
      type: Schema.Types.ObjectId,
      ref: "Accounts",
    },
  },
  {
    versionKey: false,
    timestamps: true, // tự động tạo createdAt,updatedAt
  }
);
module.exports = mongoose.model("Users", UsersSchema);
