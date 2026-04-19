const sequelize = require("../config/database");
const User = require("./User");
const Workspace = require("./Workspace");
const WorkspaceMember = require("./WorkspaceMember");
const Project = require("./Project");

// Define associations
User.hasMany(Workspace, { foreignKey: "owner_id" });
Workspace.belongsTo(User, { foreignKey: "owner_id" });

Workspace.hasMany(WorkspaceMember, { foreignKey: "workspace_id" });
WorkspaceMember.belongsTo(Workspace, { foreignKey: "workspace_id" });

User.hasMany(WorkspaceMember, { foreignKey: "user_id" });
WorkspaceMember.belongsTo(User, { foreignKey: "user_id" });

Workspace.hasMany(Project, { foreignKey: "workspace_id" });
Project.belongsTo(Workspace, { foreignKey: "workspace_id" });

User.hasMany(Project, { foreignKey: "created_by" });
Project.belongsTo(User, { foreignKey: "created_by" });

module.exports = {
  sequelize,
  User,
  Workspace,
  WorkspaceMember,
  Project,
};