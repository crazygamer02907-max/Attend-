import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  phone: String,
  password: String,
  attendance: [
    { date: String, status: String }
  ],
  results: Object
});

export default mongoose.model("Student", studentSchema);
