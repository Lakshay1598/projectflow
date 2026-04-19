const sequelize = require("../config/database");
const User = require("./User");

// all future models get imported here
// const Workspace = require("./Workspace");
// const Project = require("./Project");

module.exports = {
  sequelize,
  User,
};