const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema(
  {
    report_type: String,
    filters: Object,
    data: Object,
    generatedAt: Date,
    created_by: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Report", ReportSchema);
