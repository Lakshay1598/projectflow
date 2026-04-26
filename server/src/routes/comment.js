const express = require("express");
const router = express.Router({ mergeParams: true });
const commentController = require("../controllers/comment.controller");
const { authenticate } = require("../middleware/auth");

router.post("/", authenticate, commentController.create);
router.get("/", authenticate, commentController.getAll);
router.delete("/:id", authenticate, commentController.deleteOne);

module.exports = router;