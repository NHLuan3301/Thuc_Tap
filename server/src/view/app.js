const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("."));
require("dotenv").config();
const port = process.env.port || 5000;
app.listen(port);
// taoj database từ config/initDB
// trong require lúc nào cũng có ""
require("../config/initDB")();
// tạo model(database)
const rootRoute = require("../Routes");
// lấyy tất cả từ file src/Routes/index.js để dử dụng
// api sẽ có dạng ví dụ : localhost:5000/api/auth/signup
app.use("/api", rootRoute);
