const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hey, there! API is working!" });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  });
