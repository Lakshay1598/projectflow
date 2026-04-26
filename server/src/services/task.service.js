const { Task } = require("../models");

const createTask = async ({ project_id, title, description, priority, assignee_id, created_by, due_date }) => {
  return await Task.create({
    project_id,
    title,
    description,
    priority,
    assignee_id,
    created_by,
    due_date,
  });
};

const getTasksByProject = async (project_id) => {
  return await Task.findAll({ 
    where: { project_id },
    include: ["assignee", "subtasks"],
  });
};

const getTask = async (taskId) => {
  return await Task.findByPk(taskId, {
    include: ["assignee", "subtasks", "parentTask"],
  });
};

const updateTask = async (taskId, updates) => {
  const task = await Task.findByPk(taskId);
  await task.update(updates);
  return task;
};

const deleteTask = async (taskId) => {
  await Task.destroy({ where: { id: taskId } });
};

module.exports = {
  createTask,
  getTasksByProject,
  getTask,
  updateTask,
  deleteTask,
};