const workspaceService = require("../services/workspace.service");

const create = async (req, res) => {
  try {
    const workspace = await workspaceService.createWorkspace({
      name: req.body.name,
      description: req.body.description,
      userId: req.user.id,
    });
    res.status(201).json({ success: true, data: workspace });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const workspaces = await workspaceService.getUserWorkspaces(req.user.id);
    res.status(200).json({ success: true, data: workspaces });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const workspace = await workspaceService.getWorkspace(
      req.params.id,
      req.user.id
    );
    res.status(200).json({ success: true, data: workspace });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const workspace = await workspaceService.updateWorkspace(
      req.params.id,
      req.user.id,
      req.body
    );
    res.status(200).json({ success: true, data: workspace });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { create, getAll, getOne, update };