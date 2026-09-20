const express = require("express");
const router = express.Router();
const students = require("../data/students");

// Helper: generate next unique ID
const getNextId = () => {
  return students.length > 0
    ? Math.max(...students.map((s) => s.id)) + 1
    : 1;
};

// ------------------------------------------------------------------
// GET /students -> Get all students
// ------------------------------------------------------------------
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    count: students.length,
    data: students
  });
});

// ------------------------------------------------------------------
// GET /students/:id -> Get a single student by ID
// ------------------------------------------------------------------
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid student ID. ID must be a number."
    });
  }

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${id} not found.`
    });
  }

  res.status(200).json({
    success: true,
    data: student
  });
});

// ------------------------------------------------------------------
// POST /students -> Create a new student
// ------------------------------------------------------------------
router.post("/", (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      success: false,
      message: "Both 'name' and 'course' fields are required."
    });
  }

  const newStudent = {
    id: getNextId(),
    name,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student created successfully.",
    data: newStudent
  });
});

// ------------------------------------------------------------------
// PUT /students/:id -> Update an existing student
// ------------------------------------------------------------------
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid student ID. ID must be a number."
    });
  }

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${id} not found.`
    });
  }

  const { name, course } = req.body;

  if (!name && !course) {
    return res.status(400).json({
      success: false,
      message: "Provide at least 'name' or 'course' to update."
    });
  }

  if (name) student.name = name;
  if (course) student.course = course;

  res.status(200).json({
    success: true,
    message: "Student updated successfully.",
    data: student
  });
});

// ------------------------------------------------------------------
// DELETE /students/:id -> Delete a student
// ------------------------------------------------------------------
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid student ID. ID must be a number."
    });
  }

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${id} not found.`
    });
  }

  const deletedStudent = students.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Student deleted successfully.",
    data: deletedStudent[0]
  });
});

module.exports = router;
