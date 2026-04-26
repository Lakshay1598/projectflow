const sequelize = require("../config/database");
const User = require("./User");
const Workspace = require("./Workspace");
const WorkspaceMember = require("./WorkspaceMember");
const Project = require("./Project");
const Task = require("./Task");

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

Project.hasMany(Task, { foreignKey: "project_id" });
Task.belongsTo(Project, { foreignKey: "project_id" });

User.hasMany(Task, { foreignKey: "assignee_id", as: "assignedTasks" });
Task.belongsTo(User, { foreignKey: "assignee_id", as: "assignee" });

User.hasMany(Task, { foreignKey: "created_by", as: "createdTasks" });

Task.hasMany(Task, { foreignKey: "parent_task_id", as: "subtasks" });
Task.belongsTo(Task, { foreignKey: "parent_task_id", as: "parentTask" });

module.exports = {
  sequelize,
  User,
  Workspace,
  WorkspaceMember,
  Project,
  Task,
};