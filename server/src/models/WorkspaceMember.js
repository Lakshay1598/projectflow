const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WorkspaceMember = sequelize.define("WorkspaceMember", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  workspace_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("admin", "member"),
    defaultValue: "member",
  },
},
{
  timestamps: true,
}
);

module.exports = WorkspaceMember;