const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Workspace = sequelize.define("Workspace", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  logo_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  color_theme: {
    type: DataTypes.STRING,
    defaultValue: "#3B82F6",
  },
  privacy: {
    type: DataTypes.ENUM("public", "private"),
    defaultValue: "private",
  },
  default_role: {
    type: DataTypes.ENUM("admin", "member"),
    defaultValue: "member",
  },
  plan: {
    type: DataTypes.ENUM("free", "pro", "enterprise"),
    defaultValue: "free",
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
{
  timestamps: true,
}
);

module.exports = Workspace;