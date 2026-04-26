const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const authRoutes = require("./routes/auth");
const workspaceRoutes = require("./routes/workspace");
const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/workspaces", workspaceRoutes);
app.use("/workspaces/:workspaceId/projects", projectRoutes);
app.use("/workspaces/:workspaceId/projects/:projectId/tasks", taskRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hey, there! API is working!" });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully!");
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("Models synced to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  });
