const { Project } = require("../models");

const createProject = async ({ workspace_id, name, description, userId }) => {
  return await Project.create({
    workspace_id,
    name,
    description,
    created_by: userId,
  });
};

const getProjectsByWorkspace = async (workspace_id) => {
  return await Project.findAll({ where: { workspace_id } });
};

const getProject = async (projectId) => {
  return await Project.findByPk(projectId);
};

const updateProject = async (projectId, updates) => {
  const project = await Project.findByPk(projectId);
  await project.update(updates);
  return project;
};

const deleteProject = async (projectId) => {
  await Project.destroy({ where: { id: projectId } });
};

module.exports = {
  createProject,
  getProjectsByWorkspace,
  getProject,
  updateProject,
  deleteProject,
};