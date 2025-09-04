import express from "express";
import Admin from "../models/Admin.js";
import Student from "../models/Student.js";

const router = express.Router();

// Admin login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (!admin) return res.status(400).json({ msg: "Invalid admin login" });
  res.json(admin);
});

// Add student
router.post("/add-student", async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json({ msg: "Student added", student: newStudent });
});

// Update attendance
router.post("/:id/attendance", async (req, res) => {
  const { date, status } = req.body;
  const student = await Student.findById(req.params.id);
  student.attendance.push({ date, status });
  await student.save();
  res.json(student.attendance);
});

// Update results
router.post("/:id/results", async (req, res) => {
  const { semester, subjects } = req.body;
  const student = await Student.findById(req.params.id);
  student.results[semester] = subjects;
  await student.save();
  res.json(student.results);
});

export default router;
