const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  course_name: { type: String, required: true },
  course_category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  course_img: String,
  course_duration: { type: String, required: true },
  course_price: { type: Number, required: true },
  description: String,
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
