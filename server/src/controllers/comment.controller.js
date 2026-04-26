const commentService = require("../services/comment.service");

const create = async (req, res) => {
  try {
    const comment = await commentService.createComment({
      task_id: req.params.taskId,
      author_id: req.user.id,
      body: req.body.body,
    });
    res.status(201).json({ success: true, data: comment });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const comments = await commentService.getCommentsByTask(req.params.taskId);
    res.status(200).json({ success: true, data: comments });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    await commentService.deleteComment(req.params.id);
    res.status(200).json({ success: true, message: "Comment deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { create, getAll, deleteOne };