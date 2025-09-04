import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// Student login
router.post("/login", async (req, res) => {
  const { studentId, password } = req.body;
  const student = await Student.findOne({ studentId, password });
  if (!student) return res.status(400).json({ msg: "Invalid login" });
  res.json(student);
});

// Get attendance
router.get("/:id/attendance", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student.attendance);
});

// Get results
router.get("/:id/results", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student.results);
});

export default router;
