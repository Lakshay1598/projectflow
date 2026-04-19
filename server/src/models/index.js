const sequelize = require("../config/database");
const User = require("./User");
const Workspace = require("./Workspace");
const WorkspaceMember = require("./WorkspaceMember");

// Define associations
User.hasMany(Workspace, { foreignKey: "owner_id" });
Workspace.belongsTo(User, { foreignKey: "owner_id" });

Workspace.hasMany(WorkspaceMember, { foreignKey: "workspace_id" });
WorkspaceMember.belongsTo(Workspace, { foreignKey: "workspace_id" });

User.hasMany(WorkspaceMember, { foreignKey: "user_id" });
WorkspaceMember.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  sequelize,
  User,
  Workspace,
  WorkspaceMember,
};