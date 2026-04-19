const { Workspace, WorkspaceMember, User } = require("../models");

const createWorkspace = async ({ name, description, userId }) => {
  // Generate slug from name
  const slug = name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();

  const workspace = await Workspace.create({
    name,
    description,
    slug,
    owner_id: userId,
  });

  // Add owner as admin member
  await WorkspaceMember.create({
    workspace_id: workspace.id,
    user_id: userId,
    role: "admin",
  });

  return workspace;
};

const getWorkspace = async (workspaceId, userId) => {
  const workspace = await Workspace.findByPk(workspaceId);
  if (!workspace) throw new Error("Workspace not found");

  // Check if user is a member
  const member = await WorkspaceMember.findOne({
    where: { workspace_id: workspaceId, user_id: userId },
  });
  if (!member) throw new Error("Unauthorized");

  return workspace;
};

const getUserWorkspaces = async (userId) => {
  const workspaces = await Workspace.findAll({
    include: [
      {
        model: WorkspaceMember,
        where: { user_id: userId },
        attributes: ["role"],
      },
    ],
  });

  return workspaces;
};

const updateWorkspace = async (workspaceId, userId, updates) => {
  const workspace = await Workspace.findByPk(workspaceId);
  if (!workspace) throw new Error("Workspace not found");

  // Check if user is owner OR admin member
  const member = await WorkspaceMember.findOne({
    where: { workspace_id: workspaceId, user_id: userId },
  });

  if (!member || (member.role !== "admin" && workspace.owner_id !== userId)) {
    throw new Error("Unauthorized");
  }

  await workspace.update(updates);
  return workspace;
};

module.exports = {
  createWorkspace,
  getWorkspace,
  getUserWorkspaces,
  updateWorkspace,
};