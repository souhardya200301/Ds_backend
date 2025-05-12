const { slugify } = require("../../lib/utils");
const Course = require("../../model/course.model");

const createCourse = async (req, res) => {
  try {
    const { course_name, course_category_id, course_img, course_duration, course_price, description } = req.body;

    if (!course_name || !course_category_id || !course_duration || !course_price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newCourse = new Course({ course_name, sulg: slugify(course_name), course_category_id, course_img, course_duration, course_price, description });
    const savedCourse = await newCourse.save();

    res.status(201).json({ message: "Course created", course: savedCourse });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = createCourse;
