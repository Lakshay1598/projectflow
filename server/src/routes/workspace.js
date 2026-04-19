const express = require("express");
const router = express.Router();
const workspaceController = require("../controllers/workspace.controller");
const { authenticate } = require("../middleware/auth");

router.post("/", authenticate, workspaceController.create);
router.get("/", authenticate, workspaceController.getAll);
router.get("/:id", authenticate, workspaceController.getOne);
router.put("/:id", authenticate, workspaceController.update);

module.exports = router;