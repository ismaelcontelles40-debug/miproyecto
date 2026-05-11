const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
} = require("../controllers/task.controller");

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", toggleTask);
router.delete("/:id", deleteTask);

module.exports = router;