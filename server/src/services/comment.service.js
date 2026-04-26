const { Comment } = require("../models");

const createComment = async ({ task_id, author_id, body }) => {
  return await Comment.create({ task_id, author_id, body });
};

const getCommentsByTask = async (task_id) => {
  return await Comment.findAll({
    where: { task_id },
    include: ["author"],
    order: [["createdAt", "ASC"]],
  });
};

const deleteComment = async (commentId) => {
  await Comment.destroy({ where: { id: commentId } });
};

module.exports = { createComment, getCommentsByTask, deleteComment };