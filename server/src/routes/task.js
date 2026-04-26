const express = require("express");
const router = express.Router({ mergeParams: true });
const taskController = require("../controllers/task.controller");
const { authenticate } = require("../middleware/auth");

router.post("/", authenticate, taskController.create);
router.get("/", authenticate, taskController.getAll);
router.get("/:id", authenticate, taskController.getOne);
router.put("/:id", authenticate, taskController.update);
router.delete("/:id", authenticate, taskController.deleteOne);

module.exports = router;