const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TaskHistory = sequelize.define("TaskHistory", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  changed_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  field_changed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  old_value: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  new_value: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
},
{
  timestamps: true,
}
);

module.exports = TaskHistory;