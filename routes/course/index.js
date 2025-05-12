const express = require("express");
const router = express.Router();
const createCourse = require("../../controller/course/create_course");
const getCourses = require("../../controller/course/get_courses"); 
const getCourseById = require("../../controller/course/get_course_by_id");

// private routes
router.post("/create-course", createCourse);
router.put("/update-course/:id", createCourse); 

// public routes
router.get("/get-courses", getCourses);  
router.get("/get-couurse/:id", getCourseById);

module.exports = router;
