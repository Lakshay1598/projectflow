const projectService = require("../services/project.service");

const create = async (req, res) => {
  try {
    const project = await projectService.createProject({
      workspace_id: req.params.workspaceId,
      name: req.body.name,
      description: req.body.description,
      userId: req.user.id,
    });
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const projects = await projectService.getProjectsByWorkspace(
      req.params.workspaceId
    );
    res.status(200).json({ success: true, data: projects });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const project = await projectService.getProject(req.params.id);
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const project = await projectService.updateProject(req.params.id, req.body);
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    await projectService.deleteProject(req.params.id);
    res.status(200).json({ success: true, message: "Project deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { create, getAll, getOne, update, deleteOne };